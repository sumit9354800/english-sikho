import { Chapter } from '../types';

export const PART_6_CHAPTERS: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // CHAPTER 73: ABILITY, POTENTIAL & ROOT CAPACITY
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-73',
    partNumber: 6,
    partTitle: 'The Modal & Intention Engine',
    chapterNumber: 73,
    title: 'Ability & Capacity Engine (CAN vs. COULD vs. BE ABLE TO)',
    subtitle: 'General Competence vs. Specific Realization: Why "I Could Fix the Bug" Sounds Incomplete',
    level: 'Tier 4',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'General Potential (Can/Could) ◄──► Single-Instance Historical Execution (Managed to / Was Able to)',
      mentalModel:
        'Think of modal verbs as voltage regulators on your statements. 1) CAN represents installed hardware capability or general open opportunity right now ("The server can process 10k RPS", "I can review your PR"). 2) COULD represents theoretical capability or past general ability ("In high school, I could run fast"). 3) WAS ABLE TO / MANAGED TO represents overcoming friction to achieve a specific, concrete, historical victory. Crucially: If you solved a specific crisis yesterday, you CANNOT say "Yesterday I could fix the outage" — that sounds like you had the theoretical ability but failed to do it. You must say "I was able to fix it" or "I managed to fix it".',
      whyEnglishUsesIt:
        'Misusing "could" for completed past triumphs makes the speaker sound hesitant or counterfactual. Saying "I could deploy the build" leaves native listeners waiting for the second shoe to drop: "...but someone blocked me". For a concrete win, English insists on "was/were able to" or "managed to".',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a toolbox in your garage: inside is a precision torque wrench that CAN loosen any stubborn bolt (General Capability). Now picture you kneeling by your car yesterday in the rain, struggling with a rusted lug nut for 40 minutes until finally cracking it loose: you WERE ABLE TO remove the bolt (Concrete Historical Win).',
      schematic: `
   [ THE ABILITY & REALIZATION ENGINE ]
   
   GENERAL CAPABILITY (Open Potential)        CONCRETE PAST TRIUMPH (Friction Overcome)
   ┌─────────────────────────────────────┐    ┌─────────────────────────────────────┐
   │ CAN / COULD                         │    │ WAS / WERE ABLE TO / MANAGED TO     │
   │ "I can write C++." (Skill exists)   │    │ "I was able to resolve the race     │
   │ "I could swim fast as a child."     │    │  condition after three hours."      │
   │ (General past trait)                │    │ (Specific historical breakthrough)  │
   └─────────────────────────────────────┘    └─────────────────────────────────────┘
   
   ⚠️ CRITICAL FAILURE:
   ❌ "Yesterday the server crashed, but I could restore the backup." (Sounds unfinished)
   ✅ "Yesterday the server crashed, but I was able to restore the backup." (Finished win)
`,
    },
    pattern: {
      formula: 'Present: Subject + CAN + V1 | Past General: Subject + COULD + V1 | Past Specific Win: Subject + WAS/WERE ABLE TO + V1',
      breakdown: [
        { element: 'CAN + Base Verb', meaning: 'Present capability, knowledge, or real opportunity ("We can scale horizontally").' },
        { element: 'COULD + Base Verb', meaning: '1) Past general lifelong ability, or 2) Present tentative/hypothetical suggestion ("We could try caching").' },
        { element: 'WAS/WERE ABLE TO + Base Verb', meaning: 'Successful achievement in a specific, individual, past challenge.' },
        { element: 'MANAGED TO + Base Verb', meaning: 'Emphasizes high friction, resistance, or difficulty overcome.' },
        { element: 'COULDN’T (Negative Exception)', meaning: 'Negative past failure works for both general AND specific: "I couldn’t fix it" is 100% natural.' },
      ],
      notes: 'Future Ability: Modals have no future form (no "will can"). You must use "will be able to": "By Q4 we will be able to support multi-region failover."',
    },
    basicExamples: [
      { text: 'I can read complex kernel trace logs.', context: 'Current technical skill.', audioText: 'I can read complex kernel trace logs' },
      { text: 'After debugging for three hours, I was able to isolate the memory leak.', context: 'Specific past milestone achieved.', audioText: 'After debugging for three hours I was able to isolate the memory leak' },
      { text: 'We managed to ship the release right before the midnight deadline.', context: 'Friction overcome under intense pressure.', audioText: 'We managed to ship the release right before the midnight deadline' },
      { text: 'When I was younger, I could stay awake coding all night without coffee.', context: 'General past physical trait.', audioText: 'When I was younger I could stay awake coding all night without coffee' },
      { text: 'We couldn’t reproduce the crash in our staging environment.', context: 'Negative specific past outcome (couldn’t is fully valid here).', audioText: 'We couldn’t reproduce the crash in our staging environment' },
      { text: 'With the new GPU cluster, our model will be able to train in six hours.', context: 'Future ability vector.', audioText: 'With the new GPU cluster our model will be able to train in six hours' },
      { text: 'Can you take a look at this stack trace when you have a free moment?', context: 'Polite present request for ability/availability.', audioText: 'Can you take a look at this stack trace when you have a free moment' },
      { text: 'We could migrate to DynamoDB if relational throughput becomes a bottleneck.', context: 'Tentative hypothetical option.', audioText: 'We could migrate to DynamoDB if relational throughput becomes a bottleneck' },
      { text: 'Despite the network partition, the raft leader was able to maintain quorum.', context: 'Resilient system overcoming an active barrier.', audioText: 'Despite the network partition the raft leader was able to maintain quorum' },
      { text: 'I haven’t been able to replicate the customer’s authentication failure.', context: 'Present perfect continuous ability boundary.', audioText: 'I haven’t been able to replicate the customer’s authentication failure' },
    ],
    realLifeExamples: [
      {
        text: 'The traffic was bumper-to-bumper on Highway 101, but we managed to catch our flight just as the gate was closing.',
        situation: 'Airport rush under high stress.',
        context: 'Overcoming friction (managed to catch) rather than theoretical ability.',
      },
      {
        text: 'My grandfather could speak five languages fluently, even though he never attended university.',
        situation: 'Family reminiscence.',
        context: 'Lifelong general capability in the past (could speak).',
      },
      {
        text: 'I locked myself out of my apartment, but luckily I was able to climb through the kitchen window.',
        situation: 'Household mishap.',
        context: 'Single-instance problem solved (was able to climb).',
      },
    ],
    professionalExamples: [
      {
        text: 'Through proactive connection pooling, we were able to reduce database CPU utilization by forty percent.',
        context: 'Quarterly engineering performance showcase.',
        tone: 'Conclusive, data-driven, accomplished',
      },
      {
        text: 'Could we schedule a thirty-minute architectural sync tomorrow morning to align on the schema definitions?',
        context: 'Direct message to a staff engineer.',
        tone: 'Diplomatic, courteous, low-friction',
      },
      {
        text: 'Our support squad was able to contain the security incident before any customer records were exfiltrated.',
        context: 'Executive incident briefing.',
        tone: 'Reassuring, authoritative, precise',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'By implementing bloom filters in the read path, the service was able to bypass ninety-five percent of unnecessary disk seeks.',
        devContext: 'Storage engine performance whitepaper.',
        analogy: 'A specific hardware-level optimization delivering concrete historical latency reduction.',
      },
      {
        text: 'We managed to hot-reload the TLS certificate without terminating active client WebSocket sessions.',
        devContext: 'Zero-downtime infrastructure maintenance log.',
        analogy: 'High-wire runtime operation executed successfully without packet loss.',
      },
      {
        text: 'Once the gateway v2 rollout finishes, client apps will be able to subscribe to binary event streams.',
        devContext: 'API capability roadmap document.',
        analogy: 'Unlocking new client-side capabilities in an upcoming deployment.',
      },
    ],
    contrast: {
      conceptA: 'COULD (General / Hypothetical)',
      conceptB: 'WAS ABLE TO / MANAGED TO (Concrete Victory)',
      differences: [
        { aspect: 'Past Application', optionA: 'General lifelong trait ("I could swim as a child").', optionB: 'Single specific past occurrence ("I was able to swim to shore yesterday").' },
        { aspect: 'Completion Signal', optionA: 'Leaves doubt; sounds like potential without realization.', optionB: 'Guarantees the event was completed and finalized.' },
        { aspect: 'Effort Connotation', optionA: 'Effortless or abstract potential.', optionB: 'Overcame tangible obstacles, bugs, or friction.' },
        { aspect: 'Hypothetical Mood', optionA: '"We could deploy today" (Option on the table).', optionB: '"We were able to deploy today" (Already in production).' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Yesterday after a long struggle, I could fix the production bug.',
        likelyIntention: 'Reporting that you successfully resolved a difficult issue yesterday.',
        rootCause:
          'Using "could" as the simple past of "can" for a specific one-off event. In native English, "could" implies capability, not necessarily completion.',
        naturalCorrection: 'Yesterday after a long struggle, I was able to fix the production bug. / I managed to fix the production bug.',
        nativeCadence: 'Specific past victories ALWAYS take "was able to" or "managed to".',
      },
      {
        learnerError: 'Next year our team will can deliver twice as many features.',
        likelyIntention: 'Expressing future ability.',
        rootCause: 'Attempting to chain two modal verbs ("will can"). Modal verbs cannot stack.',
        naturalCorrection: 'Next year our team will be able to deliver twice as many features.',
        nativeCadence: 'Future ability = "will be able to", never "will can".',
      },
      {
        learnerError: 'I am not able to come to the meeting today.',
        likelyIntention: 'Declining an invite due to a scheduling conflict.',
        rootCause: 'Using stiff formal "am not able to" where a natural native uses "can’t" or "won’t be able to".',
        naturalCorrection: 'I won’t be able to make it to the meeting today. / I can’t make the meeting today.',
        nativeCadence: 'For immediate upcoming commitments, say "I won’t be able to make it".',
      },
    ],
    nativeIntuition:
      'To a native speaker, "could" feels like a cloud floating in the sky: it holds moisture, but it has not rained yet. "Was able to" feels like water hitting the soil: the action actually transpired. If you use "could" for your hardest engineering triumphs, you accidentally rob yourself of the credit for finishing the job.',
    patternRecognitionExercises: [
      {
        id: 't73-q1',
        prompt: 'Choose the grammatically correct sentence reporting a resolved production incident:',
        options: [
          'The team could restore the replica database after two hours of downtime.',
          'The team was able to restore the replica database after two hours of downtime.',
          'The team will can restore the replica database after two hours of downtime.',
          'The team could to restore the replica database after two hours of downtime.',
        ],
        correctIndex: 1,
        explanation:
          'Because restoring the database was a specific past event that was successfully completed, "was able to restore" (or "managed to restore") is required.',
      },
      {
        id: 't73-q2',
        prompt: 'Which sentence correctly communicates an upcoming feature capability in Q3?',
        options: [
          'In Q3, users will can export their analytics dashboards as vector PDFs.',
          'In Q3, users can to export their analytics dashboards as vector PDFs.',
          'In Q3, users will be able to export their analytics dashboards as vector PDFs.',
          'In Q3, users could have export their analytics dashboards as vector PDFs.',
        ],
        correctIndex: 2,
        explanation:
          'Modal verbs like "can" cannot follow "will". The future of ability is "will be able to".',
      },
    ],
    productionPrompts: [
      {
        scenario: 'In an interview, describe a difficult technical blocker you successfully solved last month.',
        targetPattern: 'Although [Obstacle], I was able to [Action] by [Method]',
        hint: 'Use "was able to" or "managed to" to highlight the successful conclusion.',
        sampleAnswer: 'Although our primary Redis cluster ran out of memory, I was able to restore write availability within ten minutes by configuring an aggressive eviction policy.',
      },
      {
        scenario: 'Politely propose an alternative architecture to your team during a design review.',
        targetPattern: 'We could explore [Alternative] instead of [Current approach]',
        hint: 'Use "could" to make a soft, non-dogmatic technical suggestion.',
        sampleAnswer: 'We could explore using an asynchronous message queue here instead of synchronous HTTP calls to prevent cascading gateway timeouts.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES FOCUSING ON THE CRISP TRANSITION FROM "COULD" TO "WAS ABLE TO": "I knew the system could handle the traffic, and yesterday we were able to prove it under peak load."',
      timedChallenge:
        'Speak for 45 seconds describing your core engineering skills (CAN: "I can build..."), a tentative improvement idea (COULD: "We could optimize..."), and a tough bug you recently conquered (MANAGED TO: "Last sprint I managed to fix...").',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey Sarah, thanks to your patch we were able to mitigate the DNS latency spike before our European users noticed any degradation!"',
    },
    recallTest: [
      {
        question: 'Why is "Yesterday I could pass my driving test" unnatural to native ears?',
        hiddenAnswer:
          'Because passing a driving test is a concrete, single-instance past achievement. "Could" expresses general ability or hypothetical possibility, not a finished event. It must be: "Yesterday I was able to pass my driving test" or "Yesterday I passed my driving test".',
      },
      {
        question: 'Is "We couldn’t connect to the server" correct for a single past instance?',
        hiddenAnswer:
          'Yes! In the negative, "couldn’t" is completely natural for both general lifelong inability AND specific single-instance failures.',
      },
    ],
    revisionConnection:
      'With the root ability engine calibrated, Chapter 74 takes you onto the Epistemic Probability Spectrum: tuning certainty from 100% deductive absolute down to 20% tentative speculation.',
    masteryChallenge:
      'In your standup today, replace "I could complete the task" with "I was able to complete the task" or "I managed to finish the task". Feel the immediate boost in confidence.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 74: EPISTEMIC PROBABILITY & DEDUCTION SPECTRUM
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-74',
    partNumber: 6,
    partTitle: 'The Modal & Intention Engine',
    chapterNumber: 74,
    title: 'Epistemic Probability Spectrum (MUST, WILL, SHOULD, MAY, MIGHT, CAN’T)',
    subtitle: 'From 100% Deductive Certainty to 20% Speculation: Calibrating Technical Confidence',
    level: 'Tier 4',
    readingTimeMinutes: 18,
    dna: {
      coreConcept: 'The Certainty Rheostat: Tuning Intellectual Probability to Match Observable Evidence',
      mentalModel:
        'In technical communication, stating false certainty destroys credibility, while excessive vagueness displays weakness. English modal verbs are a finely calibrated precision slider for deductive probability: 1) MUST / CAN’T (95–99% Logical Deduction): Based on all available evidence, no other conclusion is mathematically possible ("The CPU is at 100%, the infinite loop must be here"). 2) WILL (100% Inevitable Prediction): "This will crash if inputs exceed 2GB". 3) SHOULD / OUGHT TO (75–85% Normal Expectation): Based on our design specs, this is what ought to happen if nothing unusual interferes. 4) MAY / MIGHT / COULD (30–50% Open Possibility / Speculation): "This might be a firewall issue; let me verify".',
      whyEnglishUsesIt:
        'Engineers who only use "maybe" or "definitely" sound binary and unsophisticated. Senior architects use the modal spectrum to communicate exact statistical conviction during triage and design reviews.',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine an incident command bridge with a large illuminated spectrum dial on the wall: at the far right is glowing green (100% WILL / MUST: Absolute Logical Certainty); in the center is steady amber (75% SHOULD: Expected Behavior); at the far left is flickering blue (20% MIGHT / COULD: Unconfirmed Speculation).',
      schematic: `
   [ THE EPISTEMIC PROBABILITY SPECTRUM ]
   
   CERTAINTY DIAL:
   100%  ═══════════════════════════════════════════════════════════════════► 0%
   [MUST / CAN'T]      [WILL]       [SHOULD]      [MAY]       [MIGHT/COULD]
   Logical Deduction   Inevitability Normal Expect  Realistic   Tentative
   "It must be down"   "It will run" "It should sync" "It may fail" "It might be DNS"
   
   ⚠️ THE CRUCIAL POLARITY PAIR:
   Positive Deduction: "It MUST be a permissions issue." (Evidence points here)
   Negative Deduction: "It CAN'T be a permissions issue." (We verified root access)
   ❌ NEVER: "It mustn't be a permissions issue." (Mustn't means forbidden, not impossible!)
`,
    },
    pattern: {
      formula: 'Subject + Modal [MUST | CAN’T | SHOULD | MAY | MIGHT | COULD] + Base Verb [V1]',
      breakdown: [
        { element: 'MUST (95%+ Deduction)', meaning: 'Positive deduction based on unmistakable clues: "The disk is full; that must be why writes are failing."' },
        { element: 'CAN’T (95%+ Negative Deduction)', meaning: 'Negative deduction: impossible based on known facts: "It can’t be a network drop; ping latency is 2ms."' },
        { element: 'SHOULD (80% Expectation)', meaning: 'Expected outcome assuming normal operating conditions: "The migration should complete in 15 minutes."' },
        { element: 'MAY (50% Likelihood)', meaning: 'Legitimate possibility based on known factors: "The upstream vendor may throttle our API keys."' },
        { element: 'MIGHT / COULD (30% Speculation)', meaning: 'Tentative conjecture or hypothesis: "It might be a thread contention issue, but I need thread dumps."' },
      ],
      notes: 'THE MUSTN’T TRAP: "You mustn’t" = You are strictly prohibited. To say something is logically impossible, you MUST use "can’t": "That can’t be true" (NEVER "That mustn’t be true").',
    },
    basicExamples: [
      { text: 'The lights are on in the server room; someone must be inside.', context: 'Logical deduction from visual evidence.', audioText: 'The lights are on in the server room someone must be inside' },
      { text: 'That can’t be the production database; the hostname says staging.', context: 'Negative deduction: certainty of impossibility.', audioText: 'That can’t be the production database the hostname says staging' },
      { text: 'If we trigger the backup now, it should finish before morning traffic picks up.', context: 'Reasonable operational expectation.', audioText: 'If we trigger the backup now it should finish before morning traffic picks up' },
      { text: 'The client may reject the payload if the JSON schema is missing mandatory fields.', context: 'Known realistic risk factor.', audioText: 'The client may reject the payload if the JSON schema is missing mandatory fields' },
      { text: 'It might take longer to backfill the data than originally estimated.', context: 'Tentative speculation warning.', audioText: 'It might take longer to backfill the data than originally estimated' },
      { text: 'The ingress controller must be dropping packets; look at the 502 error count.', context: 'High-probability technical deduction.', audioText: 'The ingress controller must be dropping packets look at the 502 error count' },
      { text: 'He can’t be the on-call engineer this week; he is on paternity leave.', context: 'Fact-based logical impossibility.', audioText: 'He can’t be the on-call engineer this week he is on paternity leave' },
      { text: 'The new index should dramatically decrease query response times.', context: 'Design-based engineering expectation.', audioText: 'The new index should dramatically decrease query response times' },
      { text: 'Could this deadlock be caused by uncommitted transactions?', context: 'Inquisitive speculative hypothesis in a technical huddle.', audioText: 'Could this deadlock be caused by uncommitted transactions' },
      { text: 'We might want to add rate limiting before launching to Product Hunt.', context: 'Gentle, well-calibrated strategic advice.', audioText: 'We might want to add rate limiting before launching to Product Hunt' },
    ],
    realLifeExamples: [
      {
        text: 'You have been driving for ten hours straight; you must be exhausted.',
        situation: 'Greeting a friend after a grueling road trip.',
        context: 'Logical empathy deduction based on observable context.',
      },
      {
        text: 'That can’t be Sarah over there; she told me she was flying to Tokyo this morning.',
        situation: 'Spotting someone who looks like a friend in a cafe.',
        context: 'Negative deduction based on conflicting factual evidence.',
      },
      {
        text: 'Take an umbrella with you; the sky looks dark and it might rain this afternoon.',
        situation: 'Leaving the house in autumn.',
        context: 'Uncertain future possibility based on meteorological cues.',
      },
    ],
    professionalExamples: [
      {
        text: 'Given that all replica nodes have synchronized their transaction logs, the failover process should execute without data loss.',
        context: 'System architect presenting a risk assessment to engineering directors.',
        tone: 'Measured, confident, authoritative',
      },
      {
        text: 'This anomaly can’t be attributed to user traffic; the spike occurred at 3:00 AM UTC with zero active sessions.',
        context: 'Security telemetry forensics presentation.',
        tone: 'Sharp, definitive, evidence-backed',
      },
      {
        text: 'We may encounter cross-region latency if we replicate payloads synchronously across European data centers.',
        context: 'Multi-region distributed system planning session.',
        tone: 'Prudent, analytical, realistic',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'With three hundred concurrent queries deadlocking on the accounts row, the thread pool must be starving.',
        devContext: 'Production incident triage diagnosis.',
        analogy: 'A bottleneck deduction deduced directly from telemetry metrics.',
      },
      {
        text: 'The consumer can’t be reading from partition zero; the offset has remained static for forty minutes.',
        devContext: 'Kafka streaming pipeline debugging.',
        analogy: 'Eliminating a hypothesis via immutable telemetry state.',
      },
      {
        text: 'Upgrading the runtime to Node 22 should reduce baseline memory footprints by roughly twenty percent.',
        devContext: 'Infrastructure optimization RFC proposal.',
        analogy: 'Informed technical expectation grounded in benchmark literature.',
      },
    ],
    contrast: {
      conceptA: 'MUST (Positive Deduction)',
      conceptB: 'CAN’T (Negative Deduction)',
      differences: [
        { aspect: 'Logical Vector', optionA: '100% conviction that something IS the case ("It must be a bug").', optionB: '100% conviction that something IS NOT possible ("It can’t be a bug").' },
        { aspect: 'Opposite of MUST', optionA: 'Negative deduction is CAN’T (NOT "mustn’t").', optionB: 'Positive counterpart is MUST.' },
        { aspect: 'Common Blunder', optionA: 'Never say: *"It must be not working"*.', optionB: 'Never say: *"It mustn’t be the database"*. Say: *"It can’t be the database"*.' },
        { aspect: 'Evidence Basis', optionA: 'Supported by positive signatures.', optionB: 'Supported by exclusionary proofs.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'The server is not responding, so it mustn’t be running.',
        likelyIntention: 'Deducing that the server is probably offline.',
        rootCause:
          'Assuming "mustn’t" is the negative of deductive "must". In English, "mustn’t" means prohibited ("You mustn’t touch that wire"). Deduction of impossibility requires "can’t".',
        naturalCorrection: 'The server is not responding, so it can’t be running. / ...it must not be running.',
        nativeCadence: 'For logical impossibility, ALWAYS say "It can’t be...".',
      },
      {
        learnerError: 'Maybe the deployment will succeed or maybe not, I am having fifty-fifty feeling.',
        likelyIntention: 'Communicating moderate technical uncertainty.',
        rootCause: 'Relying on informal filler and literal translations ("fifty-fifty feeling") instead of calibrated modals.',
        naturalCorrection: 'The deployment might encounter issues, but based on staging tests it should succeed.',
        nativeCadence: 'Use "might" for risks and "should" for the expected baseline.',
      },
      {
        learnerError: 'This code must to be refactored before merging.',
        likelyIntention: 'Expressing necessity.',
        rootCause: 'Adding "to" after a pure modal. Pure modals (must, can, should, may, might) are NEVER followed by "to".',
        naturalCorrection: 'This code must be refactored before merging.',
        nativeCadence: 'Modal + Bare Infinitive: "must be", "should review", "can deploy". Never "must to".',
      },
    ],
    nativeIntuition:
      'To a native speaker, modal verbs convey emotional and intellectual integrity. If you say "It is a cache bug" and it turns out to be a network partition, you appear reckless. If you say "It might be a cache bug, but given the 504 status it must be upstream", you instantly sound like a seasoned principal engineer who thinks in probabilities rather than absolutes.',
    patternRecognitionExercises: [
      {
        id: 't74-q1',
        prompt: 'Identify the correct sentence to express that an outcome is logically impossible based on evidence:',
        options: [
          'The pipeline mustn’t have failed because all green checkmarks are displayed.',
          'The pipeline can’t have failed because all green checkmarks are displayed.',
          'The pipeline won’t can fail because all green checkmarks are displayed.',
          'The pipeline shouldn’t to fail because all green checkmarks are displayed.',
        ],
        correctIndex: 1,
        explanation:
          'Negative logical deduction ("impossible given the evidence") is expressed with "can’t" (or "can’t have"), never "mustn’t".',
      },
      {
        id: 't74-q2',
        prompt: 'Which modal expresses a reasonable expectation based on standard system architecture?',
        options: [
          'With auto-scaling enabled, traffic spikes might crash the cluster.',
          'With auto-scaling enabled, traffic spikes must crash the cluster.',
          'With auto-scaling enabled, the cluster should handle the incoming traffic spikes smoothly.',
          'With auto-scaling enabled, the cluster can’t to handle the traffic spikes.',
        ],
        correctIndex: 2,
        explanation:
          '"Should" expresses standard expected behavior under normal operating assumptions.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are triaging an outage. Two servers are offline, but pinging the gateway works fine. Deduce the cause and eliminate an impossible cause.',
        targetPattern: 'It can’t be [X], so it must be [Y]',
        hint: 'Use "can’t be" for the eliminated theory and "must be" for your top deductive hypothesis.',
        sampleAnswer: 'Since the gateway responds immediately to ping requests, it can’t be a top-of-rack switch failure; it must be a localized power supply trip on rack four.',
      },
      {
        scenario: 'Give a measured risk assessment for tomorrow’s major database migration to your engineering VP.',
        targetPattern: 'The migration should [Expected Outcome], though we might [Potential Contingency]',
        hint: 'Balance expected success (should) with prudent caution (might).',
        sampleAnswer: 'The database migration should complete within the two-hour maintenance window, though we might encounter transient lock contention during the table re-indexing phase.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH CALIBRATED CONVICTION: "It can’t be a client-side error; with hundreds of simultaneous 500 responses, the auth service must be down."',
      timedChallenge:
        'Speak for 45 seconds analyzing an imaginary system failure: use "can’t be" to dismiss one false cause, "must be" for your prime suspect, and "should" for the expected recovery time.',
      durationSeconds: 45,
      roleplayPrompt:
        '"Team, look at the error logs. It can’t be an expired SSL certificate because the handshake succeeds. The database connection pool must be saturated; draining the queue should restore normal latency."',
    },
    recallTest: [
      {
        question: 'What is the critical semantic difference between "It mustn’t be true" and "It can’t be true"?',
        hiddenAnswer:
          '"It can’t be true" means it is logically impossible based on known facts (epistemic deduction). "It mustn’t be true" is non-standard or sounds like a prohibition / desperate wish ("It must not happen!"). Never use "mustn’t" for logical impossibility.',
      },
      {
        question: 'Why does an engineering lead say "The build should pass" instead of "The build will pass"?',
        hiddenAnswer:
          '"Will" guarantees certainty. If an unexpected flaky test fails, the speaker is wrong. "Should" conveys that all prerequisites are satisfied and success is expected under normal conditions, acknowledging that hidden variables could exist.',
      },
    ],
    revisionConnection:
      'From probabilities of truth, Chapter 75 pivots to deontic rules of action: Obligation, Necessity, and the razor-sharp boundary between MUST, HAVE TO, and MUSTN’T.',
    masteryChallenge:
      'In technical discussions today, eliminate the words "definitely" and "maybe". Calibrate your technical statements using MUST, SHOULD, MAY, MIGHT, and CAN’T.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 75: OBLIGATION, NECESSITY & PROHIBITION
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-75',
    partNumber: 6,
    partTitle: 'The Modal & Intention Engine',
    chapterNumber: 75,
    title: 'Obligation & Necessity Engine (MUST vs. HAVE TO vs. MUSTN’T vs. DON’T HAVE TO)',
    subtitle: 'Internal Urgency vs. External Mandates: The Fatal Trap of Confusing Prohibition with Freedom',
    level: 'Tier 4',
    readingTimeMinutes: 17,
    dna: {
      coreConcept: 'The Authority Boundary: Internal Drive (Must) vs. External Law (Have To) vs. Zero Obligation (Don’t Have To)',
      mentalModel:
        'Obligation in English is rooted in the source of authority. 1) MUST comes from the speaker’s personal conviction, moral urgency, or immediate authority ("I must finish this book", "You must see this demo!"). 2) HAVE TO comes from external laws, enterprise security policies, schedules, or physical realities ("I have to renew my passport", "All engineers have to rotate their passwords"). 3) THE FATAL NEGATIVE SPLIT: In the affirmative, MUST and HAVE TO are close cousins. In the negative, they are violently opposed: MUSTN’T = Absolute Prohibition (Strictly forbidden! Prison sentence, security breach!). DON’T HAVE TO = Complete Freedom (Zero obligation; you can if you want, but it is not required).',
      whyEnglishUsesIt:
        'Telling a client *"You mustn’t pay today"* tells them they are forbidden from paying. Saying *"You don’t have to pay today"* tells them payment is optional. Confusing these two creates severe diplomatic, legal, and operational damage.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture two doors in an enterprise office: Door 1 has a flashing red radioactive skull with an armed guard: "YOU MUST NOT ENTER" (Absolute prohibition; severe danger). Door 2 has an open turnstile with a sign: "EMPLOYEES DO NOT HAVE TO SHOW ID AFTER 6 PM" (No requirement; optional freedom).',
      schematic: `
   [ THE OBLIGATION & FREEDOM MATRIX ]
   
                     POSITIVE (Requirement)           NEGATIVE (Crucial Polarity!)
   ┌───────────────┬───────────────────────────────┬────────────────────────────────┐
   │ INTERNAL      │ MUST                          │ MUSTN'T                        │
   │ (Personal /   │ "I must write cleaner code."  │ "You mustn't commit secrets to │
   │  Urgent)      │ (Personal resolve)            │  git." (STRICT PROHIBITION)    │
   ├───────────────┼───────────────────────────────┼────────────────────────────────┤
   │ EXTERNAL      │ HAVE TO                       │ DON'T HAVE TO                  │
   │ (Rules / Law /│ "We have to comply with GDPR."│ "You don't have to join the    │
   │  Optionality) │ (External corporate mandate)  │  call." (ZERO OBLIGATION / OK) │
   └───────────────┴───────────────────────────────┴────────────────────────────────┘
   
   ⚠️ DANGER ZONE:
   ❌ "You mustn't attend the meeting if you are busy." (You are FORBIDDEN from attending!)
   ✅ "You don't have to attend the meeting if you are busy." (It's OPTIONAL; no obligation!)
`,
    },
    pattern: {
      formula: 'Prohibition: Subject + MUST NOT + V1 | No Obligation: Subject + DO/DOES NOT HAVE TO + V1',
      breakdown: [
        { element: 'MUST (Internal Drive)', meaning: 'Speaker imposes urgency: "I must refactor this messy function before I sleep."' },
        { element: 'HAVE TO (External Law)', meaning: 'External policy or circumstance forces action: "We have to log out every eight hours."' },
        { element: 'MUST NOT / MUSTN’T (Prohibition)', meaning: 'Strictly forbidden by law or catastrophic risk: "You mustn’t expose the private key."' },
        { element: 'DON’T / DOESN’T HAVE TO (Freedom)', meaning: 'Absence of obligation; completely optional: "You don’t have to deploy on Friday."' },
        { element: 'NEED TO / NEEDN’T', meaning: 'Practical operational necessity ("We need to upgrade the database engine").' },
      ],
      notes: 'Past Obligation: "Must" has NO past tense. You cannot say "Yesterday I must work". You MUST use "had to": "Yesterday I had to work late."',
    },
    basicExamples: [
      { text: 'You mustn’t share your two-factor authentication tokens with anyone.', context: 'Absolute security prohibition.', audioText: 'You mustn’t share your two factor authentication tokens with anyone' },
      { text: 'You don’t have to attend the optional design critique this afternoon.', context: 'Permitted absence; no obligation.', audioText: 'You don’t have to attend the optional design critique this afternoon' },
      { text: 'Every engineer has to complete SOC 2 compliance training by the end of Q3.', context: 'Mandatory company-wide policy.', audioText: 'Every engineer has to complete SOC two compliance training by the end of Q3' },
      { text: 'I must remember to back up my local dotfiles before wiping this laptop.', context: 'Personal internal priority.', audioText: 'I must remember to back up my local dotfiles before wiping this laptop' },
      { text: 'Yesterday our team had to roll back the migration due to an unexpected deadlock.', context: 'Past external necessity (HAD TO, never must).', audioText: 'Yesterday our team had to roll back the migration due to an unexpected deadlock' },
      { text: 'You don’t have to write documentation for internal test mocks.', context: 'Absence of necessity; developer freedom.', audioText: 'You don’t have to write documentation for internal test mocks' },
      { text: 'Engineers mustn’t bypass the pull request review gate under any circumstances.', context: 'Rigid organizational prohibition.', audioText: 'Engineers mustn’t bypass the pull request review gate under any circumstances' },
      { text: 'We have to rotate our AWS IAM credentials every ninety days.', context: 'Compliance-mandated routine.', audioText: 'We have to rotate our AWS IAM credentials every ninety days' },
      { text: 'Do we have to notify legal before launching this beta feature?', context: 'Inquiring about external enterprise constraints.', audioText: 'Do we have to notify legal before launching this beta feature' },
      { text: 'You needn’t worry about backward compatibility for this internal script.', context: 'Formal expression of zero necessity.', audioText: 'You needn’t worry about backward compatibility for this internal script' },
    ],
    realLifeExamples: [
      {
        text: 'You mustn’t feed chocolate to dogs; the theobromine in it is toxic to them.',
        situation: 'Warning a child about pet safety.',
        context: 'Direct physical hazard / absolute prohibition.',
      },
      {
        text: 'Tomorrow is a national holiday, so we don’t have to set an alarm tonight.',
        situation: 'Relaxing on Sunday evening before a long weekend.',
        context: 'Absence of duty or obligation (don’t have to).',
      },
      {
        text: 'I have to renew my driver’s license before the end of the month, or it expires.',
        situation: 'Civil administrative requirement.',
        context: 'External government deadline (have to).',
      },
    ],
    professionalExamples: [
      {
        text: 'According to our enterprise contract, we have to maintain ninety-nine point nine percent uptime across all production regions.',
        context: 'SRE SLA agreement review with stakeholders.',
        tone: 'Contractual, binding, formal',
      },
      {
        text: 'You mustn’t deploy code directly to production over SSH; all changes must pass through the automated CI/CD pipeline.',
        context: 'Onboarding a junior engineer to company security protocols.',
        tone: 'Direct, protective, unyielding',
      },
      {
        text: 'You don’t have to prepare formal slides for tomorrow’s retro; a bulleted list in Notion is more than sufficient.',
        context: 'Manager relieving pressure before an internal team session.',
        tone: 'Supportive, pragmatic, reassuring',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Database replicas do not have to process write transactions; all mutating queries route exclusively to the primary node.',
        devContext: 'Read/write database splitting architectural spec.',
        analogy: 'Architectural freedom / division of responsibilities.',
      },
      {
        text: 'Microservices mustn’t query another service’s persistent data store directly; they must communicate via published gRPC APIs.',
        devContext: 'Microservice domain boundary enforcement.',
        analogy: 'Strict anti-pattern prohibition.',
      },
      {
        text: 'When the active Kubernetes worker became unresponsive, the control plane had to reschedule fourteen stateful pods.',
        devContext: 'Cluster orchestration incident post-mortem.',
        analogy: 'Automated remediation driven by past external necessity (had to).',
      },
    ],
    contrast: {
      conceptA: 'MUSTN’T (Strict Prohibition)',
      conceptB: 'DON’T HAVE TO (Absence of Obligation)',
      differences: [
        { aspect: 'Meaning', optionA: 'Do NOT do it! It is forbidden, unsafe, or illegal.', optionB: 'You do not need to do it; you have complete choice.' },
        { aspect: 'Consequence of Action', optionA: 'Severe error, violation, outage, or penalty.', optionB: 'Completely harmless; just optional effort.' },
        { aspect: 'Social Tone', optionA: 'Commanding, protective, or regulatory.', optionB: 'Accommodating, flexible, and permission-granting.' },
        { aspect: 'Litmus Test', optionA: 'Can I do it anyway? NO, never.', optionB: 'Can I do it anyway? YES, if you wish.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'You mustn’t come to office tomorrow because it is optional work-from-home day.',
        likelyIntention: 'Informing a coworker that coming to the office is optional tomorrow.',
        rootCause:
          'Confusing prohibition (mustn’t) with optionality (don’t have to). This mistakenly tells the coworker they are barred from entering the building!',
        naturalCorrection: 'You don’t have to come to the office tomorrow because it’s an optional work-from-home day.',
        nativeCadence: 'Optional = "You don’t have to". Forbidden = "You mustn’t".',
      },
      {
        learnerError: 'Yesterday I must work until midnight to finish the deployment.',
        likelyIntention: 'Explaining that you were required to work late yesterday.',
        rootCause: 'Attempting to use "must" in the past tense. "Must" has no past form in English.',
        naturalCorrection: 'Yesterday I had to work until midnight to finish the deployment.',
        nativeCadence: 'Past obligation is ALWAYS "had to". Never "must" in the past.',
      },
      {
        learnerError: 'We don’t must commit our secrets to GitHub.',
        likelyIntention: 'Saying it is forbidden to commit secrets.',
        rootCause: 'Combining "don’t" with "must". Modals cannot take "do/don’t".',
        naturalCorrection: 'We mustn’t commit our secrets to GitHub. / We must not commit secrets to GitHub.',
        nativeCadence: 'Negative modal: "must not", never "don’t must".',
      },
    ],
    nativeIntuition:
      'To a native speaker, "mustn’t" triggers an instant alarm bell, like a referee blowing a whistle or a security guard grabbing your arm. Hearing *"You mustn’t submit the report today"* sounds like submitting it is a crime. If you simply meant it can wait until Monday, using "mustn’t" induces unnecessary panic. Always ask: "Is this forbidden, or merely optional?"',
    patternRecognitionExercises: [
      {
        id: 't75-q1',
        prompt: 'A team member asks if they are required to attend an optional sprint retrospective. What is the correct response?',
        options: [
          'No, you mustn’t attend if you have urgent bug fixes.',
          'No, you don’t have to attend if you have urgent bug fixes.',
          'No, you haven’t to attend if you have urgent bug fixes.',
          'No, you couldn’t attend if you have urgent bug fixes.',
        ],
        correctIndex: 1,
        explanation:
          'Because attendance is optional, there is no obligation: "you don’t have to attend". "You mustn’t attend" would mean attendance is strictly forbidden.',
      },
      {
        id: 't75-q2',
        prompt: 'Which sentence correctly describes a mandatory task completed yesterday?',
        options: [
          'Yesterday all developers must upgrade their local Docker daemons.',
          'Yesterday all developers had to upgrade their local Docker daemons.',
          'Yesterday all developers were having to upgrade their local Docker daemons.',
          'Yesterday all developers musted upgrade their local Docker daemons.',
        ],
        correctIndex: 1,
        explanation:
          'Because "must" has no past tense form, past necessity is always expressed with "had to".',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Draft a bullet point for your team’s Git hygiene guidelines warning against committing API keys, and clarifying that unit tests for UI prototypes are optional.',
        targetPattern: 'Developers mustn’t [Prohibited Action]; however, you don’t have to [Optional Action]',
        hint: 'Use "mustn’t" for the security violation and "don’t have to" for the optional testing.',
        sampleAnswer: 'Developers mustn’t commit plain-text API keys or credentials to public branches; however, you don’t have to write full integration tests for throwaway UI prototypes.',
      },
      {
        scenario: 'Explain to your project lead why you had to divert from your sprint goals yesterday afternoon.',
        targetPattern: 'Yesterday I had to [Action] because [External Necessity]',
        hint: 'Use "had to" for the past requirement.',
        sampleAnswer: 'Yesterday I had to drop my scheduled sprint tickets because our primary payment gateway triggered an urgent TLS certificate rotation.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH SHARP CONTRAST IN TONE: "You mustn’t push unreviewed code to main, but you don’t have to write documentation for internal scratchpads."',
      timedChallenge:
        'Speak for 45 seconds explaining your company’s engineering policies: name one strict security prohibition (MUSTN’T), one mandatory corporate rule (HAVE TO), and one perk or optional practice (DON’T HAVE TO).',
      durationSeconds: 45,
      roleplayPrompt:
        '"Remember team: you mustn’t bypass the security scanner before merging, but you don’t have to deploy on Friday if you prefer to wait until Monday morning."',
    },
    recallTest: [
      {
        question: 'Why can you never say "Yesterday I must attend the all-hands meeting"?',
        hiddenAnswer:
          '"Must" is defective and has no past tense form. To express necessity or obligation in the past, English requires "had to": "Yesterday I had to attend the all-hands meeting".',
      },
      {
        question: 'What disaster happens if a flight attendant tells passengers: "You don’t have to smoke on this flight"?',
        hiddenAnswer:
          '"You don’t have to smoke" means smoking is optional (you can smoke if you want to, but there is no requirement). The correct life-and-death instruction is: "You MUST NOT smoke on this flight" (strict legal prohibition).',
      },
    ],
    revisionConnection:
      'From rigid legal prohibitions, Chapter 76 moves to the nuanced world of Advice, Expectations, and Regret: SHOULD, OUGHT TO, HAD BETTER, and the power of SHOULD HAVE.',
    masteryChallenge:
      'Audit your written emails and team Slack channels today. If you told someone "You mustn’t worry", correct it immediately to "You don’t have to worry" or "There’s no need to worry".',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 76: ADVICE, EXPECTATION & REGRET
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-76',
    partNumber: 6,
    partTitle: 'The Modal & Intention Engine',
    chapterNumber: 76,
    title: 'Advice, Expectation & Regret (SHOULD vs. OUGHT TO vs. HAD BETTER vs. SHOULD HAVE + V3)',
    subtitle: 'From Gentle Guidance to Urgent Warnings: Post-Mortem Blamelessness vs. Personal Regret',
    level: 'Tier 4',
    readingTimeMinutes: 17,
    dna: {
      coreConcept: 'The Recommendation Gradient: Good Advice (Should) ◄──► Dire Warning (Had Better) ◄──► Counterfactual Regret (Should Have)',
      mentalModel:
        'Not all recommendations carry the same weight: 1) SHOULD / OUGHT TO represents constructive advice or best practices ("You should add an index here", "We ought to refactor this"). 2) HAD BETTER is NOT polite advice; it is a sharp, urgent warning backed by an imminent negative consequence ("We had better deploy this security patch right now, or our servers will be compromised"). 3) SHOULD HAVE + V3 looks backward at a missed opportunity or past mistake. In technical post-mortems, saying *"You should have tested this"* sounds accusatory and creates defensiveness. Senior leaders reframe it constructively: *"We should have had an automated integration test in place"*.',
      whyEnglishUsesIt:
        'Using "had better" casually with your manager ("You had better review my PR") sounds like an aggressive threat or ultimatum! Conversely, using weak "should" when a production server is literally melting fails to convey emergency priority.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a doctor consulting with a patient: 1) "You should drink more water and get eight hours of sleep" (Constructive lifestyle recommendation: SHOULD). 2) "You had better stop taking this medication immediately, or you will experience liver failure" (Urgent hazard warning: HAD BETTER). 3) Looking at a medical chart after an allergic reaction: "We should have checked your chart before prescribing this" (Backward-looking accountability: SHOULD HAVE).',
      schematic: `
   [ THE ADVICE & WARNING GRADIENT ]
   
   RECOMMENDATION (Constructive Best Practice)     URGENT WARNING (Negative Consequence Looming)
   ┌─────────────────────────────────────────┐    ┌─────────────────────────────────────────┐
   │ SHOULD / OUGHT TO                       │    │ HAD BETTER ('D BETTER)                  │
   │ "You should cache these static assets." │    │ "We'd better restart the node NOW,      │
   │ (Good engineering recommendation)       │    │  or memory exhaustion will crash it!"   │
   └─────────────────────────────────────────┘    └─────────────────────────────────────────┘
   
   BACKWARD COUNTERFACTUAL (The Post-Mortem Engine):
   ┌────────────────────────────────────────────────────────────────────────────────────────┐
   │ SHOULD HAVE + V3 (Past Regret / Accountability)                                        │
   │ ⚠️ Toxic & Accusatory: "You should have caught this bug in code review."              │
   │ ✅ Blameless Post-Mortem: "We should have implemented canary deployments."            │
   └────────────────────────────────────────────────────────────────────────────────────────┘
`,
    },
    pattern: {
      formula: 'Advice: Subject + SHOULD + V1 | Urgent Warning: Subject + HAD BETTER + V1 | Regret: Subject + SHOULD HAVE + V3',
      breakdown: [
        { element: 'SHOULD / OUGHT TO', meaning: 'Standard constructive recommendation or best practice.' },
        { element: 'HAD BETTER (\'D BETTER)', meaning: 'Urgent imperative with an explicit or implied negative penalty if ignored.' },
        { element: 'HAD BETTER NOT', meaning: 'Negative warning: "You’d better not touch that database while the migration is running."' },
        { element: 'SHOULD HAVE + V3', meaning: 'Past action that did not happen, resulting in regret or suboptimal outcome.' },
        { element: 'SHOULDN’T HAVE + V3', meaning: 'Past action that did happen, but was a mistake ("We shouldn’t have deployed on Friday").' },
      ],
      notes: 'Grammar Trap: "Had better" is present/future in meaning, despite containing the word "had". Never say "have better". Always "had better" or "\'d better".',
    },
    basicExamples: [
      { text: 'You should write unit tests for all public API endpoints.', context: 'Standard engineering best practice.', audioText: 'You should write unit tests for all public API endpoints' },
      { text: 'We had better leave for the airport now, or we will miss our flight.', context: 'Urgent time-sensitive warning with clear negative outcome.', audioText: 'We had better leave for the airport now or we will miss our flight' },
      { text: 'We should have backed up the database before running the schema migration.', context: 'Past regret / post-mortem realization.', audioText: 'We should have backed up the database before running the schema migration' },
      { text: 'You’d better not modify the production ingress rules without approval.', context: 'Negative warning backed by disciplinary or outage threat.', audioText: 'You’d better not modify the production ingress rules without approval' },
      { text: 'The deployment shouldn’t have gone live without end-to-end smoke tests.', context: 'Critique of a completed past error.', audioText: 'The deployment shouldn’t have gone live without end to end smoke tests' },
      { text: 'We ought to document this legacy onboarding sequence for the new hires.', context: 'Moral or professional duty recommendation.', audioText: 'We ought to document this legacy onboarding sequence for the new hires' },
      { text: 'You should take a break; you have been staring at that debugger for six hours.', context: 'Empathetic personal advice.', audioText: 'You should take a break you have been staring at that debugger for six hours' },
      { text: 'We had better check the disk space before initiating the five-terabyte restore.', context: 'Prudent technical precaution against catastrophic failure.', audioText: 'We had better check the disk space before initiating the five terabyte restore' },
      { text: 'I should have reviewed the pull request more thoroughly yesterday.', context: 'Personal professional accountability.', audioText: 'I should have reviewed the pull request more thoroughly yesterday' },
      { text: 'How should we handle unauthenticated webhook payloads?', context: 'Collaborative architectural advice inquiry.', audioText: 'How should we handle unauthenticated webhook payloads' },
    ],
    realLifeExamples: [
      {
        text: 'You had better put a coat on; the temperature outside is below freezing.',
        situation: 'Caring family member warning before leaving the house.',
        context: 'Direct urgent warning with health risk (had better).',
      },
      {
        text: 'I should have called my mother on her birthday yesterday; I feel terrible for forgetting.',
        situation: 'Personal reflection and emotional regret.',
        context: 'Past failure of duty resulting in guilt (should have called).',
      },
      {
        text: 'You should try the homemade sourdough at this bakery; it’s incredible.',
        situation: 'Friendly culinary recommendation.',
        context: 'Positive open suggestion (should try).',
      },
    ],
    professionalExamples: [
      {
        text: 'In our incident post-mortem, we identified that our monitoring probes should have alerted us ten minutes earlier.',
        context: 'Engineering post-mortem meeting with enterprise leadership.',
        tone: 'Blameless, objective, reflective',
      },
      {
        text: 'We had better patch this Log4j dependency immediately; automated exploit scanners are already probing our IP range.',
        context: 'Urgent security vulnerability mitigation call.',
        tone: 'Crisp, alarming, directive',
      },
      {
        text: 'We ought to establish clear architectural decision records so future squads understand our trade-offs.',
        context: 'Staff engineer mentoring senior tech leads.',
        tone: 'Visionary, principled, constructive',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The orchestrator should have routed traffic away from the degraded zone automatically when health checks failed.',
        devContext: 'Resilience engineering failure analysis.',
        analogy: 'An automated mechanism that failed to trigger as designed.',
      },
      {
        text: 'We’d better increase the maximum open file limit before running this high-concurrency load test.',
        devContext: 'Kernel resource tuning for load generation.',
        analogy: 'Preventing an inevitable OS socket exhaustion error.',
      },
      {
        text: 'Teams should decouple their domain events from database table schemas to avoid leaky abstractions.',
        devContext: 'Software engineering architecture manual.',
        analogy: 'A foundational design principle recommended for long-term maintainability.',
      },
    ],
    contrast: {
      conceptA: 'SHOULD (Constructive Advice)',
      conceptB: 'HAD BETTER (Urgent Warning of Consequences)',
      differences: [
        { aspect: 'Severity', optionA: 'Helpful recommendation; ignoring it has minor or delayed impact.', optionB: 'Urgent warning; ignoring it leads to immediate damage or penalty.' },
        { aspect: 'Social Distance', optionA: 'Polite, safe for peers, managers, and clients.', optionB: 'Aggressive or authoritarian if used upwards to managers or clients.' },
        { aspect: 'Implication', optionA: '"It would be wise or beneficial to do this."', optionB: '"Do this immediately, OR ELSE something bad will happen."' },
        { aspect: 'Formula', optionA: 'Subject + should + base verb.', optionB: 'Subject + had better / \'d better + base verb.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'You have better review my code before lunch.',
        likelyIntention: 'Asking your manager or peer to review your PR soon.',
        rootCause:
          'Using "have better" instead of "had better", and using an urgent warning ("had better") for a routine request. This sounds like an aggressive threat ("You better review it or else!").',
        naturalCorrection: 'Could you review my code before lunch if you get a chance? / We should review this PR before lunch.',
        nativeCadence: 'Never say "have better". For polite requests, use "Could you...". Reserve "had better" for emergencies.',
      },
      {
        learnerError: 'We should had deployed the fix yesterday.',
        likelyIntention: 'Expressing regret that the fix wasn’t deployed yesterday.',
        rootCause: 'Using "had" instead of "have" after the modal "should". Modals must be followed by base form "have".',
        naturalCorrection: 'We should have deployed the fix yesterday.',
        nativeCadence: 'Past modal formula is ALWAYS: Modal + HAVE + V3 ("should have deployed").',
      },
      {
        learnerError: 'You should to check the error logs.',
        likelyIntention: 'Advising a peer to inspect logs.',
        rootCause: 'Adding "to" after the bare modal "should".',
        naturalCorrection: 'You should check the error logs.',
        nativeCadence: '"Should" takes a bare verb: "You should check", never "should to check".',
      },
    ],
    nativeIntuition:
      'Native speakers feel a surge of adrenaline with "had better". When someone says "You’d better look at this", it conveys smoke coming from the engine or an alert sounding in the control room. If you use it for routine peer requests like "You’d better send the email", it sounds bossy and hostile. Use "should" or "could" for advice; save "had better" for imminent fires.',
    patternRecognitionExercises: [
      {
        id: 't76-q1',
        prompt: 'Choose the sentence that represents a blameless, professional post-mortem observation:',
        options: [
          'John should have been more careful when dropping the table.',
          'We should have had an automated safeguard preventing direct table drops.',
          'John had better not drop tables in production ever again.',
          'We should to have prevented the table drop with better permissions.',
        ],
        correctIndex: 1,
        explanation:
          'Blameless culture frames past counterfactuals around systemic safeguards ("We should have had an automated safeguard") rather than personal blame.',
      },
      {
        id: 't76-q2',
        prompt: 'Which sentence correctly conveys an emergency warning with an impending system crash?',
        options: [
          'We should kill the rogue process, or maybe later.',
          'We’d better kill the rogue process immediately, or the host will kernel panic.',
          'We have better kill the rogue process immediately.',
          'We ought kill the rogue process before it crashes.',
        ],
        correctIndex: 1,
        explanation:
          '"We\'d better kill... or [consequence]" correctly employs "had better" to signal an urgent hazard requiring immediate action.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'In an incident retrospective, articulate a systemic improvement without assigning individual blame to the engineer who merged the PR.',
        targetPattern: 'Moving forward, our CI pipeline should [Action], and in hindsight we should have [Safeguard]',
        hint: 'Use "should have" with "we" to emphasize collective engineering resilience.',
        sampleAnswer: 'Moving forward, our CI pipeline should enforce automated canary deployments, and in hindsight we should have caught this regression in our staging load tests.',
      },
      {
        scenario: 'Warn your on-call colleague about an imminent memory exhaustion event on the Redis cache cluster.',
        targetPattern: 'We’d better [Immediate Action], otherwise [Systemic Consequence]',
        hint: 'Use "We\'d better" with an explicit negative outcome.',
        sampleAnswer: 'We’d better scale up the Redis node size right now, otherwise the cache will exhaust its remaining RAM and begin dropping client writes.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES SHIFTING FROM ADVICE TO EMERGENCY: "You should review this PR when you can, but we’d better patch the auth gateway right now before attackers exploit it."',
      timedChallenge:
        'Speak for 45 seconds leading an engineering retro: share one best practice your team SHOULD adopt, one urgent precaution you’D BETTER take this week, and one past mistake you SHOULD HAVE handled differently.',
      durationSeconds: 45,
      roleplayPrompt:
        '"Looking back at yesterday’s outage, we should have configured automated dead-letter queues. We’d better implement them before next Tuesday’s product launch!"',
    },
    recallTest: [
      {
        question: 'Why is "You had better send me the report" risky when speaking to a senior manager or client?',
        hiddenAnswer:
          '"Had better" carries an implied threat or ultimatum ("Do this or you will suffer bad consequences"). Upward communication requires diplomatic requests like "Could you please send me the report when you have a moment?".',
      },
      {
        question: 'What is the structural formula for expressing past regret or missed technical opportunity?',
        hiddenAnswer:
          'Subject + SHOULD HAVE + Past Participle (V3). Example: "We should have configured rate limiting earlier."',
      },
    ],
    revisionConnection:
      'Now that you can calibrate advice and warnings, Chapter 77 introduces the most career-defining tool in English: The Executive Politeness Ladder & Social Distance Engine.',
    masteryChallenge:
      'In today’s communications, pay attention to how you recommend changes in code reviews. Replace blunt commands like "Fix this" or "You must change this" with "We should consider refactoring this to improve readability".',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 77: THE POLITENESS LADDER & SOCIAL DISTANCE ENGINE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-77',
    partNumber: 6,
    partTitle: 'The Modal & Intention Engine',
    chapterNumber: 77,
    title: 'The Politeness Ladder & Social Distance Engine',
    subtitle: 'From Blunt Demands to Executive Diplomacy: CAN vs. COULD vs. WOULD YOU MIND',
    level: 'Tier 4',
    readingTimeMinutes: 18,
    dna: {
      coreConcept: 'The Friction Dial: Adding Grammatical Distance to Soften Imposition and Preserve Professional Relationships',
      mentalModel:
        'In English culture, direct imperatives ("Send me the file", "Explain this code") are interpreted as aggressive commands, even if you add the word "please" ("Please send me the file" can still feel icy and demanding). English uses MODAL DISTANCING as an optical cushion. Moving from present modals (CAN, WILL) to hypothetical/past modals (COULD, WOULD) steps back in psychological space. The 5 Rungs of the Politeness Ladder: 1) Imperative: "Review this" (Rude / Bossy). 2) Polite Imperative: "Please review this" (Stiff / Cold). 3) Present Modal: "Can you review this?" (Casual peer-to-peer). 4) Hypothetical Modal: "Could you review this?" (Standard professional diplomacy). 5) Executive Framing: "Would you mind reviewing this when you get a chance?" or "I was wondering if you might have time to review this" (Flawless executive grace).',
      whyEnglishUsesIt:
        'Many international engineers are labeled as "rude", "curt", or "blunt" in cross-functional collaboration not because of their intent, but because their native languages use honorific suffixes rather than grammatical modal distancing. Mastering the Politeness Ladder instantly bridges this cultural gap.',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine stepping into an elevator with a stranger: standing 2 inches from their face is the Imperative ("Give me the report!"). Stepping back to a comfortable arm’s length is the Hypothetical Modal ("Could you share the report?"). Offering a gracious smile with a slight bow from across the room is Executive Framing ("Would you mind sharing the report whenever convenient?").',
      schematic: `
   [ THE EXECUTIVE POLITENESS LADDER ]
   
   LEVEL 5: Executive Grace  ──► "Would you mind taking a look at this PR when you have a moment?"
   LEVEL 4: Hypothetical     ──► "Could you review this PR today?" / "Would you be open to..."
   LEVEL 3: Casual Peer      ──► "Can you review this PR?"
   LEVEL 2: Stiff Direct     ──► "Please review this PR." (Often feels cold or demanding!)
   LEVEL 1: Imperative       ──► "Review this PR." (Blunt command; causes friction)
   
   ⚠️ THE "WOULD YOU MIND" SYNTAX TRAP:
   Formula: Would you mind + [VERB + -ING]
   ✅ "Would you mind REVIEWING this?"
   ❌ "Would you mind to review this?"
   
   AND THE ANSWERING INVERSION:
   Question: "Would you mind helping me?"
   Answer: "Not at all! Happy to help." (Saying "Yes" means "Yes, I mind; leave me alone!")
`,
    },
    pattern: {
      formula: 'Direct: Can you + V1 | Diplomatic: Could you + V1 | Executive: Would you mind + Verb-ING',
      breakdown: [
        { element: 'Can you + V1', meaning: 'Standard informal request between close engineering peers.' },
        { element: 'Could you + V1', meaning: 'Safe, universally polite professional request for coworkers and cross-functional partners.' },
        { element: 'Would you be able to + V1', meaning: 'Inquires about availability and bandwidth rather than willingness.' },
        { element: 'Would you mind + Verb-ING', meaning: 'Maximum deference and social grace for executives, clients, and busy stakeholders.' },
        { element: 'I was wondering if you could...', meaning: 'Soft past-continuous opening that completely removes pressure.' },
      ],
      notes: 'Answering "Would you mind?": Remember that "mind" means "object to". To agree happily, say "Not at all!", "Sure thing!", or "Of course!"',
    },
    basicExamples: [
      { text: 'Could you please send over the latest schema migrations?', context: 'Standard respectful workplace request.', audioText: 'Could you please send over the latest schema migrations' },
      { text: 'Would you mind taking a quick look at this pull request?', context: 'Executive-level low-friction request.', audioText: 'Would you mind taking a quick look at this pull request' },
      { text: 'Would you be open to jumping on a brief five-minute huddle?', context: 'Inviting a colleague without demanding their time.', audioText: 'Would you be open to jumping on a brief five minute huddle' },
      { text: 'I was wondering if you might have a few minutes to review our RFC.', context: 'Ultra-diplomatic approach to a staff architect.', audioText: 'I was wondering if you might have a few minutes to review our RFC' },
      { text: 'Can you check if the webhook endpoint is reachable from your IP?', context: 'Casual request between close peers in a Slack channel.', audioText: 'Can you check if the webhook endpoint is reachable from your IP' },
      { text: 'Would you mind if I pushed back our one-on-one by half an hour?', context: 'Politely requesting a schedule adjustment.', audioText: 'Would you mind if I pushed back our one on one by half an hour' },
      { text: 'Could we possibly revisit this caching decision in next week’s sprint?', context: 'Softening technical disagreement.', audioText: 'Could we possibly revisit this caching decision in next week’s sprint' },
      { text: 'I would appreciate your thoughts on this database indexing strategy.', context: 'Framing request as valuing the other person’s expertise.', audioText: 'I would appreciate your thoughts on this database indexing strategy' },
      { text: 'Do you happen to know who manages the production Kubernetes cluster?', context: 'Low-pressure indirect inquiry.', audioText: 'Do you happen to know who manages the production Kubernetes cluster' },
      { text: 'Would it make sense to decouple these two services before the release?', context: 'Constructive architectural challenge framed as a shared inquiry.', audioText: 'Would it make sense to decouple these two services before the release' },
    ],
    realLifeExamples: [
      {
        text: 'Would you mind passing the salt and pepper across the table?',
        situation: 'Formal dinner party conversation.',
        context: 'Polite table etiquette avoiding reach or command.',
      },
      {
        text: 'Could you keep an eye on my laptop for two minutes while I grab a coffee?',
        situation: 'Asking a fellow patron in a public library or cafe.',
        context: 'Courteous social request to a stranger.',
      },
      {
        text: 'I was wondering if you might have a phone charger I could borrow for an hour?',
        situation: 'Coworker at an unfamiliar office branch.',
        context: 'Low-pressure favor request.',
      },
    ],
    professionalExamples: [
      {
        text: 'Would you mind walking our leadership team through the key security enhancements introduced in this patch?',
        context: 'Directing a senior engineer to present during an executive briefing.',
        tone: 'Empowering, polished, respectful',
      },
      {
        text: 'I was hoping to get your feedback on our Q4 capacity model before we submit it to finance.',
        context: 'Collaborating with a principal engineer on budget forecasts.',
        tone: 'Collegial, diplomatic, collaborative',
      },
      {
        text: 'Could we explore whether an asynchronous event bus might be better suited for this workload?',
        context: 'Challenging a synchronous architecture in a design doc review.',
        tone: 'Non-defensive, intellectual, inquiring',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Would you mind adding a comment explaining the regex pattern in line forty-two for future maintainers?',
        devContext: 'Constructive GitHub code review comment.',
        analogy: 'Polite code review critique that preserves team morale.',
      },
      {
        text: 'Could you verify that the idempotency key prevents duplicate charges when the payment timeout triggers?',
        devContext: 'Quality assurance test plan alignment.',
        analogy: 'Prompting a peer to verify critical edge-case coverage.',
      },
      {
        text: 'Would it be possible to cherry-pick this commit into the release branch before the tag is generated?',
        devContext: 'Release engineering coordination in Slack.',
        analogy: 'Requesting an out-of-band pipeline modification politely.',
      },
    ],
    contrast: {
      conceptA: 'Direct Imperative ("Please do this")',
      conceptB: 'Modal Distance ("Could you / Would you mind")',
      differences: [
        { aspect: 'Perceived Tone', optionA: 'Can sound curt, commanding, or cold in written English.', optionB: 'Warm, collaborative, deferential, and professional.' },
        { aspect: 'Power Dynamic', optionA: 'Commands the listener; implies hierarchical superiority.', optionB: 'Respects listener’s autonomy and busy schedule.' },
        { aspect: 'Refusal Ease', optionA: 'Makes saying "no" awkward and confrontational.', optionB: 'Allows the other person to decline gracefully without conflict.' },
        { aspect: 'Executive Impact', optionA: 'Often perceived as junior or socially unaware.', optionB: 'Hallmark of executive presence and senior leadership.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Please do the needful and review my PR immediately.',
        likelyIntention: 'Asking a colleague to review your pull request promptly.',
        rootCause:
          'Using archaic bureaucratic Indian English ("do the needful") paired with an urgent imperative ("immediately"). Native speakers perceive this as both dated and abrasive.',
        naturalCorrection: 'Could you review my PR when you have a moment? I’d really appreciate your feedback.',
        nativeCadence: 'Banish "do the needful" forever. Use "Could you take a look when you have a chance?".',
      },
      {
        learnerError: 'Would you mind to approve the deployment?',
        likelyIntention: 'Asking an engineering lead to approve a production release.',
        rootCause:
          'Using an infinitive ("to approve") after "would you mind". "Mind" governs a gerund (-ING).',
        naturalCorrection: 'Would you mind approving the deployment? / Could you approve the deployment?',
        nativeCadence: 'Rule: "Would you mind" + VERB-ING ("approving", "checking", "sharing").',
      },
      {
        learnerError: 'Person A: "Would you mind helping me?" Person B: "Yes, sure!"',
        likelyIntention: 'Eagerly agreeing to help someone.',
        rootCause:
          'Literal translation. In English, answering "Yes" to "Do you mind?" technically means "Yes, I mind (I object)!".',
        naturalCorrection: 'Person B: "Not at all! Happy to help." / "Sure thing!"',
        nativeCadence: 'To accept: "Not at all!", "Sure!", or "Of course!". Never answer "Yes" to "Would you mind?".',
      },
    ],
    nativeIntuition:
      'In Anglo-American business culture, social lubricant is everything. Direct imperatives create micro-friction that accumulates over time into team resentment. When you use modal cushioning like "Would you be open to..." or "Could we possibly...", you aren’t being weak — you are signaling high emotional intelligence, respect for boundaries, and collaborative seniority.',
    patternRecognitionExercises: [
      {
        id: 't77-q1',
        prompt: 'Select the most diplomatic code review comment for suggesting a simpler refactor:',
        options: [
          'Please rewrite this function using map and filter.',
          'You should to rewrite this function using map and filter.',
          'Would you be open to exploring whether map and filter might simplify this logic?',
          'Rewrite this function because it is too complex.',
        ],
        correctIndex: 2,
        explanation:
          '"Would you be open to exploring whether..." is the pinnacle of collaborative, non-dogmatic code review feedback.',
      },
      {
        id: 't77-q2',
        prompt: 'How should you naturally accept a request when a coworker asks: "Would you mind taking notes in today’s standup?"',
        options: [
          'Yes, I will take notes.',
          'Not at all, I’d be glad to.',
          'Yes, of course I mind.',
          'I don’t have to mind.',
        ],
        correctIndex: 1,
        explanation:
          'Answering "Not at all" means "I do not object", which is the universal native way to enthusiastically accept a "Would you mind" request.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You need an urgent architectural sign-off from a very busy Principal Engineer who sits two levels above you.',
        targetPattern: 'I was wondering if you might have five minutes to [Action], whenever [Graceful buffer]',
        hint: 'Use the past continuous opening with modal "might" for maximum executive deference.',
        sampleAnswer: 'I was wondering if you might have five minutes to glance over our auth schema changes, whenever convenient for you today.',
      },
      {
        scenario: 'Politely push back on an unreasonable feature deadline proposed by a product manager in a team meeting.',
        targetPattern: 'Could we explore [Alternative timeline], so that we can ensure [Quality justification]?',
        hint: 'Frame the pushback as a constructive question about quality rather than a flat refusal.',
        sampleAnswer: 'Could we explore targeting next sprint for the secondary analytics tab, so that we can ensure thorough end-to-end load testing on the core checkout flow?',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH WARM, CALM EXECUTIVE CADENCE: "Would you mind taking a quick look at this PR when you get a chance? Not at all, happy to help!"',
      timedChallenge:
        'Speak for 45 seconds climbing the Politeness Ladder: take a simple request ("Send me the logs") and rephrase it across all 4 levels: casual peer (CAN), professional (COULD), indirect (I WAS WONDERING), and executive grace (WOULD YOU MIND).',
      durationSeconds: 45,
      roleplayPrompt:
        '"Hey Marcus, would you mind jumping into our incident bridge for five minutes? We’d really appreciate your expertise on this Kafka consumer group lag."',
    },
    recallTest: [
      {
        question: 'Why can "Please send the file" sound aggressive or curt to a native speaker, despite containing "please"?',
        hiddenAnswer:
          'Because grammatically it remains an imperative command. In written professional English, pairing an imperative with "please" often sounds like an impatient boss tapping their foot or scolding a subordinate. Modal questions ("Could you send...") invite willing collaboration.',
      },
      {
        question: 'What is the grammatical rule following "Would you mind"?',
        hiddenAnswer:
          '"Would you mind" MUST be followed by a gerund (Verb + -ING). Example: "Would you mind sharing your screen?", never "Would you mind to share".',
      },
    ],
    revisionConnection:
      'With executive diplomacy in your toolkit, Chapter 78 explores Hypothetical Intention and Stance: WOULD vs. USED TO vs. WOULD RATHER, navigating imagined architectures and past habits.',
    masteryChallenge:
      'Eliminate the phrase "Please do the needful" and every raw imperative in your written messages today. Frame every cross-functional request as "Could you..." or "Would you mind...". Watch how much faster colleagues respond.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 78: HYPOTHETICAL INTENTION & STANCE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-78',
    partNumber: 6,
    partTitle: 'The Modal & Intention Engine',
    chapterNumber: 78,
    title: 'Hypothetical Intention & Stance (WOULD vs. USED TO vs. WOULD RATHER)',
    subtitle: 'Imagined Realities, Past Nostalgia, and Diplomatic Softeners',
    level: 'Tier 4',
    readingTimeMinutes: 16,
    dna: {
      coreConcept: 'The Imagined Canvas: Stepping Out of the Concrete Present to Simulate Alternative Universes',
      mentalModel:
        'WOULD is the Swiss Army knife of English stance. It has three distinct superpowers: 1) The Imagined Universe (Hypothetical Consequence): "If we had unlimited budget, I would build a custom datacenter". 2) Past Nostalgic Routine (Repeated Action): "Every summer in college, we would spend all night hacking on open source" (Contrasted with USED TO, which can also handle past states: "I used to live in Seattle", NEVER "would live"). 3) The Opinion Softener: Saying "I think that’s a bad idea" is harsh; saying "I would hesitate to adopt that library" or "I would argue that caching is safer" cushions your stance with intellectual elegance.',
      whyEnglishUsesIt:
        'Engineers who don’t use WOULD sound dogmatic and rigid. WOULD creates an exploratory sandbox where teams can brainstorm scenarios, express preferences (WOULD RATHER), and soften critiques without triggering defensiveness.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a virtual reality headset: when you put it on, you enter an alternate digital sandbox where physics can be simulated before building real bridges (The Hypothetical "WOULD"). Now picture an old photo album of your first programming job: flipping through pages of late-night pizza sessions (Past Routine "WOULD" / "USED TO").',
      schematic: `
   [ THE THREE FACES OF "WOULD" ]
   
   1. HYPOTHETICAL WORLD SIMULATION
   ┌────────────────────────────────────────────────────────────────────────┐
   │ "If we switched to Rust, our CPU utilization WOULD drop by half."      │
   │ (Simulating an unrealized architectural condition)                     │
   └────────────────────────────────────────────────────────────────────────┘
   
   2. PAST NOSTALGIC HABIT (Actions only, NOT states!)
   ┌────────────────────────────────────────────────────────────────────────┐
   │ "In our early startup days, we WOULD ship updates directly to main."   │
   │ ⚠️ Crucial: "I used to be a frontend dev" (State: USED TO only!)        │
   │ ❌ NEVER: "I would be a frontend dev."                                 │
   └────────────────────────────────────────────────────────────────────────┘
   
   3. EXECUTIVE OPINION SOFTENER
   ┌────────────────────────────────────────────────────────────────────────┐
   │ "I WOULD recommend waiting for the benchmark results."                 │
   │ "I WOULD argue that reliability takes precedence over velocity here."   │
   └────────────────────────────────────────────────────────────────────────┘
`,
    },
    pattern: {
      formula: 'Hypothetical: Subject + WOULD + V1 | Preference: Subject + WOULD RATHER + V1 | Habit: Subject + WOULD / USED TO + V1',
      breakdown: [
        { element: 'WOULD + V1 (Hypothetical)', meaning: 'Simulates outcome of an imagined or conditional trigger.' },
        { element: 'WOULD RATHER + Bare Verb', meaning: 'Expresses preference: "I’d rather use Postgres than Mongo for this."' },
        { element: 'WOULD RATHER + Subject + Past V2', meaning: 'Preference for someone else’s action: "I’d rather you didn’t push directly to main."' },
        { element: 'USED TO vs. WOULD (Past Habit)', meaning: 'USED TO handles both states and actions; WOULD only handles repeated actions.' },
        { element: 'Opinion Softeners', meaning: 'I would suggest, I would imagine, It would seem, That would be great.' },
      ],
      notes: 'WOULD RATHER Trap: Followed by BARE infinitive (no "to"): "I’d rather die than use PHP" (never "rather to die").',
    },
    basicExamples: [
      { text: 'I would recommend running a benchmark test before finalizing the database choice.', context: 'Softened technical advice.', audioText: 'I would recommend running a benchmark test before finalizing the database choice' },
      { text: 'If we had more time, I would refactor the authentication middleware.', context: 'Hypothetical conditional simulation.', audioText: 'If we had more time I would refactor the authentication middleware' },
      { text: 'I would rather use gRPC than REST for inter-service communication.', context: 'Expressing technical preference.', audioText: 'I would rather use gRPC than REST for inter service communication' },
      { text: 'Back in university, we would spend hours debugging C pointers in the computer lab.', context: 'Nostalgic past repeated action.', audioText: 'Back in university we would spend hours debugging C pointers in the computer lab' },
      { text: 'I used to live in Berlin, but now I live in Zurich.', context: 'Past state (USED TO required; "would" impossible here).', audioText: 'I used to live in Berlin but now I live in Zurich' },
      { text: 'That would be wonderful; thank you for offering to help.', context: 'Gracious acceptance of support.', audioText: 'That would be wonderful thank you for offering to help' },
      { text: 'I’d rather you didn’t merge this PR until the security scan finishes.', context: 'Polite preference regarding another person’s behavior.', audioText: 'I’d rather you didn’t merge this PR until the security scan finishes' },
      { text: 'It would seem that our connection pool is exhausting its allocated limits.', context: 'Diplomatic deduction cushion.', audioText: 'It would seem that our connection pool is exhausting its allocated limits' },
      { text: 'How would you architect this feature if scalability were our primary constraint?', context: 'Inquisitive system design prompt.', audioText: 'How would you architect this feature if scalability were our primary constraint' },
      { text: 'We used to have weekly all-hands meetings, but now we do them biweekly.', context: 'Past institutional state/habit.', audioText: 'We used to have weekly all hands meetings but now we do them biweekly' },
    ],
    realLifeExamples: [
      {
        text: 'I’d rather stay home and cook dinner tonight than go out to a noisy restaurant.',
        situation: 'Discussing evening plans with a partner.',
        context: 'Expressing personal comfort preference (would rather).',
      },
      {
        text: 'When we were kids, my brother and I would build tree forts in the backyard every summer.',
        situation: 'Sharing childhood memories.',
        context: 'Nostalgic past habitual action (would build).',
      },
      {
        text: 'I used to own an old vintage motorcycle, but I sold it when my daughter was born.',
        situation: 'Casual conversation at a social gathering.',
        context: 'Past state of ownership (used to own, never "would own").',
      },
    ],
    professionalExamples: [
      {
        text: 'I would argue that investing in automated testing now will yield tenfold returns in developer velocity next quarter.',
        context: 'Staff engineer advocating for tech debt remediation in a sprint planning meeting.',
        tone: 'Persuasive, diplomatic, authoritative',
      },
      {
        text: 'If our ingress gateway were compromised, what fallback authorization mechanisms would take over?',
        context: 'Threat modeling and security architecture review.',
        tone: 'Incisive, hypothetical, rigorous',
      },
      {
        text: 'We would be delighted to partner with your team on the upcoming unified telemetry platform.',
        context: 'Cross-functional executive alignment email.',
        tone: 'Gracious, collaborative, polished',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Adopting an event-driven architecture would allow our downstream services to consume order events asynchronously.',
        devContext: 'Architecture Decision Record (ADR) rationale.',
        analogy: 'Modeling future system capability under an imagined architectural pattern.',
      },
      {
        text: 'I’d rather accept slight eventual consistency than sacrifice our five-nines write availability SLA.',
        devContext: 'CAP theorem trade-off decision in distributed storage.',
        analogy: 'A definitive engineering preference balancing consistency against availability.',
      },
      {
        text: 'Our legacy monolith used to maintain long-lived stateful sessions inside sticky server memory.',
        devContext: 'Cloud migration retrospection.',
        analogy: 'Describing an obsolete historical architectural state.',
      },
    ],
    contrast: {
      conceptA: 'USED TO (States & Actions)',
      conceptB: 'WOULD (Actions Only in Past)',
      differences: [
        { aspect: 'Past Stative Verbs', optionA: 'Fully valid: "I used to have a dog", "I used to live in Ohio".', optionB: 'Strictly forbidden: ❌ "I would have a dog", ❌ "I would live in Ohio".' },
        { aspect: 'Repeated Past Actions', optionA: 'Valid: "We used to play chess every Friday."', optionB: 'Valid & more poetic: "We would play chess every Friday."' },
        { aspect: 'Present Connection', optionA: 'Emphasizes that the state is 100% finished and no longer true.', optionB: 'Focuses on the nostalgic rhythm of the past activity.' },
        { aspect: 'Hypothetical Mood', optionA: 'Cannot be used for hypothetical futures.', optionB: 'The primary engine of conditionals ("I would do X if Y").' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'When I was in college, I would be very shy.',
        likelyIntention: 'Describing your past personality trait.',
        rootCause:
          'Using "would" with the stative verb "be". Past habitual "would" can only be used with dynamic action verbs (run, play, study). Past states require "used to".',
        naturalCorrection: 'When I was in college, I used to be very shy.',
        nativeCadence: 'Stative traits in the past ALWAYS use "used to be", never "would be".',
      },
      {
        learnerError: 'I would rather to rewrite this in Go.',
        likelyIntention: 'Expressing your technical preference.',
        rootCause: 'Adding "to" after "would rather". "Would rather" is followed by a bare infinitive.',
        naturalCorrection: 'I would rather rewrite this in Go.',
        nativeCadence: '"Would rather" + Bare Verb: "rather rewrite", "rather wait", "rather deploy".',
      },
      {
        learnerError: 'If I will be promoted, I would buy a new car.',
        likelyIntention: 'Expressing a hypothetical future.',
        rootCause: 'Putting "will" inside the "if" condition clause.',
        naturalCorrection: 'If I were promoted, I would buy a new car. / If I get promoted, I will buy a new car.',
        nativeCadence: 'Never put "will" or "would" inside the IF-clause.',
      },
    ],
    nativeIntuition:
      'Native speakers use WOULD as velvet gloves on iron hands. Direct statements like *"This architecture is wrong"* trigger instant defensive walls in engineers. Saying *"I would be concerned about write latency if we adopted this approach"* delivers the exact same technical critique, but invites intellectual debate instead of an ego clash.',
    patternRecognitionExercises: [
      {
        id: 't78-q1',
        prompt: 'Identify the sentence that incorrectly uses "would" for a past state:',
        options: [
          'In the early days, we would write unit tests manually every evening.',
          'Our old office would be located next to the train station.',
          'Our old office used to be located next to the train station.',
          'Every Friday, the founders would buy pizza for the entire company.',
        ],
        correctIndex: 1,
        explanation:
          '"Be located" is a stative verb describing a permanent physical condition. Past "would" cannot describe past states; it must be "used to be located".',
      },
      {
        id: 't78-q2',
        prompt: 'Which sentence correctly communicates an architectural preference?',
        options: [
          'I’d rather to shard the database than add expensive read replicas.',
          'I’d rather sharding the database than adding read replicas.',
          'I’d rather shard the database than add expensive read replicas.',
          'I’d rather shard the database to add expensive read replicas.',
        ],
        correctIndex: 2,
        explanation:
          '"Would rather" takes a bare infinitive without "to": "I\'d rather shard... than add...".',
      },
    ],
    productionPrompts: [
      {
        scenario: 'In an architecture review, soften your objection to a proposed third-party payment vendor.',
        targetPattern: 'I would be cautious about [Vendor/Solution] because [Technical Risk]',
        hint: 'Use "I would be cautious/hesitant" to cushion your engineering skepticism.',
        sampleAnswer: 'I would be cautious about relying entirely on this third-party vendor without an automated local fallback, given their recent API uptime history.',
      },
      {
        scenario: 'Express your preference between two cloud hosting options (Serverless vs. Containers) for a high-traffic app.',
        targetPattern: 'I would rather [Option A] than [Option B] because [Justification]',
        hint: 'Use "would rather" with bare infinitives.',
        sampleAnswer: 'I would rather deploy containerized pods on EKS than go purely serverless, because we need predictable baseline latency without cold-start penalties.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES SMOOTHLY: "I used to think monolithic architectures were obsolete, but today I would argue they offer unmatched initial velocity."',
      timedChallenge:
        'Speak for 45 seconds contrasting your past engineering beliefs (USED TO: "I used to think...") with your current nuanced philosophy (WOULD: "Today, I would suggest...").',
      durationSeconds: 45,
      roleplayPrompt:
        '"If we were to encounter another Black Friday traffic surge, I would much rather scale our Redis clusters horizontally than attempt emergency vertical upgrades."',
    },
    recallTest: [
      {
        question: 'Why is "I would live in London when I was ten" grammatically invalid in English?',
        hiddenAnswer:
          'Because "live" is a stative verb describing a residency condition. Past habitual "would" is strictly restricted to dynamic repeated actions (run, swim, study). Past states require "used to": "I used to live in London".',
      },
      {
        question: 'What is the structural difference between "I’d rather stay" and "I’d rather you stayed"?',
        hiddenAnswer:
          'When expressing your own preference, use a bare infinitive: "I’d rather stay". When expressing a preference about someone else’s action, English uses the subjunctive past (V2): "I’d rather you stayed" or "I’d rather you didn’t leave".',
      },
    ],
    revisionConnection:
      'Having mastered modal intentions in the present and future, Chapter 81 completes the engine with the ultimate post-mortem instrument: Past Modals of Deduction & Counterfactuals (COULD HAVE, WOULD HAVE, SHOULD HAVE, MUST HAVE, CAN’T HAVE).',
    masteryChallenge:
      'Use the opinion softener "I would recommend..." or "I would argue that..." in at least two technical discussions today instead of blunt assertions.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 81: PAST MODALS OF DEDUCTION & COUNTERFACTUALS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-81',
    partNumber: 6,
    partTitle: 'The Modal & Intention Engine',
    chapterNumber: 81,
    title: 'Past Modals of Deduction & Counterfactuals (COULD HAVE, WOULD HAVE, SHOULD HAVE, MUST HAVE)',
    subtitle: 'Reconstructing Past Reality & Blameless Post-Mortems: The V3 Multi-Timeline Engine',
    level: 'Tier 4',
    readingTimeMinutes: 19,
    dna: {
      coreConcept: 'The Historical Forensic Lens: Deducing What Happened vs. Simulating What Never Occurred',
      mentalModel:
        'Past Modals split into two distinct conceptual branches: 1) HISTORICAL DEDUCTION (Investigating the mystery of what actually happened): MUST HAVE + V3 (95% certainty it occurred: "The server crashed; the disk must have filled up"). CAN’T HAVE + V3 (95% certainty it was impossible: "He can’t have merged the PR; he has no admin rights"). 2) COUNTERFACTUAL SIMULATION (Exploring the parallel universe of what DID NOT happen): COULD HAVE + V3 (Unrealized ability: "We could have migrated earlier, but chose to wait"). WOULD HAVE + V3 (Imagined conditional result: "I would have notified you if I had known"). SHOULD HAVE + V3 (Unfulfilled duty / regret: "We should have caught this bug in staging").',
      whyEnglishUsesIt:
        'In incident root cause analysis (RCA) and post-mortems, past modals are the primary vocabulary of systemic investigation. Without them, engineers either sound like accusatory judges ("You broke it") or confused novices ("Maybe this happen, maybe that happen").',
    },
    mentalMovie: {
      sceneDescription:
        'Imagine a forensic detective standing inside a crime scene surrounded by yellow tape: inspecting footprints with a magnifying glass to deduce what transpired (MUST HAVE / CAN’T HAVE). Beside the detective is a digital holographic projector simulating what would have happened if the security alarm had triggered five minutes earlier (WOULD HAVE / SHOULD HAVE).',
      schematic: `
   [ THE PAST MODAL MATRIX ]
   
   BRANCH 1: HISTORICAL FORENSIC DEDUCTION (What ACTUALLY happened?)
   ┌────────────────────────────────────────────────────────────────────────┐
   │ MUST HAVE + V3: "The memory leak MUST HAVE caused the crash."           │
   │ (All evidence points to this historical reality)                       │
   │ CAN'T HAVE + V3: "The rogue worker CAN'T HAVE reached the primary DB." │
   │ (Known firewall rules prove this was impossible)                       │
   └────────────────────────────────────────────────────────────────────────┘
   
   BRANCH 2: COUNTERFACTUAL UNREALIZED WORLDS (What DID NOT happen?)
   ┌────────────────────────────────────────────────────────────────────────┐
   │ COULD HAVE + V3: "We COULD HAVE rolled back, but we chose to hotfix."  │
   │ (We had the capability, but did not execute it)                        │
   │ WOULD HAVE + V3: "The replica WOULD HAVE taken over if configured."    │
   │ (Imagined conditional consequence)                                     │
   │ SHOULD HAVE + V3: "We SHOULD HAVE audited permissions last quarter."   │
   │ (Past mistake or systemic gap)                                         │
   └────────────────────────────────────────────────────────────────────────┘
`,
    },
    pattern: {
      formula: 'Subject + Modal [MUST | CAN’T | COULD | WOULD | SHOULD] + HAVE + [Past Participle: V3]',
      breakdown: [
        { element: 'MUST HAVE + V3', meaning: 'High-confidence deduction about a past event ("He must have forgotten his key").' },
        { element: 'CAN’T / COULDN’T HAVE + V3', meaning: 'Deduction that a past event was impossible ("She can’t have sent that email").' },
        { element: 'COULD HAVE + V3', meaning: 'Unrealized past capability or hypothetical possibility ("We could have won").' },
        { element: 'WOULD HAVE + V3', meaning: 'Imagined past result contingent on an unfulfilled condition ("I would have called").' },
        { element: 'SHOULD HAVE + V3', meaning: 'Past duty or best practice that was unfortunately omitted ("We should have tested").' },
        { element: 'SHOULDN’T HAVE + V3', meaning: 'Past action that occurred but was a regretted mistake ("We shouldn’t have merged").' },
      ],
      notes: 'Phonetic Reduction: In native connected speech, "should have" sounds like "SHOOD-uv" (/ʃʊdəv/) or "SHOOD-uh". Never write "should of" — that is an illiterate phonetic misspelling.',
    },
    basicExamples: [
      { text: 'The server crashed at 2 AM; the memory leak must have exhausted the heap.', context: 'High-probability forensic deduction.', audioText: 'The server crashed at two AM the memory leak must have exhausted the heap' },
      { text: 'He can’t have merged the pull request; he doesn’t have write permissions on main.', context: 'Logical deduction of past impossibility.', audioText: 'He can’t have merged the pull request he doesn’t have write permissions on main' },
      { text: 'We could have scaled the database vertically, but we chose to implement caching instead.', context: 'Unrealized past alternative option.', audioText: 'We could have scaled the database vertically but we chose to implement caching instead' },
      { text: 'I would have alerted the on-call team, but our monitoring alerts were silenced.', context: 'Imagined intention blocked by past circumstance.', audioText: 'I would have alerted the on-call team but our monitoring alerts were silenced' },
      { text: 'We should have enabled automated backups before migrating the storage volume.', context: 'Past regret / post-mortem finding.', audioText: 'We should have enabled automated backups before migrating the storage volume' },
      { text: 'They shouldn’t have deployed a breaking API change on a Friday afternoon.', context: 'Critique of an ill-advised past action.', audioText: 'They shouldn’t have deployed a breaking API change on a Friday afternoon' },
      { text: 'Someone must have altered the firewall configuration without opening a ticket.', context: 'Deducing unauthorized past tampering.', audioText: 'Someone must have altered the firewall configuration without opening a ticket' },
      { text: 'The payload couldn’t have reached the client because the TLS handshake failed.', context: 'Forensic evidence proving packet drop.', audioText: 'The payload couldn’t have reached the client because the TLS handshake failed' },
      { text: 'Could we have prevented this data corruption with better schema validation?', context: 'Investigative retrospective inquiry.', audioText: 'Could we have prevented this data corruption with better schema validation' },
      { text: 'Without your quick thinking, the outage would have lasted hours longer.', context: 'Praise highlighting an avoided catastrophe.', audioText: 'Without your quick thinking the outage would have lasted hours longer' },
    ],
    realLifeExamples: [
      {
        text: 'The front door was wide open and the dog was gone; someone must have left it unlocked.',
        situation: 'Coming home to an unpleasant household surprise.',
        context: 'Forensic deduction from undeniable physical evidence (must have left).',
      },
      {
        text: 'I could have taken the express train, but I decided to walk to enjoy the sunshine.',
        situation: 'Explaining your commuting choice.',
        context: 'Unrealized past opportunity deliberately bypassed (could have taken).',
      },
      {
        text: 'You should have told me you were vegetarian; I wouldn’t have cooked steak!',
        situation: 'Dinner party host reacting to a dietary revelation.',
        context: 'Affectionate counterfactual regret between friends.',
      },
    ],
    professionalExamples: [
      {
        text: 'The security team deduced that the attacker must have gained access via an unrotated service account token.',
        context: 'Executive cybersecurity audit presentation.',
        tone: 'Forensic, rigorous, evidence-driven',
      },
      {
        text: 'With proper synthetic monitoring in place, we would have caught this latency degradation before it impacted tier-one customers.',
        context: 'Engineering VP presenting post-mortem findings to customer success leads.',
        tone: 'Accountable, reflective, forward-looking',
      },
      {
        text: 'The distributed database can’t have acknowledged the write; the transaction coordinator never received the quorum ACK.',
        context: 'Consensus protocol debugging review.',
        tone: 'Technical, definitive, mathematically grounded',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Given the sudden drop in connection pool saturation, the database primary must have restarted abruptly.',
        devContext: 'Grafana telemetry dashboard inspection.',
        analogy: 'Deducing an unlogged node reboot from metric signatures.',
      },
      {
        text: 'We could have caught the nil pointer exception during compilation if we had enabled strict null checks.',
        devContext: 'TypeScript compiler configuration discussion.',
        analogy: 'Reflecting on a compiler safeguard that would have prevented runtime crashes.',
      },
      {
        text: 'The load balancer shouldn’t have routed requests to unhealthy pods whose readiness probes were failing.',
        devContext: 'Kubernetes ingress controller bug report.',
        analogy: 'Highlighting a critical policy violation in service mesh routing.',
      },
    ],
    contrast: {
      conceptA: 'MUST HAVE + V3 (Deduction of Reality)',
      conceptB: 'SHOULD HAVE + V3 (Counterfactual Regret)',
      differences: [
        { aspect: 'Did the event occur?', optionA: 'YES. We are 95% certain it actually happened in reality.', optionB: 'NO. It failed to happen, and we regret the omission.' },
        { aspect: 'Focus', optionA: 'Investigating what went down in the past.', optionB: 'Evaluating how we fell short of best practices.' },
        { aspect: 'Example', optionA: '"He must have forgotten" (He DID forget).', optionB: '"He should have remembered" (He DID NOT remember).' },
        { aspect: 'Tone', optionA: 'Analytical, deductive, investigative.', optionB: 'Reflective, accountable, corrective.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'We should of backed up the database before migrating.',
        likelyIntention: 'Expressing regret that the database wasn’t backed up.',
        rootCause:
          'Writing "should of" instead of "should have". In spoken English, "should have" is pronounced "should’ve", which sounds identical to "should of". This is a notorious spelling blunder.',
        naturalCorrection: 'We should have backed up the database before migrating. / We should’ve backed up...',
        nativeCadence: 'NEVER write "should of", "could of", or "would of". It is ALWAYS "have".',
      },
      {
        learnerError: 'The attacker mustn’t have known our IP address.',
        likelyIntention: 'Deducing that the attacker did not know the IP address.',
        rootCause:
          'Using "mustn’t have" for negative deduction. Negative past deduction requires "can’t have" or "couldn’t have".',
        naturalCorrection: 'The attacker can’t have known our IP address. / ...couldn’t have known...',
        nativeCadence: 'For past impossibility, ALWAYS use "can’t have + V3".',
      },
      {
        learnerError: 'If I knew, I would tell you yesterday.',
        likelyIntention: 'Expressing a third conditional counterfactual in the past.',
        rootCause: 'Using present conditional ("would tell") for a past event. Requires past conditional ("would have told").',
        naturalCorrection: 'If I had known, I would have told you yesterday.',
        nativeCadence: 'Past counterfactual: "If I had [V3], I would have [V3]".',
      },
    ],
    nativeIntuition:
      'Native speakers treat "MUST HAVE" and "SHOULD HAVE" as opposite sides of a mirror. When you say "The server MUST HAVE run out of memory", you are looking at the real world through a magnifying glass. When you say "We SHOULD HAVE configured swap space", you are looking at a phantom world through a telescope. Conflating the two creates profound confusion in technical diagnostics.',
    patternRecognitionExercises: [
      {
        id: 't81-q1',
        prompt: 'Select the sentence that correctly expresses logical deduction about an impossible past event:',
        options: [
          'The script mustn’t have deleted the rows because the table is intact.',
          'The script can’t have deleted the rows because the table is intact.',
          'The script shouldn’t to have deleted the rows because the table is intact.',
          'The script would of deleted the rows because the table is intact.',
        ],
        correctIndex: 1,
        explanation:
          'Deduction of past impossibility requires "can\'t have + V3" (or "couldn\'t have + V3"), never "mustn\'t have".',
      },
      {
        id: 't81-q2',
        prompt: 'Which sentence correctly uses past counterfactual grammar without spelling errors?',
        options: [
          'We should of conducted a load test before the Black Friday sale.',
          'We should have conduct a load test before the Black Friday sale.',
          'We should have conducted a load test before the Black Friday sale.',
          'We could to have conducted a load test before the Black Friday sale.',
        ],
        correctIndex: 2,
        explanation:
          '"Should have conducted" correctly pairs the modal with "have" and the past participle V3 ("conducted").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Draft a forensic deduction for a post-mortem stating that the outage was almost certainly caused by an unannounced network switch reboot.',
        targetPattern: 'Based on the sudden drop in telemetry, the network switch must have [V3]',
        hint: 'Use "must have" to express strong deductive conviction from evidence.',
        sampleAnswer: 'Based on the sudden simultaneous drop across all rack telemetry, the primary network switch must have rebooted unexpectedly.',
      },
      {
        scenario: 'State what your engineering team would have done differently if you had known about the third-party API deprecation schedule.',
        targetPattern: 'If we had known about the deprecation, we would have [Past Counterfactual V3]',
        hint: 'Use the Third Conditional: "had known" paired with "would have [V3]".',
        sampleAnswer: 'If we had known about the deprecation timeline three months ago, we would have prioritized the OAuth2 migration in Q2.',
      },
    ],
    speakingDrill: {
      vocalInstruction:
        'SAY THIS ALOUD 3 TIMES WITH SHARP FORENSIC CADENCE: "The database primary can’t have acknowledged the transaction, so the replication worker must have timed out."',
      timedChallenge:
        'Speak for 45 seconds roleplaying a senior incident commander: deduce the root cause of an outage using "must have", dismiss a false theory using "can’t have", and propose a future safeguard using "we should have".',
      durationSeconds: 45,
      roleplayPrompt:
        '"Looking at the kernel logs, the OOM killer must have terminated process 4021. The node can’t have lost power because ping responses never dropped. Moving forward, we should have automated memory alert thresholds at eighty percent."',
    },
    recallTest: [
      {
        question: 'Why is writing "would of" or "should of" considered a critical error in professional communication?',
        hiddenAnswer:
          'Because "of" is a preposition, not an auxiliary verb. In spoken English, the contracted modal "should’ve" sounds like "should of", leading people to transcribe it phonetically. In written English, it is always "should have" or "could have".',
      },
      {
        question: 'What is the functional difference between "He could have helped" and "He helped"?',
        hiddenAnswer:
          '"He helped" means he actually performed the action. "He could have helped" is counterfactual: he had the capability or opportunity to help, but he DID NOT help.',
      },
    ],
    revisionConnection:
      'You have now conquered the full Modal & Intention Engine! In Part 7, you will step into spatial physics with The Phrasal Verb Engine & Particle Dynamics (UP, DOWN, OUT, IN, OFF, AWAY, and BACK).',
    masteryChallenge:
      'In your next post-mortem or code review discussion, frame past findings using: "The system must have...", "It can’t have...", and "We should have...". Notice how instantly your analysis commands authority.',
  },
];
