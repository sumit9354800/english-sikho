import React, { useState, useEffect, useMemo } from 'react';
import { User } from 'firebase/auth';
import { PARTS_OVERVIEW, INITIAL_CHAPTERS } from './data/curriculum';
import { Chapter } from './types';
import {
  initFirebaseAuth,
  signInWithGooglePopup,
  signOutUser,
  getAccessToken,
} from './services/firebase';
import { exportChapterToGoogleDoc } from './services/googleDocs';
import { Sidebar } from './components/Sidebar';
import { ChapterView } from './components/ChapterView';
import { GoogleDocsModal } from './components/GoogleDocsModal';
import { DnaExplorerModal } from './components/DnaExplorerModal';
import { StudyTimerModal } from './components/StudyTimerModal';
import {
  Search,
  Layers,
  Sparkles,
  Menu,
  ChevronRight,
  Clock,
  FileText,
  Printer,
  CheckCircle2,
} from 'lucide-react';

export default function App() {
  // Auth state
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Curriculum & Chapter state
  const [chapters] = useState<Chapter[]>(INITIAL_CHAPTERS);
  const [activeChapterId, setActiveChapterId] = useState<string>('ch-145');

  // Sidebar toggle state (closed by default so only toggle is visible on side)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Mastered chapters tracking
  const [completedChapterIds, setCompletedChapterIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('english_engine_mastered');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);
  const [isDnaModalOpen, setIsDnaModalOpen] = useState(false);
  const [isStudyTimerOpen, setIsStudyTimerOpen] = useState(false);

  // Google Docs export feedback per chapter
  const [isExportingDocs, setIsExportingDocs] = useState(false);
  const [exportedDocUrls, setExportedDocUrls] = useState<Record<string, string>>({});

  // Initialize Firebase Auth listener
  useEffect(() => {
    const unsubscribe = initFirebaseAuth(
      (user) => {
        setCurrentUser(user);
      },
      (token) => {
        setAccessToken(token);
      }
    );

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // Persist mastered chapters to localStorage
  const handleToggleMastered = (chapterId: string) => {
    setCompletedChapterIds((prev) => {
      const next = prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId];
      try {
        localStorage.setItem('english_engine_mastered', JSON.stringify(next));
      } catch (e) {
        // ignore storage errors
      }
      return next;
    });
  };

  // Google Auth actions
  const handleSignIn = async () => {
    try {
      await signInWithGooglePopup();
    } catch (err: any) {
      console.warn('Google Sign-in failed:', err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      setAccessToken(null);
      setCurrentUser(null);
    } catch (err) {
      console.warn('Sign out error:', err);
    }
  };

  // Export current chapter to Google Docs
  const handleExportChapter = async (chapter: Chapter) => {
    const token = accessToken || getAccessToken();
    if (!token) {
      // Prompt user to sign in
      setIsDocsModalOpen(true);
      return;
    }

    setIsExportingDocs(true);
    try {
      const result = await exportChapterToGoogleDoc(chapter, token);
      setExportedDocUrls((prev) => ({ ...prev, [chapter.id]: result.url }));
    } catch (err: any) {
      alert(`Export to Google Docs failed: ${err?.message || 'Unknown error'}`);
    } finally {
      setIsExportingDocs(false);
    }
  };

  // Filtered chapters for search
  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return chapters;
    const q = searchQuery.toLowerCase();
    return chapters.filter(
      (ch) =>
        ch.title.toLowerCase().includes(q) ||
        ch.subtitle.toLowerCase().includes(q) ||
        ch.dna.coreConcept.toLowerCase().includes(q) ||
        ch.pattern.formula.toLowerCase().includes(q) ||
        ch.basicExamples.some((ex) => ex.text.toLowerCase().includes(q)) ||
        ch.softwareEngineeringExamples.some((ex) => ex.text.toLowerCase().includes(q))
    );
  }, [chapters, searchQuery]);

  // Current active chapter
  const currentChapter = useMemo(() => {
    return chapters.find((c) => c.id === activeChapterId) || chapters[0];
  }, [chapters, activeChapterId]);

  // Adjacent chapters for navigation
  const currentIndex = chapters.findIndex((c) => c.id === activeChapterId);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* ─────────────────────────────────────────────────────────────
          STICKY TOP NAVIGATION HEADER (With Perfect Hamburger Toggle)
      ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 bg-slate-900/95 text-slate-100 border-b border-slate-800 shadow-md backdrop-blur-md px-3 sm:px-6 py-2 flex items-center justify-between no-print">
        {/* Left: Perfect Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <button
            id="floating-curriculum-toggle"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="group flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700/90 hover:border-amber-500/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer shadow-sm active:scale-95"
            title={isSidebarOpen ? 'Close Curriculum Index (Esc)' : 'Open Curriculum Index (16 Parts, 150 Chapters)'}
            aria-label={isSidebarOpen ? 'Close Curriculum Index' : 'Open Curriculum Index'}
          >
            {/* Authentic 3-Bar Hamburger Icon */}
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              <Menu className="w-4 h-4 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 leading-tight flex items-center gap-1.5">
                Curriculum
                <span className="px-1.5 py-0.2 bg-amber-500/20 text-amber-300 rounded text-[9px] font-mono border border-amber-500/30">
                  16 Parts
                </span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono leading-tight">
                150 Lessons • {completedChapterIds.length} Mastered
              </span>
            </div>
            <ChevronRight className={`w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-transform ${isSidebarOpen ? 'rotate-90' : 'group-hover:translate-x-0.5'}`} />
          </button>

          {/* Current Chapter Indicator (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400 pl-3 border-l border-slate-800">
            <span className="font-semibold text-slate-200 max-w-xs truncate">
              Ch {currentChapter.chapterNumber}: {currentChapter.title}
            </span>
            <span className="text-[10px] px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded font-mono font-medium">
              Part {currentChapter.partNumber}
            </span>
          </div>
        </div>

        {/* Center: Brand Identity */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-xs sm:text-sm tracking-tight text-white uppercase">
            The English Engine
          </span>
        </div>

        {/* Right: Quick Tools */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Study Timer Quick Button */}
          <button
            onClick={() => setIsStudyTimerOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition cursor-pointer"
            title="Study Timer & Focus Protocol"
          >
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Timer</span>
          </button>

          {/* DNA Explorer Quick Button */}
          <button
            onClick={() => setIsDnaModalOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition cursor-pointer"
            title="Sentence DNA Architecture Explorer"
          >
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden md:inline">DNA Explorer</span>
          </button>

          {/* Google Docs Sync */}
          <button
            onClick={() => setIsDocsModalOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition cursor-pointer"
            title="Google Docs Sync"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden md:inline">Docs</span>
          </button>

          {/* Print Button */}
          <button
            onClick={() => window.print()}
            className="p-1.5 sm:px-2 sm:py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            title="Print or Save PDF"
          >
            <Printer className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          CURRICULUM DRAWER SIDEBAR
      ───────────────────────────────────────────────────────────── */}
      <Sidebar
        parts={PARTS_OVERVIEW}
        chapters={filteredChapters}
        activeChapterId={activeChapterId}
        onSelectChapter={(id) => {
          setActiveChapterId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        completedChapterIds={completedChapterIds}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenStudyTimer={() => setIsStudyTimerOpen(true)}
        onOpenDnaExplorer={() => setIsDnaModalOpen(true)}
        onOpenDocsModal={() => setIsDocsModalOpen(true)}
        onPrint={() => window.print()}
      />

      {/* ─────────────────────────────────────────────────────────────
          MAIN BODY: CHAPTER WORKSPACE
      ───────────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto">
        {/* Right Main Stage: Publication Grade Chapter */}
        <main className="flex-1 min-w-0 bg-white border-x border-slate-200 shadow-2xs print-full-width">
          {searchQuery && filteredChapters.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <Search className="w-8 h-8 text-slate-400 mx-auto" />
              <h3 className="font-bold text-slate-800 text-lg">No lessons found</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                No chapters matched "{searchQuery}". Try searching for words like "BE", "GET", "TAKE", or "state".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            <ChapterView
              chapter={currentChapter}
              onExportToDocs={handleExportChapter}
              isExportingDocs={isExportingDocs}
              exportedDocUrl={exportedDocUrls[currentChapter.id] || null}
              isMastered={completedChapterIds.includes(currentChapter.id)}
              onToggleMastered={() => handleToggleMastered(currentChapter.id)}
              onSelectChapter={(id) => {
                setActiveChapterId(id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              prevChapterId={prevChapter ? prevChapter.id : null}
              nextChapterId={nextChapter ? nextChapter.id : null}
              hasDocsAuth={Boolean(accessToken)}
              onPromptDocsSignIn={() => setIsDocsModalOpen(true)}
            />
          )}
        </main>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MODALS & OVERLAYS
      ───────────────────────────────────────────────────────────── */}
      <GoogleDocsModal
        isOpen={isDocsModalOpen}
        onClose={() => setIsDocsModalOpen(false)}
        currentUser={currentUser}
        accessToken={accessToken}
        currentChapter={currentChapter}
        onSignIn={handleSignIn}
      />

      <DnaExplorerModal
        isOpen={isDnaModalOpen}
        onClose={() => setIsDnaModalOpen(false)}
      />

      <StudyTimerModal
        isOpen={isStudyTimerOpen}
        onClose={() => setIsStudyTimerOpen(false)}
        accessToken={accessToken}
        onPromptSignIn={() => setIsDocsModalOpen(true)}
      />
    </div>
  );
}
