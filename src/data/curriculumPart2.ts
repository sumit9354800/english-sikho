import { Chapter } from '../types';

export const PART_2_CHAPTERS: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // CHAPTER 7: THE BE ENGINE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-7',
    partNumber: 2,
    partTitle: 'The Core Verb Engines (DNA of Primary Drivers)',
    chapterNumber: 7,
    title: 'The BE Engine (Am / Is / Are / Was / Were)',
    subtitle: 'Identity, Static States, Spatial Coordinates, and Passive Existence',
    level: 'Tier 1 & Tier 2',
    readingTimeMinutes: 14,
    dna: {
      coreConcept: 'Static Existence & State Equivalence (Zero Kinetic Motion)',
      mentalModel:
        'BE acts like the mathematical equals sign (=) or an immutable variable in software. It does not perform an action, move an object, or transform a state. It freezes the timeline and captures a snapshot of identity, condition, or spatial coordinate.',
      whyEnglishUsesIt:
        'English strictly separates state (BE) from transformation (GET). Without BE, you cannot declare what something IS without implying it is currently changing.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a museum portrait hanging quietly on a wall under a spotlight. The painting does not run, melt, or change color. It simply exists on the wall. That silent, motionless snapshot is the BE engine.',
      schematic: `
[ SUBJECT ] ═════════ ( BE = ) ═════════► [ STATE / IDENTITY / LOCATION ]
   "The server"       "is"                  "healthy"
   "The database"     "was"                 "offline"
   "We"               "are"                 "ready"
      ▲                                         ▲
      └────── IMMUTABLE SNAPSHOT (NO MOVEMENT) ─┘
`,
    },
    pattern: {
      formula: 'Subject + BE (am / is / are / was / were / been / being) + [Noun / Adjective / Prepositional Coordinate]',
      breakdown: [
        { element: 'Subject', meaning: 'The entity whose state or identity is being examined.' },
        { element: 'BE Form', meaning: 'Tense-calibrated equals sign (am/is/are for present, was/were for past).' },
        { element: 'Complement', meaning: 'The identity noun ("an engineer"), adjective ("ready"), or location ("at the office").' },
      ],
      notes: 'BE has zero kinetic force. Never use BE when an action or state transition is taking place.',
    },
    basicExamples: [
      { text: 'I am ready.', context: 'Declaring current state of preparation.', audioText: 'I am ready' },
      { text: 'The system is stable.', context: 'Current operational health of software.', audioText: 'The system is stable' },
      { text: 'We are on track.', context: 'Current schedule alignment.', audioText: 'We are on track' },
      { text: 'She is a senior architect.', context: 'Declaring professional identity.', audioText: 'She is a senior architect' },
      { text: 'The build was successful.', context: 'Past static status of a process.', audioText: 'The build was successful' },
      { text: 'They were in the conference room.', context: 'Past physical location coordinate.', audioText: 'They were in the conference room' },
      { text: 'Everything is fine.', context: 'Reassurance of overall state.', audioText: 'Everything is fine' },
      { text: 'The bug is reproducible.', context: 'Engineering property description.', audioText: 'The bug is reproducible' },
      { text: 'He is available now.', context: 'Schedule state confirmation.', audioText: 'He is available now' },
      { text: 'The deadline is next Friday.', context: 'Temporal calendar anchor.', audioText: 'The deadline is next Friday' },
    ],
    realLifeExamples: [
      {
        text: 'I am exhausted after that drive.',
        situation: 'Arriving home late after heavy highway traffic.',
        context: 'Direct declaration of physical condition.',
      },
      {
        text: 'Are you free for lunch tomorrow?',
        situation: 'Asking a coworker or friend about their availability.',
        context: 'Everyday calendar coordination.',
      },
      {
        text: 'The weather is pleasant this evening.',
        situation: 'Making casual small talk outdoors.',
        context: 'Environmental snapshot.',
      },
    ],
    professionalExamples: [
      {
        text: 'The production environment is currently operating within normal latency thresholds.',
        context: 'Incident status report or executive dashboard summary.',
        tone: 'Technical, reassuring, objective',
      },
      {
        text: 'I am confident that this architectural change will resolve the race condition.',
        context: 'Sprint planning and technical review.',
        tone: 'Professional conviction',
      },
      {
        text: 'We are aligned on the core product deliverables for Q3.',
        context: 'Cross-functional stakeholder sync.',
        tone: 'Collaborative consensus',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The microservice is stateless and horizontally scalable.',
        devContext: 'System architecture review.',
        analogy: '`const isStateless = true;` — Static boolean attribute declaration.',
      },
      {
        text: 'Our primary PostgreSQL replica was out of sync for three minutes.',
        devContext: 'Root cause analysis (RCA) post-mortem.',
        analogy: 'Snapshot of a specific timestamp where health check failed.',
      },
      {
        text: 'The token is expired.',
        devContext: 'API authentication middleware error handling.',
        analogy: 'Evaluating `token.exp < Date.now()` — an immutable boolean check.',
      },
    ],
    contrast: {
      conceptA: 'BE (Static Snapshot)',
      conceptB: 'GET (Kinetic Transformation)',
      differences: [
        { aspect: 'Nature of Motion', optionA: 'Zero motion. Fixed state (=).', optionB: 'Continuous movement. State transition (──►).' },
        { aspect: 'Cold Example', optionA: '"I am cold." (I am already shivering; state is active).', optionB: '"I am getting cold." (Temperature is dropping; process is active).' },
        { aspect: 'Ready Example', optionA: '"We are ready." (Preparation is done; standing at the door).', optionB: '"We are getting ready." (Putting shoes on; in motion).' },
        { aspect: 'Mental Image', optionA: 'A photograph on a wall.', optionB: 'A video clip of ice melting.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I am knowing the answer.',
        likelyIntention: 'Expressing that you possess the knowledge right now.',
        rootCause:
          'In Hindi, "Mujhe pata hai" or "Main jaan raha hoon" is sometimes conceptualized continuously. But in English, "know" is a cognitive state verb; you either know it or you don’t.',
        naturalCorrection: 'I know the answer.',
        nativeCadence: 'Drop the auxiliary BE + -ing; use direct simple present for cognitive states.',
      },
      {
        learnerError: 'He is belonging to Mumbai.',
        likelyIntention: 'Saying someone comes from Mumbai.',
        rootCause:
          'Treating origin and affiliation as a continuous progressive action rather than a permanent state.',
        naturalCorrection: 'He is from Mumbai. / He comes from Mumbai.',
        nativeCadence: 'Use BE + preposition ("is from") for origin.',
      },
      {
        learnerError: 'The server is in running condition.',
        likelyIntention: 'Confirming the server works.',
        rootCause: 'Translating bureaucratic Indian English literal noun strings ("running condition").',
        naturalCorrection: 'The server is running. / The server is operational.',
        nativeCadence: 'Use the predicate adjective "operational" or the simple verb.',
      },
    ],
    nativeIntuition:
      'Native speakers feel BE as an anchor point. When they say "I am tired", they feel the weight of the blanket over them right now. When they want to express the onset of fatigue, their brain automatically shifts gear to GET: "I am getting tired".',
    patternRecognitionExercises: [
      {
        id: 'be-q1',
        prompt: 'Choose the most natural sentence to describe a deployment that completed 10 minutes ago and is now live:',
        options: [
          'The release is getting deployed right now.',
          'The release is live in production.',
          'The release was being live since 10 minutes.',
          'The release is in live condition.',
        ],
        correctIndex: 1,
        explanation:
          '"The release is live" cleanly uses BE as an identity/state equals sign. The deployment is finished, so no kinetic action verb is needed.',
      },
      {
        id: 'be-q2',
        prompt: 'Which statement properly describes your readiness for an interview?',
        options: [
          'I am preparing since two hours.',
          'I am ready for the interview.',
          'I am being ready for the interview.',
          'I get ready since yesterday.',
        ],
        correctIndex: 1,
        explanation:
          '"I am ready" declares the achieved state. "I am being ready" is ungrammatical because "ready" is an adjective of state, not a deliberate temporary performance.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are leading a stand-up. You need to inform the team that the authentication microservice is completely functional and ready for testing.',
        targetPattern: 'Subject + BE + Adjective Complement',
        hint: 'Use "The auth service is..."',
        sampleAnswer: 'The authentication service is fully operational and ready for QA testing.',
      },
      {
        scenario: 'A project manager asks if you have time for a quick 5-minute sync.',
        targetPattern: 'BE + Subject + Available',
        hint: 'Confirm your current state directly.',
        sampleAnswer: 'Yes, I am free right now. Feel free to ring me.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH SHARP VOCAL PROJECTION: "The system is stable, the tests are green, and we are ready to deploy."',
      timedChallenge:
        'Speak continuously for 30 seconds describing the current status of your project or workstation using ONLY the BE engine (is, are, was, were). No action verbs.',
      durationSeconds: 30,
      roleplayPrompt:
        '"Hey team, quick update: The staging build is stable, all integration tests are green, and the API documentation is up to date."',
    },
    recallTest: [
      {
        question: 'What is the exact kinetic difference between "I am sick" and "I am getting sick"?',
        hiddenAnswer:
          '"I am sick" is a static state (BE = snapshot, disease is present). "I am getting sick" is a state transition (GET = video, immune system is deteriorating towards illness).',
      },
      {
        question: 'Why is "He is having two cars" ungrammatical in native English?',
        hiddenAnswer:
          'Because "have" representing ownership is a permanent relationship state (like BE). State verbs do not take the continuous -ing form when denoting possession.',
      },
    ],
    revisionConnection:
      'BE establishes the motionless baseline. In Chapter 8, we introduce its direct kinetic counterpart: the GET Engine, which propels states into motion.',
    masteryChallenge:
      'Audit your last 5 Slack messages or emails. Find any places where you wrote clumsy phrases like "is in completed state" or "is in working condition" and rewrite them with crisp BE complements ("is complete", "is working").',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 8: THE GET ENGINE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-8',
    partNumber: 2,
    partTitle: 'The Core Verb Engines (DNA of Primary Drivers)',
    chapterNumber: 8,
    title: 'The GET Engine (The Universal Kinetic Transformer)',
    subtitle: 'State Transitions, Receiving, Reaching, and Comprehension',
    level: 'Tier 1 & Tier 2',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'The Dynamic Vector of State Transition (Before ──► After)',
      mentalModel:
        'GET is the single most versatile engine in the English language. It represents the arrow connecting State A to State B. It covers 4 primary kinetic manifestations: 1) Becoming (state change), 2) Obtaining/Receiving (possession change), 3) Arriving/Reaching (spatial change), and 4) Grasping/Understanding (cognitive change).',
      whyEnglishUsesIt:
        'Latinate English uses heavy, academic verbs (become, acquire, receive, arrive, comprehend). Native Germanic English uses GET to keep daily communication rapid, agile, and kinetic.',
    },
    mentalMovie: {
      sceneDescription:
        'Watch a glass of ice water sitting in the summer sun. At 12:00 PM it is solid ice. By 12:15 PM it has transformed into lukewarm liquid. The arrow of transformation between ice and water is GET. Or visualize an Amazon parcel being placed into your open hands: Before = empty hands; After = parcel in hands. That arrival is GET.',
      schematic: `
[ BEFORE: STATE A ] ═════════► [ GET (TRANSITION) ] ═════════► [ AFTER: STATE B ]
   Not ready                          "get ready"                  Ready
   Warm coffee                        "gets cold"                  Cold coffee
   Confusion                          "get it"                     Comprehension
   At home                            "get to the office"          At the office
`,
    },
    pattern: {
      formula: '1) GET + Adjective (Become) | 2) GET + Noun (Obtain) | 3) GET + Place (Arrive) | 4) GET + Object + V3 (Causative)',
      breakdown: [
        { element: 'GET + Adjective', meaning: 'Shift into a new physical, emotional, or operational state ("get angry", "get dark").' },
        { element: 'GET + Noun', meaning: 'Receive, fetch, purchase, or contract something ("get an email", "get coffee").' },
        { element: 'GET + Location', meaning: 'Overcome physical distance and reach destination ("get to work", "get home").' },
        { element: 'GET + Object + V3', meaning: 'Cause someone else to perform a task ("get the bug fixed", "get the PR approved").' },
      ],
      notes: 'Notice that GET never stays stationary. It is always an engine of transition.',
    },
    basicExamples: [
      { text: 'I get it.', context: 'Comprehending an idea or explanation.', audioText: 'I get it' },
      { text: 'It is getting late.', context: 'Time progressing into night.', audioText: 'It is getting late' },
      { text: 'Did you get my email?', context: 'Inquiring about message delivery.', audioText: 'Did you get my email' },
      { text: 'I got stuck in traffic.', context: 'Entering an immobilized state.', audioText: 'I got stuck in traffic' },
      { text: 'What time did you get home?', context: 'Arrival at residence.', audioText: 'What time did you get home' },
      { text: 'We need to get this done.', context: 'Driving a task to completion.', audioText: 'We need to get this done' },
      { text: 'She got promoted last month.', context: 'Receiving an elevated rank.', audioText: 'She got promoted last month' },
      { text: 'The battery is getting low.', context: 'Charge depleting towards zero.', audioText: 'The battery is getting low' },
      { text: 'Can I get you a cup of water?', context: 'Offering to fetch something.', audioText: 'Can I get you a cup of water' },
      { text: 'Let’s get started.', context: 'Transitioning from waiting to active work.', audioText: "Let's get started" },
    ],
    realLifeExamples: [
      {
        text: 'Let me grab my jacket; it is getting chilly outside.',
        situation: 'Noticing the temperature dropping at sunset.',
        context: 'State transition from warm to cold.',
      },
      {
        text: 'I didn’t get much sleep last night, so I am running on caffeine.',
        situation: 'Explaining low morning energy to a peer.',
        context: 'Failure to obtain adequate rest.',
      },
      {
        text: 'Give me a call as soon as you get to the station.',
        situation: 'Coordinating travel pickups.',
        context: 'Reaching a geographical point.',
      },
    ],
    professionalExamples: [
      {
        text: 'I got pulled into an urgent client escalation, so I will need to push our 1-on-1 by thirty minutes.',
        context: 'Professional calendar rescheduling notice.',
        tone: 'Courteous, transparent, proactive',
      },
      {
        text: 'We need to get stakeholder sign-off before merging this pull request.',
        context: 'Engineering governance and process compliance.',
        tone: 'Assertive, responsible',
      },
      {
        text: 'Once we get the latency down under 100 milliseconds, we can roll out to 50% of users.',
        context: 'Performance optimization milestone meeting.',
        tone: 'Technical, goal-oriented',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The worker threads get blocked whenever the cache invalidates simultaneously.',
        devContext: 'Concurrency bug report.',
        analogy: '`threads.map(t => t.status = "BLOCKED")` — Dynamic transition triggered by cache miss.',
      },
      {
        text: 'We need to get this hotfix deployed before the marketing campaign launches at 9 AM.',
        devContext: 'Release engineering coordination.',
        analogy: 'Driving the deployment pipeline state from pending to deployed.',
      },
      {
        text: 'I will get the PR reviewed as soon as my local build finishes.',
        devContext: 'Stand-up commitment or GitHub thread comment.',
        analogy: 'Registering an async callback once local compilation succeeds.',
      },
    ],
    contrast: {
      conceptA: 'GET (Dynamic Transition)',
      conceptB: 'HAVE (Static Possession)',
      differences: [
        { aspect: 'Temporal State', optionA: 'Focus on the arrival / change moment.', optionB: 'Focus on ongoing existence within perimeter.' },
        { aspect: 'Job Example', optionA: '"I got a job." (Received offer; transition from unemployed to hired).', optionB: '"I have a job." (Currently employed; ongoing relationship).' },
        { aspect: 'Idea Example', optionA: '"I just got an idea!" (Flash of inspiration arriving into mind).', optionB: '"I have an idea." (Holding the idea in my current thoughts).' },
        { aspect: 'Speed', optionA: 'Kinetic, punchy, active.', optionB: 'Static, settled, stable.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I am not getting your point.',
        likelyIntention: 'Saying you don’t understand what someone means.',
        rootCause:
          'Using the continuous present for a momentary cognitive failure. In English, comprehension is binary: either you get it, or you don’t.',
        naturalCorrection: "I don't get what you mean. / I don't quite follow.",
        nativeCadence: 'Use "I don\'t get it" instead of "I am not getting it".',
      },
      {
        learnerError: 'When you will reach to the office?',
        likelyIntention: 'Asking someone their arrival time.',
        rootCause:
          'Hindi "pahunchoge" translated as "reach to". "Reach" is formal and takes no preposition, while native English uses the punchy GET.',
        naturalCorrection: 'What time will you get to the office?',
        nativeCadence: 'Use "get to [place]" for natural arrival inquiries.',
      },
      {
        learnerError: 'The tea is becoming cold.',
        likelyIntention: 'Observing that the tea is losing heat.',
        rootCause: 'Overusing the heavy Latinate verb "become" where native English always uses GET.',
        naturalCorrection: 'The tea is getting cold.',
        nativeCadence: 'Use "get + adjective" for everyday physical changes.',
      },
    ],
    nativeIntuition:
      'To a native speaker, GET is the Swiss Army knife of action. When a native speaker feels cold air, they do not think "my body is entering a colder state" or "I am becoming cold". Their tongue automatically releases: "It\'s getting cold".',
    patternRecognitionExercises: [
      {
        id: 'get-q1',
        prompt: 'Which sentence sounds most natural in an engineering stand-up to explain a delay caused by another team?',
        options: [
          'I became blocked due to backend API delays.',
          'I got held up by the backend API dependency.',
          'I was having a stuck in backend API.',
          'I received blocked by backend API.',
        ],
        correctIndex: 1,
        explanation:
          '"I got held up" is the universal native idiom for being delayed by external circumstances. "Became blocked" sounds overly academic and robotic.',
      },
      {
        id: 'get-q2',
        prompt: 'How do you naturally acknowledge that you now fully comprehend a complex code explanation?',
        options: [
          'Now I am having the clear doubt.',
          'Got it, that makes total sense now.',
          'I am understanding it completely now.',
          'I acquired the logic.',
        ],
        correctIndex: 1,
        explanation:
          '"Got it, that makes total sense" uses the rapid GET engine (result achieved) followed by the natural idiomatic expression "makes sense".',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Your internet connection is lagging and cutting out during a Zoom call with your client.',
        targetPattern: 'GET + Adjective (Break up / choppy)',
        hint: 'Use "You are getting..." or "You are breaking up..."',
        sampleAnswer: 'Your audio is getting a bit choppy. Could you repeat that last point?',
      },
      {
        scenario: 'You need to ask a teammate to help you review a merge request before the end of the day.',
        targetPattern: 'GET + Noun + Past Participle (Causative)',
        hint: 'Use "get this reviewed..."',
        sampleAnswer: 'Do you have 10 minutes today to help me get this pull request reviewed and merged?',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES ENERGETICALLY: "Once we get this PR approved, we will get the release candidate deployed to staging."',
      timedChallenge:
        'Speak for 45 seconds describing your morning routine using at least four instances of the GET engine (e.g., get up, get dressed, get coffee, get to work).',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey Sarah, I got your message regarding the schema changes. Let me finish this unit test and I will get right on it."',
    },
    recallTest: [
      {
        question: 'Name the 4 primary kinetic manifestations of the GET engine.',
        hiddenAnswer:
          '1) Becoming (state change: get tired), 2) Obtaining/Receiving (possession: get an email), 3) Arriving (spatial: get home), and 4) Comprehension (mental: get the point).',
      },
      {
        question: 'Why do native speakers prefer "get cold" over "become cold"?',
        hiddenAnswer:
          '"Become" is formal, Latinate, and literary. "Get" is Germanic, punchy, kinetic, and the natural conversational standard across all global English dialects.',
      },
    ],
    revisionConnection:
      'BE is the snapshot (is cold). GET is the transition (getting cold). In Chapter 9, we discover TAKE: how you actively pull an object or responsibility under your personal control.',
    masteryChallenge:
      'Replace the formal verbs "receive", "become", "arrive", and "comprehend" in your daily spoken sentences today with GET. Notice how much faster and more relaxed your speaking becomes.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 9: THE TAKE ENGINE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-9',
    partNumber: 2,
    partTitle: 'The Core Verb Engines (DNA of Primary Drivers)',
    chapterNumber: 9,
    title: 'The TAKE Engine (Inward Grasp & Control)',
    subtitle: 'Agency, Inward Vector, Time Absorption, and Ownership of Action',
    level: 'Tier 1 & Tier 2',
    readingTimeMinutes: 14,
    dna: {
      coreConcept: 'Inward Kinetic Vector: Pulling Reality Under Your Control',
      mentalModel:
        'TAKE is an inward-pointing arrow (◄───). Unlike GET (where something arrives to you or transforms), TAKE requires active agency. You reach outward, grasp an entity (a physical object, a decision, a risk, a break, or a chunk of time), and pull it inside your personal boundary.',
      whyEnglishUsesIt:
        'English uses TAKE to show agency and initiative. In many Indian languages, actions are conceptualized passively ("Neend aa rahi hai" / sleep is coming). English says "I am going to take a nap" — an active, deliberate decision.',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine a conference table with an open pen and notebook. You extend your hand, close your fingers around the pen, and draw it toward your chest. You took the pen. Now imagine a clock ticking: an ongoing task swallows 30 minutes of your afternoon. The task "takes" 30 minutes.',
      schematic: `
[ WORLD / ENVIRONMENT ] ═════════ ( TAKE: ◄─── ) ═════════► [ YOUR CONTROL / AGENCY ]
   Notes on screen                     "take notes"               Personal memory
   15 minutes of time                  "takes 15 mins"            Dedicated focus
   A difficult choice                  "take a decision" ❌       Ownership
                                       "make a decision" ✅
`,
    },
    pattern: {
      formula: '1) TAKE + Physical Object | 2) TAKE + Action/Break | 3) TAKE + Duration ("It takes X to do Y") | 4) TAKE + Responsibility/Risk',
      breakdown: [
        { element: 'TAKE + Object', meaning: 'Physically grasp or bring with you ("take an umbrella", "take your badge").' },
        { element: 'TAKE + Action Noun', meaning: 'Engage in deliberate self-care or activity ("take a break", "take a look", "take a walk").' },
        { element: 'IT TAKES + Time', meaning: 'Absorb or require a specific duration ("It takes 20 minutes to compile").' },
        { element: 'TAKE + Ownership', meaning: 'Assume accountability ("take ownership", "take the blame", "take the lead").' },
      ],
      notes: 'Crucial contrast: You MAKE a decision, but you TAKE a risk. You TAKE a look, but you GIVE a presentation.',
    },
    basicExamples: [
      { text: 'Take your time.', context: 'Reassuring someone there is no rush.', audioText: 'Take your time' },
      { text: 'Let’s take a quick 5-minute break.', context: 'Halting a meeting for rest.', audioText: "Let's take a quick five minute break" },
      { text: 'It takes two hours to run the full test suite.', context: 'Time requirement specification.', audioText: 'It takes two hours to run the full test suite' },
      { text: 'Can you take a look at this PR?', context: 'Requesting code review inspection.', audioText: 'Can you take a look at this PR' },
      { text: 'I will take care of it.', context: 'Assuming personal responsibility.', audioText: 'I will take care of it' },
      { text: 'Take an umbrella with you; it looks like rain.', context: 'Physical carrying advice.', audioText: 'Take an umbrella with you' },
      { text: 'Don’t take it personally.', context: 'Encouraging professional emotional detachment.', audioText: "Don't take it personally" },
      { text: 'We need to take action immediately.', context: 'Urgent operational directive.', audioText: 'We need to take action immediately' },
      { text: 'She took the lead on the frontend refactor.', context: 'Claiming project leadership.', audioText: 'She took the lead on the frontend refactor' },
      { text: 'I will take notes during the client demo.', context: 'Volunteering for documentation.', audioText: 'I will take notes during the client demo' },
    ],
    realLifeExamples: [
      {
        text: 'I have been staring at the monitor for four hours; I need to step away and take a breath.',
        situation: 'Feeling overwhelmed during a long debugging session.',
        context: 'Deliberate physical wellness pause.',
      },
      {
        text: 'How long does it take you to commute to the office during peak hours?',
        situation: 'Casual conversation with a colleague about traffic.',
        context: 'Duration inquiry using the impersonal "it takes".',
      },
      {
        text: 'Take whatever you need from the pantry; it is stocked for everyone.',
        situation: 'Welcoming a new hire to the office.',
        context: 'Permission to grasp and consume items.',
      },
    ],
    professionalExamples: [
      {
        text: 'I will take full ownership of this incident report and share findings by end of day.',
        context: 'Production post-mortem communication.',
        tone: 'Executive maturity, absolute accountability',
      },
      {
        text: 'Let’s take this discussion offline so we don’t derail the main sprint planning agenda.',
        context: 'Meeting moderation and time management.',
        tone: 'Diplomatic, disciplined',
      },
      {
        text: 'We should take a measured approach before migrating the entire database to a new cloud provider.',
        context: 'Architecture strategy meeting.',
        tone: 'Prudent, analytical',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Building the Docker image takes roughly 8 minutes on our CI/CD runner.',
        devContext: 'DevOps pipeline benchmarking.',
        analogy: '`const executionTime = measure(() => buildImage());` — Time cost consumed.',
      },
      {
        text: 'I can take this ticket off your plate if you are overloaded with the release regression bugs.',
        devContext: 'Agile team collaboration in daily stand-up.',
        analogy: 'Transferring pointer ownership of task object from one engineer to another.',
      },
      {
        text: 'The function takes two parameters: the auth token and the payload callback.',
        devContext: 'API documentation and code review.',
        analogy: 'Function signature definition `function process(token, callback)`.',
      },
    ],
    contrast: {
      conceptA: 'TAKE (Active Inward Pull)',
      conceptB: 'GET (Passive / Inbound Arrival)',
      differences: [
        { aspect: 'Initiator Agency', optionA: 'High agency. You deliberately reach out and claim it.', optionB: 'Low/Neutral agency. It lands in your lap or happens to you.' },
        { aspect: 'Gift Example', optionA: '"I took the gift." (I reached out my hand and grabbed it).', optionB: '"I got a gift." (Someone handed it to me; I received it).' },
        { aspect: 'Rest Example', optionA: '"I took a break." (I actively decided to stop working).', optionB: '"I got a break." (Fortune smiled on me; a lucky opportunity).' },
        { aspect: 'Mental Vector', optionA: 'Actor reaching outward to pull inside (◄───).', optionB: 'Item floating into the actor’s possession (───►).' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'We need to take a decision today.',
        likelyIntention: 'Deciding on a plan.',
        rootCause:
          'Direct translation of Hindi "Faisla lena" (taking a decision). In English, decisions are created/constructed (MAKE), not grabbed (TAKE).',
        naturalCorrection: 'We need to make a decision today.',
        nativeCadence: 'Collocation rule: Always MAKE a decision, never TAKE a decision.',
      },
      {
        learnerError: 'I will take your leave now.',
        likelyIntention: 'Saying goodbye at the end of a visit or call.',
        rootCause:
          'Archaic British colonial translation of "Ijazat lena". Sounds bizarre and medieval in modern Silicon Valley or international corporate English.',
        naturalCorrection: 'I should get going now. / I will sign off now.',
        nativeCadence: 'Use conversational modern sign-offs.',
      },
      {
        learnerError: 'How much time it will take?',
        likelyIntention: 'Asking for an estimate.',
        rootCause: 'Incorrect question inversion word order in Indian English.',
        naturalCorrection: 'How long will it take?',
        nativeCadence: 'Use "How long will it take?" for duration inquiries.',
      },
    ],
    nativeIntuition:
      'Native speakers feel TAKE as a hand gripping an object. When a senior developer says "I\'ll take this ticket", they are pulling the responsibility into their personal backpack. When they say "It takes time", they feel time being swallowed by the task.',
    patternRecognitionExercises: [
      {
        id: 'take-q1',
        prompt: 'Which sentence is natural, modern corporate English when wrapping up a meeting?',
        options: [
          'Now I will take your leave, sir.',
          'Let us take this conversation into offline mode.',
          'I need to jump to another call, so I will hop off here.',
          'We should take the decision immediately.',
        ],
        correctIndex: 2,
        explanation:
          '"I need to jump to another call, so I will hop off here" is natural modern tech English. "Take your leave" is archaic colonial phrasing.',
      },
      {
        id: 'take-q2',
        prompt: 'How do you correctly ask how much time a deployment pipeline requires?',
        options: [
          'How much time it is taking?',
          'How long does the deployment take?',
          'How many minutes it takes to deploy?',
          'What is the taking time of deployment?',
        ],
        correctIndex: 1,
        explanation:
          '"How long does the deployment take?" uses the natural "How long does [X] take?" auxiliary question structure.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'A coworker shares a loom video explaining a UI bug and asks if you can inspect it.',
        targetPattern: 'TAKE a look at + Noun',
        hint: 'Use "I will take a look at it after..."',
        sampleAnswer: 'Thanks for recording that. I will take a look at the repro video right after my current meeting.',
      },
      {
        scenario: 'During sprint planning, a junior developer is hesitant to estimate a complex refactor.',
        targetPattern: 'IT TAKES + Time / Effort',
        hint: 'Reassure them that complex refactoring requires time.',
        sampleAnswer: 'Don’t worry about rushing it; it takes time to decouple legacy code properly.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD WITH CONFIDENCE: "I will take ownership of the deployment pipeline and ensure it takes under ten minutes."',
      timedChallenge:
        'Speak for 45 seconds explaining what project you would like to take the lead on next sprint, using at least three collocations with TAKE (take the lead, take ownership, take time).',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey everyone, I know the checkout flow bug is critical. I will take full ownership of isolating the race condition today."',
    },
    recallTest: [
      {
        question: 'Why do English speakers say "make a decision" instead of "take a decision"?',
        hiddenAnswer:
          'Because in the English conceptual framework, a decision does not exist in the room waiting to be picked up (TAKE); it must be constructed and synthesized from alternatives (MAKE).',
      },
      {
        question: 'What is the correct auxiliary inversion for asking about duration with TAKE?',
        hiddenAnswer:
          '"How long does it take?" (NOT "How much time it will take?").',
      },
    ],
    revisionConnection:
      'TAKE pulls reality inward. In Chapter 10, we inspect the HAVE Engine: the perimeter of everything that currently exists within your personal ecosystem.',
    masteryChallenge:
      'Commit to memory the 5 core professional TAKE phrases: 1) Take a look, 2) Take ownership, 3) Take offline, 4) Take your time, 5) It takes [X] time. Use at least two in your team meetings today.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 10: THE HAVE ENGINE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-10',
    partNumber: 2,
    partTitle: 'The Core Verb Engines (DNA of Primary Drivers)',
    chapterNumber: 10,
    title: 'The HAVE Engine (Perimeter & Possession)',
    subtitle: 'Boundaries, Inherent Attributes, Obligations, and Experiences',
    level: 'Tier 1 & Tier 2',
    readingTimeMinutes: 15,
    dna: {
      coreConcept: 'The Perimeter of Containment & Existing Relationship',
      mentalModel:
        'HAVE represents an invisible circular perimeter drawn around the subject. Everything inside that boundary belongs to, affects, or is associated with the subject: physical possessions, schedule events, questions, diseases, obligations (have to), and past completed experiences (Present Perfect).',
      whyEnglishUsesIt:
        'HAVE is the bedrock of possession and relationship. Unlike Hindi where relationships are expressed through location ("Mere paas ek car hai" = Near me a car exists), English establishes direct grammatical subject ownership ("I have a car").',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine drawing a chalk circle around where you are standing. Inside your circle sits your laptop, your smartphone, an appointment on your calendar at 3 PM, and a question in your head. Anything inside your circle is governed by HAVE. When you step forward, everything inside your circle moves with you.',
      schematic: `
            ╭────────────────────────────────────────╮
            │            HAVE PERIMETER              │
            │                                        │
            │   [ SUBJECT ]                          │
            │       │                                │
            │       ├──► Physical:   "a laptop"      │
            │       ├──► Mental:     "a question"    │
            │       ├──► Schedule:   "a meeting"     │
            │       ├──► Obligation: "have to deploy"│
            │       └──► Experience: "have seen it"  │
            ╰────────────────────────────────────────╯
`,
    },
    pattern: {
      formula: '1) Subject + HAVE + Noun (Possession/State) | 2) Subject + HAVE TO + Verb (Obligation) | 3) Subject + HAVE + Object + V3 (Causative) | 4) Subject + HAVE + V3 (Aspect)',
      breakdown: [
        { element: 'HAVE + Noun', meaning: 'Possess an item, relation, trait, or calendar commitment ("have a meeting", "have an idea").' },
        { element: 'HAVE TO + Verb', meaning: 'External obligation or necessity imposed by circumstances ("I have to finish this PR").' },
        { element: 'HAVE + Object + V3', meaning: 'Arrange for someone else to perform a service ("have the server restarted").' },
        { element: 'HAVE + V3 (Perfect)', meaning: 'Bridge a past action into present consequence ("I have completed the task").' },
      ],
      notes: 'HAVE as a state verb NEVER takes -ing when denoting possession! "I am having a car" is ungrammatical.',
    },
    basicExamples: [
      { text: 'I have a quick question.', context: 'Natural replacement for "I have a doubt".', audioText: 'I have a quick question' },
      { text: 'Do you have a minute?', context: 'Polite inquiry regarding availability.', audioText: 'Do you have a minute' },
      { text: 'I have to jump on another call.', context: 'Expressing schedule necessity.', audioText: 'I have to jump on another call' },
      { text: 'We have a hard stop at 4 PM.', context: 'Declaring firm meeting conclusion time.', audioText: 'We have a hard stop at 4 PM' },
      { text: 'They have extensive experience with Kubernetes.', context: 'Professional competency description.', audioText: 'They have extensive experience with Kubernetes' },
      { text: 'I have no idea why the build failed.', context: 'Declaring lack of knowledge.', audioText: 'I have no idea why the build failed' },
      { text: 'She has a meeting with the VP of Engineering.', context: 'Calendar appointment description.', audioText: 'She has a meeting with the VP of Engineering' },
      { text: 'We have a deadline tomorrow.', context: 'Urgent project milestone.', audioText: 'We have a deadline tomorrow' },
      { text: 'I have already pushed the code.', context: 'Present perfect completed action.', audioText: 'I have already pushed the code' },
      { text: 'Do we have enough test coverage?', context: 'Code quality evaluation question.', audioText: 'Do we have enough test coverage' },
    ],
    realLifeExamples: [
      {
        text: 'I have a terrible headache; do you happen to have any aspirin?',
        situation: 'Feeling unwell at the office.',
        context: 'Physical condition containment & inquiring about supplies.',
      },
      {
        text: 'We have family coming over this weekend, so my schedule is packed.',
        situation: 'Discussing weekend plans with a coworker.',
        context: 'Social commitments inside your perimeter.',
      },
      {
        text: 'Have a great weekend everyone!',
        situation: 'Friday evening departure greeting.',
        context: 'Wishing pleasant experience to peers.',
      },
    ],
    professionalExamples: [
      {
        text: 'I have a few reservations regarding the proposed database schema refactor.',
        context: 'Technical architecture debate.',
        tone: 'Measured, critical, polite',
      },
      {
        text: 'We have to ensure zero downtime during the database failover migration.',
        context: 'Infrastructure readiness review.',
        tone: 'Mission-critical, disciplined',
      },
      {
        text: 'Do you have bandwidth this afternoon to pair program on the payment gateway integration?',
        context: 'Requesting engineering collaboration.',
        tone: 'Respectful of peer workload',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The user object has three roles: admin, editor, and viewer.',
        devContext: 'Schema and role-based access control (RBAC) modeling.',
        analogy: 'Object properties `{ roles: ["admin", "editor"] }`.',
      },
      {
        text: 'We have to sanitize all user input before passing it to the database query.',
        devContext: 'Security vulnerability prevention (SQL injection).',
        analogy: 'Mandatory validation pipeline execution.',
      },
      {
        text: 'I have tested the endpoint against all edge cases in our staging environment.',
        devContext: 'QA handoff message.',
        analogy: 'Validating that test results exist inside the current verified state.',
      },
    ],
    contrast: {
      conceptA: 'HAVE (Static State Ownership)',
      conceptB: 'HAVE (Dynamic Consumption - Only place -ing is allowed)',
      differences: [
        { aspect: 'Meaning', optionA: 'Possession, attributes, relationships, questions.', optionB: 'Eating, drinking, or experiencing an ongoing event.' },
        { aspect: 'Continuous -ing Rule', optionA: 'FORBIDDEN: ❌ "I am having a laptop" / ❌ "I am having a doubt".', optionB: 'ALLOWED: ✅ "I am having lunch" / ✅ "We are having a blast".' },
        { aspect: 'Native Equivalent', optionA: '"I own a laptop" / "I have a question".', optionB: '"I am eating lunch" / "We are enjoying ourselves".' },
        { aspect: 'Mental Image', optionA: 'Static items inside a circle.', optionB: 'An active fork and knife at a dinner table.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I am having a doubt in this code.',
        likelyIntention: 'Saying you have a question or need clarification.',
        rootCause:
          'A catastrophic double error: 1) "doubt" means distrust/skepticism rather than curiosity, and 2) state verb HAVE used in progressive -ing.',
        naturalCorrection: 'I have a question about this code. / Could you clarify this line?',
        nativeCadence: 'Eliminate "having a doubt" forever from your vocabulary.',
      },
      {
        learnerError: 'I am having two years of experience in React.',
        likelyIntention: 'Stating professional credentials in an interview.',
        rootCause: 'Using -ing on a permanent attribute/possession state.',
        naturalCorrection: 'I have two years of experience in React.',
        nativeCadence: 'Use "I have [X] years of experience" in simple present.',
      },
      {
        learnerError: 'I am having one brother.',
        likelyIntention: 'Talking about family.',
        rootCause: 'Translating Hindi progressive tense onto kinship states.',
        naturalCorrection: 'I have a brother.',
        nativeCadence: 'Use simple present "I have".',
      },
    ],
    nativeIntuition:
      'To a native speaker, saying "I am having a car" sounds like you are actively eating an automobile for lunch. When expressing possession, the native brain registers HAVE as an immutable anchor, never a progressive kinetic action.',
    patternRecognitionExercises: [
      {
        id: 'have-q1',
        prompt: 'Which sentence is grammatically correct and natural when asking a colleague for clarification during a code walkthrough?',
        options: [
          'Excuse me, I am having a doubt here.',
          'Excuse me, I have a quick question about this logic.',
          'Excuse me, I have a doubt in your mind.',
          'Excuse me, I am holding a question.',
        ],
        correctIndex: 1,
        explanation:
          '"I have a quick question" is the gold standard of professional English. "Doubt" indicates you suspect them of deceit or incompetence.',
      },
      {
        id: 'have-q2',
        prompt: 'In which sentence is "having" grammatically valid in native English?',
        options: [
          'I am having a MacBook Pro for work.',
          'We are having lunch at the cafeteria right now.',
          'He is having five years of backend expertise.',
          'She is having two siblings.',
        ],
        correctIndex: 1,
        explanation:
          '"Having" is only permissible in the progressive aspect when it denotes active consumption (eating/drinking) or dynamic ongoing experience ("having fun", "having a hard time").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are in an interview and want to state that you have 4 years of experience building scalable backend APIs.',
        targetPattern: 'Subject + HAVE + Noun Phrase (No -ing!)',
        hint: 'Use "I have four years of experience..."',
        sampleAnswer: 'I have four years of hands-on experience designing and deploying distributed microservices in Go and Node.js.',
      },
      {
        scenario: 'You need to warn your sprint team that you must leave the meeting precisely at 4:30 PM for a doctor appointment.',
        targetPattern: 'HAVE + A hard stop / HAVE TO leave',
        hint: 'Use "I have a hard stop at..."',
        sampleAnswer: 'Just a heads-up: I have a hard stop at 4:30 PM today, so I will need to drop off five minutes early.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS LOUDLY AND CLEARLY 3 TIMES: "I have a question, I have the bandwidth, and I have to deploy this by five."',
      timedChallenge:
        'Speak for 45 seconds summarizing your technical background and current project responsibilities using ONLY the simple present HAVE (I have, we have). Never use "I am having" for possession.',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hi everyone, I have two quick updates on the billing service: We have resolved the timeout issue, and we have to run one final benchmark before release."',
    },
    recallTest: [
      {
        question: 'Under what singular circumstance can HAVE be used with -ing in native English?',
        hiddenAnswer:
          'ONLY when HAVE means active consumption (eating/drinking: "having coffee") or undergoing a dynamic temporary experience ("having a tough day", "having fun"). NEVER for possession or relationships.',
      },
      {
        question: 'What is the professional replacement for "I am having a doubt"?',
        hiddenAnswer:
          '"I have a question" or "Could I get some clarification on this?"',
      },
    ],
    revisionConnection:
      'HAVE establishes what you hold inside your circle. In Chapter 11, we explore its opposite kinetic vector: the GIVE Engine (radiating outward).',
    masteryChallenge:
      'Purge the phrase "I am having" from your professional life completely, unless you are holding a sandwich or coffee cup in your physical hands.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 11: THE GIVE ENGINE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-11',
    partNumber: 2,
    partTitle: 'The Core Verb Engines (DNA of Primary Drivers)',
    chapterNumber: 11,
    title: 'The GIVE Engine (The Outward Vector)',
    subtitle: 'Transfer, Delegation, Concession, and Radiating Impact',
    level: 'Tier 1 & Tier 2',
    readingTimeMinutes: 13,
    dna: {
      coreConcept: 'The Outward Kinetic Vector: Releasing Value to Another Entity',
      mentalModel:
        'GIVE is the direct opposite vector of TAKE. Where TAKE pulls inward (◄───), GIVE pushes outward (───►). You relinquish an entity from within your perimeter and deliver it into someone else’s perimeter: a physical object, an update, a heads-up, a chance, a presentation, or credit.',
      whyEnglishUsesIt:
        'GIVE powers collaborative teamwork. It allows speakers to hand off context, grant permission, or provide updates smoothly without authoritative dominance.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture two engineers standing beside a server rack. One holds an ethernet cable in his hand. He extends his arm forward and places the cable into the other engineer’s open palm. That outward transfer is GIVE. Or picture a lighthouse beam radiating light outward across dark water: the lamp "gives off" light.',
      schematic: `
[ YOUR PERIMETER ] ═════════ ( GIVE: ───► ) ═════════► [ RECIPIENT'S PERIMETER ]
   Context / Status                    "give an update"           Teammates
   Advance notice                      "give a heads-up"          Project manager
   Detailed walkthrough                "give a demo"              Client
   Surrender position                  "give in / give up"        Resolution
`,
    },
    pattern: {
      formula: '1) GIVE + Indirect Object + Direct Object ("give me an update") | 2) GIVE + Direct Object + TO + Recipient ("give the logs to QA")',
      breakdown: [
        { element: 'Pattern A (Double Object)', meaning: 'Most natural: Subject + GIVE + Person + Thing ("Give him the keys", "Give me a second").' },
        { element: 'Pattern B (Prepositional TO)', meaning: 'Used when emphasizing the recipient: Subject + GIVE + Thing + TO Person ("Give the report to Sarah").' },
        { element: 'Idiomatic Chunks', meaning: 'High-frequency workplace pairings: "give a heads-up", "give feedback", "give a demo".' },
      ],
      notes: 'Notice the rhythm: Native English almost always prefers "give me a call" over "call to me".',
    },
    basicExamples: [
      { text: 'Give me a second.', context: 'Asking for a brief moment of patience.', audioText: 'Give me a second' },
      { text: 'Just wanted to give you a quick heads-up.', context: 'Proactive advance warning.', audioText: 'Just wanted to give you a quick heads up' },
      { text: 'Can you give me an update on the migration?', context: 'Status check inquiry.', audioText: 'Can you give me an update on the migration' },
      { text: 'Let me give you an example.', context: 'Illustrating an abstract concept.', audioText: 'Let me give you an example' },
      { text: 'Who will give the product demo tomorrow?', context: 'Assigning presentation responsibility.', audioText: 'Who will give the product demo tomorrow' },
      { text: 'We should give credit where credit is due.', context: 'Acknowledging peer contributions.', audioText: 'We should give credit where credit is due' },
      { text: 'Don’t give up yet; we are close to fixing this bug.', context: 'Encouraging perseverance.', audioText: "Don't give up yet" },
      { text: 'Give it another shot.', context: 'Encouraging a second attempt.', audioText: 'Give it another shot' },
      { text: 'She gave constructive feedback on my pull request.', context: 'Peer review compliment.', audioText: 'She gave constructive feedback on my pull request' },
      { text: 'The battery won’t give out today.', context: 'Hardware reliability comment.', audioText: "The battery won't give out today" },
    ],
    realLifeExamples: [
      {
        text: 'Could you give me a hand carrying these monitors to the 4th floor?',
        situation: 'Asking for physical assistance in the office.',
        context: 'Universal casual idiom for requesting help ("give a hand").',
      },
      {
        text: 'Give my regards to your family when you speak with them.',
        situation: 'Parting social pleasantry with a coworker.',
        context: 'Sending warm wishes outward.',
      },
      {
        text: 'I will give you a ride home since it is raining.',
        situation: 'Offering a seat in your car after work.',
        context: 'Everyday hospitality.',
      },
    ],
    professionalExamples: [
      {
        text: 'I wanted to give you a heads-up that our cloud infrastructure costs will spike temporarily during load testing.',
        context: 'Proactive budget communication to management.',
        tone: 'Transparent, seasoned, strategic',
      },
      {
        text: 'Could you give our team an overview of how the OAuth token refresh mechanism works?',
        context: 'Knowledge sharing session request.',
        tone: 'Collaborative, inquisitive',
      },
      {
        text: 'We need to give our junior engineers room to experiment without fear of production failure.',
        context: 'Engineering leadership culture discussion.',
        tone: 'Mentorship-focused, empathetic',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The compiler gives an explicit error when strict null checking is violated.',
        devContext: 'TypeScript configuration explanation.',
        analogy: '`compiler.emit(diagnosticError)` — Outward generation of compiler feedback.',
      },
      {
        text: 'I will give you temporary write access to the staging cluster so you can debug the pod logs.',
        devContext: 'DevOps permissions delegation.',
        analogy: 'Granting IAM role to user ARN.',
      },
      {
        text: 'The profiler gives us a clear picture of memory allocation during large file parsing.',
        devContext: 'Performance debugging review.',
        analogy: 'Data output rendering system metrics.',
      },
    ],
    contrast: {
      conceptA: 'GIVE (Outward Transfer ───►)',
      conceptB: 'TAKE (Inward Grasp ◄───)',
      differences: [
        { aspect: 'Direction', optionA: 'Outward: From you to the world.', optionB: 'Inward: From the world into you.' },
        { aspect: 'Feedback Example', optionA: '"I gave feedback." (I delivered evaluation to my peer).', optionB: '"I took the feedback well." (I absorbed and accepted peer advice).' },
        { aspect: 'Presentation Example', optionA: '"I gave a presentation." (Delivering slides to audience).', optionB: '"I took notes." (Absorbing information from speaker).' },
        { aspect: 'Agency', optionA: 'Generous / proactive delivery.', optionB: 'Assertive / selective acquisition.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Please give a reply to my email as soon as possible.',
        likelyIntention: 'Asking someone to respond.',
        rootCause:
          'Translating Hindi "Reply dena". In English, "reply" is already a verb; native speakers simply say "Please reply" or "Let me know".',
        naturalCorrection: 'Please reply to my email when you get a chance. / Looking forward to your thoughts.',
        nativeCadence: 'Avoid using "give + reply"; use the verb "reply" directly.',
      },
      {
        learnerError: 'Give me your phone number, I will call to you.',
        likelyIntention: 'Promising a phone call.',
        rootCause: 'Translating Hindi "Aapko phone karunga" (adding unneeded preposition "to").',
        naturalCorrection: 'Give me your number; I will call you later.',
        nativeCadence: 'Drop the "to" after "call".',
      },
      {
        learnerError: 'I will give exam tomorrow.',
        likelyIntention: 'Sitting for a test.',
        rootCause:
          'Severe Hindi translation trap: In Hindi, the student "gives" the exam ("Exam dena") and the teacher "takes" it ("Exam lena"). In English, the exact opposite is true! The student TAKES the exam, and the teacher GIVES the exam.',
        naturalCorrection: 'I am taking an exam tomorrow. / I have an exam tomorrow.',
        nativeCadence: 'Students TAKE exams; examiners GIVE exams.',
      },
    ],
    nativeIntuition:
      'Native speakers associate GIVE with generous, effortless delivery. The student-exam trap is a massive cultural tell: in English, the teacher administers (GIVES) the test to the class, and the student absorbs the challenge (TAKES it).',
    patternRecognitionExercises: [
      {
        id: 'give-q1',
        prompt: 'You are a student or professional undergoing a certification test tomorrow. Which sentence is correct?',
        options: [
          'I will give the AWS certification exam tomorrow.',
          'I am taking the AWS certification exam tomorrow.',
          'I am going to deliver the AWS certification exam.',
          'I have to give an exam in AWS center.',
        ],
        correctIndex: 1,
        explanation:
          'In English, students TAKE exams. Only the teacher or proctor GIVES the exam. Saying "I will give the exam" means you are the invigilator handing out question papers!',
      },
      {
        id: 'give-q2',
        prompt: 'Which phrase is the natural workplace way to provide advance notice about an upcoming absence?',
        options: [
          'I want to give you a heads-up that I will be out on Friday.',
          'I will give you information about my holiday.',
          'I am giving an advice that I am absent.',
          'Please take my leave application.',
        ],
        correctIndex: 0,
        explanation:
          '"Give you a heads-up" is the quintessential native professional phrase for proactive advance notice.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You want to politely alert your manager that a client feature request will push back the release date by 3 days.',
        targetPattern: 'GIVE + Heads-up + Regarding...',
        hint: 'Use "I wanted to give you a quick heads-up..."',
        sampleAnswer: 'I wanted to give you a quick heads-up that accommodating this client request will push our deployment date back by three days.',
      },
      {
        scenario: 'A coworker is struggling to understand why an API returns 401 Unauthorized.',
        targetPattern: 'GIVE a hand / GIVE it a look',
        hint: 'Offer assistance generously.',
        sampleAnswer: 'If you want, I can give you a hand debugging that auth header after our lunch break.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD WITH CRISP PRONUNCIATION: "I will give you a heads-up, give the team a demo, and give credit to the whole squad."',
      timedChallenge:
        'Speak for 45 seconds explaining why you prefer taking exams rather than giving them, and how you give feedback to junior developers on pull requests.',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey Alex, just wanted to give you a quick heads-up before our client demo: I have already synced the database and staged the feature branch."',
    },
    recallTest: [
      {
        question: 'Why is "I am giving an exam tomorrow" incorrect for a student?',
        hiddenAnswer:
          'Because in English, the examiner GIVES the exam (distributes the test), while the student TAKES the exam (accepts and sits for the test).',
      },
      {
        question: 'What is the difference between "give me a hand" and "give a hand"?',
        hiddenAnswer:
          '"Give me a hand" means assist me with a task. "Give a hand" (or "give a big hand") means applaud someone.',
      },
    ],
    revisionConnection:
      'GIVE pushes value outward. In Chapter 12, we study the MAKE Engine: how to create, build, and cause brand-new reality to appear.',
    masteryChallenge:
      'Send a genuine "heads-up" message or give a sincere piece of positive feedback to a colleague today using the GIVE engine.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 12: THE MAKE ENGINE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-12',
    partNumber: 2,
    partTitle: 'The Core Verb Engines (DNA of Primary Drivers)',
    chapterNumber: 12,
    title: 'The MAKE Engine (Creation & Causation)',
    subtitle: 'Constructing Reality, Producing Outcomes, and Causative Force',
    level: 'Tier 1 & Tier 2',
    readingTimeMinutes: 15,
    dna: {
      coreConcept: 'Synthesis, Tangible Creation, and Inducing State Changes',
      mentalModel:
        'MAKE is the engine of creation and causation. Unlike DO (which represents running through an existing activity), MAKE transforms raw materials, ideas, or social dynamics into a brand-new entity that did not exist before (a decision, a mistake, a cake, money, an impression). It also acts as a causative force: MAKE [someone] DO [something].',
      whyEnglishUsesIt:
        'English strictly demarcates the creation of a product (MAKE) from the performance of a task (DO). Conflating them sounds instantly non-native.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a carpenter with raw planks of wood, nails, and a hammer. He cuts the wood and hammers the pieces together until a four-legged chair stands on the workshop floor. The chair did not exist thirty minutes ago. He MADE the chair. Or picture pushing a child on a swing: your hands CAUSE the swing to fly forward. That causative force is MAKE.',
      schematic: `
[ RAW INGREDIENTS / IDEAS ] ═════════ ( MAKE: CONSTRUCT ) ═════════► [ NEW ENTITY / OUTCOME ]
   Alternative choices                 "make a decision"                Committed roadmap
   Flawed assumption                   "make a mistake"                 Code defect
   Raw code modules                    "make a release"                 Shipped build
   Causative push:                     "make it work"                   Functional state
`,
    },
    pattern: {
      formula: '1) MAKE + Noun (Create outcome) | 2) MAKE + Person + Base Verb (Causative force) | 3) MAKE + Object + Adjective (Cause state)',
      breakdown: [
        { element: 'MAKE + Product/Outcome', meaning: 'Create from scratch: "make an offer", "make a call", "make a suggestion", "make money".' },
        { element: 'MAKE + Someone + Base Verb', meaning: 'Compel or induce action: "make them understand", "make it compile" (NEVER "make them to understand"!).' },
        { element: 'MAKE + Object + Adjective', meaning: 'Alter a property: "make the UI responsive", "make the code readable".' },
      ],
      notes: 'Grammar warning: Causative MAKE is followed by the BARE infinitive (no "to"). Correct: "He made me laugh". Incorrect: "He made me to laugh".',
    },
    basicExamples: [
      { text: 'It makes sense.', context: 'Acknowledging logical coherence.', audioText: 'It makes sense' },
      { text: 'We need to make a decision today.', context: 'Committing to a direction.', audioText: 'We need to make a decision today' },
      { text: 'I made a mistake in the configuration file.', context: 'Owning an error.', audioText: 'I made a mistake in the configuration file' },
      { text: 'Can I make a quick suggestion?', context: 'Politely pitching an idea.', audioText: 'Can I make a quick suggestion' },
      { text: 'Let’s make sure everything is tested.', context: 'Verifying thoroughness.', audioText: "Let's make sure everything is tested" },
      { text: 'This refactor will make the codebase much cleaner.', context: 'Causing an improved state.', audioText: 'This refactor will make the codebase much cleaner' },
      { text: 'Don’t make a habit of skipping unit tests.', context: 'Warning against negative routines.', audioText: "Don't make a habit of skipping unit tests" },
      { text: 'We made good progress this sprint.', context: 'Summarizing team momentum.', audioText: 'We made good progress this sprint' },
      { text: 'She made it clear that the deadline cannot move.', context: 'Emphasizing unambiguous communication.', audioText: 'She made it clear that the deadline cannot move' },
      { text: 'I will make time for this tomorrow.', context: 'Carving out schedule priority.', audioText: 'I will make time for this tomorrow' },
    ],
    realLifeExamples: [
      {
        text: 'Can you make room on the table so I can set down these grocery bags?',
        situation: 'Coming home with arms full of supplies.',
        context: 'Creating physical space.',
      },
      {
        text: 'I am making dinner tonight; do you prefer pasta or stir-fry?',
        situation: 'Evening cooking conversation.',
        context: 'Culinary creation from ingredients.',
      },
      {
        text: 'That comedy show made me laugh so hard my cheeks hurt.',
        situation: 'Recounting weekend entertainment.',
        context: 'Causative emotional reaction (made me laugh).',
      },
    ],
    professionalExamples: [
      {
        text: 'We must make sure that our customer data remains encrypted both at rest and in transit.',
        context: 'Compliance and security architecture review.',
        tone: 'Rigorous, non-negotiable',
      },
      {
        text: 'I would like to make a recommendation based on our load testing benchmarks.',
        context: 'Executive technical presentation.',
        tone: 'Authoritative, consultative',
      },
      {
        text: 'Automating this manual verification will make our release cycle significantly more predictable.',
        context: 'Business case for CI/CD investment.',
        tone: 'Value-oriented, persuasive',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'We need to make this API endpoint idempotent so duplicate retries do not trigger double charges.',
        devContext: 'Payment system resilience design.',
        analogy: 'Applying mathematical property `f(f(x)) = f(x)`.',
      },
      {
        text: 'Adding Redis caching made our response times drop from 800ms down to 45ms.',
        devContext: 'System optimization benchmarking.',
        analogy: 'Direct causative consequence of architectural intervention.',
      },
      {
        text: 'The linter will make you write cleaner code by enforcing consistent styling.',
        devContext: 'Developer tooling advocacy.',
        analogy: 'Static analysis forcing compliance across developers.',
      },
    ],
    contrast: {
      conceptA: 'MAKE (Creating a New Entity)',
      conceptB: 'DO (Executing an Activity)',
      differences: [
        { aspect: 'Outcome Nature', optionA: 'Produces a new tangible/intangible entity (make dinner, make a mistake, make money).', optionB: 'Performs a routine activity, duty, or generic task (do homework, do dishes, do your best).' },
        { aspect: 'Mistake Collocation', optionA: '"Make a mistake" (Constructing an erroneous outcome).', optionB: '❌ "Do a mistake" (Ungrammatical Indian translation error).' },
        { aspect: 'Work Collocation', optionA: '❌ "Make work" (Only means creating busywork).', optionB: '"Do work" (Executing professional obligations).' },
        { aspect: 'Decision Collocation', optionA: '"Make a decision" (Synthesizing options into a choice).', optionB: '❌ "Do a decision" (Ungrammatical).' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I have done a mistake in this commit.',
        likelyIntention: 'Admitting a coding blunder.',
        rootCause:
          'Translating Hindi "Galti karna" (literally "doing a mistake"). In English, mistakes are produced into the world, so they are always MADE.',
        naturalCorrection: 'I made a mistake in this commit.',
        nativeCadence: 'Never say "do a mistake"; always "make a mistake".',
      },
      {
        learnerError: 'He made me to wait for two hours.',
        likelyIntention: 'Explaining that someone kept you waiting.',
        rootCause: 'Adding an unnecessary "to" infinitive after causative MAKE.',
        naturalCorrection: 'He made me wait for two hours.',
        nativeCadence: 'Causative MAKE takes bare infinitive: make + person + base verb.',
      },
      {
        learnerError: 'Please make the needful.',
        likelyIntention: 'Asking someone to take the necessary steps.',
        rootCause:
          'A double error: using MAKE instead of DO, and using the antiquated Victorian cliché "the needful".',
        naturalCorrection: 'Please take care of this. / Could you handle this?',
        nativeCadence: 'Replace "do/make the needful" with modern professional verbs.',
      },
    ],
    nativeIntuition:
      'Native speakers feel MAKE as an act of creation. When you "make a suggestion", you are placing a brand-new proposal onto the table. When you "make sense", the pieces of the puzzle fit together and create clarity.',
    patternRecognitionExercises: [
      {
        id: 'make-q1',
        prompt: 'Which sentence correctly owns up to an error in a pull request?',
        options: [
          'Sorry team, I did a big mistake in the database migration script.',
          'Sorry team, I made a mistake in the database migration script.',
          'Sorry team, I committed a mistake into production.',
          'Sorry team, I produced an error doing a mistake.',
        ],
        correctIndex: 1,
        explanation:
          'In English, mistakes are ALWAYS MADE, never done. "I made a mistake" is the only natural, grammatical choice.',
      },
      {
        id: 'make-q2',
        prompt: 'Which causative sentence structure is grammatically correct?',
        options: [
          'The manager made us to rewrite the documentation.',
          'The manager made us rewrite the documentation.',
          'The manager did make us for rewriting documentation.',
          'The manager made that we rewrite documentation.',
        ],
        correctIndex: 1,
        explanation:
          'The causative verb MAKE requires the bare infinitive (verb without "to"): "made us rewrite".',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You want to pitch an architectural idea to your tech lead without sounding aggressive.',
        targetPattern: 'MAKE a suggestion / MAKE sense',
        hint: 'Use "Can I make a quick suggestion..."',
        sampleAnswer: 'Can I make a quick suggestion? It might make more sense to cache the user profile in Redis rather than hitting the primary database on every render.',
      },
      {
        scenario: 'You are submitting a pull request that fixes a critical memory leak.',
        targetPattern: 'MAKE sure + Clause',
        hint: 'Highlight that the fix guarantees safety.',
        sampleAnswer: 'This patch makes sure that all event listeners are cleanly unsubscribed when the component unmounts.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES SHARPLY: "Let us make sure we make no mistakes when we make the production release."',
      timedChallenge:
        'Speak for 45 seconds explaining a time you made a technical mistake and what you did to make sure it never happened again. Use MAKE at least four times.',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey everyone, that explanation makes total sense. Let’s make sure we document this workflow so we don’t make the same mistake twice."',
    },
    recallTest: [
      {
        question: 'What is the grammatical rule for the verb following causative MAKE?',
        hiddenAnswer:
          'It MUST be a bare infinitive (the base form of the verb without "to"). Example: "She made me laugh", NOT "She made me to laugh".',
      },
      {
        question: 'Why is "I did a mistake" incorrect in English?',
        hiddenAnswer:
          'Because DO is for executing activities, whereas MAKE is for producing entities or outcomes. A mistake is an outcome you generated, so it is always "made a mistake".',
      },
    ],
    revisionConnection:
      'MAKE constructs outcomes. In Chapter 13, we examine its counterpart: the DO Engine (the execution of activity and universal auxiliary driver).',
    masteryChallenge:
      'Practice the 5 essential professional MAKE collocations today: 1) Make a decision, 2) Make a mistake, 3) Make sense, 4) Make sure, 5) Make progress. Banish "did a mistake" permanently.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 13: THE DO ENGINE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-13',
    partNumber: 2,
    partTitle: 'The Core Verb Engines (DNA of Primary Drivers)',
    chapterNumber: 13,
    title: 'The DO Engine (Activity & Auxiliary Power)',
    subtitle: 'Execution, Duties, Question Mechanics, and Emphatic Affirmation',
    level: 'Tier 1 & Tier 2',
    readingTimeMinutes: 14,
    dna: {
      coreConcept: 'The Execution of Kinetic Activity & The Structural Power Engine',
      mentalModel:
        'DO operates on two powerful linguistic levels: 1) As a main verb, it represents generic action, performance, and duty (doing chores, doing work, doing your best) without specifying a new manufactured product; and 2) As an auxiliary verb (do / does / did), it is the mechanical battery that drives English questions, negations, and emphatic confirmations.',
      whyEnglishUsesIt:
        'English requires auxiliary DO to form questions and negations for all non-modal verbs. Without DO, English cannot ask "Do you understand?" or state "I do not understand".',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a robot in an automated factory assembly line running back and forth, cleaning the floor, testing circuits, and carrying boxes. It is not building a new chair; it is executing routine maintenance and work. That continuous performance is DO. Or picture the ignition key in a car engine: turning the key (DO) sparks the entire electrical system to life.',
      schematic: `
[ MAIN VERB USE ] ═════════► Generic Activity: "do work", "do research", "do your best"
[ AUXILIARY USE ] ═════════► Negation Driver:  "I do not understand"
[ QUESTION USE ]  ═════════► Question Driver:  "Do you know the answer?"
[ EMPHATIC USE ]  ═════════► Pure Conviction:  "I *do* agree with you"
`,
    },
    pattern: {
      formula: '1) Subject + DO + Routine/Duty | 2) Do/Does/Did + Subject + Base Verb? (Question) | 3) Subject + do/does/did + Base Verb (Emphatic)',
      breakdown: [
        { element: 'DO + General Activity', meaning: 'Execute ongoing work: "do business", "do an interview", "do an analysis", "do a favor".' },
        { element: 'DO as Question Engine', meaning: 'Invert DO to front of sentence: "Do you have time?", "Did the server crash?".' },
        { element: 'Emphatic DO', meaning: 'Add stress before verb to eliminate doubt: "I *did* push the branch!", "I *do* understand".' },
      ],
      notes: 'Remember: DO handles the execution of labor; MAKE handles the creation of artifacts.',
    },
    basicExamples: [
      { text: 'What do you do?', context: 'Asking about someone’s profession or role.', audioText: 'What do you do' },
      { text: 'I will do my best.', context: 'Promising maximum effort.', audioText: 'I will do my best' },
      { text: 'Can you do me a quick favor?', context: 'Requesting assistance courteously.', audioText: 'Can you do me a quick favor' },
      { text: 'That will do.', context: 'Stating that something is sufficient or adequate.', audioText: 'That will do' },
      { text: 'Did you run the unit tests?', context: 'Past simple question using auxiliary DID.', audioText: 'Did you run the unit tests' },
      { text: 'I do want to attend the workshop.', context: 'Emphatic affirmation of genuine desire.', audioText: 'I do want to attend the workshop' },
      { text: 'Let’s do some research before deciding.', context: 'Engaging in exploratory investigation.', audioText: "Let's do some research before deciding" },
      { text: 'How are you doing today?', context: 'Standard friendly greeting inquiry.', audioText: 'How are you doing today' },
      { text: 'I have nothing to do with that bug.', context: 'Declaring non-involvement or detachment.', audioText: 'I have nothing to do with that bug' },
      { text: 'Just do it.', context: 'Encouraging immediate decisive action.', audioText: 'Just do it' },
    ],
    realLifeExamples: [
      {
        text: 'I have so much laundry and cleaning to do this weekend.',
        situation: 'Chatting on Friday about household duties.',
        context: 'Routine domestic tasks.',
      },
      {
        text: 'Do you feel like grabbing a quick coffee downstairs?',
        situation: 'Inviting a coworker for a quick break.',
        context: 'Auxiliary DO powering a social invitation.',
      },
      {
        text: 'I really do appreciate your help during this difficult sprint.',
        situation: 'Expressing heartfelt gratitude to a teammate.',
        context: 'Emphatic DO elevating sincerity.',
      },
    ],
    professionalExamples: [
      {
        text: 'We need to do a thorough root cause analysis before presenting our findings to leadership.',
        context: 'Post-incident review meeting.',
        tone: 'Methodical, thorough, executive',
      },
      {
        text: 'I did test the edge cases locally, and they passed without error.',
        context: 'Defending code quality in a PR discussion.',
        tone: 'Affirmative, factual',
      },
      {
        text: 'Does this proposed architecture comply with our data sovereignty guidelines?',
        context: 'System design governance meeting.',
        tone: 'Inquisitive, regulatory',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'We should do a load test to see how many concurrent WebSockets the gateway can handle.',
        devContext: 'Benchmarking performance limits.',
        analogy: 'Running a stress-testing script against cluster.',
      },
      {
        text: 'The cron job does a cleanup of expired session tokens every midnight.',
        devContext: 'Background automated worker description.',
        analogy: '`schedule("0 0 * * *", () => cleanTokens())`.',
      },
      {
        text: 'Did you commit the lockfile alongside package.json?',
        devContext: 'Code review and dependency management.',
        analogy: 'Verifying atomic git staging of lock dependencies.',
      },
    ],
    contrast: {
      conceptA: 'DO (Activity & Routine Execution)',
      conceptB: 'MAKE (Constructing Brand-New Entity)',
      differences: [
        { aspect: 'Essence', optionA: 'Execution of effort, process, duty.', optionB: 'Fabrication of an artifact, choice, or state.' },
        { aspect: 'Business Pairing', optionA: '"Do business" (Participating in commercial interaction).', optionB: '"Make money" (Generating financial profit).' },
        { aspect: 'Damage / Harm', optionA: '"Do damage / do harm" (Inflicting negative activity).', optionB: '❌ "Make damage" (Ungrammatical).' },
        { aspect: 'Speech Role', optionA: 'Auxiliary backbone for all English questions and negatives.', optionB: 'Pure lexical verb of creation.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Did you went to the office yesterday?',
        likelyIntention: 'Asking if someone visited the office.',
        rootCause:
          'Double past tense marking. In English, auxiliary DID already carries the past tense; the following main verb MUST revert to its bare base form.',
        naturalCorrection: 'Did you go to the office yesterday?',
        nativeCadence: 'DID + Subject + Base Verb (never V2!).',
      },
      {
        learnerError: 'What you are doing?',
        likelyIntention: 'Asking what someone is working on.',
        rootCause: 'Failing to invert the auxiliary verb in a question.',
        naturalCorrection: 'What are you doing?',
        nativeCadence: 'Question word + Auxiliary + Subject + Verb.',
      },
      {
        learnerError: 'I do the work since morning.',
        likelyIntention: 'Explaining you have been working all day.',
        rootCause: 'Using simple present DO instead of Present Perfect Continuous for duration.',
        naturalCorrection: 'I have been working since morning.',
        nativeCadence: 'Use "have been working" for actions starting in the past and continuing now.',
      },
    ],
    nativeIntuition:
      'Native speakers use DO as an invisible workhorse. When you hear "I *do* care", the stressed DO cuts through ambiguity like a laser. And when forming a question, the native vocal apparatus instinctively pushes DO to the front of the sentence before the thought is even finished.',
    patternRecognitionExercises: [
      {
        id: 'do-q1',
        prompt: 'Which sentence has the correct grammatical verb form after the auxiliary "did"?',
        options: [
          'Did you saw the updated ticket requirements?',
          'Did you see the updated ticket requirements?',
          'Did you seen the updated ticket requirements?',
          'Did you seeing the updated ticket requirements?',
        ],
        correctIndex: 1,
        explanation:
          'Because "did" already marks past tense, the main verb MUST be in its base infinitive form: "Did you see...".',
      },
      {
        id: 'do-q2',
        prompt: 'How do you politely ask a colleague if they have a minute to assist you with a quick task?',
        options: [
          'Could you do me a quick favor?',
          'Could you make me a quick favor?',
          'Do the favor for me please.',
          'Are you doing a favor to me?',
        ],
        correctIndex: 0,
        explanation:
          'The correct collocation is "do someone a favor" (never "make a favor").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'A teammate doubts whether you actually ran the end-to-end Cypress tests before merging.',
        targetPattern: 'Emphatic DID + Base Verb',
        hint: 'Use "I did run the tests..."',
        sampleAnswer: 'I did run the entire end-to-end test suite before merging, and all test suites passed cleanly.',
      },
      {
        scenario: 'You need to ask your product manager if they have reviewed the revised user flow mockups.',
        targetPattern: 'DID + Subject + Base Verb?',
        hint: 'Use "Did you get a chance to review..."',
        sampleAnswer: 'Did you get a chance to review the revised wireframes that design shared yesterday?',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD WITH STRONG EMPHASIS: "I did test the code, I did verify the logs, and it does work in staging."',
      timedChallenge:
        'Speak for 45 seconds asking five different polite questions to an imaginary colleague using DO, DOES, and DID.',
      durationSeconds: 45,
      roleplayPrompt:
        '"Did you check the error logs after the deployment? I did see a spike in 500 errors around 2 PM, so we should do a quick rollback if it persists."',
    },
    recallTest: [
      {
        question: 'Why is "Did you finished the ticket?" ungrammatical?',
        hiddenAnswer:
          'Because "did" already carries the past tense. The main verb must remain in its base dictionary form: "Did you finish the ticket?".',
      },
      {
        question: 'What is Emphatic DO and when is it used?',
        hiddenAnswer:
          'Emphatic DO is placing an auxiliary do/does/did before a main verb with vocal stress (e.g., "I *did* submit the PR") to firmly confirm truth or counter doubt.',
      },
    ],
    revisionConnection:
      'DO powers execution. In Chapter 14, we examine the GO vs. COME Engine: the spatial vectors of movement toward and away from the speaker.',
    masteryChallenge:
      'Never double-mark past tense with DID again. Train your tongue to say "Did you see", "Did you find", "Did you tell" until it is 100% automated.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 14: THE GO VS. COME ENGINE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-14',
    partNumber: 2,
    partTitle: 'The Core Verb Engines (DNA of Primary Drivers)',
    chapterNumber: 14,
    title: 'The GO vs. COME Engine (Spatial & Social Directionality)',
    subtitle: 'Away vs. Towards, Psychological Anchors, and Future Trajectories',
    level: 'Tier 1 & Tier 2',
    readingTimeMinutes: 14,
    dna: {
      coreConcept: 'The Directional Camera: Movement Relative to the Speaker/Listener',
      mentalModel:
        'GO and COME are not random movement verbs; they are vector cameras rooted in psychological perspective. COME represents movement TOWARD the speaker or toward the listener’s current location (───► 👤). GO represents movement AWAY from the speaker or toward a third independent destination (👤 ───►).',
      whyEnglishUsesIt:
        'Indian English often defaults to "I am coming" or "I will go" in ways that reverse native spatial expectations. Understanding where the mental camera is placed prevents awkward miscommunications.',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine standing on a dock. A ship is sailing toward the dock where you are standing: the ship is COMING. Another ship sails away from you toward the horizon: the ship is GOING. Now imagine someone calls you from the living room: "Dinner is ready!" You shout back: "I\'m coming!" (moving toward the listener), NEVER "I\'m going!".',
      schematic: `
[ COME: TOWARDS SPEAKER / LISTENER ] ══════► 👤 [ CURRENT CAMERA ANCHOR ]
   "Come here"
   "I'm coming! (to where you are)"
   "Come over to our table"

👤 [ CURRENT CAMERA ANCHOR ] ══════► [ GO: AWAY TO THIRD DESTINATION ]
   "Go there"
   "I have to go home"
   "Let's go to the cafeteria"
`,
    },
    pattern: {
      formula: '1) COME: Movement toward speaker or listener | 2) GO: Movement away from speaker/listener | 3) Idiomatic State Changes ("go bad", "come true")',
      breakdown: [
        { element: 'COME (Towards)', meaning: 'Movement toward the conversation center: "Come to my desk", "I am coming right now!".' },
        { element: 'GO (Away)', meaning: 'Movement away from conversation center: "Go back to your seat", "I need to go to the store".' },
        { element: 'GO + Negative State', meaning: 'Deterioration into a worse state: "go bad", "go blind", "go wrong", "go crazy".' },
        { element: 'COME + Positive State', meaning: 'Arrival into a realized or beneficial state: "come true", "come alive", "come clean".' },
      ],
      notes: 'Golden Rule: When responding to someone calling your name or waiting for you, always say "I’m coming!", never "I’m going!".',
    },
    basicExamples: [
      { text: 'I’m coming!', context: 'Responding to someone calling you to join them.', audioText: "I'm coming" },
      { text: 'I have to go now.', context: 'Announcing departure from current location.', audioText: 'I have to go now' },
      { text: 'Can you come to the meeting room?', context: 'Inviting someone to where you currently are.', audioText: 'Can you come to the meeting room' },
      { text: 'Where did everyone go?', context: 'Noticing an empty room after a session.', audioText: 'Where did everyone go' },
      { text: 'Something went wrong with the database connection.', context: 'Describing a failure or malfunction.', audioText: 'Something went wrong with the database connection' },
      { text: 'His dream of becoming a software architect came true.', context: 'Fulfillment of an aspiration.', audioText: 'His dream came true' },
      { text: 'How is the sprint going?', context: 'Progress check on project momentum.', audioText: 'How is the sprint going' },
      { text: 'Let’s go over the architecture diagram together.', context: 'Reviewing a document systematically.', audioText: "Let's go over the architecture diagram together" },
      { text: 'Feel free to come by my desk if you get stuck.', context: 'Open door collaboration invitation.', audioText: 'Feel free to come by my desk if you get stuck' },
      { text: 'The milk will go bad if you leave it out.', context: 'Deterioration of food or condition.', audioText: 'The milk will go bad if you leave it out' },
    ],
    realLifeExamples: [
      {
        text: 'Wait for me downstairs; I am coming down in the elevator right now.',
        situation: 'Meeting a friend in the office lobby.',
        context: 'Moving toward the listener’s location (COME).',
      },
      {
        text: 'Are you coming to the team dinner tonight, or are you going straight home?',
        situation: 'Afternoon social planning in the hallway.',
        context: 'Contrasting joining the group (COME) vs. leaving (GO).',
      },
      {
        text: 'Everything will be fine; things will come together in the end.',
        situation: 'Reassuring an anxious colleague before a major demo.',
        context: 'Beneficial convergence idiom ("come together").',
      },
    ],
    professionalExamples: [
      {
        text: 'Could you come by my office for five minutes so we can sync on the compensation review?',
        context: 'Manager inviting direct report for a confidential discussion.',
        tone: 'Professional, calm, direct',
      },
      {
        text: 'We need to go through the security audit checklist before releasing the mobile build to the App Store.',
        context: 'Pre-launch compliance verification.',
        tone: 'Methodical, diligent',
      },
      {
        text: 'When it comes to high-throughput message queues, Kafka has proven to be our most resilient choice.',
        context: 'System design presentation.',
        tone: 'Consultative, expert',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'If the primary database goes down, the standby replica automatically promotes itself within 30 seconds.',
        devContext: 'High availability architecture documentation.',
        analogy: '`if (db.status === "DOWN") failover.promote();` — Negative state deterioration using GO.',
      },
      {
        text: 'The new design system components come with built-in accessibility compliance.',
        devContext: 'Frontend component library documentation.',
        analogy: 'Inherent package bundled features arriving into user app.',
      },
      {
        text: 'Let’s go over the pull request comments line by line.',
        devContext: 'Pair programming code review session.',
        analogy: 'Iterating through code diff array sequentially.',
      },
    ],
    contrast: {
      conceptA: 'COME (Toward Speaker / Listener)',
      conceptB: 'GO (Away to Third Destination)',
      differences: [
        { aspect: 'Direction Vector', optionA: 'Movement toward the conversation center (───► 👤).', optionB: 'Movement away from conversation center (👤 ───►).' },
        { aspect: 'Call Response', optionA: '"I’m coming!" (I am traveling toward you right now).', optionB: '❌ "I’m going!" (Sounds like you are fleeing in the opposite direction!).' },
        { aspect: 'State Shift Idiom', optionA: 'Positive/constructive shifts: "come true", "come alive", "come clean".', optionB: 'Negative/deteriorating shifts: "go wrong", "go bad", "go bankrupt", "go downhill".' },
        { aspect: 'Point of Reference', optionA: 'Anchor is HERE with us.', optionB: 'Anchor is THERE away from us.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Mom calls from kitchen: "Dinner is served!" Learner replies: "I am going!"',
        likelyIntention: 'Saying you are on your way to the kitchen.',
        rootCause:
          'Direct translation of Hindi "Main jaa raha hoon". In English, when moving toward the person speaking to you, you MUST say "I am coming!". Saying "I am going" sounds like you are leaving the house to go somewhere else.',
        naturalCorrection: 'I am coming! / On my way!',
        nativeCadence: 'Always use "I’m coming" when moving toward the person calling you.',
      },
      {
        learnerError: 'The database became down.',
        likelyIntention: 'Saying the database crashed.',
        rootCause: 'Using "become" for system outages.',
        naturalCorrection: 'The database went down.',
        nativeCadence: 'Use "go down" for server or service outages.',
      },
      {
        learnerError: 'When it goes to microservices, latency is high.',
        likelyIntention: 'Saying "Regarding microservices...".',
        rootCause: 'Corrupting the fixed idiom "When it comes to...".',
        naturalCorrection: 'When it comes to microservices, latency is a key trade-off.',
        nativeCadence: 'Fixed idiom: "When it comes to [topic]...".',
      },
    ],
    nativeIntuition:
      'Native speakers place a camera inside the listener’s shoes. If someone is waiting for you in a meeting room, you are moving into their camera frame, so you say "I\'m coming!". Saying "I\'m going" violates their spatial model and makes them think you are walking out of the building.',
    patternRecognitionExercises: [
      {
        id: 'gocome-q1',
        prompt: 'Your manager messages you on Slack: "Can you join the bridge link? The client is waiting." What is your instant native response?',
        options: [
          'Yes, I am going right now!',
          'Yes, coming right now! Jumping on.',
          'Yes, I will go to the link.',
          'Yes, I am going to join you there.',
        ],
        correctIndex: 1,
        explanation:
          'Because the manager and client are already in the meeting, you are moving TOWARDS them. The native response is always "Coming right now!" or "On my way!".',
      },
      {
        id: 'gocome-q2',
        prompt: 'Which sentence correctly describes a food item or system that has spoiled or failed?',
        options: [
          'The milk has come bad.',
          'The server came down at midnight.',
          'The system went down and the backup failed.',
          'The transaction became wrong.',
        ],
        correctIndex: 2,
        explanation:
          'In English, deteriorating states and system outages always use GO: "went down", "went wrong", "went bad".',
      },
    ],
    productionPrompts: [
      {
        scenario: 'A coworker knocks on your glass office door and says: "Ready for our sync?" You are just closing your laptop.',
        targetPattern: 'COME (Present Continuous)',
        hint: 'Use "I am coming..." or "Coming!"',
        sampleAnswer: 'Yep, coming right now! Just locking my screen.',
      },
      {
        scenario: 'You are explaining why a database query caused a production outage.',
        targetPattern: 'GO wrong / GO down',
        hint: 'Use "Something went wrong when..."',
        sampleAnswer: 'Something went wrong with the connection pool, which caused the primary database to go down for about two minutes.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH CONVICTION: "I\'m coming right now! Don’t worry if something goes wrong, we will go through it together."',
      timedChallenge:
        'Speak for 45 seconds describing an unexpected production bug: where the bug went wrong, who came to help you, and how everything came together in the end.',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey team, I’m coming to the war room now. Let’s go over the datadog metrics and find out why the authentication service went down."',
    },
    recallTest: [
      {
        question: 'Why must you say "I\'m coming!" instead of "I\'m going!" when someone calls you to dinner?',
        hiddenAnswer:
          'Because your movement is directed TOWARD the speaker. In English, movement toward the listener/speaker is always COME; GO implies moving away to a different destination.',
      },
      {
        question: 'What is the idiomatic tendency for GO vs. COME when applied to state changes?',
        hiddenAnswer:
          'GO typically pairs with negative deterioration (go wrong, go bad, go down, go blind). COME typically pairs with positive realization (come true, come alive, come together).',
      },
    ],
    revisionConnection:
      'With Part 2 complete, you have mastered the 8 foundational verb engines (BE, GET, TAKE, HAVE, GIVE, MAKE, DO, GO/COME). In Part 3, we enter the Preposition & Spatial Vector Engine (TO, FOR, AT, IN, ON, BY, FROM).',
    masteryChallenge:
      'Never reply "I am going" when someone calls your name again. Lock "I’m coming!" into your subconscious vocal muscle memory forever.',
  },
];
