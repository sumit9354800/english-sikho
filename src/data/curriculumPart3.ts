import { Chapter } from '../types';

export const PART_3_CHAPTERS: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // CHAPTER 30: THE SPATIAL NATURE OF PREPOSITIONS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-30',
    partNumber: 3,
    partTitle: 'The Preposition & Spatial Engine',
    chapterNumber: 30,
    title: 'The Spatial Nature of Prepositions (Mental Maps over Rules)',
    subtitle: 'Geometric Coordinates, Dimensions, and Vector Trajectories',
    level: 'Tier 2',
    readingTimeMinutes: 15,
    dna: {
      coreConcept: 'Spatial Geometry: Dimensions (0D Point, 1D/2D Line & Surface, 3D Container)',
      mentalModel:
        'Prepositions in English are not arbitrary grammar rules or random pre-selected memorization lists. They are pure physical spatial geometry. The native brain perceives the world through dimensions: 0D dimensionless point (AT), 1D/2D contact surface (ON), and 3D enclosed container (IN). Once you visualize the dimensional geometry, prepositions become effortlessly predictable.',
      whyEnglishUsesIt:
        'Germanic English originated from a culture deeply tied to physical navigation, hunting, sailing, and physical territory. Every abstract relationship (time, purpose, cause, belonging) is expressed as a metaphor of physical physical space.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture three physical objects on your desk: 1) A GPS coordinate pin dropping on a map (AT), 2) A coffee mug resting on the flat wooden tabletop (ON), and 3) A pen resting inside an open drawer (IN). Watch how your hand moves to interact with each one. That geometry governs 80% of English prepositions.',
      schematic: `
   [ AT: 0D POINT ]             [ ON: 2D SURFACE ]             [ IN: 3D CONTAINER ]
          ●                             ═════════                      ┌─────────┐
      Exact Pin                      Physical Contact                  │    ●    │
   "at the corner"                    "on the table"                   │ Inside  │
   "at 5:00 PM"                       "on Monday"                      └─────────┘
   "at the bus stop"                  "on the website"                 "in the room"
`,
    },
    pattern: {
      formula: 'Subject + Motion/State Verb + [Spatial Preposition: AT / ON / IN / TO / FROM] + Landmark Object',
      breakdown: [
        { element: 'Subject', meaning: 'The entity navigating or occupying space.' },
        { element: 'Spatial Vector', meaning: 'The preposition specifying dimensional relationship or trajectory.' },
        { element: 'Landmark', meaning: 'The reference object providing the coordinate system.' },
      ],
      notes: 'Every abstract phrase ("in trouble", "on schedule", "at risk") is a direct spatial metaphor.',
    },
    basicExamples: [
      { text: 'Meet me at the entrance.', context: '0D point coordinate on a map.', audioText: 'Meet me at the entrance' },
      { text: 'The laptop is on the desk.', context: '2D surface contact.', audioText: 'The laptop is on the desk' },
      { text: 'The keys are in my pocket.', context: '3D volumetric enclosure.', audioText: 'The keys are in my pocket' },
      { text: 'We are at an inflection point.', context: 'Abstract 0D milestone on a timeline.', audioText: 'We are at an inflection point' },
      { text: 'The release is on track.', context: 'Abstract 1D trajectory alignment.', audioText: 'The release is on track' },
      { text: 'Our team is in a tough spot.', context: 'Abstract 3D enclosed predicament.', audioText: 'Our team is in a tough spot' },
      { text: 'She is at her computer.', context: 'Coordinate station for an activity.', audioText: 'She is at her computer' },
      { text: 'The banner is on the homepage.', context: '2D digital screen surface.', audioText: 'The banner is on the homepage' },
      { text: 'The data is stored in the database.', context: 'Digital container enclosure.', audioText: 'The data is stored in the database' },
      { text: 'I am at peace with this decision.', context: 'State coordinate of emotional rest.', audioText: 'I am at peace with this decision' },
    ],
    realLifeExamples: [
      {
        text: 'I am waiting for you at the Starbucks by the metro station.',
        situation: 'Sharing physical meeting location with a friend.',
        context: 'Pinpoint geographic landmark (AT).',
      },
      {
        text: 'Don’t leave your wet umbrella on the hardwood floor; put it in the bin.',
        situation: 'Household instructions to guests.',
        context: 'Contrasting 2D surface (ON) with 3D enclosure (IN).',
      },
      {
        text: 'I am on the phone with customer support right now.',
        situation: 'Whispering to a peer while on a call.',
        context: 'Digital channel/surface of communication (ON).',
      },
    ],
    professionalExamples: [
      {
        text: 'We are currently at a critical juncture where architectural decisions will dictate scalability.',
        context: 'Executive technical committee review.',
        tone: 'Strategic, analytical, precise',
      },
      {
        text: 'All API documentation is now live on our developer portal.',
        context: 'Product announcement to engineering teams.',
        tone: 'Authoritative, clear',
      },
      {
        text: 'The payment gateway failure put the entire checkout pipeline in jeopardy.',
        context: 'Incident post-mortem root cause analysis.',
        tone: 'Objective, serious',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The listener is listening for incoming websocket packets at port 8080.',
        devContext: 'Networking socket configuration.',
        analogy: '`socket.bind({ port: 8080 })` — Pinpoint coordinate binding (AT).',
      },
      {
        text: 'The middleware operates on the request payload before forwarding it to the controller.',
        devContext: 'Express/Fastify pipeline architecture.',
        analogy: 'Operating upon a surface layer in a pipeline stream (ON).',
      },
      {
        text: 'Session state is persisted in an in-memory Redis cache cluster.',
        devContext: 'Distributed caching architecture.',
        analogy: '`redis.set(key, val)` — Storing an item inside a storage container (IN).',
      },
    ],
    contrast: {
      conceptA: 'AT (0D Point Coordinate)',
      conceptB: 'IN (3D Enclosure) & ON (2D Surface)',
      differences: [
        { aspect: 'Geometry', optionA: 'Zero-dimensional dot. No interior, no surface.', optionB: 'IN = 3D volume with boundaries; ON = 2D surface contact.' },
        { aspect: 'Hospital Example', optionA: '"At the hospital" (Visiting or at the geographical address).', optionB: '"In the hospital" (Admitted as a patient inside a hospital bed).' },
        { aspect: 'School Example', optionA: '"At school" (Present at the building / student status).', optionB: '"In school" (Enrolled in the educational institution system).' },
        { aspect: 'Bus Example', optionA: '"At the bus stop" (Coordinate waiting spot).', optionB: '"On the bus" (Platform surface where you walk; or "in the car").' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I am in the bus.',
        likelyIntention: 'Saying you are currently traveling on a public bus.',
        rootCause:
          'Indian languages translate "bus mein" as "in the bus". In English, large public transit vehicles with flat walkable aisles use ON ("on the bus", "on the plane", "on the train"). Only enclosed passenger vehicles where you must crouch use IN ("in the car", "in a taxi").',
        naturalCorrection: 'I am on the bus.',
        nativeCadence: 'Rule of thumb: If you can stand up and walk down the aisle, use ON.',
      },
      {
        learnerError: 'He is sitting on his desk.',
        likelyIntention: 'Saying he is working at his office workstation.',
        rootCause:
          'Literal translation of "desk par baitha hai". Sitting ON the desk means his buttocks are physically resting on the wooden furniture.',
        naturalCorrection: 'He is sitting at his desk.',
        nativeCadence: 'Use "at the desk" for working coordinates.',
      },
      {
        learnerError: 'Discuss about the architecture.',
        likelyIntention: 'Proposing a topic for the meeting.',
        rootCause: 'Translating Hindi "ke baare mein baat karna". "Discuss" is a direct transitive verb that takes no preposition.',
        naturalCorrection: 'Discuss the architecture. / Talk about the architecture.',
        nativeCadence: 'Never say "discuss about".',
      },
    ],
    nativeIntuition:
      'Native speakers do not think about grammatical categories; they feel geometry in their body. When they say "I am on the bus", they feel the elevated deck of the vehicle beneath their feet. When they say "I am at my desk", they visualize their office workstation as a coordinate pin.',
    patternRecognitionExercises: [
      {
        id: 'prep-q1',
        prompt: 'Choose the correct preposition: "I am currently traveling ___ the 5:15 PM train to Chicago."',
        options: ['in', 'at', 'on', 'inside of'],
        correctIndex: 2,
        explanation:
          'Trains have walkable deck platforms and aisles. In English, large mass transit vehicles (buses, trains, planes, ferries) take "on".',
      },
      {
        id: 'prep-q2',
        prompt: 'Which phrase correctly describes a colleague stationed at their workspace reviewing code?',
        options: [
          'Alex is on his desk reviewing the PR.',
          'Alex is at his desk reviewing the PR.',
          'Alex is in his desk reviewing the PR.',
          'Alex is by inside his desk reviewing the PR.',
        ],
        correctIndex: 1,
        explanation:
          '"At his desk" indicates the 0D coordinate of working at a station. "On his desk" implies he is sitting on top of the physical furniture.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are on a commuter train heading to your office and your manager asks where you are.',
        targetPattern: 'ON the train + Heading to + Destination',
        hint: 'Remember the transit rule: platform = ON.',
        sampleAnswer: 'I am currently on the train heading into downtown; I should be at my desk by 9:15 AM.',
      },
      {
        scenario: 'You are writing an API status update describing a worker process listening for jobs.',
        targetPattern: 'Listening AT / ON',
        hint: 'Use "listening at port..." or "listening on channel..."',
        sampleAnswer: 'The worker process is listening for incoming tasks at port 9000 and processing items in the Redis queue.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH PRECISION: "I am on the train, headed to the office, and I will be at my desk in twenty minutes."',
      timedChallenge:
        'Speak for 45 seconds describing every object on your desk, in your room, and at your location, explicitly using AT, ON, and IN with physical geometric clarity.',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey team, I am on the commuter rail right now. I will jump on Slack as soon as I arrive at the office."',
    },
    recallTest: [
      {
        question: 'What is the "walkable aisle" test for public transit prepositions?',
        hiddenAnswer:
          'If you can stand upright and walk down an aisle (bus, train, plane, ship), you are ON it. If you have to crouch and sit directly into an enclosed vehicle (car, taxi, helicopter), you are IN it.',
      },
      {
        question: 'Why is "We will discuss about this ticket" grammatically incorrect?',
        hiddenAnswer:
          '"Discuss" is a transitive verb that directly incorporates the topic (Discuss + Object). You only use "about" with "talk" (Talk about this ticket).',
      },
    ],
    revisionConnection:
      'Understanding dimensions lays the foundation. In Chapter 31, we master the most fiercely contested pair in global communication: TO versus FOR.',
    masteryChallenge:
      'Audit your spoken sentences today for transit and location: consciously use "on the bus/metro", "at my desk", and "in the taxi". Catch yourself if you say "in the bus".',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 31: TO VS. FOR
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-31',
    partNumber: 3,
    partTitle: 'The Preposition & Spatial Engine',
    chapterNumber: 31,
    title: 'TO vs. FOR (The Vector of Target vs. The Intended Beneficiary)',
    subtitle: 'Directional Arrows, Destination Endpoints, Intended Purpose, and Motive',
    level: 'Tier 2',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'TO = The Directional Target Arrow (──►) vs. FOR = The Intended Beneficiary or Purpose (★)',
      mentalModel:
        'TO is an arrow flying through space toward an endpoint destination or receiver (A ──► B). FOR is the reason, the beneficiary, or the exchange value for which an action exists (Gift for you, paid $5 for coffee, built for performance).',
      whyEnglishUsesIt:
        'Confusion between TO and FOR destroys professional clarity. Saying "I made this to you" is ungrammatical; saying "I explained this for you" changes the meaning from teaching you to doing your job on your behalf.',
    },
    mentalMovie: {
      sceneDescription:
        'Visualize an archer firing an arrow: the arrow flies through the air toward the wooden target bullseye. That trajectory and contact point is TO. Now visualize wrapping a gift box with a silk ribbon and writing a name tag on it. That gift is dedicated to someone’s benefit. That is FOR.',
      schematic: `
   [ TO: DIRECTIONAL ARROW ]                    [ FOR: BENEFICIARY / PURPOSE ]
   Actor ══════════════════════► Target         Item / Effort ═══════════► [ ★ BENEFIT ]
   "Send an email to Sarah"                     "Prepare a deck for Sarah"
   "Walk to the building"                       "Built for high concurrency"
   "Explain the logic to the team"              "Do the presentation for me" (on my behalf)
`,
    },
    pattern: {
      formula: 'TO + Destination/Receiver/Base Verb (Infinitive) | FOR + Beneficiary/Noun/Gerund (-ing Purpose)',
      breakdown: [
        { element: 'TO + Person/Place', meaning: 'The recipient or physical/conceptual destination ("speak to him", "go to Tokyo").' },
        { element: 'TO + Verb (Infinitive)', meaning: 'The intentional action objective ("I called to ask a question").' },
        { element: 'FOR + Person', meaning: 'The beneficiary who receives the advantage or on whose behalf work is done ("a gift for you").' },
        { element: 'FOR + Purpose Noun / -ing', meaning: 'The inherent utility or function of a tool ("designed for processing data").' },
      ],
      notes: 'Crucial distinction: "He explained the bug TO me" (I listened). "He explained the bug FOR me" (He spoke in my place because I was absent).',
    },
    basicExamples: [
      { text: 'Send the report to the client.', context: 'Directional delivery to receiver.', audioText: 'Send the report to the client' },
      { text: 'This feature was designed for speed.', context: 'Architectural intended purpose.', audioText: 'This feature was designed for speed' },
      { text: 'Can you speak to the manager?', context: 'Directional communication target.', audioText: 'Can you speak to the manager' },
      { text: 'Can you cover this meeting for me?', context: 'Acting on someone’s behalf as beneficiary.', audioText: 'Can you cover this meeting for me' },
      { text: 'I am heading to lunch.', context: 'Spatial destination.', audioText: 'I am heading to lunch' },
      { text: 'What did you get for lunch?', context: 'Target purpose/meal acquired.', audioText: 'What did you get for lunch' },
      { text: 'We need to migrate to the new server.', context: 'Target endpoint of migration.', audioText: 'We need to migrate to the new server' },
      { text: 'We purchased new licenses for the team.', context: 'Dedicated beneficiary group.', audioText: 'We purchased new licenses for the team' },
      { text: 'I came here to learn.', context: 'Infinitive purpose of action.', audioText: 'I came here to learn' },
      { text: 'This tool is great for debugging.', context: 'Functional suitability.', audioText: 'This tool is great for debugging' },
    ],
    realLifeExamples: [
      {
        text: 'I bought some flowers for my mother and drove to her house to deliver them.',
        situation: 'Visiting family on a weekend.',
        context: 'Contrasting beneficiary (FOR) with spatial destination (TO).',
      },
      {
        text: 'Can you listen to this song and tell me what you think?',
        situation: 'Sharing music with a friend.',
        context: 'Directional sensory attention (listen TO).',
      },
      {
        text: 'I baked a cake for your birthday.',
        situation: 'Celebrating a colleague or family milestone.',
        context: 'Dedicated creation for a specific beneficiary.',
      },
    ],
    professionalExamples: [
      {
        text: 'I will present the architecture proposal to the executive stakeholders on Thursday.',
        context: 'Quarterly review presentation.',
        tone: 'Executive, direct, professional',
      },
      {
        text: 'Could you review this pull request for me while I handle the production hotfix?',
        context: 'Collaborative task delegation in a software sprint.',
        tone: 'Collegial, courteous',
      },
      {
        text: 'This caching layer was engineered specifically for sub-millisecond response times.',
        context: 'System design benchmark presentation.',
        tone: 'Technical, confident',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The client sends an HTTP POST request to the authentication endpoint.',
        devContext: 'API routing and transport protocol.',
        analogy: '`fetch("https://api.domain.com/auth", { method: "POST" })` — Directional packet flight (TO).',
      },
      {
        text: 'This utility library was written for parsing nested JSON structures.',
        devContext: 'Shared module documentation.',
        analogy: 'Designed to serve a dedicated computational purpose (FOR).',
      },
      {
        text: 'Pass the user payload to the notification service for asynchronous email delivery.',
        devContext: 'Event-driven microservice orchestration.',
        analogy: 'Directional message dispatch (TO) for the intended outcome of delivery (FOR).',
      },
    ],
    contrast: {
      conceptA: 'TO (Directional Arrow ──►)',
      conceptB: 'FOR (Beneficiary / Inherent Purpose ★)',
      differences: [
        { aspect: 'Core Meaning', optionA: 'Destination, recipient, motion toward endpoint.', optionB: 'Beneficiary, purpose, exchange, duration.' },
        { aspect: 'Speaking', optionA: '"I spoke TO John." (John was my audience; I addressed him).', optionB: '"I spoke FOR John." (John lost his voice; I represented his words).' },
        { aspect: 'Writing', optionA: '"I wrote an email TO the client." (Client received the email).', optionB: '"I wrote the email FOR the client." (I drafted it on the client’s behalf).' },
        { aspect: 'Purpose with Verbs', optionA: 'TO + Base Verb: "I went to buy groceries."', optionB: 'FOR + Noun / -ing: "A basket for groceries / for carrying groceries."' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I explained him the problem.',
        likelyIntention: 'Saying you explained the issue to a colleague.',
        rootCause:
          'In Hindi, "Maine usko samjhaya". Learners omit the directional preposition TO. "Explain" cannot take an indirect personal object directly.',
        naturalCorrection: 'I explained the problem to him.',
        nativeCadence: 'Rule: Explain [SOMETHING] TO [SOMEONE]. Never "explain someone".',
      },
      {
        learnerError: 'I bought a gift to you.',
        likelyIntention: 'Giving someone a present.',
        rootCause: 'Confusing recipient trajectory with dedicated beneficiary.',
        naturalCorrection: 'I bought a gift for you. / I gave a gift to you.',
        nativeCadence: 'Buy/make = FOR someone; Give/send = TO someone.',
      },
      {
        learnerError: 'I went to the store for buy milk.',
        likelyIntention: 'Expressing your reason for going to the store.',
        rootCause: 'Pairing FOR with a base verb.',
        naturalCorrection: 'I went to the store to buy milk. / ...for milk.',
        nativeCadence: 'Use TO + base verb for personal action intent.',
      },
    ],
    nativeIntuition:
      'Native speakers feel TO as a kinetic arrow hitting a target board. When they speak, their words travel TO the listener’s ears. When they do a favor or build a tool, they feel the warmth of the benefit going FOR the user.',
    patternRecognitionExercises: [
      {
        id: 'tofor-q1',
        prompt: 'Select the grammatically correct sentence for presenting an architectural diagram:',
        options: [
          'Can you explain me this diagram?',
          'Can you explain this diagram to me?',
          'Can you explain for me this diagram?',
          'Can you explain about this diagram to me?',
        ],
        correctIndex: 1,
        explanation:
          'In English, the verb "explain" requires the formula: Explain + [Thing] + TO + [Person]. You cannot say "explain me".',
      },
      {
        id: 'tofor-q2',
        prompt: 'Which sentence correctly expresses using an API for caching?',
        options: [
          'We use Redis to caching session tokens.',
          'We use Redis for cache session tokens.',
          'We use Redis for caching session tokens.',
          'We use Redis to for cache session tokens.',
        ],
        correctIndex: 2,
        explanation:
          'When using "FOR" to denote function or purpose, it must be followed by a noun or a gerund ("for caching"). If using "TO", use the base infinitive ("to cache").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'A coworker asks who you are preparing the technical demo for.',
        targetPattern: 'Preparing [Something] FOR [Beneficiary/Audience]',
        hint: 'Use "I am preparing this demo for..."',
        sampleAnswer: 'I am preparing this interactive demo for the enterprise customer meeting tomorrow morning.',
      },
      {
        scenario: 'You need to ask a lead architect to clarify a database migration step.',
        targetPattern: 'Explain [Something] TO [Me]',
        hint: 'Remember: Never say "explain me".',
        sampleAnswer: 'Could you explain the rollback strategy to me before we trigger the deployment?',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH SHARP VOCAL PROJECTION: "I explained the migration to the team, and built this script for the release engineers."',
      timedChallenge:
        'Speak for 45 seconds comparing what you do TO help your system vs. what you do FOR your team members, emphasizing the contrast between TO and FOR.',
      durationSeconds: 45,
      roleplayPrompt:
        '"Could you explain the authorization logic to me? I want to make sure I build the right integration for our mobile app."',
    },
    recallTest: [
      {
        question: 'What is the correct syntax for the verb EXPLAIN?',
        hiddenAnswer:
          'Explain + [Direct Object / The Thing] + TO + [The Person]. Example: "Explain the code to me" (NEVER "Explain me the code").',
      },
      {
        question: 'What is the difference between "I spoke TO Mark" and "I spoke FOR Mark"?',
        hiddenAnswer:
          '"I spoke TO Mark" means Mark was the listener/audience. "I spoke FOR Mark" means Mark was unable to speak and I represented him or advocated on his behalf.',
      },
    ],
    revisionConnection:
      'Now that the directional arrow (TO) and beneficiary (FOR) are clear, Chapter 32 dives into the 3D physical coordinate system: IN, ON, and AT in space.',
    masteryChallenge:
      'Catch yourself every time you use the verb "explain" today. Ensure you never say "explain me"; always say "explain it to me".',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 32: IN, ON, AT IN PHYSICAL SPACE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-32',
    partNumber: 3,
    partTitle: 'The Preposition & Spatial Engine',
    chapterNumber: 32,
    title: 'IN, ON, AT in Physical Space (The 3D Hierarchy: Point, Surface, and Enclosure)',
    subtitle: 'The Spatial Pyramid: 0D Precision Points, 2D Contact Surfaces, and 3D Volumetric Containers',
    level: 'Tier 2',
    readingTimeMinutes: 15,
    dna: {
      coreConcept: 'The Dimensional Spatial Pyramid: AT (Point) ──► ON (Surface) ──► IN (Container)',
      mentalModel:
        'Think of spatial prepositions as geometric dimensions: 1) AT = 0-Dimensional coordinate point (a pin on a map with no width or depth: at the corner, at the address), 2) ON = 2-Dimensional surface contact (horizontal or vertical flat plane: on the table, on the wall, on the screen), 3) IN = 3-Dimensional enclosure with boundaries surrounding the object (in the room, in the box, in the car, in the city).',
      whyEnglishUsesIt:
        'Using the wrong preposition distorts physical reality. Saying "I am on the room" sounds like you are standing on top of the ceiling; saying "I am in the website" breaks digital conceptualization.',
    },
    mentalMovie: {
      sceneDescription:
        'Visualize an inverted spatial pyramid. At the narrowest tip sits a tiny red laser dot on a GPS map (AT). In the middle sits a wide flat glass tabletop (ON). At the broad top sits a massive cube room with six enclosing walls (IN). Watch an object move between a point coordinate, a surface, and an enclosed chamber.',
      schematic: `
   ▲  [ IN: 3D ENCLOSURE ]      Large, bounded volume (Cities, Rooms, Enclosed spaces)
  ╱ ╲   "in New York", "in the conference room", "in the car"
 ╱───╲
╱  ON ╲ [ ON: 2D SURFACE ]      Surfaces, lines, streets, public transit platforms
───────   "on 5th Avenue", "on the whiteboard", "on the website", "on the train"
  │●│   [ AT: 0D POINT ]        Precise addresses, exact coordinates, target stations
   ▼      "at 350 5th Avenue", "at the traffic light", "at my desk", "at the bus stop"
`,
    },
    pattern: {
      formula: 'AT [Specific Address / Exact Point / Activity Station] | ON [Street / Surface / Digital Screen / Transit Platform] | IN [Enclosed Space / Neighborhood / City / Country]',
      breakdown: [
        { element: 'AT + Specific Point', meaning: 'Exact numerical address ("at 10 Downing St"), coordinate ("at the door"), or functional venue ("at the store").' },
        { element: 'ON + Surface / Line', meaning: 'Street without building number ("on Broadway"), physical surface ("on the wall"), or digital platform ("on LinkedIn").' },
        { element: 'IN + Container', meaning: 'Inside physical walls ("in the server room"), geographic boundary ("in Germany"), or 3D container ("in the box").' },
      ],
      notes: 'Addresses scale down dimensionally: IN the USA ──► ON Fifth Avenue ──► AT 350 Fifth Avenue.',
    },
    basicExamples: [
      { text: 'I am at the office.', context: 'Functional operational coordinate.', audioText: 'I am at the office' },
      { text: 'I am in the office.', context: 'Physical presence inside the building walls.', audioText: 'I am in the office' },
      { text: 'The diagram is on the whiteboard.', context: '2D vertical surface.', audioText: 'The diagram is on the whiteboard' },
      { text: 'The servers are in the data center.', context: 'Enclosed facility container.', audioText: 'The servers are in the data center' },
      { text: 'She lives on Elm Street.', context: 'Linear street coordinate without number.', audioText: 'She lives on Elm Street' },
      { text: 'She lives at 742 Elm Street.', context: 'Exact point address with number.', audioText: 'She lives at 742 Elm Street' },
      { text: 'We met at the airport.', context: 'Geographic meeting coordinate.', audioText: 'We met at the airport' },
      { text: 'We were in the terminal.', context: 'Inside the architectural enclosure.', audioText: 'We were in the terminal' },
      { text: 'There is a stain on your shirt.', context: '2D textile surface contact.', audioText: 'There is a stain on your shirt' },
      { text: 'There is money in your wallet.', context: '3D pocket/compartment container.', audioText: 'There is money in your wallet' },
    ],
    realLifeExamples: [
      {
        text: 'I will meet you at the coffee shop on Main Street; I will be sitting at the table in the corner.',
        situation: 'Giving precise directions to a friend.',
        context: 'Effortless shifting between AT (venue), ON (street), AT (furniture station), and IN (corner recess).',
      },
      {
        text: 'I left my keys on the kitchen counter, not in my bag.',
        situation: 'Locating misplaced household items.',
        context: 'Surface (ON) vs. Enclosure (IN).',
      },
      {
        text: 'He is currently at the dentist getting a filling.',
        situation: 'Explaining a coworker’s morning absence.',
        context: 'Functional appointment coordinate (AT).',
      },
    ],
    professionalExamples: [
      {
        text: 'The executive briefing will take place at our global headquarters in Chicago.',
        context: 'Corporate summit schedule announcement.',
        tone: 'Corporate, prestigious, clear',
      },
      {
        text: 'You can review the updated architectural blueprint on our internal Confluence wiki.',
        context: 'Directing engineering teams to digital documentation.',
        tone: 'Efficient, collaborative',
      },
      {
        text: 'The engineering team is currently assembled in Conference Room B for the incident retro.',
        context: 'Incident management coordination.',
        tone: 'Precise, operational',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The backend microservice is listening for inbound traffic at IP address 192.168.1.10.',
        devContext: 'Network topology and host binding.',
        analogy: 'Exact 0D network address coordinate (AT).',
      },
      {
        text: 'The error banner appears on the client dashboard whenever the token expires.',
        devContext: 'Frontend UI layout and rendering.',
        analogy: 'Rendering an element upon a 2D screen viewport (ON).',
      },
      {
        text: 'All cryptographic private keys must be sealed in an encrypted environment variable vault.',
        devContext: 'DevSecOps security guidelines.',
        analogy: 'Securing sensitive data inside a digital perimeter container (IN).',
      },
    ],
    contrast: {
      conceptA: 'AT the Office (Functional Coordinate)',
      conceptB: 'IN the Office (Physical Container Presence)',
      differences: [
        { aspect: 'Focus', optionA: 'General location / working state. Could be in the parking lot or courtyard.', optionB: 'Strictly enclosed inside the four walls of the physical structure.' },
        { aspect: 'Phone Inquiry', optionA: '"Where are you?" — "I\'m at work." (Normal native response).', optionB: '"Where are you?" — "I\'m in the building." (Emphasizing physical shelter).' },
        { aspect: 'Corner Coordinate', optionA: '"At the corner" = Outside on the sidewalk where two streets meet.', optionB: '"In the corner" = Inside a room where two interior walls meet.' },
        { aspect: 'Doorway', optionA: '"At the door" = Standing on the threshold ready to knock.', optionB: '"In the door" = Physically obstructing the doorway opening.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'He lives in Park Street.',
        likelyIntention: 'Saying which street someone resides on.',
        rootCause: 'Translating Hindi "Park Street mein rehta hai". In English, streets are flat surfaces/lines (ON).',
        naturalCorrection: 'He lives on Park Street.',
        nativeCadence: 'Rule: ON [Street Name] without a building number.',
      },
      {
        learnerError: 'I saw the notification in the screen.',
        likelyIntention: 'Noticing a digital message on a monitor or phone.',
        rootCause: 'Conceptualizing the display as an interior container rather than an illuminated 2D surface.',
        naturalCorrection: 'I saw the notification on the screen.',
        nativeCadence: 'Use ON for screens, pages, websites, and displays.',
      },
      {
        learnerError: 'I am waiting in the bus stand.',
        likelyIntention: 'Waiting for public transport.',
        rootCause: 'Translating "bus stand mein khada hoon". A bus stop has no enclosing walls; it is an open geographic point (AT).',
        naturalCorrection: 'I am waiting at the bus stop.',
        nativeCadence: 'Use AT for open geographic transit stops.',
      },
    ],
    nativeIntuition:
      'Native speakers feel the geometry under their feet and around their bodies. If there is a roof over their head and walls around them, their mouth produces IN. If their hand touches a flat plane, they say ON. If they are identifying a point on a Google map, they say AT.',
    patternRecognitionExercises: [
      {
        id: 'inonat-q1',
        prompt: 'Choose the correct preposition: "Our engineering headquarters are located ___ 500 Oracle Parkway ___ Redwood City."',
        options: ['on, at', 'at, in', 'in, on', 'at, on'],
        correctIndex: 1,
        explanation:
          'Use AT for a specific numbered street address ("at 500 Oracle Parkway") and IN for a bounded city/municipality ("in Redwood City").',
      },
      {
        id: 'inonat-q2',
        prompt: 'Which sentence correctly locates an item displayed digitally?',
        options: [
          'The pricing matrix is published in the website.',
          'The pricing matrix is published at the website.',
          'The pricing matrix is published on the website.',
          'The pricing matrix is published inside the website.',
        ],
        correctIndex: 2,
        explanation:
          'Digital surfaces, pages, feeds, and platforms take the 2D surface preposition ON ("on the website", "on the page", "on Reddit").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are giving directions to a vendor visiting your office building for the first time.',
        targetPattern: 'AT [Address] + ON [Floor] + IN [Conference Room]',
        hint: 'Scale through the dimensions: Point ──► Surface ──► Enclosure.',
        sampleAnswer: 'We are located at 200 Mission Street, on the 14th floor, in Conference Room Alpha.',
      },
      {
        scenario: 'A colleague asks where you left the printed architecture diagram.',
        targetPattern: 'ON [Surface] vs. IN [Container]',
        hint: 'Use "I left it on your desk..." or "in the folder..."',
        sampleAnswer: 'I placed the printed architecture diagram on your desk, right next to your keyboard.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD RAPIDLY 3 TIMES: "I am at 100 Main Street, on the fifth floor, in the main boardroom."',
      timedChallenge:
        'Speak for 45 seconds describing your exact physical location right now, transitioning smoothly from your room (IN), to your desk (AT), to your laptop screen (ON).',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey David, I am at the building lobby right now. Should I head up to the fifth floor or meet you in the cafeteria?"',
    },
    recallTest: [
      {
        question: 'What is the spatial dimensional rule for AT, ON, and IN?',
        hiddenAnswer:
          'AT = 0-Dimensional pinpoint coordinate (address/station). ON = 2-Dimensional surface (street/table/screen). IN = 3-Dimensional enclosure (room/city/container).',
      },
      {
        question: 'Why do we say "on the street" but "at 120 Main Street"?',
        hiddenAnswer:
          'A street without a number is a 1D/2D line or surface (ON). Adding a building number shrinks the location down to an exact 0D point coordinate on a map (AT).',
      },
    ],
    revisionConnection:
      'Having mastered spatial dimensions, Chapter 33 projects this exact same pyramid onto time: from 0D instants to expansive temporal eras.',
    masteryChallenge:
      'Notice every time you state an address or location today. Ensure you use AT for specific numbers, ON for streets and screens, and IN for cities and rooms.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 33: IN, ON, AT IN TIME HORIZONS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-33',
    partNumber: 3,
    partTitle: 'The Preposition & Spatial Engine',
    chapterNumber: 33,
    title: 'IN, ON, AT in Time Horizons (Precise Instant, Calendar Day, Bounded Period)',
    subtitle: 'Projecting Spatial Geometry onto the Temporal Timeline',
    level: 'Tier 2',
    readingTimeMinutes: 15,
    dna: {
      coreConcept: 'The Temporal Pyramid: AT (Clock Instant) ──► ON (24-Hour Day) ──► IN (Enclosed Horizon)',
      mentalModel:
        'English treats time as a direct physical copy of space. The dimensional pyramid translates identically: 1) AT = 0D point in time (an exact tick of the clock: at 3:00 PM, at noon, at midnight), 2) ON = 2D calendar slab (a 24-hour day or date: on Monday, on July 4th, on my birthday), 3) IN = 3D temporal container enclosing multiple days (in June, in 2026, in the morning, in two weeks).',
      whyEnglishUsesIt:
        'English speakers experience time as a physical landscape. Without this clear hierarchy, meeting times and deadlines become ambiguous and chaotic.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a mechanical grandfather clock ticking: the second hand strikes 12 with a sharp click (AT). Now flip a paper calendar page showing a single 24-hour square marked Monday (ON). Finally, zoom out to a thick bound quarterly planner book containing months, seasons, and years (IN).',
      schematic: `
   ▲  [ IN: TIME ENCLOSURES ]   Months, Years, Centuries, Long Seasons, Future Spans
  ╱ ╲   "in September", "in 2026", "in the summer", "in the morning", "in 10 minutes"
 ╱───╲
╱  ON ╲ [ ON: 24-HOUR DAYS ]    Days of the week, calendar dates, specific single days
───────   "on Monday", "on October 15th", "on New Year’s Day", "on my birthday"
  │●│   [ AT: CLOCK PINPOINTS ] Exact clock times, precise moments, night/weekend
   ▼      "at 4:30 PM", "at noon", "at midnight", "at the moment", "at sunrise"
`,
    },
    pattern: {
      formula: 'AT [Clock Time / Point] | ON [Day / Date / Day + Part of Day] | IN [Part of Day / Month / Year / Future Duration]',
      breakdown: [
        { element: 'AT + Instant', meaning: 'Clock points ("at 9:00 AM", "at noon", "at 5 o’clock"). Note British English exception: "at the weekend".' },
        { element: 'ON + 24-Hour Day', meaning: 'Specific named day ("on Friday"), date ("on May 12th"), or qualified day ("on Friday morning").' },
        { element: 'IN + Enclosed Horizon', meaning: 'Parts of day ("in the afternoon"), months ("in August"), years ("in 2028"), or future span ("in 15 minutes").' },
      ],
      notes: 'Notice the future countdown rule: "in 10 minutes" = when 10 minutes have elapsed.',
    },
    basicExamples: [
      { text: 'The stand-up begins at 9:30 AM.', context: 'Exact clock instant coordinate.', audioText: 'The stand-up begins at 9:30 AM' },
      { text: 'We deploy on Tuesday.', context: 'Specific 24-hour calendar day.', audioText: 'We deploy on Tuesday' },
      { text: 'The company was founded in 2018.', context: 'Enclosed annual time container.', audioText: 'The company was founded in 2018' },
      { text: 'I will finish this in two hours.', context: 'Future temporal duration container.', audioText: 'I will finish this in two hours' },
      { text: 'Let’s meet on Friday afternoon.', context: 'Qualified 24-hour day slice.', audioText: 'Let’s meet on Friday afternoon' },
      { text: 'The stars come out at night.', context: 'Collocation instant/phase marker.', audioText: 'The stars come out at night' },
      { text: 'We review financials in Q4.', context: 'Multi-month quarterly container.', audioText: 'We review financials in Q4' },
      { text: 'She called at midnight.', context: 'Exact clock coordinate.', audioText: 'She called at midnight' },
      { text: 'The contract expires on December 31st.', context: 'Exact calendar date.', audioText: 'The contract expires on December 31st' },
      { text: 'He woke up early in the morning.', context: 'Enclosed daily phase.', audioText: 'He woke up early in the morning' },
    ],
    realLifeExamples: [
      {
        text: 'My flight departs at 6:45 AM on Sunday morning, so I need to wake up at dawn.',
        situation: 'Sharing travel itinerary with family.',
        context: 'Seamless progression from clock point (AT) to day (ON) to astronomical instant (AT).',
      },
      {
        text: 'We always go hiking in the autumn when the leaves change color.',
        situation: 'Discussing seasonal outdoor hobbies.',
        context: 'Enclosed multi-month season container (IN).',
      },
      {
        text: 'Are you free for dinner at 8 on Friday?',
        situation: 'Making weekend dinner plans with a friend.',
        context: 'Colloquial pairing of clock time (at 8) and day (on Friday).',
      },
    ],
    professionalExamples: [
      {
        text: 'The quarterly roadmap review is scheduled for Monday at 10:00 AM Eastern Time.',
        context: 'Executive calendar invite and agenda.',
        tone: 'Crisp, punctual, professional',
      },
      {
        text: 'We plan to sunset the legacy v1 REST API in the second quarter of next year.',
        context: 'Product lifecycle documentation.',
        tone: 'Strategic, clear',
      },
      {
        text: 'Our on-call rotation hands off every Wednesday at noon.',
        context: 'DevOps on-call procedures.',
        tone: 'Standardized operational cadence',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The cron job triggers at 02:00 UTC every morning to compress database logs.',
        devContext: 'Scheduled background jobs and batch processing.',
        analogy: 'Exact timestamp execution coordinate (AT).',
      },
      {
        text: 'All feature flags will be toggled on Wednesday during our maintenance window.',
        devContext: 'Release engineering calendar.',
        analogy: 'Allocating deployment execution to a 24-hour day (ON).',
      },
      {
        text: 'The batch migration script is designed to finish in under twenty minutes.',
        devContext: 'Performance benchmark criteria.',
        analogy: '`executionTime < 20 * 60 * 1000` — Enclosed duration window (IN).',
      },
    ],
    contrast: {
      conceptA: 'IN the morning (General Enclosed Period)',
      conceptB: 'ON Monday morning (Specific 24-Hour Day Anchor)',
      differences: [
        { aspect: 'Rule', optionA: 'Parts of the day take IN ("in the morning", "in the evening").', optionB: 'As soon as a specific DAY is attached, ON overrides everything ("on Tuesday morning").' },
        { aspect: 'Night Special Case', optionA: '"At night" = General phase of darkness / sleep.', optionB: '"In the night" = Inside a specific night’s darkness (literary/dramatic).' },
        { aspect: 'Future Duration', optionA: '"In two weeks" = Two weeks from today.', optionB: '"For two weeks" = Lasting a continuous duration of two weeks.' },
        { aspect: 'Weekend', optionA: 'American English: "on the weekend".', optionB: 'British English: "at the weekend". Both valid.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'The meeting is in Monday.',
        likelyIntention: 'Stating the day of a scheduled meeting.',
        rootCause: 'Translating Hindi "Somwar ko hai" using IN. Days of the week require the flat calendar slab ON.',
        naturalCorrection: 'The meeting is on Monday.',
        nativeCadence: 'Always use ON for named days.',
      },
      {
        learnerError: 'I will finish this work after two days.',
        likelyIntention: 'Saying the work will be completed two days from now.',
        rootCause:
          'Translating Hindi "do din baad". In English, "after two days" means you wait two days and ONLY THEN start. To say you will deliver it in two days, use IN.',
        naturalCorrection: 'I will finish this in two days.',
        nativeCadence: 'Use IN for future delivery deadlines.',
      },
      {
        learnerError: 'We met in 10:30.',
        likelyIntention: 'Stating the exact meeting time.',
        rootCause: 'Using IN for clock points. Clock times are 0D points (AT).',
        naturalCorrection: 'We met at 10:30.',
        nativeCadence: 'Always use AT for clock times.',
      },
    ],
    nativeIntuition:
      'A native speaker feels the precision scale in their bones. A clock tick is razor-sharp (AT). A calendar square is a flat surface you step onto (ON). A month or year is a deep container you reside within (IN).',
    patternRecognitionExercises: [
      {
        id: 'time-q1',
        prompt: 'Select the correct sequence of prepositions: "The migration begins ___ midnight ___ Friday ___ November."',
        options: ['on, at, in', 'at, on, in', 'in, on, at', 'at, in, on'],
        correctIndex: 1,
        explanation:
          'Midnight is a clock point (AT), Friday is a 24-hour day (ON), and November is an enclosed month container (IN).',
      },
      {
        id: 'time-q2',
        prompt: 'How do you tell your engineering team that a hotfix will be completed 30 minutes from now?',
        options: [
          'The hotfix will be ready after 30 minutes.',
          'The hotfix will be ready in 30 minutes.',
          'The hotfix will be ready by after 30 minutes.',
          'The hotfix will be ready on 30 minutes.',
        ],
        correctIndex: 1,
        explanation:
          '"In 30 minutes" correctly uses IN to specify a future completion window. "After 30 minutes" sounds like you won\'t begin until 30 minutes pass.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are scheduling a sprint retrospective with team members across different time zones.',
        targetPattern: 'ON [Day] AT [Clock Time]',
        hint: 'Combine the day slab with the clock pinpoint.',
        sampleAnswer: 'Let’s sync for our sprint retrospective on Thursday at 2:00 PM Pacific Time.',
      },
      {
        scenario: 'A project manager asks when the user authentication refactor will be ready for QA.',
        targetPattern: 'IN [Duration] / BY [Day]',
        hint: 'State delivery duration using IN.',
        sampleAnswer: 'The refactored auth module will be ready for testing in three days.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD CLEARLY AND CRISPLY 3 TIMES: "The release is scheduled for Friday at 3:00 PM in the afternoon."',
      timedChallenge:
        'Speak for 45 seconds summarizing your weekly calendar, mentioning exact clock times (AT), days (ON), and long-term milestones (IN).',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey everyone, quick reminder: our production maintenance window kicks off on Saturday at 11:00 PM and will wrap up in four hours."',
    },
    recallTest: [
      {
        question: 'What is the critical semantic difference between "in two days" and "after two days"?',
        hiddenAnswer:
          '"In two days" means the action will complete within or at the end of a two-day window from now. "After two days" means a waiting period of two days occurs before the action even commences.',
      },
      {
        question: 'Why do we say "in the morning" but "on Monday morning"?',
        hiddenAnswer:
          'Because the specific named day ("Monday") takes hierarchical precedence over the general part of the day ("morning"), shifting the preposition from IN to ON.',
      },
    ],
    revisionConnection:
      'From static time points, Chapter 34 moves to dynamic temporal boundaries: BY versus UNTIL, the ultimate deadline battle.',
    masteryChallenge:
      'Whenever you give an estimate today, use "in [X] minutes" or "in [X] days". Eradicate "after two days" when referring to future delivery.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 34: BY VS. UNTIL
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-34',
    partNumber: 3,
    partTitle: 'The Preposition & Spatial Engine',
    chapterNumber: 34,
    title: 'BY vs. UNTIL (The Absolute Deadline vs. Ongoing State Duration)',
    subtitle: 'Point-in-Time Deadlines vs. Continuous Ongoing Action Limits',
    level: 'Tier 2',
    readingTimeMinutes: 15,
    dna: {
      coreConcept: 'BY = The Final Deadline Pin (●) vs. UNTIL = The Continuous Timeline Ribbon (════►|)',
      mentalModel:
        'BY marks a hard deadline: the action happens once, at any time before or at that exact moment (Submit by 5 PM = submit at 2 PM, 3 PM, or 4:59 PM). UNTIL marks a continuous, uninterrupted state that persists all the way up to the boundary and stops there (Wait until 5 PM = do not stop waiting until 5:00 arrives).',
      whyEnglishUsesIt:
        'Confusing BY and UNTIL causes immense workplace havoc. If you say "I will work by 5 PM", it means you won’t even start working until 5 PM arrives; if you say "I will finish this until 5 PM", it sounds like you are repeatedly finishing something over and over.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a brick wall with a clock on it reading 5:00 PM. An arrow flies through the air and strikes the wall before 5:00 PM (BY). Now picture a water hose continuously spraying water against the wall without stopping from 1:00 PM all the way until 5:00 PM, at which exact instant the valve shuts off (UNTIL).',
      schematic: `
   [ BY: DEADLINE PIN ]               [ UNTIL: CONTINUOUS RIBBON ]
   Action occurs ONCE before cutoff   State continues WITHOUT INTERRUPTION until boundary
   ─────●─────────────────|           ═══════════════════════════════════════════════════|
     (Action)          (5 PM cutoff)  (Continuous Action: "wait", "work", "stay")       (5 PM)
   "Submit the PR BY 5 PM"            "Stay in the meeting UNTIL 5 PM"
`,
    },
    pattern: {
      formula: 'Single-Event Verb (finish / submit / deploy / send) + BY [Time] | Continuous State Verb (wait / stay / remain / work) + UNTIL [Time]',
      breakdown: [
        { element: 'BY + Cutoff Time', meaning: 'The action must be completed before or at the latest by this boundary ("by tomorrow", "by Friday").' },
        { element: 'UNTIL + Limit', meaning: 'The continuous activity endures up to this temporal threshold and terminates ("until tomorrow", "until midnight").' },
        { element: 'NOT... UNTIL', meaning: 'The action will NOT happen until a certain condition or time is met ("We cannot deploy until tests pass").' },
      ],
      notes: 'Test: Ask yourself "Does this happen once, or does it happen continuously?" If once = BY; if continuous = UNTIL.',
    },
    basicExamples: [
      { text: 'Submit your PR by 4 PM.', context: 'Single-event deadline cutoff.', audioText: 'Submit your PR by 4 PM' },
      { text: 'I will be in meetings until 4 PM.', context: 'Continuous duration spanning the afternoon.', audioText: 'I will be in meetings until 4 PM' },
      { text: 'Can we wrap this up by Friday?', context: 'Target milestone completion date.', audioText: 'Can we wrap this up by Friday' },
      { text: 'Please wait here until I return.', context: 'Continuous physical waiting.', audioText: 'Please wait here until I return' },
      { text: 'The offer is valid until midnight.', context: 'Continuous ongoing validity status.', audioText: 'The offer is valid until midnight' },
      { text: 'You must pay the invoice by the 1st of the month.', context: 'Single payment transfer deadline.', audioText: 'You must pay the invoice by the first of the month' },
      { text: 'We didn’t launch until Q3.', context: 'Action delayed until milestone.', audioText: 'We didn’t launch until Q3' },
      { text: 'The cache remains valid until invalidated.', context: 'Continuous state validity.', audioText: 'The cache remains valid until invalidated' },
      { text: 'I need your response by end of day.', context: 'Professional reply cutoff.', audioText: 'I need your response by end of day' },
      { text: 'He worked at Google until 2024.', context: 'Continuous ongoing employment period.', audioText: 'He worked at Google until 2024' },
    ],
    realLifeExamples: [
      {
        text: 'You need to check out of the hotel by 11 AM, but you can leave your luggage at reception until your evening flight.',
        situation: 'Navigating hotel travel logistics.',
        context: 'Contrasting single checkout action (BY) with continuous luggage holding (UNTIL).',
      },
      {
        text: 'Don’t open the oven door until the timer rings.',
        situation: 'Baking at home.',
        context: 'Negative constraint holding continuously.',
      },
      {
        text: 'I should be finished with my chores by noon.',
        situation: 'Weekend morning planning.',
        context: 'Estimated completion cutoff.',
      },
    ],
    professionalExamples: [
      {
        text: 'All sprint deliverables must be merged into the staging branch by Thursday at 5:00 PM.',
        context: 'Engineering release management deadline.',
        tone: 'Assertive, clear, disciplined',
      },
      {
        text: 'I will be heads-down debugging this memory leak until the team sync at 3 PM.',
        context: 'Communicating deep focus blocks on Slack.',
        tone: 'Transparent, focused',
      },
      {
        text: 'We cannot sign off on the contract until our legal team reviews the data residency clause.',
        context: 'Enterprise vendor negotiation.',
        tone: 'Diplomatic, legally compliant',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The database lock is held until the transaction commits or rolls back.',
        devContext: 'ACID transaction management.',
        analogy: '`while(transaction.isActive) { holdLock(); }` — Continuous state hold (UNTIL).',
      },
      {
        text: 'All upstream services must migrate to TLS 1.3 by the end of Q2.',
        devContext: 'Security compliance mandate.',
        analogy: 'Single milestone migration cutoff boundary (BY).',
      },
      {
        text: 'The retry loop attempts connection until maxRetries is reached.',
        devContext: 'Resilience and network retry policies.',
        analogy: '`do { connect(); } while (!connected && retries < max);` — Continuous iterative loop (UNTIL).',
      },
    ],
    contrast: {
      conceptA: 'BY (Single Instant Cutoff)',
      conceptB: 'UNTIL (Continuous State Duration)',
      differences: [
        { aspect: 'Verb Type', optionA: 'Punctual / Single Action: finish, send, submit, arrive, leave.', optionB: 'Continuous / Durative State: wait, work, sleep, stay, remain.' },
        { aspect: '5 PM Example', optionA: '"I will finish by 5 PM" (Done at 4:30, or at 4:55, or 5:00).', optionB: '"I will work until 5 PM" (Working non-stop every second until 5:00).' },
        { aspect: 'Common Glitch', optionA: '❌ "I will finish until 5 PM" (Ungrammatical nonsense).', optionB: '❌ "I will stay by 5 PM" (Ungrammatical nonsense).' },
        { aspect: 'Mental Image', optionA: 'A buzzer sounding at the finish line.', optionB: 'A continuous flowing river reaching a dam.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I will complete the assignment until tomorrow.',
        likelyIntention: 'Saying you will finish the work before tomorrow.',
        rootCause:
          'Translating Hindi "kal tak" literally as "until tomorrow". "Complete" is a single punctual action, not a continuous activity.',
        naturalCorrection: 'I will complete the assignment by tomorrow.',
        nativeCadence: 'Pair "complete / finish" with BY, never UNTIL.',
      },
      {
        learnerError: 'The library is open by 8 PM.',
        likelyIntention: 'Stating the operating hours of the library.',
        rootCause: 'Using BY for a continuous operational status.',
        naturalCorrection: 'The library is open until 8 PM.',
        nativeCadence: 'Use UNTIL for ongoing operating hours.',
      },
      {
        learnerError: 'Until when you will be in the call?',
        likelyIntention: 'Asking how long someone will remain in a meeting.',
        rootCause: 'Literal Hindi syntax "Kab tak call mein rahoge?".',
        naturalCorrection: 'How long will you be on the call? / Until what time will you be on the call?',
        nativeCadence: 'Use "How long will you be...?" for duration.',
      },
    ],
    nativeIntuition:
      'Native speakers test the verb type unconsciously. If the verb describes a state you can maintain while sitting motionless (sleeping, waiting, staying), their brain picks UNTIL. If the verb describes a single trigger pull (finishing, submitting, releasing), their brain fires BY.',
    patternRecognitionExercises: [
      {
        id: 'byuntil-q1',
        prompt: 'Choose the correct preposition: "We must submit the compliance audit report ___ Friday afternoon."',
        options: ['until', 'by', 'up to', 'since'],
        correctIndex: 1,
        explanation:
          '"Submit" is a punctual single-event verb. You do not continuously submit for days; you submit once before a cutoff deadline (BY).',
      },
      {
        id: 'byuntil-q2',
        prompt: 'Which sentence correctly describes staying on an incident call?',
        options: [
          'I will remain on the bridge by the issue is resolved.',
          'I will remain on the bridge until the issue is resolved.',
          'I will finish the bridge until the issue is resolved.',
          'I will remain on the bridge since the issue is resolved.',
        ],
        correctIndex: 1,
        explanation:
          '"Remain" is a continuous state verb. The engineer continuously stays on the bridge up to the point of resolution (UNTIL).',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You need to assure your project lead that you will push your bug fixes before the end of the business day.',
        targetPattern: 'Push / Deliver [Feature] BY [End of Day]',
        hint: 'Use the single-event verb "push" with BY.',
        sampleAnswer: 'I will have all bug fixes pushed and verified in staging by 5:00 PM today.',
      },
      {
        scenario: 'You are letting your pair-programming partner know you can collaborate with them continuously for the next two hours.',
        targetPattern: 'Free / Available UNTIL [Time]',
        hint: 'Use the continuous state "available" with UNTIL.',
        sampleAnswer: 'I am completely free to pair program with you until 3:30 PM, when my sprint planning starts.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD EMPHATICALLY 3 TIMES: "I will work on this until five, and have it deployed by six."',
      timedChallenge:
        'Speak for 45 seconds laying out your afternoon schedule, strictly contrasting activities you will do UNTIL a certain time with tasks you will finish BY a deadline.',
      durationSeconds: 45,
      roleplayPrompt:
        '"I am booked in design reviews until 3:00 PM, but I will review and merge your pull request by 4:30 PM."',
    },
    recallTest: [
      {
        question: 'What is the simple verb test to decide between BY and UNTIL?',
        hiddenAnswer:
          'Ask: "Can I do this continuously without stopping?" If YES (wait, work, stay, hold) = UNTIL. If NO (finish, submit, arrive, buy) = BY.',
      },
      {
        question: 'Why is "I will finish this task until Monday" ungrammatical?',
        hiddenAnswer:
          'Because "finish" is a punctual single event that takes a fraction of a second to complete. It cannot be performed continuously over the weekend; it requires a deadline boundary (BY Monday).',
      },
    ],
    revisionConnection:
      'With temporal boundaries mastered, Chapter 35 untangles OF versus FROM: inherent composition versus physical departure.',
    masteryChallenge:
      'Audit your work commitments today. Ensure you say "I will finish this by [time]" and never say "I will finish this until [time]".',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 35: OF VS. FROM
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-35',
    partNumber: 3,
    partTitle: 'The Preposition & Spatial Engine',
    chapterNumber: 35,
    title: 'OF vs. FROM (Inherent Composition vs. Point of Departure)',
    subtitle: 'Intrinsic Substance, Identity, and Origin Trajectories',
    level: 'Tier 2',
    readingTimeMinutes: 14,
    dna: {
      coreConcept: 'OF = Inherent Belonging & Material Identity (∈) vs. FROM = Physical/Temporal Departure Point (●──►)',
      mentalModel:
        'OF indicates what something is composed of, belongs to, or is inherently connected with (A page OF a book, a member OF the team, made OF wood). FROM indicates the starting coordinate of motion, separation, or origin (Traveled FROM London, downloaded FROM the server, made FROM grapes).',
      whyEnglishUsesIt:
        'Both words are often translated by the same marker in Indian languages ("se" or "ka/ki"). Without distinguishing inherent identity (OF) from departure trajectory (FROM), sentences sound unidiomatic and confusing.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a wooden dining table: the wood is physically present right in front of you; the table is composed OF wood. Now picture a bottle of wine: grapes were crushed, fermented, and chemically transformed; the wine was made FROM grapes. Or watch an airplane taking off from a runway: the runway is the launch point (FROM).',
      schematic: `
   [ OF: INTRINSIC BELONGING / IDENTITY ]       [ FROM: DEPARTURE / ORIGIN POINT ]
   Component inside the larger whole            Entity moving AWAY from origin coordinate
         ┌─────────────────────────┐            Launch Point ● ════════════════► Destination
         │   [ Sub-element: OF ]   │            "Downloaded FROM the server"
         │   "member OF the team"  │            "Traveled FROM Bangalore"
         │   "part OF the system"  │            "Originates FROM an API error"
         └─────────────────────────┘
`,
    },
    pattern: {
      formula: 'Entity + OF + Whole/Substance | Entity + Motion/Origin Verb + FROM + Source',
      breakdown: [
        { element: 'OF + Whole', meaning: 'Inherent relationship, property, or constituent part ("the core of the issue", "a slice of cake").' },
        { element: 'MADE OF + Material', meaning: 'Physical material unchanged in fundamental nature ("a table made of solid oak").' },
        { element: 'FROM + Source', meaning: 'Point of origin, departure, separation, or derivation ("copied from the docs", "graduated from university").' },
        { element: 'MADE FROM + Raw Material', meaning: 'Substance chemically transformed or processed into a new state ("paper made from trees").' },
      ],
      notes: 'Remember: Made OF (material still visible); Made FROM (material transformed).',
    },
    basicExamples: [
      { text: 'He is a member of our core team.', context: 'Intrinsic membership in a collective.', audioText: 'He is a member of our core team' },
      { text: 'Download the repo from GitHub.', context: 'Digital point of departure.', audioText: 'Download the repo from GitHub' },
      { text: 'The table is made of glass and steel.', context: 'Visible physical constituent materials.', audioText: 'The table is made of glass and steel' },
      { text: 'Cheese is made from milk.', context: 'Transformed biological origin.', audioText: 'Cheese is made from milk' },
      { text: 'This is the root of the problem.', context: 'Inherent fundamental cause.', audioText: 'This is the root of the problem' },
      { text: 'She comes from New Delhi.', context: 'Geographic origin of ancestry/hometown.', audioText: 'She comes from New Delhi' },
      { text: 'I heard the news from Alex.', context: 'Source of information.', audioText: 'I heard the news from Alex' },
      { text: 'The end of the quarter is approaching.', context: 'Temporal partition of a whole.', audioText: 'The end of the quarter is approaching' },
      { text: 'The error stems from an unhandled null pointer.', context: 'Causal origin vector.', audioText: 'The error stems from an unhandled null pointer' },
      { text: 'Take a sip of water.', context: 'Partitive quantity of a whole.', audioText: 'Take a sip of water' },
    ],
    realLifeExamples: [
      {
        text: 'I received a postcard from an old college friend of mine.',
        situation: 'Opening the daily mail.',
        context: 'Origin sender (FROM) paired with relational belonging (OF mine).',
      },
      {
        text: 'This scarf is made of pure cashmere.',
        situation: 'Shopping for winter clothing.',
        context: 'Direct physical material identity (OF).',
      },
      {
        text: 'Where are you flying in from?',
        situation: 'Greeting a visiting guest at an airport.',
        context: 'Departure flight origin (FROM).',
      },
    ],
    professionalExamples: [
      {
        text: 'This service is an integral component of our enterprise authentication architecture.',
        context: 'Technical architecture specification.',
        tone: 'Architectural, formal, definitive',
      },
      {
        text: 'We pulled the transaction logs directly from our primary cloud storage bucket.',
        context: 'Data auditing and forensics review.',
        tone: 'Precise, factual',
      },
      {
        text: 'The success of this launch depends on the alignment of all cross-functional partners.',
        context: 'Executive kickoff speech.',
        tone: 'Inspirational, unifying',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Extract the user payload from the incoming JSON body.',
        devContext: 'Request controller parsing.',
        analogy: '`const { user } = req.body;` — Pulling a subset away from the source container (FROM).',
      },
      {
        text: 'The length of the array must not exceed the buffer capacity.',
        devContext: 'Memory safety and bounds checking.',
        analogy: '`array.length` — Inherent structural property of an object (OF).',
      },
      {
        text: 'This Docker image is built from the official Alpine Linux base.',
        devContext: 'Containerization and Dockerfile definition.',
        analogy: '`FROM alpine:3.19` — The upstream base origin (FROM).',
      },
    ],
    contrast: {
      conceptA: 'Made OF (Unchanged Structure)',
      conceptB: 'Made FROM (Transformed Substance)',
      differences: [
        { aspect: 'Material State', optionA: 'Material retains its original physical form. You can still see and touch it.', optionB: 'Material undergoes chemical or radical transformation into a new substance.' },
        { aspect: 'Chair Example', optionA: '"The chair is made OF wood." (It looks like wood, feels like wood).', optionB: '"Paper is made FROM wood." (Wood pulp was chemically altered into white sheets).' },
        { aspect: 'Origin vs. Part', optionA: '"A piece OF the pie" (Belongs to the pie).', optionB: '"Take a slice FROM the fridge" (Fridge was the physical departure location).' },
        { aspect: 'Software Analogy', optionA: '`user.name` (Attribute of user).', optionB: '`import { name } from "./user"` (Imported from source file).' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'I bought this laptop from Amazon of 50,000 rupees.',
        likelyIntention: 'Saying how much the laptop cost.',
        rootCause: 'Translating Hindi "pachas hazaar ka" using OF. Price and cost require FOR.',
        naturalCorrection: 'I bought this laptop from Amazon for 50,000 rupees.',
        nativeCadence: 'Exchange value takes FOR, never OF.',
      },
      {
        learnerError: 'He is suffering with fever.',
        likelyIntention: 'Saying someone is sick with fever.',
        rootCause: 'Translating "bukhar se peedith hai". In English, the medical verb "suffer" always takes FROM.',
        naturalCorrection: 'He is suffering from a fever.',
        nativeCadence: 'Always pair "suffer" with FROM.',
      },
      {
        learnerError: 'The team is consist of five engineers.',
        likelyIntention: 'Describing team composition.',
        rootCause: 'Confusing passive voice with active intransitive "consist of".',
        naturalCorrection: 'The team consists of five engineers. / The team is composed of five engineers.',
        nativeCadence: 'Use "consists of" without the auxiliary verb.',
      },
    ],
    nativeIntuition:
      'Native speakers feel OF as an internal organ inside a body—an intrinsic, inseparable attribute. They feel FROM as an arrow launched from a bow—an origin trajectory flying away from its source.',
    patternRecognitionExercises: [
      {
        id: 'offrom-q1',
        prompt: 'Choose the correct preposition: "The plastic chassis is made ___ recycled polycarbonate."',
        options: ['from', 'of', 'by', 'off'],
        correctIndex: 1,
        explanation:
          'Because the physical polycarbonate plastic remains polycarbonate in the chassis, use "made OF". If it had been chemically transformed into oil or gas, you would use "made FROM".',
      },
      {
        id: 'offrom-q2',
        prompt: 'Which sentence correctly describes pulling data out of a cache?',
        options: [
          'We retrieved the session token of Redis.',
          'We retrieved the session token from Redis.',
          'We retrieved the session token by Redis.',
          'We retrieved the session token out Redis.',
        ],
        correctIndex: 1,
        explanation:
          'Redis is the source and point of departure for the retrieved token, which requires FROM.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are explaining that your microservice architecture was designed with inputs from customer feedback.',
        targetPattern: 'Designed / Built with inputs FROM [Source]',
        hint: 'Use FROM to denote the origin of feedback.',
        sampleAnswer: 'This redesigned user dashboard was built directly from feedback gathered from over 200 enterprise customers.',
      },
      {
        scenario: 'You are introducing the members of your software development squad.',
        targetPattern: 'Consists OF / Composed OF',
        hint: 'Use "Our squad consists of..."',
        sampleAnswer: 'Our mobile squad consists of four frontend engineers, two backend developers, and one product designer.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS LOUDLY AND CLEARLY 3 TIMES: "The core of our platform is built from scratch and powered by inputs from our users."',
      timedChallenge:
        'Speak for 45 seconds describing what your current software project is composed OF, and where your team pulls data and requirements FROM.',
      durationSeconds: 45,
      roleplayPrompt:
        '"Our squad consists of six engineers, and we pull our roadmap directly from weekly enterprise client feedback."',
    },
    recallTest: [
      {
        question: 'When do you say "made OF" versus "made FROM"?',
        hiddenAnswer:
          'Use "made OF" when the basic material retains its visible physical identity (table of wood). Use "made FROM" when the material is chemically transformed or unrecognizable in the final product (paper from wood).',
      },
      {
        question: 'What preposition must always follow the verb "suffer" when describing illness?',
        hiddenAnswer:
          'FROM. Example: "She is suffering from a migraine" (NEVER "suffering with a migraine").',
      },
    ],
    revisionConnection:
      'With origin and composition distinguished, Chapter 36 moves to execution: WITH versus BY (the instrument in your hand vs. the agent/mechanism).',
    masteryChallenge:
      'Audit your speech today for "consists of" and "suffering from". Eliminate any instances of "suffering with".',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 36: WITH VS. BY
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-36',
    partNumber: 3,
    partTitle: 'The Preposition & Spatial Engine',
    chapterNumber: 36,
    title: 'WITH vs. BY (The Instrument in Hand vs. The Agent / Mechanism)',
    subtitle: 'Physical Tools, Autonomous Agents, and Methods of Execution',
    level: 'Tier 2',
    readingTimeMinutes: 15,
    dna: {
      coreConcept: 'WITH = The Physical Instrument Held in Hand (🔧) vs. BY = The Autonomous Agent / Mechanism (⚙️)',
      mentalModel:
        'WITH is the tool, weapon, or instrument you physically grasp and wield with your hands (Cut WITH a knife, write WITH a pen, debug WITH a profiler). BY is the autonomous causal agent who executes the action (Written BY Shakespeare, fixed BY the engineer) or the abstract mechanism/method (Sent BY email, sorted BY date, powered BY AI).',
      whyEnglishUsesIt:
        'In Hindi, both concepts use the instrumental postposition "se" (Chaku se kaata = cut with knife; Ram se karwaya = done by Ram). In English, failing to distinguish the held tool (WITH) from the causal agent (BY) creates bizarre mental pictures.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a master carpenter at a workbench. In his right hand, he holds a gleaming metal chisel: he carves the wood WITH the chisel. Standing next to him is an apprentice watching. The wooden table was carved BY the master carpenter. One is the held tool (WITH); the other is the human agent (BY).',
      schematic: `
   [ WITH: THE HELD INSTRUMENT ]                [ BY: THE AGENT / MECHANISM ]
   Human Hand ──► [ Tool in Hand ] ──► Target   Causal Actor / Pipeline Engine ──► Outcome
   "Cut the bread WITH a knife"                 "The bread was sliced BY the baker"
   "Write the note WITH a pencil"               "The book was authored BY George Orwell"
   "Killed WITH a weapon"                       "Killed BY an assassin"
`,
    },
    pattern: {
      formula: 'Action + WITH [Physical Tool / Instrument] | Action + BY [Agent / Autonomous Actor / Method (-ing)]',
      breakdown: [
        { element: 'WITH + Tool', meaning: 'The concrete physical or digital instrument wielded by an operator ("inspect with a microscope").' },
        { element: 'BY + Agent', meaning: 'The living entity or autonomous system performing the verb in passive voice ("reviewed by Sarah").' },
        { element: 'BY + Method / Vehicle', meaning: 'The mode of transit or operational technique ("travel by air", "learn by doing", "sort by price").' },
        { element: 'WITH + Attribute', meaning: 'Accompaniment or possessing a feature ("a laptop with 32GB RAM").' },
      ],
      notes: 'Notice: "He was killed BY a falling tree" (agent) vs. "He was killed WITH a blunt weapon" (instrument).',
    },
    basicExamples: [
      { text: 'I cut the rope with a pair of scissors.', context: 'Physical handheld instrument.', audioText: 'I cut the rope with a pair of scissors' },
      { text: 'The pull request was reviewed by our staff engineer.', context: 'Autonomous human agent in passive voice.', audioText: 'The pull request was reviewed by our staff engineer' },
      { text: 'We solved the issue by restarting the worker node.', context: 'Operational method/mechanism via gerund.', audioText: 'We solved the issue by restarting the worker node' },
      { text: 'Sign the document with a blue pen.', context: 'Physical writing instrument.', audioText: 'Sign the document with a blue pen' },
      { text: 'I will send the contract by email.', context: 'Transmission channel/method.', audioText: 'I will send the contract by email' },
      { text: 'The report was generated by an automated script.', context: 'Autonomous software agent.', audioText: 'The report was generated by an automated script' },
      { text: 'He handled the client escalation with great composure.', context: 'Manner and emotional attribute.', audioText: 'He handled the client escalation with great composure' },
      { text: 'You can optimize the query by adding an index.', context: 'Actionable technique.', audioText: 'You can optimize the query by adding an index' },
      { text: 'I opened the package with a box cutter.', context: 'Handheld cutting tool.', audioText: 'I opened the package with a box cutter' },
      { text: 'The code is maintained by our open-source community.', context: 'Collective human maintainer agent.', audioText: 'The code is maintained by our open source community' },
    ],
    realLifeExamples: [
      {
        text: 'The chef filleted the salmon with a razor-sharp Japanese knife.',
        situation: 'Cooking dinner at a culinary event.',
        context: 'Instrument in hand (WITH).',
      },
      {
        text: 'This painting was restored by a world-renowned conservator using specialized brushes.',
        situation: 'Visiting an art gallery.',
        context: 'Agent who performed the restoration (BY) paired with instruments (WITH/USING).',
      },
      {
        text: 'I commute to downtown by train every morning.',
        situation: 'Discussing daily transportation options.',
        context: 'Mode of transit (BY).',
      },
    ],
    professionalExamples: [
      {
        text: 'The security vulnerability was patched by our infrastructure team within two hours of disclosure.',
        context: 'Corporate security incident disclosure.',
        tone: 'Accountable, swift, authoritative',
      },
      {
        text: 'We can mitigate the cold-start latency by pre-warming our serverless lambda containers.',
        context: 'Cloud architecture design proposal.',
        tone: 'Technical, solution-driven',
      },
      {
        text: 'Please review this pull request with particular attention to edge-case exception handling.',
        context: 'Engineering code review request.',
        tone: 'Constructive, precise',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The payload is encrypted with an AES-256-GCM symmetric key.',
        devContext: 'Cryptographic data security.',
        analogy: '`encrypt(payload, key)` — The cryptographic key is the instrument used to encrypt (WITH).',
      },
      {
        text: 'Inbound requests are load-balanced by NGINX across four replica pods.',
        devContext: 'Infrastructure traffic routing.',
        analogy: 'NGINX is the autonomous software agent performing the balancing (BY).',
      },
      {
        text: 'You can inspect runtime memory heap allocations with Chrome DevTools.',
        devContext: 'Frontend performance profiling.',
        analogy: 'The developer wields the profiling tool directly in their hands (WITH).',
      },
    ],
    contrast: {
      conceptA: 'WITH (The Wielded Instrument 🔧)',
      conceptB: 'BY (The Agent or Method ⚙️)',
      differences: [
        { aspect: 'Role', optionA: 'Passive tool held or utilized by an operator.', optionB: 'The living actor, autonomous system, or abstract method.' },
        { aspect: 'Knife Example', optionA: '✅ "The apple was cut WITH a knife." (Knife is the inanimate blade).', optionB: '❌ "The apple was cut BY a knife." (Sounds like the knife grew legs and sliced on its own).' },
        { aspect: 'Developer Example', optionA: '"The PR was merged BY David." (David is the person who clicked merge).', optionB: '"David merged the PR WITH a single click." (Click is the action instrument).' },
        { aspect: 'Transit Rule', optionA: '"Travel BY bus / BY train / BY car" (Method).', optionB: 'Notice: If an article is present: "IN a car" / "ON a bus".' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'He killed the snake by a stick.',
        likelyIntention: 'Saying someone used a stick to kill a snake.',
        rootCause:
          'Translating Hindi "dande se maara" using BY. The stick is an inanimate tool held in the hand; it requires WITH.',
        naturalCorrection: 'He killed the snake with a stick.',
        nativeCadence: 'Use WITH for handheld physical instruments.',
      },
      {
        learnerError: 'I came to office with bus.',
        likelyIntention: 'Explaining your commute.',
        rootCause: 'Translating "bus se aaya". Modes of transit without articles require BY.',
        naturalCorrection: 'I came to the office by bus. / ...on the bus.',
        nativeCadence: 'Use "by bus" or "on the bus", never "with bus".',
      },
      {
        learnerError: 'The application was built from my team.',
        likelyIntention: 'Saying your team built the application.',
        rootCause: 'Using FROM instead of the passive agent marker BY.',
        naturalCorrection: 'The application was built by my team.',
        nativeCadence: 'Passive voice agents take BY.',
      },
    ],
    nativeIntuition:
      'Native speakers feel physical contact. If an object is resting in someone’s fingers while they swing, poke, type, or cut, they feel WITH. If the entity is a living human being, an autonomous program, or a high-level procedure, they feel BY.',
    patternRecognitionExercises: [
      {
        id: 'withby-q1',
        prompt: 'Choose the correct preposition: "The document was signed ___ the CEO ___ a fountain pen."',
        options: ['with, by', 'by, with', 'by, by', 'with, with'],
        correctIndex: 1,
        explanation:
          'The CEO is the human causal agent (BY the CEO), and the fountain pen is the handheld instrument (WITH a fountain pen).',
      },
      {
        id: 'withby-q2',
        prompt: 'Which sentence correctly describes a performance optimization technique?',
        options: [
          'We reduced memory usage with optimizing database queries.',
          'We reduced memory usage by optimizing database queries.',
          'We reduced memory usage for optimizing database queries.',
          'We reduced memory usage of optimizing database queries.',
        ],
        correctIndex: 1,
        explanation:
          'When stating the method or mechanism by which an outcome is achieved using a gerund (-ing), English uses BY ("by optimizing", "by adding", "by refactoring").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are explaining how you diagnosed a difficult race condition in production.',
        targetPattern: 'Diagnosed [Bug] BY [Action (-ing)] WITH [Tool]',
        hint: 'Combine method (BY) with profiling tool (WITH).',
        sampleAnswer: 'We diagnosed the race condition by analyzing database deadlocks with our distributed tracing profiler.',
      },
      {
        scenario: 'A product manager asks who approved the emergency weekend patch.',
        targetPattern: 'Approved BY [Agent]',
        hint: 'Use the passive agent structure.',
        sampleAnswer: 'The emergency security patch was reviewed and approved by our VP of Engineering.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD CLEARLY 3 TIMES: "The system was designed by our architects, built by our team, and verified with automated tests."',
      timedChallenge:
        'Speak for 45 seconds describing an important technical achievement, clearly distinguishing what was done BY team members versus what tools were used WITH precision.',
      durationSeconds: 45,
      roleplayPrompt:
        '"We solved the database timeout issue by caching user sessions in Redis with an automated five-minute TTL."',
    },
    recallTest: [
      {
        question: 'Why is "The apple was cut by a knife" considered conceptually defective in native English?',
        hiddenAnswer:
          'Because BY indicates an autonomous agent capable of independent action. A knife cannot decide to cut an apple on its own; it is a passive instrument wielded by a human hand, requiring WITH.',
      },
      {
        question: 'What preposition introduces a method or technique followed by a gerund (-ing)?',
        hiddenAnswer:
          'BY. Example: "You can enhance security BY encrypting database columns" (NOT "with encrypting").',
      },
    ],
    revisionConnection:
      'From instruments and agents, Chapter 37 expands into dynamic volumetric motion: THROUGH, ACROSS, and ALONG.',
    masteryChallenge:
      'Catch yourself every time you describe an engineering technique today: ensure you say "by doing [X]" instead of "with doing [X]".',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 37: THROUGH, ACROSS, ALONG
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-37',
    partNumber: 3,
    partTitle: 'The Preposition & Spatial Engine',
    chapterNumber: 37,
    title: 'THROUGH, ACROSS, ALONG (Volumetric Navigation, Planar Crossing, and Parallel Vector)',
    subtitle: 'Navigating 3D Tunnels, 2D Planes, and 1D Linear Paths',
    level: 'Tier 2',
    readingTimeMinutes: 15,
    dna: {
      coreConcept: 'Spatial Navigation Vectors: THROUGH (3D Tunnel/Medium) ──► ACROSS (2D Plane/Surface) ──► ALONG (1D Parallel Line)',
      mentalModel:
        'These three prepositions navigate physical space across three dimensions: 1) THROUGH = Entering one side of a 3D volumetric space, tunnel, forest, obstacle, or medium and exiting out the other side; 2) ACROSS = Moving from one edge of a flat 2D surface, street, bridge, or boundary to the opposing edge; 3) ALONG = Moving parallel to a continuous 1D line, riverbank, corridor, or chronological path.',
      whyEnglishUsesIt:
        'English uses these physical navigation vectors for all abstract processes: working THROUGH an obstacle, communicating ACROSS departments, and progressing ALONG a career roadmap.',
    },
    mentalMovie: {
      sceneDescription:
        'Visualize driving a car: 1) You drive inside a dark mountain tunnel, surrounded on all sides by stone walls, and emerge into daylight on the other side (THROUGH). 2) You walk across a wide pedestrian street from the north sidewalk to the south sidewalk (ACROSS). 3) You take a scenic stroll on a paved walkway that follows the winding edge of a river (ALONG).',
      schematic: `
   [ THROUGH: 3D VOLUMETRIC TUNNEL ]    [ ACROSS: 2D PLANAR CROSSING ]    [ ALONG: 1D PARALLEL LINE ]
       ┌────────────────────────┐             Side A                        ═════════════════════════ Line
       │  ══════════════════►   │               │                                ──────────────────►
       │  (Surrounded on all 4) │               ▼ ──► ──► ──►                     (Parallel Motion)
       └────────────────────────┘             Side B                        ═════════════════════════ River
   "walk through the tunnel"            "walk across the street"          "walk along the beach"
   "work through the bug backlog"       "scale across all regions"        "progress along the roadmap"
`,
    },
    pattern: {
      formula: 'Motion Verb + THROUGH [3D Volume / Medium / Obstacle] | Motion Verb + ACROSS [2D Plane / Surface / Division] | Motion Verb + ALONG [1D Line / Boundary / Edge]',
      breakdown: [
        { element: 'THROUGH + 3D Space', meaning: 'In one side and out the other ("through the park", "through the pipeline", "through adversity").' },
        { element: 'ACROSS + Surface', meaning: 'From one side to the opposite side ("across the bridge", "across the ocean", "across the company").' },
        { element: 'ALONG + Line', meaning: 'Parallel to a continuous linear path ("along the highway", "along the corridor", "along the way").' },
      ],
      notes: 'Abstract mapping: THROUGH = struggle/processing; ACROSS = widespread coverage/distribution; ALONG = parallel alignment.',
    },
    basicExamples: [
      { text: 'We drove through a long mountain tunnel.', context: '3D physical volumetric enclosure.', audioText: 'We drove through a long mountain tunnel' },
      { text: 'She walked across the busy street.', context: '2D flat planar crossing from side to side.', audioText: 'She walked across the busy street' },
      { text: 'We strolled along the riverbank at sunset.', context: '1D parallel linear movement.', audioText: 'We strolled along the riverbank at sunset' },
      { text: 'The request flows through our middleware pipeline.', context: 'Software architectural pipeline flow.', audioText: 'The request flows through our middleware pipeline' },
      { text: 'This feature will be rolled out across all global regions.', context: 'Widespread planar distribution.', audioText: 'This feature will be rolled out across all global regions' },
      { text: 'We encountered several unexpected hurdles along the way.', context: 'Chronological path trajectory.', audioText: 'We encountered several unexpected hurdles along the way' },
      { text: 'I am reading through the API specifications.', context: 'Immersing oneself from start to finish.', audioText: 'I am reading through the API specifications' },
      { text: 'Data is replicated across multiple availability zones.', context: 'Distributed cloud infrastructure.', audioText: 'Data is replicated across multiple availability zones' },
      { text: 'Walk along this hallway until you see the boardroom.', context: 'Linear architectural hallway.', audioText: 'Walk along this hallway until you see the boardroom' },
      { text: 'We managed to get through the security audit without major findings.', context: 'Navigating an intense obstacle to the exit.', audioText: 'We managed to get through the security audit without major findings' },
    ],
    realLifeExamples: [
      {
        text: 'We hiked through a dense pine forest, walked across a suspension bridge, and then followed a path along the canyon edge.',
        situation: 'Describing an outdoor weekend trek.',
        context: 'Masterful real-world integration of all three spatial vectors in a single sentence.',
      },
      {
        text: 'I couldn’t hear what you said because of the wind blowing through the trees.',
        situation: 'Talking outdoors during a phone call.',
        context: 'Physical volume movement (THROUGH).',
      },
      {
        text: 'There is a bakery right across the street from our apartment.',
        situation: 'Giving neighborhood recommendations.',
        context: 'Opposing planar boundary location (ACROSS).',
      },
    ],
    professionalExamples: [
      {
        text: 'We must build consensus across all engineering directors before introducing this breaking schema change.',
        context: 'Organizational alignment strategy.',
        tone: 'Diplomatic, comprehensive, leadership',
      },
      {
        text: 'Our team worked diligently through the weekend to mitigate the ransomware exploit.',
        context: 'Incident management debrief.',
        tone: 'Resolute, serious, accountable',
      },
      {
        text: 'We will share key performance milestones along our path toward SOC2 compliance.',
        context: 'Compliance roadmap update.',
        tone: 'Professional, forward-looking',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The HTTP payload passes through an authentication filter, a rate-limiter, and a gzip compressor.',
        devContext: 'Web server middleware architecture.',
        analogy: '`request |> auth |> rateLimit |> compress` — Moving through a sequential processing tunnel (THROUGH).',
      },
      {
        text: 'Database writes are distributed across three shards using consistent hashing.',
        devContext: 'Distributed database architecture.',
        analogy: 'Planar distribution spanning a partitioned cluster (ACROSS).',
      },
      {
        text: 'Keep track of memory consumption along with request latency as you benchmark the service.',
        devContext: 'Benchmarking and telemetry monitoring.',
        analogy: 'Monitoring metrics in parallel synchronization alongside each other (ALONG WITH).',
      },
    ],
    contrast: {
      conceptA: 'THROUGH (Tunnel / Medium)',
      conceptB: 'ACROSS (Surface Crossing) & ALONG (Parallel Tracking)',
      differences: [
        { aspect: 'Geometry', optionA: '3D enclosed tunnel. Entered from one side, surrounded inside, exiting out.', optionB: 'ACROSS = 2D surface crossing; ALONG = 1D parallel line following.' },
        { aspect: 'Street Example', optionA: '❌ "Walk through the street" (Only if you are a mole digging under the pavement).', optionB: '✅ "Walk across the street" (Side to side) / "Walk along the street" (Sidewalk length).' },
        { aspect: 'Abstract Analogy', optionA: 'THROUGH = Navigating pain/processes ("get through the crisis").', optionB: 'ACROSS = Multi-entity reach ("across teams"); ALONG = Roadmap alignment ("along the journey").' },
        { aspect: 'Vision', optionA: 'Surrounded by matter on all sides.', optionB: 'Open view moving across a flat plane or beside a line.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'We walked through the bridge.',
        likelyIntention: 'Saying you crossed a bridge.',
        rootCause:
          'Translating Hindi "pull ke zariye / pull se hokar". A standard bridge is a flat surface (unless it is a covered tubular tunnel); you walk ACROSS a bridge.',
        naturalCorrection: 'We walked across the bridge.',
        nativeCadence: 'Use ACROSS for open bridges, rivers, and streets.',
      },
      {
        learnerError: 'The news spread all through the company.',
        likelyIntention: 'Saying everyone in the company heard the update.',
        rootCause: 'Using THROUGH instead of ACROSS for organizational dispersion.',
        naturalCorrection: 'The news spread across the company.',
        nativeCadence: 'Use ACROSS for corporate/geographic distribution.',
      },
      {
        learnerError: 'I was walking along with the road.',
        likelyIntention: 'Saying you were walking by the side of the road.',
        rootCause: 'Adding unnecessary "with". "Along" already means parallel to.',
        naturalCorrection: 'I was walking along the road.',
        nativeCadence: 'Use "along the road" without "with".',
      },
    ],
    nativeIntuition:
      'Native speakers feel the physical vectors in their gut. If they feel enclosed by foliage, stone, problems, or middleware layers, they say THROUGH. If they look from one curb to the opposite curb or one team to another, they say ACROSS. If they track parallel to a line or timeline, they say ALONG.',
    patternRecognitionExercises: [
      {
        id: 'tra-q1',
        prompt: 'Choose the correct preposition: "The incoming API request must navigate ___ several security layers before reaching the database."',
        options: ['across', 'through', 'along', 'over'],
        correctIndex: 1,
        explanation:
          'Security layers act as a sequential 3D barrier and filtering tunnel through which data must pass from input to output (THROUGH).',
      },
      {
        id: 'tra-q2',
        prompt: 'Which sentence correctly describes company-wide adoption of a new tool?',
        options: [
          'We rolled out Slack through all 50 departments.',
          'We rolled out Slack along all 50 departments.',
          'We rolled out Slack across all 50 departments.',
          'We rolled out Slack throughout into all 50 departments.',
        ],
        correctIndex: 2,
        explanation:
          'ACROSS denotes widespread planar distribution reaching all nodes in a horizontal organization ("across all departments").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are leading a system architecture discussion and explaining how user transactions pass through validation steps.',
        targetPattern: 'Pass / Flow THROUGH [Pipeline / Layers]',
        hint: 'Use the 3D tunnel vector THROUGH.',
        sampleAnswer: 'Every user transaction flows through an encrypted JWT validation gateway before mutating database state.',
      },
      {
        scenario: 'You need to explain that your microservices are deployed uniformly across three distinct AWS regions.',
        targetPattern: 'Distributed / Replicated ACROSS [Regions]',
        hint: 'Use the planar distribution vector ACROSS.',
        sampleAnswer: 'Our container clusters are evenly distributed across three geographic availability zones to guarantee fault tolerance.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD WITH CONFIDENCE 3 TIMES: "The request passed through the gateway, synced across three regions, and logged metrics along the way."',
      timedChallenge:
        'Speak for 45 seconds describing an end-to-end user request in your software, using THROUGH (the pipeline), ACROSS (the cluster), and ALONG (the monitoring stream).',
      durationSeconds: 45,
      roleplayPrompt:
        '"Once the packet flows through our CDN edge, it is load-balanced across our worker nodes, emitting audit logs along the way."',
    },
    recallTest: [
      {
        question: 'What is the dimensional difference between THROUGH, ACROSS, and ALONG?',
        hiddenAnswer:
          'THROUGH is 3D volumetric navigation (inside a medium/tunnel and out the other side). ACROSS is 2D planar crossing (from one boundary edge to the opposing edge). ALONG is 1D parallel linear progression (tracking beside a line or path).',
      },
      {
        question: 'Why do we say "walk ACROSS the street" instead of "walk THROUGH the street"?',
        hiddenAnswer:
          'Because a street is an open 2D flat planar surface, not an enclosed 3D volume or tunnel. You cross from one sidewalk edge to the other (ACROSS).',
      },
    ],
    revisionConnection:
      'Part 3 has mastered the complete spatial and prepositional operating system. In Part 4, we enter Sentence Construction: Causatives, Conditionals, and Complex Clause Mechanics.',
    masteryChallenge:
      'In your next architecture or team meeting, consciously deploy: "flows through the pipeline", "synced across regions", and "along the way".',
  },
];
