/**
 * Enterprise-grade Text-to-Speech and Speech Recognition Engine
 * Handles known Chromium/WebKit bugs:
 * 1. Garbage collection killing SpeechSynthesisUtterance mid-speech
 * 2. Synchronous cancel() followed by speak() freezing audio queue
 * 3. 15-second timeout audio cutoff in Chrome
 * 4. Asynchronous voice list population (onvoiceschanged)
 * 5. Stuck paused states in browser tab
 */

// Module-level state to prevent Garbage Collection during playback
let activeUtterances: SpeechSynthesisUtterance[] = [];
let heartbeatInterval: any = null;
let currentResolve: (() => void) | null = null;
let cachedVoices: SpeechSynthesisVoice[] = [];

// User preferences (persisted in localStorage if available)
let currentRate: number = 0.95;
let currentAccent: 'us' | 'uk' | 'in' | 'default' = 'us';

if (typeof window !== 'undefined') {
  try {
    const savedRate = localStorage.getItem('english_engine_speech_rate');
    if (savedRate) currentRate = parseFloat(savedRate) || 0.95;

    const savedAccent = localStorage.getItem('english_engine_speech_accent');
    if (savedAccent && ['us', 'uk', 'in', 'default'].includes(savedAccent)) {
      currentAccent = savedAccent as any;
    }
  } catch (e) {
    // Ignore storage errors
  }

  // Preload voices
  if ('speechSynthesis' in window) {
    cachedVoices = window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoices = window.speechSynthesis.getVoices();
    };
  }
}

export function getAudioRate(): number {
  return currentRate;
}

export function setAudioRate(rate: number) {
  currentRate = Math.max(0.6, Math.min(1.5, rate));
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('english_engine_speech_rate', currentRate.toString());
    } catch (e) {}
  }
}

export function getPreferredAccent(): 'us' | 'uk' | 'in' | 'default' {
  return currentAccent;
}

export function setPreferredAccent(accent: 'us' | 'uk' | 'in' | 'default') {
  currentAccent = accent;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('english_engine_speech_accent', accent);
    } catch (e) {}
  }
}

/**
 * Strips markdown symbols, phonetic brackets, and emojis to produce natural speech.
 */
