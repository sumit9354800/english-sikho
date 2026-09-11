import { Chapter, PartOverview } from '../types';
import { PART_2_CHAPTERS } from './curriculumPart2';
import { PART_3_CHAPTERS } from './curriculumPart3';
import { PART_4_CHAPTERS } from './curriculumPart4';
import { PART_5_CHAPTERS } from './curriculumPart5';
import { PART_6_CHAPTERS } from './curriculumPart6';
import { PART_7_CHAPTERS } from './curriculumPart7';
import { PART_8_CHAPTERS } from './curriculumPart8';
import { PART_9_CHAPTERS } from './curriculumPart9';
import { PART_10_CHAPTERS } from './curriculumPart10';
import { PART_11_CHAPTERS } from './curriculumPart11';
import { PART_12_CHAPTERS } from './curriculumPart12';
import { PART_13_CHAPTERS } from './curriculumPart13';
import { PART_14_CHAPTERS } from './curriculumPart14';
import { PART_15_CHAPTERS } from './curriculumPart15';
import { PART_16_CHAPTERS } from './curriculumPart16';

export const ALL_PARTS: PartOverview[] = [
  {
    partNumber: 1,
    title: 'English Foundation & The Mental Operating System',
    subtitle: 'Rewiring your cognitive pathways: Leaving Hindi translation behind',
    tier: 'Tier 1',
    description:
      'Understand the architecture of thought: why word-for-word translation creates broken English, how the mental camera operates, and how the core SVO vector powers every English sentence.',
    chapterIds: ['ch-1', 'ch-2', 'ch-3', 'ch-4', 'ch-5', 'ch-6'],
  },
  {
    partNumber: 2,
    title: 'The Core Verb Engines (DNA of Primary Drivers)',
    subtitle: 'Mastering BE, GET, TAKE, HAVE, MAKE, DO, GO, COME, and more',
    tier: 'Tier 1 & Tier 2',
    description:
      'Uncover the predictive conceptual DNA of 21 foundational English verbs. Learn how physical vectors convert into abstract mental models.',
    chapterIds: ['ch-7', 'ch-8', 'ch-9', 'ch-10', 'ch-11', 'ch-12', 'ch-13', 'ch-14'],
  },
  {
    partNumber: 3,
    title: 'The Preposition & Spatial Engine',
    subtitle: 'Navigating TO, FOR, AT, IN, ON, BY, FROM, and 3D vectors',
    tier: 'Tier 2',
    description:
      'Prepositions are spatial geometry, not grammar rules. Discover how physical orientation turns into time, intention, and professional negotiation.',
    chapterIds: ['ch-30', 'ch-31', 'ch-32', 'ch-33', 'ch-34', 'ch-35', 'ch-36', 'ch-37'],
  },
  {
    partNumber: 4,
    title: 'Sentence Construction & Dynamic Patterns',
    subtitle: 'Causatives, Infinitives, Gerunds, and Logical Connectors',
    tier: 'Tier 3',
    description:
      'Master the mechanics of complex multi-clause sentences: MAKE/LET/HAVE/GET, conditionals as decision trees, and adjective clause lenses.',
    chapterIds: ['ch-47', 'ch-48', 'ch-49', 'ch-50', 'ch-51', 'ch-52', 'ch-53'],
  },
  {
    partNumber: 5,
    title: 'The Tense & Aspect Engine',
    subtitle: 'Timelines & Mental Cameras: The 12 Horizons Reimagined',
    tier: 'Tier 3',
    description:
      'Stop memorizing 12 disconnected formulas. Learn how camera angles, completed boundaries, and the Present Perfect bridge control English time.',
    chapterIds: ['ch-57', 'ch-58', 'ch-59', 'ch-60', 'ch-61', 'ch-64', 'ch-65'],
  },
  {
    partNumber: 6,
    title: 'The Modal & Intention Engine',
    subtitle: 'Calibrating Probability, Social Distance, and Obligation',
    tier: 'Tier 4',
    description:
      'Master CAN, COULD, MAY, MIGHT, MUST, SHOULD, WOULD, and the politeness ladder for high-stakes conversations.',
    chapterIds: ['ch-73', 'ch-74', 'ch-75', 'ch-76', 'ch-77', 'ch-78', 'ch-81'],
  },
  {
    partNumber: 7,
    title: 'The Phrasal Verb Engine & Particle Dynamics',
    subtitle: 'Vectors in Motion: UP, DOWN, OUT, IN, OFF, AWAY, and BACK',
    tier: 'Tier 4',
    description:
      'Phrasal verbs are verb drivers plus directional particles. Once you see the particle vector, you can predict hundreds of phrasal meanings instantly.',
    chapterIds: ['ch-83', 'ch-84', 'ch-85', 'ch-86', 'ch-87', 'ch-88', 'ch-91'],
  },
  {
    partNumber: 8,
    title: 'Vocabulary Through Mental Schemas & Collocations',
    subtitle: 'Speaking in prefabricated chunks rather than isolated words',
    tier: 'Tier 4',
    description:
      'Native speakers do not retrieve isolated vocabulary; they deploy collocated chunks and abstract schema engines (Cause, Problem, Solution, Tradeoff).',
    chapterIds: ['ch-93', 'ch-94', 'ch-95', 'ch-96', 'ch-97', 'ch-99'],
  },
  {
    partNumber: 9,
    title: 'The Listening Engine (Connected Speech & Reductions)',
    subtitle: 'Why real spoken English sounds nothing like written text',
    tier: 'Tier 4 & Tier 5',
    description:
      'Deconstruct linking, elisions, weak forms, the schwa vowel, and intonation pitch glides to effortlessly understand rapid native speech.',
    chapterIds: ['ch-100', 'ch-101', 'ch-102', 'ch-103', 'ch-104', 'ch-105'],
  },
  {
    partNumber: 10,
    title: 'The Speaking Production Engine',
    subtitle: 'The 3-Second Rule, Spontaneous Flow, and Verbal Paraphrasing',
    tier: 'Tier 5',
    description:
      'Eliminate hesitation. Learn the PREP framework, conversational repair techniques, and how to keep speaking even when a word is temporarily lost.',
    chapterIds: ['ch-107', 'ch-108', 'ch-109', 'ch-110', 'ch-111', 'ch-113'],
  },
  {
    partNumber: 11,
    title: 'The Writing Engine: Precision, Structure, and Impact',
    subtitle: 'High-leverage emails, Slack communication, and technical prose',
    tier: 'Tier 5',
    description:
      'Write with crisp economy. Structure clear paragraphs, persuasive messages, and succinct executive updates.',
    chapterIds: ['ch-115', 'ch-116', 'ch-117', 'ch-118', 'ch-119', 'ch-120'],
  },
  {
    partNumber: 12,
    title: 'Software Engineering & Technical English',
    subtitle: 'Stand-ups, Pull Requests, Architecture Reviews, and Root-Cause Post-Mortems',
    tier: 'Tier 5 & Tier 6',
    description:
      'Language tailored specifically for developers: discussing latency, APIs, state management, Git conflicts, and non-technical stakeholder updates.',
    chapterIds: ['ch-121', 'ch-122', 'ch-123', 'ch-124', 'ch-125', 'ch-126'],
  },
  {
    partNumber: 13,
    title: 'Professional & Workplace Communication',
    subtitle: 'Leading meetings, managing conflict, negotiating scope, and executive briefings',
    tier: 'Tier 6',
    description:
      'Command the room with calm authority: diplomatic pushbacks, handling interruptions, framing setbacks, and articulating high-value business outcomes.',
    chapterIds: ['ch-127', 'ch-128', 'ch-129', 'ch-130', 'ch-131', 'ch-132'],
  },
  {
    partNumber: 14,
    title: 'Job Interview Mastery for Technical Professionals',
    subtitle: 'Cracking behavioral, technical, and salary negotiation stages',
    tier: 'Tier 6',
    description:
      'The STAR-T framework for explaining flagship projects, articulating career transitions, handling failure questions, and negotiating offers.',
    chapterIds: ['ch-133', 'ch-134', 'ch-135', 'ch-136', 'ch-137', 'ch-138'],
  },
  {
    partNumber: 15,
    title: 'Indian English to Global Workplace English',
    subtitle: 'Polishing regional habits for frictionless international collaboration',
    tier: 'Tier 6 & Tier 7',
    description:
      'Respectful, nuance-focused replacements for "revert back", "preponed", "having a doubt", "do the needful", and archaic formal constructions.',
    chapterIds: ['ch-139', 'ch-140', 'ch-141', 'ch-142', 'ch-143', 'ch-144'],
  },
  {
    partNumber: 16,
    title: 'Direct English Thinking & Permanent Mastery',
    subtitle: 'Eliminating the internal translator: Thought = English',
    tier: 'Tier 7',
    description:
      'The final cognitive transition: internal sub-vocal narration, flow-state speaking, the Master Knowledge Graph, and lifelong self-coaching.',
    chapterIds: ['ch-145', 'ch-146', 'ch-147', 'ch-148', 'ch-149', 'ch-150'],
  },
];

