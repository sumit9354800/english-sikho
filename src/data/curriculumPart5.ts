import { Chapter } from '../types';

export const PART_5_CHAPTERS: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // CHAPTER 57: PRESENT SIMPLE VS. PRESENT CONTINUOUS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-57',
    partNumber: 5,
    partTitle: 'The Tense & Aspect Engine',
    chapterNumber: 57,
    title: 'Present Simple vs. Present Continuous (Fact/State vs. Active Frame)',
    subtitle: 'The Invariant Invariant Law vs. The Rolling Camera: Permanent Truth vs. In-Flight Activity',
    level: 'Tier 3',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'Aspect Polarity: Permanent Invariant Truth (Simple) ◄──► Live Rolling Camera (Continuous)',
      mentalModel:
        'English tenses are not calendar dates; they are camera modes. 1) PRESENT SIMPLE is a wide-angle satellite lens capturing timeless laws, permanent traits, architectural invariants, and habitual routines ("Water boils at 100°C", "I build distributed systems"). 2) PRESENT CONTINUOUS is an iPhone video camera held in your hand, recording an active, temporary, in-flight process happening right this millisecond or across this temporary current season ("The water is boiling", "I am refactoring the auth controller").',
      whyEnglishUsesIt:
        'Mixing these two aspects causes severe semantic distortion. Saying "I am living in Bangalore" tells a native speaker this is a temporary hotel stay, whereas "I live in Bangalore" means it is your permanent home. Even worse, using continuous aspect with stative verbs creates broken English like "I am having two cars" or "I am understanding you".',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine a blueprint blueprint taped to an architect’s desk: lines etched in stone that do not move (Present Simple: Invariant state). Now look through the window onto the construction site where a crane is actively swinging a steel girder through mid-air (Present Continuous: dynamic in-flight action).',
      schematic: `
   [ THE ASPECT CAMERA MODES ]
   PRESENT SIMPLE (Wide Satellite Lens)              PRESENT CONTINUOUS (Live Cam)
   - Timeless laws, habits, identities              - Active right now, temporary window
   - Formula: Subject + Verb [s/es]                 - Formula: Subject + IS/ARE/AM + Verb[-ING]
   ┌─────────────────────────────────────┐          ┌─────────────────────────────────────┐
   │ "Postgres stores user profiles."    │          │ "Postgres is executing the query."  │
   │ (Permanent capability / role)       │          │ (Active CPU process right now)      │
   └─────────────────────────────────────┘          └─────────────────────────────────────┘
`,
    },
    pattern: {
      formula: 'Simple: Subject + Base Verb [s/es] | Continuous: Subject + [AM/IS/ARE] + [Verb + -ING]',
      breakdown: [
        { element: 'Present Simple', meaning: 'Invariants, permanent states, general facts, scheduled recurrence ("She speaks three languages").' },
        { element: 'Present Continuous', meaning: 'Unfinished action happening at the moment of speech or temporary trend ("She is speaking to the lead right now").' },
        { element: 'Stative Verbs (NO -ING)', meaning: 'Verbs of possession, cognition, emotion, and perception: have, know, understand, believe, want, need, belong.' },
      ],
      notes: 'Stative Verb Golden Rule: Thoughts, feelings, and ownership do not have physical motion; they CANNOT take -ING in standard English.',
    },
    basicExamples: [
      { text: 'The sun rises in the east.', context: 'Permanent universal law (Simple).', audioText: 'The sun rises in the east' },
      { text: 'Look outside, the sun is rising over the horizon.', context: 'Active sensory observation right now (Continuous).', audioText: 'Look outside the sun is rising over the horizon' },
      { text: 'I work as a site reliability engineer.', context: 'Permanent professional career identity.', audioText: 'I work as a site reliability engineer' },
      { text: 'I am working on the Kubernetes migration this week.', context: 'Temporary current project sprint.', audioText: 'I am working on the Kubernetes migration this week' },
      { text: 'He understands distributed consistency protocols.', context: 'Stative mental competence (NEVER "is understanding").', audioText: 'He understands distributed consistency protocols' },
      { text: 'We own three staging environments.', context: 'Stative possession (NEVER "are owning").', audioText: 'We own three staging environments' },
      { text: 'The API responds in under twenty milliseconds.', context: 'Architectural SLA performance invariant.', audioText: 'The API responds in under twenty milliseconds' },
      { text: 'Why is the server taking so long to respond?', context: 'Active live latency glitch in progress.', audioText: 'Why is the server taking so long to respond' },
      { text: 'I live in San Francisco.', context: 'Permanent domicile.', audioText: 'I live in San Francisco' },
      { text: 'I am staying in a hotel near the conference center.', context: 'Temporary lodging duration.', audioText: 'I am staying in a hotel near the conference center' },
    ],
    realLifeExamples: [
      {
        text: 'I usually drink black coffee, but today I am having green tea because my throat hurts.',
        situation: 'Morning breakfast routine.',
        context: 'Habitual default (drink) contrasted with temporary exception (am having).',
      },
      {
        text: 'Do you hear that strange knocking sound in the attic?',
        situation: 'Noticing a noise in the house.',
        context: 'Sensory perception verb (hear, never "are you hearing").',
      },
      {
        text: 'My sister lives in London, but she is visiting our parents in Delhi this month.',
        situation: 'Explaining family whereabouts.',
        context: 'Permanent home (lives) vs. temporary family visit (is visiting).',
      },
    ],
    professionalExamples: [
      {
        text: 'Our enterprise gateway handles fifty thousand concurrent requests per second.',
        context: 'Technical architecture specification presentation.',
        tone: 'Authoritative, definitive, permanent capacity',
      },
      {
        text: 'The engineering team is currently investigating elevated latency spikes on the payment webhook.',
        context: 'Live incident bridge status update.',
        tone: 'Urgent, active, in-progress',
      },
      {
        text: 'Do we know who owns the master encryption key for the production database?',
        context: 'Security compliance review.',
        tone: 'Direct, formal, stative inquiry',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Redis caches session tokens in in-memory key-value pairs.',
        devContext: 'System design documentation.',
        analogy: 'Static system architecture definition (Present Simple).',
      },
      {
        text: 'The garbage collector is compacting fragmented heap blocks in thread pool two.',
        devContext: 'APM runtime diagnostics monitoring.',
        analogy: 'Active CPU cycle execution thread (Present Continuous).',
      },
      {
        text: 'This microservice belongs to the checkout domain; it exposes two gRPC endpoints.',
        devContext: 'Domain-driven design boundary mapping.',
        analogy: 'Permanent domain ownership (stative verb: belongs, never "is belonging").',
      },
    ],
    contrast: {
      conceptA: 'Present Simple (Invariant / Habit)',
      conceptB: 'Present Continuous (In-Flight / Temporary)',
      differences: [
        { aspect: 'Duration', optionA: 'Permanent, recurring, timeless.', optionB: 'Temporary, transient, bound to the current window.' },
        { aspect: 'Camera Lens', optionA: 'Wide-angle landscape snapshot (bird’s-eye view).', optionB: 'Close-up video camera rolling right now.' },
        { aspect: 'Stative Verbs', optionA: 'Natural home: know, think (opinion), have, understand.', optionB: 'Strictly forbidden with mental/possession stative verbs.' },
        { aspect: 'Temporal Adverbs', optionA: 'Always, usually, every day, by default, normally.', optionB: 'Right now, at the moment, currently, this week.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I am having two cars and one laptop.',
        likelyIntention: 'Stating property or possessions.',
        rootCause:
          'Direct translation from Indian language phrasing ("mere paas do gaadiyan hain"). "Have" for possession is stative and cannot take -ING.',
        naturalCorrection: 'I have two cars and one laptop.',
        nativeCadence: 'Say "I have..." for possession. Only use "having" for experiences/meals: "I am having lunch".',
      },
      {
        learnerError: 'Are you understanding what I mean?',
        likelyIntention: 'Checking if a colleague comprehends your explanation.',
        rootCause:
          'Using the progressive aspect with the cognitive stative verb "understand".',
        naturalCorrection: 'Do you understand what I mean? / Does that make sense?',
        nativeCadence: 'Cognition is instantaneous: "Do you understand?", never "Are you understanding?".',
      },
      {
        learnerError: 'I am knowing him since college.',
        likelyIntention: 'Saying you have known a friend for years.',
        rootCause:
          'Combining continuous aspect with stative "know" and using present continuous for duration.',
        naturalCorrection: 'I have known him since college.',
        nativeCadence: 'Stative verbs never take continuous forms; duration requires Present Perfect ("I have known").',
      },
    ],
    nativeIntuition:
      'Native speakers feel a sharp vibration when an -ING verb is spoken. -ING implies kinetic energy, wheel-spinning, and physical motion. Because knowledge, ownership, and beliefs do not have gears turning in physical space, native ears reject *"I am knowing"* or *"I am having a house"* as unnatural.',
    patternRecognitionExercises: [
      {
        id: 't57-q1',
        prompt: 'Identify the grammatically correct sentence for technical documentation:',
        options: [
          'The microservice is containing eight distinct domain controllers.',
          'The microservice contains eight distinct domain controllers.',
          'The microservice is contain eight distinct domain controllers.',
          'The microservice containing eight distinct domain controllers.',
        ],
        correctIndex: 1,
        explanation:
          '"Contain" is a stative verb describing composition. It takes the Present Simple ("contains"), never the continuous ("is containing").',
      },
      {
        id: 't57-q2',
        prompt: 'During an incident bridge, which update correctly uses the active continuous aspect?',
        options: [
          'We understand the root cause and are currently draining traffic away from cluster B.',
          'We are understanding the root cause and currently drain traffic away from cluster B.',
          'We are knowing the root cause and are currently drain traffic away from cluster B.',
          'We understand the root cause and drain currently traffic away from cluster B.',
        ],
        correctIndex: 0,
        explanation:
          '"Understand" is stative (Present Simple), while "draining traffic" is an ongoing active operation happening right now (Present Continuous).',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Explain your job role to a partner, contrasting your general tech stack with what you are specifically refactoring this week.',
        targetPattern: 'I work with [Technology], but this week I am [Verb+ing] [Component]',
        hint: 'Use Present Simple for your core skill and Present Continuous for your temporary sprint task.',
        sampleAnswer: 'I write backend services in Go, but this week I am building a custom telemetry exporter in Rust for our observability pipeline.',
      },
      {
        scenario: 'Correct a colleague who says: "I am having doubts regarding this architectural proposal."',
        targetPattern: 'I have some reservations / I have a few questions',
        hint: 'Eliminate "I am having" for mental doubts.',
        sampleAnswer: 'I have a few questions about the caching strategy before we finalize the architectural proposal.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH SHARP CONTRAST: "I live in Seattle and I design cloud infrastructure, but right now I am troubleshooting a network partition."',
      timedChallenge:
        'Speak for 45 seconds describing your daily engineering routine (Present Simple: usually, always, by default) versus your active project today (Present Continuous: currently, this sprint).',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey team, by default our service syncs data every hour, but right now we are running a manual backfill to catch up on missed records."',
    },
    recallTest: [
      {
        question: 'Why is "I am having a car" incorrect, but "I am having dinner" completely natural?',
        hiddenAnswer:
          'When "have" means possession, it is a stative verb (no physical action; cannot take -ING). When "have" means consuming, eating, or experiencing ("having dinner", "having a blast"), it is an active dynamic event that welcomes -ING.',
      },
      {
        question: 'What is the subtle psychological difference between "Where do you live?" and "Where are you living?"',
        hiddenAnswer:
          '"Where do you live?" asks for your permanent, stable home city. "Where are you living?" implies you are in a temporary, transitional housing arrangement or in the middle of relocating.',
      },
    ],
    revisionConnection:
      'Now that you distinguish timeless invariants from live camera frames, Chapter 58 examines the past timeline: Past Simple (the completed dot) vs. Past Continuous (the background film strip).',
    masteryChallenge:
      'Purge "I am having" from your workplace English today. Replace "I am having a doubt" with "I have a question", and "I am having two years experience" with "I have two years of experience".',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 58: PAST SIMPLE VS. PAST CONTINUOUS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-58',
    partNumber: 5,
    partTitle: 'The Tense & Aspect Engine',
    chapterNumber: 58,
    title: 'Past Simple vs. Past Continuous (The Dot vs. The Film Strip)',
    subtitle: 'Point-in-Time Discrete Events vs. Ongoing Temporal Canvas: WHEN and WHILE in Action',
    level: 'Tier 3',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'The Collision Engine: Completed Pinpoint Dot (Past Simple) strikes an Ongoing Canvas (Past Continuous)',
      mentalModel:
        'Think of the past timeline as a cinematic production. 1) PAST CONTINUOUS (WAS/WERE + -ING) is the rolling background film reel establishing mood, duration, and ongoing activity ("The server was processing payments..."). 2) PAST SIMPLE (V2) is the sudden flashbulb or thunderclap that punches into the timeline, often interrupting the background reel ("...when the power cable snapped!").',
      whyEnglishUsesIt:
        'If you speak only in Past Simple ("I worked and the alarm rang"), events sound like robotically chained dominoes. Using the Past Continuous gives your narrative depth, layering background context beneath sudden focal events.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a programmer sitting under soft fluorescent lights, fingers flying across the keyboard with a steady clatter (Film reel: "I was typing code..."). Suddenly, a red emergency strobe light flashes with a loud siren (Lightning strike: "...when the production cluster crashed!").',
      schematic: `
   [ THE INTERRUPTED TIMELINE ENGINE ]
   PAST CONTINUOUS (Ongoing Film Strip) ────►  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                                           ▲
   PAST SIMPLE (Sudden Event Punch)     ────►             [💥]
   
   "WHILE I was testing the API,                     a critical alert triggered."
    [Continuous: Was Testing]                        [Simple: Triggered]
`,
    },
    pattern: {
      formula: 'While/As + [WAS/WERE + Verb-ING] (Background), Subject + [Past Simple: V2] (Interruption)',
      breakdown: [
        { element: 'Past Continuous (Background)', meaning: 'Ongoing action in progress at a specific past coordinate: Subject + was/were + V-ing.' },
        { element: 'Past Simple (Sudden Event)', meaning: 'Discrete completed action that started and finished: Subject + V2 (ed / irregular).' },
        { element: 'WHILE / AS', meaning: 'Flags the continuous film reel ("While we were reviewing PR #402...").' },
        { element: 'WHEN', meaning: 'Flags the sudden punctual event ("...when the CTO entered the room").' },
      ],
      notes: 'Parallel actions: Two ongoing background actions happening simultaneously both take Continuous ("While Dave was testing, Sarah was drafting docs").',
    },
    basicExamples: [
      { text: 'I was sleeping when the alarm went off.', context: 'Background state interrupted by event.', audioText: 'I was sleeping when the alarm went off' },
      { text: 'While we were driving to the airport, the tire went flat.', context: 'Ongoing journey interrupted by mechanical failure.', audioText: 'While we were driving to the airport the tire went flat' },
      { text: 'The server was running smoothly until the DDoS attack hit.', context: 'Ongoing background operation terminated by attack.', audioText: 'The server was running smoothly until the DDoS attack hit' },
      { text: 'What were you doing at 3:00 PM yesterday?', context: 'Inquiring about an in-flight activity at a specific past coordinate.', audioText: 'What were you doing at 3:00 PM yesterday' },
      { text: 'I downloaded the dataset and analyzed it in Python.', context: 'Sequential completed actions in series (Past Simple + Past Simple).', audioText: 'I downloaded the dataset and analyzed it in Python' },
      { text: 'While the lead was speaking, I took detailed notes.', context: 'Background activity during which discrete events occurred.', audioText: 'While the lead was speaking I took detailed notes' },
      { text: 'It was raining heavily when we arrived at the venue.', context: 'Weather background setting the scene.', audioText: 'It was raining heavily when we arrived at the venue' },
      { text: 'The database was syncing records when the connection timed out.', context: 'Infrastructure background interrupted by network fault.', audioText: 'The database was syncing records when the connection timed out' },
      { text: 'He dropped his coffee while he was rushing to the standup.', context: 'Sudden event occurring during continuous motion.', audioText: 'He dropped his coffee while he was rushing to the standup' },
      { text: 'We were discussing the roadmap when the fire alarm sounded.', context: 'Meeting in progress interrupted by building emergency.', audioText: 'We were discussing the roadmap when the fire alarm sounded' },
    ],
    realLifeExamples: [
      {
        text: 'I was cooking dinner when my phone rang; it was my old college roommate.',
        situation: 'An evening at home interrupted by a welcome call.',
        context: 'Continuous background (was cooking) interrupted by event (rang).',
      },
      {
        text: 'While we were hiking through the forest, we spotted a bald eagle perched on an oak tree.',
        situation: 'Weekend nature excursion.',
        context: 'Ongoing exploration (were hiking) punctuated by a discovery (spotted).',
      },
      {
        text: 'She slipped on the ice while she was running to catch the morning train.',
        situation: 'Winter morning commute.',
        context: 'Sudden mishap (slipped) occurring during frantic motion (was running).',
      },
    ],
    professionalExamples: [
      {
        text: 'While the security team was auditing the staging environment, they uncovered an unauthenticated endpoint.',
        context: 'Formal cybersecurity vulnerability post-mortem.',
        tone: 'Rigorous, investigative, precise',
      },
      {
        text: 'We were finalizing the Q3 revenue forecasts when the board requested an emergency review.',
        context: 'Finance department executive update.',
        tone: 'Corporate, serious, structured',
      },
      {
        text: 'The distributed replication worker crashed while it was re-indexing the master catalog table.',
        context: 'Incident root cause analysis.',
        tone: 'Objective, technical',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The thread threw an OutOfMemoryError while the worker was deserializing a five-gigabyte JSON payload.',
        devContext: 'JVM heap crash analysis.',
        analogy: 'A heavy background stream meeting an unrecoverable memory boundary.',
      },
      {
        text: 'While the pipeline was compiling the Docker container, GitHub Actions lost connectivity to the self-hosted runner.',
        devContext: 'CI/CD automation failure log.',
        analogy: 'Long-running asynchronous build interrupted by a transport failure.',
      },
      {
        text: 'The user clicked "Submit" twice while the payment gateway was negotiating the authorization handshake.',
        devContext: 'Frontend idempotency and race condition bug report.',
        analogy: 'A discrete user input colliding with an in-flight network handshake.',
      },
    ],
    contrast: {
      conceptA: 'Past Simple (The Punctual Dot)',
      conceptB: 'Past Continuous (The Rolling Canvas)',
      differences: [
        { aspect: 'Perspective', optionA: 'Complete, bounded, viewed from outside as a finished point.', optionB: 'Unfinished, in-progress, viewed from inside the duration.' },
        { aspect: 'Typical Role', optionA: 'Main narrative storyline; sequential steps (did X, then did Y).', optionB: 'Atmosphere, background scenery, or interrupted action.' },
        { aspect: 'Trigger Conjunction', optionA: 'WHEN ("...when the system halted").', optionB: 'WHILE / AS ("While we were testing...").' },
        { aspect: 'Time Question', optionA: '"What did you do yesterday?" (Whole day summary).', optionB: '"What were you doing at 4 PM?" (Specific in-progress slice).' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Yesterday I was going to office and I met my manager.',
        likelyIntention: 'Describing your morning commute and meeting your boss.',
        rootCause:
          'Using Past Continuous for simple sequential past events without an intentional background/interruption contrast.',
        naturalCorrection: 'Yesterday while I was going to the office, I met my manager. / Yesterday I went to the office and met my manager.',
        nativeCadence: 'Never leave Past Continuous hanging without "while" or an interrupting clause.',
      },
      {
        learnerError: 'When I was arriving, the meeting started.',
        likelyIntention: 'Saying both events happened as points in time.',
        rootCause:
          'Using progressive aspect with punctual verbs like "arrive". Arriving is instantaneous; you arrive or you have arrived.',
        naturalCorrection: 'When I arrived, the meeting started.',
        nativeCadence: 'Punctual verbs take Past Simple: "When I arrived / reached / noticed".',
      },
      {
        learnerError: 'I was knowing the answer in the exam.',
        likelyIntention: 'Saying you possessed the knowledge during the test.',
        rootCause:
          'Putting stative verb "know" into Past Continuous. Stative verbs never take continuous aspect in past or present.',
        naturalCorrection: 'I knew the answer in the exam.',
        nativeCadence: 'Stative verbs in past are always Past Simple: knew, understood, wanted, owned.',
      },
    ],
    nativeIntuition:
      'Native speakers use the Past Continuous as theatrical lighting. When someone says "I was walking down the street...", the listener’s brain instinctively braces for an event to jump out of the shadows. If you say "I was walking down the street and I reached home", it feels like a movie where suspense builds but nothing happens.',
    patternRecognitionExercises: [
      {
        id: 't58-q1',
        prompt: 'Choose the sentence that correctly depicts an interrupted background event:',
        options: [
          'While we ran the benchmark tests, the database server was crashing.',
          'While we were running the benchmark tests, the database server crashed.',
          'While we were running the benchmark tests, the database server was crashing.',
          'When we were running the benchmark tests, the database server crash.',
        ],
        correctIndex: 1,
        explanation:
          'The background activity takes the Past Continuous ("While we were running") and the sudden interruption takes the Past Simple ("crashed").',
      },
      {
        id: 't58-q2',
        prompt: 'Which sentence correctly uses two sequential completed past events?',
        options: [
          'I was opening the terminal and was typing the command.',
          'I opened the terminal and typed the command.',
          'While I opened the terminal, I was typing the command.',
          'I was opening the terminal when I typed the command.',
        ],
        correctIndex: 1,
        explanation:
          'Sequential narrative events (first A, then B) are both expressed using the Past Simple: "opened ... and typed".',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Explain an unexpected bug that occurred during a routine deployment sprint.',
        targetPattern: 'While we were [Verb+ing] [Component], [Event occurred in Past Simple]',
        hint: 'Establish the ongoing background testing/deployment before revealing the error.',
        sampleAnswer: 'While we were deploying the microservice to our canary cluster, the health-check probe failed due to a missing environment variable.',
      },
      {
        scenario: 'Narrate what you were doing when your company announced a major strategic pivot or acquisition.',
        targetPattern: 'I was [Verb+ing] when [Announcement happened]',
        hint: 'Contrast your in-flight personal activity with the sudden company-wide news.',
        sampleAnswer: 'I was reviewing pull requests for the sprint demo when our CEO sent an all-hands memo announcing our Series B funding round.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH DRAMATIC TEMPO: "While the build was compiling, our monitoring service sounded an alert, and we halted the release immediately."',
      timedChallenge:
        'Speak for 45 seconds recounting a technical mishap or dramatic workday event, using at least two "While [was doing], [happened]" collision constructions.',
      durationSeconds: 45,
      roleplayPrompt:
        '"We were migrating user credentials to the new auth schema yesterday when the database hit a connection pool limit!"',
    },
    recallTest: [
      {
        question: 'What is the functional difference between WHEN and WHILE in past narratives?',
        hiddenAnswer:
          'WHILE introduces the longer ongoing background activity (Past Continuous: "While I was working..."), whereas WHEN typically introduces the sudden, sharp, interrupting action (Past Simple: "...when the power failed").',
      },
      {
        question: 'Can punctual verbs like "arrive", "break", or "recognize" be used in the continuous aspect?',
        hiddenAnswer:
          'Generally no, because they describe instantaneous transitions between states. They take Past Simple ("I arrived", "it broke", "I recognized him").',
      },
    ],
    revisionConnection:
      'With punctual events and background timelines mastered, Chapter 59 introduces the most consequential tense in English: The Present Perfect Bridge.',
    masteryChallenge:
      'When recounting past technical bugs in meetings today, deliberately frame them as: "While system X was doing Y, event Z occurred." Notice how much cleaner your narrative sounds.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 59: THE PRESENT PERFECT BRIDGE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-59',
    partNumber: 5,
    partTitle: 'The Tense & Aspect Engine',
    chapterNumber: 59,
    title: 'The Present Perfect Bridge (The Live Wire: HAVE/HAS + V3)',
    subtitle: 'Connecting Historical Event to Present Reality: Why "Yesterday I Have Done" Destroys Credibility',
    level: 'Tier 3',
    readingTimeMinutes: 18,
    dna: {
      coreConcept: 'The Live Wire: An Event in the Past with an Electrified Cable Plugged Straight into NOW',
      mentalModel:
        'The Present Perfect (HAVE / HAS + V3) is not a past tense. It is an aspect of PRESENT RELEVANCE. Think of an electrified cable: the plug was pushed into a wall socket five minutes or ten years ago, but current is humming through the wire right now. Contrast: 1) PAST SIMPLE = Dead history inside a sealed tomb. Marked by explicit past timestamps (yesterday, in 2020, three hours ago). 2) PRESENT PERFECT = Live reality. The speaker cares about the current state resulting from the event, NOT when it happened.',
      whyEnglishUsesIt:
        'Saying "I lost my badge" is a historical statement (maybe you found it five minutes later). Saying "I have lost my badge" means you are standing outside the locked office door right now without access. Adding a specific past timestamp destroys this bridge: saying *"Yesterday I have submitted the PR"* is one of the most glaring grammatical errors in professional English.',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine two filing cabinets: 1) The Archives Room (Past Simple): dusty metal drawers labeled "YESTERDAY", "2018", "LAST SPRINT". Once an event enters this room, it is dead history. 2) The Active Control Desk (Present Perfect): a glowing terminal with live cables running across the floor to your hand. If an event affects your current dashboard right now, it sits on this desk.',
      schematic: `
   [ THE PRESENT PERFECT BRIDGE ]
   PAST TIMELINE                                      PRESENT MOMENT (NOW)
   ◄───────────────────────────────────────────────────────────●
   [Event Happened] ═════════ LIVE WIRE OF RELEVANCE ════════► [Live Impact]
   "I have pushed the code."                                   (Staging is ready NOW)
   
   [DEAD HISTORY (PAST SIMPLE)]
   [Event Happened] ──(Tomb Sealed: "yesterday", "at 9 AM")──X (No bridge allowed)
   "I pushed the code yesterday."
`,
    },
    pattern: {
      formula: 'Subject + HAVE / HAS + [Past Participle: V3] (Live relevance, unspecified time)',
      breakdown: [
        { element: 'HAVE / HAS + V3', meaning: 'Completed action with direct consequences in the present moment.' },
        { element: 'Life Experience', meaning: '"Have you ever used GraphQL?" (In your lifetime up to this second).' },
        { element: 'Recent News (JUST / ALREADY / YET)', meaning: '"We have just deployed the patch" (Freshly baked reality).' },
        { element: 'Unfinished Time Windows', meaning: '"I have written two PRs today / this week" (The day is still open!).' },
        { element: 'THE BANNED RULE', meaning: 'NEVER pair Present Perfect with finished time words: yesterday, ago, in 1999, last night.' },
      ],
      notes: 'Litmus Test: Ask yourself: Does the exact timestamp matter? If yes, use Past Simple. If the current consequence is what matters, use Present Perfect.',
    },
    basicExamples: [
      { text: 'I have finished the deployment.', context: 'The deployment is complete and live right now.', audioText: 'I have finished the deployment' },
      { text: 'I finished the deployment at 3:00 PM.', context: 'Specific dead timestamp requires Past Simple.', audioText: 'I finished the deployment at three PM' },
      { text: 'Have you ever configured an Envoy proxy?', context: 'Lifetime experience inquiry up to NOW.', audioText: 'Have you ever configured an Envoy proxy' },
      { text: 'The lead has already approved the architecture.', context: 'Current state of approval is active.', audioText: 'The lead has already approved the architecture' },
      { text: 'We haven’t received the security credentials yet.', context: 'State of waiting continues into this second.', audioText: 'We haven’t received the security credentials yet' },
      { text: 'I have written three unit tests this morning.', context: 'Unfinished time window (it is still morning).', audioText: 'I have written three unit tests this morning' },
      { text: 'I wrote three unit tests yesterday.', context: 'Finished time window requires Past Simple.', audioText: 'I wrote three unit tests yesterday' },
      { text: 'Someone has updated the production configuration!', context: 'Alarmed discovery of a present consequence.', audioText: 'Someone has updated the production configuration' },
      { text: 'Our company has grown significantly since 2022.', context: 'Trajectory originating in past, continuing to now.', audioText: 'Our company has grown significantly since 2022' },
      { text: 'I have lost my badge; can you let me in?', context: 'Present predicament: locked out right now.', audioText: 'I have lost my badge can you let me in' },
    ],
    realLifeExamples: [
      {
        text: 'I have washed the dishes, so you don’t need to worry about the kitchen.',
        situation: 'Sharing household chores with a partner.',
        context: 'Present consequence: the sink is clean right now.',
      },
      {
        text: 'Have you seen my car keys anywhere? I can’t leave the house without them.',
        situation: 'Frantic search before leaving for work.',
        context: 'Present predicament requiring immediate assistance.',
      },
      {
        text: 'I have lived in four different countries, so moving to a new city doesn’t intimidate me.',
        situation: 'Casual conversation at a dinner party.',
        context: 'Accumulated life experience shaping current perspective.',
      },
    ],
    professionalExamples: [
      {
        text: 'We have resolved the memory leak in the billing microservice; error rates have normalized.',
        context: 'Incident commander concluding an outage report.',
        tone: 'Calm, authoritative, conclusive',
      },
      {
        text: 'Has the client signed off on the revised statement of work yet?',
        context: 'Project manager checking milestone status.',
        tone: 'Direct, punctual, professional',
      },
      {
        text: 'Our infrastructure squad has migrated over eighty percent of our services to Kubernetes.',
        context: 'Quarterly engineering all-hands address.',
        tone: 'Accomplished, forward-looking',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The cron runner has detected fifteen anomalous transactions in the pending payments partition.',
        devContext: 'Automated fraud detection alert notification.',
        analogy: 'Current dashboard state reflecting accumulated batch findings.',
      },
      {
        text: 'We have deprecated the v1 REST API in favor of our unified GraphQL schema.',
        devContext: 'Developer developer release notes.',
        analogy: 'A permanent policy change active from this moment onward.',
      },
      {
        text: 'Git has detected merge conflicts in three files that cannot be resolved automatically.',
        devContext: 'VCS status notification.',
        analogy: 'Live repository state blocking the branch merge right now.',
      },
    ],
    contrast: {
      conceptA: 'Present Perfect (Live Wire / Present Relevance)',
      conceptB: 'Past Simple (Dead History / Specific Point)',
      differences: [
        { aspect: 'Time Horizon', optionA: 'Unspecified time; unfinished window (today, this year, ever).', optionB: 'Specific, finished timestamp (yesterday, in 2021, at 2 PM).' },
        { aspect: 'Psychological Focus', optionA: 'The present result or ongoing reality right now.', optionB: 'The historical event itself in the past.' },
        { aspect: 'Key Adverbs', optionA: 'Already, yet, just, ever, never, so far, recently, since.', optionB: 'Yesterday, ago, in [year], last week, on Monday.' },
        { aspect: 'Current Reality', optionA: '"I have lost my key." (I STILL do not have it).', optionB: '"I lost my key yesterday." (Says nothing about whether I found it).' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Yesterday I have submitted the assignment to the portal.',
        likelyIntention: 'Saying you turned in your work yesterday.',
        rootCause:
          'Direct translation of Hindi perfective aspect ("kal maine submit kar diya hai"). Pairing "yesterday" with "have submitted" violates core English syntax.',
        naturalCorrection: 'Yesterday I submitted the assignment to the portal. / I have submitted the assignment to the portal.',
        nativeCadence: 'Rule: If you mention a specific past time, "HAVE" is dead. Use Past Simple.',
      },
      {
        learnerError: 'Did you submit the PR yet?',
        likelyIntention: 'Asking if someone has completed a task up to now.',
        rootCause:
          'While common in colloquial American English, standard professional English uses Present Perfect with "yet".',
        naturalCorrection: 'Have you submitted the PR yet?',
        nativeCadence: '"Yet" links the past to this moment: always use "Have you... yet?".',
      },
      {
        learnerError: 'I have seen him two days ago.',
        likelyIntention: 'Reporting when you saw someone.',
        rootCause: 'Using "ago" with Present Perfect. "Ago" anchors an event firmly in finished past time.',
        naturalCorrection: 'I saw him two days ago.',
        nativeCadence: 'Any sentence with "ago" MUST use Past Simple.',
      },
    ],
    nativeIntuition:
      'Native speakers treat "HAVE" as a physical basket you are holding in your hands right now. When you say "I HAVE finished", you are presenting the finished product in your basket to the listener. If you attach a past timestamp like "yesterday", you are trying to hold yesterday in your current basket, which causes an intuitive cognitive clash.',
    patternRecognitionExercises: [
      {
        id: 't59-q1',
        prompt: 'Select the grammatically impeccable sentence for an email status update:',
        options: [
          'Last week our team has completed the cloud migration.',
          'Our team has completed the cloud migration last week.',
          'Our team completed the cloud migration last week.',
          'Our team has complete the cloud migration last week.',
        ],
        correctIndex: 2,
        explanation:
          'Because "last week" is a finished, specific time window, you must use the Past Simple ("completed"), never the Present Perfect.',
      },
      {
        id: 't59-q2',
        prompt: 'Which sentence correctly expresses that a critical task is finished and live right now?',
        options: [
          'We have already merged the hotfix into main.',
          'We have merged the hotfix into main yesterday.',
          'We already merged the hotfix into main two hours ago.',
          'We merged already the hotfix into main.',
        ],
        correctIndex: 0,
        explanation:
          '"We have already merged" correctly uses the Present Perfect to highlight the live present reality of the merged hotfix without an incompatible past timestamp.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Inform your product manager that you just finished writing the unit tests and the PR is open for review.',
        targetPattern: 'I have just [V3] and [Present State]',
        hint: 'Use "have just" to emphasize fresh completion.',
        sampleAnswer: 'I have just pushed the unit tests and opened the PR; it is ready for your team’s review.',
      },
      {
        scenario: 'State your professional experience with a technology without naming a specific past date.',
        targetPattern: 'I have worked with [Tech] across several production workloads',
        hint: 'Frame it as accumulated career experience using Present Perfect.',
        sampleAnswer: 'I have architected event-driven microservices using Apache Kafka across multiple high-throughput production workloads.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH CRISP CONTRAST: "I pushed the code yesterday, but I have just verified that the build is green."',
      timedChallenge:
        'Speak for 45 seconds updating your team on project milestones: share three things you HAVE accomplished this week (Present Perfect), and two specific things you DID yesterday at a specific hour (Past Simple).',
      durationSeconds: 45,
      roleplayPrompt:
        '"Have you had a chance to review the audit logs yet? I have already patched the two vulnerabilities we flagged this morning."',
    },
    recallTest: [
      {
        question: 'Why is the sentence "I have finished my graduation in 2021" grammatically broken in English?',
        hiddenAnswer:
          'Because "in 2021" is a closed, finished past timestamp. Present Perfect (have finished) cannot be paired with dead past timestamps. It must be: "I graduated in 2021" or "I finished my degree in 2021".',
      },
      {
        question: 'What is the semantic difference between "I have lived in London for two years" and "I lived in London for two years"?',
        hiddenAnswer:
          '"I have lived in London for two years" means you currently live in London right now (live wire). "I lived in London for two years" means you no longer live in London; that chapter of your life is closed (dead history).',
      },
    ],
    revisionConnection:
      'Having mastered the single-event live wire of Present Perfect, Chapter 60 tackles the unbroken streaming river: Present Perfect Continuous and the elimination of "I am working here since".',
    masteryChallenge:
      'Search your outgoing Slack or Teams messages for the word "yesterday". Ensure that not a single one contains "have" or "has". Enforce this rule ruthlessly.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 60: PRESENT PERFECT CONTINUOUS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-60',
    partNumber: 5,
    partTitle: 'The Tense & Aspect Engine',
    chapterNumber: 60,
    title: 'Present Perfect Continuous (Unbroken Temporal Streams)',
    subtitle: 'Streaming Duration from Past to Now: Eradicating "I Am Working Here Since Three Years"',
    level: 'Tier 3',
    readingTimeMinutes: 17,
    dna: {
      coreConcept: 'The Unbroken River: An Action Began in the Past and Has Been Actively Streaming Without Interruption Into This Very Second',
      mentalModel:
        'Imagine a water hose turned on at 9:00 AM. Water has been pouring out continuously across 10:00 AM, 11:00 AM, and is splashing onto your shoes right now at 12:00 PM. In English, you CANNOT use the simple present or present continuous for this streaming duration. You MUST use: HAVE / HAS BEEN + [Verb + -ING]. 1) SINCE marks the starting pin coordinate ("since 9:00 AM"). 2) FOR measures the accumulated duration bucket ("for three hours").',
      whyEnglishUsesIt:
        'The error *"I am working here since two years"* is perhaps the most pervasive Indian English habit. In native English, "I am working" only looks at this current micro-moment; it possesses no backward depth. To anchor the past and pull a continuous thread to the present, you need the Present Perfect Continuous.',
    },
    mentalMovie: {
      sceneDescription:
        'Visualize an ongoing timeline video stream with a live timecode running in the upper corner. A glowing line begins at a milestone pinned in the soil labeled "2021" and stretches like an illuminated fiber-optic cable across the years, plugging directly into your chest right now.',
      schematic: `
   [ THE UNBROKEN TEMPORAL STREAM ]
   STARTING PIN (SINCE)                                    CURRENT MOMENT (NOW)
   [Pinned in 2021] ═════════════════════════════════════► [Still Streaming NOW]
   
   FORMULA: Subject + HAVE / HAS BEEN + [VERB + -ING]
   - "I have been working here SINCE 2021."   (Pins the exact start date)
   - "I have been working here FOR 3 years."   (Measures the total duration bucket)
   
   FATAL ERROR TO AVOID:
   ❌ "I am working here since 3 years." (Grammatically impossible in English)
`,
    },
    pattern: {
      formula: 'Subject + HAVE / HAS BEEN + [Verb + -ING] + [FOR duration / SINCE starting point]',
      breakdown: [
        { element: 'HAVE / HAS BEEN + V-ING', meaning: 'Action commenced in the past, continued without stopping, and is still in progress right now.' },
        { element: 'SINCE + Exact Coordinate', meaning: 'Pins the starting timestamp: since Monday, since 2020, since 9 AM, since we launched.' },
        { element: 'FOR + Time Quantity', meaning: 'Measures the duration volume: for three hours, for two sprints, for five years, for a long time.' },
        { element: 'Recent Evidence Aspect', meaning: 'Can describe an action that just stopped but whose evidence is physical ("You are out of breath! Have you been running?").' },
      ],
      notes: 'Remember: Stative verbs (know, have, believe) cannot take -ING; for statives, fall back to Present Perfect Simple: "I have known him for years" (NEVER "have been knowing").',
    },
    basicExamples: [
      { text: 'I have been coding since seven this morning.', context: 'Unbroken focus session from a specific start pin.', audioText: 'I have been coding since seven this morning' },
      { text: 'She has been working at Stripe for four years.', context: 'Continuous career tenure measured with FOR.', audioText: 'She has been working at Stripe for four years' },
      { text: 'We have been investigating this memory leak all afternoon.', context: 'Exhaustive troubleshooting session still ongoing.', audioText: 'We have been investigating this memory leak all afternoon' },
      { text: 'How long have you been waiting?', context: 'Inquiring about accumulated waiting duration.', audioText: 'How long have you been waiting' },
      { text: 'The auto-scaler has been spinning up new pods for twenty minutes.', context: 'System operational duration in progress.', audioText: 'The auto-scaler has been spinning up new pods for twenty minutes' },
      { text: 'It has been raining all night.', context: 'Weather streaming continuously into the morning.', audioText: 'It has been raining all night' },
      { text: 'I have been learning Rust since last winter.', context: 'Skill acquisition journey beginning at a calendar coordinate.', audioText: 'I have been learning Rust since last winter' },
      { text: 'The engineers have been refactoring the monolith for six months.', context: 'Large-scale structural initiative spanning months.', audioText: 'The engineers have been refactoring the monolith for six months' },
      { text: 'Why are your eyes red? Have you been staring at the monitor all day?', context: 'Visible physical consequence of a recent continuous activity.', audioText: 'Why are your eyes red Have you been staring at the monitor all day' },
      { text: 'They have been arguing about the schema design for two hours.', context: 'Heated debate continuing into the present meeting.', audioText: 'They have been arguing about the schema design for two hours' },
    ],
    realLifeExamples: [
      {
        text: 'I have been trying to assemble this IKEA bookshelf for three hours, and I still have spare screws.',
        situation: 'Weekend DIY frustration.',
        context: 'Unbroken effort with ongoing frustration.',
      },
      {
        text: 'She has been practicing the violin every morning since she was seven years old.',
        situation: 'Discussing a musician’s lifelong discipline.',
        context: 'Habitual continuous dedication pinned to childhood.',
      },
      {
        text: 'We have been standing in this airport security line for forty-five minutes.',
        situation: 'Airport travel delays.',
        context: 'Shared endurance in an ongoing queue.',
      },
    ],
    professionalExamples: [
      {
        text: 'Our infrastructure team has been benchmarking alternative database engines for the past two quarters.',
        context: 'Technical evaluation report to senior management.',
        tone: 'Methodical, thorough, strategic',
      },
      {
        text: 'We have been collaborating with the European compliance regulators since early January to ensure GDPR adherence.',
        context: 'Legal and privacy status briefing.',
        tone: 'Diplomatic, accountable, formal',
      },
      {
        text: 'The billing engine has been failing silently since the latest schema migration at midnight.',
        context: 'Critical incident alert escalation.',
        tone: 'Urgent, diagnostic, transparent',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The background garbage collection daemon has been running continuously, consuming ninety percent of CPU cycles.',
        devContext: 'APM thread profiling analysis.',
        analogy: 'A runaway process that began in the past and is choking current throughput.',
      },
      {
        text: 'We have been streaming telemetry events through Apache Flink since the cluster initialized.',
        devContext: 'Real-time data streaming architecture overview.',
        analogy: 'An open TCP/socket stream pumping continuous packets.',
      },
      {
        text: 'Our front-end client has been polling the order status endpoint every two seconds without backoff.',
        devContext: 'Mobile app network optimization ticket.',
        analogy: 'A high-frequency network loop persisting across the session.',
      },
    ],
    contrast: {
      conceptA: 'SINCE (The Starting Pin)',
      conceptB: 'FOR (The Duration Bucket)',
      differences: [
        { aspect: 'Function', optionA: 'Identifies the precise point in time when the action began.', optionB: 'Measures the total quantity or volume of elapsed time.' },
        { aspect: 'Followed by', optionA: 'A specific date, hour, year, or past event ("since 9 AM", "since 2020").', optionB: 'A numerical count of time units ("for 3 hours", "for 10 days").' },
        { aspect: 'Fatal Error', optionA: '❌ "Since three years" (NEVER pair since with a duration count!).', optionB: '❌ "For 2021" (NEVER pair for with a calendar coordinate!).' },
        { aspect: 'Correct Usage', optionA: '"Since 2021" or "since last summer".', optionB: '"For three years" or "for a long time".' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I am working in this company since three years.',
        likelyIntention: 'Saying you have been employed here for three years.',
        rootCause:
          'Direct translation from Hindi ("main teen saal se yahan kaam kar raha hoon"). Using present continuous for unbroken duration is completely ungrammatical in English.',
        naturalCorrection: 'I have been working at this company for three years. / I have been working here since 2021.',
        nativeCadence: 'Any sentence measuring time up to now MUST use "have been doing".',
      },
      {
        learnerError: 'I have been knowing him since college.',
        likelyIntention: 'Saying you have known a colleague since university.',
        rootCause:
          'Using the continuous aspect with stative verb "know". Stative verbs cannot take -ING even in present perfect continuous.',
        naturalCorrection: 'I have known him since college.',
        nativeCadence: 'Stative verbs use Present Perfect Simple: "have known", "have had", "have understood".',
      },
      {
        learnerError: 'We are waiting for the build since thirty minutes.',
        likelyIntention: 'Saying the build has been taking 30 minutes.',
        rootCause:
          'Pairing present continuous with "since" and a duration count.',
        naturalCorrection: 'We have been waiting for the build for thirty minutes.',
        nativeCadence: 'Duration count = FOR; verb form = have been waiting.',
      },
    ],
    nativeIntuition:
      'Native speakers feel time as weight. When you say "I am working", there is zero weight; you are just floating in the present second. The moment you introduce a span of time like "for three hours", you are carrying a heavy backpack of elapsed time. That weight requires the structural steel beam of "HAVE BEEN ... -ING".',
    patternRecognitionExercises: [
      {
        id: 't60-q1',
        prompt: 'Which sentence correctly expresses ongoing employment duration?',
        options: [
          'I am working as a full-stack engineer since two years.',
          'I have been working as a full-stack engineer for two years.',
          'I am working as a full-stack engineer for two years.',
          'I work as a full-stack engineer since two years.',
        ],
        correctIndex: 1,
        explanation:
          'Unbroken duration from the past to the present requires "have been working" paired with "for" for a quantity of time ("for two years").',
      },
      {
        id: 't60-q2',
        prompt: 'Identify the grammatically correct sentence using "SINCE":',
        options: [
          'The microservice has been crashing since three days.',
          'The microservice is crashing since Monday.',
          'The microservice has been crashing since Monday.',
          'The microservice crashes since three days.',
        ],
        correctIndex: 2,
        explanation:
          '"Since" requires a specific starting coordinate ("Monday") and must be paired with the Present Perfect Continuous ("has been crashing").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Explain in a job interview how long you have been building software professionally.',
        targetPattern: 'I have been developing software for [Number] years, specializing in [Domain]',
        hint: 'Use "have been developing" with "for".',
        sampleAnswer: 'I have been developing cloud-native backend systems for six years, specializing in distributed message queues and high-throughput APIs.',
      },
      {
        scenario: 'Report on an ongoing technical investigation during daily standup.',
        targetPattern: 'We have been debugging [Issue] since [Time], and we have found that [Insight]',
        hint: 'Anchor the start time with "since".',
        sampleAnswer: 'We have been debugging the Redis connection timeouts since yesterday afternoon, and we have found that the socket pool is being exhausted during peak traffic.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH CONFIDENT CADENCE: "I have been working at this organization for three years, and I have been leading this project since January."',
      timedChallenge:
        'Speak for 45 seconds summarizing your career journey: state how long you HAVE BEEN LIVING in your city, how long you HAVE BEEN WORKING in tech, and what skill you HAVE BEEN PRACTICING recently.',
      durationSeconds: 45,
      roleplayPrompt:
        '"We have been seeing high memory consumption since the latest canary release; let’s profile the heap before we proceed with the rollout."',
    },
    recallTest: [
      {
        question: 'Why can you never say "I am living here since five years"?',
        hiddenAnswer:
          'Because "am living" only references the present moment without historical depth. In English, expressing an action that began in the past and continues into the present requires Present Perfect Continuous ("I have been living here"), and a quantity of time requires "for" ("for five years").',
      },
      {
        question: 'Why is "I have been having this car for three years" incorrect?',
        hiddenAnswer:
          'Because "have" (meaning ownership) is a stative verb that cannot take the -ING progressive form. Stative verbs fall back to the Present Perfect Simple: "I have had this car for three years."',
      },
    ],
    revisionConnection:
      'With the live present timeline fully wired, Chapter 61 journeys into the deep past: Past Perfect (HAD + V3) as the ultimate time machine anchor.',
    masteryChallenge:
      'Ban "I am doing since" entirely from your vocabulary. Whenever you catch yourself about to say "I am working here since...", stop, pause, and say: "I have been working here for...".',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 61: PAST PERFECT
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-61',
    partNumber: 5,
    partTitle: 'The Tense & Aspect Engine',
    chapterNumber: 61,
    title: 'Past Perfect (The Time Machine: HAD + V3)',
    subtitle: 'The Past-of-the-Past: Anchoring Antecedent Realities Before Historical Milestones',
    level: 'Tier 3',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'The Flashback Anchor: Stepping Further Back in Time from an Already Established Past Reference Point',
      mentalModel:
        'The Past Perfect (HAD + V3) is a narrative time machine. It cannot exist in a vacuum. If you are already telling a story set in the past (Past Simple: "I arrived at the office at 9:00 AM"), how do you explain something that happened even EARLIER (at 8:00 AM)? You use the Past Perfect: "When I arrived at 9:00 AM, my colleague HAD ALREADY MERGED the pull request." 1) First event chronologically = HAD + V3. 2) Second event chronologically = Past Simple (V2).',
      whyEnglishUsesIt:
        'Without Past Perfect, chronological sequence collapses. Saying "When I arrived at the station, the train left" means the train pulled away right in front of your eyes as you stepped onto the platform. Saying "When I arrived at the station, the train HAD left" means you walked onto an empty, deserted platform; the train was already gone.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture yourself standing inside a museum hall labeled "YESTERDAY AT 10 AM" (Past Simple). You look at a doorway behind you that leads into a deeper, dimmer chamber labeled "EARLIER THAT MORNING" (Past Perfect). Every time you refer to an artifact in that deeper room, you must stamp it with the word "HAD".',
      schematic: `
   [ THE CHRONOLOGICAL FLASHBACK ENGINE ]
   PAST-OF-THE-PAST (Event 1)       PAST ANCHOR (Event 2)         PRESENT (NOW)
   ◄───────────────────────────────────────────────────────────────────────●
   HAD + V3                         Past Simple (V2)
   "The database HAD crashed"       "BEFORE the alert fired"
   (Happened at 02:00 UTC)          (Happened at 02:05 UTC)
`,
    },
    pattern: {
      formula: 'Subject + HAD + [Past Participle: V3] (Event 1) ... before / when + Subject + [Past Simple: V2] (Event 2)',
      breakdown: [
        { element: 'HAD + V3 (Event 1)', meaning: 'The earlier of two past actions; establishes prerequisite conditions.' },
        { element: 'Past Simple (Event 2)', meaning: 'The later past action that serves as the narrative anchor point.' },
        { element: 'Time Connectors', meaning: 'Before, after, by the time, when, already, until then.' },
        { element: 'THE ISOLATION RULE', meaning: 'Do NOT use Past Perfect for a single past event with a timestamp ("I had seen him yesterday" is WRONG; say "I saw him yesterday").' },
      ],
      notes: 'Past Perfect is purely relational. It only exists to establish that Event A happened before Event B in a past narrative.',
    },
    basicExamples: [
      { text: 'When I reached the station, the train had already departed.', context: 'Arriving to an empty platform (Train left first).', audioText: 'When I reached the station the train had already departed' },
      { text: 'We realized that someone had altered the production database.', context: 'Discovery in the past of an earlier unauthorized change.', audioText: 'We realized that someone had altered the production database' },
      { text: 'By the time the team noticed the breach, the hacker had exfiltrated the logs.', context: 'Data theft preceded the team’s awareness.', audioText: 'By the time the team noticed the breach the hacker had exfiltrated the logs' },
      { text: 'I had never worked with Kubernetes before joining this company.', context: 'Experience prior to a past career milestone.', audioText: 'I had never worked with Kubernetes before joining this company' },
      { text: 'The build had already failed twice before we diagnosed the syntax error.', context: 'Earlier failed attempts prior to diagnosis.', audioText: 'The build had already failed twice before we diagnosed the syntax error' },
      { text: 'She was exhausted because she had been debugging all night.', context: 'Past Perfect Continuous explaining a past physical state.', audioText: 'She was exhausted because she had been debugging all night' },
      { text: 'After we had verified the checksums, we deployed the binary.', context: 'Verification strictly preceded the deployment.', audioText: 'After we had verified the checksums we deployed the binary' },
      { text: 'They had already signed the contract when the competitor matched the offer.', context: 'Contract execution completed before counter-offer arrived.', audioText: 'They had already signed the contract when the competitor matched the offer' },
      { text: 'He didn’t recognize the codebase because the architect had rewritten it.', context: 'Past refactoring caused past unfamiliarity.', audioText: 'He didn’t recognize the codebase because the architect had rewritten it' },
      { text: 'By 2020, our startup had expanded across three continents.', context: 'Milestone completed before a past calendar threshold.', audioText: 'By 2020 our startup had expanded across three continents' },
    ],
    realLifeExamples: [
      {
        text: 'When we finally arrived at the cinema, the movie had already started and the theater was dark.',
        situation: 'Arriving late for an evening movie.',
        context: 'Movie start preceded arrival.',
      },
      {
        text: 'I couldn’t pay for the groceries because I had left my wallet on the kitchen counter.',
        situation: 'Checkout counter embarrassment.',
        context: 'Past predicament caused by an earlier forgotten wallet.',
      },
      {
        text: 'She had already eaten lunch when her colleagues invited her out to pizza.',
        situation: 'Workplace lunch invitation.',
        context: 'Prior meal preventing participation.',
      },
    ],
    professionalExamples: [
      {
        text: 'By the time the incident commander declared a Sev-1 outage, automated failovers had already restored eighty percent of traffic.',
        context: 'Formal post-mortem architecture review.',
        tone: 'Analytical, retrospective, reassuring',
      },
      {
        text: 'The audit revealed that an engineer had committed private SSH keys to the public repository two weeks prior.',
        context: 'Security compliance disclosure.',
        tone: 'Formal, objective, serious',
      },
      {
        text: 'We were confident during the demo because we had rehearsed the end-to-end user flow three times.',
        context: 'Sprint review retrospective.',
        tone: 'Prepared, professional',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The consumer group rebalanced because the heartbeat thread had timed out during garbage collection.',
        devContext: 'Apache Kafka consumer group diagnostics.',
        analogy: 'An earlier heartbeat timeout triggering a subsequent cluster rebalance.',
      },
      {
        text: 'The migration script aborted because a previous migration had left an orphaned foreign key constraint.',
        devContext: 'Database schema migration failure.',
        analogy: 'Unresolved historical state blocking a subsequent transactional DDL step.',
      },
      {
        text: 'Git rejected the push because another developer had updated the remote branch with new commits.',
        devContext: 'Git non-fast-forward conflict.',
        analogy: 'Remote history diverged earlier, preventing a subsequent push.',
      },
    ],
    contrast: {
      conceptA: 'Sequential Past Simple (Event A, then Event B)',
      conceptB: 'Past Perfect (Event A HAD happened before Event B)',
      differences: [
        { aspect: 'Chronology', optionA: 'Actions told in forward chronological order ("I opened the door and walked in").', optionB: 'Narrative anchor steps backward to an earlier event ("When I walked in, he had left").' },
        { aspect: 'Formula', optionA: 'Subject + V2, and Subject + V2.', optionB: 'When/Before + Subject + V2, Subject + HAD + V3.' },
        { aspect: 'Crucial Difference', optionA: '"When the fire alarm rang, they evacuated." (Cause ──► immediate reaction).', optionB: '"When the fire alarm rang, they had evacuated." (Impossible: evacuated before the alarm!).' },
        { aspect: 'Isolation', optionA: 'Can stand alone: "I saw the film yesterday."', optionB: 'Cannot stand alone without another past context anchor.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I had visited London in 2019.',
        likelyIntention: 'Saying you traveled to London in 2019.',
        rootCause:
          'Using Past Perfect for a single, isolated past event. Without a second past anchor to relate to, Past Perfect is unnatural.',
        naturalCorrection: 'I visited London in 2019.',
        nativeCadence: 'Never use "had" in isolation for a single past event. Use Past Simple.',
      },
      {
        learnerError: 'When I reached the office, the meeting started.',
        likelyIntention: 'Saying the meeting had already begun before you arrived.',
        rootCause:
          'Using Past Simple for both clauses implies you reached the office, and then the meeting began.',
        naturalCorrection: 'When I reached the office, the meeting had already started.',
        nativeCadence: 'Earlier event MUST use "had started" if it was already underway.',
      },
      {
        learnerError: 'Before we deployed, we have tested everything.',
        likelyIntention: 'Saying testing occurred before deployment in the past.',
        rootCause:
          'Mixing Present Perfect (have tested) with a past clause (before we deployed). A past story requires Past Perfect (had tested).',
        naturalCorrection: 'Before we deployed, we had tested everything.',
        nativeCadence: 'Past narrative requires "had tested", never "have tested".',
      },
    ],
    nativeIntuition:
      'Native speakers treat the Past Perfect as a camera bookmark. When narrating in the past, your story is at Time T-1. If you need to dip into Time T-2 to explain why something was broken, missing, or changed, you use "HAD". The moment you return to the main forward storyline, you immediately drop "had" and resume normal Past Simple.',
    patternRecognitionExercises: [
      {
        id: 't61-q1',
        prompt: 'Which sentence correctly demonstrates that the database backup completed BEFORE the server failure?',
        options: [
          'The database backup completed before the server had failed.',
          'The database backup had completed before the server failed.',
          'The database backup has completed before the server failed.',
          'The database backup had completed before the server had failed.',
        ],
        correctIndex: 1,
        explanation:
          'The earlier action (backup completion) requires the Past Perfect ("had completed"), while the later action (server failure) requires the Past Simple ("failed").',
      },
      {
        id: 't61-q2',
        prompt: 'Identify the sentence that has an unnatural, isolated use of Past Perfect:',
        options: [
          'By the time I graduated, I had built three mobile apps.',
          'I had eaten a sandwich yesterday at noon.',
          'She had never seen an Aurora Borealis until our trip to Norway.',
          'The client confirmed that they had received our architectural proposal.',
        ],
        correctIndex: 1,
        explanation:
          '"I had eaten a sandwich yesterday at noon" is unnatural because it describes an isolated past event without any secondary past reference point. It should simply be: "I ate a sandwich yesterday at noon."',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Explain during an incident post-mortem why a recovery script failed to execute.',
        targetPattern: 'The recovery script failed because someone had [V3] [Component]',
        hint: 'Use Past Perfect to identify the root cause that occurred before the failure.',
        sampleAnswer: 'The recovery script failed because an automated pipeline had revoked the service account credentials earlier that morning.',
      },
      {
        scenario: 'Describe a moment when you joined a project after significant architectural decisions were already locked in.',
        targetPattern: 'By the time I joined the team, they had already [V3] [Decision]',
        hint: 'Establish what occurred prior to your arrival.',
        sampleAnswer: 'By the time I joined the platform squad, they had already migrated the core ledger service from MySQL to DynamoDB.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH NARRATIVE PRECISION: "By the time the alert triggered, our automated failover had already routed traffic to the backup region."',
      timedChallenge:
        'Speak for 45 seconds telling a story about a surprise, an unexpected technical glitch, or a close call, utilizing two "By the time X happened, Y had already happened" structures.',
      durationSeconds: 45,
      roleplayPrompt:
        '"We discovered that a previous migration had corrupted the customer IDs, so we rolled back before anyone noticed."',
    },
    recallTest: [
      {
        question: 'What is wrong with saying: "Last year I had bought a new laptop"?',
        hiddenAnswer:
          'Past Perfect cannot be used in isolation for a single past event with an explicit timestamp. It must be: "Last year I bought a new laptop." Past Perfect requires a secondary past reference anchor to relate to.',
      },
      {
        question: 'What is the dramatic difference between: "When the boss arrived, the team started the presentation" vs. "When the boss arrived, the team had started the presentation"?',
        hiddenAnswer:
          'In sentence 1, the team politely waited for the boss to arrive before beginning. In sentence 2, the team began the presentation earlier, and the boss walked in mid-presentation.',
      },
    ],
    revisionConnection:
      'Having mapped every nuance of past and present horizons, Chapter 64 points the telescope toward the horizon: The Future Vector Triad (WILL vs. GOING TO vs. Present Continuous for Scheduled Events).',
    masteryChallenge:
      'In your next bug report or post-mortem, review every use of "had". Ensure every single one refers to an event that strictly preceded another past event in your story.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 64: THE FUTURE VECTOR TRIAD
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-64',
    partNumber: 5,
    partTitle: 'The Tense & Aspect Engine',
    chapterNumber: 64,
    title: 'The Future Vector Triad (WILL vs. GOING TO vs. Continuous)',
    subtitle: 'Spontaneous Spark vs. Pre-Planned Trajectory vs. Locked Calendar Commitment',
    level: 'Tier 3',
    readingTimeMinutes: 17,
    dna: {
      coreConcept: 'The Commitment Ladder: Instant Decision (WILL) ──► Mental Intention (GOING TO) ──► Locked Calendar (Present Continuous)',
      mentalModel:
        'English does not possess a single "future tense". It uses three distinct psychological vectors to talk about tomorrow: 1) WILL = The Instant Spark. A spontaneous decision made right at the moment of speech ("The phone is ringing; I’ll answer it"), a formal promise, or a speculative prediction. 2) BE GOING TO = The Pre-Planned Trajectory. An intention decided BEFORE the moment of speech, or an outcome made obvious by current physical evidence ("Look at those black clouds; it is going to rain"). 3) PRESENT CONTINUOUS = The Locked Calendar. A fixed, scheduled appointment arranged with another human or system ("I am meeting the VP tomorrow at 10 AM").',
      whyEnglishUsesIt:
        'Over-relying on WILL makes your English sound robotic, cold, and indecisive. If a hiring manager asks about your plans and you say "I will learn React", it sounds like a passing thought. Saying "I am going to learn React" communicates premeditated focus and commitment.',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine three future launch pads: 1) A lighter sparking a sudden flame (WILL: instant decision). 2) A rocket sitting on a launchpad with fuel pumping into its tanks and countdown clock ticking (BE GOING TO: intention / visible trajectory). 3) An engraved calendar invitation signed by two parties with ink dried into the parchment (PRESENT CONTINUOUS: scheduled commitment).',
      schematic: `
   [ THE FUTURE COMMITMENT LADDER ]
   VECTOR 1: WILL (The Instant Spark / Promise)
   - Decision made AT the moment of speech
   - "I’ll help you with that PR." / "I will call you tonight."
   
   VECTOR 2: BE GOING TO (Premeditated Intention / Evidence)
   - Decided BEFORE this conversation, or physical signs visible
   - "We are going to rewrite the frontend in Next.js." (Decision already made)
   - "Look at that memory graph; the container is going to crash." (Evidence)
   
   VECTOR 3: PRESENT CONTINUOUS (The Locked Calendar Event)
   - Fixed time, place, and coordination with others
   - "I am presenting at the conference on Thursday at 2:00 PM."
`,
    },
    pattern: {
      formula: 'WILL + Base Verb (Instant/Promise) | BE GOING TO + Base Verb (Intention/Evidence) | BE + Verb-ING (Calendar)',
      breakdown: [
        { element: 'WILL + Base Verb', meaning: 'Spontaneous offers, promises, quick reactions, detached future predictions.' },
        { element: 'BE GOING TO + Base Verb', meaning: 'Prior decisions made before speaking; predictions based on present sensory evidence.' },
        { element: 'Present Continuous for Future', meaning: 'Arranged, locked commitments involving other people, travel tickets, or calendar invites.' },
        { element: 'THE "WILL" IN IF-CLAUSE BAN', meaning: 'Never put "will" inside an IF clause or temporal clause: "When I arrive" (NOT "When I will arrive").' },
      ],
      notes: 'Tone nuance: Native executives use Present Continuous to project complete calendar certainty ("We are launching next Tuesday").',
    },
    basicExamples: [
      { text: 'I’ll grab you a coffee while I’m down there.', context: 'Spontaneous offer at moment of speech (WILL).', audioText: 'I’ll grab you a coffee while I’m down there' },
      { text: 'We are going to migrate to TypeScript next quarter.', context: 'Pre-decided team strategy (GOING TO).', audioText: 'We are going to migrate to TypeScript next quarter' },
      { text: 'I am meeting the security auditor tomorrow at nine.', context: 'Locked calendar appointment (Continuous).', audioText: 'I am meeting the security auditor tomorrow at nine' },
      { text: 'Look at the queue depth; the database is going to choke.', context: 'Prediction based on live visual evidence (GOING TO).', audioText: 'Look at the queue depth the database is going to choke' },
      { text: 'Don’t worry, I will never share your private key.', context: 'Solemn personal promise (WILL).', audioText: 'Don’t worry I will never share your private key' },
      { text: 'What are you going to do about the failed test suite?', context: 'Asking about a planned strategy (GOING TO).', audioText: 'What are you going to do about the failed test suite' },
      { text: 'Our team is flying to Berlin on Friday for the hackathon.', context: 'Fixed travel logistics arranged (Continuous).', audioText: 'Our team is flying to Berlin on Friday for the hackathon' },
      { text: 'The doorbell rang; I’ll get it.', context: 'Immediate reaction to an event (WILL).', audioText: 'The doorbell rang I’ll get it' },
      { text: 'AI will transform software engineering over the next decade.', context: 'Long-term detached philosophical prediction (WILL).', audioText: 'AI will transform software engineering over the next decade' },
      { text: 'We are releasing version 2.4 next Monday.', context: 'Scheduled commercial release date (Continuous).', audioText: 'We are releasing version 2.4 next Monday' },
    ],
    realLifeExamples: [
      {
        text: 'I’m going to clean out the garage this weekend; I’ve already bought the storage bins.',
        situation: 'Sharing weekend domestic plans.',
        context: 'Pre-planned intention backed by physical preparation (going to).',
      },
      {
        text: 'Oh, you don’t have an umbrella? Here, take mine, I’ll borrow Sarah’s.',
        situation: 'Sudden rainstorm outside the office.',
        context: 'Spontaneous helpful offer (I’ll borrow).',
      },
      {
        text: 'I am having dinner with my parents tonight at that new Italian bistro.',
        situation: 'Explaining evening availability.',
        context: 'Scheduled calendar commitment with others (having dinner).',
      },
    ],
    professionalExamples: [
      {
        text: 'We are deprecating the legacy OAuth v1 endpoints at the end of this sprint.',
        context: 'API developer announcement.',
        tone: 'Decisive, scheduled, locked',
      },
      {
        text: 'I will personally oversee the database migration to ensure zero data loss.',
        context: 'Executive assurance during high-stakes planning.',
        tone: 'Solemn, accountable, authoritative',
      },
      {
        text: 'Based on our current burn rate, we are going to need additional cloud compute credits by October.',
        context: 'Budget forecast review.',
        tone: 'Analytical, evidenced-based',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'If the primary database node crashes, the sentinel will promote the replica automatically.',
        devContext: 'High-availability failover rule.',
        analogy: 'Deterministic conditional rule execution (WILL).',
      },
      {
        text: 'We are going to refactor this monolith into domain-driven microservices over the next six sprints.',
        devContext: 'Engineering architectural roadmap.',
        analogy: 'Premeditated technical trajectory backed by design docs (GOING TO).',
      },
      {
        text: 'I am pairing with Dave tomorrow morning to diagnose the race condition in the auth token cache.',
        devContext: 'Daily standup commitment.',
        analogy: 'Locked two-person collaborative engineering session (Present Continuous).',
      },
    ],
    contrast: {
      conceptA: 'WILL (The Instant Spark)',
      conceptB: 'BE GOING TO (The Pre-Decided Vector)',
      differences: [
        { aspect: 'Decision Timing', optionA: 'Made right now as you speak ("Oh, we’re out of milk? I’ll buy some").', optionB: 'Made prior to this conversation ("Yes, I know; I’m going to buy some on my way home").' },
        { aspect: 'Predictions', optionA: 'Subjective intuition or long-term forecast ("I think they will win").', optionB: 'Based on present tangible evidence ("Look at the score, they are going to win!").' },
        { aspect: 'Offers & Promises', optionA: 'Exclusive vehicle for promises: "I will help you", "I will fix it".', optionB: 'Unnatural for spontaneous offers (*"I am going to help you with that box"* sounds clumsy).' },
        { aspect: 'Contractual Tone', optionA: 'Formal agreements and architectural specifications.', optionB: 'Practical operational roadmaps and everyday project plans.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'When I will reach Bangalore, I will call you.',
        likelyIntention: 'Promising to call someone upon arrival.',
        rootCause:
          'Placing "will" inside a time clause (when, after, as soon as, before). Time clauses require Present Simple.',
        naturalCorrection: 'When I reach Bangalore, I will call you.',
        nativeCadence: 'Rule: Never put "will" inside "when", "if", or "as soon as".',
      },
      {
        learnerError: 'Tomorrow I will meet the investor at 10 AM.',
        likelyIntention: 'Stating a locked calendar appointment.',
        rootCause:
          'Over-relying on WILL for scheduled appointments with other people. Native cadence prefers Present Continuous.',
        naturalCorrection: 'Tomorrow I am meeting the investor at 10 AM.',
        nativeCadence: 'Calendar meetings with people: use Present Continuous ("I am meeting").',
      },
      {
        learnerError: 'The phone is ringing. I am going to answer it.',
        likelyIntention: 'Reacting to a ringing phone.',
        rootCause:
          'Using "going to" for an instantaneous reaction. "Going to" implies you planned to answer the phone before it even rang!',
        naturalCorrection: 'The phone is ringing. I’ll get it. / I’ll answer it.',
        nativeCadence: 'Instant reaction = I will (I’ll).',
      },
    ],
    nativeIntuition:
      'Native speakers feel the pre-ignition spark of the future. When a decision is born right now, your tongue creates the crisp single syllable "I’ll". When a plan already exists in your brain, your mind unpacks the rolling three syllables "I’m going to". When the date is inked on a calendar with a colleague, your mind treats it as an already-unfolding present reality: "I’m meeting him tomorrow".',
    patternRecognitionExercises: [
      {
        id: 't64-q1',
        prompt: 'Someone drops a stack of papers in the hallway. Which response is natural and native?',
        options: [
          'Don’t worry, I am going to pick them up for you.',
          'Don’t worry, I am picking them up for you.',
          'Don’t worry, I’ll help you pick them up.',
          'Don’t worry, I will have picked them up.',
        ],
        correctIndex: 2,
        explanation:
          'Spontaneous offers made at the moment of an event strictly require "I will" / "I’ll".',
      },
      {
        id: 't64-q2',
        prompt: 'Which sentence correctly avoids "will" inside a temporal clause?',
        options: [
          'As soon as the build will finish, we will deploy to production.',
          'As soon as the build finishes, we will deploy to production.',
          'As soon as the build is finishing, we will deploy to production.',
          'As soon as the build will be finishing, we will deploy.',
        ],
        correctIndex: 1,
        explanation:
          'Subordinate time clauses introduced by "as soon as", "when", or "before" require the Present Simple ("finishes"), not future "will".',
      },
    ],
    productionPrompts: [
      {
        scenario: 'A colleague mentions in standup that they are overwhelmed by a critical bug. Offer immediate help.',
        targetPattern: 'I’ll + [Base Verb] + with you right after standup',
        hint: 'Use the spontaneous offer modal WILL.',
        sampleAnswer: 'I’ll jump on a huddle with you right after standup and we can step through the debugger together.',
      },
      {
        scenario: 'Share your scheduled interview schedule for tomorrow.',
        targetPattern: 'Tomorrow I am [Verb+ing] [Person] at [Time]',
        hint: 'Use Present Continuous for scheduled calendar events.',
        sampleAnswer: 'Tomorrow I am interviewing two senior frontend candidates at 11:00 AM and 2:30 PM.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH SHIFTING INTENTION: "I’ll answer the phone, because I’m going to tell him that we are launching tomorrow morning!"',
      timedChallenge:
        'Speak for 45 seconds outlining your upcoming week: one spontaneous promise using WILL, two strategic goals using GOING TO, and two locked meetings using PRESENT CONTINUOUS.',
      durationSeconds: 45,
      roleplayPrompt:
        '"We are going to overhaul the authentication service next sprint, but I am meeting with our security lead tomorrow to review the architecture."',
    },
    recallTest: [
      {
        question: 'Why is "When I will see him, I will tell him" grammatically incorrect?',
        hiddenAnswer:
          'Because "when" introduces a time condition clause. English grammar forbids "will" inside time clauses; it must take Present Simple: "When I see him, I will tell him."',
      },
      {
        question: 'What is the subtle difference between "I will visit my parents this weekend" and "I am visiting my parents this weekend"?',
        hiddenAnswer:
          '"I will visit" sounds like a detached intention or prediction. "I am visiting" implies that tickets are booked, dates are agreed upon, and parents are expecting your arrival (locked calendar event).',
      },
    ],
    revisionConnection:
      'With the future triad mastered, Chapter 65 scales to the final chronological horizons: Future Perfect (WILL HAVE + V3) and Future Continuous (In-Flight Tomorrow).',
    masteryChallenge:
      'Audit your standup updates this week. Stop saying "Tomorrow I will work on X". Replace it with "Tomorrow I am going to tackle X" or "I am meeting with Y". Experience the immediate increase in authority.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 65: FUTURE PERFECT & FUTURE CONTINUOUS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-65',
    partNumber: 5,
    partTitle: 'The Tense & Aspect Engine',
    chapterNumber: 65,
    title: 'Future Perfect & Future Continuous (Looking Back from Tomorrow)',
    subtitle: 'Milestones Completed by Future Horizons (WILL HAVE + V3) & In-Flight Future Windows',
    level: 'Tier 3',
    readingTimeMinutes: 17,
    dna: {
      coreConcept: 'The Future Viewport: Standing at a Future Checkpoint and Looking Back (Perfect) or Looking In-Flight (Continuous)',
      mentalModel:
        'Imagine stepping into a time machine and setting the dial to "NEXT FRIDAY AT 5:00 PM". When the door opens, you step out onto that future checkpoint. Now look down at your checklist: 1) FUTURE PERFECT (WILL HAVE + V3) looks backward from that Friday checkpoint at tasks that will be finished and checked off ("By Friday, we will have shipped the beta"). 2) FUTURE CONTINUOUS (WILL BE + V-ING) looks at what active film reel will be rolling at that exact coordinate ("Don’t call me at 2:00 PM tomorrow; I will be presenting to executive leadership").',
      whyEnglishUsesIt:
        'In corporate negotiations, sprint commitments, and executive roadmaps, stating "By Q4, we will finish" is vague. Saying "By Q4, we WILL HAVE ONBOARDED fifty enterprise clients" declares an accomplished future milestone with undeniable executive polish.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a timeline calendar with a glowing red flag planted firmly on "DECEMBER 31". Stand right beside that flag and turn your head around to look backward toward today. Everything completed between today and that flag is stamped: "WILL HAVE ACHIEVED". Now picture yourself floating mid-air at 3:00 PM tomorrow, with your hands moving on a keyboard: "WILL BE CODING".',
      schematic: `
   [ THE FUTURE HORIZON MATRIX ]
   TODAY                                             FUTURE CHECKPOINT ("BY FRIDAY")
   ●───────────────────────────────────────────────────────────🚩
   ═══════════════════ WILL HAVE + V3 ═══════════════════════► (Completed before flag)
   "By Friday, we WILL HAVE DEPLOYED the new auth service."
   
   AT A SPECIFIC FUTURE TIMESTAMP ("TOMORROW AT 3 PM"):
   "I WILL BE CODING" ──► ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ (Active in-flight film reel)
`,
    },
    pattern: {
      formula: 'Future Perfect: Subject + WILL HAVE + [Past Participle: V3] | Future Continuous: Subject + WILL BE + [Verb + -ING]',
      breakdown: [
        { element: 'Future Perfect (WILL HAVE + V3)', meaning: 'Action will be completed BEFORE a specified future deadline (typically triggered by "BY [time]").' },
        { element: 'Future Continuous (WILL BE + V-ing)', meaning: 'Action will be in the middle of happening at a precise future moment.' },
        { element: 'BY + Time Threshold', meaning: 'The classic Future Perfect marker: by tomorrow, by next quarter, by the time you arrive.' },
        { element: 'Polite Inquiry Function', meaning: 'Future Continuous softens inquiries without pressuring: "Will you be using the projector this afternoon?"' },
      ],
      notes: 'Watch out: "By the time" is a time conjunction, so its verb takes Present Simple: "By the time you arrive, we will have finished" (NEVER "will arrive").',
    },
    basicExamples: [
      { text: 'By next Friday, we will have migrated all databases to AWS.', context: 'Milestone completed before a future deadline.', audioText: 'By next Friday we will have migrated all databases to AWS' },
      { text: 'This time tomorrow, I will be flying over the Atlantic.', context: 'In-flight continuous action at a future coordinate.', audioText: 'This time tomorrow I will be flying over the Atlantic' },
      { text: 'By the time the sprint concludes, our team will have written fifty tests.', context: 'Accumulated achievement at sprint conclusion.', audioText: 'By the time the sprint concludes our team will have written fifty tests' },
      { text: 'Don’t message him at two; he will be interviewing a staff architect.', context: 'Warning against interrupting an in-flight meeting.', audioText: 'Don’t message him at two he will be interviewing a staff architect' },
      { text: 'Will you be needing the staging environment this evening?', context: 'Polite, non-intrusive routine inquiry.', audioText: 'Will you be needing the staging environment this evening' },
      { text: 'By the end of this year, she will have led four major product launches.', context: 'Career achievement by calendar milestone.', audioText: 'By the end of this year she will have led four major product launches' },
      { text: 'At midnight, the cron job will be re-indexing customer partitions.', context: 'Active automated task during midnight window.', audioText: 'At midnight the cron job will be re-indexing customer partitions' },
      { text: 'By 2030, electric vehicles will have replaced most combustion fleets.', context: 'Macro-economic milestone projection.', audioText: 'By 2030 electric vehicles will have replaced most combustion fleets' },
      { text: 'I will be working from home on Thursday and Friday.', context: 'Routine schedule notification to colleagues.', audioText: 'I will be working from home on Thursday and Friday' },
      { text: 'By the time you wake up, the automated build will have completed.', context: 'Overnight milestone assurance.', audioText: 'By the time you wake up the automated build will have completed' },
    ],
    realLifeExamples: [
      {
        text: 'By the time we pay off the mortgage, our kids will have graduated from college.',
        situation: 'Long-term family financial planning.',
        context: 'Parallel future milestones compared across decades.',
      },
      {
        text: 'Don’t call me between seven and eight tonight; I will be putting the kids to bed.',
        situation: 'Setting personal communication boundaries.',
        context: 'In-flight domestic routine at a specific evening hour.',
      },
      {
        text: 'By next month, I will have lived in this apartment for a full decade.',
        situation: 'Reflecting on an anniversary.',
        context: 'Accumulated duration milestone at a future date.',
      },
    ],
    professionalExamples: [
      {
        text: 'By the conclusion of Q3, engineering will have achieved ninety-nine point nine percent uptime across all production clusters.',
        context: 'Executive quarterly OKR commitment.',
        tone: 'Committed, authoritative, measurable',
      },
      {
        text: 'Our technical director will be representing our company at the cloud summit in Las Vegas next week.',
        context: 'Corporate external relations notice.',
        tone: 'Formal, routine, informational',
      },
      {
        text: 'By the time the European data regulations take effect, our platform will have implemented end-to-end zero-trust encryption.',
        context: 'Compliance roadmap briefing.',
        tone: 'Reassuring, structured, strategic',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'By the time the batch worker finishes, it will have ingested over ten million clickstream records.',
        devContext: 'Big data pipeline throughput expectation.',
        analogy: 'Projecting total accumulated processed volume by pipeline completion.',
      },
      {
        text: 'During the maintenance window from 01:00 to 03:00 UTC, the database will be running in read-only replica mode.',
        devContext: 'DevOps scheduled maintenance notification.',
        analogy: 'Active system operating state during a scheduled window.',
      },
      {
        text: 'By sprint four, the mobile team will have integrated the biometric authentication SDK.',
        devContext: 'Scrum sprint planning roadmap.',
        analogy: 'A defined feature milestone delivered by a future sprint checkpoint.',
      },
    ],
    contrast: {
      conceptA: 'Future Perfect (WILL HAVE + V3)',
      conceptB: 'Future Continuous (WILL BE + V-ING)',
      differences: [
        { aspect: 'Perspective', optionA: 'Finished, completed, checked off before a deadline ("will have finished").', optionB: 'Unfinished, in-progress, active at a timestamp ("will be working").' },
        { aspect: 'Preposition Marker', optionA: 'BY [time]: "By Friday", "By next month", "By the time we launch".', optionB: 'AT / DURING [time]: "At 3 PM", "During the release", "This time tomorrow".' },
        { aspect: 'Focus', optionA: 'Result, achievement, accumulated total.', optionB: 'Atmosphere, activity in-flight, or polite routine inquiry.' },
        { aspect: 'Example', optionA: '"By 5 PM, I will have reviewed all PRs." (Finished!).', optionB: '"At 5 PM, I will be reviewing PRs." (In the middle of reading). ' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'By next Friday, I will finish the task.',
        likelyIntention: 'Stating a deadline milestone.',
        rootCause:
          'Using simple "will finish" with the deadline preposition "by". While understood, "by [time]" naturally calls for the Future Perfect to express completion prior to the deadline.',
        naturalCorrection: 'By next Friday, I will have finished the task.',
        nativeCadence: 'Rule: "BY [future time]" loves "WILL HAVE [V3]".',
      },
      {
        learnerError: 'By the time you will arrive, we will have prepared dinner.',
        likelyIntention: 'Saying dinner will be ready before arrival.',
        rootCause:
          'Inserting "will" inside the time clause ("by the time you will arrive"). Time clauses require Present Simple.',
        naturalCorrection: 'By the time you arrive, we will have prepared dinner.',
        nativeCadence: 'Never put "will" inside "by the time". Say: "By the time you arrive...".',
      },
      {
        learnerError: 'Tomorrow at 3 PM, I will present to the client.',
        likelyIntention: 'Warning that you are busy at 3 PM.',
        rootCause:
          'Using Future Simple instead of Future Continuous. Future Simple sounds like you begin at 3 PM; Future Continuous emphasizes being unavailable and in-flight.',
        naturalCorrection: 'Tomorrow at 3 PM, I will be presenting to the client.',
        nativeCadence: 'Use "will be doing" to indicate you will be actively busy during a time slot.',
      },
    ],
    nativeIntuition:
      'Native speakers use the Future Perfect to project certainty and confidence. When an executive says "We will do it", it sounds like a wish. When they say "By Q3, we WILL HAVE DELIVERED it", they are mentally standing in the future, looking back at the completed monument, daring anyone to doubt that it will exist.',
    patternRecognitionExercises: [
      {
        id: 't65-q1',
        prompt: 'Choose the most natural sentence for committing to a project deadline:',
        options: [
          'By the end of the month, our team will have completed the SOC-2 audit.',
          'By the end of the month, our team will be completed the SOC-2 audit.',
          'By the end of the month, our team will complete the SOC-2 audit already.',
          'By the end of the month, our team had completed the SOC-2 audit.',
        ],
        correctIndex: 0,
        explanation:
          '"By the end of the month" pairs seamlessly with Future Perfect ("will have completed") to describe a milestone achieved before the deadline.',
      },
      {
        id: 't65-q2',
        prompt: 'Which sentence correctly warns a team member not to schedule a meeting at 11:00 AM tomorrow?',
        options: [
          'Please don’t schedule it then; I will interview a candidate.',
          'Please don’t schedule it then; I will be interviewing a candidate.',
          'Please don’t schedule it then; I will have interviewed a candidate.',
          'Please don’t schedule it then; I have been interviewing a candidate.',
        ],
        correctIndex: 1,
        explanation:
          'Future Continuous ("will be interviewing") highlights an ongoing, in-flight commitment during that specific future hour, making you unavailable.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Draft an executive OKR milestone for your engineering squad for the upcoming quarter.',
        targetPattern: 'By the end of Q[Number], we will have [V3] [Milestone]',
        hint: 'Use Future Perfect with an explicit quarterly deadline.',
        sampleAnswer: 'By the end of Q3, we will have decreased our P99 API response latency by forty percent and migrated all telemetry to Prometheus.',
      },
      {
        scenario: 'Politely ask a senior colleague if they will be attending an upcoming town hall or if they have a conflict.',
        targetPattern: 'Will you be attending [Event] this [Day]?',
        hint: 'Use the polite Future Continuous inquiry structure.',
        sampleAnswer: 'Will you be attending the engineering town hall this Thursday, or will you be traveling for client meetings?',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH EXECUTIVE CONFIDENCE: "By the time our sprint concludes on Friday, we will have shipped the beta, and we will be celebrating our release!"',
      timedChallenge:
        'Speak for 45 seconds projecting your life or career five years from now: state two major milestones you WILL HAVE ACHIEVED, and what you WILL BE DOING on a typical Tuesday afternoon.',
      durationSeconds: 45,
      roleplayPrompt:
        '"By next month, our squad will have automated the entire deployment pipeline, so we won’t be spending our weekends on manual rollouts."',
    },
    recallTest: [
      {
        question: 'Why does "By the time you call me, I will have gone to bed" use Present Simple in the first clause?',
        hiddenAnswer:
          'Because "by the time" functions as a temporal conjunction (like when, after, before). In English, time clauses cannot take future "will"; they must take the Present Simple ("you call me").',
      },
      {
        question: 'Why is "Will you be using the car tonight?" considered more polite than "Will you use the car tonight?"',
        hiddenAnswer:
          '"Will you use the car?" sounds like a direct request or pressure to make a decision. Future Continuous ("Will you be using...?") simply inquires about routine plans without applying social pressure.',
      },
    ],
    revisionConnection:
      'Congratulations! You have completed Part 5: The Tense & Aspect Engine. You no longer memorize 12 disconnected grammar boxes; you command a unified cinematic camera system across all human timelines.',
    masteryChallenge:
      'Write down your three primary goals for the next six months starting with the phrase: "By [Date], I will have...". Read them aloud every morning with total conviction.',
  },
];
