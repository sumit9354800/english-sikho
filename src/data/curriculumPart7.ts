import { Chapter } from '../types';

export const PART_7_CHAPTERS: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // CHAPTER 83: THE PARTICLE VECTOR ENGINE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-83',
    partNumber: 7,
    partTitle: 'The Phrasal Verb Engine & Particle Dynamics',
    chapterNumber: 83,
    title: 'The Particle Vector Engine (Physics of Phrasal Verbs)',
    subtitle: 'Why Memorizing 1,000 Idioms Fails and How Directional Vectors Predict Meaning',
    level: 'Tier 4',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'Verb Driver (Energy) + Spatial Particle (Vector / Destination / Transformation)',
      mentalModel:
        'Phrasal verbs are not random idioms invented to torture ESL students. They are Newtonian physics applied to human cognition. The root verb provides the motive kinetic force (COME, GO, PUT, TAKE, RUN, BREAK, TURN). The particle (UP, DOWN, OUT, IN, OFF, AWAY, BACK) provides the trajectory, completion threshold, or boundary transformation. When you know the particle vector, you do not need a dictionary: you calculate the meaning dynamically in milliseconds.',
      whyEnglishUsesIt:
        'Latinate English uses single formal verbs (extinguish, terminate, investigate, discover, postpone). Germanic English—the spoken native tongue used in 90% of meetings, Slack channels, and casual banter—prefers kinetic spatial dynamics (put out, wind down, look into, find out, put off). Using only Latinate verbs makes you sound like a robotic 19th-century textbook; mastering particles gives you the authentic native pulse.',
    },
    mentalMovie: {
      sceneDescription:
        'Visualize a physics simulation canvas in Unreal Engine. A red ball (the verb action) is moving. When the particle UP is applied, the ball rises, hits a ceiling boundary (completion), or bursts into visibility. When OFF is applied, a snap disconnection occurs. The particle is a vector multiplier.',
      schematic: `
    [ THE PHRASAL PARTICLE VECTOR MATRIX ]

         ▲ UP: Rising, Completion, Intensity, Total Consumption
         │     ("eat up", "build up", "spin up", "wrap up")
         │
  ◄──────┼──────►
  AWAY   │        OUT: Emergence, Exhaustion, Distribution, Resolution
  (Distance,     ("figure out", "roll out", "run out", "point out")
  Vanishing)
         │
         ▼ DOWN: Decreasing, Grounding, Reduction, Recording
                 ("turn down", "wind down", "teardown", "write down")

  ⚡ OFF: Disconnection, Departure, Abrupt Halting ("call off", "take off", "cut off")
  🔄 BACK: Reversion, Reciprocity, Restoring Origin ("roll back", "pay back", "bounce back")
`,
    },
    pattern: {
      formula: 'BASE ACTION (Driver) + PARTICLE (Spatial Vector / State Boundary) = DYNAMIC RESULT',
      breakdown: [
        { element: 'Root Verb Driver', meaning: 'The generic kinetic force (Turn, Put, Break, Take, Come, Go, Set).' },
        { element: 'Particle Vector', meaning: 'The directional orientation, boundary condition, or state transition.' },
        { element: 'Literal Vector Layer', meaning: 'Physical movement in 3D space: "He stood UP", "The plane took OFF".' },
        { element: 'Metaphorical Vector Layer', meaning: 'Cognitive or operational transition: "Wrap UP the sprint", "Call OFF the launch".' },
      ],
      notes: 'Separable vs. Inseparable rule: Pronouns MUST sit in the middle: "Turn it on" (never "Turn on it"). Nouns can sit either in the middle or at the end: "Turn the server on" or "Turn on the server".',
    },
    basicExamples: [
      { text: 'Let’s wrap up this meeting five minutes early.', context: 'UP = Completeness / reaching the container boundary.', audioText: 'Let’s wrap up this meeting five minutes early' },
      { text: 'I need to figure out why this pod is crashing.', context: 'OUT = Extracting a hidden truth into the open light.', audioText: 'I need to figure out why this pod is crashing' },
      { text: 'Can you turn down the television volume slightly?', context: 'DOWN = Reduction in physical or metric intensity.', audioText: 'Can you turn down the television volume slightly' },
      { text: 'They called off the outdoor concert due to torrential rain.', context: 'OFF = Complete severing / cancellation of an event.', audioText: 'They called off the outdoor concert due to torrential rain' },
      { text: 'We need to roll back the release to v2.4.1.', context: 'BACK = Returning backwards to a prior safe origin.', audioText: 'We need to roll back the release to v2.4.1' },
      { text: 'The battery ran out in the middle of my video interview.', context: 'OUT = Exhaustion of internal capacity.', audioText: 'The battery ran out in the middle of my video interview' },
      { text: 'He backed away from his initial controversial claim.', context: 'AWAY = Increasing distance / retreating from a position.', audioText: 'He backed away from his initial controversial claim' },
      { text: 'Spin up a fresh PostgreSQL replica in the staging cluster.', context: 'UP = Bringing into active rotational velocity / existence.', audioText: 'Spin up a fresh PostgreSQL replica in the staging cluster' },
    ],
    realLifeExamples: [
      {
        text: 'Drink up your coffee before it gets stone cold.',
        situation: 'Morning conversation at the breakfast table.',
        context: 'UP signifies total consumption to the very last drop, not directional elevation.',
      },
      {
        text: 'I ran into my former college roommate at the grocery store yesterday.',
        situation: 'Chance encounter in public.',
        context: 'INTO represents physical vector collision by serendipity.',
      },
      {
        text: 'We should calm down and talk through what actually happened.',
        situation: 'Resolving a domestic misunderstanding.',
        context: 'DOWN lowers emotional heart rate; THROUGH navigates from start to finish.',
      },
    ],
    professionalExamples: [
      {
        text: 'We should follow up with the vendor by Thursday to lock down the enterprise pricing terms.',
        context: 'Strategic sales & partnership sync.',
        tone: 'Action-oriented, authoritative, clear-cut',
      },
      {
        text: 'If the client pushes back on the delivery timeline, we can phase out secondary deliverables.',
        context: 'Sprint scope negotiation.',
        tone: 'Calm, proactive, pragmatic',
      },
      {
        text: 'Let’s point out the trade-offs clearly in the executive summary before they raise objections.',
        context: 'C-suite presentation strategy.',
        tone: 'Anticipatory, polished, strategic',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The cron job backed up the production database, but it timed out before the gzip compression could finish up.',
        analogy: 'BACK = safe storage retention; UP = hitting the 100% completion threshold.',
        devContext: 'DevOps incident post-mortem.',
      },
      {
        text: 'When we rolled out the distributed tracing middleware, it flared up thousands of spurious memory warnings.',
        analogy: 'OUT = deployment to user endpoints; UP = sudden spike in warning volume.',
        devContext: 'Observability & APM review.',
      },
    ],
    contrast: {
      conceptA: 'Stiff Latinate Verbs (Over-Formal Academic English)',
      conceptB: 'Dynamic Phrasal Vector Verbs (Native Operational Cadence)',
      differences: [
        { aspect: 'Cancellation', optionA: '"We must cancel the deployment immediately."', optionB: '"We need to call off the deployment right now."' },
        { aspect: 'Discovery', optionA: '"I must investigate and discover the root cause."', optionB: '"I need to dig into the logs and figure out what broke."' },
        { aspect: 'Meeting Concluding', optionA: '"Let us terminate this conference."', optionB: '"Let’s wrap up here and get back to work."' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Turn on it, the light is dark.',
        likelyIntention: 'Turn it on, it’s dark in here.',
        rootCause: 'Putting a pronoun after the particle. In English phrasal verbs, objective pronouns (it, them, him, her, us) must always split the verb and particle.',
        naturalCorrection: 'Turn it on. / Turn the light on.',
        nativeCadence: '"Switch it on, would you?"',
      },
      {
        learnerError: 'Please revert back with the attachments.',
        likelyIntention: 'Please reply with the attachments.',
        rootCause: '"Revert" already contains the backward vector; adding "back" is redundant Indian-English jargon.',
        naturalCorrection: 'Please get back to me with the attachments. / Please send over the files.',
        nativeCadence: '"Shoot those files over when you get a second."',
      },
    ],
    nativeIntuition:
      'Native speakers think of particles as physical sensations. When someone says "Look into it", they feel their eyes leaning over the edge of a container. When someone says "Break down the problem", they feel a heavy hammer smashing a boulder into manageable gravel chunks. Feel the spatial geometry, don’t translate words.',
    patternRecognitionExercises: [
      {
        id: 'p-83-1',
        prompt: 'Which sentence correctly positions the pronoun with a separable phrasal verb?',
        options: [
          'The server is slow, please restart up it.',
          'The server is slow, please boot up it.',
          'The server is slow, please boot it up.',
          'The server is slow, please boot it on.',
        ],
        correctIndex: 2,
        explanation: 'Pronouns like "it" must always sit between the verb and particle in separable phrasal verbs ("boot it up").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are leading a daily standup meeting and want to finish the call so engineers can code.',
        targetPattern: 'Wrap up + get to work / tackle the backlog.',
        hint: 'Use "wrap up" and "reach out".',
        sampleAnswer: 'Alright team, let’s wrap up here so everyone can dive into their sprint tasks. Reach out on Slack if you hit any blockers.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'SAY THIS OUT LOUD: "Let’s wrap up this meeting, figure out the edge cases, and roll out the hotfix before noon."',
      timedChallenge: 'Name 5 phrasal verbs using the particle UP in 20 seconds, explaining the completion vector for each.',
      durationSeconds: 20,
      roleplayPrompt: 'You are the engineering lead announcing the immediate cancellation of a problematic release candidate.',
    },
    recallTest: [
      {
        question: 'Why is "eat up your food" different from "eat your food"?',
        hiddenAnswer: '"UP" adds the vector of completion / totality—meaning eat all of it, leaving nothing behind on the plate.',
      },
    ],
    revisionConnection:
      'Now that the vector foundation is installed, Chapter 84 takes a deep dive into the master particle "UP": upward motion, completion, creation, and total consumption.',
    masteryChallenge:
      'Scan your last 5 sent work emails or Slack messages. Identify any stiff Latinate verbs (e.g. investigate, cancel, finish, initiate) and rewrite them using dynamic phrasal vector engines (look into, call off, wrap up, kick off).',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 84: THE VECTOR "UP"
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-84',
    partNumber: 7,
    partTitle: 'The Phrasal Verb Engine & Particle Dynamics',
    chapterNumber: 84,
    title: 'The Master Vector "UP": Elevation, Totality & Emergence',
    subtitle: 'From Physical Rise (Stand Up) to Total Consumption (Eat Up) and Digital Creation (Spin Up)',
    level: 'Tier 4',
    readingTimeMinutes: 17,
    dna: {
      coreConcept: 'The 4 Semantic Vectors of UP: 1) Physical Elevation, 2) Completion/Boundary, 3) Bringing into Existence, 4) Increase in Intensity',
      mentalModel:
        'Think of a measuring beaker filling with water. As water pours in, the level goes UP. When it reaches the very top rim, it is filled UP (Completion). If water boils, steam rises UP into visibility (Emergence). If you turn the burner dial, the temperature goes UP (Intensity). Thus, UP serves 4 distinct, predictable vectors across 150+ English phrasal verbs.',
      whyEnglishUsesIt:
        'Without UP, English would lack a concise way to signal total exhaustion or completion. "I cleaned the room" means you worked on it; "I cleaned UP the room" means every speck of dust is gone and the state transition is 100% sealed.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture an empty cloud infrastructure console. You click "Deploy". Virtual CPU instances ignite and scale vertically like towers rising from the soil: you SPUN UP an entire cluster. Next, an engineer cleans every dirty glass in the sink until the counter sparkles: she CLEANED UP the mess.',
      schematic: `
    [ THE 4 PILLARS OF THE "UP" VECTOR ]

    1. COMPLETION / 100% BOUNDARY:
       Drink UP (all drops gone) │ Finish UP (done) │ Wrap UP (closed) │ Clean UP
       
    2. CREATION & EMERGENCE:
       Build UP │ Set UP (configure) │ Spin UP (launch) │ Come UP with (ideate)
       
    3. PHYSICAL ELEVATION:
       Stand UP │ Pick UP │ Look UP (eyes raised or search indexed)
       
    4. AMPLIFICATION / INTENSITY:
       Speak UP (louder) │ Speed UP (faster) │ Heat UP │ Flare UP
`,
    },
    pattern: {
      formula: 'VERB + UP = Total Completion OR Upward Emergence OR Heightened Intensity',
      breakdown: [
        { element: 'Set UP', meaning: 'Arrange components into an operational, standing state.' },
        { element: 'Wrap UP', meaning: 'Bring an event, sprint, or meeting to an official conclusion.' },
        { element: 'Spin UP', meaning: 'Instantiate and boot a virtual machine, server, or container.' },
        { element: 'Show UP / Turn UP', meaning: 'Arrive or emerge into visible presence.' },
        { element: 'Back UP', meaning: '1) Move backward physically, 2) Create a redundant data snapshot, 3) Support a teammate.' },
      ],
      notes: 'Contrast "Clean" (action ongoing) vs "Clean up" (total order restored). Adding UP almost always marks the telic endpoint (the goal was achieved).',
    },
    basicExamples: [
      { text: 'Let’s set up a staging environment for the QA team.', context: 'Creation / installation vector.', audioText: 'Let’s set up a staging environment for the QA team' },
      { text: 'We need to speed up the database migration script.', context: 'Intensity & velocity acceleration.', audioText: 'We need to speed up the database migration script' },
      { text: 'Could you speak up a bit? Your microphone is very quiet.', context: 'Volume / audio amplitude increase.', audioText: 'Could you speak up a bit? Your microphone is very quiet' },
      { text: 'I stayed up until 3 AM finishing the system architecture diagram.', context: 'Staying vertically conscious past bedtime.', audioText: 'I stayed up until 3 AM finishing the system architecture diagram' },
      { text: 'The lead engineer came up with a brilliant caching workaround.', context: 'Mental emergence of a novel solution.', audioText: 'The lead engineer came up with a brilliant caching workaround' },
      { text: 'Don’t use up all the cluster credits on exploratory training.', context: 'Total consumption / exhaustion.', audioText: 'Don’t use up all the cluster credits on exploratory training' },
      { text: 'He backed up his argument with three months of Datadog metrics.', context: 'Support / structural reinforcement.', audioText: 'He backed up his argument with three months of Datadog metrics' },
      { text: 'Did the new intern show up for the morning stand-up?', context: 'Physical emergence / arrival.', audioText: 'Did the new intern show up for the morning stand-up' },
    ],
    realLifeExamples: [
      {
        text: 'Finish up your homework before dinner so you have the whole evening to relax.',
        situation: 'Parent encouraging a child after school.',
        context: 'UP ensures the homework is 100% completed, not half-attempted.',
      },
      {
        text: 'The weather is finally warming up after two weeks of freezing rain.',
        situation: 'Casual weather conversation.',
        context: 'Intensity vector: temperature climbing upward.',
      },
      {
        text: 'I looked up his LinkedIn profile before the screening call.',
        situation: 'Pre-interview research.',
        context: 'Retrieval vector: pulling data up out of an indexed archive.',
      },
    ],
    professionalExamples: [
      {
        text: 'Let’s sync up tomorrow morning to align on the Q3 hiring targets.',
        context: 'Cross-functional peer collaboration.',
        tone: 'Agile, collaborative, natural',
      },
      {
        text: 'We need to scale up our support operations before the Black Friday traffic surge.',
        context: 'Operations capacity planning.',
        tone: 'Decisive, strategic, anticipatory',
      },
      {
        text: 'Who is going to follow up with the enterprise client regarding their SSO integration?',
        context: 'Account management ownership review.',
        tone: 'Direct, professional, accountable',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Our Kubernetes autoscaler spun up eight additional pods within forty seconds of the traffic spike.',
        analogy: 'Instant vertical instantiation of computational instances.',
        devContext: 'Site reliability engineering retrospective.',
      },
      {
        text: 'Before running the destructive migration, make sure you back up the entire customer schema.',
        analogy: 'Creation of a secondary safety reserve.',
        devContext: 'Database schema deployment checklist.',
      },
    ],
    contrast: {
      conceptA: 'Root Verb Alone (Indefinite Action)',
      conceptB: 'Verb + UP (Definite Completion / Intensity Boundary)',
      differences: [
        { aspect: 'Drink vs. Drink up', optionA: '"Drink the milk" = ingest some liquid.', optionB: '"Drink up your milk" = empty the glass completely.' },
        { aspect: 'Lock vs. Lock up', optionA: '"Lock the door" = turn the key.', optionB: '"Lock up the warehouse" = secure every window, gate, and exit for the night.' },
        { aspect: 'Fill vs. Fill up', optionA: '"Fill the cup" = put liquid inside.', optionB: '"Fill up the tank" = fill to the absolute brim.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'We need to discuss up this topic.',
        likelyIntention: 'We need to discuss this topic.',
        rootCause: 'Blindly sticking "up" onto every verb. Verbs that are already naturally complete or Latinate (discuss, explain, consider) do not take UP.',
        naturalCorrection: 'We need to discuss this topic. / Let’s talk through this topic.',
        nativeCadence: '"Let’s hash this out."',
      },
      {
        learnerError: 'I ate my food up yesterday night.',
        likelyIntention: 'I ate all my dinner last night.',
        rootCause: 'Splitting the phrasal verb clumsily with unnatural word order, and using Indian-English "yesterday night" instead of "last night".',
        naturalCorrection: 'I ate up my dinner last night.',
        nativeCadence: '"I polished off my dinner last night."',
      },
    ],
    nativeIntuition:
      'Think of UP as a volume slider or a completion meter. When you add UP, you are moving the slider from 50% to 100%. "Wrap up" = 100% done. "Eat up" = 100% empty plate. "Heated up" = 100% temperature target. It creates an undeniable satisfying sense of closure.',
    patternRecognitionExercises: [
      {
        id: 'p-84-1',
        prompt: 'Which sentence uses "UP" to denote bringing an operational system into existence?',
        options: [
          'Please pick up the laptop from the IT desk.',
          'We need to spin up a new Redis cluster for session storage.',
          'Speak up during the retrospective.',
          'Drink up your water before we start the hike.',
        ],
        correctIndex: 1,
        explanation: '"Spin up" uses UP to represent the emergence and booting of computational instances into active existence.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You want to ask your DevOps engineer to configure an isolated testing database for an experiment.',
        targetPattern: 'Can you set up / spin up [Resource] so that we can [Goal]?',
        hint: 'Use "spin up" or "set up".',
        sampleAnswer: 'Could you spin up an isolated testing database so we can benchmark the query latency without affecting production?',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'SAY THIS OUT LOUD: "Could you spin up a fresh staging branch and set up the webhook listeners before we sync up at noon?"',
      timedChallenge: 'Deliver a 30-second standup update using "set up", "wrap up", and "follow up" smoothly.',
      durationSeconds: 30,
      roleplayPrompt: 'You are giving your morning update to your engineering manager.',
    },
    recallTest: [
      {
        question: 'What are the 4 fundamental cognitive vectors of the particle "UP"?',
        hiddenAnswer: '1) Physical Elevation, 2) 100% Completion/Boundary, 3) Creation/Emergence into existence, 4) Heightened Intensity/Volume/Speed.',
      },
    ],
    revisionConnection:
      'While UP climbs and completes, Chapter 85 explores the counter-vector: "DOWN" for reduction, grounding, cooling off, and permanent recording.',
    masteryChallenge:
      'Write down 3 scenarios where adding UP transforms an ordinary action into a definitive completion: e.g., finish vs. finish up, clean vs. clean up, fill vs. fill up.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 85: THE VECTOR "DOWN"
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-85',
    partNumber: 7,
    partTitle: 'The Phrasal Verb Engine & Particle Dynamics',
    chapterNumber: 85,
    title: 'The Master Vector "DOWN": Reduction, Grounding & Termination',
    subtitle: 'Deconstructing Gravity: Turning Down Offers, Breaking Down Complex Systems, and Tearing Down Infrastructure',
    level: 'Tier 4',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'The 4 Semantic Vectors of DOWN: 1) Physical Descent & Grounding, 2) Reduction of Intensity/Volume, 3) Deconstruction into Atoms, 4) Permanent Recording onto Paper/Disk',
      mentalModel:
        'Imagine gravity pulling an object down to earth. When a rocket lands, it settles on solid ground (Grounding). When music is blaring, you push the volume slider down toward silence (Reduction). When an engine breaks, its smooth motion collapses to the floor (Breakdown / Malfunction). When a fleeting verbal thought is committed with a pen to paper, it is anchored down into physical reality: you write it DOWN.',
      whyEnglishUsesIt:
        'DOWN anchors English speech. It cools overheated emotions (calm down), tames bloated budgets (cut down), decomposes monolithic architectures (break down), and gracefully terminates long-running operations (wind down, shut down).',
    },
    mentalMovie: {
      sceneDescription:
        'A lead architect stands before an enormous complex whiteboard diagram of 40 microservices. She takes an eraser and divides the monolith into 3 small, digestible modules: she BROKE DOWN the architecture. Meanwhile, an engineer types notes into Jira: he is JOTTING DOWN the key action items.',
      schematic: `
    [ THE 4 VECTORS OF "DOWN" ]

    1. REDUCTION & LOWERING INTENSITY:
       Turn DOWN (volume/proposal rejection) │ Cool DOWN │ Slow DOWN │ Cut DOWN
       
    2. DECONSTRUCTION & SEPARATION:
       Break DOWN (analyze / mechanical failure) │ Tear DOWN (demolish) │ Boil DOWN to
       
    3. TERMINATION & CEASING OPERATION:
       Shut DOWN │ Wind DOWN │ Step DOWN (resign) │ Lock DOWN
       
    4. PERMANENT INSCRIPTION (GRAVITY TO PAPER):
       Write DOWN │ Put DOWN │ Note DOWN │ Pin DOWN (commit to specifics)
`,
    },
    pattern: {
      formula: 'VERB + DOWN = Reduction OR Deconstruction OR Inscription OR Termination',
      breakdown: [
        { element: 'Turn DOWN', meaning: '1) Lower volume/heat, 2) Politely reject a proposal or job offer.' },
        { element: 'Break DOWN', meaning: '1) Stop operating mechanically, 2) Explain in step-by-step modular detail.' },
        { element: 'Tear DOWN', meaning: 'Dismantle an ephemeral test environment, cluster, or scaffolding.' },
        { element: 'Pin DOWN', meaning: 'Force someone to state exact dates, prices, or commitments.' },
        { element: 'Wind DOWN', meaning: 'Gradually reduce activity toward an orderly close.' },
      ],
      notes: '"Turn down an offer" is the single most common professional phrase for rejection: "He turned down the Google offer to stay at his startup."',
    },
    basicExamples: [
      { text: 'Could you break down the migration steps for the executive team?', context: 'Deconstruction for analytical clarity.', audioText: 'Could you break down the migration steps for the executive team' },
      { text: 'She turned down the VP promotion because of the heavy travel requirements.', context: 'Diplomatic professional rejection.', audioText: 'She turned down the VP promotion because of the heavy travel requirements' },
      { text: 'We need to tear down the ephemeral Kubernetes environments every evening to save costs.', context: 'Automated teardown of compute resources.', audioText: 'We need to tear down the ephemeral Kubernetes environments every evening to save costs' },
      { text: 'Make sure to write down the customer’s account ID before transferring the call.', context: 'Permanent inscription on paper or screen.', audioText: 'Make sure to write down the customer’s account ID before transferring the call' },
      { text: 'The entire payment gateway broke down during the flash sale.', context: 'Catastrophic functional failure.', audioText: 'The entire payment gateway broke down during the flash sale' },
      { text: 'We are winding down our legacy v1 REST API by the end of Q4.', context: 'Graceful phased deprecation.', audioText: 'We are winding down our legacy v1 REST API by the end of Q4' },
      { text: 'The security team locked down the compromised server within ten minutes.', context: 'Complete restriction of access.', audioText: 'The security team locked down the compromised server within ten minutes' },
      { text: 'It all boils down to user trust and data privacy.', context: 'Reduction to the irreducible core essence.', audioText: 'It all boils down to user trust and data privacy' },
    ],
    realLifeExamples: [
      {
        text: 'I’ve been trying to cut down on late-night caffeine so I can sleep better.',
        situation: 'Health & lifestyle conversation.',
        context: 'DOWN = reduction in consumption quantity.',
      },
      {
        text: 'The car broke down in the middle of our road trip across Rajasthan.',
        situation: 'Travel breakdown anecdote.',
        context: 'Mechanical failure bringing physical movement down to zero.',
      },
      {
        text: 'Let me jot down your email address so I don’t forget it.',
        situation: 'Networking event exchange.',
        context: 'Speedy inscription onto a notepad or phone.',
      },
    ],
    professionalExamples: [
      {
        text: 'We had to turn down the acquisition offer because their valuation didn’t account for our recurring revenue.',
        context: 'Board-level strategic decision.',
        tone: 'Firm, principled, high-stakes',
      },
      {
        text: 'Can we pin down the client on an exact launch date before we commit engineering sprint bandwidth?',
        context: 'Project manager risk assessment.',
        tone: 'Pragmatic, rigorous, protective of resources',
      },
      {
        text: 'Let’s wind down this pilot project gracefully and harvest the lessons learned for our core product roadmap.',
        context: 'Post-experiment product review.',
        tone: 'Mature, objective, future-focused',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Our CI/CD pipeline spins up an isolated Docker container for end-to-end tests and tears it down immediately upon completion.',
        analogy: 'The complete lifecycle: UP (instantiation) followed by DOWN (annihilation/resource reclamation).',
        devContext: 'DevOps automation pipeline specification.',
      },
      {
        text: 'When the Kafka broker went down, the event producers buffered messages in memory until disk pressure spiked.',
        analogy: 'System outage / operational collapse.',
        devContext: 'Distributed messaging system post-mortem.',
      },
    ],
    contrast: {
      conceptA: 'Turn Down (Decrease / Rejection)',
      conceptB: 'Shut Down (Total Operational Cessation)',
      differences: [
        { aspect: 'Scope', optionA: 'Turn down lowers intensity or rejects an invitation/proposal.', optionB: 'Shut down completely kills electrical power or terminates an enterprise.' },
        { aspect: 'Example A', optionA: '"She turned down the candidate after the culture interview."', optionB: '"We shut down the database server for hardware maintenance."' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'He rejected down my proposal in the meeting.',
        likelyIntention: 'He rejected my proposal. / He turned down my proposal.',
        rootCause: 'Combining the Latinate verb "reject" with the particle "down". Latinate verbs do not take Germanic particles.',
        naturalCorrection: 'He turned down my proposal. / He rejected my proposal.',
        nativeCadence: '"He shot down my proposal in the meeting."',
      },
      {
        learnerError: 'The server fell down yesterday.',
        likelyIntention: 'The server crashed yesterday. / The server went down yesterday.',
        rootCause: 'Translating Hindi "गिर गया" literally into "fell down". Servers do not trip on rocks and fall; they "go down" or "crash".',
        naturalCorrection: 'The server went down yesterday. / The server crashed yesterday.',
        nativeCadence: '"Production went down around 3 PM."',
      },
    ],
    nativeIntuition:
      'Native ears associate DOWN with calm stability or finality. If a discussion becomes volatile, someone says "Let’s simmer down". If a deal is final, they "lock it down". If an idea needs clarity, you "break it down". DOWN brings airy, ambiguous chaos down to solid earth.',
    patternRecognitionExercises: [
      {
        id: 'p-85-1',
        prompt: 'Which phrasal verb means to deconstruct a complex problem into manageable constituent parts?',
        options: [
          'Tear down the problem',
          'Break down the problem',
          'Turn down the problem',
          'Lock down the problem',
        ],
        correctIndex: 1,
        explanation: '"Break down" means to analyze or decompose something complex into simple, intelligible components.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You need to ask a senior architect to explain how a complex microservice architecture handles distributed transactions.',
        targetPattern: 'Could you break down how [System] handles [Challenge]?',
        hint: 'Use "break down" or "walk through".',
        sampleAnswer: 'Could you break down how our payment service handles distributed transactions when a network partition occurs?',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'SAY THIS OUT LOUD: "Before we shut down the cluster, let’s write down the telemetry numbers and tear down the orphan test pods."',
      timedChallenge: 'Explain why a company might "turn down" an investment offer in under 25 seconds.',
      durationSeconds: 25,
      roleplayPrompt: 'You are an engineering manager telling your team why a legacy database is being wound down.',
    },
    recallTest: [
      {
        question: 'Why is it incorrect to say "The server fell down yesterday"?',
        hiddenAnswer: 'Because "fell down" implies physical loss of balance due to gravity. For digital systems, the correct idioms are "went down", "crashed", or "suffered an outage".',
      },
    ],
    revisionConnection:
      'After mastering vertical vectors (UP and DOWN), Chapter 86 explores horizontal expansion and emergence: the master vector "OUT".',
    masteryChallenge:
      'Identify 3 items on your to-do list that feel overwhelming. Write a sentence for each stating how you will "break it down" into smaller tasks.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 86: THE VECTOR "OUT"
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-86',
    partNumber: 7,
    partTitle: 'The Phrasal Verb Engine & Particle Dynamics',
    chapterNumber: 86,
    title: 'The Master Vector "OUT": Emergence, Exhaustion & Resolution',
    subtitle: 'From Figuring Out Root Causes to Rolling Out Enterprise Software and Burning Out from Overwork',
    level: 'Tier 4',
    readingTimeMinutes: 17,
    dna: {
      coreConcept: 'The 4 Semantic Vectors of OUT: 1) Emergence from Darkness into Light, 2) Total Exhaustion / Depletion, 3) Distribution Across Space, 4) Resolution / Harmonious Settlement',
      mentalModel:
        'Picture a dark cavern. Inside the cavern sits a locked treasure chest containing an answer. When you solve a riddle, you pull the truth OUT of the dark into the glaring daylight: you FIGURED IT OUT. Now imagine water draining from a basin until nothing remains: the water RAN OUT (Exhaustion). Now imagine a baker tossing fresh loaves to villagers in every direction: she is HANDING OUT bread (Distribution).',
      whyEnglishUsesIt:
        'OUT is the vector of manifestation. Things that were hidden become visible (point out, find out, turn out). Things that were tangled become smooth (work out, iron out). And resources that were abundant reach zero (run out, burn out, wear out).',
    },
    mentalMovie: {
      sceneDescription:
        'A team of developers stares at an enigmatic segfault core dump. One engineer zooms in on line 482 of the C++ code, raises a finger, and points directly at an uninitialized pointer: he POINTED OUT the bug, and together they FIGURED OUT the fix.',
      schematic: `
    [ THE 4 VECTORS OF "OUT" ]

    1. EMERGENCE / VISIBILITY:
       Figure OUT (cognitively resolve) │ Find OUT (discover) │ Point OUT (highlight) │ Turn OUT (result)
       
    2. TOTAL EXHAUSTION / DEPLETION:
       Run OUT of (zero remaining) │ Burn OUT (mental exhaustion) │ Wear OUT │ Fade OUT
       
    3. DISTRIBUTION & EXPANSION:
       Roll OUT (deploy gradually) │ Hand OUT │ Branch OUT │ Reach OUT (contact)
       
    4. RESOLUTION & ELIMINATION:
       Work OUT (succeed / exercise) │ Iron OUT (resolve friction) │ Rule OUT (eliminate possibility)
`,
    },
    pattern: {
      formula: 'VERB + OUT = Emergence into Clarity OR Total Depletion OR Distribution OR Resolution',
      breakdown: [
        { element: 'Figure OUT', meaning: 'Mentally deduce, calculate, or solve a complicated mystery.' },
        { element: 'Roll OUT', meaning: 'Gradually release a feature, product, or policy to a wider audience.' },
        { element: 'Point OUT', meaning: 'Direct verbal attention to an overlooked fact, flaw, or detail.' },
        { element: 'Rule OUT', meaning: 'Eliminate a hypothesis or option after scientific or diagnostic analysis.' },
        { element: 'Reach OUT', meaning: 'Initiate communication with a person or team.' },
      ],
      notes: '"Figure out" implies intellectual computation; "Find out" implies discovery through receipt of external information.',
    },
    basicExamples: [
      { text: 'I spent two hours debugging before I figured out the root cause.', context: 'Intellectual problem resolution.', audioText: 'I spent two hours debugging before I figured out the root cause' },
      { text: 'We are rolling out dark mode to ten percent of beta users today.', context: 'Gradual phased product deployment.', audioText: 'We are rolling out dark mode to ten percent of beta users today' },
      { text: 'Our lead QA engineer pointed out a critical security vulnerability.', context: 'Directing attention to an anomaly.', audioText: 'Our lead QA engineer pointed out a critical security vulnerability' },
      { text: 'We can rule out network latency since both pods reside on the same physical host.', context: 'Diagnostic elimination of a hypothesis.', audioText: 'We can rule out network latency since both pods reside on the same physical host' },
      { text: 'Please reach out to the customer success team if the issue persists.', context: 'Initiating outbound communication.', audioText: 'Please reach out to the customer success team if the issue persists' },
      { text: 'Our memory buffer ran out of heap space during the batch import.', context: 'Exhaustion of bounded capacity.', audioText: 'Our memory buffer ran out of heap space during the batch import' },
      { text: 'Everything worked out well in the end despite the initial delays.', context: 'Harmonious resolution of circumstances.', audioText: 'Everything worked out well in the end despite the initial delays' },
      { text: 'Working eighty hours a week without rest will cause you to burn out.', context: 'Psychological and physical depletion.', audioText: 'Working eighty hours a week without rest will cause you to burn out' },
    ],
    realLifeExamples: [
      {
        text: 'I found out yesterday that my flight back to Bangalore has been rescheduled.',
        situation: 'Travel schedule surprise.',
        context: 'OUT = receipt of previously unknown external news.',
      },
      {
        text: 'We ran out of milk this morning, so I had to drink black coffee.',
        situation: 'Domestic breakfast reality.',
        context: 'OUT = zero inventory remaining in the fridge.',
      },
      {
        text: 'Don’t worry about the travel details yet; everything will work out fine.',
        situation: 'Comforting an anxious friend.',
        context: 'OUT = circumstances untangling themselves favorably.',
      },
    ],
    professionalExamples: [
      {
        text: 'I’d like to point out that while the initial licensing cost is higher, the total cost of ownership over three years drops significantly.',
        context: 'Executive procurement defense.',
        tone: 'Persuasive, insightful, polished',
      },
      {
        text: 'Let’s schedule a brief sync to iron out the remaining edge cases before code freeze.',
        context: 'Pre-release sprint coordination.',
        tone: 'Collaborative, meticulous, focused',
      },
      {
        text: 'We reached out to three enterprise vendors, but only one could guarantee SOC-2 compliance.',
        context: 'Vendor evaluation readout.',
        tone: 'Objective, authoritative, thorough',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'After profiling the Node.js event loop, we figured out that a synchronous crypto call was blocking all incoming HTTP connections.',
        analogy: 'Extracting an invisible performance culprit into clear diagnostic light.',
        devContext: 'High-concurrency backend optimization report.',
      },
      {
        text: 'Our canary rollout caught the breaking CSS regression before it could impact ninety percent of our mobile web traffic.',
        analogy: 'Distribution vector controlled safely in progressive stages.',
        devContext: 'Frontend release engineering update.',
      },
    ],
    contrast: {
      conceptA: 'Figure Out (Mental Computation / Deduction)',
      conceptB: 'Find Out (External Revelation / Discovery)',
      differences: [
        { aspect: 'Cognitive Origin', optionA: 'Calculated using your own brain: "I figured out the formula."', optionB: 'Received from outside source: "I found out his birthday from Sarah."' },
        { aspect: 'Mistake to Avoid', optionA: '"I figured out from the news" ❌', optionB: '"I found out from the news" ✅' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I will find out how to solve this calculus problem.',
        likelyIntention: 'I will figure out how to solve this calculus problem.',
        rootCause: 'Using "find out" when active intellectual calculation is required. You figure out math problems; you find out what time the bus leaves.',
        naturalCorrection: 'I will figure out how to solve this calculus problem.',
        nativeCadence: '"I’ll work through the math and figure it out."',
      },
      {
        learnerError: 'He pointed me that my code had a bug.',
        likelyIntention: 'He pointed out that my code had a bug.',
        rootCause: 'Dropping the particle "out". "Point" alone means to physically point a finger; "point out" means to bring an analytical fact to light.',
        naturalCorrection: 'He pointed out that my code had a bug.',
        nativeCadence: '"He pointed out an edge case in my PR."',
      },
    ],
    nativeIntuition:
      'Native speakers use "figure out" dozens of times every single day. It is the signature verb of the competent knowledge worker. Saying "I don’t understand" sounds helpless; saying "Give me twenty minutes to figure this out" radiates agency, curiosity, and technical maturity.',
    patternRecognitionExercises: [
      {
        id: 'p-86-1',
        prompt: 'Which sentence correctly uses "rule out"?',
        options: [
          'We need to rule out the new marketing campaign across YouTube.',
          'The doctor ruled out a concussion after examining the MRI scans.',
          'I ruled out how to fix the broken database.',
          'Please rule out to the recruiter on LinkedIn.',
        ],
        correctIndex: 1,
        explanation: '"Rule out" means to eliminate a medical diagnosis, technical hypothesis, or candidate after investigation.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are leading a post-mortem and want to explain that disk space exhaustion caused the logging daemon to fail.',
        targetPattern: 'The system ran out of [Resource], causing [Component] to [Outcome].',
        hint: 'Use "ran out of" and "pointed out".',
        sampleAnswer: 'The database server ran out of disk space because old logs weren’t being rotated, which our SRE team pointed out during the triage call.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'SAY THIS OUT LOUD: "Once we figure out the latency bottleneck and rule out DNS issues, we can roll out the patch safely."',
      timedChallenge: 'Explain the difference between "figure out" and "find out" in under 20 seconds.',
      durationSeconds: 20,
      roleplayPrompt: 'You are an engineer answering a product manager who asks why a feature is taking longer than anticipated.',
    },
    recallTest: [
      {
        question: 'When should you use "figure out" instead of "find out"?',
        hiddenAnswer: 'Use "figure out" when active internal mental deduction, math, or problem-solving is needed. Use "find out" when learning a fact from an external source.',
      },
    ],
    revisionConnection:
      'Now that you understand UP, DOWN, and OUT, Chapter 87 tackles the dynamic binary pair: "OFF" vs. "ON" (Disconnection vs. Initiation).',
    masteryChallenge:
      'Notice every time you are tempted to say "I don’t know" at work this week. Replace it immediately with "I haven’t figured that out yet, but I’ll dig into it today."',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 87: THE VECTORS "OFF" & "ON"
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-87',
    partNumber: 7,
    partTitle: 'The Phrasal Verb Engine & Particle Dynamics',
    chapterNumber: 87,
    title: 'The Binary Switch Vectors: "OFF" vs. "ON"',
    subtitle: 'Disconnection, Departure & Postponement vs. Attachment, Continuation & Commencement',
    level: 'Tier 4',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'OFF = Contact Broken / Severed / Sudden Departure / Deactivation ◄──► ON = Contact Established / Continuous Forward Movement / Attachment',
      mentalModel:
        'Think of an electrical circuit. When a contact snaps open, current stops instantly: that is OFF (sever, disconnect, cancel, take off). When the contact closes, energy flows continuously: that is ON (engage, log on, carry on, keep on). Additionally, OFF represents launching off a runway into flight (departure: "take off"), while ON represents an endless treadmill moving forward (continuation: "carry on", "go on").',
      whyEnglishUsesIt:
        'OFF and ON govern the rhythm of human interaction and technical operations. "Call off" terminates a project; "carry on" preserves persistence during crisis; "take off" marks exponential startup growth.',
    },
    mentalMovie: {
      sceneDescription:
        'A supersonic jet sits on the tarmac. Suddenly its twin afterburners ignite, it accelerates down the strip, and its wheels break contact with the earth: it TOOK OFF. Meanwhile, inside the control tower, an air traffic controller tells a junior officer: "Keep on monitoring radar channel 4."',
      schematic: `
    [ THE "OFF" VS. "ON" VECTOR SPECTRUM ]

    THE "OFF" VECTOR (Contact Broken / Severance / Departure):
    ├── DISCONNECTION: Turn OFF │ Cut OFF │ Log OFF │ Shut OFF
    ├── CANCELLATION / POSTPONEMENT: Call OFF (cancel) │ Put OFF (delay)
    ├── SUDDEN DEPARTURE / MOMENTUM: Take OFF (depart / rapid growth) │ Head OFF
    └── BRUSHING ASIDE: Brush OFF (dismiss criticism) │ Shrug OFF

    THE "ON" VECTOR (Contact Made / Continuous Momentum):
    ├── ENGAGEMENT: Turn ON │ Log ON │ Switch ON
    ├── CONTINUATION: Carry ON (persist) │ Keep ON │ Go ON (proceed)
    └── RELIANCE: Count ON │ Depend ON │ Rely ON
`,
    },
    pattern: {
      formula: 'VERB + OFF = Severance / Cancellation / Departure | VERB + ON = Continuation / Attachment / Activation',
      breakdown: [
        { element: 'Call OFF', meaning: 'Cancel an already-scheduled meeting, game, or wedding completely.' },
        { element: 'Put OFF', meaning: 'Delay or procrastinate an event until a later date.' },
        { element: 'Take OFF', meaning: '1) Airplane leaving ground, 2) Remove clothing, 3) Product/career growing exponentially.' },
        { element: 'Carry ON', meaning: 'Continue working or living despite adversity or interruption.' },
        { element: 'Count ON', meaning: 'Rely with complete trust on someone’s promise or execution.' },
      ],
      notes: 'Crucial distinction: "Call off" = 100% canceled (dead). "Put off" = postponed to next week (still alive). Never mix these up!',
    },
    basicExamples: [
      { text: 'They decided to call off the product launch due to regulatory hurdles.', context: 'Complete cancellation of an event.', audioText: 'They decided to call off the product launch due to regulatory hurdles' },
      { text: 'Don’t put off writing your documentation until the final week.', context: 'Procrastination / postponing.', audioText: 'Don’t put off writing your documentation until the final week' },
      { text: 'Our SaaS revenue really took off after we launched self-serve onboarding.', context: 'Exponential upward trajectory.', audioText: 'Our SaaS revenue really took off after we launched self-serve onboarding' },
      { text: 'Even after the funding collapsed, the founders carried on building the core engine.', context: 'Resilient forward persistence.', audioText: 'Even after the funding collapsed the founders carried on building the core engine' },
      { text: 'You can count on me to review your pull request before the end of the day.', context: 'Dependable professional trust.', audioText: 'You can count on me to review your pull request before the end of the day' },
      { text: 'He brushed off the negative feedback and focused on user retention.', context: 'Lighthearted dismissal of friction.', audioText: 'He brushed off the negative feedback and focused on user retention' },
      { text: 'Let’s kick off the sprint retrospective with our kudos section.', context: 'Official ceremonial initiation.', audioText: 'Let’s kick off the sprint retrospective with our kudos section' },
      { text: 'The WiFi cut off right as the client was announcing their budget.', context: 'Abrupt physical disconnection.', audioText: 'The WiFi cut off right as the client was announcing their budget' },
    ],
    realLifeExamples: [
      {
        text: 'The weather forecast looked stormy, so they called off the barbecue.',
        situation: 'Weekend gathering plan.',
        context: 'OFF = event entirely removed from calendar.',
      },
      {
        text: 'I keep putting off my dentist appointment because of my packed schedule.',
        situation: 'Personal task delay.',
        context: 'PUT OFF = kicking the can down the road.',
      },
      {
        text: 'Carry on with your dinner; I’ll eat when I get back from the gym.',
        situation: 'Family household conversation.',
        context: 'CARRY ON = don’t halt your current activity for me.',
      },
    ],
    professionalExamples: [
      {
        text: 'We should kick off the quarterly planning session by reviewing our OKR completion rates.',
        context: 'Leadership strategy workshop.',
        tone: 'Energized, structured, focused',
      },
      {
        text: 'Our engineering director brushed off the competitor’s press release as marketing fluff.',
        context: 'Competitive intelligence briefing.',
        tone: 'Composed, unflappable, confident',
      },
      {
        text: 'Can we count on your team to provide API schema validation by Wednesday afternoon?',
        context: 'Cross-team dependency commitment.',
        tone: 'Polite, clear, holding accountability',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'When the payment webhook payload failed validation, the orchestrator cut off the transaction pipeline immediately.',
        analogy: 'Instantaneous circuit breaker disconnection.',
        devContext: 'Fintech transaction processing architecture.',
      },
      {
        text: 'Traffic to our viral AI photo generator took off overnight, exceeding our Redis connection pool limits.',
        analogy: 'Violent upward acceleration from zero to viral scale.',
        devContext: 'Infrastructure scaling review.',
      },
    ],
    contrast: {
      conceptA: 'Call Off (Permanent Cancellation)',
      conceptB: 'Put Off (Temporary Postponement / Delay)',
      differences: [
        { aspect: 'Fate of the Event', optionA: 'The event is wiped out; it will NOT happen.', optionB: 'The event is rescheduled to a later date.' },
        { aspect: 'Example Scenario', optionA: '"They called off the wedding; they broke up."', optionB: '"They put off the wedding until next spring."' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'We postponed off the meeting.',
        likelyIntention: 'We put off the meeting. / We postponed the meeting.',
        rootCause: 'Doubling the Latinate verb "postpone" with the particle "off". "Postpone" works alone; "put off" is the phrasal equivalent.',
        naturalCorrection: 'We put off the meeting until Friday. / We postponed the meeting.',
        nativeCadence: '"We pushed the meeting to Friday."',
      },
      {
        learnerError: 'The plane flew off at 9 AM.',
        likelyIntention: 'The plane took off at 9 AM.',
        rootCause: 'Using "flew off" for departure. Airplanes specifically "take off" when ascending into flight.',
        naturalCorrection: 'The plane took off at 9 AM.',
        nativeCadence: '"We took off right on schedule."',
      },
    ],
    nativeIntuition:
      'Native speakers treat "ON" like a locomotive engine rolling on tracks: "Carry on", "Keep on", "Dream on", "Log on". It communicates continuous momentum. Conversely, "OFF" is a clean scissor cut: "Call off", "Turn off", "Lay off", "Pay off". Feel the mechanical snap of the scissor or the rolling wheels of the train.',
    patternRecognitionExercises: [
      {
        id: 'p-87-1',
        prompt: 'Which sentence means the sprint review meeting was permanently canceled, NOT merely delayed?',
        options: [
          'We put off the sprint review.',
          'We pushed back the sprint review.',
          'We called off the sprint review.',
          'We carried on with the sprint review.',
        ],
        correctIndex: 2,
        explanation: '"Call off" signifies complete, final cancellation. "Put off" and "push back" mean postponement.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'A major security vulnerability is discovered 2 hours before a major product launch. Announce the launch cancellation to stakeholders.',
        targetPattern: 'Due to [Reason], we are calling off [Event] and putting off [Next Step] until [Timeframe].',
        hint: 'Use "call off".',
        sampleAnswer: 'Due to a critical vulnerability uncovered in our auth service, we are calling off today’s launch. We will put off the public rollout until all patches are verified in staging.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'SAY THIS OUT LOUD: "We can’t put this decision off any longer; if we call off the launch now, our competitors will take off."',
      timedChallenge: 'Explain the difference between "put off" and "call off" to a junior engineer in 15 seconds.',
      durationSeconds: 15,
      roleplayPrompt: 'You are the project lead reassuring an anxious team after a difficult launch delay.',
    },
    recallTest: [
      {
        question: 'What is the critical semantic difference between "call off" and "put off"?',
        hiddenAnswer: '"Call off" means cancel completely (the event will not occur). "Put off" means delay or postpone to a future date.',
      },
    ],
    revisionConnection:
      'In Chapter 88, we conclude the core particle trilogy with "AWAY", "BACK", and "THROUGH": navigating distance, reversion, and endurance.',
    masteryChallenge:
      'Identify one difficult conversation or task you have been "putting off". Write an email draft today tackling it head-on.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 88: THE VECTORS "AWAY", "BACK" & "THROUGH"
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-88',
    partNumber: 7,
    partTitle: 'The Phrasal Verb Engine & Particle Dynamics',
    chapterNumber: 88,
    title: 'The Relational Vectors: "AWAY", "BACK" & "THROUGH"',
    subtitle: 'Distance, Reciprocity, Restoring Origin, and Navigating Obstacles from Entrance to Exit',
    level: 'Tier 4',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'AWAY = Increasing Distance / Disappearing into Horizon | BACK = Reversion to Origin / Reciprocal Exchange | THROUGH = Complete Traversal of a Tunnel / System',
      mentalModel:
        '1) AWAY is an arrow flying endlessly into the distance until it vanishes (walk away, fade away, give away). 2) BACK is a boomerang: no matter how far it travels, it returns to the thrower’s hand or reverses a previous action (pay back, roll back, bounce back, call back). 3) THROUGH is a train entering a dark mountain tunnel at Point A and emerging into the sunshine at Point B (think through, see through, follow through, run through).',
      whyEnglishUsesIt:
        'Without these three relational vectors, English would have no visceral vocabulary for resilience (bounce back), rigorous diligence (follow through), thorough analysis (think through), or strategic retreat (walk away).',
    },
    mentalMovie: {
      sceneDescription:
        'An executive sits in a high-stakes negotiation. The counterparty offers insulting terms. The executive stands up, closes her briefcase, and WALKS AWAY. Later, her engineering team THINKS THROUGH the alternative roadmap and ROLLS BACK the prototype to the previous stable checkpoint.',
      schematic: `
    [ THE 3 RELATIONAL VECTORS ]

    1. AWAY (Distance, Evaporation, Generosity):
       Walk AWAY (refuse bad deal) │ Fade AWAY (dissolve) │ Give AWAY │ Throw AWAY
       
    2. BACK (Boomerang, Reversion, Retaliation, Restoration):
       Roll BACK (git reset / revert) │ Pay BACK │ Call BACK │ Bounce BACK (recover)
       
    3. THROUGH (Tunnel Traversal: In at Start, Out at End):
       Think THROUGH (analyze every implication) │ Follow THROUGH (execute to completion) │
       See THROUGH (detect deception) │ Run THROUGH (rehearse)
`,
    },
    pattern: {
      formula: 'VERB + AWAY = Distance/Vanishing | VERB + BACK = Reversion/Return | VERB + THROUGH = Complete Traversal',
      breakdown: [
        { element: 'Roll BACK', meaning: 'Revert software, database, or state to an earlier working snapshot.' },
        { element: 'Follow THROUGH', meaning: 'Actually execute the promise or plan you previously announced.' },
        { element: 'Think THROUGH', meaning: 'Cognitively simulate every single potential consequence before deciding.' },
        { element: 'Bounce BACK', meaning: 'Rapidly recover from an illness, financial loss, or career setback.' },
        { element: 'Walk AWAY', meaning: 'Exercise the power of refusal in a negotiation or toxic situation.' },
      ],
      notes: '"Follow up" means sending a reminder; "Follow through" means finishing what you personally started.',
    },
    basicExamples: [
      { text: 'We had to roll back the production release after noticing memory leaks.', context: 'Reverting software state.', audioText: 'We had to roll back the production release after noticing memory leaks' },
      { text: 'Have you thought through what happens if our primary payment provider goes down?', context: 'Cognitive traversal of risk scenarios.', audioText: 'Have you thought through what happens if our primary payment provider goes down' },
      { text: 'He is great at brainstorming ideas, but struggles to follow through on implementation.', context: 'Execution consistency from start to finish.', audioText: 'He is great at brainstorming ideas but struggles to follow through on implementation' },
      { text: 'The startup bounced back stronger after nearly running out of runway in 2023.', context: 'Resilient recovery to origin.', audioText: 'The startup bounced back stronger after nearly running out of runway in 2023' },
      { text: 'Never be afraid to walk away from a deal that compromises your engineering principles.', context: 'Intentional physical and emotional distance.', audioText: 'Never be afraid to walk away from a deal that compromises your engineering principles' },
      { text: 'Let’s run through the presentation slides one more time before the demo.', context: 'Quick complete traversal / rehearsal.', audioText: 'Let’s run through the presentation slides one more time before the demo' },
      { text: 'The old monolithic architecture is slowly fading away as we extract microservices.', context: 'Gradual dissolution into non-existence.', audioText: 'The old monolithic architecture is slowly fading away as we extract microservices' },
      { text: 'I’ll call you back as soon as I step out of this architectural review.', context: 'Reciprocal return phone call.', audioText: 'I’ll call you back as soon as I step out of this architectural review' },
    ],
    realLifeExamples: [
      {
        text: 'After catching a bad fever over the weekend, he bounced back quickly and was at the gym on Tuesday.',
        situation: 'Personal health recovery.',
        context: 'BACK = physical return to peak vigor.',
      },
      {
        text: 'Let’s run through the packing list before we leave for the airport.',
        situation: 'Pre-vacation verification.',
        context: 'THROUGH = checking every single item from top to bottom.',
      },
      {
        text: 'Sometimes the smartest move in an argument is just to walk away.',
        situation: 'Interpersonal conflict wisdom.',
        context: 'AWAY = creating physical separation to de-escalate.',
      },
    ],
    professionalExamples: [
      {
        text: 'Our leadership team was impressed by how thoroughly you thought through the edge-case failure modes.',
        context: 'System design promotion review.',
        tone: 'Admiring, professional, high praise',
      },
      {
        text: 'Client trust is built entirely on following through on commitments made during the sales cycle.',
        context: 'All-hands cultural keynote.',
        tone: 'Principled, serious, accountable',
      },
      {
        text: 'We can easily roll back the feature flag if customer telemetry shows any drop in checkout conversion.',
        context: 'Risk mitigation in product release.',
        tone: 'Reassuring, technical, prepared',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The blue-green deployment failed smoke tests, triggering an automated rollback to the blue environment within fifteen seconds.',
        analogy: 'Boomerang reversion to safe historical state.',
        devContext: 'Continuous delivery automation post-mortem.',
      },
      {
        text: 'Before we approve this pull request, let’s run through the concurrency race conditions with the database team.',
        analogy: 'Meticulous cognitive audit across the entire code path.',
        devContext: 'Senior staff engineer code review.',
      },
    ],
    contrast: {
      conceptA: 'Follow Up (Checking in on Someone Else)',
      conceptB: 'Follow Through (Executing Your Own Promise to the End)',
      differences: [
        { aspect: 'Direction', optionA: 'External: You ping an engineer or client to ask for an update.', optionB: 'Internal: You finish the task you committed to doing.' },
        { aspect: 'Example Scenario', optionA: '"I will follow up with Sarah regarding the contract."', optionB: '"He promised to write unit tests, and he followed through."' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I will revert back to you soon.',
        likelyIntention: 'I will get back to you soon. / I will reply to you soon.',
        rootCause: '"Revert back" is an archaic Indian-English redundancy. In global tech, "revert" means git revert (undo code), not reply.',
        naturalCorrection: 'I will get back to you soon. / I’ll follow up with you tomorrow.',
        nativeCadence: '"I’ll get back to you by end of day."',
      },
      {
        learnerError: 'We must think this over until the end.',
        likelyIntention: 'We must think this through.',
        rootCause: 'Using "think over" when comprehensive tunnel traversal is needed. "Think over" means consider a choice; "think through" means trace all downstream consequences.',
        naturalCorrection: 'We must think this through.',
        nativeCadence: '"Let’s think through the second-order effects."',
      },
    ],
    nativeIntuition:
      'Native communicators love "THROUGH" because it signals intellectual stamina. Anyone can start a project; few people "follow through". Anyone can have a quick opinion; mature leaders "think things through". When you use THROUGH, listeners recognize your rigor.',
    patternRecognitionExercises: [
      {
        id: 'p-88-1',
        prompt: 'Which phrasal verb means to carefully analyze all future consequences and edge cases of a decision?',
        options: [
          'Run away from the decision',
          'Roll back the decision',
          'Think through the decision',
          'Call back the decision',
        ],
        correctIndex: 2,
        explanation: '"Think through" means to mentally traverse every nuance, consequence, and potential pitfall of a plan.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are proposing a major database migration in an architecture meeting. Reassure stakeholders by explaining your rollback strategy and thorough analysis.',
        targetPattern: 'We have thought through [Risks] and established an automated rollback in case [Trigger].',
        hint: 'Use "thought through" and "roll back".',
        sampleAnswer: 'We have thoroughly thought through the migration risks, and if latency spikes above 200ms, our pipeline will automatically roll back to the previous snapshot.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'SAY THIS OUT LOUD: "If we don’t think through the concurrency model today, we’ll be forced to roll back the release tomorrow."',
      timedChallenge: 'Explain what "follow through" means using a sports or software analogy in 20 seconds.',
      durationSeconds: 20,
      roleplayPrompt: 'You are a tech lead explaining why a junior developer’s PR was rejected for lack of edge-case consideration.',
    },
    recallTest: [
      {
        question: 'Why should you avoid saying "I will revert back to you" in international technical communication?',
        hiddenAnswer: 'Because "revert" means to return to a previous state (like git revert), and adding "back" is redundant. Native speakers say "I will get back to you" or "I will follow up".',
      },
    ],
    revisionConnection:
      'With all individual particles mastered, Chapter 91 integrates them into high-stakes executive tech and software leadership contexts.',
    masteryChallenge:
      'Think of an upcoming technical or personal decision. List 3 second-order consequences you haven’t "thought through" yet.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 91: PHRASAL VERBS IN HIGH-STAKES TECH & LEADERSHIP
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-91',
    partNumber: 7,
    partTitle: 'The Phrasal Verb Engine & Particle Dynamics',
    chapterNumber: 91,
    title: 'Phrasal Verbs in High-Stakes Tech & Engineering Leadership',
    subtitle: 'Spinning Up Clusters, Pushing Back on Deadlines, Ramping Up Engineers, and Phasing Out Legacy Systems',
    level: 'Tier 4',
    readingTimeMinutes: 18,
    dna: {
      coreConcept: 'The Professional Phrasal Lexicon: Operating with Fluent Authority in Silicon Valley & Global Tech Hubs',
      mentalModel:
        'In global technology companies (Google, Meta, Amazon, Stripe), senior engineers and engineering directors do not speak in academic Latinate sentences. They use precise, high-velocity phrasal drivers: "push back on scope creep", "ramp up on the codebase", "drill down into the metrics", "double down on core strengths", "phase out deprecations", "bail out of broken queries". Mastering this dialect instantly raises your perceived technical seniority and authority.',
      whyEnglishUsesIt:
        'Tech is fast, pragmatic, and visual. Phrasal verbs compress complex mechanical and social dynamics into punchy, dynamic verbs that convey exact intent without bureaucratic bloat.',
    },
    mentalMovie: {
      sceneDescription:
        'Inside a high-pressure sprint planning meeting, a VP demands three new features by Friday. The Principal Engineer leans forward calmly, opens the velocity dashboard, and PUSHES BACK with data, explaining that the team must PHASE OUT technical debt before RAMPING UP new initiatives.',
      schematic: `
    [ THE HIGH-STAKES TECH PHRASAL ARSENAL ]

    NEGOTIATION & DEADLINES:
    ├── Push BACK (diplomatically challenge unrealistic scope)
    ├── Bail OUT (abort a failing technical strategy)
    └── Hold OFF on (intentionally delay until prerequisites arrive)

    INFRASTRUCTURE & CODE EVOLUTION:
    ├── Spin UP / Tear DOWN (cloud resource lifecycle)
    ├── Roll OUT / Roll BACK (release engineering)
    └── Phase OUT / sunset (graceful legacy deprecation)

    TEAM & METRICS EXECUTION:
    ├── Ramp UP (accelerate onboarding or performance)
    ├── Drill DOWN (investigate granular sub-metrics)
    └── Double DOWN (reinvest aggressively in what works)
`,
    },
    pattern: {
      formula: 'EXECUTIVE CONTEXT + HIGH-VELOCITY PHRASAL DRIVER + STRATEGIC JUSTIFICATION',
      breakdown: [
        { element: 'Push back on', meaning: 'Diplomatically refuse or question unreasonable demands with evidence.' },
        { element: 'Ramp up', meaning: 'Increase speed, capacity, or guide a new engineer toward full productivity.' },
        { element: 'Phase out', meaning: 'Gradually discontinue a feature, service, or policy over time.' },
        { element: 'Drill down into', meaning: 'Analyze detailed data underneath a high-level summary graph.' },
        { element: 'Bail out of', meaning: 'Abandon an approach that is proving catastrophic or inefficient.' },
      ],
      notes: 'Tone Calibration: "Push back" is not hostile; it is a vital badge of senior engineering maturity. A junior agrees to everything; a senior pushes back when quality is at risk.',
    },
    basicExamples: [
      { text: 'We need to push back on the product team’s deadline; two weeks is insufficient for security audits.', context: 'Diplomatic scope pushback.', audioText: 'We need to push back on the product team’s deadline two weeks is insufficient for security audits' },
      { text: 'It typically takes a new backend developer about three weeks to ramp up on our monorepo.', context: 'Engineering onboarding velocity.', audioText: 'It typically takes a new backend developer about three weeks to ramp up on our monorepo' },
      { text: 'We are phasing out Python 2 scripts across all internal build servers.', context: 'Gradual technology deprecation.', audioText: 'We are phasing out Python 2 scripts across all internal build servers' },
      { text: 'Let’s drill down into the p99 latency spikes occurring between 2 AM and 4 AM.', context: 'Deep diagnostic metric analysis.', audioText: 'Let’s drill down into the p99 latency spikes occurring between 2 AM and 4 AM' },
      { text: 'We decided to double down on our open-source developer tooling strategy.', context: 'Aggressive focused reinvestment.', audioText: 'We decided to double down on our open-source developer tooling strategy' },
      { text: 'The thread bailed out of the deadlocked transaction and triggered an exponential backoff.', context: 'Programmatic fallback / abort.', audioText: 'The thread bailed out of the deadlocked transaction and triggered an exponential backoff' },
      { text: 'Let’s hold off on deploying the payment refactor until after the quarterly earnings call.', context: 'Intentional strategic pause.', audioText: 'Let’s hold off on deploying the payment refactor until after the quarterly earnings call' },
      { text: 'Can you walk through the system architecture for the new team members?', context: 'Comprehensive explanatory guided tour.', audioText: 'Can you walk through the system architecture for the new team members' },
    ],
    realLifeExamples: [
      {
        text: 'When the contractor tried to double his quote halfway through the renovation, we had to push back firmly.',
        situation: 'Negotiating household contractor prices.',
        context: 'Asserting contractual boundaries against sudden price hikes.',
      },
      {
        text: 'It took me a few days to ramp up on driving on the left side of the road in the UK.',
        situation: 'International travel adaptation.',
        context: 'RAMP UP = steep learning curve overcome gradually.',
      },
      {
        text: 'I’m trying to phase out sugary snacks from my daily routine.',
        situation: 'Health habit change.',
        context: 'PHASE OUT = gradual reduction rather than cold-turkey shock.',
      },
    ],
    professionalExamples: [
      {
        text: 'I recommend we push back on adding more features to this milestone and instead double down on addressing our high-priority bug backlog.',
        context: 'Engineering lead during sprint planning.',
        tone: 'Strategic, authoritative, protective of team health',
      },
      {
        text: 'If we drill down into our churn metrics, we notice that eighty percent of cancellations occur during the first fourteen days.',
        context: 'Executive board presentation.',
        tone: 'Analytical, data-driven, insightful',
      },
      {
        text: 'We are phasing out our on-premises data center footprint and migrating entirely to AWS GovCloud by Q1.',
        context: 'Enterprise infrastructure transformation briefing.',
        tone: 'Decisive, forward-looking, definitive',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'When the memory allocation threshold was exceeded, the garbage collector bailed out of the incremental sweep and initiated a full stop-the-world compaction.',
        analogy: 'Runtime emergency escape hatch.',
        devContext: 'JVM / V8 performance profiling.',
      },
      {
        text: 'We set up an automated canary pipeline to roll out the new GraphQL gateway to internal users first, monitor error budgets, and roll back if anomalies flare up.',
        analogy: 'The holy grail of modern release engineering phrasal mechanics.',
        devContext: 'Staff Site Reliability Engineer architecture review.',
      },
    ],
    contrast: {
      conceptA: 'Passive / Junior Agreement ("Yes to everything")',
      conceptB: 'Senior Technical Pushback ("Constructive Boundary Setting")',
      differences: [
        { aspect: 'Communication Style', optionA: '"Okay, we will try to finish all ten features by Friday somehow."', optionB: '"I need to push back on that timeline. Shipping all ten features compromises quality. Let’s prioritize the top three."' },
        { aspect: 'Perceived Seniority', optionA: 'Fragile, overwhelmed, untrusted', optionB: 'Reliable, principled, executive material' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'We must oppose to the product manager’s request.',
        likelyIntention: 'We need to push back on the product manager’s request.',
        rootCause: 'Using adversarial, combative language ("oppose to") instead of collegiate, professional phrasal language ("push back on").',
        naturalCorrection: 'We need to push back on the PM’s request with data.',
        nativeCadence: '"I’d push back on that timeline based on our current velocity."',
      },
      {
        learnerError: 'I will learn the new developer about our codebase.',
        likelyIntention: 'I will ramp up the new developer on our codebase.',
        rootCause: 'Confusing "learn" with "teach" or "onboard". In modern tech, you "ramp someone up" on a project.',
        naturalCorrection: 'I will ramp up the new developer on our codebase.',
        nativeCadence: '"I’ll help ramp up Alex on the billing service this week."',
      },
    ],
    nativeIntuition:
      'In high-performing tech companies, phrasal verbs represent respect and efficiency. When you say "Let’s drill down into the logs", "I need to push back on scope", or "Let’s sunset this legacy endpoint", you signal that you belong in the room with senior decision-makers. It turns abstract hesitation into crisp operational momentum.',
    patternRecognitionExercises: [
      {
        id: 'p-91-1',
        prompt: 'Which phrase is the standard, diplomatic way to challenge an unreasonable feature deadline in an engineering meeting?',
        options: [
          'Oppose the deadline',
          'Fight against the deadline',
          'Push back on the deadline',
          'Throw away the deadline',
        ],
        correctIndex: 2,
        explanation: '"Push back on" is the universally accepted professional idiom for diplomatically challenging unrealistic requirements or timelines.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'A VP of Sales asks your engineering team to deliver an unvetted custom feature in 48 hours for an enterprise deal. Deliver a firm, diplomatic pushback.',
        targetPattern: 'I understand the urgency, but I need to push back on [Request]. Doing so would risk [Consequence]. Instead, we can [Alternative].',
        hint: 'Use "push back on" and "double down".',
        sampleAnswer: 'I understand the business urgency for this deal, but I need to push back on a 48-hour delivery. Rushing this without security review risks exposing customer data. Instead, we can demo a mocked sandbox today and roll out the verified integration next sprint.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS OUT LOUD: "I need to push back on that timeline. If we double down on tech debt now and phase out the legacy API, we can ramp up new features twice as fast in Q3."',
      timedChallenge: 'Deliver a 30-second executive response explaining why your team needs to "phase out" a legacy database.',
      durationSeconds: 30,
      roleplayPrompt: 'You are presenting to the CTO explaining why technical debt must be addressed immediately.',
    },
    recallTest: [
      {
        question: 'What does it mean to "ramp up" an engineer on a project?',
        hiddenAnswer: 'To onboard them, guide their initial learning curve, and bring their productivity up to the full team standard.',
      },
    ],
    revisionConnection:
      'Congratulations! You have completed Part 7: The Phrasal Verb Engine & Particle Dynamics. You now possess the spatial intuition of native English speakers. In Part 8, we build upon this by mastering Mental Schemas & Collocations.',
    masteryChallenge:
      'Write a 4-sentence simulation of your next sprint planning meeting incorporating at least 4 tech phrasal verbs: push back, spin up, ramp up, roll out, or phase out.',
  },
];