export const PARTS_OVERVIEW: PartOverview[] = ALL_PARTS;

const PART_1_CHAPTERS: Chapter[] = [
  {
    id: 'ch-1',
    partNumber: 1,
    partTitle: 'English Foundation & The Mental Operating System',
    chapterNumber: 1,
    title: 'The Hindi-Translation Trap',
    subtitle: 'Why literal word swapping fails and how to install the English mental compiler',
    level: 'Tier 1',
    readingTimeMinutes: 12,
    dna: {
      coreConcept: 'Bypassing the Intermediate Hindi Translation Pipeline',
      mentalModel:
        'In programming terms: Hindi and English are two distinct compiled runtimes. When you think in Hindi and translate word-by-word into English, you are running an inefficient emulated interpreter with massive memory leaks, high latency, and broken syntax. You must compile directly from Thought (Visual Scene) to Target English Syntax.',
      whyEnglishUsesIt:
        'Hindi is a Subject-Object-Verb (SOV) language where verbs wait until the very end, while English is a Subject-Verb-Object (SVO) forward-thrust engine where the action is declared immediately after the actor. If you wait for the Hindi verb before constructing your sentence, your English cadence will stall.',
    },
    mentalMovie: {
      sceneDescription:
        'Visualize your brain as a studio soundstage. A glass of water falls from the desk and shatters. DO NOT let your mind generate the words "पानी गिर गया". Instead, immediately see the physical vector of downward acceleration and the change of state: The glass fell. Water spilled everywhere.',
      schematic: `
[OLD TRANSLATION TRAP]:
Reality ──> Hindi Thought ("मुझे यह समझ में नहीं आ रहा है")
                 │ (High Latency Word Search)
                 ▼
            Literal English ("To me this understanding not coming is") ❌

[THE ENGLISH ENGINE]:
Reality / Intention ──────────────────────────► English Engine Pattern
  (A concept is unclear)                         "I don't get this." ✅
                                                 "I'm not following." ✅
`,
    },
    pattern: {
      formula: 'SCENE (Actor + Vector) ──> [SUBJECT] + [VERB ENGINE] + [TARGET/RESULT]',
      breakdown: [
        { element: 'SUBJECT', meaning: 'The entity initiating the force or experiencing the state.' },
        { element: 'VERB ENGINE', meaning: 'The immediate action vector (MUST come right after the Subject).' },
        { element: 'OBJECT / RESULT', meaning: 'The destination of the energy or the new state.' },
      ],
      notes:
        'Never hold the verb in your throat while thinking in English. In English, the action is revealed immediately.',
    },
    basicExamples: [
      { text: 'I understand.', context: 'Direct response indicating comprehension.', audioText: 'I understand' },
      { text: "I don't get it.", context: 'Natural conversational alternative to "I am not understanding".', audioText: "I don't get it" },
      { text: 'She called me.', context: 'Subject immediately followed by past action verb.', audioText: 'She called me' },
      { text: 'We missed the bus.', context: 'Direct past event, no passive translation delay.', audioText: 'We missed the bus' },
      { text: 'The battery died.', context: 'Natural subject-verb pairing for a state change.', audioText: 'The battery died' },
      { text: 'I need some help.', context: 'Declaring necessity directly without polite stalling.', audioText: 'I need some help' },
      { text: 'He left early.', context: 'Concise past action.', audioText: 'He left early' },
      { text: 'It makes sense.', context: 'Intuitive expression for logical agreement.', audioText: 'It makes sense' },
      { text: 'I forgot my keys.', context: 'Actor + immediate action + missing item.', audioText: 'I forgot my keys' },
      { text: 'The meeting started.', context: 'Subject + intransitive past verb.', audioText: 'The meeting started' },
    ],
    realLifeExamples: [
      {
        text: 'Sorry, my mind went blank for a second.',
        situation: 'You briefly forgot what you were saying in a conversation.',
        context: 'Social & professional buffer phrase.',
      },
      {
        text: 'Let me grab my charger before we head out.',
        situation: 'Preparing to leave the room.',
        context: 'Using GET/GRAB as immediate forward action.',
      },
      {
        text: 'I ran into Rahul at the coffee shop yesterday.',
        situation: 'Accidental, unplanned encounter with an acquaintance.',
        context: 'Idiomatic physical phrasal verb.',
      },
      {
        text: 'Could you pass me that water bottle?',
        situation: 'Requesting an object at dinner.',
        context: 'Direct physical action verb without roundabout phrasing.',
      },
      {
        text: 'I lost track of time while watching the match.',
        situation: 'Realizing an hour has passed unnoticed.',
        context: 'Natural idiom for temporal distraction.',
      },
      {
        text: 'Traffic was terrible, so I got stuck on the bridge.',
        situation: 'Explaining an arrival delay.',
        context: 'State transition using GET + STUCK.',
      },
      {
        text: 'I will drop you home on my way back.',
        situation: 'Offering a ride to a colleague.',
        context: 'Drop as a directional transfer.',
      },
      {
        text: 'Does this shirt suit me?',
        situation: 'Asking for clothing feedback.',
        context: 'Active verb rather than "Is this shirt looking good on me?".',
      },
      {
        text: 'I have a headache.',
        situation: 'Expressing mild illness.',
        context: 'HAVE for current state inside your world.',
      },
      {
        text: 'Let us wrap this up before 6 PM.',
        situation: 'Ending a casual group discussion.',
        context: 'Phrasal verb WRAP UP for completion.',
      },
    ],
    professionalExamples: [
      {
        text: 'I am not quite following your point on the timeline.',
        context: 'Diplomatically asking a speaker to clarify during a meeting.',
        tone: 'Professional, courteous, and precise.',
      },
      {
        text: 'Let me double-check the figures and get back to you by noon.',
        context: 'Commitment to follow up after verification.',
        tone: 'Accountable and proactive.',
      },
      {
        text: 'We ran into an unexpected dependency during deployment.',
        context: 'Explaining a project hurdle to leadership.',
        tone: 'Objective engineering diagnostic.',
      },
      {
        text: 'Could you elaborate on the business rationale behind this feature?',
        context: 'Asking a product manager for strategic background.',
        tone: 'Constructive inquiry.',
      },
      {
        text: 'I suggest we park this discussion until the metrics come in.',
        context: 'Managing meeting time efficiently.',
        tone: 'Decisive leadership.',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The server threw a 500 error because the connection pool timed out.',
        analogy: 'Cause and effect: Actor (server) -> Verb (threw) -> Object (error) -> Reason (pool timed out).',
        devContext: 'Incident review & error logs.',
      },
      {
        text: 'This component re-renders every time the user keystrokes in the input field.',
        analogy: 'State-driven lifecycle loop.',
        devContext: 'Frontend performance audit in React.',
      },
      {
        text: 'I need to refactor this query to avoid the N+1 problem.',
        analogy: 'Action to eliminate structural inefficiency.',
        devContext: 'Backend database optimization.',
      },
      {
        text: 'The PR has been approved, so I will merge it into main right now.',
        analogy: 'Continuous integration lifecycle transition.',
        devContext: 'Git branch management.',
      },
      {
        text: 'Our cache expired, which caused a sudden spike in database latency.',
        analogy: 'Sequential causal event chain.',
        devContext: 'Production observability and monitoring.',
      },
    ],
    contrast: {
      conceptA: 'Literal Hindi-to-English Translation',
      conceptB: 'Direct English Engine (Mental Movie)',
      differences: [
        {
          aspect: 'Processing Speed',
          optionA: 'Slow (800ms - 2500ms lag due to dictionary lookup)',
          optionB: 'Instantaneous (<300ms reaction from mental image to speech)',
        },
        {
          aspect: 'Sentence Cadence',
          optionA: 'Jerky, fragmented, full of "uhms" while waiting for the Hindi verb',
          optionB: 'Fluid, forward-moving thrust with immediate actor and action',
        },
        {
          aspect: 'Preposition Choice',
          optionA: 'Chaotic (translating "पर" as "on" even for "at night" or "at the door")',
          optionB: 'Spatially accurate based on point, surface, or container',
        },
        {
          aspect: 'Tone & Naturalness',
          optionA: 'Stiff, archaic, or textbook-artificial',
          optionB: 'Idiomatic, contextual, and comfortable in professional environments',
        },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I am having a doubt regarding this API endpoint.',
        likelyIntention: 'I want to ask a question about how this API functions.',
        rootCause:
          'In Hindi, "मुझे एक डाउट है" translates literally to "I am having a doubt". In international English, "doubt" means suspicion or disbelief (e.g., "I doubt he will come"), not a question.',
        naturalCorrection: 'I have a question about this API endpoint.',
        nativeCadence: '"I have a question about..." (Notice the crisp contraction and direct noun).',
      },
      {
        learnerError: 'Please revert back to my email at the earliest.',
        likelyIntention: 'Please reply to my email as soon as you can.',
        rootCause:
          'In Indian workplace English, "revert back" is widely used, but "revert" already means "to return to a previous state", making "back" an unnecessary tautology. Internationally, it sounds bureaucratic and dated.',
        naturalCorrection: 'Please get back to me / reply to this email when you get a chance.',
        nativeCadence: '"Please get back to me as soon as possible."',
      },
      {
        learnerError: 'What is your good name?',
        likelyIntention: 'What is your name? (Polite inquiry).',
        rootCause:
          'Literal translation of Hindi "आपका शुभ नाम क्या है?". In international English, there is no concept of a "good" name vs. a "bad" name.',
        naturalCorrection: 'May I know your name? / What is your name?',
        nativeCadence: '"May I have your name, please?"',
      },
      {
        learnerError: 'Today morning I woke up late.',
        likelyIntention: 'I woke up late this morning.',
        rootCause:
          'Direct translation of "आज सुबह". English requires the demonstrative temporal marker "this morning".',
        naturalCorrection: 'This morning I woke up late.',
        nativeCadence: '"This morning I woke up late."',
      },
    ],
    nativeIntuition:
      'Native speakers do not assemble sentences from grammar rules stored in an encyclopedia. When a native speaker sees someone slip, the visual sensory input triggers the verb "slip" instantly: "Watch out, you might slip!" The sentence is propelled forward by the subject and the immediate action.',
    patternRecognitionExercises: [
      {
        id: 'p-1',
        prompt: 'Which sentence demonstrates direct forward English thrust without Hindi translation residue?',
        options: [
          'Myself Amit and I am having 5 years of software development experience.',
          "I'm Amit, and I have five years of software development experience.",
          'For five years, software development is being done by me.',
          'Amit is my good name and experience is having five years.',
        ],
        correctIndex: 1,
        explanation:
          'Option 2 uses direct subject-verb pairing ("I\'m Amit, and I have...") without the reflexive "Myself" or the continuous "having" error.',
      },
      {
        id: 'p-2',
        prompt: 'How should you naturally communicate that you understand a colleague\'s explanation in a live stand-up?',
        options: [
          'Yes, this is being understood in my mind.',
          'Got it, that makes total sense.',
          'I am understanding your meaning completely.',
          'Understanding has come to me.',
        ],
        correctIndex: 1,
        explanation:
          '"Got it, that makes total sense" uses the rapid GET engine (result achieved) and the natural idiom "makes sense".',
      },
    ],
    productionPrompts: [
      {
        scenario: 'A colleague just explained a bug fix that you did not catch. You want to ask them to repeat the last step.',
        targetPattern: 'Direct forward polite request without "revert" or "doubt".',
        hint: 'Use "Could you walk me through..." or "I missed that last step..."',
        sampleAnswer: "Could you walk me through that last step one more time? I didn't quite catch it.",
      },
      {
        scenario: 'You are giving an update in a daily stand-up and need to say you were delayed by a database migration.',
        targetPattern: 'State transition using GET + past participle.',
        hint: 'Use "I got held up by..." or "The migration blocked me..."',
        sampleAnswer: 'Yesterday I got held up by the database migration, but it is unblocked now.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'STOP READING. Put your phone or mouse down. Stand up straight or sit upright. Say each of the following sentences OUT LOUD three times at normal speaking speed.',
      timedChallenge:
        'Speak continuously for 45 seconds explaining what you worked on yesterday without using the words "doubt", "revert", or "today morning".',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey everyone, quick update from my end. Yesterday I finished refactoring the authentication middleware, and this morning I am reviewing open PRs. No blockers on my side."',
    },
    recallTest: [
      {
        question: 'Why is "I am having a doubt" considered unnatural in global workplace English?',
        hiddenAnswer:
          'Because "doubt" in English denotes skepticism/distrust rather than an inquisitive question, and state verbs like "have" (possess) are not used in the continuous -ing form in this context.',
      },
      {
        question: 'What is the fundamental difference in word order between Hindi and English?',
        hiddenAnswer:
          'Hindi is SOV (Subject-Object-Verb, placing the verb at the very end), while English is SVO (Subject-Verb-Object, firing the verb immediately after the actor).',
      },
    ],
    revisionConnection:
      'Chapter 1 establishes the mental sandbox. In Chapter 2, we build the exact Visual Movie protocol that replaces the internal Hindi voice.',
    masteryChallenge:
      'For the rest of today, whenever you observe a physical action (someone opening a door, coffee brewing, a notification popping up), narrate it in your head immediately as a 3-word English vector (Subject + Verb + Object) without saying a single Hindi word first.',
  },
  {
    id: 'ch-2',
    partNumber: 1,
    partTitle: 'English Foundation & The Mental Operating System',
    chapterNumber: 2,
    title: 'The Mental Movie Protocol',
    subtitle: 'Visualizing Situations Before Words: Installing the Internal Camera',
    level: 'Tier 1',
    readingTimeMinutes: 14,
    dna: {
      coreConcept: 'Sensory Scene Conditioning Over Lexical Assembly',
      mentalModel:
        'Before a word is uttered, your visual cortex generates a 3D simulation. If your simulation triggers a Hindi word label, you lose 1.5 seconds. The Mental Movie Protocol binds English phrases directly to visual sensory triggers.',
      whyEnglishUsesIt:
        'Native speakers think in scenes and feeling-tones, not in alphabetic strings. When someone drops a cup, they do not search their brain for "C-U-P D-R-O-P"; the visual drop immediately activates "Oops, careful!".',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine sitting in a glass control tower. Looking down at your day: keys on the table, laptop opening, coffee steaming. Each physical item has a direct English label attached like a glowing HUD in a sci-fi visor.',
      schematic: `
[VISUAL HUD WIRING]:
  ┌────────────────────────┐
  │ Physical Scene         │ ───► [Direct Neural Link] ───► "The coffee is cooling down."
  │ (Steaming mug on desk) │                                 (NO HINDI INTERMEDIARY)
  └────────────────────────┘
`,
    },
    pattern: {
      formula: '[VISUAL SCENE TRIGGER] ──> [IMMEDIATE PHRASE CHUNK]',
      breakdown: [
        { element: 'Trigger', meaning: 'The real-world situation or sensory perception.' },
        { element: 'Chunk', meaning: 'A 2-to-4 word prefabricated English pattern ready to deploy.' },
      ],
      notes: 'Practice with chunks, not isolated vocabulary words.',
    },
    basicExamples: [
      { text: 'Look at that.', context: 'Directing attention to an object.', audioText: 'Look at that' },
      { text: 'Here you go.', context: 'Handing an item to someone.', audioText: 'Here you go' },
      { text: 'Take your time.', context: 'Relieving pressure on someone making a decision.', audioText: 'Take your time' },
      { text: 'Hold on a second.', context: 'Asking for a brief pause.', audioText: 'Hold on a second' },
      { text: 'Step aside, please.', context: 'Clearing a physical path.', audioText: 'Step aside please' },
      { text: 'Turn it off.', context: 'Extinguishing an appliance or light.', audioText: 'Turn it off' },
      { text: 'Keep it up.', context: 'Encouraging ongoing good effort.', audioText: 'Keep it up' },
      { text: 'Leave it there.', context: 'Instructing where to place an object.', audioText: 'Leave it there' },
      { text: 'Check this out.', context: 'Showing someone something interesting.', audioText: 'Check this out' },
      { text: 'Never mind.', context: 'Dismissing an unimportant issue.', audioText: 'Never mind' },
    ],
    realLifeExamples: [
      {
        text: 'Let me grab my umbrella; it looks like it is about to pour.',
        situation: 'Noticing dark grey clouds outside the window.',
        context: 'Direct visual scene to physical action chunk.',
      },
      {
        text: 'The elevator is out of order, so we will have to take the stairs.',
        situation: 'Seeing an out-of-order sign on the lift doors.',
        context: 'Instant situational deduction.',
      },
      {
        text: 'Could you give me a hand with this heavy carton?',
        situation: 'Struggling to lift a package.',
        context: 'Idiomatic request for physical assistance.',
      },
      {
        text: 'Make sure you lock the balcony door before we leave.',
        situation: 'Double-checking house security.',
        context: 'Preventive instruction chunk.',
      },
      {
        text: 'My phone is about to die; let me switch to audio only.',
        situation: 'Seeing the battery indicator turn red during a call.',
        context: 'Immediate situational pivot.',
      },
    ],
    professionalExamples: [
      {
        text: 'Let us zoom in on the conversion drop-off on page three.',
        context: 'Presenting a slide deck with analytics charts.',
        tone: 'Analytical and focused.',
      },
      {
        text: 'I see where you are coming from, but we have to consider the deadline.',
        context: 'Validating a coworker while maintaining delivery constraints.',
        tone: 'Empathetic and balanced.',
      },
      {
        text: 'We need to streamline this onboarding flow to reduce churn.',
        context: 'Product roadmap discussion.',
        tone: 'Strategic.',
      },
      {
        text: 'Let us touch base tomorrow afternoon once the metrics stabilize.',
        context: 'Scheduling an informal follow-up.',
        tone: 'Collaborative.',
      },
      {
        text: 'That is a fair point; let us take it offline to keep this meeting on schedule.',
        context: 'Meeting moderation when a tangent begins.',
        tone: 'Diplomatic leadership.',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The CPU utilization just spiked to 98% following the traffic surge.',
        analogy: 'Mental camera watching a telemetry graph shoot upward.',
        devContext: 'DevOps incident monitoring.',
      },
      {
        text: 'We have a race condition where the token refresh fires before the redirect completes.',
        analogy: 'Visualizing two asynchronous processes racing each other down a track.',
        devContext: 'Auth architecture debugging.',
      },
      {
        text: 'Let us decouple the notification service from the payment pipeline.',
        analogy: 'Visualizing two connected physical modules being unclipped.',
        devContext: 'Microservices refactoring.',
      },
      {
        text: 'This function has side effects that mutate the parent state object directly.',
        analogy: 'A worker reaching outside their cubicle to paint someone else\'s wall.',
        devContext: 'React immutability inspection.',
      },
      {
        text: 'The webhook payload dropped because the endpoint returned a 404.',
        analogy: 'A parcel falling into a gap because the mailbox was missing.',
        devContext: 'Third-party API integration.',
      },
    ],
    contrast: {
      conceptA: 'Word-by-Word Grammatical Construction',
      conceptB: 'Mental Movie Chunking',
      differences: [
        { aspect: 'Cognitive Load', optionA: 'High: managing subject agreement, prepositions, and tenses manually', optionB: 'Low: deploying a tested multi-word chunk' },
        { aspect: 'Naturalness', optionA: 'Often grammatical but stiff', optionB: 'Authentic native cadence' },
        { aspect: 'Error Rate under Pressure', optionA: 'Skyrockets when stressed or tired', optionB: 'Stable due to motor memory and visual schemas' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I am hearing what you are saying.',
        likelyIntention: 'I understand your perspective.',
        rootCause: 'Translating Hindi "मैं समझ रहा हूँ" via sensory verb instead of conversational chunk.',
        naturalCorrection: 'I hear you / I see what you mean.',
        nativeCadence: '"I see what you mean."',
      },
    ],
    nativeIntuition:
      'When an English speaker speaks, they are painting a picture in real time. They see the timeline, the actors, and the physical vector of movement in their mind, which automatically draws out the correct verbs.',
    patternRecognitionExercises: [
      {
        id: 'p-2-1',
        prompt: 'Which phrase represents a natural situational chunk for inviting someone to speak first in a video call?',
        options: [
          'Please make your speaking start now.',
          'Go ahead, the floor is yours.',
          'Speak your thoughts to me.',
          'I am giving you the permission to talk.',
        ],
        correctIndex: 1,
        explanation: '"Go ahead, the floor is yours" is the universal, natural collaborative chunk.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Your screen share is frozen on a team call. Tell your colleagues without panicking.',
        targetPattern: 'Direct situational chunk.',
        hint: 'Use "Looks like my screen froze..."',
        sampleAnswer: 'Looks like my screen froze for a second. Let me stop sharing and re-share.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS OUT LOUD: "Looks like my screen froze for a second. Let me stop sharing and re-share."',
      timedChallenge: 'Describe the objects around your desk right now in English for 30 seconds straight without pausing.',
      durationSeconds: 30,
      roleplayPrompt: 'Imagine you are explaining a visual diagram to a remote client over Google Meet.',
    },
    recallTest: [
      {
        question: 'What is a lexical chunk, and why does it speed up speech?',
        hiddenAnswer:
          'A lexical chunk is a multi-word sequence stored and retrieved as a single unit by the brain, bypassing grammatical assembly delays.',
      },
    ],
    revisionConnection:
      'In Chapter 3, we take this mental camera and introduce the master structural split in the entire English language: Snapshot vs. Story.',
    masteryChallenge:
      'Narrate your morning routine tomorrow purely in visual chunks out loud while making breakfast or brewing coffee.',
  },
  {
    id: 'ch-3',
    partNumber: 1,
    partTitle: 'English Foundation & The Mental Operating System',
    chapterNumber: 3,
    title: 'Snapshot vs. Story',
    subtitle: 'The Master Distinction: Current State (BE) vs. Action Transformation (GET/CHANGE)',
    level: 'Tier 1',
    readingTimeMinutes: 15,
    dna: {
      coreConcept: 'Static State (Photo) vs. Dynamic Transition (Movie)',
      mentalModel:
        'Everything in English is either a Snapshot (a frozen photograph of identity, state, or possession) or a Story (a video clip of transition, action, or mutation). Confusing these two is the #1 source of unnatural grammar.',
      whyEnglishUsesIt:
        'English uses `BE` (am, is, are, was, were) for frozen snapshots, and `GET`, `BECOME`, or Action Verbs for the dynamic transitions between snapshots. In Hindi, verbs like "होना" blur both concepts, leading learners to confuse state with transition.',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine two monitors side by side. Monitor 1 shows a still photograph of a cold cup of coffee on a table (Snapshot: The coffee IS cold). Monitor 2 shows a time-lapse video of hot coffee losing steam and cooling down over 30 minutes (Story: The coffee GOT cold).',
      schematic: `
[SNAPSHOT = PHOTO (BE)]:
State: [Cold Coffee] ───────────────────────────► "The coffee IS cold." (Current condition)

[STORY = VIDEO (GET/BECOME)]:
State A: [Hot Coffee] ───(Transition)───► State B: [Cold Coffee]
                     "The coffee GOT cold." (Change over time)
`,
    },
    pattern: {
      formula: 'SNAPSHOT: [SUBJECT] + [BE] + [ADJECTIVE / NOUN]  |  STORY: [SUBJECT] + [GET / ACTION] + [ADJECTIVE / RESULT]',
      breakdown: [
        { element: 'BE (am/is/are/was/were)', meaning: 'Photographic state of existence. No motion.' },
        { element: 'GET (got / gets)', meaning: 'State transition from Before to After.' },
      ],
      notes: 'Never use BE when you mean a state transition occurred.',
    },
    basicExamples: [
      { text: 'She is angry.', context: 'Snapshot: Her current emotional state.', audioText: 'She is angry' },
      { text: 'She got angry.', context: 'Story: Something happened and she transitioned into anger.', audioText: 'She got angry' },
      { text: 'The door is open.', context: 'Snapshot: The door is currently in an open position.', audioText: 'The door is open' },
      { text: 'He opened the door.', context: 'Story: An action was performed.', audioText: 'He opened the door' },
      { text: 'I am tired.', context: 'Snapshot: My current physical energy level.', audioText: 'I am tired' },
      { text: 'I got tired after the workout.', context: 'Story: The workout caused a transition to fatigue.', audioText: 'I got tired after the workout' },
      { text: 'The room is dark.', context: 'Snapshot: Current lack of light.', audioText: 'The room is dark' },
      { text: 'It got dark around seven.', context: 'Story: Sunset transition.', audioText: 'It got dark around seven' },
      { text: 'They are married.', context: 'Snapshot: Their current marital status.', audioText: 'They are married' },
      { text: 'They got married last year.', context: 'Story: The wedding event / transition.', audioText: 'They got married last year' },
    ],
    realLifeExamples: [
      {
        text: 'Do not drink that milk; it went bad.',
        situation: 'Milk spoiled in the fridge.',
        context: 'Story: Transition to spoiled state.',
      },
      {
        text: 'My laptop is super slow today.',
        situation: 'Complaining about current performance.',
        context: 'Snapshot: Current state.',
      },
      {
        text: 'My laptop suddenly got slow after the OS update.',
        situation: 'Explaining when the slowdown started.',
        context: 'Story: Causal transition.',
      },
      {
        text: 'Are you ready yet?',
        situation: 'Asking about someone\'s current state of readiness.',
        context: 'Snapshot inquiry.',
      },
      {
        text: 'I will get ready in five minutes.',
        situation: 'Promising the action of preparing.',
        context: 'Story transition.',
      },
    ],
    professionalExamples: [
      {
        text: 'The production pipeline is healthy.',
        context: 'System status report.',
        tone: 'Snapshot: Confident status declaration.',
      },
      {
        text: 'The server got overloaded during the flash sale.',
        context: 'Post-incident analysis.',
        tone: 'Story: Incident transition analysis.',
      },
      {
        text: 'Our team is aligned on the Q3 deliverables.',
        context: 'Executive update.',
        tone: 'Snapshot: Shared consensus.',
      },
      {
        text: 'We got aligned after the sync yesterday.',
        context: 'Explaining how consensus was reached.',
        tone: 'Story: Process outcome.',
      },
      {
        text: 'This client is demanding, but we can manage.',
        context: 'Account evaluation.',
        tone: 'Snapshot: Persistent characteristic.',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The database connection is active.',
        analogy: 'A boolean flag `isConnected === true`. Snapshot state.',
        devContext: 'Connection status check.',
      },
      {
        text: 'The connection timed out after 30 seconds of inactivity.',
        analogy: 'An event trigger firing a state change. Story transition.',
        devContext: 'Error handling in Node.js.',
      },
      {
        text: 'The cache is empty on cold start.',
        analogy: 'Initial state of an unpopulated Redis instance.',
        devContext: 'System architecture design.',
      },
      {
        text: 'The cache got invalidated when the user updated their profile.',
        analogy: 'Mutation hook triggering cache bust.',
        devContext: 'Data consistency pipeline.',
      },
      {
        text: 'The build was successful.',
        analogy: 'Exit code 0 snapshot.',
        devContext: 'CI/CD pipeline report.',
      },
    ],
    contrast: {
      conceptA: 'Snapshot (BE: Current Condition)',
      conceptB: 'Story (GET / ACTION: Transformation)',
      differences: [
        { aspect: 'Verb Used', optionA: 'BE (am / is / are / was / were)', optionB: 'GET (got / gets) or Active verbs' },
        { aspect: 'Time Dimension', optionA: 'Static point in time (frozen photo)', optionB: 'Dynamic vector across time (video clip)' },
        { aspect: 'Focus', optionA: 'What is true right now', optionB: 'What changed from Before to After' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'When I heard the news, I was angry suddenly.',
        likelyIntention: 'Hearing the news caused me to become angry.',
        rootCause: 'Using "was" (static snapshot) instead of "got" (transformation).',
        naturalCorrection: 'When I heard the news, I got angry / I became furious.',
        nativeCadence: '"When I heard the news, I got so angry."',
      },
    ],
    nativeIntuition:
      'When native speakers choose between "is" and "gets", their internal camera switches between taking a photo and recording a reel. If there is movement or change, they instantly drop "is" and grab "gets".',
    patternRecognitionExercises: [
      {
        id: 'p-3-1',
        prompt: 'Which sentence correctly describes a transition rather than a static state?',
        options: [
          'The car is dirty.',
          'The car got dirty on the highway.',
          'The car was in the garage.',
          'The car has four wheels.',
        ],
        correctIndex: 1,
        explanation: '"The car got dirty on the highway" describes the change from clean to dirty.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Explain to your manager that your task was delayed because you were confused by the ticket description.',
        targetPattern: 'Use GET + CONFUSED to describe the transition.',
        hint: 'Say "I got a bit confused because..."',
        sampleAnswer: 'I got a bit confused by the ticket acceptance criteria, but I synced with the product team and clarified it.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'STOP READING. Say aloud 5 pairs contrasting IS vs. GOT (e.g., "He is tired / He got tired"). Notice the mental shift from Photo to Video.',
      timedChallenge: 'Explain a technical problem you solved recently using at least two Snapshots and two Story transitions.',
      durationSeconds: 60,
      roleplayPrompt: '"Hey, the build was broken this morning, but we got it working after updating the npm dependencies."',
    },
    recallTest: [
      {
        question: 'What is the visual difference between "He is ready" and "He got ready"?',
        hiddenAnswer:
          '"He is ready" is a static snapshot of his current prepared state; "He got ready" is the active story/video of him preparing and putting on clothes.',
      },
    ],
    revisionConnection:
      'In Chapter 4, we use this snapshot and story understanding to power the English Word-Order Vector.',
    masteryChallenge:
      'Look at 5 objects around you right now. For each object, say one Snapshot sentence with IS, and one Story sentence with GOT.',
  },
  {
    id: 'ch-4',
    partNumber: 1,
    partTitle: 'English Foundation & The Mental Operating System',
    chapterNumber: 4,
    title: 'The English Word-Order Vector',
    subtitle: 'Who → Does What → To Whom → Where → When → Why → How',
    level: 'Tier 1',
    readingTimeMinutes: 14,
    dna: {
      coreConcept: 'The Forward Dynamic Vector of English Syntax',
      mentalModel:
        'English is an arrow launched from an archer’s bow. The archer is WHO. The arrow’s release is the VERB. The target is WHAT. The surrounding context (Where, When, Why, How) trails behind like feathers on the arrow.',
      whyEnglishUsesIt:
        'Because English does not have rich case endings like Sanskrit or Latin, word order alone determines meaning. "The dog bit the man" is completely different from "The man bit the dog". English relies on strict forward order.',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine an assembly line in a high-tech factory. Box 1: The Operator (Who). Box 2: The Action Stamp (Verb). Box 3: The Finished Product (What). Box 4: The Shipping Label (Where & When). The sequence cannot run backwards.',
      schematic: `
[THE SVO VECTOR]:
[ 1. WHO ] ──► [ 2. DOES WHAT ] ──► [ 3. TO WHOM/WHAT ] ──► [ 4. WHERE ] ──► [ 5. WHEN ] ──► [ 6. WHY ]
  "Priya"          "deployed"              "the code"            "to prod"       "at midnight"     "to fix the bug"
`,
    },
    pattern: {
      formula: 'WHO + VERB + OBJECT + PLACE + TIME + PURPOSE',
      breakdown: [
        { element: 'WHO', meaning: 'The initiator of action' },
        { element: 'VERB', meaning: 'The core kinetic energy' },
        { element: 'OBJECT', meaning: 'The direct receiver of energy' },
        { element: 'PLACE', meaning: 'Spatial anchor (Where)' },
        { element: 'TIME', meaning: 'Temporal anchor (When)' },
        { element: 'PURPOSE', meaning: 'Motivational reason (Why)' },
      ],
      notes: 'Place usually precedes Time in natural English clauses.',
    },
    basicExamples: [
      { text: 'I drank water.', context: 'SVO minimum vector.', audioText: 'I drank water' },
      { text: 'She sent an email.', context: 'Actor + action + communication artifact.', audioText: 'She sent an email' },
      { text: 'We visited the museum yesterday.', context: 'SVO + temporal anchor.', audioText: 'We visited the museum yesterday' },
      { text: 'He bought groceries at the supermarket.', context: 'SVO + spatial anchor.', audioText: 'He bought groceries at the supermarket' },
      { text: 'They built a prototype in two weeks.', context: 'SVO + duration.', audioText: 'They built a prototype in two weeks' },
      { text: 'I called my manager to explain the delay.', context: 'SVO + purpose clause.', audioText: 'I called my manager to explain the delay' },
      { text: 'The teacher answered my question patiently.', context: 'SVO + manner adverb.', audioText: 'The teacher answered my question patiently' },
      { text: 'She baked cookies for the kids.', context: 'SVO + beneficiary.', audioText: 'She baked cookies for the kids' },
      { text: 'We solved the issue quickly.', context: 'SVO + speed.', audioText: 'We solved the issue quickly' },
      { text: 'I left my laptop at work.', context: 'SVO + location.', audioText: 'I left my laptop at work' },
    ],
    realLifeExamples: [
      {
        text: 'I left my keys on the kitchen counter this morning.',
        situation: 'Realizing you forgot something at home.',
        context: 'Who + Action + What + Place + Time.',
      },
      {
        text: 'Can we grab a quick coffee across the street before the sync?',
        situation: 'Inviting a coworker out.',
        context: 'Question form of the vector.',
      },
      {
        text: 'I ordered some groceries online because I had no time to cook.',
        situation: 'Explaining dinner arrangements.',
        context: 'SVO + Purpose/Reason clause.',
      },
    ],
    professionalExamples: [
      {
        text: 'Our engineering team migrated the auth service to AWS last quarter to improve reliability.',
        context: 'Architecture review meeting.',
        tone: 'Executive engineering clarity: Who + Verb + What + Where + When + Why.',
      },
      {
        text: 'We delivered the client milestone two days ahead of schedule.',
        context: 'Project status update.',
        tone: 'Achievement-focused.',
      },
      {
        text: 'I updated the documentation in Confluence so the new hires can onboard faster.',
        context: 'Team collaboration contribution.',
        tone: 'Helpful and structured.',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The script pushes compiled assets to the S3 bucket every time a commit lands on main.',
        analogy: 'Automated CI/CD pipeline vector.',
        devContext: 'Deployment architecture.',
      },
      {
        text: 'The frontend sends an encrypted bearer token in the HTTP authorization header.',
        analogy: 'Client-server handshake vector.',
        devContext: 'API security review.',
      },
      {
        text: 'We throttled inbound requests at the gateway level to mitigate DDoS attacks.',
        analogy: 'Security boundary defense.',
        devContext: 'Site reliability engineering.',
      },
    ],
    contrast: {
      conceptA: 'Hindi Word Order (SOV)',
      conceptB: 'English Word Order (SVO)',
      differences: [
        { aspect: 'Verb Position', optionA: 'Placed at the very end of the sentence', optionB: 'Placed immediately after the Subject' },
        { aspect: 'Clarity Threshold', optionA: 'Listener must wait until the final word to know what happened', optionB: 'Listener knows the action within the first 2 seconds' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'In office yesterday Rahul I met.',
        likelyIntention: 'I met Rahul at the office yesterday.',
        rootCause: 'Mirroring Hindi topicalized word order ("ऑफिस में कल राहुल से मैं मिला").',
        naturalCorrection: 'I met Rahul at the office yesterday.',
        nativeCadence: '"I met Rahul at the office yesterday."',
      },
    ],
    nativeIntuition:
      'Native listeners expect the verb almost instantly. If you spend 10 seconds stacking background details, locations, and adverbs before giving the verb, the listener\'s brain feels uncomfortable suspense.',
    patternRecognitionExercises: [
      {
        id: 'p-4-1',
        prompt: 'Which sentence correctly follows the Place before Time convention?',
        options: [
          'We arrived yesterday at the hotel.',
          'We arrived at the hotel yesterday.',
          'Yesterday at the hotel we were arriving.',
          'At the hotel we arrived yesterday.',
        ],
        correctIndex: 1,
        explanation: 'Standard English puts specific Place ("at the hotel") before Time ("yesterday").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Explain that your team released an emergency patch on Friday night to fix a memory leak.',
        targetPattern: 'Who + Verb + What + When + Why.',
        hint: 'Start with "Our team released..."',
        sampleAnswer: 'Our team released an emergency patch on Friday night to fix a critical memory leak.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'SAY THIS OUT LOUD: "Our team released an emergency patch on Friday night to fix a critical memory leak."',
      timedChallenge: 'Construct 3 sentences out loud following: Who + Did What + Where + When + Why.',
      durationSeconds: 45,
      roleplayPrompt: 'Report a milestone achievement to your engineering lead in one fluid sentence.',
    },
    recallTest: [
      {
        question: 'Between Place and Time, which typically comes first in a standard English sentence?',
        hiddenAnswer: 'Place typically precedes Time (e.g., "in the office yesterday", not "yesterday in the office").',
      },
    ],
    revisionConnection:
      'Now that the forward vector is locked in, Chapter 5 teaches how to invert and query this vector using the Question Engine.',
    masteryChallenge:
      'Take 3 complex things you did this week and express each as a single, perfectly structured 6-part vector sentence.',
  },
  {
    id: 'ch-5',
    partNumber: 1,
    partTitle: 'English Foundation & The Mental Operating System',
    chapterNumber: 5,
    title: 'The Question Engine',
    subtitle: 'Requesting States, Stories, Reasons, and Methods with Precision',
    level: 'Tier 1',
    readingTimeMinutes: 13,
    dna: {
      coreConcept: 'The Information Extraction Coordinate System',
      mentalModel:
        'A question is not an interrogative test; it is an inquiry targeting a specific coordinate in reality. Target the Actor? Use WHO. Target the Action? Use WHAT. Target the Spatial Coordinate? Use WHERE. Target the Reason? Use WHY. Target the Procedure? Use HOW.',
      whyEnglishUsesIt:
        'English inverts the auxiliary verb ("Are you...", "Did you...", "Can you...") to signal to the listener immediately that an answer is expected.',
    },
    mentalMovie: {
      sceneDescription:
        'Visualize a database query builder. The Question Word is your `SELECT` clause (`SELECT place`, `SELECT cause`, `SELECT timestamp`). The auxiliary verb is your index filter.',
      schematic: `
[QUESTION MATRIX]:
Question Word ──► Auxiliary ──► Subject ──► Main Verb ──► Target Info
    WHAT            did           you         do?         (Action query)
    HOW             does          this        work?       (Method query)
    WHY             did           it          fail?       (Root-cause query)
`,
    },
    pattern: {
      formula: '[Q-WORD] + [AUXILIARY: do/does/did/is/are/can] + [SUBJECT] + [BASE VERB]?',
      breakdown: [
        { element: 'Q-WORD', meaning: 'What information you seek (What, When, Where, Why, How, Who)' },
        { element: 'AUXILIARY', meaning: 'Time anchor & signal of question structure' },
        { element: 'SUBJECT', meaning: 'Entity being queried' },
        { element: 'BASE VERB', meaning: 'Core action uninflected' },
      ],
      notes: 'Remember: In past questions with "did", the main verb returns to base form (e.g., "Did you SEE", not "Did you saw").',
    },
    basicExamples: [
      { text: 'What happened?', context: 'Story query: asking for event history.', audioText: 'What happened' },
      { text: 'How is it going?', context: 'State query: asking for condition update.', audioText: 'How is it going' },
      { text: 'Where is the file?', context: 'Location query.', audioText: 'Where is the file' },
      { text: 'When did you arrive?', context: 'Time query with past auxiliary did.', audioText: 'When did you arrive' },
      { text: 'Why did the test fail?', context: 'Causality query.', audioText: 'Why did the test fail' },
      { text: 'Who wrote this function?', context: 'Subject identity query.', audioText: 'Who wrote this function' },
      { text: 'Can you help me?', context: 'Capability / assistance request.', audioText: 'Can you help me' },
      { text: 'Are you ready?', context: 'State snapshot query.', audioText: 'Are you ready' },
      { text: 'Do you have five minutes?', context: 'Availability inquiry.', audioText: 'Do you have five minutes' },
      { text: 'Which approach do you prefer?', context: 'Choice between options.', audioText: 'Which approach do you prefer' },
    ],
    realLifeExamples: [
      {
        text: 'How did you manage to get tickets to the game?',
        situation: 'Curious about a friend\'s success in a sold-out match.',
        context: 'Method + Effort query.',
      },
      {
        text: 'What took you so long?',
        situation: 'Asking a friend why they were delayed.',
        context: 'Friendly informal inquiry.',
      },
      {
        text: 'Where should we meet for lunch?',
        situation: 'Planning an afternoon meetup.',
        context: 'Location consensus.',
      },
    ],
    professionalExamples: [
      {
        text: 'What is the anticipated impact on our Q4 delivery milestones?',
        context: 'Risk assessment query in a planning sync.',
        tone: 'Executive and analytical.',
      },
      {
        text: 'How do you propose we handle data migrations for active tenants?',
        context: 'Architecture challenge question.',
        tone: 'Constructive technical inquiry.',
      },
      {
        text: 'Who is the primary point of contact for this integration?',
        context: 'Cross-functional alignment.',
        tone: 'Clear and operational.',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'How does this caching layer handle stale read requests?',
        analogy: 'Querying system failure modes and concurrency guarantees.',
        devContext: 'Design doc review.',
      },
      {
        text: 'Why are we serializing the payload twice before dispatching the job?',
        analogy: 'Spotting redundant CPU cycles.',
        devContext: 'Code review inquiry.',
      },
      {
        text: 'What happens if the third-party payment gateway times out during checkout?',
        analogy: 'Edge-case boundary verification.',
        devContext: 'QA test scenario definition.',
      },
    ],
    contrast: {
      conceptA: 'HOW (Method / Implementation)',
      conceptB: 'HOW (Current Condition / State)',
      differences: [
        { aspect: 'Example A', optionA: '"How did you build this?" -> Querying architectural process & tools', optionB: '"How is the server doing?" -> Querying current health snapshot' },
        { aspect: 'Underlying Mental Movie', optionA: 'Watching steps executed sequentially', optionB: 'Looking at a diagnostic meter or thermometer' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Why you didn\'t told me earlier?',
        likelyIntention: 'Why did you not tell me sooner?',
        rootCause: 'Double past tense error (didn\'t + told) and missing auxiliary inversion.',
        naturalCorrection: 'Why didn\'t you tell me earlier?',
        nativeCadence: '"Why didn\'t you tell me sooner?"',
      },
      {
        learnerError: 'Where you are going?',
        likelyIntention: 'Where are you going?',
        rootCause: 'Omitting subject-auxiliary inversion in question form.',
        naturalCorrection: 'Where are you going?',
        nativeCadence: '"Where are you heading?"',
      },
    ],
    nativeIntuition:
      'Native speakers hear "Why you did that?" as a flat declaration with a question mark tacked on, which sounds abrupt. Inverting ("Why did you do that?") softens the delivery and creates the natural conversational cadence.',
    patternRecognitionExercises: [
      {
        id: 'p-5-1',
        prompt: 'Which sentence has the grammatically correct past auxiliary structure?',
        options: [
          'Did you checked the logs?',
          'Did you check the logs?',
          'Have you check the logs?',
          'Did you checking the logs?',
        ],
        correctIndex: 1,
        explanation: 'The auxiliary "did" absorbs the past tense; the lexical verb "check" remains in base form.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'In a code review, politely ask an engineer why they chose a specific sorting algorithm.',
        targetPattern: 'Constructive curiosity question using What or Could.',
        hint: 'Use "What led you to choose..." or "Could you share the reasoning behind..."',
        sampleAnswer: 'What led you to choose this sorting algorithm here? Were there specific memory constraints in mind?',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'SAY THIS OUT LOUD: "What led you to choose this architecture? Were there specific latency constraints?"',
      timedChallenge: 'Ask 5 rapid questions in 30 seconds querying different aspects of an imaginary product outage.',
      durationSeconds: 30,
      roleplayPrompt: 'You are the incident commander asking your team for status during a live outage.',
    },
    recallTest: [
      {
        question: 'When using "did" in a question, what form does the main action verb take?',
        hiddenAnswer: 'The main verb must take its base (infinitive without to) form, e.g., "Did you go?", not "Did you went?".',
      },
    ],
    revisionConnection:
      'In Chapter 6, we assemble the complete sentence hierarchy: moving from simple SVO primitives to complex 7-tier master sentences.',
    masteryChallenge:
      'Write down 5 questions you need to ask your team or manager this week, verifying that the auxiliary verb precedes the subject in every one.',
  },
  {
    id: 'ch-6',
    partNumber: 1,
    partTitle: 'English Foundation & The Mental Operating System',
    chapterNumber: 6,
    title: 'The Seven Tiers of Sentence Construction',
    subtitle: 'From Primitive Atoms to Multi-Clause Master Structures',
    level: 'Tier 1',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'Modular Layering of Sentence Complexity',
      mentalModel:
        'A sentence is an onion with 7 concentric layers. You never write a complex sentence by starting with complexity. You start with Tier 1 (Core Subject + Verb) and layer modifiers, clauses, reasons, and conditions on top like adding middleware to an Express app.',
      whyEnglishUsesIt:
        'Layering prevents run-on sentences and syntactic collapse. Native speakers effortlessly chain subordinate clauses because the inner core remains structurally rock solid.',
    },
    mentalMovie: {
      sceneDescription:
        'Visualize 3D building blocks snapping into place. Tier 1 is the granite foundation block. Tiers 2 to 7 are magnetic modular extensions attached securely without destabilizing the foundation.',
      schematic: `
[THE 7-TIER ARCHITECTURE]:
Tier 1: [Core S+V]             "The server crashed"
Tier 2: [+ Direct Object]      "The server crashed the database"
Tier 3: [+ Place & Time]       "...in the Mumbai data center at 3 AM"
Tier 4: [+ Cause / Reason]     "...because of an uncaught memory leak"
Tier 5: [+ Condition]          "...even though we had auto-scaling enabled"
Tier 6: [+ Consequence]        "...forcing the on-call engineer to trigger a manual rollback"
Tier 7: [+ Future Prevention]  "...which prompted us to rewrite the health-check middleware."
`,
    },
    pattern: {
      formula: 'CORE [S+V] ──► +OBJECT ──► +CONTEXT ──► +CAUSE ──► +CONDITION ──► +CONSEQUENCE ──► +OUTLOOK',
      breakdown: [
        { element: 'Tier 1', meaning: 'Subject + Verb (The irreducible kernel)' },
        { element: 'Tier 2', meaning: 'Direct / Indirect Objects' },
        { element: 'Tier 3', meaning: 'Adverbial anchors of Time, Place, and Manner' },
        { element: 'Tier 4', meaning: 'Causal conjunctions (because, since, as, due to)' },
        { element: 'Tier 5', meaning: 'Conditional & Concessive clauses (although, even though, if, unless)' },
        { element: 'Tier 6', meaning: 'Participial consequence phrases (resulting in, leading to, forcing)' },
        { element: 'Tier 7', meaning: 'Relative clauses with broader future scope (which led to, ensuring that)' },
      ],
      notes: 'Mastering Tier 6 and 7 separates intermediate speakers from senior executive communicators.',
    },
    basicExamples: [
      { text: 'I write code.', context: 'Tier 1 & 2 primitive.', audioText: 'I write code' },
      { text: 'I write code every morning at my desk.', context: 'Tier 3: Adding time and location.', audioText: 'I write code every morning at my desk' },
      { text: 'I write code because I love solving hard problems.', context: 'Tier 4: Adding cause.', audioText: 'I write code because I love solving hard problems' },
      { text: 'Even when the deadline is tight, I write clean code.', context: 'Tier 5: Adding concession.', audioText: 'Even when the deadline is tight I write clean code' },
      { text: 'I write modular code, reducing our deployment bugs.', context: 'Tier 6: Adding participial consequence.', audioText: 'I write modular code, reducing our deployment bugs' },
      { text: 'She presented the quarterly report.', context: 'Tier 2 SVO.', audioText: 'She presented the quarterly report' },
      { text: 'She presented the report clearly in the boardroom yesterday.', context: 'Tier 3 context expansion.', audioText: 'She presented the report clearly in the boardroom yesterday' },
      { text: 'They paused the rollout to investigate the latency spike.', context: 'Tier 4 purpose expansion.', audioText: 'They paused the rollout to investigate the latency spike' },
      { text: 'Although the team was tired, they shipped on time.', context: 'Tier 5 concessive contrast.', audioText: 'Although the team was tired, they shipped on time' },
      { text: 'We refactored the database queries, cutting response times by half.', context: 'Tier 6 impact statement.', audioText: 'We refactored the database queries, cutting response times by half' },
    ],
    realLifeExamples: [
      {
        text: 'I decided to skip the party tonight because I have an early flight tomorrow, which means I should start packing right now.',
        situation: 'Explaining personal plans to friends.',
        context: 'Layered Tiers 1 through 7 in daily speech.',
      },
      {
        text: 'Although we got stuck in heavy traffic on the expressway, we arrived just in time for the opening ceremony.',
        situation: 'Reporting on an eventful journey.',
        context: 'Concession + resolution.',
      },
    ],
    professionalExamples: [
      {
        text: 'Although the initial pilot had mixed results, we iterated on the onboarding flow based on customer feedback, resulting in a 34% increase in user retention across the second quarter.',
        context: 'Executive shareholder or board update.',
        tone: 'Senior leadership poise combining concession, action, and measurable impact.',
      },
      {
        text: 'We chose to defer this feature until Q3 so our team could focus exclusively on performance optimization.',
        context: 'Sprint prioritization justification.',
        tone: 'Strategic clarity.',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'While the monolithic architecture served us well during early prototyping, the rapid growth in concurrent users degraded database throughput, compelling us to extract the checkout flow into an autonomous microservice, which ultimately eliminated checkout downtime during Black Friday.',
        analogy: 'The complete 7-Tier architecture applied to a technical system evolution narrative.',
        devContext: 'Staff Engineer system design doc / post-mortem.',
      },
    ],
    contrast: {
      conceptA: 'Run-On Sentences with "And... And... And"',
      conceptB: '7-Tier Hierarchical Sentence Construction',
      differences: [
        { aspect: 'Structure', optionA: 'Flat daisy-chain: "I woke up and I went to office and server broke and I fixed it"', optionB: 'Hierarchical: "When I arrived at the office, the server was down, which prompted me to..."' },
        { aspect: 'Perceived Seniority', optionA: 'Sounds like a junior developer or school essay', optionB: 'Sounds like a mature, clear-thinking professional' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Because the server was slow, so therefore we restarted it.',
        likelyIntention: 'Because the server was slow, we restarted it.',
        rootCause: 'Double-stacking causal connectors ("Because... so therefore..."). In English, only one connector is permitted per clause pair.',
        naturalCorrection: 'Because the server was slow, we restarted it. / The server was slow, so we restarted it.',
        nativeCadence: '"Since the server was slow, we restarted it."',
      },
    ],
    nativeIntuition:
      'Native listeners love subordination. Using words like "While", "Although", "Prompting", and "Which means" signals that you know the hierarchy of your ideas. The most important fact sits in the main clause; supporting context stays in the branches.',
    patternRecognitionExercises: [
      {
        id: 'p-6-1',
        prompt: 'Which sentence correctly avoids the double-connector error?',
        options: [
          'Although it was raining, but we still played.',
          'Although it was raining, we still played.',
          'Though it was raining, so we played.',
          'Even though it rained, therefore we played.',
        ],
        correctIndex: 1,
        explanation: 'In English, "Although" at the start of the clause makes "but" redundant and ungrammatical.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Explain a technical trade-off you made in your code using a Tier 5 or Tier 6 sentence (concession + action + result).',
        targetPattern: 'Although [Trade-off], we [Action], resulting in [Benefit].',
        hint: 'Start with "Although it increased build time..."',
        sampleAnswer: 'Although adding TypeScript strict mode increased our initial build time, it caught 15 subtle runtime errors before deployment.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS OUT LOUD: "Although adding TypeScript strict mode increased our initial build time, it caught 15 subtle runtime errors before deployment."',
      timedChallenge: 'Construct a 3-sentence technical explanation describing your favorite library or tool using at least one 7-tier layered sentence.',
      durationSeconds: 60,
      roleplayPrompt: 'Explain an engineering architectural trade-off to a non-technical manager.',
    },
    recallTest: [
      {
        question: 'Why is it ungrammatical to say "Although he was late, but he managed to catch the train"?',
        hiddenAnswer:
          'Because "Although" is a subordinating conjunction that already connects the two clauses; adding the coordinating conjunction "but" creates a double connector conflict.',
      },
    ],
    revisionConnection:
      'With Part 1 complete, your cognitive operating system is installed. In Part 2 (Chapter 7 onwards), we dive into the core verb engines: BE, GET, TAKE, and HAVE.',
    masteryChallenge:
      'Take a simple statement from your work notes ("We updated the API. The mobile app runs faster.") and elevate it into a senior 7-tier master sentence using participial consequence ("We updated the API, resulting in a 40% speedup for the mobile app").',
  },
];

export const CHAPTERS_DATA: Chapter[] = [
  ...PART_1_CHAPTERS,
  ...PART_2_CHAPTERS,
  ...PART_3_CHAPTERS,
  ...PART_4_CHAPTERS,
  ...PART_5_CHAPTERS,
  ...PART_6_CHAPTERS,
  ...PART_7_CHAPTERS,
  ...PART_8_CHAPTERS,
  ...PART_9_CHAPTERS,
  ...PART_10_CHAPTERS,
  ...PART_11_CHAPTERS,
  ...PART_12_CHAPTERS,
  ...PART_13_CHAPTERS,
  ...PART_14_CHAPTERS,
  ...PART_15_CHAPTERS,
  ...PART_16_CHAPTERS,
];
export const INITIAL_CHAPTERS: Chapter[] = CHAPTERS_DATA;


