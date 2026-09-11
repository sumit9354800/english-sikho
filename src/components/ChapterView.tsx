import React, { useState } from 'react';
import { Chapter } from '../types';
import { playNativeAudio, stopAudio, createSpeechRecognizer } from '../utils/audio';
import {
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  CheckCircle2,
  HelpCircle,
  FileText,
  AlertTriangle,
  Code2,
  Brain,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Send,
  Eye,
  EyeOff,
  Check,
  Award,
} from 'lucide-react';

interface ChapterViewProps {
  chapter: Chapter;
  onExportToDocs: (chapter: Chapter) => void;
  isExportingDocs: boolean;
  exportedDocUrl: string | null;
  isMastered: boolean;
  onToggleMastered: () => void;
  onSelectChapter: (id: string) => void;
  prevChapterId: string | null;
  nextChapterId: string | null;
  hasDocsAuth: boolean;
  onPromptDocsSignIn: () => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({
  chapter,
  onExportToDocs,
  isExportingDocs,
  exportedDocUrl,
  isMastered,
  onToggleMastered,
  onSelectChapter,
  prevChapterId,
  nextChapterId,
  hasDocsAuth,
  onPromptDocsSignIn,
}) => {
  const [playingAudioText, setPlayingAudioText] = useState<string | null>(null);

  // Quiz state
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizFeedback, setShowQuizFeedback] = useState<Record<string, boolean>>({});

  // Production practice inputs
  const [practiceResponses, setPracticeResponses] = useState<Record<number, string>>({});
  const [showSampleAnswers, setShowSampleAnswers] = useState<Record<number, boolean>>({});

  // Speaking drill microphone & speech recognition
  const [isRecording, setIsRecording] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState('');
  const [recognizer, setRecognizer] = useState<any>(null);
  const [speakingTimer, setSpeakingTimer] = useState<number | null>(null);
  const [speakingInterval, setSpeakingInterval] = useState<any>(null);

  // Recall test reveal states
  const [revealedRecall, setRevealedRecall] = useState<Record<number, boolean>>({});

  const handlePlayAudio = async (text: string) => {
    if (playingAudioText === text) {
      stopAudio();
      setPlayingAudioText(null);
      return;
    }
    setPlayingAudioText(text);
    await playNativeAudio(text);
    setPlayingAudioText(null);
  };

