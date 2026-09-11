import React from 'react';
import { User } from 'firebase/auth';
import {
  BookOpen,
  Printer,
  FileText,
  Clock,
  Sparkles,
  Search,
  CheckCircle2,
  ExternalLink,
  LogOut,
  User as UserIcon,
} from 'lucide-react';

interface NavbarProps {
  currentUser: User | null;
  hasDocsAuth: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
  onOpenDocsModal: () => void;
  onOpenStudyTimer: () => void;
  onOpenDnaExplorer: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  completedChapterIds: string[];
  totalChaptersCount: number;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  hasDocsAuth,
  onSignIn,
  onSignOut,
  onOpenDocsModal,
  onOpenStudyTimer,
  onOpenDnaExplorer,
  searchQuery,
  onSearchChange,
  completedChapterIds,
  totalChaptersCount,
  isSidebarOpen,
  onToggleSidebar,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const progressPercent = Math.round((completedChapterIds.length / totalChaptersCount) * 100);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 text-slate-100 backdrop-blur border-b border-slate-800 px-4 lg:px-8 py-3 transition-colors no-print">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Branding + Sidebar Toggle */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          {/* Toggle Sidebar Button */}
          <button
            id="navbar-sidebar-toggle"
            onClick={onToggleSidebar}
            className={`flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs font-semibold border transition shadow-xs ${
              isSidebarOpen
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                : 'bg-slate-800/90 text-amber-400 hover:bg-slate-800 hover:text-amber-300 border-slate-700/80'
            }`}
            title={isSidebarOpen ? 'Hide Curriculum Sidebar' : 'Open Curriculum Index'}
            aria-label="Toggle Curriculum Index"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Index</span>
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-white text-lg">THE ENGLISH ENGINE</span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-amber-500/20 text-amber-300 rounded border border-amber-500/30">
                  Native Thinking OS
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Mastery System: Hindi-Free Thinking • Technical Fluency • Professional Voice
              </p>
            </div>
          </div>

          {/* Quick Progress Badge on mobile */}
          <div className="md:hidden flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-1 rounded">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{progressPercent}%</span>
          </div>
        </div>

        {/* Center: Search & Explorer tools */}
        <div className="flex items-center gap-2 w-full md:w-auto flex-1 max-w-md mx-0 md:mx-4">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search concepts (e.g., BE vs GET, stand-up, prepositions)..."
              className="w-full bg-slate-800/80 border border-slate-700/80 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Right: Actions and Workspace Auth */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end flex-wrap">
          {/* Study Timer Routine */}
          <button
            onClick={onOpenStudyTimer}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            title="Open Daily Study Protocols (30m, 60m, 90m, 120m)"
          >
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Daily Routine</span>
          </button>

          {/* DNA Matrix Explorer */}
          <button
            onClick={onOpenDnaExplorer}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            title="Browse all 21 Core Verbs and Prepositions DNA"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">DNA Matrix</span>
          </button>

          {/* Print PDF */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            title="Print or Save Book as PDF (Ctrl/Cmd + P)"
          >
            <Printer className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>

          {/* Google Docs Integration */}
          {hasDocsAuth && currentUser ? (
            <div className="flex items-center gap-1 bg-slate-800 border border-slate-700 rounded-lg p-0.5 pl-2">
              <button
                onClick={onOpenDocsModal}
                className="flex items-center gap-2 py-1 pr-2 text-xs font-medium text-slate-200 hover:text-white"
                title="Google Docs connected. Click to manage and export documents."
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="truncate max-w-[110px] hidden md:inline">{currentUser.displayName || currentUser.email?.split('@')[0]}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" title="Connected to Google Docs" />
              </button>
              <button
                onClick={onSignOut}
                className="p-1.5 text-slate-400 hover:text-rose-400 rounded hover:bg-slate-700"
                title="Disconnect Google Docs"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onSignIn}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-white text-slate-800 rounded-lg hover:bg-slate-100 transition shadow-sm border border-slate-300"
              title="Connect with your Google account to export chapters and notes to Google Docs in Google Drive"
            >
              <svg className="w-4 h-4" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              <span>Connect Google Docs</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
