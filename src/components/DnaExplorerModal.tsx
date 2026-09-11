import React, { useState } from 'react';
import { X, Sparkles, Search, ArrowRight, Brain } from 'lucide-react';

interface DnaEntry {
  engine: string;
  category: 'Core Verbs' | 'Preposition Vectors' | 'Modals' | 'Aspects';
  dnaSummary: string;
  mentalMovie: string;
  pattern: string;
  quickContrast: string;
  codeAnalogy?: string;
}

const DNA_ENTRIES: DnaEntry[] = [
  {
    engine: 'BE (am / is / are / was / were)',
    category: 'Core Verbs',
    dnaSummary: 'Current existence & static identity. Zero motion.',
    mentalMovie: 'A still photograph hanging on a wall.',
    pattern: 'Subject + BE + [State / Adjective / Noun]',
    quickContrast: 'BE = Snapshot (Photo)  vs.  GET = Transformation (Video)',
    codeAnalogy: 'Immutable constant `const status = "ONLINE"`',
  },
  {
    engine: 'GET',
    category: 'Core Verbs',
    dnaSummary: 'State transformation: Before ──► After.',
    mentalMovie: 'A time-lapse video of ice melting into water.',
    pattern: 'GET + Adjective (become) | GET + Noun (obtain) | GET + Place (reach)',
    quickContrast: 'GET = Focus on Result/Change  vs.  TAKE = Focus on Action/Control',
    codeAnalogy: 'State transition function `setState(prev => next)`',
  },
  {
    engine: 'TAKE',
    category: 'Core Verbs',
    dnaSummary: 'Move inward / bring something under your personal control.',
    mentalMovie: 'A hand reaching outward and pulling an object into your grasp.',
    pattern: 'TAKE + Object (take the phone, take notes, take a break)',
    quickContrast: 'TAKE = Bring into control  vs.  HAVE = Already present in your world',
    codeAnalogy: 'Acquiring an exclusive lock `mutex.acquire()`',
  },
  {
    engine: 'HAVE',
    category: 'Core Verbs',
    dnaSummary: 'Something exists inside your current perimeter/world.',
    mentalMovie: 'A circle drawn around you containing your laptop, ideas, problems.',
    pattern: 'HAVE + Noun (I have an interview, I have a doubt ❌ -> question ✅)',
    quickContrast: 'HAVE = Static world enclosure  vs.  GET = New arrival entering world',
    codeAnalogy: 'Object scope containing properties `{ ...world, ideas: [] }`',
  },
  {
    engine: 'MAKE',
    category: 'Core Verbs',
    dnaSummary: 'Creation, transformation of materials, and causing change.',
    mentalMovie: 'A carpenter assembling wood into a chair or forcing a gear to turn.',
    pattern: 'MAKE + Object (create) | MAKE + Someone + Verb (causative force)',
    quickContrast: 'MAKE = Producing a new entity  vs.  DO = Executing an activity',
    codeAnalogy: 'Factory constructor `new Component()`',
  },
  {
    engine: 'DO',
    category: 'Core Verbs',
    dnaSummary: 'General activity, execution, performance, and duty.',
    mentalMovie: 'A robot running a routine task or workout.',
    pattern: 'DO + Action/Duty (do homework, do business, do your best)',
    quickContrast: 'DO = Performing the motion  vs.  MAKE = Constructing the outcome',
    codeAnalogy: 'Task execution `runJob()`',
  },
  {
    engine: 'TO',
    category: 'Preposition Vectors',
    dnaSummary: 'Directional arrow pointing toward a concrete or abstract target.',
    mentalMovie: 'An arrow flying from bow directly into the bullseye.',
    pattern: 'Verb + TO + Target / Destination / Action',
    quickContrast: 'TO = Direction toward target  vs.  FOR = Intended purpose / beneficiary',
    codeAnalogy: 'Route handler pointing to controller `router.get(endpoint)`',
  },
  {
    engine: 'FOR',
    category: 'Preposition Vectors',
    dnaSummary: 'Intended beneficiary, dedicated purpose, or duration allocation.',
    mentalMovie: 'A gift wrapped with someone’s name on the tag.',
    pattern: 'Action / Object + FOR + Beneficiary / Reason / Duration',
    quickContrast: 'FOR = Purpose/Benefit  vs.  TO = Vector target coordinate',
    codeAnalogy: 'Dependency injection container provisioning service for module',
  },
  {
    engine: 'IN',
    category: 'Preposition Vectors',
    dnaSummary: '3D boundary, enclosure, container, or immersion.',
    mentalMovie: 'An apple sitting inside a closed glass cube.',
    pattern: 'IN + Container / Room / Month / Year / State of mind',
    quickContrast: 'IN = 3D Enclosure  vs.  ON = 2D Surface  vs.  AT = Precise Point',
    codeAnalogy: 'Element inside array or set `set.has(item)`',
  },
  {
    engine: 'ON',
    category: 'Preposition Vectors',
    dnaSummary: 'Surface contact, live platform, or operational state.',
    mentalMovie: 'A coin resting on a flat tabletop, or a switch flipped to active.',
    pattern: 'ON + Surface / Platform / Date / Operational topic',
    quickContrast: 'ON = Supported by surface  vs.  IN = Enclosed within perimeter',
    codeAnalogy: 'Event listener mounted on window `window.on("click")`',
  },
  {
    engine: 'AT',
    category: 'Preposition Vectors',
    dnaSummary: 'Specific pinpoint coordinate in space, time, or scale.',
    mentalMovie: 'A single red pushpin on a Google Map or a clock hand at 4:00.',
    pattern: 'AT + Precise Location / Exact Time / Target focus',
    quickContrast: 'AT = Point coordinate  vs.  IN = 3D Space  vs.  ON = 2D Surface',
    codeAnalogy: 'Array index lookup `arr[index]`',
  },
  {
    engine: 'PRESENT PERFECT (have + V3)',
    category: 'Aspects',
    dnaSummary: 'The Golden Bridge: Past action holding vital present relevance.',
    mentalMovie: 'A rope connecting a historical event directly into the room right now.',
    pattern: 'Subject + have/has + V3 (I have lost my keys -> I cannot enter right now)',
    quickContrast: 'Present Perfect = Present consequence  vs.  Past Simple = Dead closed history',
    codeAnalogy: 'Cached computed value whose state affects current UI render',
  },
  {
    engine: 'MODAL SPECTRUM (CAN / SHOULD / MUST)',
    category: 'Modals',
    dnaSummary: 'Calibrating social force, capability, and objective obligation.',
    mentalMovie: 'A dial moving from open capability (CAN) to advice (SHOULD) to law (MUST).',
    pattern: 'Subject + Modal + Base Verb',
    quickContrast: 'MUST = Objective absolute rule  vs.  HAVE TO = External pressure',
    codeAnalogy: 'Permission roles & access control matrices',
  },
];