  const handleStartSpeaking = () => {
    if (isRecording) {
      handleStopSpeaking();
      return;
    }

    setSpokenTranscript('');
    const rec = createSpeechRecognizer(
      (transcript) => {
        setSpokenTranscript(transcript);
      },
      (error) => {
        console.warn('Recognition error:', error);
      }
    );

    if (rec) {
      try {
        rec.start();
        setRecognizer(rec);
        setIsRecording(true);

        // Start countdown timer
        setSpeakingTimer(chapter.speakingDrill.durationSeconds);
        const timer = setInterval(() => {
          setSpeakingTimer((prev) => {
            if (prev === null || prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        setSpeakingInterval(timer);
      } catch (err) {
        console.warn('Speech start error:', err);
      }
    } else {
      alert('Speech Recognition is not supported in this browser. Please try Chrome or Edge.');
    }
  };

  const handleStopSpeaking = () => {
    if (recognizer) {
      try {
        recognizer.stop();
      } catch (e) {
        // ignore
      }
    }
    if (speakingInterval) {
      clearInterval(speakingInterval);
    }
    setIsRecording(false);
  };

  const handleQuizSelect = (exerciseId: string, optionIndex: number) => {
    setSelectedQuizAnswers((prev) => ({ ...prev, [exerciseId]: optionIndex }));
    setShowQuizFeedback((prev) => ({ ...prev, [exerciseId]: true }));
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 lg:py-12 space-y-12 text-slate-800 leading-relaxed">
      {/* ─────────────────────────────────────────────────────────────
          CHAPTER HEADER (Publication Grade)
      ───────────────────────────────────────────────────────────── */}
      <header className="chapter-header border-b border-slate-200 pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wider uppercase text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200/80">
              Part {chapter.partNumber}: {chapter.partTitle}
            </span>
            <span className="font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
              {chapter.level}
            </span>
            <span className="text-slate-500">⏱️ {chapter.readingTimeMinutes} min read</span>
          </div>

          <div className="flex items-center gap-2 no-print">
            {/* Mark as Mastered button */}
            <button
              onClick={onToggleMastered}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
                isMastered
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${isMastered ? 'text-emerald-600' : 'text-slate-400'}`} />
              <span>{isMastered ? 'Mastered' : 'Mark Mastered'}</span>
            </button>

            {/* Google Docs Export button */}
            {hasDocsAuth ? (
              <button
                onClick={() => onExportToDocs(chapter)}
                disabled={isExportingDocs}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm disabled:opacity-50"
                title="Export this entire formatted chapter to your Google Docs"
              >
                {isExportingDocs ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Saving to Docs...</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-3.5 h-3.5" />
                    <span>Export to Google Docs</span>
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={onPromptDocsSignIn}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition"
                title="Sign in with Google to enable Google Docs exports"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>Save in Google Docs</span>
              </button>
            )}
          </div>
        </div>

        {/* Live notification if document was recently exported */}
        {exportedDocUrl && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between text-xs text-blue-900 no-print">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Chapter exported successfully to your Google Docs!</span>
            </div>
            <a
              href={exportedDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-2"
            >
              <span>Open in Google Docs</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        <div className="space-y-2">
          <div className="text-xs font-bold tracking-widest text-slate-600 uppercase">
            Chapter {chapter.chapterNumber}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {chapter.title}
          </h1>
          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            {chapter.subtitle}
          </p>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          1. DNA (PREDICTIVE MENTAL MODEL)
      ───────────────────────────────────────────────────────────── */}
      <section className="dna-box rounded-2xl p-6 sm:p-8 bg-amber-50/50 border border-amber-200/80 space-y-4">
        <div className="flex items-center gap-2.5 text-amber-900">
          <div className="w-8 h-8 rounded-lg bg-amber-200/60 flex items-center justify-center text-amber-800 font-bold">
            🧬
          </div>
          <h2 className="text-lg font-bold tracking-tight">1. Conceptual DNA (Predictive Mental Model)</h2>
        </div>

        <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
          <div className="p-4 bg-white/80 rounded-xl border border-amber-200/60 shadow-xs">
            <span className="font-bold text-slate-900 block mb-1">Core Concept:</span>
            <p className="text-slate-800 font-medium">{chapter.dna.coreConcept}</p>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-amber-900">
              The Mental Model:
            </span>
            <p>{chapter.dna.mentalModel}</p>
          </div>

          <div className="pt-2 border-t border-amber-200/60 space-y-1">
            <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-amber-900">
              Why English Uses This Engine:
            </span>
            <p className="text-slate-600 text-xs sm:text-sm">{chapter.dna.whyEnglishUsesIt}</p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. MENTAL MOVIE (VISUAL SCHEMATIC)
      ───────────────────────────────────────────────────────────── */}
      <section className="movie-box rounded-2xl p-6 sm:p-8 bg-slate-900 text-slate-100 border border-slate-800 space-y-4 shadow-sm">
        <div className="flex items-center gap-2.5 text-slate-100">
          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400 font-bold">
            🎬
          </div>
          <h2 className="text-lg font-bold tracking-tight">2. Mental Movie (Visual Scene & Vector Schematic)</h2>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {chapter.mentalMovie.sceneDescription}
        </p>

        {/* ASCII / Vector schematic block */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs sm:text-sm text-amber-300/90 whitespace-pre-wrap overflow-x-auto leading-normal">
          {chapter.mentalMovie.schematic}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CORE PATTERN & SYNTAX BREAKDOWN
      ───────────────────────────────────────────────────────────── */}
      <section className="pattern-box rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 space-y-5 shadow-xs">
        <div className="flex items-center gap-2.5 text-slate-900">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
            ⚙️
          </div>
          <h2 className="text-lg font-bold tracking-tight">3. Core Syntax Blueprint & Sentence Pattern</h2>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Reusable Formula:
          </div>
          <div className="font-mono text-sm sm:text-base font-bold text-indigo-900">
            {chapter.pattern.formula}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {chapter.pattern.breakdown.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-1">
              <span className="font-mono text-xs font-bold text-indigo-700 block">
                {item.element}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">{item.meaning}</p>
            </div>
          ))}
        </div>

        {chapter.pattern.notes && (
          <p className="text-xs text-slate-500 italic bg-amber-50/60 border-l-2 border-amber-400 p-2.5 rounded-r">
            💡 {chapter.pattern.notes}
          </p>
        )}
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. BASIC EXAMPLES (FOUNDATIONAL DRILLS)
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900">
            <span className="text-xl">📘</span>
            <h2 className="text-lg font-bold tracking-tight">4. Foundational Examples (Listen & Absorb)</h2>
          </div>
          <span className="text-xs text-slate-400 font-medium">10 Core Sentences</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {chapter.basicExamples.map((ex, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition flex items-start justify-between gap-3 shadow-2xs group"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-400 font-bold block">
                  #{idx + 1}
                </span>
                <p className="text-sm font-semibold text-slate-900 group-hover:text-amber-900 transition">
                  "{ex.text}"
                </p>
                <p className="text-xs text-slate-500">{ex.context}</p>
              </div>

              <button
                onClick={() => handlePlayAudio(ex.audioText || ex.text)}
                className={`p-2 rounded-lg transition no-print ${
                  playingAudioText === (ex.audioText || ex.text)
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
                title="Listen to native pronunciation"
              >
                {playingAudioText === (ex.audioText || ex.text) ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. REAL-LIFE SITUATIONAL EXAMPLES
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900">
            <span className="text-xl">🌍</span>
            <h2 className="text-lg font-bold tracking-tight">5. Real-Life Situations & Daily Conversations</h2>
          </div>
          <span className="text-xs text-slate-400 font-medium">Situational Practice</span>
        </div>

        <div className="space-y-2.5">
          {chapter.realLifeExamples.map((ex, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="text-xs font-semibold text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded inline-block">
                  Situation: {ex.situation}
                </div>
                <p className="text-sm font-semibold text-slate-900 pt-1">"{ex.text}"</p>
                <p className="text-xs text-slate-500">Context: {ex.context}</p>
              </div>

              <button
                onClick={() => handlePlayAudio(ex.text)}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition no-print flex-shrink-0"
                title="Listen to audio"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. PROFESSIONAL & WORKPLACE EXAMPLES
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900">
            <span className="text-xl">💼</span>
            <h2 className="text-lg font-bold tracking-tight">6. Professional & Workplace Communication</h2>
          </div>
          <span className="text-xs text-slate-400 font-medium">Corporate & Executive</span>
        </div>

        <div className="space-y-3">
          {chapter.professionalExamples.map((ex, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  Tone: {ex.tone}
                </span>
                <button
                  onClick={() => handlePlayAudio(ex.text)}
                  className="p-1 text-slate-400 hover:text-slate-700 no-print"
                  title="Play audio"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-sm font-semibold text-slate-900 leading-snug">"{ex.text}"</p>
              <p className="text-xs text-slate-500">When to use: {ex.context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. SOFTWARE ENGINEERING & DEVELOPER CONTEXT
      ───────────────────────────────────────────────────────────── */}
      <section className="code-box rounded-2xl p-6 sm:p-8 bg-slate-950 text-slate-100 border border-slate-800 space-y-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 font-bold">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-white">
              7. Software Engineering & Technical English
            </h2>
            <p className="text-xs text-slate-400">
              Direct analogies from JavaScript, React, APIs, and System Design
            </p>
          </div>
        </div>

        <div className="space-y-3.5">
          {chapter.softwareEngineeringExamples.map((ex, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 font-medium">
                  {ex.devContext}
                </span>
                <button
                  onClick={() => handlePlayAudio(ex.text)}
                  className="p-1 text-slate-400 hover:text-white no-print"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-sm font-semibold text-slate-100 font-mono">"{ex.text}"</p>
              <div className="text-xs text-slate-400 pt-1 border-t border-slate-800/80 flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">💡 Analogy:</span>
                <span>{ex.analogy}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. CONTRAST ANALYSIS
      ───────────────────────────────────────────────────────────── */}
      <section className="contrast-table rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 space-y-5 shadow-xs">
        <div className="flex items-center gap-2.5 text-slate-900">
          <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 font-bold">
            ⚖️
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">
              8. Contrast Matrix: {chapter.contrast.conceptA} vs. {chapter.contrast.conceptB}
            </h2>
            <p className="text-xs text-slate-500">
              Side-by-side comparative analysis to eliminate confusing overlaps
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                <th className="p-3 w-1/4">Aspect</th>
                <th className="p-3 w-3/8 text-rose-800">{chapter.contrast.conceptA}</th>
                <th className="p-3 w-3/8 text-emerald-800">{chapter.contrast.conceptB}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {chapter.contrast.differences.map((diff, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-700 align-top">{diff.aspect}</td>
                  <td className="p-3 text-slate-600 align-top bg-rose-50/30">{diff.optionA}</td>
                  <td className="p-3 text-slate-900 align-top bg-emerald-50/30 font-medium">
                    {diff.optionB}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. COMMON LEARNER MISTAKES & INDIAN ENGLISH ROOT CAUSES
      ───────────────────────────────────────────────────────────── */}
      <section className="mistake-box rounded-2xl p-6 sm:p-8 bg-rose-50/40 border border-rose-200 space-y-5">
        <div className="flex items-center gap-2.5 text-rose-950">
          <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-700 font-bold">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">
              9. Common Indian Learner Mistakes & Root-Cause Diagnostics
            </h2>
            <p className="text-xs text-rose-800">
              Why Hindi thought models trigger these errors, and the exact native fix
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {chapter.commonMistakes.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-rose-200 shadow-2xs space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">
                    Mistake #{idx + 1}
                  </span>
                  <p className="text-sm font-semibold text-rose-900 line-through">
                    "{m.learnerError}"
                  </p>
                </div>
                <span className="text-xs text-slate-400 italic">Intended: "{m.likelyIntention}"</span>
              </div>

              <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1">
                <span className="font-bold text-slate-800 block">🔍 Root Cause:</span>
                <p>{m.rootCause}</p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800">
                    ✅ Natural International English:
                  </span>
                  <button
                    onClick={() => handlePlayAudio(m.naturalCorrection)}
                    className="p-1 text-emerald-700 hover:text-emerald-900 no-print"
                    title="Hear native correction"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-sm font-bold text-emerald-950 font-sans">
                  "{m.naturalCorrection}"
                </p>
                <p className="text-[11px] text-emerald-700 font-mono">
                  Cadence: {m.nativeCadence}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. NATIVE INTUITION
      ───────────────────────────────────────────────────────────── */}
      <section className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100 space-y-3">
        <div className="flex items-center gap-2.5 text-indigo-950">
          <Brain className="w-5 h-5 text-indigo-700" />
          <h2 className="text-lg font-bold tracking-tight">10. Native Intuition (The Feeling Behind the Words)</h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed font-medium">
          {chapter.nativeIntuition}
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. PATTERN RECOGNITION (INTERACTIVE QUIZ)
      ───────────────────────────────────────────────────────────── */}
      <section className="rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 space-y-5 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-slate-900">
            <span className="text-xl">🎯</span>
            <h2 className="text-lg font-bold tracking-tight">11. Pattern Recognition Check</h2>
          </div>
          <span className="text-xs text-slate-400">Self-Evaluation</span>
        </div>

        <div className="space-y-6">
          {chapter.patternRecognitionExercises.map((exercise) => {
            const selectedIdx = selectedQuizAnswers[exercise.id];
            const isRevealed = showQuizFeedback[exercise.id];
            const isCorrect = selectedIdx === exercise.correctIndex;

            return (
              <div key={exercise.id} className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">{exercise.prompt}</p>

                <div className="space-y-2">
                  {exercise.options.map((option, optIdx) => {
                    let btnStyle =
                      'bg-white text-slate-700 border-slate-200 hover:border-slate-300';
                    if (isRevealed) {
                      if (optIdx === exercise.correctIndex) {
                        btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                      } else if (selectedIdx === optIdx) {
                        btnStyle = 'bg-rose-50 border-rose-300 text-rose-900';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleQuizSelect(exercise.id, optIdx)}
                        className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{option}</span>
                        {isRevealed && optIdx === exercise.correctIndex && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {isRevealed && (
                  <div
                    className={`p-3 rounded-lg text-xs leading-relaxed ${
                      isCorrect ? 'bg-emerald-100/70 text-emerald-900' : 'bg-amber-100/70 text-amber-900'
                    }`}
                  >
                    <span className="font-bold block mb-0.5">
                      {isCorrect ? '✅ Correct!' : '💡 Explanation:'}
                    </span>
                    {exercise.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          12. PRODUCTION PRACTICE (WRITING & WORKSPACE NOTES)
      ───────────────────────────────────────────────────────────── */}
      <section className="rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 space-y-5 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-slate-900">
            <span className="text-xl">✍️</span>
            <div>
              <h2 className="text-lg font-bold tracking-tight">12. Active Production Practice</h2>
              <p className="text-xs text-slate-500">
                Produce your own sentences using the target engine. Compare with native samples.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {chapter.productionPrompts.map((prompt, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  Scenario #{idx + 1}
                </span>
                <p className="text-sm font-semibold text-slate-900">{prompt.scenario}</p>
                <p className="text-xs text-slate-500 italic">Hint: {prompt.hint}</p>
              </div>

              <textarea
                value={practiceResponses[idx] || ''}
                onChange={(e) =>
                  setPracticeResponses((prev) => ({ ...prev, [idx]: e.target.value }))
                }
                placeholder="Type your English response here..."
                rows={3}
                className="w-full p-3 rounded-lg bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-sans"
              />

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() =>
                    setShowSampleAnswers((prev) => ({ ...prev, [idx]: !prev[idx] }))
                  }
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  {showSampleAnswers[idx] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showSampleAnswers[idx] ? 'Hide Sample Answer' : 'Reveal Sample Answer'}</span>
                </button>
              </div>

              {showSampleAnswers[idx] && (
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-950 space-y-1">
                  <span className="font-bold block text-emerald-900">Native Example:</span>
                  <p className="font-medium text-sm">"{prompt.sampleAnswer}"</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          13. LOUD VOCAL SPEAKING DRILL (WEB SPEECH COACH)
      ───────────────────────────────────────────────────────────── */}
      <section className="speaking-box rounded-2xl p-6 sm:p-8 bg-amber-500/10 border-2 border-amber-500/40 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-amber-950">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-sm">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                13. Loud Speaking Drill (Speak Aloud Now)
              </h2>
              <p className="text-xs text-amber-900 font-medium">
                Mandatory: Move your mouth muscles. Silent reading will not teach you to speak.
              </p>
            </div>
          </div>

          {/* Interactive Speech Recording button */}
          <div className="flex items-center gap-2 no-print">
            <button
              onClick={handleStartSpeaking}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm ${
                isRecording
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
              }`}
            >
              {isRecording ? (
                <>
                  <MicOff className="w-4 h-4" />
                  <span>Stop Recording ({speakingTimer}s)</span>
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4" />
                  <span>Start Voice Check</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl border border-amber-300/80 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
            Vocal Directive:
          </span>
          <p className="text-sm font-semibold text-slate-900">
            {chapter.speakingDrill.vocalInstruction}
          </p>
          <div className="text-xs text-slate-600 pt-2 border-t border-slate-100">
            <strong>Roleplay Scenario:</strong> {chapter.speakingDrill.roleplayPrompt}
          </div>
        </div>

        {/* Live speech feedback if recording */}
        {isRecording && (
          <div className="p-4 bg-slate-950 text-slate-100 rounded-xl border border-slate-800 space-y-2 no-print">
            <div className="flex items-center justify-between text-xs text-amber-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                Listening to your microphone...
              </span>
              <span>Time remaining: {speakingTimer}s</span>
            </div>
            <p className="text-sm font-sans italic text-slate-200 min-h-[30px]">
              {spokenTranscript || 'Speak into your microphone now...'}
            </p>
          </div>
        )}

        {!isRecording && spokenTranscript && (
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300 text-xs text-emerald-950 space-y-1 no-print">
            <span className="font-bold text-emerald-900 block">Your Speech Transcript:</span>
            <p className="text-sm font-medium">"{spokenTranscript}"</p>
          </div>
        )}
      </section>

      {/* ─────────────────────────────────────────────────────────────
          14. RECALL TEST (SPACED REPETITION)
      ───────────────────────────────────────────────────────────── */}
      <section className="rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 space-y-5 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-slate-900">
            <span className="text-xl">🔁</span>
            <h2 className="text-lg font-bold tracking-tight">14. Instant Recall Memory Test</h2>
          </div>
          <span className="text-xs text-slate-400">Spaced Memory Anchor</span>
        </div>

        <div className="space-y-4">
          {chapter.recallTest.map((test, idx) => {
            const isRevealed = revealedRecall[idx];

            return (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900">
                    Q{idx + 1}: {test.question}
                  </p>
                  <button
                    onClick={() =>
                      setRevealedRecall((prev) => ({ ...prev, [idx]: !prev[idx] }))
                    }
                    className="text-xs font-semibold text-amber-700 hover:text-amber-900 no-print flex-shrink-0"
                  >
                    {isRevealed ? 'Hide Answer' : 'Reveal Answer'}
                  </button>
                </div>

                {isRevealed && (
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium">
                    {test.hiddenAnswer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          15. REVISION & MASTERY CHALLENGE
      ───────────────────────────────────────────────────────────── */}
      <footer className="rounded-2xl p-6 sm:p-8 bg-slate-900 text-slate-100 border border-slate-800 space-y-6">
        <div className="flex items-center gap-2 text-amber-400">
          <Award className="w-5 h-5" />
          <h2 className="text-lg font-bold tracking-tight text-white">15. Chapter Mastery Challenge</h2>
        </div>

        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
            The Real-World Quest:
          </span>
          <p className="text-sm text-slate-200 leading-relaxed">
            {chapter.masteryChallenge}
          </p>
        </div>

        <div className="text-xs text-slate-400 border-t border-slate-800 pt-4 flex items-start gap-2">
          <span className="text-slate-300 font-bold">Engine Connection:</span>
          <span>{chapter.revisionConnection}</span>
        </div>

        {/* Previous / Next Chapter Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800 no-print">
          {prevChapterId ? (
            <button
              onClick={() => onSelectChapter(prevChapterId)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Chapter</span>
            </button>
          ) : (
            <div />
          )}

          {nextChapterId && (
            <button
              onClick={() => onSelectChapter(nextChapterId)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-xs font-bold text-slate-950 transition"
            >
              <span>Next Chapter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </footer>
    </article>
  );
};