export function cleanTextForSpeech(rawText: string): string {
  if (!rawText) return '';
  return rawText
    .replace(/^["']|["']$/g, '') // remove surrounding quotes
    .replace(/[*_~`#]/g, '') // remove markdown symbols
    .replace(/\[\/?.*?\]/g, '') // remove bracketed tags like [S], [V]
    .replace(/\(.*?\)/g, (match) => {
      // Keep short clarifications, remove pronunciation slashes
      if (match.includes('/') || match.length > 30) return '';
      return match;
    })
    .replace(/\/{1,2}[a-zA-Zəɪʊʌæɑɒɔeɪaɪɔɪɪəeəʊə\s:ˈˌ.]+\/{1,2}/g, '') // remove IPA slashes
    .replace(/[\u{1F600}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F300}-\u{1F5FF}\u{1F900}-\u{1F9FF}]/gu, '') // remove emojis
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Finds the highest quality voice based on the selected accent preference.
 */
function findBestVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  let voices = cachedVoices;
  if (!voices || voices.length === 0) {
    voices = window.speechSynthesis.getVoices();
    cachedVoices = voices;
  }
  if (!voices || voices.length === 0) return null;

  const englishVoices = voices.filter((v) => v.lang.startsWith('en'));
  if (englishVoices.length === 0) return voices[0] || null;

  // Filter based on preferred accent
  let targetVoices = englishVoices;
  if (currentAccent === 'us') {
    targetVoices = englishVoices.filter((v) => v.lang.includes('US') || v.lang === 'en-US');
  } else if (currentAccent === 'uk') {
    targetVoices = englishVoices.filter((v) => v.lang.includes('GB') || v.lang === 'en-GB');
  } else if (currentAccent === 'in') {
    targetVoices = englishVoices.filter((v) => v.lang.includes('IN') || v.lang === 'en-IN');
  }

  if (targetVoices.length === 0) targetVoices = englishVoices;

  // Prioritize high quality / natural voices
  const preferredVoice =
    targetVoices.find((v) => v.name.includes('Natural') || v.name.includes('Online')) ||
    targetVoices.find((v) => v.name.includes('Google')) ||
    targetVoices.find((v) => v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Karen') || v.name.includes('Victoria')) ||
    targetVoices[0];

  return preferredVoice || englishVoices[0];
}

/**
 * Splits long text into natural sentence chunks to prevent Chrome's 15s audio cutoff.
 */
function splitIntoSentenceChunks(text: string): string[] {
  const cleaned = cleanTextForSpeech(text);
  if (!cleaned) return [];
  if (cleaned.length <= 140) return [cleaned];

  // Split on sentence boundaries: punctuation followed by space
  const rawChunks = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [cleaned];
  const chunks: string[] = [];

  for (const chunk of rawChunks) {
    const trimmed = chunk.trim();
    if (trimmed.length > 0) {
      chunks.push(trimmed);
    }
  }

  return chunks.length > 0 ? chunks : [cleaned];
}

/**
 * Plays native speech with automatic chunking, error recovery, and GC leak prevention.
 */
export function playNativeAudio(text: string, customRate?: number): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported on this browser.');
      resolve();
      return;
    }

    // Stop any ongoing speech and cleanup
    stopAudio();

    const chunks = splitIntoSentenceChunks(text);
    if (chunks.length === 0) {
      resolve();
      return;
    }

    currentResolve = resolve;
    const voice = findBestVoice();
    const rateToUse = customRate ?? currentRate;

    // Build utterances
    activeUtterances = chunks.map((chunk, index) => {
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.rate = rateToUse;
      utterance.pitch = 1.0;
      utterance.lang = voice ? voice.lang : (currentAccent === 'uk' ? 'en-GB' : currentAccent === 'in' ? 'en-IN' : 'en-US');
      if (voice) {
        utterance.voice = voice;
      }

      // Chain chunks or finish on the last one
      if (index === chunks.length - 1) {
        utterance.onend = () => {
          cleanup();
          resolve();
        };
      }

      utterance.onerror = (e) => {
        // 'canceled' or 'interrupted' is expected when user clicks another sentence or stop
        cleanup();
        resolve();
      };

      return utterance;
    });

    // Start heartbeat to prevent Chrome from pausing speech synthesis
    if (heartbeatInterval) clearInterval(heartbeatInterval);
    heartbeatInterval = setInterval(() => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        if (window.speechSynthesis.speaking && window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      }
    }, 250);

    // CRITICAL: Brief delay before calling speak() to allow previous cancel() to settle in Chrome/Safari
    setTimeout(() => {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        activeUtterances.forEach((u) => {
          window.speechSynthesis.speak(u);
        });
      } catch (err) {
        console.warn('SpeechSynthesis speak failed:', err);
        cleanup();
        resolve();
      }
    }, 40);
  });
}

function cleanup() {
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval);
    heartbeatInterval = null;
  }
  activeUtterances = [];
  currentResolve = null;
}

/**
 * Stops any playing audio immediately.
 */
export function stopAudio() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
  if (currentResolve) {
    currentResolve();
  }
  cleanup();
}

/**
 * Speech Recognition Hook / Utility for Loud Speaking Practice
 */
export function createSpeechRecognizer(
  onTranscript: (text: string, isFinal: boolean) => void,
  onError: (error: string) => void
) {
  if (typeof window === 'undefined') return null;

  const SpeechRecognition =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.onresult = (event: any) => {
    let interim = '';
    let final = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final += event.results[i][0].transcript;
      } else {
        interim += event.results[i][0].transcript;
      }
    }

    onTranscript(final || interim, Boolean(final));
  };

  recognition.onerror = (event: any) => {
    console.warn('Speech recognition error:', event.error);
    onError(event.error);
  };

  return recognition;
}
