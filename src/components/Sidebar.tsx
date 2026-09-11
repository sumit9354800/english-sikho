import React, { useState, useEffect } from 'react';
import { PartOverview, Chapter } from '../types';
import {
  Book,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Circle,
  Clock,
  Layers,
  Sparkles,
  PanelLeftClose,
  Search,
  Printer,
  FileText,
  X,
} from 'lucide-react';

interface SidebarProps {
  parts: PartOverview[];
  chapters: Chapter[];
  activeChapterId: string;
  onSelectChapter: (chapterId: string) => void;
  completedChapterIds: string[];
  isOpen: boolean;
  onClose: () => void;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
  onOpenStudyTimer?: () => void;
  onOpenDnaExplorer?: () => void;
  onOpenDocsModal?: () => void;
  onPrint?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  parts,
  chapters,
  activeChapterId,
  onSelectChapter,
  completedChapterIds,
  isOpen,
  onClose,
  searchQuery = '',
  onSearchChange,
  onOpenStudyTimer,
  onOpenDnaExplorer,
  onOpenDocsModal,
  onPrint,
}) => {
  const [expandedParts, setExpandedParts] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

  // Ensure the active chapter's part is always expanded
  useEffect(() => {
    const activeChapter = chapters.find((ch) => ch.id === activeChapterId);
    if (activeChapter && !expandedParts.includes(activeChapter.partNumber)) {
      setExpandedParts((prev) => [...prev, activeChapter.partNumber]);
    }
  }, [activeChapterId, chapters]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const togglePart = (partNumber: number) => {
    setExpandedParts((prev) =>
      prev.includes(partNumber) ? prev.filter((p) => p !== partNumber) : [...prev, partNumber]
    );
  };

  const getChaptersForPart = (partNumber: number) => {
    return chapters.filter((ch) => ch.partNumber === partNumber);
  };

  return (
    <>
      {/* Dimmed backdrop when sidebar is open */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 transition-opacity duration-300 no-print ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Sidebar Panel */}
      <aside
        id="curriculum-sidebar"
        className={`fixed inset-y-0 left-0 z-50 w-80 sm:w-88 md:w-96 bg-slate-900 text-slate-200 border-r border-slate-800 flex flex-col h-full shadow-2xl transition-transform duration-300 ease-out no-print ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Curriculum Navigation Sidebar"
      >
        {/* Sidebar Header & Controls */}
        <div className="p-4 border-b border-slate-800 bg-slate-900/95 space-y-3">
          {/* Top Row: Title + Progress + Close Button */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold tracking-tight text-white text-xs sm:text-sm truncate">
                  THE ENGLISH ENGINE
                </h3>
                <span className="text-[10px] text-amber-400/90 font-mono block truncate">
                  Native Thinking OS
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[11px] text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded" title="Mastered chapters">
                {completedChapterIds.length}/{chapters.length}
              </span>
              <button
                id="sidebar-close-toggle-btn"
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                title="Hide Sidebar (Esc)"
                aria-label="Close Sidebar"
              >
                <PanelLeftClose className="w-5 h-5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {onSearchChange && (
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search chapters, verbs, rules..."
                className="w-full bg-slate-800/90 border border-slate-700/80 rounded-lg pl-8 pr-7 py-1.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          )}

          {/* Quick Utility Tools */}
          <div className="grid grid-cols-4 gap-1.5">
            {onOpenStudyTimer && (
              <button
                onClick={() => {
                  onOpenStudyTimer();
                  onClose();
                }}
                className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition group text-center cursor-pointer"
                title="Daily Study Routine Protocols"
              >
                <Clock className="w-3.5 h-3.5 text-amber-400 mb-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] truncate max-w-full font-medium">Routine</span>
              </button>
            )}
            {onOpenDnaExplorer && (
              <button
                onClick={() => {
                  onOpenDnaExplorer();
                  onClose();
                }}
                className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition group text-center cursor-pointer"
                title="21 Core Verbs & Prepositions DNA"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 mb-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] truncate max-w-full font-medium">DNA</span>
              </button>
            )}
            {onPrint && (
              <button
                onClick={() => {
                  onPrint();
                }}
                className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition group text-center cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-emerald-400 mb-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] truncate max-w-full font-medium">Print</span>
              </button>
            )}
            {onOpenDocsModal && (
              <button
                onClick={() => {
                  onOpenDocsModal();
                  onClose();
                }}
                className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition group text-center cursor-pointer"
                title="Google Docs Sync & Export"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400 mb-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] truncate max-w-full font-medium">Docs</span>
              </button>
            )}
          </div>
        </div>

        {/* Parts & Chapters List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {parts.map((part) => {
            const partChapters = getChaptersForPart(part.partNumber);
            const isExpanded = expandedParts.includes(part.partNumber);
            const isAvailable = partChapters.length > 0;

            return (
              <div
                key={part.partNumber}
                className="rounded-xl border border-slate-800/80 bg-slate-950/40 overflow-hidden"
              >
                {/* Part Header Accordion */}
                <button
                  onClick={() => togglePart(part.partNumber)}
                  className="w-full flex items-start gap-2.5 p-3 text-left hover:bg-slate-800/50 transition group"
                >
                  <span className="mt-0.5 text-slate-400 group-hover:text-amber-400 transition">
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90">
                        Part {part.partNumber}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                        {part.tier}
                      </span>
                      {!isAvailable && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-950 text-indigo-300">
                          In Roadmap
                        </span>
                      )}
                    </div>
                    <h4 className="text-xs font-semibold text-slate-200 leading-snug group-hover:text-white mt-0.5">
                      {part.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{part.subtitle}</p>
                  </div>
                </button>

                {/* Chapters in this part */}
                {isExpanded && (
                  <div className="border-t border-slate-800/60 bg-slate-900/30 divide-y divide-slate-800/40">
                    {partChapters.length > 0 ? (
                      partChapters.map((chapter) => {
                        const isActive = chapter.id === activeChapterId;
                        const isCompleted = completedChapterIds.includes(chapter.id);

                        return (
                          <button
                            key={chapter.id}
                            onClick={() => {
                              onSelectChapter(chapter.id);
                              onClose();
                            }}
                            className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left text-xs transition relative ${
                              isActive
                                ? 'bg-amber-500/15 text-amber-200 font-medium'
                                : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                            }`}
                          >
                            {/* Active Indicator Bar */}
                            {isActive && (
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400 rounded-r" />
                            )}

                            {/* Completion icon */}
                            <span className="flex-shrink-0">
                              {isCompleted ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Circle className="w-3.5 h-3.5 text-slate-600" />
                              )}
                            </span>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <span className="text-[11px] text-slate-400">
                                  Ch {chapter.chapterNumber}
                                </span>
                                <div className="flex items-center gap-1 text-[10px] text-slate-400">
                                  <Clock className="w-2.5 h-2.5" />
                                  <span>{chapter.readingTimeMinutes}m</span>
                                </div>
                              </div>
                              <p className="truncate font-medium text-xs text-slate-200 mt-0.5">
                                {chapter.title}
                              </p>
                            </div>
                          </button>
                        );
                      })
                    ) : (
                      <div className="p-3 text-[11px] text-slate-400 italic bg-slate-900/40">
                        {part.description}
                        <div className="mt-1 text-[10px] text-amber-400 font-sans">
                          Planned in Phase 2 expansion ({part.chapterIds.length} lessons ready)
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer with quick action */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span className="text-[11px] font-mono">Tip: Press [Esc] to close</span>
          <button
            onClick={onClose}
            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition"
          >
            Hide Sidebar
          </button>
        </div>
      </aside>
    </>
  );
};
