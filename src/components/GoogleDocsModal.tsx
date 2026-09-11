import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { Chapter, GoogleDocFile } from '../types';
import {
  exportChapterToGoogleDoc,
  createStudyNoteDoc,
  listUserDocs,
  deleteUserDoc,
} from '../services/googleDocs';
import {
  FileText,
  X,
  ExternalLink,
  Trash2,
  AlertTriangle,
  Plus,
  RefreshCw,
  CheckCircle2,
  FolderOpen,
} from 'lucide-react';

interface GoogleDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  accessToken: string | null;
  currentChapter: Chapter;
  onSignIn: () => void;
}

export const GoogleDocsModal: React.FC<GoogleDocsModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  accessToken,
  currentChapter,
  onSignIn,
}) => {
  const [docsList, setDocsList] = useState<GoogleDocFile[]>([]);
  const [isLoadingDocs, setIsLoadingDocs] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccessMessage, setExportSuccessMessage] = useState<string | null>(null);

  // Custom Note Creation State
  const [customNoteTitle, setCustomNoteTitle] = useState('');
  const [customNoteContent, setCustomNoteContent] = useState('');
  const [isCreatingNote, setIsCreatingNote] = useState(false);

  // Destructive Confirmation Dialog State (Mandatory per Workspace skill guidelines)
  const [docToDelete, setDocToDelete] = useState<GoogleDocFile | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isOpen && accessToken) {
      loadDocs();
    }
  }, [isOpen, accessToken]);

  const loadDocs = async () => {
    if (!accessToken) return;
    setIsLoadingDocs(true);
    try {
      const files = await listUserDocs(accessToken);
      setDocsList(files);
    } catch (err) {
      console.warn('Could not load user docs:', err);
    } finally {
      setIsLoadingDocs(false);
    }
  };

  const handleExportChapter = async () => {
    if (!accessToken) {
      onSignIn();
      return;
    }

    setIsExporting(true);
    setExportSuccessMessage(null);
    try {
      const result = await exportChapterToGoogleDoc(currentChapter, accessToken);
      setExportSuccessMessage(`Chapter ${currentChapter.chapterNumber} exported to Google Docs!`);
      loadDocs();
    } catch (err: any) {
      alert(`Export failed: ${err?.message || 'Unknown error'}`);
    } finally {
      setIsExporting(false);
    }
  };

  const handleCreateCustomNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessToken) {
      onSignIn();
      return;
    }
    if (!customNoteTitle.trim() || !customNoteContent.trim()) {
      alert('Please enter a title and content for your note.');
      return;
    }

    setIsCreatingNote(true);
    try {
      await createStudyNoteDoc(customNoteTitle, customNoteContent, accessToken);
      setCustomNoteTitle('');
      setCustomNoteContent('');
      setExportSuccessMessage('Custom note successfully created in Google Docs!');
      loadDocs();
    } catch (err: any) {
      alert(`Note creation failed: ${err?.message || 'Unknown error'}`);
    } finally {
      setIsCreatingNote(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!docToDelete || !accessToken) return;

    setIsDeleting(true);
    try {
      const success = await deleteUserDoc(docToDelete.id, docToDelete.name, accessToken);
      if (success) {
        setDocsList((prev) => prev.filter((d) => d.id !== docToDelete.id));
        setDocToDelete(null);
      } else {
        alert('Failed to delete file from Google Drive.');
      }
    } catch (err: any) {
      alert(`Delete error: ${err?.message || 'Unknown error'}`);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs no-print animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Google Docs Hub</h3>
              <p className="text-xs text-slate-500">
                Sync chapters, study notes, and exercises directly to your Google Drive
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-slate-700">
          {/* Auth Status Box */}
          {!accessToken ? (
            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl space-y-3 text-center">
              <p className="text-amber-900 font-medium">
                Connect your Google Account to export full chapters and custom study notes to Google Docs.
              </p>
              <button
                onClick={onSignIn}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow transition"
              >
                <FileText className="w-4 h-4" />
                <span>Connect Google Docs</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-800">
                  Signed in as <strong>{currentUser?.email}</strong>
                </span>
              </div>
              <span className="text-blue-800 font-semibold bg-blue-100 px-2 py-0.5 rounded">
                Docs & Drive Enabled
              </span>
            </div>
          )}

          {/* Quick Export Current Chapter */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900">Current Chapter Export</h4>
                <p className="text-xs text-slate-500">
                  Ch {currentChapter.chapterNumber}: {currentChapter.title}
                </p>
              </div>

              <button
                onClick={handleExportChapter}
                disabled={isExporting}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm disabled:opacity-50 transition"
              >
                {isExporting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Creating Doc...</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-3.5 h-3.5" />
                    <span>Export to Google Docs</span>
                  </>
                )}
              </button>
            </div>

            {exportSuccessMessage && (
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-lg text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{exportSuccessMessage}</span>
              </div>
            )}
          </div>

          {/* Create Custom Study Note in Docs */}
          <form onSubmit={handleCreateCustomNote} className="space-y-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 className="font-bold text-slate-900">Save Custom Note to Google Docs</h4>
            <input
              type="text"
              value={customNoteTitle}
              onChange={(e) => setCustomNoteTitle(e.target.value)}
              placeholder="Note Title (e.g., Stand-up Speaking Practice Notes)"
              className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <textarea
              value={customNoteContent}
              onChange={(e) => setCustomNoteContent(e.target.value)}
              placeholder="Your written sentences, vocabulary chunks, or questions to practice..."
              rows={3}
              className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isCreatingNote || !accessToken}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white disabled:opacity-50 transition"
              >
                {isCreatingNote ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Saving Note...</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create Note Document</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* List of Recent Docs */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-slate-600" />
                <h4 className="font-bold text-slate-900 text-sm">Your English Engine Docs</h4>
              </div>
              <button
                onClick={loadDocs}
                disabled={isLoadingDocs || !accessToken}
                className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <RefreshCw className={`w-3 h-3 ${isLoadingDocs ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>

            {isLoadingDocs ? (
              <div className="py-6 text-center text-xs text-slate-400">Loading documents from Drive...</div>
            ) : docsList.length === 0 ? (
              <div className="py-6 text-center text-xs text-slate-400 bg-slate-50 border border-dashed border-slate-200 rounded-xl">
                No Google Docs found yet. Export a chapter above to start your collection!
              </div>
            ) : (
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
                {docsList.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-3 flex items-center justify-between gap-3 hover:bg-slate-50 transition"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileText className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 truncate text-xs">{doc.name}</p>
                        {doc.createdTime && (
                          <p className="text-[10px] text-slate-400">
                            {new Date(doc.createdTime).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <a
                        href={doc.webViewLink || `https://docs.google.com/document/d/${doc.id}/edit`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 text-xs font-semibold flex items-center gap-1"
                        title="Open in Google Docs"
                      >
                        <span>Open</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => setDocToDelete(doc)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                        title="Delete Document"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            EXPLICIT CONFIRMATION MODAL FOR DESTRUCTIVE OPERATION
            (MANDATORY per Workspace Integration Skill)
        ───────────────────────────────────────────────────────────── */}
        {docToDelete && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <div className="bg-white rounded-xl p-5 max-w-sm w-full shadow-2xl border border-rose-200 space-y-4">
              <div className="flex items-center gap-2.5 text-rose-700">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <h4 className="font-bold text-sm">Confirm Document Deletion</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Are you sure you want to delete <strong>"{docToDelete.name}"</strong> from your Google Drive? This action cannot be undone.
              </p>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setDocToDelete(null)}
                  disabled={isDeleting}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  disabled={isDeleting}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-xs"
                >
                  {isDeleting ? 'Deleting...' : 'Delete Document'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
