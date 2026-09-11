import { Chapter } from '../types';

export const PART_11_CHAPTERS: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // CHAPTER 115: SENTENCE ECONOMY & WORDINESS DELETION
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-115',
    partNumber: 11,
    partTitle: 'The Writing Engine: Precision, Structure, and Impact',
    chapterNumber: 115,
    title: 'Sentence Economy & Wordiness Deletion (The 30% Reduction Rule)',
    subtitle: 'Why Every Unnecessary Word Dilutes Authority and How to Ruthlessly Prune Nominalizations, Redundancies, and Throat-Clearing',
    level: 'Tier 5',
    readingTimeMinutes: 18,
    dna: {
      coreConcept: 'Signal-to-Noise Ratio is King: Executive Writing is Not the Addition of Words, but the Systematic Pruning of Friction',
      mentalModel:
        'Think of network bandwidth in high-frequency trading. Every redundant byte in a packet adds nanoseconds of latency, degrades throughput, and risks packet fragmentation. In professional written communication (emails, pull requests, incident reports), human attention is the finite network link. Unnecessary wordiness ("in order to", "at this point in time", "due to the fact that", "has the capability of") acts like packet bloat. When you apply the 30% Reduction Rule, you strip away linguistic fat, leaving pure, muscular, high-velocity signal.',
      whyEnglishUsesIt:
        'In corporate and technical Anglo-American communication, concise prose is equated with intellectual clarity and respect for the reader’s time. Verbose prose is perceived as defensive, vague, or junior. Powerful writers convert weak nouns back into active verbs ("make a decision" -> "decide", "conduct an investigation into" -> "investigate") and eliminate throat-clearing preambles.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture an editor with a red grease pencil leaning over a draft. A paragraph of 65 sprawling words with five clauses sits on the page. The editor crosses out "It should be noted that in order to facilitate the implementation of...", striking out 24 words with a single slash, leaving just: "To implement X, we must...". The message instantly snaps into laser focus.',
      schematic: `
    [ THE 30% WORDINESS PRUNING COMPILER ]

    BLOATED INPUT (Low Signal, High Cognitive Drag):
    "In order to provide assistance to the team in relation to the matter of
     resolving the latency issue at this point in time, we made a decision to
     conduct an evaluation of the database indexes." (36 words)
                                   │
                                   ▼ [PRUNING RULES]
    1. "In order to" ───────────> "To"
    2. "provide assistance to" ──> "help"
    3. "in relation to" ─────────> "with"
    4. "at this point in time" ──> "now" (or delete)
    5. "made a decision to" ─────> "decided to"
    6. "conduct an evaluation" ──> "evaluate"
                                   │
                                   ▼
    PRUNED OUTPUT (Muscular, High Signal, Zero Latency):
    "To help the team resolve the latency issue now, we decided to
     evaluate the database indexes." (16 words = 55% Reduction!)
`,
    },
    pattern: {
      formula: 'ACTIVE SUBJECT + DIRECT VERB + CONCRETE OBJECT (Eliminate Nominalizations & Padded Prepositions)',
      breakdown: [
        { element: 'Smothered Verbs (Nominalizations)', meaning: 'Replace noun phrases with direct verbs: "perform an analysis" -> "analyze", "give consideration to" -> "consider".' },
        { element: 'Padded Prepositions', meaning: 'Cut bloated phrases: "in the event that" -> "if", "for the purpose of" -> "to", "with regard to" -> "regarding/about".' },
        { element: 'Throat-Clearing Preambles', meaning: 'Delete filler intros: "It is important to remember that...", "I am writing this email to let you know that...".' },
        { element: 'Doublets & Redundancies', meaning: 'Eliminate repeating words: "each and every" -> "each", "future plans" -> "plans", "end result" -> "result".' },
      ],
      notes: 'Every sentence should justify its existence. If removing a word does not alter the meaning, delete it.',
    },
    basicExamples: [
      { text: 'Bloated: In order to optimize performance... / Pruned: To optimize performance...', context: 'In order to -> To', audioText: 'To optimize performance' },
      { text: 'Bloated: We need to conduct an investigation into the bug. / Pruned: We need to investigate the bug.', context: 'Nominalization conversion', audioText: 'We need to investigate the bug' },
      { text: 'Bloated: Due to the fact that the server rebooted... / Pruned: Because the server rebooted...', context: 'Conjunction streamlining', audioText: 'Because the server rebooted' },
      { text: 'Bloated: At this point in time, the build is passing. / Pruned: Currently, the build is passing.', context: 'Temporal padding removal', audioText: 'Currently, the build is passing' },
      { text: 'Bloated: We reached an agreement with the vendor. / Pruned: We agreed with the vendor.', context: 'Direct verb replacement', audioText: 'We agreed with the vendor' },
      { text: 'Bloated: The system has the capability of scaling to 10k users. / Pruned: The system can scale to 10k users.', context: 'Verb phrase simplification', audioText: 'The system can scale to ten thousand users' },
      { text: 'Bloated: I am writing to inquire if you have time. / Pruned: Do you have time today?', context: 'Throat-clearing elimination', audioText: 'Do you have time today?' },
      { text: 'Bloated: Please find attached herewith the report. / Pruned: Here is the report.', context: 'Archaic formal clutter deletion', audioText: 'Here is the report' },
    ],
    realLifeExamples: [
      {
        text: 'Bloated: "I am dropping you this quick note to let you know that I will be arriving late." / Pruned: "Running 15 minutes late; see you at 2:15."',
        situation: 'Texting a friend before lunch.',
        context: 'Respecting reader attention in personal messaging.',
      },
      {
        text: 'Bloated: "In the event that it rains tomorrow, our plan is that we will cancel the barbecue." / Pruned: "If it rains tomorrow, we’ll cancel the barbecue."',
        situation: 'Weekend gathering update.',
        context: 'Clear conditional phrasing.',
      },
    ],
    professionalExamples: [
      {
        text: 'Bloated: "It should be noted that we have successfully completed the migration process." / Pruned: "We completed the database migration ahead of schedule."',
        context: 'Executive project status update.',
        tone: 'Crisp, confident, impactful',
      },
      {
        text: 'Bloated: "We are currently in the process of reviewing the pull request at the present moment." / Pruned: "We are reviewing your pull request now."',
        context: 'Slack handoff message to a collaborating team.',
        tone: 'Direct, responsive, professional',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Bloated: "This PR has the purpose of making an improvement to the query execution speed." / Pruned: "This PR optimizes customer search query execution by adding a composite index."',
        analogy: 'PR descriptions: lead with the exact technical delta and impact.',
        devContext: 'GitHub Pull Request overview.',
      },
      {
        text: 'Bloated: "In order to prevent the occurrence of memory leaks, we took action to close connections." / Pruned: "To prevent memory leaks, we now close idle pool connections after thirty seconds."',
        analogy: 'Architecture incident post-mortem remediation action item.',
        devContext: 'Post-mortem action item report.',
      },
    ],
    contrast: {
      conceptA: 'Bureaucratic Bloat (Weak Nouns & Clutter)',
      conceptB: 'Muscular Technical Prose (Direct Verbs & Economy)',
      differences: [
        { aspect: 'Sentence Length', optionA: '35–45 words per sentence with nested dependent clauses', optionB: '12–18 words per sentence with active verbs' },
        { aspect: 'Verb Style', optionA: 'Nominalized ("make an assumption", "perform an update")', optionB: 'Active ("assume", "update")' },
        { aspect: 'Reader Impression', optionA: 'Slow, evasive, bureaucratically defensive', optionB: 'Decisive, clear, executive, high-trust' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Writing "Please do the needful regarding the attached document."',
        likelyIntention: 'Asking someone to take care of the next step.',
        rootCause: 'Archaic colonial Indian English phrase that sounds ambiguous and outdated to modern international colleagues.',
        naturalCorrection: 'Specify the exact required action: "Please review lines 12–18 and approve the PR by 4 PM."',
        nativeCadence: '"Could you review and sign off on this by 4 PM?"',
      },
      {
        learnerError: 'Opening every email with: "I hope this email finds you well and in good health."',
        likelyIntention: 'Expressing politeness.',
        rootCause: 'Over-formal generic boilerplate that 99% of readers skip over automatically.',
        naturalCorrection: 'Use a warm, one-line contextual opening or jump straight into the message: "Hope your week is going well, John. Quick update on the payment API:"',
        nativeCadence: '"Hope you had a great weekend. Quick question regarding Q3:"',
      },
    ],
    nativeIntuition:
      'Native executives skim text on mobile screens during brief taxi rides between meetings. If your first sentence does not contain the core message, they may never read sentence three. Write for high-speed skimming.',
    patternRecognitionExercises: [
      {
        id: 'p-115-1',
        prompt: 'Which revision best eliminates wordiness from: "In the event that the server experiences a failure, an automated notification will be sent to the on-call engineer"?',
        options: [
          '"In case of the event of server failure, the on-call engineer receives an email."',
          '"If the server fails, the system automatically alerts the on-call engineer."',
          '"Because of server failure occurrence, notifications happen."',
          '"Should it occur that a failure is experienced by the server, an alert is sent."',
        ],
        correctIndex: 1,
        explanation: 'Option B replaces "In the event that" with "If", changes passive "experiences a failure" to active "fails", and uses direct action verbs.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Prune this sentence: "We are currently making preparations in order to facilitate the commencement of our beta testing phase next month."',
        targetPattern: 'Convert nominalizations ("making preparations", "facilitate the commencement") into direct verbs.',
        hint: 'Use "preparing" and "launch" or "start".',
        sampleAnswer: 'We are preparing to launch our beta test next month.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'EDIT ON SIGHT: Read this bloated sentence out loud, but prune it in your mouth before the words leave your lips: "Due to the fact that we have an absence of bandwidth, we made a decision to postpone the meeting."',
      timedChallenge: 'Produce the pruned sentence in under 5 seconds ("Because we lack bandwidth, we postponed the meeting").',
      durationSeconds: 10,
      roleplayPrompt: 'You are an engineering manager trimming a team announcement.',
    },
    recallTest: [
      {
        question: 'What is a nominalization (smothered verb), and why does it weaken business writing?',
        hiddenAnswer: 'A nominalization is a verb turned into an abstract noun (e.g., "analyze" -> "conduct an analysis"). It weakens writing by requiring weak filler verbs ("make", "conduct", "perform") and adding unnecessary syllables.',
      },
    ],
    revisionConnection:
      'Now that your sentences are lean and punchy, Chapter 116 teaches you how to organize them into the 3-Paragraph Inverted Pyramid Email Structure.',
    masteryChallenge:
      'Open your Sent Items folder. Pick your last long email. Rewrite it applying the 30% reduction rule. Verify that the new version communicates identical information in half the space.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 116: THE ARCHITECTURE OF THE HIGH-IMPACT EMAIL
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-116',
    partNumber: 11,
    partTitle: 'The Writing Engine: Precision, Structure, and Impact',
    chapterNumber: 116,
    title: 'The Architecture of the High-Impact Professional Email',
    subtitle: 'The 3-Paragraph Inverted Pyramid: Actionable Subject Lines, Bottom-Line Openers, and Bulleted Scannability',
    level: 'Tier 5',
    readingTimeMinutes: 19,
    dna: {
      coreConcept: 'The Email is an Asynchronous Workflow Contract: Subject Lines Signal Urgency, Paragraph 1 Delivers the Bottom Line, Paragraph 3 Defines the Next Step',
      mentalModel:
        'Imagine an inverted pyramid. The wide, heavy base sits at the top (the core decision and action request), visible immediately without scrolling. The middle provides essential supporting context in bullet points. The narrow tip at the bottom specifies the exact deadline and owner. If a reader reads ONLY the first 2 lines on their smartphone notification screen, they must know: 1) What happened, 2) What you need from them, and 3) By when.',
      whyEnglishUsesIt:
        'Executives receive 120+ emails a day. If your email is a wall of unbroken text with the request buried in paragraph 4, it gets flagged "read later" and dies in the archive. The 3-paragraph inverted pyramid gets responses within minutes because it minimizes cognitive friction for the recipient.',
    },
    mentalMovie: {
      sceneDescription:
        'A VP opens an email on her phone while walking through an airport terminal. She scans: Subject tag "[ACTION REQUIRED] Q3 Cloud Budget Approval by 4 PM". Line 1: "Hi Sarah, I need your approval for our $12k cloud budget increase to support Black Friday load tests." Bullets highlight 3 metrics. Final line: "Reply with \'Approved\' by 4 PM to keep provisioning on schedule." She taps reply, types "Approved", and closes her phone in 10 seconds flat.',
      schematic: `
    [ THE 3-PARAGRAPH INVERTED PYRAMID EMAIL ]

    SUBJECT LINE: [TAG] + Topic + Specific Action/Deadline
    Ex: "[DECISION NEEDED] Staging DB Upgrade Strategy (Deadline: Thursday 5 PM)"
    ────────────────────────────────────────────────────────────────────────
    PARAGRAPH 1: THE BOTTOM LINE UP FRONT (BLUF - 1-2 Sentences)
    • Why am I writing? What is the outcome?
    • "Hi team, we need to approve the migration plan for our Redis cluster
       to avoid downtime during next week’s marketing push."
    ────────────────────────────────────────────────────────────────────────
    PARAGRAPH 2: BULLETED CONTEXT & EVIDENCE (High Scannability)
    • Why this recommendation? What are the facts?
      - Current cache memory utilization is at 88%
      - Upgrading to cluster tier doubles throughput for +$200/mo
      - Alternative (manual eviction) risks dropping active sessions
    ────────────────────────────────────────────────────────────────────────
    PARAGRAPH 3: CLEAR CALL TO ACTION (CTA) & DEADLINE (1-2 Sentences)
    • Who does what, and by when?
    • "Please reply with your sign-off or objections by Thursday, 5 PM EST
       so we can execute the maintenance window this weekend."
`,
    },
    pattern: {
      formula: 'ACTION-PREFIXED SUBJECT + BLUF OPENER + BULLETED EVIDENCE + TIME-BOUND CTA',
      breakdown: [
        { element: 'Subject Line Tagging', meaning: 'Use bracketed tags: [ACTION], [DECISION], [INFO], [URGENT], [FYI - NO ACTION NEEDED].' },
        { element: 'The BLUF Opener', meaning: 'Sentence 1 states the core purpose and ask immediately. Never bury the ask.' },
        { element: 'Bullet Formatting', meaning: 'Break complex explanations into 2 to 4 parallel bullet points with bold keywords.' },
        { element: 'The Hard CTA', meaning: 'Close with an explicit owner, exact action verb, and timezone-specific deadline.' },
      ],
      notes: 'If an email requires more than 5 paragraphs, it is no longer an email—it should be a shared document or design RFC with a link.',
    },
    basicExamples: [
      { text: 'Subject: [ACTION REQUIRED] Please approve staging cluster teardown by Friday 3 PM', context: 'Actionable subject line.', audioText: 'Subject: Action Required: Please approve staging cluster teardown by Friday 3 PM' },
      { text: 'Subject: [UPDATE] Payment Gateway Incident Resolved (Post-Mortem Attached)', context: 'Informational status subject line.', audioText: 'Subject: Update: Payment Gateway Incident Resolved' },
      { text: 'Subject: [DECISION] Choose between Option A (Postgres) and Option B (MongoDB) for Logging', context: 'Decision request subject line.', audioText: 'Subject: Decision: Choose between Option A and Option B' },
      { text: 'Hi team, I am requesting your approval to merge the auth service refactor.', context: 'Direct BLUF opening.', audioText: 'Hi team, I am requesting your approval to merge the auth service refactor' },
      { text: 'Key highlights from today’s client review:', context: 'Bullet context lead-in.', audioText: 'Key highlights from today’s client review' },
      { text: 'Next Steps: Alex will merge the PR; Priya will monitor production metrics.', context: 'Explicit ownership distribution.', audioText: 'Next Steps: Alex will merge the PR, Priya will monitor production metrics' },
      { text: 'Please reply with your feedback by tomorrow at noon EST.', context: 'Specific deadline call to action.', audioText: 'Please reply with your feedback by tomorrow at noon EST' },
      { text: 'No action needed on your part; this is strictly for your awareness.', context: 'FYI etiquette line.', audioText: 'No action needed on your part; this is strictly for your awareness' },
    ],
    realLifeExamples: [
      {
        text: 'Subject: [RSVP] Dinner reservation for Saturday at 7 PM\n\nHey everyone,\nI booked a table for six at Osteria for Saturday at 7:00 PM.\n\nDetails:\n- Cost is roughly $40/person\n- Walking distance from the subway\n\nPlease let me know by Thursday night if you can make it!',
        situation: 'Organizing a group dinner with friends.',
        context: 'Clean, structured personal communication.',
      },
    ],
    professionalExamples: [
      {
        text: 'Subject: [DECISION NEEDED] CI/CD Pipeline Upgrade Path (Deadline: Today 4 PM)\n\nHi Engineering Leads,\n\nI recommend we upgrade our GitHub Actions runners to larger 16-core instances to cut build times before sprint end.\n\nContext:\n- Average PR build times have increased from 8 minutes to 27 minutes over Q2\n- 16-core runners reduce total CI pipeline execution to 6 minutes in local tests\n- Total estimated budget impact is +$350/month across all repos\n\nPlease reply with your thumbs-up or concerns by 4:00 PM today so DevOps can apply the runner configuration tonight.\n\nBest regards,\nArjun',
        context: 'High-impact technical proposal email.',
        tone: 'Crisp, structured, compelling',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Subject: [INCIDENT UPDATE #2] Database read replica lag resolved (Traffic normalized)\n\nHi Stakeholders,\n\nThe read replica replication lag incident impacting the mobile checkout service is fully resolved as of 14:10 UTC.\n\nCurrent Status:\n- Replication lag is back to normal baseline (<15ms)\n- API 500 error rates have dropped back to 0.01%\n- No customer transactions or order records were lost\n\nNext Steps: A detailed Root Cause Analysis (RCA) document will be published to the engineering wiki by Friday, 12:00 UTC.',
        analogy: 'Live incident communications structure.',
        devContext: 'Production incident escalation email.',
      },
    ],
    contrast: {
      conceptA: 'The Wall-of-Text Email (Unopened, Ignored)',
      conceptB: 'The Inverted Pyramid Email (Scannable, Responded Fast)',
      differences: [
        { aspect: 'Subject Line', optionA: '"Quick question" or "Meeting follow up"', optionB: '"[ACTION] Approve Q3 API deprecation schedule by Wed 3 PM"' },
        { aspect: 'Opening Sentence', optionA: 'Paragraph of pleasantries, background history, and context', optionB: 'Direct statement of what is happening and what is needed' },
        { aspect: 'Visual Layout', optionA: 'One gigantic 300-word paragraph with no bolding or spacing', optionB: '3 short sections with bold bullet points and clear white space' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Writing subject lines like: "Important!!", "Help needed", or "Regarding our project".',
        likelyIntention: 'Getting attention quickly.',
        rootCause: 'Vague subjects blend into spam and fail to inform the reader about urgency, topic, or required actions.',
        naturalCorrection: 'Use [TAG] + Core Topic + Deadline: "[ACTION NEEDED] Review API Spec v2 by EOD".',
        nativeCadence: '"[DECISION] Auth migration timeline approval"',
      },
      {
        learnerError: 'Hiding the action request at the very end of paragraph 5: "...so let me know what you think."',
        likelyIntention: 'Politeness through indirectness.',
        rootCause: 'Readers often scan only the top and middle; burying the ask guarantees delays.',
        naturalCorrection: 'State the request in line 1, reinforce it in the final line with an exact date.',
        nativeCadence: '"I am requesting your sign-off on the attached roadmap by Friday."',
      },
    ],
    nativeIntuition:
      'The best email writers treat email like an API contract: clear endpoint parameters, explicit required payloads, and predictable error/response timeouts. Structure your messages so anyone can reply with one tap.',
    patternRecognitionExercises: [
      {
        id: 'p-116-1',
        prompt: 'Which subject line is most likely to receive a prompt executive response?',
        options: [
          '"Update regarding database stuff"',
          '"PLEASE READ: CRITICAL QUERY ISSUE RIGHT NOW"',
          '"[ACTION] Approve $2k Cloud Run scaling limit increase by 5 PM"',
          '"Fwd: re: re: query issue"',
        ],
        correctIndex: 2,
        explanation: 'Option C uses an explicit bracketed tag [ACTION], states the exact topic and amount ($2k Cloud Run scaling limit), and establishes a crisp deadline (5 PM).',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Draft a 3-paragraph email asking your product manager to push back a release date by 3 days due to an unexpected Stripe API webhook bug.',
        targetPattern: 'BLUF opener + 3 bullet points + time-bound CTA with subject tag',
        hint: 'Use [DECISION] in the subject line and bullet the risks.',
        sampleAnswer: 'Subject: [DECISION] Push back release date to Oct 18 due to Stripe webhook issue\n\nHi Marcus,\n\nI recommend we move our production release date from Tuesday to Friday, Oct 18, to resolve an intermittent webhook issue with Stripe.\n\nKey Considerations:\n- Webhook delivery failures currently leave 5% of subscription upgrades in an unconfirmed state\n- Stripe engineering released a patch that requires 48 hours of integration testing in staging\n- Shipping on Tuesday would require manual database fixes for affected users\n\nPlease let me know by 2:00 PM if you approve moving the release to Friday so we can notify customer support.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'VOCAL EMAIL COMPOSER: Say out loud a 30-second spoken summary of an email asking your team for feedback on a design doc by tomorrow noon.',
      timedChallenge: 'Speak the subject, BLUF line, two bullets, and CTA in under 30 seconds.',
      durationSeconds: 30,
      roleplayPrompt: 'You are leaving an audio memo for an executive assistant.',
    },
    recallTest: [
      {
        question: 'What are the 3 structural components of the Inverted Pyramid email layout?',
        hiddenAnswer: '1) Paragraph 1: BLUF (Bottom Line Up Front — purpose & ask), 2) Paragraph 2: Bulleted evidence/context (reasons & metrics), 3) Paragraph 3: Time-bound Call to Action (who does what by when).',
      },
    ],
    revisionConnection:
      'Email is for formal, high-latency workflows. What about real-time, high-velocity team communication? Chapter 117 covers Asynchronous Communication & Slack/Teams Etiquette.',
    masteryChallenge:
      'Write your next three workplace emails using the exact 3-Paragraph Inverted Pyramid format with bracketed subject lines. Track how much faster people respond.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 117: ASYNCHRONOUS COMMUNICATION & SLACK/TEAMS ETIQUETTE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-117',
    partNumber: 11,
    partTitle: 'The Writing Engine: Precision, Structure, and Impact',
    chapterNumber: 117,
    title: 'Asynchronous Communication & Slack/Teams Etiquette',
    subtitle: 'The Death of "Hey" Traps, Context-Rich Pings, Thread Hygiene, and High-Empathy Async Collaboration',
    level: 'Tier 5',
    readingTimeMinutes: 18,
    dna: {
      coreConcept: 'Every Synchronous Interruption is an Expensive Context Switch: High-Leverage Communicators Send Complete, Self-Contained Async Packets',
      mentalModel:
        'Imagine working deeply on a complex algorithm. An alert dings: "Hey." You stop your train of thought, open Slack, and type: "Hey, what’s up?" Then you watch the three bouncing dots... for two minutes... waiting for them to type the question. Your mental focus is completely shattered. This is the infamous "No Hello" violation. Professional async communication uses "Context-Rich Atomic Pings": the greeting, the context, the exact link/log, and the specific question are delivered in a SINGLE, beautifully formatted message. The recipient can answer asynchronously whenever their deep-work cycle completes.',
      whyEnglishUsesIt:
        'Global technology organizations operate across multi-hour timezone boundaries. Synchronous expectations grind distributed velocity to a halt. By structuring atomic packets with embedded context and explicit urgency tags, English engineering cultures protect cognitive focus and enable continuous 24-hour development cycles.',
    },
    mentalMovie: {
      sceneDescription:
        'Two distributed developers collaborate across an 8-hour timezone gap. Developer A sends a single atomic message at 6 PM with a PR link, reproduction steps, a screenshot of the error, and a specific question about line 42. Developer B wakes up in Berlin, reads the complete context without needing a back-and-forth ping-pong, writes the answer in the thread, and Developer A wakes up to the solution. 24 hours of work accomplished with zero synchronous friction.',
      schematic: `
    [ THE ATOMIC ASYNC PING VS. THE "HEY" TRAP ]

    THE "HEY" TRAP (6 Messages, 20 Minutes of Fragmented Attention):
    10:00 AM: "Hi Priya"
    10:02 AM: "Hey, how are you?"
    10:04 AM: "Are you free?"
    10:05 AM: "Yes, what’s up?"
    10:07 AM: "Can I ask a quick question about auth?"
    10:08 AM: "Sure, go ahead."
    10:12 AM: "The token is failing." (Still zero context!)

    THE ATOMIC ASYNC PACKET (1 Message, 0 Friction, Instant Resolution):
    "Hi Priya! Quick question regarding our Auth0 token refresh:
     When users stay idle for >15 mins, the /refresh endpoint returns 401.
     • Staging log: [link]
     • Repro steps: Login -> Wait 16m -> Click dashboard
     Is this expected behavior with our new session timeout, or should
     the client auto-renew silently? No rush—reply whenever you’re free!"
     ▲
     Contains everything needed to resolve the issue in one read!
`,
    },
    pattern: {
      formula: 'GREETING + CORE QUESTION + EVIDENCE/LINKS + ETIQUETTE SIGN-OFF (All in 1 Message)',
      breakdown: [
        { element: 'No "Hey" Pings', meaning: 'Never send "Hi" alone. Always bundle your context into the very first message.' },
        { element: 'Thread Hygiene', meaning: 'Always reply in threads to keep channel feeds clean for the other 50 members.' },
        { element: 'Code & Log Snippets', meaning: 'Use backticks (```) for logs and code instead of pasting raw walls of text.' },
        { element: 'Explicit Urgency Flagging', meaning: 'Label urgency: "Not urgent—whenever you have time", or "[BLOCKER] Need a look before deployment".' },
      ],
      notes: 'Use emoji reactions (👀 = looking, ✅ = resolved, 🚀 = deployed) to acknowledge without triggering notification alerts for everyone.',
    },
    basicExamples: [
      { text: 'Hey Alex! When you have a moment, could you take a look at PR #342? It touches the checkout flow you built.', context: 'Context-rich single ping.', audioText: 'Hey Alex! When you have a moment, could you take a look at PR number 342?' },
      { text: 'Dropping this here asynchronously—no need to look until tomorrow morning.', context: 'Respecting timezone boundaries.', audioText: 'Dropping this here asynchronously, no need to look until tomorrow morning' },
      { text: 'Heads up: staging database will be rebooted at 3 PM UTC for a routine patch (5 mins downtime).', context: 'Clear team broadcast.', audioText: 'Heads up: staging database will be rebooted at 3 PM UTC for a routine patch' },
      { text: 'Replying in thread to keep the main channel clean.', context: 'Thread etiquette statement.', audioText: 'Replying in thread to keep the main channel clean' },
      { text: 'Could someone with AWS production access verify if the S3 bucket policy changed today?', context: 'Targeted broadcast ask.', audioText: 'Could someone with AWS production access verify if the S3 bucket policy changed today?' },
      { text: 'Blocking issue: Stripe webhooks are throwing 502s on staging. Details in thread below.', context: 'Urgent callout with thread containment.', audioText: 'Blocking issue: Stripe webhooks are throwing 502s on staging' },
      { text: 'Marked with eyes emoji—investigating now.', context: 'Async acknowledgment.', audioText: 'Investigating now' },
      { text: 'Resolved! Root cause was an expired client secret; refreshed in Doppler.', context: 'Resolution broadcast.', audioText: 'Resolved! Root cause was an expired client secret' },
    ],
    realLifeExamples: [
      {
        text: 'Hey Sam! Whenever you swing by the grocery store, could you grab two cartons of oat milk? If they don’t have oat milk, almond milk works fine too. Thanks!',
        situation: 'Household errand coordination.',
        context: 'Complete async instructions with fallback options.',
      },
    ],
    professionalExamples: [
      {
        text: 'Hey team! Quick update on the Elasticsearch cluster upgrade:\n• Completed: Primary nodes upgraded to v8.12 with zero downtime\n• In progress: Re-indexing customer log history (65% done)\n• Next: Switching write traffic over at 5 PM EST\nNo action required from anyone; will post here once indexing completes.',
        context: 'Mid-operation async Slack status ping.',
        tone: 'Transparent, calming, informative',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Hey @frontend-team! Quick heads-up on the new `/v2/users` response payload:\nWe added `subscription_tier` and deprecated `account_type`.\n• API Docs: [link]\n• Staging PR: [link]\n• Deprecation timeline: v1 endpoint sunsets in 30 days.\nLet me know in this thread if this breaks any active mock fixtures!',
        analogy: 'Cross-functional API contract announcement on Slack.',
        devContext: 'Slack engineering channel broadcast.',
      },
    ],
    contrast: {
      conceptA: 'The Synchronous "Hey" Trap (Attention Vampires)',
      conceptB: 'The Atomic Async Packet (Deep-Work Respecting)',
      differences: [
        { aspect: 'First Message', optionA: '"Hey mate, quick ping when you’re free."', optionB: 'Complete question with links, logs, repro steps, and urgency level' },
        { aspect: 'Time to Resolution', optionA: '15–30 minutes of synchronous back-and-forth ping-pong', optionB: '1 asynchronous read and 1 definitive reply' },
        { aspect: 'Impact on Deep Work', optionA: 'Pulls the recipient out of code flow immediately', optionB: 'Allows recipient to respond between focus blocks at their own pace' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Pasting 200 lines of raw unformatted stack trace directly into the main public channel.',
        likelyIntention: 'Showing the error.',
        rootCause: 'Clutters everyone’s screen and makes the channel unusable.',
        naturalCorrection: 'Paste the summary in the main message and put the full log inside a code snippet (```) or inside the thread.',
        nativeCadence: '"Posting full stack trace in thread below:"',
      },
      {
        learnerError: 'Using @here or @channel for non-critical, non-urgent questions.',
        likelyIntention: 'Getting anyone to answer quickly.',
        rootCause: 'Notifications chime on 100 people’s laptops simultaneously, burning collective team focus.',
        naturalCorrection: 'Post without mass mentions unless production is literally on fire.',
        nativeCadence: '"For anyone familiar with the billing service:"',
      },
    ],
    nativeIntuition:
      'High-performing remote software teams treat attention as the company’s most expensive asset. When you write clear, self-contained async messages with zero back-and-forth required, teammates love working with you across any timezone.',
    patternRecognitionExercises: [
      {
        id: 'p-117-1',
        prompt: 'Why is sending "Hi Sarah, are you there?" considered bad etiquette in remote engineering teams?',
        options: [
          'Because it is too informal for business communication.',
          'Because it forces Sarah to context-switch without knowing what you need or whether it is urgent.',
          'Because Slack will ban your account for short messages.',
          'Because you should always call people on the phone instead.',
        ],
        correctIndex: 1,
        explanation: 'Sending "Hi" without context creates an anxiety-inducing interruption and forces unnecessary back-and-forth ping-pong.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You need an urgent review from a teammate on a pull request before your deployment window closes in 2 hours.',
        targetPattern: 'Atomic ping: [URGENT/TIME-SENSITIVE] + context + PR link + exact deadline + why it matters',
        hint: 'Keep it polite, direct, and self-contained.',
        sampleAnswer: 'Hey Dan! Quick time-sensitive ask: Could you take a look at PR #481 (hotfix for invoice PDF generation)? Our deployment window closes at 3 PM EST. It’s a 15-line diff in the templating service. Staging test passed: [link]. Much appreciated!',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'ASYNC VOICE-NOTE DRILL: Record a 20-second Slack audio clip giving your team an atomic update on your morning progress and one blocker.',
      timedChallenge: 'State: 1) What you finished, 2) Current task, 3) Blocker with owner, in under 25 seconds.',
      durationSeconds: 25,
      roleplayPrompt: 'You are recording a standup voice memo for your asynchronous team.',
    },
    recallTest: [
      {
        question: 'What is the "No-Hello" rule in async communication?',
        hiddenAnswer: 'The rule that you should never send just "Hello" or "Hey" as a standalone message; you must always combine your greeting with the full context and question in the very first ping.',
      },
    ],
    revisionConnection:
      'Async pings handle daily coordination; but how do you document large architectural decisions that survive for years? Chapter 118 covers Technical Documentation & RFC Design Docs.',
    masteryChallenge:
      'Vow never to send a bare "Hey" again. For the next week, write only complete, context-rich atomic Slack messages. Observe how much faster people help you.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 118: TECHNICAL DOCUMENTATION & RFC DESIGN DOCS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-118',
    partNumber: 11,
    partTitle: 'The Writing Engine: Precision, Structure, and Impact',
    chapterNumber: 118,
    title: 'Technical Documentation & RFC Design Docs',
    subtitle: 'Writing for Developers, Architects, and Future You: Problem Statements, Non-Goals, Architecture Diagrams, and Trade-Off Matrices',
    level: 'Tier 5',
    readingTimeMinutes: 20,
    dna: {
      coreConcept: 'A Great Technical Document Does Not Explain Code; It Explains WHY the Code Exists and Why Alternative Designs Were Rejected',
      mentalModel:
        'Imagine stepping into an ancient temple. The stones tell you how high the ceiling is, but an inscribed plaque explains why it was built to withstand earthquakes. Code is the stones; the RFC (Request for Comments) is the plaque. In senior software engineering, code changes constantly, but the RFC explains the fundamental architectural constraints, trade-offs, and rejected options. The most important section of any great design document is NOT the proposed design—it is the "Non-Goals" and "Alternatives Considered" sections, which protect the system from scope creep and premature optimization.',
      whyEnglishUsesIt:
        'Software architecture is inherently an exercise in compromise under uncertainty. In professional technical prose, clarity is achieved not by asserting perfection, but by systematically documenting constraints, evaluating competing trade-offs, and pre-empting edge cases in writing before investing engineering capital.',
    },
    mentalMovie: {
      sceneDescription:
        'A principal architect reviews a 4-page RFC submitted by a senior engineer. The architect doesn’t start with the architecture diagram. She immediately scans: 1) Problem Statement, 2) Non-Goals, 3) Alternatives Considered. Seeing that the author explicitly evaluated MongoDB vs Postgres and demonstrated why MongoDB failed consistency guarantees, she smiles and stamps "APPROVED". The document answered every skeptical question before it was even asked.',
      schematic: `
    [ THE ANATOMY OF A WORLD-CLASS TECHNICAL RFC ]

    ┌──────────────────────────────────────────────────────────────┐
    │ 1. TITLE & METADATA                                          │
    │    Author, Reviewers, Target Date, Status (Draft/Approved)   │
    ├──────────────────────────────────────────────────────────────┤
    │ 2. CONTEXT & PROBLEM STATEMENT                               │
    │    What is broken today? What metric are we moving?           │
    │    "Our checkout service drops 4% of writes during spikes."   │
    ├──────────────────────────────────────────────────────────────┤
    │ 3. GOALS vs. NON-GOALS (CRITICAL BOUNDARY ENFORCEMENT)       │
    │    • Goals: Handle 10k writes/sec with <50ms p99 latency.    │
    │    • Non-Goals: We will NOT rewrite the legacy reporting DB. │
    ├──────────────────────────────────────────────────────────────┤
    │ 4. PROPOSED ARCHITECTURE & DATA FLOW                         │
    │    ASCII / C4 diagrams, schema changes, API endpoints.       │
    ├──────────────────────────────────────────────────────────────┤
    │ 5. ALTERNATIVES CONSIDERED & TRADE-OFF MATRIX                │
    │    Option A (Selected) vs. Option B (Rejected)               │
    │    Why Option B failed: Higher operational cost, data loss.  │
    ├──────────────────────────────────────────────────────────────┤
    │ 6. ROLLOUT, OBSERVABILITY & ROLLBACK PLAN                    │
    │    Feature flags, metrics to monitor, automated kill switch. │
    └──────────────────────────────────────────────────────────────┘
`,
    },
    pattern: {
      formula: 'PROBLEM STATEMENT + STRICT NON-GOALS + ARCHITECTURAL DESIGN + TRADE-OFF MATRIX + ROLLOUT STRATEGY',
      breakdown: [
        { element: 'The Problem Statement', meaning: 'Ground the doc in measurable customer or system pain. Never propose a tool looking for a problem.' },
        { element: 'Explicit Non-Goals', meaning: 'Prevent scope creep by explicitly stating what this project will deliberately NOT solve.' },
        { element: 'Alternatives Considered', meaning: 'Demonstrate rigorous thinking by proving why other common approaches were considered and rejected.' },
        { element: 'Rollback & Observability', meaning: 'Specify how we will know it is broken and how we recover in under 60 seconds.' },
      ],
      notes: 'Tone must be strictly objective, empirical, and free of hype. Never write: "GraphQL is amazing"; write: "GraphQL reduces payload sizes by 40% for mobile clients".',
    },
    basicExamples: [
      { text: 'Problem Statement: Our current synchronous invoicing workflow causes checkout thread starvation during traffic surges.', context: 'Grounding in operational reality.', audioText: 'Our current synchronous invoicing workflow causes checkout thread starvation during traffic surges' },
      { text: 'Non-Goal: This design does not address international currency conversion or multi-region data replication.', context: 'Explicit non-goal statement.', audioText: 'This design does not address international currency conversion' },
      { text: 'Goal: Reduce p99 order processing latency from 850 milliseconds to under 120 milliseconds.', context: 'Measurable engineering target.', audioText: 'Reduce p99 order processing latency from 850 milliseconds to under 120 milliseconds' },
      { text: 'Option A was rejected because managing ZooKeeper clusters introduces excessive operational maintenance.', context: 'Documenting rejected alternative.', audioText: 'Option A was rejected because managing ZooKeeper clusters introduces excessive operational maintenance' },
      { text: 'The migration will be deployed behind a LaunchDarkly feature flag with an automatic rollback on 5xx error spikes.', context: 'Rollout and safety guarantee.', audioText: 'The migration will be deployed behind a LaunchDarkly feature flag' },
      { text: 'This API guarantees at-least-once delivery; consumers must ensure idempotent processing.', context: 'Precise architectural contract.', audioText: 'This API guarantees at-least-once delivery' },
      { text: 'Schema change: Adding a nullable user_uuid column to avoid long table locks during live migration.', context: 'Zero-downtime database strategy.', audioText: 'Adding a nullable user_uuid column to avoid long table locks' },
      { text: 'Observability: We will emit a Datadog metric `order.processed.duration` tagged with payment provider.', context: 'Telemetry monitoring specification.', audioText: 'We will emit a Datadog metric order processed duration' },
    ],
    realLifeExamples: [
      {
        text: 'Problem: Our kitchen gets chaotic when six family members cook simultaneously.\nGoal: Create a clean prep zone.\nNon-Goal: We are not remodeling the kitchen cabinets.\nChosen Solution: Installing a rolling butcher block island.\nAlternative Rejected: Buying a larger dining table (too expensive, blocks doorway).',
        situation: 'Home improvement decision framework.',
        context: 'Applying RFC structural thinking to daily life.',
      },
    ],
    professionalExamples: [
      {
        text: 'RFC-104: Asynchronous Order Ingestion via Kafka\n\n1. Background: In Q2, our monolithic checkout endpoint experienced 3 outages during flash sales when third-party fraud APIs slowed down.\n\n2. Proposed Architecture: We propose decoupling order acceptance from payment capture using an Apache Kafka topic with three partitions.\n\n3. Alternatives Considered:\n- AWS SQS: Simpler to manage, but lacks the replayability required for financial auditing.\n- RabbitMQ: High throughput, but horizontal autoscaling under partition loss is less resilient for our team’s operational skill set.\n\n4. Rollout: We will run a 5% shadow traffic test in staging for two weeks before production cutover.',
        context: 'Real-world senior engineering RFC.',
        tone: 'Architectural, measured, defensible',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Writing Non-Goals with precision:\n"Non-Goals for Phase 1:\n- Real-time WebSocket notifications (users will poll on page refresh)\n- Mobile native push support (deferred to Q4)\n- Historical audit log export (relying on raw cloud storage dumps for now)"',
        analogy: 'Defending against feature bloat in technical specifications.',
        devContext: 'Engineering design review document.',
      },
    ],
    contrast: {
      conceptA: 'The Code-Only Engineer (No Documentation)',
      conceptB: 'The Staff-Level RFC Author (Systemic Clarity)',
      differences: [
        { aspect: 'Project Initiation', optionA: 'Immediately starts writing code without sharing design or constraints', optionB: 'Writes a 2-page RFC outlining goals, non-goals, and trade-offs first' },
        { aspect: 'Handling Pushback', optionA: 'Gets defensive when teammates question the framework or DB choice', optionB: 'Points calmly to the "Alternatives Considered" matrix in the RFC' },
        { aspect: 'Team Scalability', optionA: 'Single point of failure; only they understand how the system works', optionB: 'Any engineer can onboard, debug, and maintain the system 2 years later' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Writing 10 pages explaining how Redis works in general instead of explaining how YOUR system uses it.',
        likelyIntention: 'Showing thoroughness.',
        rootCause: 'Treating an RFC like a textbook. Senior engineers already know what Redis is; they want to know YOUR key-expiry policy, memory sizing, and cluster topology.',
        naturalCorrection: 'Link to official docs for generic concepts; spend your words on your specific system constraints.',
        nativeCadence: '"For general Redis semantics, see official documentation. Our cluster configuration is as follows:"',
      },
      {
        learnerError: 'Omitting the "Non-Goals" section entirely.',
        likelyIntention: 'Believing that defining goals is enough.',
        rootCause: 'Without non-goals, reviewers will constantly ask: "Can this also do X? Can this also support Y?" and drag the project into endless scope creep.',
        naturalCorrection: 'Always write at least three explicit non-goals to draw a protective fence around your project scope.',
        nativeCadence: '"To keep delivery within Q3, the following items are explicitly out of scope:"',
      },
    ],
    nativeIntuition:
      'Writing an RFC is not an administrative chore; it is the highest-leverage engineering you will ever do. A bug found in an RFC takes 5 minutes to fix with a backspace key; the same bug found in production takes 3 weeks of sleepless hotfixes.',
    patternRecognitionExercises: [
      {
        id: 'p-118-1',
        prompt: 'What is the primary function of the "Non-Goals" section in an architectural RFC?',
        options: [
          'To list tasks that the engineering team gave up on because they were too hard.',
          'To define explicit boundaries and protect the project from scope creep and unrealistic expectations.',
          'To explain why the author should get promoted.',
          'To list features that will never be built in any company product.',
        ],
        correctIndex: 1,
        explanation: 'Non-goals define clear boundaries, ensuring all stakeholders agree on what is deliberately excluded from this iteration.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Write a concise "Non-Goals" section for an RFC proposing a new internal employee directory tool.',
        targetPattern: 'Bullet list of 3 explicit, realistic boundaries using negative phrasing ("This project will NOT...")',
        hint: 'Think about payroll, external access, and complex permissions.',
        sampleAnswer: 'Non-Goals:\n• We will not integrate payroll or compensation data in this phase.\n• We will not provide external public access; this tool is strictly behind internal corporate SSO.\n• We will not build a custom mobile app; the web interface will be responsive on mobile browsers.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'DEFENDING AN RFC: Explain out loud in 30 seconds why you chose PostgreSQL over DynamoDB for a financial ledger service, emphasizing ACID compliance.',
      timedChallenge: 'State the choice and the core trade-off justification in under 30 seconds.',
      durationSeconds: 30,
      roleplayPrompt: 'You are presenting an RFC at an Architecture Review Board.',
    },
    recallTest: [
      {
        question: 'Why is the "Alternatives Considered" section often considered the most important part of an RFC by principal architects?',
        hiddenAnswer: 'Because it proves that the author evaluated multiple solutions objectively, anticipated trade-offs, and didn’t just pick a framework because it was trendy or familiar.',
      },
    ],
    revisionConnection:
      'RFCs convince technical peers; but how do you communicate high-level progress, blockers, and decisions to executives and directors? Chapter 119 covers Written Persuasion & Executive Status Updates.',
    masteryChallenge:
      'Draft a 1-page design doc for a feature you are currently building or planning. Include Problem Statement, Goals, Non-Goals, and Alternatives Considered. Share it with a teammate for feedback.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 119: WRITTEN PERSUASION & EXECUTIVE STATUS UPDATES
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-119',
    partNumber: 11,
    partTitle: 'The Writing Engine: Precision, Structure, and Impact',
    chapterNumber: 119,
    title: 'The Art of Written Persuasion & Executive Status Updates',
    subtitle: 'The PPP Framework (Progress, Plans, Problems), Framing Trade-Offs, and Writing Updates Executives Actually Read',
    level: 'Tier 5',
    readingTimeMinutes: 18,
    dna: {
      coreConcept: 'Executive Visibility is Risk Transparency: Executives Don’t Want Happy Lies; They Want Early Signals, Objective Trade-Offs, and Concrete Mitigation Plans',
      mentalModel:
        'Imagine being the captain of a submarine. You are in deep water and cannot see outside. You rely 100% on the sonar operator. If the sonar operator says: "Everything is wonderful!" while a sea mountain is 200 meters ahead, the submarine crashes. If the operator says: "Sea mountain detected at 500 meters; recommending a 15-degree turn to starboard to clear it with zero delay," you trust them with your life. Executive status updates (weekly digests, board memos, portfolio syncs) are corporate sonar. The PPP Framework (Progress, Plans, Problems) delivers pure, unvarnished telemetry with ready-made solutions.',
      whyEnglishUsesIt:
        'Executive decision-makers operate at high cognitive load and cannot parse low-level operational minutiae. Deductive corporate English relies on standardized progress reporting (PPP) to decouple emotional anxiety from business performance and enable rapid risk-calibrated resource allocation.',
    },
    mentalMovie: {
      sceneDescription:
        'A Director of Engineering scrolls through 8 team updates on Friday afternoon. Seven updates are 600-word diary entries detailing every ticket worked on. She skims them with irritation. Then she hits Team Bravo’s update: Traffic-light status [YELLOW], 3 bullet points for Progress, 2 for Plans, 1 Problem clearly highlighted with a proposed fix. She replies: "Approved the vendor waiver. Thanks for flagging early, team." Clear updates earn executive air cover.',
      schematic: `
    [ THE PPP EXECUTIVE STATUS ENGINE ]

    HEADER: Project Name | Status: [ GREEN / YELLOW / RED ] | Target Date
    Ex: Cloud Migration | Status: YELLOW | Target: Nov 15

    ┌──────────────────────────────────────────────────────────────┐
    │ 1. PROGRESS (What shipped since last update? - Concrete wins) │
    │    • Migrated 14 of 18 microservices to EKS cluster          │
    │    • Zero downtime recorded across staging cutover            │
    │    • Reduced average API latency by 32ms                     │
    ├──────────────────────────────────────────────────────────────┤
    │ 2. PLANS (What is shipping in the next cycle? - Commitments)  │
    │    • Cut over primary billing service (Thursday 02:00 UTC)    │
    │    • Complete end-to-end pen-testing verification with vendor │
    ├──────────────────────────────────────────────────────────────┤
    │ 3. PROBLEMS & BLOCKERS (Risk telemetry + Proposed Solution!) │
    │    • Problem: Third-party payment vendor API sandbox is down │
    │    • Impact: Risks delaying checkout verification by 2 days  │
    │    • Mitigation: Switched to recorded mock fixtures while     │
    │      escalating via our dedicated Slack enterprise channel   │
    │    • Ask: Need VP escalation to vendor account manager       │
    └──────────────────────────────────────────────────────────────┘
`,
    },
    pattern: {
      formula: 'TRAFFIC LIGHT [STATUS] + PROGRESS (Metrics) + PLANS (Milestones) + PROBLEMS (Risk + Mitigation + Ask)',
      breakdown: [
        { element: 'Traffic Light Framing', meaning: 'GREEN = On track. YELLOW = Risks identified, mitigation active. RED = Off track, needs executive intervention.' },
        { element: 'Progress in Metrics', meaning: 'Report outcomes, not effort. Never write: "Worked hard on tickets"; write: "Closed 14 bugs, reducing open backlog by 22%".' },
        { element: 'Problems with Solutions', meaning: 'Never present a problem without a proposed solution or explicit ask. "Here is the issue, here is what we are doing, here is what we need from you."' },
      ],
      notes: 'Bad news does not get better with age. Flagging YELLOW early shows senior maturity; hiding problems until they turn RED destroys executive trust.',
    },
    basicExamples: [
      { text: 'Project Status: [GREEN] All sprint deliverables on schedule for Thursday release.', context: 'Clear status indicator.', audioText: 'Project Status: Green. All sprint deliverables on schedule for Thursday release' },
      { text: 'Progress: Deployed the new caching layer, reducing database CPU utilization from 85% to 42%.', context: 'Metric-driven progress bullet.', audioText: 'Deployed the new caching layer, reducing database CPU utilization from 85% to 42%' },
      { text: 'Progress: Onboarded two senior engineers; both completed their first production PRs this week.', context: 'Team growth progress.', audioText: 'Onboarded two senior engineers; both completed their first production PRs this week' },
      { text: 'Plans: Finalize user acceptance testing with the enterprise pilot cohort by Friday.', context: 'Concrete forward milestone.', audioText: 'Finalize user acceptance testing with the enterprise pilot cohort by Friday' },
      { text: 'Problem: Apple App Store review requested clarifications on our subscription data collection.', context: 'Objective blocker flag.', audioText: 'Apple App Store review requested clarifications on our subscription data collection' },
      { text: 'Mitigation: Legal has prepared a response; resubmitting metadata today with zero projected launch delay.', context: 'Self-sufficient remediation.', audioText: 'Legal has prepared a response; resubmitting metadata today with zero projected launch delay' },
      { text: 'Executive Ask: Need VP approval to provision 4 additional GPU nodes for model evaluation.', context: 'Unambiguous upward ask.', audioText: 'Need VP approval to provision 4 additional GPU nodes for model evaluation' },
      { text: 'Overall confidence score: High (90%). No external dependencies blocking delivery.', context: 'Confidence calibration.', audioText: 'Overall confidence score: High. No external dependencies blocking delivery' },
    ],
    realLifeExamples: [
      {
        text: 'Apartment Hunt Update | Status: YELLOW\nProgress: Toured 4 apartments in Brooklyn; shortlisted 2.\nPlans: Submitting application for the Park Slope unit tomorrow morning.\nProblem: Landlord requires a guarantor or an additional month deposit.\nSolution/Ask: Asking Dad to co-sign by Wednesday.',
        situation: 'Personal housing search update to a partner or family.',
        context: 'Structured PPP format in personal life.',
      },
    ],
    professionalExamples: [
      {
        text: 'WEEKLY EXECUTIVE DIGEST: Identity & Access Management (IAM) Modernization\nStatus: [YELLOW] | Target Delivery: Oct 31 | Lead: Neha Sharma\n\n1. PROGRESS (Past Week):\n• Rolled out Okta SSO to 850 corporate employees (94% adoption)\n• Sunken legacy LDAP server with zero user-reported ticket escalations\n• Security score improved from C+ to A on our internal compliance audit\n\n2. PLANS (Next Week):\n• Enforce hardware security key (FIDO2) requirement for all DevOps engineers\n• Initiate vendor security review for contractors\n\n3. RISKS & PROBLEMS:\n• Blocker: 12 legacy internal tools do not support SAML 2.0 authentication\n• Mitigation: Engineering proxy team built an OAuth2 adapter for 8 of them\n• Executive Ask: Need business owner sign-off to deprecate the remaining 4 unused tools by Nov 5',
        context: 'Senior Director weekly report.',
        tone: 'Executive, trustworthy, transparent',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Framing a trade-off for non-technical stakeholders:\n"We have two options for the database failover architecture:\n• Option 1: Multi-region active-active (Zero downtime, but adds $15k/mo cloud cost and 3 weeks of dev work)\n• Option 2: Automated single-region failover (5-minute recovery time, zero extra cost, ready in 3 days)\nRecommendation: We advise starting with Option 2 for MVP launch, which preserves 99.9% availability while conserving runway."',
        analogy: 'Presenting technical decisions as business trade-offs.',
        devContext: 'Executive architecture briefing.',
      },
    ],
    contrast: {
      conceptA: 'The Vague "Diary" Update (Low Status)',
      conceptB: 'The Metric-Driven PPP Update (Executive Trust)',
      differences: [
        { aspect: 'Content Focus', optionA: '"Worked on fixing bugs, attended many meetings, investigated logs"', optionB: '"Progress: Resolved 8 high-priority bugs, lowering crash rate to 0.04%"' },
        { aspect: 'Problem Handling', optionA: 'Hides problems until deadline day, then panics and blames other teams', optionB: 'Flags YELLOW two weeks early with clear mitigation and explicit ask' },
        { aspect: 'Executive Perception', optionA: 'Unpredictable, risky to give bigger scope or budgets', optionB: 'Reliable, transparent, prime candidate for leadership promotion' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Always reporting [GREEN] out of fear of looking incompetent, even when the project is secretly burning.',
        likelyIntention: 'Protecting team reputation.',
        rootCause: 'Believing that executives punish bad news. In reality, executives punish SURPRISES. A yellow reported early earns praise; a green that turns red on release day causes executive rage.',
        naturalCorrection: 'Embrace YELLOW early: "We are currently Yellow due to vendor latency, but we have a clear mitigation path."',
        nativeCadence: '"Tracking as Yellow this week while we resolve the vendor bottleneck."',
      },
      {
        learnerError: 'Listing every single Jira ticket number without translating them into business impact.',
        likelyIntention: 'Proving how much work was done.',
        rootCause: 'Executives do not know or care what "TICKET-4821" is. They care whether checkout is faster or conversion increased.',
        naturalCorrection: 'Translate tickets into outcomes: "Resolved checkout payment timeouts, improving conversion by 1.2%."',
        nativeCadence: '"Optimized checkout flow, saving an estimated 4 seconds per transaction."',
      },
    ],
    nativeIntuition:
      'Executive communication is an exercise in empathy for high-stress decision makers. Give them the bottom line, the hard metrics, and the honest risks. When they see you run your project with that level of rigor, they give you autonomy.',
    patternRecognitionExercises: [
      {
        id: 'p-119-1',
        prompt: 'When should a project status be shifted from GREEN to YELLOW in an executive update?',
        options: [
          'Only on the day of the deadline when delivery is guaranteed to fail.',
          'As soon as a credible risk emerges that could impact timeline, scope, or budget, even if mitigation is underway.',
          'Never, because executives get angry when they see yellow.',
          'Only after the CEO personally asks why things are slow.',
        ],
        correctIndex: 1,
        explanation: 'Yellow is an early warning indicator designed to signal that risks have emerged and mitigation is actively underway.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Write a 3-bullet PPP update for a mobile app project that is slightly delayed because the push notification vendor had an outage.',
        targetPattern: 'Status [YELLOW] + 1 Progress bullet + 1 Plan bullet + 1 Problem with mitigation',
        hint: 'State the outage clearly and provide the fallback action.',
        sampleAnswer: 'Mobile App v2.1 | Status: [YELLOW] | Target: Next Tuesday\n• Progress: Completed UI redesign and offline storage caching with 100% test coverage.\n• Plans: Run final end-to-end regression testing across iOS and Android devices on Monday.\n• Problem: Push notification vendor API experienced intermittent outages yesterday, slowing QA testing. Mitigation: QA team switched to local test push triggers; overall release delayed by only 24 hours.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'THE 45-SECOND EXECUTIVE BRIEFING: Speak aloud a verbal status update to your CTO about a project that is tracking YELLOW due to a database migration issue.',
      timedChallenge: 'Deliver Status, Progress, and the Problem with your proposed fix in under 45 seconds.',
      durationSeconds: 45,
      roleplayPrompt: 'You are stepping into an elevator with your CTO.',
    },
    recallTest: [
      {
        question: 'What do the letters in the PPP framework stand for, and what must always accompany a "Problem"?',
        hiddenAnswer: 'PPP stands for Progress, Plans, Problems. A Problem must ALWAYS be accompanied by its business impact, an active mitigation plan, and any specific executive ask.',
      },
    ],
    revisionConnection:
      'Structure and facts build credibility; but how do you control the emotional temperature of your writing? Chapter 120 teaches Tone Calibration: from firm executive directness to diplomatic warmth.',
    masteryChallenge:
      'Structure your weekly Friday work recap or personal milestone update using the exact PPP format. Notice the immediate praise you receive for clarity.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 120: TONE CALIBRATION IN WRITING
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-120',
    partNumber: 11,
    partTitle: 'The Writing Engine: Precision, Structure, and Impact',
    chapterNumber: 120,
    title: 'Tone Calibration in Writing: Directness vs. Diplomatic Warmth',
    subtitle: 'Mastering the Spectrum from Firm Boundary-Setting to Collaborative Empathy without Sounding Aggressive or Weak',
    level: 'Tier 5',
    readingTimeMinutes: 19,
    dna: {
      coreConcept: 'Written Text Has No Facial Expressions: Calibrate Your Tone Spectrum deliberately using Modals, Softeners, and Objective Anchors',
      mentalModel:
        'Imagine an audio mixing console with equalization sliders. In spoken conversation, your smiling eyes, warm tone of voice, and body posture provide 80% of the EQ. In written text (Slack, email, GitHub reviews), that acoustic warmth is stripped away completely. Flat, direct sentences ("Fix this", "You forgot tests", "This is wrong") can sound brutally aggressive, cold, or hostile to international colleagues. Conversely, over-softened sentences ("If it’s not too much trouble, maybe if you have time could you perhaps check...") sound timid, insecure, and lack authority. Tone calibration is your written mixing console. You slide between Firm Directness and Diplomatic Warmth depending on the context.',
      whyEnglishUsesIt:
        'Without the paralinguistic cues of pitch, gaze, and posture, written English relies on modal auxiliary verbs (could, would, might), conditional framing, and collaborative lexical pivots to preserve psychological safety while upholding rigorous technical standards.',
    },
    mentalMovie: {
      sceneDescription:
        'Look at two code review comments on the exact same bug. Reviewer A writes: "Why did you use var here? This breaks linting. Fix it." The author feels attacked and defensive. Reviewer B writes: "Good catch on handling the null case! Let’s swap `var` for `const` here to match our style guide and avoid scope leakage." The author smiles, types "Good point!", and fixes it in 10 seconds. Same technical instruction; completely different relational outcome.',
      schematic: `
    [ THE 4-STAGE WRITTEN TONE SPECTRUM ]

    STAGE 1: PASSIVE / WEAK (Lacks authority, invites boundary violations)
    "I am terribly sorry to bother you, but if you happen to have a minute,
     maybe could you possibly look at this PR? No worries if you’re busy!"
    ──> Reader deprioritizes your ask; perceives you as very junior.

    STAGE 2: DIPLOMATIC & COLLABORATIVE (Ideal for code reviews & peers)
    "Thanks for putting this together! One suggestion: what do you think
     about extracting lines 45–60 into a helper function to improve readability?"
    ──> Respectful, collaborative, moves code quality forward friction-free.

    STAGE 3: FIRM & DIRECT (Ideal for project management, deadlines, boundaries)
    "To hit our deployment cutoff, we need these three test cases passing by
     3 PM today. Let me know if you need pairing assistance."
    ──> Clear, objective, zero ambiguity, professional.

    STAGE 4: UNCOMPROMISING & COMPLIANT (Security, legal, critical outages)
    "This endpoint exposes unencrypted user tokens. Merging is blocked
     pending immediate remediation of the auth middleware."
    ──> Absolute objective authority; removes personal judgment.
`,
    },
    pattern: {
      formula: 'OBSERVATION OF FACT + OBJECTIVE IMPACT + SUGGESTED / REQUIRED ACTION (Anchored to shared goals)',
      breakdown: [
        { element: 'The Code Review Formula', meaning: 'Praise intent + Suggest improvement + State rationale: "Great logic here. Could we memoize this hook to prevent unnecessary re-renders?"' },
        { element: 'The Firm Boundary Formula', meaning: 'Acknowledge request + State objective constraint + Offer viable alternative: "I’d love to help; however, my bandwidth is committed to the billing launch until Thursday. Can we review this Friday?"' },
        { element: 'The Diplomatic Pushback', meaning: 'Replace "You are wrong" with: "I have a slightly different perspective on this based on our recent load tests..."' },
      ],
      notes: 'Never write in anger or frustration. If an email raises your heart rate, draft your response, wait 30 minutes, re-read it objectively, and soften the edges before sending.',
    },
    basicExamples: [
      { text: 'Diplomatic: What do you think about breaking this component into two smaller files?', context: 'Collaborative code review suggestion.', audioText: 'What do you think about breaking this component into two smaller files?' },
      { text: 'Firm: We need these test cases passing before we can approve the pull request.', context: 'Clear professional standard.', audioText: 'We need these test cases passing before we can approve the pull request' },
      { text: 'Diplomatic: I see where you’re coming from; my only concern is the impact on memory usage.', context: 'Respectful technical disagreement.', audioText: 'I see where you’re coming from; my only concern is the impact on memory usage' },
      { text: 'Firm Boundary: I cannot take on new roadmap items this sprint without descoping an existing priority.', context: 'Senior scope protection.', audioText: 'I cannot take on new roadmap items this sprint without descoping an existing priority' },
      { text: 'Diplomatic: Thanks for the quick turnaround on this! Just left a couple of minor comments in the doc.', context: 'Warm peer collaboration.', audioText: 'Thanks for the quick turnaround on this! Just left a couple of minor comments in the doc' },
      { text: 'Uncompromising: Merging is blocked until this hardcoded secret is moved to environment variables.', context: 'Security enforcement.', audioText: 'Merging is blocked until this hardcoded secret is moved to environment variables' },
      { text: 'Diplomatic: Could you clarify the expected behavior when a user is offline?', context: 'Curious, non-judgmental inquiry.', audioText: 'Could you clarify the expected behavior when a user is offline?' },
      { text: 'Firm: To stay on track for Q4 launch, we need stakeholder sign-off by Friday at 5 PM.', context: 'Time-bound executive expectation.', audioText: 'To stay on track for Q4 launch, we need stakeholder sign-off by Friday at 5 PM' },
    ],
    realLifeExamples: [
      {
        text: 'Too blunt: "I can’t come to your party. I’m busy."\nCalibrated warmth: "Thank you so much for the invite! Unfortunately I already have plans that evening, but I’d love to catch up soon. Hope you have a wonderful birthday celebration!"',
        situation: 'Declining a social invitation.',
        context: 'Preserving personal warmth while maintaining boundaries.',
      },
    ],
    professionalExamples: [
      {
        text: 'Firm Pushback to a Product Manager asking for an unfeasible deadline:\n"Hi Rachel, I completely understand the desire to ship this feature before the marketing webinar next Tuesday. However, implementing the payment gateway integration safely requires at least five days of end-to-end testing to prevent billing discrepancies. If Tuesday is a hard deadline, we can ship the view-only tier on Tuesday and release payments the following week. Let me know which approach aligns best with your goals."',
        context: 'Managing stakeholder expectations with diplomacy and strength.',
        tone: 'Calm, strategic, solution-oriented',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Calibrated Code Review Tone:\nHarsh: "Don’t use a loop here, it’s O(N^2). This is terrible for performance."\nCalibrated: "Nice implementation! Since this user list can grow to several thousand entries in enterprise accounts, using a Map lookup here instead of the nested loop will bring lookup time down from O(N^2) to O(1). What do you think?"',
        analogy: 'Turning code reviews from combative battlegrounds into high-trust learning environments.',
        devContext: 'GitHub PR review comment.',
      },
    ],
    contrast: {
      conceptA: 'Harsh / Accusatory Tone ("You broke this")',
      conceptB: 'Objective / Calibrated Tone ("The system behaves unexpectedly")',
      differences: [
        { aspect: 'Subject of Sentence', optionA: '"You didn’t handle errors properly in the controller"', optionB: '"The controller doesn’t currently catch 404 responses from the backend"' },
        { aspect: 'Focus', optionA: 'Personal criticism aimed at the author', optionB: 'Objective behavior of the code and system' },
        { aspect: 'Team Morale Impact', optionA: 'Creates defensiveness, anxiety, and slow review cycles', optionB: 'Fosters psychological safety, high standards, and fast merges' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Using "Why did you..." in code reviews: "Why did you write this function this way?"',
        likelyIntention: 'Asking for the reason.',
        rootCause: '"Why did you..." feels like a parental interrogation in English. It immediately triggers defensive fight-or-flight psychology.',
        naturalCorrection: 'Reframe with curiosity or focus on the code: "Could you walk me through the thinking behind this approach? Or: "What was the motivation for using X over Y?"',
        nativeCadence: '"Help me understand the rationale behind this pattern:"',
      },
      {
        learnerError: 'Over-apologizing in professional requests: "Sorry to bother you again, so sorry..."',
        likelyIntention: 'Showing extreme politeness.',
        rootCause: 'Signals low confidence and makes you sound guilty for simply doing your job.',
        naturalCorrection: 'Replace apologies with appreciation: "Thanks for your patience while we worked through this," or "Thanks for taking a look at this."',
        nativeCadence: '"Thanks for reviewing this on short notice!"',
      },
    ],
    nativeIntuition:
      'Criticize the code, never the person. Ground your feedback in shared principles: readability, performance, security, and customer trust. When your team knows your standards are rooted in objective quality, you can be as direct as necessary without ever offending anyone.',
    patternRecognitionExercises: [
      {
        id: 'p-120-1',
        prompt: 'Which code review comment is most calibrated for a high-trust engineering culture?',
        options: [
          '"This is wrong. Why didn’t you write unit tests?"',
          '"Please fix the test coverage immediately."',
          '"Great progress on the core logic! Could we add unit tests for the empty-array edge case before merging?"',
          '"I would never approve this without tests."',
        ],
        correctIndex: 2,
        explanation: 'Option C acknowledges the positive progress, specifies the exact missing edge case, and frames the request collaboratively.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'A colleague asks you on Slack to join an unscheduled 45-minute call right now while you are in deep focus mode.',
        targetPattern: 'Firm boundary + reason + alternative time window',
        hint: 'Politely protect your focus block without sounding dismissive.',
        sampleAnswer: 'Hey Kevin! I’m currently heads-down in a deep debugging session for the release hotfix. Could we connect at 3:30 PM today, or would it be faster to drop the context asynchronously in Slack? Let me know!',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'CALIBRATING PUSHBACK: Speak aloud a response to your manager who just asked you to take on a third urgent project while you are already at 100% capacity.',
      timedChallenge: 'State your current commitments and ask which project should be deprioritized in under 30 seconds.',
      durationSeconds: 30,
      roleplayPrompt: 'You are in a 1-on-1 meeting with your engineering manager.',
    },
    recallTest: [
      {
        question: 'Why should you avoid phrasing code review feedback as "Why did you do X?" and what is the better alternative?',
        hiddenAnswer: '"Why did you do X?" sounds like an accusatory personal interrogation. A better alternative is curiosity-driven: "Could you walk me through the trade-offs here?" or objective: "What do you think about using Y here to improve performance?"',
      },
    ],
    revisionConnection:
      'Congratulations on completing Part 11: The Writing Engine! You now possess a complete system for sentence economy, high-impact emails, async etiquette, RFCs, executive updates, and tone calibration. Next up in Part 12: Software Engineering & Technical English!',
    masteryChallenge:
      'Review your last 5 written messages (emails, PR comments, or Slack pings). Identify one that could be softened with diplomatic warmth and one that needed firmer directness. Rewrite both for your personal swipe file.',
  },
];
