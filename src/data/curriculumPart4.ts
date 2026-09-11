import { Chapter } from '../types';

export const PART_4_CHAPTERS: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // CHAPTER 47: THE CAUSATIVE ENGINE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-47',
    partNumber: 4,
    partTitle: 'Sentence Construction & Dynamic Patterns',
    chapterNumber: 47,
    title: 'The Causative Engine (MAKE, LET, HAVE, GET)',
    subtitle: 'Delegation, Permission, Compulsion, and Persuasion in Action',
    level: 'Tier 3',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'Causative Force Spectrum: Force (MAKE) ──► Permission (LET) ──► Assignment (HAVE) ──► Persuasion (GET)',
      mentalModel:
        'In English, you do not just do things yourself; you cause other entities to act. The native speaker chooses one of four precise levers: 1) MAKE = Compulsion (no choice, physical or structural force), 2) LET = Permission (removing an obstacle, enabling freedom), 3) HAVE = Professional Delegation (routine assignment, contractual duty), 4) GET = Persuasion or Effort (convincing, overcoming friction, requiring the infinitive TO).',
      whyEnglishUsesIt:
        'Without causative verbs, you are forced to say awkward, robotic phrases like "I told him so that he did it" or "I paid someone in order that they clean". Causatives condense human coordination into razor-sharp, dynamic clauses.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a control panel with four levers: 1) A hydraulic press stamping down (MAKE: force), 2) A turnstile gate swinging wide open (LET: allow), 3) A manager handing a clipboard to an assistant (HAVE: delegate), and 4) A negotiator coaching a teammate through a puzzle (GET: persuade + TO).',
      schematic: `
   [ THE CAUSATIVE FORCE SPECTRUM ]
   MAKE (Force)       ──► Subject + MAKE + Person + [BASE VERB]     "She made him redo the test."
   LET (Allow)        ──► Subject + LET + Person + [BASE VERB]      "They let us inspect the logs."
   HAVE (Assign)      ──► Subject + HAVE + Person + [BASE VERB]     "I will have my lead review it."
   GET (Persuade)     ──► Subject + GET + Person + [TO + VERB]      "I got the client to agree."
   PASSIVE CAUSATIVE  ──► Subject + HAVE/GET + Object + [PAST PART] "I had my laptop repaired."
`,
    },
    pattern: {
      formula: 'Subject + Causative Verb [MAKE / LET / HAVE / GET] + Agent / Object + [Verb Form: Base vs. TO + Verb vs. V3]',
      breakdown: [
        { element: 'MAKE + Person + Base Verb', meaning: 'Compel or force someone to act (no "to").' },
        { element: 'LET + Person + Base Verb', meaning: 'Permit, allow, or remove resistance for someone to act (no "to").' },
        { element: 'HAVE + Person + Base Verb', meaning: 'Authorize or delegate a task to someone as part of routine responsibility (no "to").' },
        { element: 'GET + Person + TO + Verb', meaning: 'Persuade, convince, or manage to make someone do something (REQUIRES "to").' },
        { element: 'HAVE/GET + Object + V3', meaning: 'Arrange for something to be done by an unnamed third party ("had the car washed").' },
      ],
      notes: 'Crucial syntax checkpoint: MAKE, LET, and HAVE take the bare base verb. GET is the rebel that requires the infinitive "to".',
    },
    basicExamples: [
      { text: 'My manager made me rewrite the proposal.', context: 'Compulsion / mandatory requirement.', audioText: 'My manager made me rewrite the proposal' },
      { text: 'Please let me know when you are free.', context: 'Permission / open enablement.', audioText: 'Please let me know when you are free' },
      { text: 'I will have my assistant send you the calendar invite.', context: 'Routine delegation.', audioText: 'I will have my assistant send you the calendar invite' },
      { text: 'I finally got the vendor to lower the subscription price.', context: 'Persuasion overcoming friction.', audioText: 'I finally got the vendor to lower the subscription price' },
      { text: 'We had the security vulnerability patched yesterday.', context: 'Passive causative: work done by specialists.', audioText: 'We had the security vulnerability patched yesterday' },
      { text: 'Don’t let the noise distract your focus.', context: 'Removing hindrance.', audioText: 'Don’t let the noise distract your focus' },
      { text: 'The teacher made the students turn off their devices.', context: 'Authoritative rule.', audioText: 'The teacher made the students turn off their devices' },
      { text: 'I will have the QA team test the build tonight.', context: 'Operational assignment.', audioText: 'I will have the QA team test the build tonight' },
      { text: 'How did you get the engine to start in this cold?', context: 'Overcoming mechanical resistance.', audioText: 'How did you get the engine to start in this cold' },
      { text: 'We need to get our passports renewed before next month.', context: 'Arranging external administrative action.', audioText: 'We need to get our passports renewed before next month' },
    ],
    realLifeExamples: [
      {
        text: 'The landlord made us clean the entire apartment before returning our security deposit.',
        situation: 'Moving out of a rented apartment.',
        context: 'Compulsory requirement (MAKE + base verb).',
      },
      {
        text: 'I couldn’t fix the plumbing myself, so I had a technician replace the valve.',
        situation: 'Home maintenance repair.',
        context: 'Professional assignment (HAVE + base verb).',
      },
      {
        text: 'It took twenty minutes of coaxing, but I got my toddler to eat her broccoli.',
        situation: 'Parenting dinner challenge.',
        context: 'Persuasion requiring effort (GET + TO + verb).',
      },
    ],
    professionalExamples: [
      {
        text: 'I will have our senior security architect review the OAuth handshake before we ship to production.',
        context: 'Engineering leadership status report.',
        tone: 'Decisive, authoritative, professional',
      },
      {
        text: 'After three rounds of negotiations, we got procurement to approve the enterprise license agreement.',
        context: 'Cross-departmental deal closing.',
        tone: 'Victorious, strategic',
      },
      {
        text: 'The strict GDPR audit made all European data controllers revise their retention schedules.',
        context: 'Compliance and regulatory overview.',
        tone: 'Formal, objective',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The circuit breaker pattern lets the application fail gracefully when downstream services timeout.',
        devContext: 'Microservice resiliency architecture.',
        analogy: '`circuitBreaker.allowExecution()` — Unblocking or routing around failure (LET).',
      },
      {
        text: 'We will have the background cron worker re-index the ElasticSearch cluster at 02:00 UTC.',
        devContext: 'DevOps operational delegation.',
        analogy: 'Assigning a background daemon to execute maintenance (HAVE).',
      },
      {
        text: 'The compiler optimization got the rendering loop to run at a consistent sixty frames per second.',
        devContext: 'Graphics pipeline performance tuning.',
        analogy: 'Overcoming CPU cache bottlenecks through profiling (GET + TO).',
      },
    ],
    contrast: {
      conceptA: 'HAVE (Delegation & Duty)',
      conceptB: 'GET (Persuasion & Friction)',
      differences: [
        { aspect: 'Syntax', optionA: 'HAVE + Person + BASE VERB ("have him call").', optionB: 'GET + Person + TO + VERB ("get him to call").' },
        { aspect: 'Power Dynamic', optionA: 'Hierarchical, routine, or paid service. No resistance expected.', optionB: 'Horizontal persuasion, coaxing, or overcoming hesitation.' },
        { aspect: 'Effort Implied', optionA: 'Effortless instruction ("I will have my accountant check it").', optionB: 'Substantial effort or negotiation ("I got my accountant to waive the fee").' },
        { aspect: 'Inanimate Objects', optionA: '"Have the system reboot" (standard trigger).', optionB: '"Get the legacy code to compile" (fighting stubborn errors).' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'My boss made me to work on Sunday.',
        likelyIntention: 'Saying your employer forced you to work overtime.',
        rootCause:
          'Incorrectly inserting "to" after the causative MAKE. In English, MAKE triggers a bare infinitive without "to".',
        naturalCorrection: 'My boss made me work on Sunday.',
        nativeCadence: 'Never put "to" after MAKE (unless in passive voice: "I was made to work").',
      },
      {
        learnerError: 'I will make you know tomorrow.',
        likelyIntention: 'Promising to inform someone or send an update.',
        rootCause:
          'Direct translation of Hindi "main aapko pata karwa dunga". MAKE implies force/violence. You cannot "force" someone to know.',
        naturalCorrection: 'I will let you know tomorrow. / I will inform you tomorrow.',
        nativeCadence: 'Use "let you know" for informing.',
      },
      {
        learnerError: 'I got him sign the contract.',
        likelyIntention: 'Saying you persuaded someone to sign.',
        rootCause: 'Omitting "to" after GET. Unlike MAKE/HAVE/LET, GET strictly requires "to".',
        naturalCorrection: 'I got him to sign the contract.',
        nativeCadence: 'Always say: GET [someone] TO [do something].',
      },
    ],
    nativeIntuition:
      'Native speakers treat causatives as physical force vectors. MAKE is a shove. LET is an open door. HAVE is handing over the baton. GET is a tug-of-war where you finally pull the person across the line with a rope ("TO").',
    patternRecognitionExercises: [
      {
        id: 'caus-q1',
        prompt: 'Select the grammatically correct sentence for delegating a code review:',
        options: [
          'I will have John to review the pull request this afternoon.',
          'I will have John reviewing the pull request this afternoon.',
          'I will have John review the pull request this afternoon.',
          'I will make John to review the pull request this afternoon.',
        ],
        correctIndex: 2,
        explanation:
          'The causative verb HAVE takes a person followed by a bare base verb without "to" ("have John review").',
      },
      {
        id: 'caus-q2',
        prompt: 'Which sentence correctly expresses persuading an engineering manager to approve additional cloud budget?',
        options: [
          'We got the manager approve our cloud infrastructure budget.',
          'We got the manager to approve our cloud infrastructure budget.',
          'We made the manager to approve our cloud infrastructure budget.',
          'We let the manager approve our cloud infrastructure budget.',
        ],
        correctIndex: 1,
        explanation:
          'The causative verb GET expresses persuasion or overcoming resistance and strictly requires "TO + base verb" ("got the manager to approve").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You need to assure an executive that the infrastructure post-mortem document will be delivered by your team lead.',
        targetPattern: 'Subject + will have + [Person] + [Base Verb]',
        hint: 'Use the delegation causative HAVE.',
        sampleAnswer: 'I will have our infrastructure lead summarize the incident report and send it to your inbox by 3:00 PM.',
      },
      {
        scenario: 'Describe how you finally resolved a stubborn deadlock bug in your database pool.',
        targetPattern: 'Got + [System] + TO + [Verb]',
        hint: 'Use GET to reflect overcoming difficult technical friction.',
        sampleAnswer: 'After adjusting the connection pool timeouts, we finally got the database to handle peak concurrent traffic smoothly.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH CONFIDENT CADENCE: "I will have my team look into it, let you know the findings, and get the patch deployed by evening."',
      timedChallenge:
        'Speak for 45 seconds describing an ongoing project, using MAKE (rule/constraint), LET (permission/access), HAVE (delegation), and GET (persuasion/solution).',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey Sarah, could you have Dave review these API specs? If he approves them, we can get the client to sign off on the sprint plan."',
    },
    recallTest: [
      {
        question: 'Which causative verb uniquely requires the infinitive "TO"?',
        hiddenAnswer:
          'GET. Formula: GET + Person + TO + Verb (e.g., "I got him to help me"). MAKE, LET, and HAVE take bare infinitives without "to".',
      },
      {
        question: 'What is the structural difference between "I repaired my car" and "I had my car repaired"?',
        hiddenAnswer:
          '"I repaired my car" means you personally performed the mechanical labor. "I had my car repaired" (passive causative) means you arranged for a mechanic or third party to perform the repair.',
      },
    ],
    revisionConnection:
      'Now that you command the causative engine, Chapter 48 resolves one of the most persistent dilemmas in fluent English: choosing between Infinitives (TO + Verb) and Gerunds (-ING).',
    masteryChallenge:
      'Listen to your meetings today. Every time you ask a colleague to do something, deliberately use HAVE ("I’ll have him check") or GET ("Let’s get them to confirm"), avoiding wordy circumlocutions.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 48: INFINITIVES VS. GERUNDS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-48',
    partNumber: 4,
    partTitle: 'Sentence Construction & Dynamic Patterns',
    chapterNumber: 48,
    title: 'Infinitives vs. Gerunds (Future Potential vs. Realized Experience)',
    subtitle: 'The Architectural Divide: Forward-Looking Intent [TO + Verb] vs. Ongoing Reality [-ING]',
    level: 'Tier 3',
    readingTimeMinutes: 17,
    dna: {
      coreConcept: 'Temporal Arrow: Infinitive (TO + Verb) = Future Vector / Potential ──► Gerund (-ING) = Realized Activity / Experience',
      mentalModel:
        'The difference between an infinitive ("to do") and a gerund ("doing") is not an arbitrary grammar table. It is psychological orientation in time: 1) INFINITIVE (TO) points forward like an arrow toward an uncompleted desire, goal, purpose, or potential decision ("I decided to leave", "I hope to win"). 2) GERUND (-ING) represents an ongoing, experienced, habitual, or recalled physical reality ("I enjoy swimming", "I recalled meeting him", "I stopped smoking").',
      whyEnglishUsesIt:
        'Pairing the wrong verb form reverses chronological reality. Saying "I remembered to lock the door" means you successfully locked it; saying "I remembered locking the door" means you vividly picture the past event in your visual memory.',
    },
    mentalMovie: {
      sceneDescription:
        'Visualize standing at a crossroads. An arrow signpost pointing down a highway toward the horizon is labeled "TO" (the future destination you intend to reach). Now look at the shoes on your feet, coated in dust from the road you have been walking on for three hours; that felt experience is "-ING".',
      schematic: `
   [ THE INFINITIVE / GERUND TIME POLARITY ]
   PAST / CURRENT REALITY                                  FUTURE / UNREALIZED POTENTIAL
   ◄───────────────────────────────────────────────────────────────────────────────────►
   GERUND (-ING)                                           INFINITIVE (TO + VERB)
   - Realized, ongoing, experienced                        - Desired, intended, planned
   - Verbs: enjoy, avoid, consider, finish                 - Verbs: want, decide, plan, hope, promise
   - Example: "I enjoy writing clean code."                 - Example: "I plan to refactor this module."
`,
    },
    pattern: {
      formula: 'Forward-Looking Verb + [TO + BASE VERB] | Experiential / Retrospective Verb + [VERB + -ING]',
      breakdown: [
        { element: 'Infinitive Verbs', meaning: 'Want, decide, hope, plan, promise, offer, choose, agree, refuse (aimed at future outcomes).' },
        { element: 'Gerund Verbs', meaning: 'Enjoy, avoid, consider, finish, postpone, mind, practice, suggest, risk (grounded in actual activity).' },
        { element: 'Dual Verbs (Meaning Shift)', meaning: 'Remember, forget, stop, try, regret (meaning transforms completely depending on form).' },
      ],
      notes: 'Test: If the second action hasn’t happened yet relative to the first verb, lean strongly toward TO.',
    },
    basicExamples: [
      { text: 'We agreed to extend the deadline.', context: 'Future commitment reached.', audioText: 'We agreed to extend the deadline' },
      { text: 'I enjoy collaborating with cross-functional teams.', context: 'Felt experiential enjoyment.', audioText: 'I enjoy collaborating with cross-functional teams' },
      { text: 'He promised to deliver the audit by Friday.', context: 'Forward pledge.', audioText: 'He promised to deliver the audit by Friday' },
      { text: 'We must avoid deploying on Friday evenings.', context: 'Avoiding an ongoing hazard.', audioText: 'We must avoid deploying on Friday evenings' },
      { text: 'I remembered to send the client invoice.', context: 'Did not forget the duty before acting.', audioText: 'I remembered to send the client invoice' },
      { text: 'I remember sending the client invoice.', context: 'Recalling the past sensory visual memory.', audioText: 'I remember sending the client invoice' },
      { text: 'She stopped to drink some water.', context: 'Paused one activity in order to begin drinking.', audioText: 'She stopped to drink some water' },
      { text: 'She stopped drinking soda entirely.', context: 'Terminated the ongoing habit completely.', audioText: 'She stopped drinking soda entirely' },
      { text: 'We decided to adopt TypeScript.', context: 'Future strategic direction.', audioText: 'We decided to adopt TypeScript' },
      { text: 'Have you considered refactoring the authentication pipeline?', context: 'Contemplating an ongoing activity.', audioText: 'Have you considered refactoring the authentication pipeline' },
    ],
    realLifeExamples: [
      {
        text: 'I stopped walking to look up at the shooting star.',
        situation: 'An evening stroll.',
        context: 'Pausing motion for an intentional forward purpose (stopped TO look).',
      },
      {
        text: 'I regret to inform you that your application was unsuccessful.',
        situation: 'Official formal notification letter.',
        context: 'Reluctantly stepping forward to deliver current bad news (regret TO inform).',
      },
      {
        text: 'I don’t regret taking that risk, even though it was terrifying.',
        situation: 'Reflecting on life lessons over coffee.',
        context: 'Looking back at a past realized action without sorrow (regret TAKING).',
      },
    ],
    professionalExamples: [
      {
        text: 'The leadership team decided to postpone launching the international beta until Q3.',
        context: 'Executive strategy sync.',
        tone: 'Measured, strategic, authoritative',
      },
      {
        text: 'We strongly suggest implementing zero-trust authentication across all internal microservices.',
        context: 'Cybersecurity compliance recommendation.',
        tone: 'Advisory, clear, professional',
      },
      {
        text: 'Please remember to rotate all cryptographic API keys before leaving the office today.',
        context: 'Engineering operational duty.',
        tone: 'Punctual, urgent',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The garbage collector stops the runtime to reclaim unreferenced heap memory.',
        devContext: 'V8 / JVM runtime performance.',
        analogy: 'Pausing program execution in order to execute cleanup (stop TO reclaim).',
      },
      {
        text: 'We should avoid allocating heavy memory buffers inside high-throughput loops.',
        devContext: 'Backend throughput optimization.',
        analogy: 'Preventing an ongoing costly action pattern (avoid ALLOCATING).',
      },
      {
        text: 'The retry wrapper tried calling the endpoint five times before falling back to circuit-breaking.',
        devContext: 'Network resilience protocol.',
        analogy: 'Experimenting with an ongoing mechanism under failure conditions (try CALLING).',
      },
    ],
    contrast: {
      conceptA: 'Remember TO do (Forward Duty)',
      conceptB: 'Remember DOING (Retrospective Memory)',
      differences: [
        { aspect: 'Direction', optionA: 'Mental note looking forward to an upcoming task.', optionB: 'Sensory playback looking backward at past experience.' },
        { aspect: 'Formula', optionA: 'Remember + Infinitive (TO + Verb).', optionB: 'Remember + Gerund (-ING).' },
        { aspect: 'Example A', optionA: '"Remember to lock the server rack." (Do not forget!).', optionB: '"I remember locking the server rack." (I see my hand turning the key in my mind).' },
        { aspect: 'Forget Counterpart', optionA: '"Don’t forget to call him." (Forward reminder).', optionB: '"I’ll never forget meeting Steve Jobs." (Past indelible memory).' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'We discussed about to hire a new engineer.',
        likelyIntention: 'Talking about bringing on a new team member.',
        rootCause:
          'Combining the transitive verb "discuss" with "about" and an incorrect infinitive. Prepositions must always take gerunds.',
        naturalCorrection: 'We discussed hiring a new engineer.',
        nativeCadence: 'Rule: Verbs after prepositions ALWAYS take -ING.',
      },
      {
        learnerError: 'I look forward to hear from you.',
        likelyIntention: 'Professional closing sign-off in an email.',
        rootCause:
          'Treating "to" in "look forward to" as an infinitive particle instead of a directional preposition. Prepositions require noun phrases or gerunds.',
        naturalCorrection: 'I look forward to hearing from you.',
        nativeCadence: 'Always say: "look forward to hearing / meeting / seeing".',
      },
      {
        learnerError: 'I stopped to smoke three years ago.',
        likelyIntention: 'Saying you quit cigarettes three years ago.',
        rootCause:
          'Using the infinitive instead of the gerund. "Stopped to smoke" means you paused what you were doing in order to light a cigarette!',
        naturalCorrection: 'I stopped smoking three years ago.',
        nativeCadence: 'Stop + -ing = quit habit; Stop + to = pause to do something.',
      },
    ],
    nativeIntuition:
      'Native speakers feel the forward tension of the arrow in "TO". When your mind wants to create, achieve, or commit to something that does not yet exist, your tongue automatically reaches for "to". When your mind is handling a tangible, ongoing substance of activity, it produces "-ing".',
    patternRecognitionExercises: [
      {
        id: 'infger-q1',
        prompt: 'Choose the correct sign-off for a high-stakes client email proposal:',
        options: [
          'We look forward to partner with your technical leadership team.',
          'We look forward to partnering with your technical leadership team.',
          'We look forward partnering with your technical leadership team.',
          'We look forward for partner with your technical leadership team.',
        ],
        correctIndex: 1,
        explanation:
          'In the idiom "look forward to", "to" is a preposition of directional anticipation, which must be followed by a gerund ("partnering").',
      },
      {
        id: 'infger-q2',
        prompt: 'What does the sentence "The engineer stopped to inspect the pipeline logs" mean?',
        options: [
          'The engineer no longer inspects pipeline logs as a habit.',
          'The engineer paused their current task in order to look at the pipeline logs.',
          'The engineer avoided looking at the pipeline logs.',
          'The engineer forgot to inspect the pipeline logs.',
        ],
        correctIndex: 1,
        explanation:
          'Stop + TO + Verb means pausing an ongoing action in order to perform another intentional action.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are writing an executive summary explaining why your team chose to migrate off a legacy monolith.',
        targetPattern: 'Decided TO + [Base Verb] + because we avoided + [Gerund]',
        hint: 'Use infinitive for the forward decision and gerund for avoiding an ongoing problem.',
        sampleAnswer: 'We decided to migrate to microservices because we wanted to avoid maintaining brittle monolithic deployments.',
      },
      {
        scenario: 'You are signing off on an introductory email to an engineering VP.',
        targetPattern: 'Look forward to + [Gerund]',
        hint: 'Remember the preposition rule: -ING is mandatory.',
        sampleAnswer: 'Thank you for your time today; I look forward to collaborating on our upcoming infrastructure initiatives.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH SHARP CONTRAST: "I stopped smoking years ago, but on my walk today, I stopped to admire the sunrise."',
      timedChallenge:
        'Speak for 45 seconds comparing three things you decided TO do this year with three habits you enjoy DOING or avoid DOING every day.',
      durationSeconds: 45,
      roleplayPrompt:
        '"I look forward to reviewing your PR this afternoon, but please remember to run the integration test suite first!"',
    },
    recallTest: [
      {
        question: 'Why is "I look forward to see you" grammatically incorrect?',
        hiddenAnswer:
          'Because "to" in "look forward to" is a preposition, not an infinitive marker. All prepositions in English must be followed by a noun or a gerund ("hearing", "seeing").',
      },
      {
        question: 'What is the stark difference between "I remembered to shut down the cluster" and "I remembered shutting down the cluster"?',
        hiddenAnswer:
          '"Remembered to shut down" means you carried out your duty. "Remembered shutting down" means the shutdown already occurred in the past, and you are recalling the sensory mental memory of having done it.',
      },
    ],
    revisionConnection:
      'With causatives and infinitive/gerund time orientations mastered, Chapter 49 unlocks the computational backbone of complex reasoning: Conditionals as Decision Trees.',
    masteryChallenge:
      'Scan every outgoing email you draft today. If you write "look forward to", guarantee with 100% precision that the following verb ends in "-ing".',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 49: CONDITIONALS AS DECISION TREES
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-49',
    partNumber: 4,
    partTitle: 'Sentence Construction & Dynamic Patterns',
    chapterNumber: 49,
    title: 'Conditionals as Decision Trees (Zero, First, Second, Third, and Mixed)',
    subtitle: 'Mapping If-Else Branches Across Real, Hypothetical, and Counterfactual Realities',
    level: 'Tier 3',
    readingTimeMinutes: 18,
    dna: {
      coreConcept: 'The Reality Matrix: Universal Truth (0) ──► Real Future (1) ──► Unreal Present (2) ──► Counterfactual Past (3)',
      mentalModel:
        'Conditionals are not arbitrary verb drills; they are computer code for the human mind. English uses a 4-state boolean switch based on two variables: 1) What timeline are we inspecting (Present vs. Future vs. Past)? and 2) Is the condition Real (plausible) or Imaginary (counterfactual)? As you move from Real to Imaginary, the English verb tense steps one notch into the grammatical past (Backshifting).',
      whyEnglishUsesIt:
        'Without precise conditionals, you cannot negotiate contracts, conduct risk assessments, debate hypothetical architectures, or analyze historical post-mortems without causing catastrophic confusion.',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine stepping into an interactive control room with a glowing multidimensional branching tree. One green branch represents physical universal laws (Zero). Another amber branch shoots into tomorrow with high probability (First). A purple branch steps sideways into an alternate universe (Second). A dark blue branch rewinds yesterday to inspect what could have been (Third).',
      schematic: `
   [ THE 4-STATE CONDITIONAL DECISION TREE ]
   STATE 0 (Universal Truth):    IF [Present Simple],      ──► [Present Simple]
                                 "If you heat ice, it melts."
   STATE 1 (Plausible Future):   IF [Present Simple],      ──► WILL + [Base Verb]
                                 "If our traffic spikes, we will autoscale."
   STATE 2 (Hypothetical Now):   IF [Past Simple],         ──► WOULD + [Base Verb]
                                 "If I had more time, I would write unit tests." (Reality: I have no time)
   STATE 3 (Counterfactual Past):IF [Past Perfect: had V3],──► WOULD HAVE + [Past Participle: V3]
                                 "If we had run the migration, the database wouldn’t have crashed."
`,
    },
    pattern: {
      formula: 'Condition Clause (IF + Condition) + Result Clause (Modal + Consequence)',
      breakdown: [
        { element: 'Zero (0) Conditional', meaning: 'Timeless facts, scientific laws, or deterministic business rules.' },
        { element: 'First (1st) Conditional', meaning: 'Real, plausible future conditions and their probable outcomes.' },
        { element: 'Second (2nd) Conditional', meaning: 'Unreal, hypothetical, or impossible conditions in the present/future.' },
        { element: 'Third (3rd) Conditional', meaning: 'Counterfactual past scenarios—regrets, alternate history, post-mortems.' },
        { element: 'Mixed Conditional', meaning: 'Past action causing present state ("If I had taken that job, I would be in London now").' },
      ],
      notes: 'Golden Rule: NEVER put "will" or "would" inside the IF clause (e.g., say "If it rains", NOT "If it will rain").',
    },
    basicExamples: [
      { text: 'If you click this button, the modal closes.', context: 'Zero conditional: deterministic UI behavior.', audioText: 'If you click this button, the modal closes' },
      { text: 'If the tests pass, we will deploy to production.', context: 'First conditional: real future pipeline event.', audioText: 'If the tests pass, we will deploy to production' },
      { text: 'If I were the CEO, I would double the R&D budget.', context: 'Second conditional: hypothetical present identity.', audioText: 'If I were the CEO, I would double the R&D budget' },
      { text: 'If we had caught the bug earlier, we would have saved hours.', context: 'Third conditional: retrospective past counterfactual.', audioText: 'If we had caught the bug earlier, we would have saved hours' },
      { text: 'If memory exceeds 90%, the alert triggers.', context: 'Zero conditional: infrastructure invariant.', audioText: 'If memory exceeds 90%, the alert triggers' },
      { text: 'If you need help, I will jump on a call.', context: 'First conditional: immediate professional willingness.', audioText: 'If you need help, I will jump on a call' },
      { text: 'If we used a relational database, queries would be simpler.', context: 'Second conditional: hypothetical alternate tech stack.', audioText: 'If we used a relational database, queries would be simpler' },
      { text: 'If they had informed us, we could have mitigated the risk.', context: 'Third conditional: missed past opportunity.', audioText: 'If they had informed us, we could have mitigated the risk' },
      { text: 'If I had studied computer science, I would know this algorithm.', context: 'Mixed conditional: past education impacting current knowledge.', audioText: 'If I had studied computer science, I would know this algorithm' },
      { text: 'If latency increases, the CDN falls back to edge cache.', context: 'Zero conditional: distributed routing rule.', audioText: 'If latency increases, the CDN falls back to edge cache' },
    ],
    realLifeExamples: [
      {
        text: 'If it rains this afternoon, we will cancel the barbecue and order pizza.',
        situation: 'Planning weekend outdoor family plans.',
        context: 'Realistic future contingency (First conditional).',
      },
      {
        text: 'If I won the lottery tomorrow, I would buy a house by the ocean.',
        situation: 'Daydreaming with friends over dinner.',
        context: 'Unlikely hypothetical scenario (Second conditional).',
      },
      {
        text: 'If I had left the house five minutes earlier, I wouldn’t have missed the flight.',
        situation: 'Lamenting airport delays.',
        context: 'Counterfactual past regret (Third conditional).',
      },
    ],
    professionalExamples: [
      {
        text: 'If the client signs the service level agreement today, our deployment squad will spin up the dedicated cluster on Monday.',
        context: 'Enterprise enterprise contract review.',
        tone: 'Commercial, precise, confident',
      },
      {
        text: 'If we had unlimited cloud budget, we would replicate every database shard across four global regions.',
        context: 'Architectural tradeoffs discussion.',
        tone: 'Pragmatic, realistic',
      },
      {
        text: 'If our engineering team had conducted a load test last week, the black Friday outage would never have happened.',
        context: 'Executive post-mortem presentation.',
        tone: 'Accountable, analytical',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'If an unhandled exception occurs inside the try block, the worker catches the error and rejects the promise.',
        devContext: 'Error handling runtime logic.',
        analogy: '`try { ... } catch (err) { reject(err); }` — Deterministic Zero Conditional.',
      },
      {
        text: 'If the queue depth reaches threshold X, the auto-scaler will provision three additional pod replicas.',
        devContext: 'Kubernetes horizontal pod autoscaling.',
        analogy: '`if (queue.depth > X) hpa.scale(3);` — Predictive First Conditional.',
      },
      {
        text: 'If we had indexed the foreign key columns on the transactions table, this query would have executed in milliseconds.',
        devContext: 'SQL query performance diagnosis.',
        analogy: 'Evaluating the retrospective cost of a missing database index (Third Conditional).',
      },
    ],
    contrast: {
      conceptA: 'Second Conditional (Hypothetical Present)',
      conceptB: 'Third Conditional (Counterfactual Past)',
      differences: [
        { aspect: 'Time Horizon', optionA: 'Now / General Future (Imaginary world right now).', optionB: 'Past (Historical event that did not occur).' },
        { aspect: 'Formula', optionA: 'IF + Past Simple, WOULD + Base Verb.', optionB: 'IF + Past Perfect (had V3), WOULD HAVE + V3.' },
        { aspect: 'Reality', optionA: '"If I knew the answer, I would tell you." (Reality: I do not know right now).', optionB: '"If I had known the answer, I would have told you." (Reality: I did not know yesterday).' },
        { aspect: 'Emotional Tone', optionA: 'Imagining creative possibilities or gentle advice.', optionB: 'Evaluating history, retrospective analysis, or expressing regret.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'If it will rain tomorrow, we will cancel the meeting.',
        likelyIntention: 'Stating a future condition based on the weather.',
        rootCause:
          'Placing "will" inside the IF clause. English grammar forbids "will" in condition clauses; use the Present Simple.',
        naturalCorrection: 'If it rains tomorrow, we will cancel the meeting.',
        nativeCadence: 'Never put "will" or "would" inside the IF clause.',
      },
      {
        learnerError: 'If I would have known about the outage, I would have fixed it.',
        likelyIntention: 'Saying you would have resolved an issue had you known.',
        rootCause:
          'Using "would have" in the condition clause. The IF clause requires the Past Perfect ("had known").',
        naturalCorrection: 'If I had known about the outage, I would have fixed it.',
        nativeCadence: 'Formula: If I HAD [V3], I WOULD HAVE [V3].',
      },
      {
        learnerError: 'If I was you, I will take the job.',
        likelyIntention: 'Giving hypothetical advice to a friend.',
        rootCause: 'Mixing subjunctive "were" with indicative "was", and using "will" instead of hypothetical "would".',
        naturalCorrection: 'If I were you, I would take the job.',
        nativeCadence: 'Hypothetical advice: Always say "If I were you, I would..."',
      },
    ],
    nativeIntuition:
      'Native speakers treat conditionals as a game of psychological distance. Present tense means real world (hands-on). Past tense means mental simulation (arms-length). Past perfect means time-travel rewind (looking back through a mirror).',
    patternRecognitionExercises: [
      {
        id: 'cond-q1',
        prompt: 'Identify the grammatically flawless First Conditional sentence:',
        options: [
          'If the server will reboot, the connections will reset.',
          'If the server reboots, the connections will reset.',
          'If the server reboots, the connections would reset.',
          'If the server would reboot, the connections will reset.',
        ],
        correctIndex: 1,
        explanation:
          'The First Conditional pairs Present Simple in the condition clause ("If the server reboots") with WILL + base verb in the result clause ("the connections will reset").',
      },
      {
        id: 'cond-q2',
        prompt: 'Complete this retrospective post-mortem sentence: "If we ___ the backup script, the data loss ___ prevented."',
        options: [
          'verified, would be',
          'had verified, would have been',
          'would have verified, was',
          'had verified, will be',
        ],
        correctIndex: 1,
        explanation:
          'Third conditional requires Past Perfect in the IF clause ("had verified") and WOULD HAVE + past participle in the main clause ("would have been prevented").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are advising a junior engineer who is afraid to ask questions in the company Slack channel.',
        targetPattern: 'If I were you, I would + [Base Verb]',
        hint: 'Use the standard Second Conditional advice pattern.',
        sampleAnswer: 'If I were you, I would post the question in the dev-help channel; everyone is eager to help newcomers.',
      },
      {
        scenario: 'Explain how a recent successful production deployment avoided downtime thanks to pre-warming the cache.',
        targetPattern: 'If we had not + [V3], the system would have + [V3]',
        hint: 'Use the Third Conditional counterfactual to highlight your proactive engineering.',
        sampleAnswer: 'If we hadn’t pre-warmed the Redis cache, the surge of morning traffic would have overwhelmed our primary database.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH CONVICTION: "If we had caught this edge case in testing, we wouldn’t have spent our weekend on-call."',
      timedChallenge:
        'Speak for 45 seconds outlining an alternate universe: "If I were leading our company’s technical direction, I would..." and "If we had adopted this tech stack earlier, we would have..."',
      durationSeconds: 45,
      roleplayPrompt:
        '"If the client approves the wireframes by tomorrow noon, we will begin sprinting on the React frontend immediately."',
    },
    recallTest: [
      {
        question: 'Why can you never say "If I will go to the store, I will buy milk"?',
        hiddenAnswer:
          'Because the English IF clause represents the condition itself, which cannot take future modal "will". It must be stated in the Present Simple: "If I go to the store, I will buy milk."',
      },
      {
        question: 'What is the correct structure of a Third Conditional sentence?',
        hiddenAnswer:
          'IF + Past Perfect (had + V3), WOULD HAVE + Past Participle (V3). Example: "If you had told me, I would have waited."',
      },
    ],
    revisionConnection:
      'With conditional branching trees mastered, Chapter 50 equips you with visual optical lenses: Relative Clauses that define and frame your subjects with surgical focus.',
    masteryChallenge:
      'Every time you offer someone advice today, use "If I were you, I would..." with zero hesitation. Never let "was" slip in.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 50: RELATIVE CLAUSES AS VISUAL LENSES
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-50',
    partNumber: 4,
    partTitle: 'Sentence Construction & Dynamic Patterns',
    chapterNumber: 50,
    title: 'Relative Clauses as Visual Lenses (WHO, WHICH, THAT, WHOSE, WHERE)',
    subtitle: 'Camera Zoom: Defining Essential Identity vs. Non-Defining Parenthetical Color',
    level: 'Tier 3',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'The Visual Lens: Defining / Restrictive (No Commas / THAT) vs. Non-Defining / Descriptive (Commas / WHICH)',
      mentalModel:
        'Relative pronouns are camera zoom lenses that attach extra data directly to nouns without starting clunky new sentences. The critical architectural choice is: 1) DEFINING (Restrictive): Essential to identify WHICH specific object you are talking about (No commas; "The microservice that crashed handles auth"). 2) NON-DEFINING (Descriptive): The object is already uniquely identified; the clause is just extra bonus information in parenthetical commas ("Our auth service, which handles two million users, is written in Go").',
      whyEnglishUsesIt:
        'Misusing commas in relative clauses fundamentally alters legal contracts, technical specifications, and system descriptions. Saying "The engineers who worked overtime got bonuses" means ONLY those specific engineers got bonuses. Adding commas ("The engineers, who worked overtime, got bonuses") asserts that ALL engineers worked overtime and ALL received bonuses.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a magnifying glass focusing tightly on one specific black key on a keyboard (Defining: "The key that activates debug mode"). Now imagine the camera zooming out to show the entire keyboard, with a floating label pointing to the spacebar: ", which was custom-molded," (Non-defining bonus trivia enclosed between two gentle pause commas).',
      schematic: `
   [ DEFINING / RESTRICTIVE LENS ]                 [ NON-DEFINING / DESCRIPTIVE LENS ]
   Identifies WHICH specific one.                  Extra parenthetical color. Already unique.
   NO COMMAS. Uses THAT or WHO.                    MUST HAVE COMMAS. Uses WHICH or WHO.
   ┌─────────────────────────────────────┐         ┌─────────────────────────────────────┐
   │ "The database that stores user PII" │         │ "PostgreSQL, which we upgraded,"    │
   │ (Identifies this specific database) │         │ (Extra detail; name already unique) │
   └─────────────────────────────────────┘         └─────────────────────────────────────┘
`,
    },
    pattern: {
      formula: 'Noun + [Relative Pronoun: WHO / THAT / WHICH / WHOSE / WHERE] + Relative Clause',
      breakdown: [
        { element: 'WHO', meaning: 'Refers exclusively to human beings ("the engineer who patched the bug").' },
        { element: 'THAT', meaning: 'Used in Defining clauses for things, tools, animals, and concepts. NEVER preceded by a comma.' },
        { element: 'WHICH', meaning: 'Used in Non-Defining clauses for extra info. MUST be surrounded by commas.' },
        { element: 'WHOSE', meaning: 'Possessive vector showing ownership ("the developer whose PR was approved").' },
        { element: 'WHERE / WHEN', meaning: 'Spatial or temporal coordinates ("the data center where our pods run").' },
      ],
      notes: 'Litmus Test: If you delete the relative clause and the listener no longer knows WHICH object you mean, it is Defining (NO commas, use THAT).',
    },
    basicExamples: [
      { text: 'The engineer who wrote this algorithm is our principal architect.', context: 'Defining human identification.', audioText: 'The engineer who wrote this algorithm is our principal architect' },
      { text: 'Docker, which launched in 2013, revolutionized containerization.', context: 'Non-defining historical trivia with commas.', audioText: 'Docker which launched in 2013 revolutionized containerization' },
      { text: 'We need a database that supports horizontal sharding.', context: 'Defining technical criteria (THAT).', audioText: 'We need a database that supports horizontal sharding' },
      { text: 'Sarah, whose pull request was merged, updated the documentation.', context: 'Non-defining possessive reference.', audioText: 'Sarah whose pull request was merged updated the documentation' },
      { text: 'This is the server room where the incident originated.', context: 'Defining spatial coordinate.', audioText: 'This is the server room where the incident originated' },
      { text: 'The bugs that were reported by users have all been fixed.', context: 'Defining subset: only user-reported bugs.', audioText: 'The bugs that were reported by users have all been fixed' },
      { text: 'The latest release, which took three months to build, is finally live.', context: 'Non-defining duration detail.', audioText: 'The latest release which took three months to build is finally live' },
      { text: 'The candidate whose technical score was highest accepted our offer.', context: 'Defining possessive credential.', audioText: 'The candidate whose technical score was highest accepted our offer' },
      { text: 'I visited the campus where our hardware labs are located.', context: 'Relative spatial clause.', audioText: 'I visited the campus where our hardware labs are located' },
      { text: 'The configuration file that holds the secrets is gitignored.', context: 'Defining essential security identification.', audioText: 'The configuration file that holds the secrets is gitignored' },
    ],
    realLifeExamples: [
      {
        text: 'The neighbor who lives next door helped us carry the groceries inside.',
        situation: 'Greeting neighbors in your apartment building.',
        context: 'Defining which neighbor (no commas).',
      },
      {
        text: 'My grandfather, who is eighty-two years old, just ran his fourth marathon.',
        situation: 'Sharing family achievements with friends.',
        context: 'Non-defining extra context about a unique person (commas required).',
      },
      {
        text: 'The coffee shop where we used to study during college closed down.',
        situation: 'Nostalgic conversation.',
        context: 'Identifying the specific venue using WHERE.',
      },
    ],
    professionalExamples: [
      {
        text: 'All employees who handle customer payment data must complete mandatory compliance certification.',
        context: 'Enterprise corporate security policy.',
        tone: 'Mandatory, precise (no commas: applies only to that subset)',
      },
      {
        text: 'Our primary gateway, which routes over forty million API calls daily, maintained ninety-nine point nine percent uptime.',
        context: 'Annual engineering reliability review.',
        tone: 'Executive, authoritative, confident',
      },
      {
        text: 'The vendor whose SLA was breached agreed to credit our account for the outage duration.',
        context: 'Procurement vendor management briefing.',
        tone: 'Formal, objective',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The middleware function that validates the JWT bearer token runs before every protected route.',
        devContext: 'Express/Next.js API security pipeline.',
        analogy: 'Restricting scope to the specific authentication handler (THAT).',
      },
      {
        text: 'Redis, which is an in-memory key-value store, handles session caching with sub-millisecond latency.',
        devContext: 'Architectural documentation.',
        analogy: 'Non-defining parenthetical tech stack description (WHICH + Commas).',
      },
      {
        text: 'We eliminated all redundant database queries that were causing CPU throttling in the worker cluster.',
        devContext: 'Performance profiling and database optimization.',
        analogy: 'Filtering out the exact harmful query subset (THAT).',
      },
    ],
    contrast: {
      conceptA: 'THAT (Defining / Restrictive)',
      conceptB: 'WHICH (Non-Defining / Descriptive)',
      differences: [
        { aspect: 'Commas', optionA: 'Strictly NEVER preceded or enclosed by commas.', optionB: 'Strictly ALWAYS enclosed by commas (or a comma before it).' },
        { aspect: 'Function', optionA: 'Crucial identification: tells the reader WHICH item in a group is being discussed.', optionB: 'Bonus commentary: can be completely deleted without losing core meaning.' },
        { aspect: 'Example A', optionA: '"The laptops that have SSDs are fast." (Implies some laptops have HDDs and are slow).', optionB: '"The laptops, which have SSDs, are fast." (Asserts ALL laptops in question have SSDs).' },
        { aspect: 'People', optionA: 'Prefer WHO for people ("The developer who solved it").', optionB: 'WHICH can NEVER refer to a human being.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'The database, that holds our customer records, crashed.',
        likelyIntention: 'Adding descriptive context about the database.',
        rootCause: 'Putting commas around THAT. In formal English, THAT can never take commas; use WHICH.',
        naturalCorrection: 'The database, which holds our customer records, crashed.',
        nativeCadence: 'Rule: No commas with THAT; Commas with WHICH.',
      },
      {
        learnerError: 'The developer which solved the bug was praised.',
        likelyIntention: 'Praising a colleague.',
        rootCause: 'Using WHICH for a human being. Humans require WHO or WHOM.',
        naturalCorrection: 'The developer who solved the bug was praised.',
        nativeCadence: 'People = WHO; Objects = THAT / WHICH.',
      },
      {
        learnerError: 'The car what I bought is electric.',
        likelyIntention: 'Describing your new vehicle.',
        rootCause: 'Using WHAT as a relative pronoun. WHAT cannot modify an explicit noun.',
        naturalCorrection: 'The car that I bought is electric.',
        nativeCadence: 'Never say "the [noun] what I...". Use THAT.',
      },
    ],
    nativeIntuition:
      'Native speakers instinctively hear the comma as a micro-pause in their vocal breath. When there is no pause ("The server that failed..."), the phrase is one solid block of identity. When there is a pause ("The server, which was bought in 2020,..."), their voice drops slightly in pitch to signal bonus commentary.',
    patternRecognitionExercises: [
      {
        id: 'rel-q1',
        prompt: 'Choose the sentence that correctly asserts that ONLY the servers in US-East are being replaced:',
        options: [
          'The servers, which are located in US-East, will be decommissioned.',
          'The servers that are located in US-East will be decommissioned.',
          'The servers, that are located in US-East, will be decommissioned.',
          'The servers who are located in US-East will be decommissioned.',
        ],
        correctIndex: 1,
        explanation:
          '"The servers that are located in US-East" (no commas) is a Defining clause that restricts the decommissioning to that specific subset.',
      },
      {
        id: 'rel-q2',
        prompt: 'Which sentence correctly provides bonus background information about a unique tool?',
        options: [
          'Terraform that was open-sourced by HashiCorp is used for IaC.',
          'Terraform, which was open-sourced by HashiCorp, is used for IaC.',
          'Terraform, that was open-sourced by HashiCorp, is used for IaC.',
          'Terraform who was open-sourced by HashiCorp is used for IaC.',
        ],
        correctIndex: 1,
        explanation:
          'Terraform is already a unique proper noun, so additional background details require a Non-Defining clause with WHICH surrounded by commas.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are describing an open-source library in a team engineering presentation.',
        targetPattern: '[Library Name], which [Key Feature], is used for [Outcome]',
        hint: 'Use a Non-Defining relative clause with commas.',
        sampleAnswer: 'React Query, which automates asynchronous server-state management, dramatically simplifies our frontend data caching.',
      },
      {
        scenario: 'You are defining an internal access policy for cloud storage buckets.',
        targetPattern: 'Only team members who + [Requirement] + can access + [Resource]',
        hint: 'Use a Defining relative clause with WHO (no commas).',
        sampleAnswer: 'Only engineers who have completed security clearance can access the production database replicas.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD WITH DISTINCT COMMA PAUSES: "TypeScript, which adds static typing to JavaScript, caught the bug that caused yesterday’s outage."',
      timedChallenge:
        'Speak for 45 seconds describing two technologies you use every day, one using THAT (essential defining criteria) and one using WHICH with deliberate vocal comma pauses (parenthetical color).',
      durationSeconds: 45,
      roleplayPrompt:
        '"The framework that we selected for the redesign, which has over a hundred thousand GitHub stars, will accelerate our sprint velocity."',
    },
    recallTest: [
      {
        question: 'What is the fundamental rule regarding commas with the relative pronoun THAT?',
        hiddenAnswer:
          'THAT is strictly defining/restrictive and NEVER takes a comma in front of it. If you need commas for extra commentary, you must use WHICH.',
      },
      {
        question: 'What does "The team members who passed the test were promoted" mean compared to "The team members, who passed the test, were promoted"?',
        hiddenAnswer:
          'Without commas (Defining), only the specific members who passed were promoted (others were not). With commas (Non-Defining), ALL team members passed the test, and ALL were promoted.',
      },
    ],
    revisionConnection:
      'With relative clauses framing your subjects, Chapter 51 shifts the camera itself: the strategic, deliberate power of Passive Voice.',
    masteryChallenge:
      'Proofread every document and pull request comment you submit today: verify that every WHICH has a comma before it, and no THAT ever has a comma.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 51: PASSIVE VOICE AS CAMERA PERSPECTIVE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-51',
    partNumber: 4,
    partTitle: 'Sentence Construction & Dynamic Patterns',
    chapterNumber: 51,
    title: 'Passive Voice as Camera Perspective (Shifting Focus from Actor to Result)',
    subtitle: 'The Cinematic Viewport: Subject Recipient, Hidden Agents, and Objective Incident Post-Mortems',
    level: 'Tier 3',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'The Camera Tilt: Active (Focus on the Actor/Doer) ──► Passive (Focus on the Recipient/Result/Artifact)',
      mentalModel:
        'Passive voice is not a grammatical weakness or "bad writing" style. In executive communication, engineering post-mortems, and science, it is a deliberate optical choice. Active voice points the spotlight at the actor ("Alice merged the pull request"). Passive voice points the spotlight at the artifact or the affected entity ("The pull request was merged"). You use passive when: 1) The actor is obvious, unknown, or irrelevant, 2) You want to de-escalate blame, or 3) The result is far more important than who performed it.',
      whyEnglishUsesIt:
        'Saying "Dave deleted the production database" creates toxic finger-pointing in an engineering team. Saying "The production database was accidentally dropped during a manual migration script execution" shifts focus objectively to the systemic flaw in the script and safeguards.',
    },
    mentalMovie: {
      sceneDescription:
        'Visualize a television news broadcast. The camera could zoom in on a technician pressing a button (Active). Instead, the camera zooms in on a brand-new space satellite soaring through the stratosphere, while the voiceover announces: "The communications satellite has been launched successfully" (Passive: celebrating the artifact and milestone, not the finger pressing the button).',
      schematic: `
   [ ACTIVE PERSPECTIVE: ACTOR CENTRIC ]
   Actor (Spotlight) ══════════════► Action ══════════════► Recipient Object
   "The QA team discovered four critical vulnerabilities."

   [ PASSIVE PERSPECTIVE: OBJECT / RESULT CENTRIC ]
   Recipient Object (Spotlight) ══► BE + Past Participle (V3) ──► [by Actor - Optional]
   "Four critical vulnerabilities were discovered [by the QA team]."
`,
    },
    pattern: {
      formula: 'Recipient Subject + [BE in Appropriate Tense] + [Past Participle: V3] + [by Agent (Optional)]',
      breakdown: [
        { element: 'Present Simple Passive', meaning: 'IS / ARE + V3 ("Logs are collected every minute").' },
        { element: 'Past Simple Passive', meaning: 'WAS / WERE + V3 ("The patch was deployed yesterday").' },
        { element: 'Present Perfect Passive', meaning: 'HAS / HAVE BEEN + V3 ("The feature has been implemented").' },
        { element: 'Future / Modal Passive', meaning: 'WILL BE / MUST BE + V3 ("The certificate must be renewed").' },
        { element: 'Omission of Agent', meaning: 'Omitting "by someone" when the actor is irrelevant or unknown.' },
      ],
      notes: 'Litmus Test: If the grammatical subject of your sentence is not the one performing the action, the sentence is Passive.',
    },
    basicExamples: [
      { text: 'The pull request was merged into main.', context: 'Past simple passive: focusing on the milestone.', audioText: 'The pull request was merged into main' },
      { text: 'All passwords are encrypted with bcrypt.', context: 'Present simple passive: systemic security invariant.', audioText: 'All passwords are encrypted with bcrypt' },
      { text: 'The release has been scheduled for Thursday.', context: 'Present perfect passive: current operational status.', audioText: 'The release has been scheduled for Thursday' },
      { text: 'The incident was resolved within twenty minutes.', context: 'De-escalated, blameless outcome.', audioText: 'The incident was resolved within twenty minutes' },
      { text: 'New microservices will be provisioned automatically.', context: 'Future automated capability.', audioText: 'New microservices will be provisioned automatically' },
      { text: 'The bug was caused by a race condition.', context: 'Root cause analysis without personal blame.', audioText: 'The bug was caused by a race condition' },
      { text: 'Two thousand customer accounts were affected.', context: 'Highlighting the magnitude of impact.', audioText: 'Two thousand customer accounts were affected' },
      { text: 'The system must be audited quarterly.', context: 'Regulatory passive mandate.', audioText: 'The system must be audited quarterly' },
      { text: 'The code is being reviewed right now.', context: 'Continuous passive: action in current progress.', audioText: 'The code is being reviewed right now' },
      { text: 'No sensitive data was leaked during the breach.', context: 'Crucial reassurance in security report.', audioText: 'No sensitive data was leaked during the breach' },
    ],
    realLifeExamples: [
      {
        text: 'The historic cathedral was completed in 1345 after two centuries of construction.',
        situation: 'Historical documentary tour.',
        context: 'Focusing on the architectural masterpiece, not individual nameless stonemasons.',
      },
      {
        text: 'My flight has been delayed by three hours due to heavy fog.',
        situation: 'Calling family from the airport departure lounge.',
        context: 'Passive state of travel disruption.',
      },
      {
        text: 'The package was delivered to your front porch this morning.',
        situation: 'Automated delivery tracking SMS.',
        context: 'Focusing on the arrival of the package, not the courier’s identity.',
      },
    ],
    professionalExamples: [
      {
        text: 'A critical vulnerability was identified in our payment processing gateway and an emergency hotfix was deployed immediately.',
        context: 'Executive cybersecurity briefing.',
        tone: 'Objective, calm, blameless, reassuring',
      },
      {
        text: 'The quarterly financial forecasts were approved unanimously by the board of directors.',
        context: 'Shareholder meeting minutes.',
        tone: 'Authoritative, formal',
      },
      {
        text: 'User session tokens are automatically revoked upon password resets.',
        context: 'System security architecture documentation.',
        tone: 'Deterministic, technical',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Incoming webhooks are ingested by Kafka topics and partitioned across eight consumer instances.',
        devContext: 'Event-driven streaming pipeline.',
        analogy: 'Focusing on the lifecycle of data packets flowing through infrastructure.',
      },
      {
        text: 'The database connection pool was exhausted because idle connections were not properly closed.',
        devContext: 'Incident post-mortem root cause.',
        analogy: 'Diagnosing systemic architectural flaw rather than attacking the developer who wrote the query.',
      },
      {
        text: 'All API endpoints are rate-limited to one hundred requests per minute per IP address.',
        devContext: 'API gateway gateway routing policy.',
        analogy: 'Stating system-wide access governance as a universal rule.',
      },
    ],
    contrast: {
      conceptA: 'Active Voice (Actor in the Spotlight)',
      conceptB: 'Passive Voice (Object / Result in the Spotlight)',
      differences: [
        { aspect: 'Spotlight', optionA: 'Subject = The Person or Engine performing the work.', optionB: 'Subject = The Receiver, Artifact, or Victim of the action.' },
        { aspect: 'Best Used For', optionA: 'Direct leadership, energetic storytelling, assigning clear ownership.', optionB: 'Blameless post-mortems, system architectures, scientific reports.' },
        { aspect: 'Blame Dynamic', optionA: '"Mark dropped the database." (Personal accusation).', optionB: '"The database was dropped during migration." (Blameless system focus).' },
        { aspect: 'Formula', optionA: 'Subject + Verb + Object.', optionB: 'Subject + BE + Past Participle (V3) [+ by Agent].' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'The bug was happened yesterday.',
        likelyIntention: 'Saying a bug occurred.',
        rootCause:
          'Attempting to make an intransitive verb passive. Verbs like "happen", "occur", and "arrive" have no direct object and can NEVER be passive.',
        naturalCorrection: 'The bug happened yesterday. / The bug occurred yesterday.',
        nativeCadence: 'Never put "be" in front of happen or occur.',
      },
      {
        learnerError: 'The document is prepare by me.',
        likelyIntention: 'Confirming you drafted the document.',
        rootCause: 'Failing to use the past participle (V3) in a passive construction.',
        naturalCorrection: 'The document was prepared by me. / I prepared the document.',
        nativeCadence: 'Passive requires V3: is prepared, was written, has been checked.',
      },
      {
        learnerError: 'The system has deployed.',
        likelyIntention: 'Saying the deployment completed.',
        rootCause:
          'Omitting the passive auxiliary "been". Saying "the system has deployed" implies the software took autonomous action and deployed itself.',
        naturalCorrection: 'The system has been deployed.',
        nativeCadence: 'Use "has been deployed" for completed passive events.',
      },
    ],
    nativeIntuition:
      'Native speakers do not ask "Active or Passive?" in a grammar vacuum. They ask: "Who is the protagonist of my sentence?" If the protagonist is the data, the software, or the company policy, they make that the subject and naturally employ the passive voice.',
    patternRecognitionExercises: [
      {
        id: 'pass-q1',
        prompt: 'Which sentence presents a blameless, professional post-mortem statement?',
        options: [
          'John forgot to update the SSL certificate, so the website broke.',
          'The SSL certificate was not renewed prior to expiration, causing the domain to be temporarily inaccessible.',
          'John broke the website by not renewing the SSL certificate.',
          'The website broke because of John’s mistake.',
        ],
        correctIndex: 1,
        explanation:
          'Option 2 uses passive voice ("was not renewed", "to be temporarily inaccessible") to focus analytically on the systemic failure without personal finger-pointing.',
      },
      {
        id: 'pass-q2',
        prompt: 'Identify the grammatically correct passive sentence:',
        options: [
          'The accident was happened at 4:00 PM.',
          'The pull request has been merged by the release manager.',
          'The new servers were arrived this morning.',
        ],
        correctIndex: 1,
        explanation:
          '"Merge" is a transitive verb that correctly forms the present perfect passive ("has been merged"). "Happen" and "arrive" are intransitive and cannot be passive.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are writing an incident summary where an accidental configuration change caused an API disruption.',
        targetPattern: 'The configuration was modified + resulting in + [Issue] + which has been resolved',
        hint: 'Use blameless passive phrasing.',
        sampleAnswer: 'A routing configuration was modified during peak hours, resulting in intermittent timeouts; the change has been rolled back and full stability has been restored.',
      },
      {
        scenario: 'Explain the security setup of your cloud storage buckets.',
        targetPattern: 'All data is encrypted + and access is restricted',
        hint: 'Use present simple passive for ongoing security invariants.',
        sampleAnswer: 'All data stored in our cloud buckets is encrypted at rest using AES-256, and access is restricted through least-privilege IAM roles.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD WITH EXECUTIVE CALM: "The issue has been identified, the patch has been tested, and the release will be deployed at midnight."',
      timedChallenge:
        'Speak for 45 seconds describing an ongoing technical release entirely in the passive voice: what was discovered, what has been fixed, and what will be monitored.',
      durationSeconds: 45,
      roleplayPrompt:
        '"Team, our production rollback was completed in three minutes, no customer data was corrupted, and a full incident report will be published by end of day."',
    },
    recallTest: [
      {
        question: 'Why can you never say "The outage was occurred at 2:00 PM"?',
        hiddenAnswer:
          'Because "occur" (like "happen") is an intransitive verb—it has no direct object. Only transitive verbs (verbs that act upon an object) can be converted into the passive voice.',
      },
      {
        question: 'When is passive voice preferred over active voice in professional engineering?',
        hiddenAnswer:
          'In incident post-mortems (to foster blameless culture), in technical documentation (where the system/data is the main subject), and when the actor is automated, unknown, or irrelevant.',
      },
    ],
    revisionConnection:
      'With passive voice enabling precise cinematic framing, Chapter 52 introduces the intellectual scaffolding of complex thoughts: Subordinating Conjunctions and Logical Connectors.',
    masteryChallenge:
      'Write your next incident report or bug summary using blameless passive phrasing ("the parameter was omitted" rather than "I/he forgot the parameter").',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 52: SUBORDINATING CONJUNCTIONS & LOGICAL CONNECTORS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-52',
    partNumber: 4,
    partTitle: 'Sentence Construction & Dynamic Patterns',
    chapterNumber: 52,
    title: 'Subordinating Conjunctions & Logical Connectors (Managing Cognitive Contrast)',
    subtitle: 'ALTHOUGH, DESPITE, WHILE, SINCE, UNLESS — Engineering Nuanced Arguments',
    level: 'Tier 3',
    readingTimeMinutes: 17,
    dna: {
      coreConcept: 'The Cognitive Bridge: Concession (ALTHOUGH / DESPITE) ──► Temporal / Causal (WHILE / SINCE) ──► Negative Condition (UNLESS)',
      mentalModel:
        'Sentences in professional life are rarely simple statements of fact; they are negotiations between competing realities. Logical connectors are the mathematical operators of human reasoning: 1) ALTHOUGH / EVEN THOUGH = Concession introducing a full clause (Subject + Verb) that seems to contradict the main outcome. 2) DESPITE / IN SPITE OF = Concession introducing a pure noun phrase or gerund (-ing). 3) WHILE = Simultaneous contrast or duration. 4) SINCE = Causal explanation or chronological origin. 5) UNLESS = Negative conditional gateway ("except if").',
      whyEnglishUsesIt:
        'Confusing "although" and "despite" or adding redundant connectors ("Although it rained, but we went") destroys your executive presence and makes your arguments sound clumsy and non-native.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a sturdy steel suspension bridge connecting two cliffs. On the left cliff is a storm ("heavy network latency"). On the right cliff is a high-speed bullet train reaching its destination on time. The connector ALTHOUGH acts as the shock-absorbing cable that binds the opposing storm and the success into one coherent, bulletproof structure.',
      schematic: `
   [ CONCESSION CONNECTOR FORMULAS ]
   ALTHOUGH / EVEN THOUGH  ──► + [FULL CLAUSE: Subject + Verb]
                               "Although the traffic was heavy, we arrived on schedule."
   DESPITE / IN SPITE OF   ──► + [NOUN PHRASE or GERUND (-ing)] (NO "of" with despite!)
                               "Despite the heavy traffic, we arrived on schedule."
   UNLESS                  ──► = IF NOT
                               "The script will fail unless you provide the API key."
   [ BANNED PATTERN: "Although... BUT..." ] ──► NEVER use both in the same sentence!
`,
    },
    pattern: {
      formula: 'Logical Connector + Dependent Clause / Noun Phrase, Main Independent Clause',
      breakdown: [
        { element: 'ALTHOUGH / EVEN THOUGH + Clause', meaning: 'Contrast admitting an unexpected barrier followed by a successful main result.' },
        { element: 'DESPITE + Noun / Gerund', meaning: 'Same contrast as although, but strictly followed by a noun phrase, never a finite clause.' },
        { element: 'WHILE + Clause', meaning: 'Contrasting two parallel realities ("While Redis is fast, Postgres is durable").' },
        { element: 'SINCE + Clause', meaning: 'Causal justification ("Since traffic is low at night, we deploy at 2 AM").' },
        { element: 'UNLESS + Present Simple', meaning: 'Negative conditional gateway meaning "if this does NOT happen".' },
      ],
      notes: 'Banned in English: "Although it was difficult, BUT we completed it." Choose ALTHOUGH or BUT, never both.',
    },
    basicExamples: [
      { text: 'Although the deadline was tight, the engineering squad delivered on time.', context: 'Clause concession.', audioText: 'Although the deadline was tight the engineering squad delivered on time' },
      { text: 'Despite the tight deadline, the engineering squad delivered on time.', context: 'Noun phrase concession.', audioText: 'Despite the tight deadline the engineering squad delivered on time' },
      { text: 'The build will fail unless all unit tests pass.', context: 'Negative conditional rule.', audioText: 'The build will fail unless all unit tests pass' },
      { text: 'While the frontend looks polished, the backend requires optimization.', context: 'Dual parallel contrast.', audioText: 'While the frontend looks polished the backend requires optimization' },
      { text: 'Since the memory consumption stabilized, we cancelled the rollback.', context: 'Causal rationale.', audioText: 'Since the memory consumption stabilized we cancelled the rollback' },
      { text: 'In spite of several network glitches, the stream stayed live.', context: 'Prepositional concession with of.', audioText: 'In spite of several network glitches the stream stayed live' },
      { text: 'Even though we increased replica counts, latency remained high.', context: 'Emphatic contrast clause.', audioText: 'Even though we increased replica counts latency remained high' },
      { text: 'We cannot proceed with the deployment unless security signs off.', context: 'Prerequisite condition.', audioText: 'We cannot proceed with the deployment unless security signs off' },
      { text: 'Since we adopted TypeScript, our runtime type errors dropped by eighty percent.', context: 'Temporal origin and causal impact.', audioText: 'Since we adopted TypeScript our runtime type errors dropped by eighty percent' },
      { text: 'Despite having limited resources, the startup built a competitive product.', context: 'Gerund concession.', audioText: 'Despite having limited resources the startup built a competitive product' },
    ],
    realLifeExamples: [
      {
        text: 'Although it was freezing outside, we went for a long walk along the lake.',
        situation: 'Winter outdoor recreation.',
        context: 'Full clause concession (Although it was...).',
      },
      {
        text: 'Despite the rain, the outdoor wedding was absolutely magical.',
        situation: 'Recounting a family celebration.',
        context: 'Noun phrase concession (Despite the rain).',
      },
      {
        text: 'I won’t buy the plane ticket unless you confirm your vacation dates.',
        situation: 'Coordinating holiday travel with a friend.',
        context: 'Negative dependency (unless you confirm).',
      },
    ],
    professionalExamples: [
      {
        text: 'Although our cloud migration costs exceeded initial forecasts, the resulting operational agility justified the investment.',
        context: 'Executive ROI retrospective.',
        tone: 'Strategic, balanced, persuasive',
      },
      {
        text: 'Despite experiencing unprecedented load during the flash sale, our payment gateway maintained zero transaction drops.',
        context: 'Q4 engineering performance showcase.',
        tone: 'Confident, authoritative, metric-driven',
      },
      {
        text: 'The automated pipeline will halt deployment unless code coverage exceeds eighty-five percent.',
        context: 'Engineering quality gate documentation.',
        tone: 'Clear, uncompromising',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'While synchronous HTTP calls introduce cascading latency, event-driven queues decouple service dependencies.',
        devContext: 'Distributed systems design comparison.',
        analogy: 'Contrasting synchronous blocking with asynchronous decoupling (WHILE).',
      },
      {
        text: 'The background garbage collector will not reclaim the object unless all circular references are dereferenced.',
        devContext: 'V8 runtime memory management.',
        analogy: '`if (!unreferenced) return;` — Negative gating logic (UNLESS).',
      },
      {
        text: 'Since the read replicas are asynchronously updated, queries may occasionally return stale data.',
        devContext: 'Eventual consistency in distributed databases.',
        analogy: 'Explaining architectural consequences via causality (SINCE).',
      },
    ],
    contrast: {
      conceptA: 'ALTHOUGH (Clause Concession)',
      conceptB: 'DESPITE (Noun / Gerund Concession)',
      differences: [
        { aspect: 'Syntax', optionA: 'Requires a full clause: Subject + Verb ("Although it rained").', optionB: 'Requires a noun phrase or gerund: NO verb clause ("Despite the rain").' },
        { aspect: 'Preposition OF', optionA: 'Never uses of.', optionB: 'NEVER say "despite of"! (Use either "despite" OR "in spite of").' },
        { aspect: 'Clauses with Fact', optionA: '"Although the budget was cut..."', optionB: '"Despite the fact that the budget was cut..." (if forced to use a clause).' },
        { aspect: 'Paired BUT', optionA: 'NEVER pair with "but" in the second half.', optionB: 'NEVER pair with "but" in the second half.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Although the bug was severe, but we fixed it quickly.',
        likelyIntention: 'Saying you resolved a severe bug quickly.',
        rootCause:
          'Direct translation of Hindi "Halaanki... lekin...". In English, pairing "Although" with "but" is a double-conjunction error. Use one or the other.',
        naturalCorrection: 'Although the bug was severe, we fixed it quickly. / The bug was severe, but we fixed it quickly.',
        nativeCadence: 'Never say "Although... but...". Pick one.',
      },
      {
        learnerError: 'Despite of having high latency, the app worked.',
        likelyIntention: 'Expressing that the app functioned despite latency.',
        rootCause:
          'Mixing "despite" with "in spite of". "Despite" is a self-contained preposition that never takes "of".',
        naturalCorrection: 'Despite having high latency, the app worked. / In spite of high latency, the app worked.',
        nativeCadence: 'Rule: Despite [noun]. In spite OF [noun].',
      },
      {
        learnerError: 'We will not ship unless you don’t approve.',
        likelyIntention: 'Saying shipping depends on approval.',
        rootCause:
          'Double negative. "Unless" already means "if not". Adding "don\'t" inverts the logic into a nonsensical statement.',
        naturalCorrection: 'We will not ship unless you approve.',
        nativeCadence: 'Unless + positive verb = if not.',
      },
    ],
    nativeIntuition:
      'Native speakers view connectors as balance scales. When they open with "Although", their ear expects an unequal weight that resolves smoothly in the second half. If you put "but" in the middle, the scale collapses with a clumsy thud.',
    patternRecognitionExercises: [
      {
        id: 'conn-q1',
        prompt: 'Select the grammatically flawless sentence comparing technical constraints:',
        options: [
          'Although the server load was high, but the latency remained low.',
          'Despite of the high server load, the latency remained low.',
          'Despite the high server load, the latency remained low.',
          'Although the high server load, the latency remained low.',
        ],
        correctIndex: 2,
        explanation:
          '"Despite the high server load" correctly pairs DESPITE with a noun phrase without "of" or a redundant "but".',
      },
      {
        id: 'conn-q2',
        prompt: 'How do you correctly formulate an automated build rule?',
        options: [
          'The pull request will not merge unless the tests don’t pass.',
          'The pull request will not merge unless the tests pass.',
          'The pull request will not merge although the tests pass.',
          'The pull request will merge unless the tests pass.',
        ],
        correctIndex: 1,
        explanation:
          '"Unless the tests pass" means "if the tests do not pass". Pairing "unless" with a negative verb creates an incorrect double negative.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are presenting an executive update on a difficult release that succeeded against the odds.',
        targetPattern: 'Despite + [Noun Phrase], our team managed to + [Verb]',
        hint: 'Use DESPITE to emphasize overcoming a major hurdle.',
        sampleAnswer: 'Despite severe third-party API outages, our team managed to deploy our core features ahead of schedule.',
      },
      {
        scenario: 'Define a critical security gate for database migrations.',
        targetPattern: 'We will not execute the migration script unless + [Prerequisite]',
        hint: 'Remember UNLESS takes a positive clause.',
        sampleAnswer: 'We will not execute the migration script unless a verified snapshot backup has been created.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH SHARP CONTRAST AND NO HESITATION: "Although our resources were limited, we shipped on time; and despite the pressure, we maintained ninety-nine percent test coverage."',
      timedChallenge:
        'Speak for 45 seconds comparing two technologies or decisions using ALTHOUGH (full clause), DESPITE (noun), WHILE (parallel contrast), and UNLESS (gate condition).',
      durationSeconds: 45,
      roleplayPrompt:
        '"Although the refactor required two extra sprints, the resulting system architecture is infinitely easier to scale."',
    },
    recallTest: [
      {
        question: 'Why is the sentence "Although he worked hard, but he failed" ungrammatical in English?',
        hiddenAnswer:
          'Because "Although" is a subordinating conjunction that already establishes the concession. Adding the coordinating conjunction "but" creates an ungrammatical double connector. Say: "Although he worked hard, he failed."',
      },
      {
        question: 'What is the exact grammatical difference between ALTHOUGH and DESPITE?',
        hiddenAnswer:
          'ALTHOUGH must be followed by a full clause (Subject + Verb: "Although it rained"). DESPITE is a preposition that must be followed by a noun phrase or gerund (NO clause: "Despite the rain").',
      },
    ],
    revisionConnection:
      'Now that your sentences bridge complex logic with pristine connectors, Chapter 53 completes Part 4 with the final conversational frontier: Direct vs. Reported Speech.',
    masteryChallenge:
      'Scrutinize every message you type today. If you start a sentence with "Although", immediately scan forward to verify there is NO "but" anywhere in that sentence.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 53: DIRECT VS. REPORTED SPEECH
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-53',
    partNumber: 4,
    partTitle: 'Sentence Construction & Dynamic Patterns',
    chapterNumber: 53,
    title: 'Direct vs. Reported Speech (Perspective Shifting & Backshifting Mechanics)',
    subtitle: 'From Literal Quotation to Strategic Paraphrase, Tense Stepping, and Modal Harmony',
    level: 'Tier 3',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'The Perspective Shift: Direct (Quotation marks, original speaker coordinate) ──► Reported (Backshifted tenses, reporter coordinate)',
      mentalModel:
        'Direct speech quotes words exactly as spoken inside quotation marks ("I am leaving now"). Reported speech moves the speaker’s words into your own timeline, requiring a dual coordinate shift: 1) Pronoun Shift (I ──► He/She, We ──► They), and 2) Tense Backshift (Present ──► Past, Past ──► Past Perfect, Will ──► Would). In professional standups and meetings, 90% of communication is reporting what others stated, decided, or requested.',
      whyEnglishUsesIt:
        'Failing to backshift creates temporal paradoxes. Saying "He told me that he will come yesterday" creates a broken timeline where a future modal ("will") clashes with a completed past day ("yesterday").',
    },
    mentalMovie: {
      sceneDescription:
        'Picture yourself standing on a stage speaking directly into a microphone with quotation marks floating in neon lights around your face (Direct Speech). Now step off the stage into the audience, point at an actor from yesterday, and relay what they said to the person sitting next to you. As you relay the message, watch their tenses take one step backward into the past (Reported Speech).',
      schematic: `
   [ THE BACKSHIFTING ENGINE: ONE STEP INTO THE PAST ]
   DIRECT SPEECH                                  REPORTED SPEECH
   "I am working on the ticket."            ──►   He said he WAS working on the ticket.
   "We deployed the hotfix."                ──►   They said they HAD DEPLOYED the hotfix.
   "I will call the client tomorrow."       ──►   She said she WOULD call the client the next day.
   "Can you review my code?"                ──►   He asked if I COULD review his code.
   UNIVERSAL TRUTH EXCEPTION:
   "Water boils at 100°C."                  ──►   The professor said that water BOILS at 100°C.
`,
    },
    pattern: {
      formula: 'Subject + Reporting Verb [SAID / TOLD / ASKED / CONFIRMED] + (THAT) + Backshifted Clause',
      breakdown: [
        { element: 'SAY vs. TELL', meaning: 'SAY does not require a personal object ("He said that..."). TELL strictly requires a person ("He told ME that...").' },
        { element: 'Tense Backshift', meaning: 'Present Simple ──► Past Simple; Present Continuous ──► Past Continuous; Will ──► Would; Can ──► Could.' },
        { element: 'Pronoun / Time Shift', meaning: 'Now ──► Then; Today ──► That day; Tomorrow ──► The next day; Here ──► There.' },
        { element: 'Reported Questions', meaning: 'Asked if/whether + Subject + Verb (NO question inversion! "He asked where I was", NOT "where was I").' },
      ],
      notes: 'Crucial syntax checkpoint: "He said me" is NEVER correct in English. You must say "He said TO me" or "He told me".',
    },
    basicExamples: [
      { text: 'She said she was preparing the slides.', context: 'Reported present continuous.', audioText: 'She said she was preparing the slides' },
      { text: 'The lead told me that the build had succeeded.', context: 'Reported past event backshifted to past perfect.', audioText: 'The lead told me that the build had succeeded' },
      { text: 'They confirmed they would deliver the API by Friday.', context: 'Reported future modal (will to would).', audioText: 'They confirmed they would deliver the API by Friday' },
      { text: 'He asked if I could help him with the query.', context: 'Reported yes/no question with could.', audioText: 'He asked if I could help him with the query' },
      { text: 'The manager asked where the logs were stored.', context: 'Reported wh-question: standard subject-verb word order.', audioText: 'The manager asked where the logs were stored' },
      { text: 'Alex mentioned that he had already notified the client.', context: 'Reporting prior completed action.', audioText: 'Alex mentioned that he had already notified the client' },
      { text: 'She asked whether we supported GraphQL.', context: 'Reporting architectural inquiry.', audioText: 'She asked whether we supported GraphQL' },
      { text: 'The CEO stated that the company was expanding internationally.', context: 'Formal corporate reporting.', audioText: 'The CEO stated that the company was expanding internationally' },
      { text: 'He told the team not to push to production without testing.', context: 'Reported imperative command (told to / told not to).', audioText: 'He told the team not to push to production without testing' },
      { text: 'They warned us that the migration might take several hours.', context: 'Reported modal shift (may to might).', audioText: 'They warned us that the migration might take several hours' },
    ],
    realLifeExamples: [
      {
        text: 'My doctor told me that I needed to drink more water and get eight hours of sleep.',
        situation: 'Medical consultation follow-up.',
        context: 'Reported health recommendation (told me that I needed).',
      },
      {
        text: 'Emma said she was running ten minutes late because of traffic.',
        situation: 'Relaying a friend’s text message to people waiting at a restaurant.',
        context: 'Reported real-time status update.',
      },
      {
        text: 'The mechanic asked if I had noticed any strange noises when braking.',
        situation: 'Automotive inspection discussion.',
        context: 'Reported past question using IF and Past Perfect.',
      },
    ],
    professionalExamples: [
      {
        text: 'During yesterday’s sync, the product manager confirmed that the release date would remain unchanged.',
        context: 'Executive sprint status briefing.',
        tone: 'Crisp, accurate, professional',
      },
      {
        text: 'The security auditor asked whether all customer records in S3 were encrypted by default.',
        context: 'Compliance audit interview report.',
        tone: 'Formal, objective',
      },
      {
        text: 'The client told us that they were extremely satisfied with the sub-millisecond response times.',
        context: 'Quarterly account review summary.',
        tone: 'Affirmative, professional',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The DevOps team reported that the database replica had desynchronized during the network partition.',
        devContext: 'Post-incident timeline reporting.',
        analogy: 'Documenting an upstream service alert with historical accuracy.',
      },
      {
        text: 'The external vendor confirmed that their webhook service would retry failed deliveries three times.',
        devContext: 'Third-party integration architecture.',
        analogy: 'Reporting SLA specifications using future-in-the-past (WOULD).',
      },
      {
        text: 'The QA lead asked why the integration tests had failed on the staging environment.',
        devContext: 'CI/CD pipeline debugging.',
        analogy: 'Standard reported wh-order: `ask("why" + subject + verb)`.',
      },
    ],
    contrast: {
      conceptA: 'SAY (General Utterance)',
      conceptB: 'TELL (Transitive Personal Delivery)',
      differences: [
        { aspect: 'Personal Object', optionA: 'Does NOT require a person ("He said that...").', optionB: 'MUST have a personal recipient object ("He told ME that...").' },
        { aspect: 'Directional TO', optionA: 'If you want to mention a listener, you must use TO ("He said TO me").', optionB: 'Never use TO ("He told to me" is completely WRONG).' },
        { aspect: 'Imperative Commands', optionA: 'Cannot command directly without quote.', optionB: 'Ideal for instructions ("He told us to wait").' },
        { aspect: 'Questions', optionA: 'Not used for reporting questions.', optionB: 'Use ASK for questions ("He asked me if...").' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'He told to me that the build passed.',
        likelyIntention: 'Saying a colleague informed you of build status.',
        rootCause:
          'Incorrectly inserting "to" after the verb TELL. In English, TELL is directly transitive (Tell + Person).',
        naturalCorrection: 'He told me that the build passed. / He said to me that the build passed.',
        nativeCadence: 'Never say "told to me". Always say "told me".',
      },
      {
        learnerError: 'She asked me where was I going.',
        likelyIntention: 'Reporting a question someone asked you.',
        rootCause:
          'Using inverted question word order inside a reported clause. Reported questions become affirmative statements (Subject before Verb).',
        naturalCorrection: 'She asked me where I was going.',
        nativeCadence: 'Rule: Asked + Wh-word + SUBJECT + VERB.',
      },
      {
        learnerError: 'He said he will fix the bug yesterday.',
        likelyIntention: 'Reporting someone’s past promise.',
        rootCause:
          'Failing to backshift "will" to "would". "Will" refers to future from NOW; "would" refers to future from the PAST.',
        naturalCorrection: 'He said he would fix the bug yesterday.',
        nativeCadence: 'Backshift will ──► would when reporting past statements.',
      },
    ],
    nativeIntuition:
      'Native speakers naturally align their words with the present moment. If Bob said on Monday "I am tired", and today is Wednesday, Bob is no longer standing in front of you saying "am". You are reporting an event that happened in the past, so your brain shifts the verb to "was": "Bob said he was tired."',
    patternRecognitionExercises: [
      {
        id: 'rep-q1',
        prompt: 'Select the grammatically correct sentence reporting an inquiry about database credentials:',
        options: [
          'The security lead asked where was the API key stored.',
          'The security lead asked where the API key was stored.',
          'The security lead told where the API key was stored.',
          'The security lead asked to me where the API key was stored.',
        ],
        correctIndex: 1,
        explanation:
          'In reported questions, standard sentence order is used (Wh-word + Subject + Verb: "where the API key was stored"). Inversion ("where was...") is incorrect.',
      },
      {
        id: 'rep-q2',
        prompt: 'Which sentence correctly reports a coworker’s promise made yesterday morning?',
        options: [
          'She told to me she will send the pull request by noon.',
          'She said me she will send the pull request by noon.',
          'She told me that she would send the pull request by noon.',
          'She told me that she will sent the pull request by noon.',
        ],
        correctIndex: 2,
        explanation:
          '"Told me" correctly takes the direct personal object without "to", and "will" backshifts to "would" relative to the past reporting verb.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are summarizing the client’s feedback from yesterday’s product demo to your engineering team.',
        targetPattern: 'The client confirmed that they would + [Verb] + and asked if we could + [Verb]',
        hint: 'Use backshifted modals (would and could).',
        sampleAnswer: 'The client confirmed that they would review the pricing proposal by Friday and asked if we could provide a sandbox environment for testing.',
      },
      {
        scenario: 'Report what your team lead instructed you to do during an on-call escalation.',
        targetPattern: 'My lead told me to + [Base Verb]',
        hint: 'Use the reported imperative structure.',
        sampleAnswer: 'My lead told me to roll back the latest canary deployment immediately and monitor error rates in Datadog.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH NATURAL NARRATIVE FLOW: "She told me that the deployment had succeeded, and asked if I could verify the health endpoints."',
      timedChallenge:
        'Speak for 45 seconds reporting on your morning standup: report what two different team members said they were working on, what they said they had finished, and what they asked you to do.',
      durationSeconds: 45,
      roleplayPrompt:
        '"During our sync, Alex said he was refactoring the auth controller, while Maria confirmed that she had patched the memory leak in staging."',
    },
    recallTest: [
      {
        question: 'Why is "He told to me that he was ready" incorrect?',
        hiddenAnswer:
          'Because TELL takes an immediate personal object without any preposition: "He told me that he was ready." Only SAY uses "to" ("He said to me...").',
      },
      {
        question: 'What happens to word order in reported questions like "Where do you live?"',
        hiddenAnswer:
          'The inverted auxiliary is dropped, and normal Subject + Verb order is restored: "He asked where I lived" (NEVER "where did I live").',
      },
    ],
    revisionConnection:
      'Congratulations! You have completed Part 4: Sentence Construction & Dynamic Patterns. You are now fully equipped to build complex, sophisticated sentences with causatives, conditionals, relative lenses, and reported speech.',
    masteryChallenge:
      'In every meeting or status report today, consciously use "told me" (never "told to me") and ensure every reported question keeps the Subject before the Verb ("He asked where the file was").',
  },
];
