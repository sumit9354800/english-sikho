import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, CheckSquare, Square, Clock, FileText, CheckCircle2 } from 'lucide-react';
import { createStudyNoteDoc } from '../services/googleDocs';

interface StudyPlan {
  id: '30m' | '60m' | '90m' | '120m';
  name: string;
  subtitle: string;
  totalMinutes: number;
  breakdown: { step: string; minutes: number; instruction: string }[];
}

const STUDY_PLANS: StudyPlan[] = [
  {
    id: '30m',
    name: 'The Precision Sprint',
    subtitle: 'High-leverage focus for busy working developers',
    totalMinutes: 30,
    breakdown: [
      { step: 'Concept DNA & Mental Movie', minutes: 10, instruction: 'Visualize the spatial model without Hindi.' },
      { step: '10 Basic & Situational Examples', minutes: 10, instruction: 'Listen to native audio and note patterns.' },
      { step: 'Loud Vocal Speaking Drill', minutes: 10, instruction: 'Say sentences out loud using the speech recorder.' },
    ],
  },
  {
    id: '60m',
    name: 'The Standard Professional Track',
    subtitle: 'Balanced daily progression for workplace fluency',
    totalMinutes: 60,
    breakdown: [
      { step: 'Chapter Blueprint & Formula', minutes: 15, instruction: 'Master syntax breakdown and core DNA.' },
      { step: 'Professional & Dev Context', minutes: 15, instruction: 'Review stand-ups, PRs, and client phrases.' },
      { step: 'Mistake Diagnostics & Contrast Matrix', minutes: 15, instruction: 'Unlearn Indian translation habits.' },
      { step: 'Loud Speaking & Timed Monologues', minutes: 15, instruction: 'Execute the 60s timed speaking challenge.' },
    ],
  },
  {
    id: '90m',
    name: 'The Immersion Accelerator',
    subtitle: 'Deep focus for rapid interview & presentation prep',
    totalMinutes: 90,
    breakdown: [
      { step: 'Engine Deconstruction', minutes: 25, instruction: 'Deep study of linked chapters and prepositions.' },
      { step: 'Technical Writing & Scenario Simulation', minutes: 20, instruction: 'Drafting bug tickets & architecture updates.' },
      { step: 'Spaced Repetition & Recall Drill', minutes: 20, instruction: 'Testing memory with revealed answers.' },
      { step: 'Internal Sub-Vocal Thinking Narration', minutes: 25, instruction: 'Narrating thoughts aloud in pure English.' },
    ],
  },
  {
    id: '120m',
    name: 'The Complete Transformation Bootcamp',
    subtitle: 'Intensive immersion to achieve permanent native flow',
    totalMinutes: 120,
    breakdown: [
      { step: 'Core Engine Synthesis', minutes: 30, instruction: '2 full chapters: DNA, Movie, and Patterns.' },
      { step: 'Software Architecture Discourse', minutes: 30, instruction: 'Explaining system trade-offs and post-mortems.' },
      { step: 'Connected Speech & Cadence Tuning', minutes: 30, instruction: 'Weak forms, reductions, and intonation.' },
      { step: 'High-Stress Roleplay Simulation', minutes: 30, instruction: 'Client pushbacks and mock interview answers.' },
    ],
  },
];

interface StudyTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  accessToken: string | null;
  onPromptSignIn: () => void;
}