interface DnaExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DnaExplorerModal: React.FC<DnaExplorerModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const categories = ['All', 'Core Verbs', 'Preposition Vectors', 'Aspects', 'Modals'];

  const filteredEntries = DNA_ENTRIES.filter((entry) => {
    const matchesCategory = activeCategory === 'All' || entry.category === activeCategory;
    const matchesSearch =
      entry.engine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.dnaSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.quickContrast.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs no-print animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-900 text-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">The English DNA Master Matrix</h3>
              <p className="text-xs text-slate-400">
                The predictive conceptual primitives behind every English structure
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

        {/* Filters & Search */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search engine (e.g., GET, FOR)..."
              className="w-full bg-white border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Grid of DNA cards */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredEntries.map((entry, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-white hover:border-amber-300 transition space-y-3 shadow-2xs group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      {entry.category}
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 group-hover:text-amber-900 transition mt-1">
                      {entry.engine}
                    </h4>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="text-slate-900 block mb-0.5">🧬 DNA Core:</strong>
                    {entry.dnaSummary}
                  </div>

                  <div className="p-2.5 bg-indigo-50/50 rounded-lg border border-indigo-100/60">
                    <strong className="text-indigo-950 block mb-0.5">🎬 Mental Movie:</strong>
                    {entry.mentalMovie}
                  </div>

                  <div className="p-2.5 bg-amber-50/50 rounded-lg border border-amber-100/60 font-mono text-[11px] text-amber-950">
                    <strong className="text-amber-900 block mb-0.5 font-sans">⚙️ Formula:</strong>
                    {entry.pattern}
                  </div>

                  <div className="pt-1 text-[11px] text-slate-600">
                    <strong className="text-slate-900">⚖️ Master Contrast:</strong> {entry.quickContrast}
                  </div>

                  {entry.codeAnalogy && (
                    <div className="pt-1 text-[11px] font-mono text-emerald-800 bg-emerald-50/40 p-2 rounded">
                      <strong>💻 Dev Analogy:</strong> {entry.codeAnalogy}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