export const StudyTimerModal: React.FC<StudyTimerModalProps> = ({
  isOpen,
  onClose,
  accessToken,
  onPromptSignIn,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<'30m' | '60m' | '90m' | '120m'>('30m');
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(30 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [sessionNotes, setSessionNotes] = useState<string>('');
  const [isSavingToDocs, setIsSavingToDocs] = useState<boolean>(false);
  const [savedDocUrl, setSavedDocUrl] = useState<string | null>(null);

  const currentPlan = STUDY_PLANS.find((p) => p.id === selectedPlanId) || STUDY_PLANS[0];

  useEffect(() => {
    // Reset timer when plan changes
    setIsRunning(false);
    setSecondsRemaining(currentPlan.totalMinutes * 60);
    setActiveStepIdx(0);
    setCompletedSteps({});
  }, [selectedPlanId]);

  useEffect(() => {
    let interval: any = null;
    if (isRunning && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsRemaining]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const toggleStepCompleted = (idx: number) => {
    setCompletedSteps((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleSaveToDocs = async () => {
    if (!accessToken) {
      onPromptSignIn();
      return;
    }
    if (!sessionNotes.trim()) {
      alert('Please enter some notes before saving to Google Docs.');
      return;
    }

    setIsSavingToDocs(true);
    try {
      const docTitle = `Study Session: ${currentPlan.name} (${new Date().toLocaleDateString()})`;
      const content = `THE ENGLISH ENGINE - STUDY LOG\nPlan: ${currentPlan.name}\nDate: ${new Date().toLocaleString()}\nCompleted Steps: ${Object.keys(completedSteps).length}/${currentPlan.breakdown.length}\n\nSESSION NOTES & VOCAL PRODUCTION:\n${sessionNotes}\n`;
      const res = await createStudyNoteDoc(docTitle, content, accessToken);
      setSavedDocUrl(res.url);
    } catch (err: any) {
      alert(`Save error: ${err?.message || 'Unknown error'}`);
    } finally {
      setIsSavingToDocs(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs no-print animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-900 text-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Daily Study Protocols</h3>
              <p className="text-xs text-slate-400">
                Cognitive science-backed routines: Concept ──► Pattern ──► Speaking ──► Recall
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Plan Selectors */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2 overflow-x-auto">
          {STUDY_PLANS.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
                selectedPlanId === plan.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>{plan.name}</span>
              <span className="text-[10px] opacity-80">({plan.totalMinutes}m)</span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-slate-700">
          {/* Timer Clock Box */}
          <div className="p-6 rounded-2xl bg-slate-950 text-slate-100 text-center space-y-4 border border-slate-800">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {currentPlan.name} • {currentPlan.subtitle}
            </span>
            <div className="text-5xl sm:text-6xl font-extrabold font-mono text-white tracking-wider">
              {formattedTime}
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition shadow-sm ${
                  isRunning
                    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                }`}
              >
                {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? 'Pause Session' : 'Start Session'}</span>
              </button>

              <button
                onClick={() => {
                  setIsRunning(false);
                  setSecondsRemaining(currentPlan.totalMinutes * 60);
                }}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                title="Reset Timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Routine Steps Checklist */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Protocol Checklist:</h4>
            <div className="space-y-2">
              {currentPlan.breakdown.map((step, idx) => {
                const isDone = Boolean(completedSteps[idx]);

                return (
                  <div
                    key={idx}
                    onClick={() => toggleStepCompleted(idx)}
                    className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start justify-between gap-3 ${
                      isDone
                        ? 'bg-emerald-50/50 border-emerald-300'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-slate-400">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Square className="w-4 h-4" />
                        )}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-semibold text-xs ${
                              isDone ? 'line-through text-slate-400' : 'text-slate-900'
                            }`}
                          >
                            {step.step}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 font-mono">
                            {step.minutes} mins
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{step.instruction}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Session Notes with Google Docs Sync */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Session Notes & Spoken Reflections
              </h4>
              <button
                onClick={handleSaveToDocs}
                disabled={isSavingToDocs}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 transition"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{isSavingToDocs ? 'Saving...' : 'Sync to Google Docs'}</span>
              </button>
            </div>

            <textarea
              value={sessionNotes}
              onChange={(e) => setSessionNotes(e.target.value)}
              placeholder="Jot down the sentences you spoke aloud, tricky prepositions, or notes for tomorrow..."
              rows={3}
              className="w-full p-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500 font-sans"
            />

            {savedDocUrl && (
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 flex items-center justify-between">
                <span>Notes synced to your Google Docs!</span>
                <a
                  href={savedDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline"
                >
                  Open Doc
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
