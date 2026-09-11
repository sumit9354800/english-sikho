import { Chapter } from '../types';

export const PART_15_CHAPTERS: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // CHAPTER 139: THE "DO THE NEEDFUL" & "REVERT BACK" ERADICATION
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-139',
    partNumber: 15,
    partTitle: 'Indian English to Global Workplace English',
    chapterNumber: 139,
    title: 'The "Do the Needful" & "Revert Back" Eradication',
    subtitle: 'Retiring Archaic Victorian Legalese and Redundant Phrasing for Crisp, High-Agency Ownership',
    level: 'Tier 6 & Tier 7',
    readingTimeMinutes: 22,
    dna: {
      coreConcept: 'Replace Passive Bureaucratic Placeholders with Explicit Action Verbs and Accountability',
      mentalModel:
        'Imagine walking into an automotive repair shop with a sputtering car. You hand the keys to the mechanic and say: "Please do the needful and revert back to me." The mechanic looks at the keys in bewilderment. What is the needful? Are you asking for an oil change, a brake pad replacement, a transmission overhaul, or a tire rotation? And what does "revert back" mean? In standard English, "revert" means to regress to a former primitive state (like a domesticated dog reverting to a wild wolf) or to roll back code. In 19th-century British colonial administration, British civil servants used "do the needful" in legal petitions. But while Britain and the global business world retired these phrases 100 years ago, they survived in Indian bureaucratic textbooks. When speaking to global colleagues in London, Seattle, or Zurich, these phrases sound cryptic, passive-aggressive, and archaic. High-agency professionals state the exact action and specify the expected response.',
      whyEnglishUsesIt:
        'Global business culture demands explicit agency and clarity. "Please do the needful" dumps the cognitive burden of figuring out what needs to be done onto the recipient. Modern executive English uses targeted imperatives ("Please review the attached contract and sign page 4", "Could you approve the pull request by 3 PM?") and replaces "revert back" with precise conversational verbs: "reply", "respond", "get back to me", or "follow up".',
    },
    mentalMovie: {
      sceneDescription:
        'An Indian software engineer sends a Slack message to an engineering director in San Francisco: "Hi John, PFA the logs. Please do the needful and revert back at the earliest." The director stares at the message: What am I supposed to do with these logs? Approve a deployment? Debug a memory leak? Forward them to security? The director closes Slack with a sigh. In contrast, another engineer writes: "Hi John, I\'ve attached the crash logs from this morning\'s staging outage. Could you verify whether the authentication token in line 42 matches our OAuth server config? Please let me know your thoughts by 2 PM so we can unblock the release." John immediately replies with the exact fix in 4 minutes. Specificity creates velocity.',
      schematic: `
    [ THE ARCHAIC INDIANISM TO GLOBAL WORKPLACE TRANSLATION MATRIX ]

    1. "PLEASE DO THE NEEDFUL" ➔ EXPLICIT REQUEST + OWNER + OBJECT
       ❌ "PFA the invoice. Please do the needful."
       ✅ "Attached is the invoice. Could you please sign Section 2 and route it
           to finance for processing?"

    2. "PLEASE REVERT BACK" ➔ NATURAL CONVERSATIONAL ACTION
       (Grammar Note: "Revert" already implies return, so "revert back" is a double redundancy!)
       ❌ "Please revert back with your feedback."
       ✅ "Please let me know your feedback by Friday." / "Looking forward to your reply."
       ✅ "I'll follow up with you tomorrow morning once the tests finish running."

    3. "PFA" (Please Find Attached) ➔ MODERN CONVERSATIONAL ATTACHMENT
       ❌ "PFA the document."
       ✅ "I've attached the architecture diagram below." / "Here is the updated spec."

    4. "AT THE EARLIEST" ➔ BOUNDED TIME ANCHOR
       ❌ "Please do this at the earliest." (Ambiguous: 5 minutes or next week?)
       ✅ "Could you take a look by EOD Thursday?" / "Given our launch date, we need this by noon tomorrow."
`,
    },
    pattern: {
      formula: 'EXPLICIT ATTACHMENT CONTEXT ("I\'ve attached...") + SPECIFIC TASK REQUEST ("Could you review...") + BOUNDED TIMELINE ("...by 3 PM")',
      breakdown: [
        { element: 'Contextual Attachment', meaning: 'Replace "PFA" with "I\'ve attached [Document]", "Here is [File]", or "Sharing the updated [Artifact]".' },
        { element: 'Action-Specific Verb', meaning: 'Replace "do the needful" with "review", "approve", "sign", "verify", "reconcile", or "merge".' },
        { element: 'Natural Follow-Up Verb', meaning: 'Replace "revert back" with "reply", "let me know", "follow up", or "get back to you".' },
        { element: 'Concrete Time Anchor', meaning: 'Replace "at the earliest" with an explicit date/time: "by 2 PM EST", "by EOD Friday", or "before tomorrow\'s stand-up".' },
      ],
      notes: 'Remember: In database engineering, "revert" means rolling back a Git commit or database migration. Telling an engineer "Please revert" sounds like you are ordering them to delete their code!',
    },
    basicExamples: [
      { text: 'I’ve attached the sprint report. Could you review the QA metrics before our 2 PM sync?', context: 'Clean email attachment', audioText: 'I have attached the sprint report. Could you review the QA metrics before our sync?' },
      { text: 'I’ll investigate the memory leak and get back to you with a diagnosis by tomorrow morning.', context: 'Replacing revert back', audioText: 'I will investigate the memory leak and get back to you with a diagnosis by tomorrow' },
      { text: 'Could you approve the purchase order in Workday so we can finalize the server order?', context: 'Replacing do the needful', audioText: 'Could you approve the purchase order in Workday so we can finalize the server order?' },
      { text: 'Please let me know if you have any feedback on the design mockups by Friday noon.', context: 'Polite deadline request', audioText: 'Please let me know if you have any feedback on the design mockups by Friday noon' },
      { text: 'Here are the API credentials for the staging environment.', context: 'Conversational file sharing', audioText: 'Here are the API credentials for the staging environment' },
    ],
    realLifeExamples: [
      {
        text: '"Hi Sarah, here are the flight confirmation details for our weekend trip. Could you pick the hotel from the two options on page 2 and text me your preference by tonight so I can book it?"',
        situation: 'Planning travel with a friend.',
        context: 'Replacing "PFA tickets do the needful and revert back" in personal communication.',
      },
      {
        text: '"Good morning officer, I’ve brought the completed lease agreement and two utility bills. Could you please notarize Section B for our address verification?"',
        situation: 'Submitting documents to an administrative official.',
        context: 'Being action-specific rather than using archaic colonial petitions.',
      },
    ],
    professionalExamples: [
      {
        text: '"Hi Team, I’ve shared the draft RFC for our Redis caching tier. Please add your comments directly in Google Docs by end-of-day Wednesday so we can consolidate feedback ahead of Thursday’s architecture review."',
        context: 'Email / Slack announcement to a global engineering team.',
        tone: 'Crisp, collaborative, specific deadlines',
      },
      {
        text: '"David, I will review the vendor agreement with our legal team today and follow up with you tomorrow afternoon with our signed countersheet."',
        context: 'Closing a client status sync.',
        tone: 'Accountable, proactive, natural modern phrasing',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Pull Request Message: "I’ve addressed the requested changes in commit `3f8a9`. Could you re-review lines 84–112 and merge if everything looks clean?"',
        analogy: 'Direct, polite, self-service request replacing "PFA PR do the needful revert back".',
        devContext: 'GitHub / GitLab PR comments.',
      },
      {
        text: 'Incident Hand-off: "I’ve documented the root cause analysis for the DNS timeout in ticket OPS-409. Mark, could you verify the firewall egress rules on the Ireland cluster and confirm once traffic normalizes?"',
        analogy: 'Assigning a specific verification task rather than a vague instruction.',
        devContext: 'SRE / DevOps on-call shift rotation hand-off.',
      },
    ],
    contrast: {
      conceptA: 'Archaic Indian Administrative Bureaucratese (Cryptic & Passive)',
      conceptB: 'Global Collaborative Workplace English (Crisp & High-Agency)',
      differences: [
        { aspect: 'Requesting Action', optionA: '"PFA the document. Kindly do the needful at the earliest."', optionB: '"I’ve attached the revised statement of work. Could you please sign page 3 and send it back by Thursday?"' },
        { aspect: 'Promising an Update', optionA: '"I will check on the issue and revert back."', optionB: '"I’ll look into the database timeout and get back to you with an update by 4 PM."' },
        { aspect: 'Tone & Perception', optionA: 'Perceived by international teams as evasive, outdated, and lacking clear ownership.', optionB: 'Perceived as proactive, transparent, professional, and easy to collaborate with.' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Writing "Please revert back with your comments" in an email to US/UK colleagues.',
        likelyIntention: 'Asking for a response or reply.',
        rootCause: '"Revert" in standard global English means to regress or roll back to a previous state. In addition, pairing "revert" with "back" is redundant.',
        naturalCorrection: 'Use "get back to me", "reply", "respond", or "let me know": "Please let me know your thoughts by tomorrow."',
        nativeCadence: '"Please let me know what you think by tomorrow."',
      },
      {
        learnerError: 'Writing "PFA the file" as the entire body of an email.',
        likelyIntention: 'Sending an attachment quickly.',
        rootCause: 'Relying on a curt, impersonal bureaucratic acronym without conversational framing.',
        naturalCorrection: 'Write a full, warm sentence: "I’ve attached the updated release notes below for your review."',
        nativeCadence: '"I’ve attached the updated notes below for your review."',
      },
    ],
    nativeIntuition:
      'Native global executives value clarity above all else. Every time you write an email or Slack message, ask yourself: "If the recipient only has 10 seconds to read this on their phone while walking to a meeting, do they know EXACTLY what button to click or what to type?" If the answer is no, rewrite it.',
    patternRecognitionExercises: [
      {
        id: 'p-139-1',
        prompt: 'You are emailing a client with the final system architecture proposal. Which message reflects the highest standard of modern global professional communication?',
        options: [
          '"Dear Sir, PFA the proposal. Kindly do the needful and revert back at the earliest."',
          '"Hi Thomas, I’ve attached our finalized architecture proposal for the cloud migration. Could you review the security compliance section on page 8 and let us know if you approve by Friday noon? Happy to jump on a quick 10-minute sync if any questions arise."',
          '"Please find attached the needful file and revert with comments ASAP."',
          '"I am sending the proposal. Do what is required and revert back."',
        ],
        correctIndex: 1,
        explanation: 'Option B is warm, specific, highlights the exact page requiring attention (page 8), specifies a concrete deadline (Friday noon), and offers collaborative support.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You need your manager to approve a $500 software subscription license for JetBrains before Friday. Rewrite the typical message ("PFA license quote, kindly do the needful and revert back") into crisp, modern executive English.',
        targetPattern: 'Context + Attached file + Specific action request + Justification + Deadline.',
        hint: 'Use "I’ve attached the quote", "Could you approve this in the procurement portal", "by Thursday afternoon so our team can access the tools by Monday".',
        sampleAnswer: 'Hi Priya, I’ve attached the $500 invoice quote for our annual JetBrains licenses. Could you please approve the purchase request in the procurement portal by Thursday afternoon? This will ensure the team has active licenses ready for the sprint kick-off on Monday.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'Deliver this update with proactive, natural, modern vocal rhythm: "I’ll run the regression test suite this afternoon and follow up with you on Slack by 4 PM with the results. If everything passes, we’ll proceed with the deployment."',
      timedChallenge: 'Deliver in under 12 seconds with natural cadence and zero bureaucratic hesitation.',
      durationSeconds: 12,
      roleplayPrompt: 'You are giving a quick verbal status update to your product lead.',
    },
    recallTest: [
      {
        question: 'What is the actual definition of the verb "to revert" in standard English, and why does using it to mean "reply" cause confusion in technical teams?',
        hiddenAnswer: 'In standard English and computer science, "revert" means to return to a previous, often inferior condition, or to roll back code/state (e.g. `git revert`). Telling an engineer to "revert" sounds like an instruction to undo or discard their work.',
      },
    ],
    revisionConnection:
      'Eliminating passive bureaucratic phrases prepares you for Chapter 140: How to replace "having a doubt" with strategic inquiry and active questioning.',
    masteryChallenge:
      'Search your sent Slack messages or emails for the words "needful" or "revert back". Commit to never using either phrase again for the rest of your career.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 140: "HAVING A DOUBT" VS. "RAISING A QUESTION"
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-140',
    partNumber: 15,
    partTitle: 'Indian English to Global Workplace English',
    chapterNumber: 140,
    title: '"Having a Doubt" vs. "Raising a Question"',
    subtitle: 'Transforming Low-Confidence Vocabulary into High-Agency Strategic Inquiry',
    level: 'Tier 6 & Tier 7',
    readingTimeMinutes: 20,
    dna: {
      coreConcept: '"I Have a Doubt" Accuses the Speaker of Untruthfulness or Signals Self-Doubt; "I Have a Question / Clarification" Expresses Intellectual Curiosity',
      mentalModel:
        'Imagine a courtroom. A witness is on the stand describing an event. The defense attorney stands up and says: "Your Honor, I doubt the witness." What does that mean? It means the attorney believes the witness is lying, suspicious, or untrustworthy. In standard global English, the noun "doubt" means profound suspicion, disbelief, or lack of conviction (e.g., "I doubt that this company will survive the year", "Beyond a reasonable doubt"). In Indian English, direct translation from Hindi/vernacular (*"Mujhe ek doubt hai"* / *"Ek shanka hai"*) turned "doubt" into a synonym for a simple question or point of clarification. When an engineer in London or New York hears: "Sir, I have a doubt on your presentation," they subconsciously perceive it as: "I suspect you are incompetent or lying." Changing this one word transforms your perceived professionalism.',
      whyEnglishUsesIt:
        'English distinguishes between cognitive uncertainty (*doubt*) and intellectual inquiry (*question, clarification, perspective*). High-status professionals never apologize for asking questions, nor do they frame inquiry as an emotional defect. They use confident, forward-leaning phrases: "I have a quick question about line 12", "Could you clarify the caching assumption?", or "I’d love to probe the latency trade-off further."',
    },
    mentalMovie: {
      sceneDescription:
        'A team meeting at Google. A Principal Architect finishes presenting a new microservices framework. Candidate A raises his hand hesitantly: "Excuse me sir, I have one small doubt. Actually, I am having a doubt on slide 4." The room winces slightly at the timid phrasing. Candidate B raises her hand, looks directly at the architect, and says: "Thanks for the walkthrough, David. I have a question regarding slide 4: how does our retry policy handle network partitions between regions?" The architect smiles with excitement: "Great question! That’s the core of our consensus layer." Notice the shift: Candidate A sounded like an insecure student asking for permission; Candidate B sounded like a peer engaging in technical dialogue.',
      schematic: `
    [ THE "DOUBT" TO "STRATEGIC INQUIRY" UPGRADE MAP ]

    LEVEL 0 (THE RETIRED INDIANISM):
    ❌ "Excuse me sir, I have a doubt."
    ❌ "Does anyone have any doubts?"
    ❌ "Clear your doubts before the exam."

    LEVEL 1 (THE CLEAN NEUTRAL UPGRADE):
    ✅ "I have a question about [Topic]."
    ✅ "Could you clarify [Specific Point]?"
    ✅ "Does anyone have any questions or comments?"

    LEVEL 2 (THE SENIOR / PEER ARCHITECT UPGRADE):
    ✅ "I\'d love to probe the assumptions behind [Metric]."
    ✅ "Could you walk us through the reasoning on [Decision]?"
    ✅ "I want to make sure I understand the data flow: does [Service A] call [Service B] directly?"

    LEVEL 3 (CHALLENGING WITH RESPECT):
    ✅ "I have a reservation regarding the scalability of that approach..."
    ✅ "What considerations led us away from [Alternative Solution]?"
`,
    },
    pattern: {
      formula: 'PEER ACKNOWLEDGMENT ("Thanks for framing that...") + TARGETED INQUIRY NOUN ("I have a question / clarification regarding...") + SPECIFIC SYSTEM COMPONENT',
      breakdown: [
        { element: 'Banish "Sir" and "Doubt"', meaning: 'Address colleagues by their first name and replace "doubt" with "question", "clarification", or "inquiry".' },
        { element: 'Direct System Subject', meaning: 'Attach the question to the technical system, not to your personal intelligence: "How does the message queue scale?" instead of "I did not understand."' },
        { element: 'Proactive Inquiry Frame', meaning: 'Use "Could you walk us through...", "I\'d love some color on...", or "Help me understand...".' },
      ],
      notes: 'Never say: "Clear your doubts". Say: "Answer your questions", "Address your concerns", or "Clarify any ambiguities".',
    },
    basicExamples: [
      { text: 'I have a quick question about our database sharding strategy on slide 8.', context: 'Replacing doubt in meetings', audioText: 'I have a quick question about our database sharding strategy' },
      { text: 'Could you clarify how the fallback cache operates if the primary Redis cluster fails?', context: 'Targeted technical inquiry', audioText: 'Could you clarify how the fallback cache operates if Redis fails?' },
      { text: 'Does anyone have any questions or feedback before we move to the next topic?', context: 'Facilitating without "doubts"', audioText: 'Does anyone have any questions or feedback before we move to the next topic?' },
      { text: 'I’d like to explore the trade-offs between REST and gRPC for this internal service.', context: 'Peer-level inquiry', audioText: 'I would like to explore the trade-offs between REST and gRPC' },
      { text: 'That clarifies the implementation detail completely—thank you!', context: 'Confirming understanding', audioText: 'That clarifies the implementation detail completely, thank you' },
    ],
    realLifeExamples: [
      {
        text: '"Hi Doctor, I have a question about the dosage instructions: should I take the antibiotic before or after meals?"',
        situation: 'Medical appointment.',
        context: 'Replacing "I have a doubt about the medicine" with clear, confident inquiry.',
      },
      {
        text: '"Excuse me, could you clarify whether this ticket includes entry to the special exhibition or just the permanent galleries?"',
        situation: 'Museum ticket counter.',
        context: 'Asking for factual clarification without using "doubt".',
      },
    ],
    professionalExamples: [
      {
        text: '"Thanks for the demo, Alex. I have a question regarding our rate-limiting logic: what happens when an enterprise client exceeds their hourly quota? Do we drop the requests or queue them with backpressure?"',
        context: 'Technical demo review session.',
        tone: 'Collaborative, analytical, peer-level',
      },
      {
        text: '"To ensure our team is fully aligned, could you walk us through the rationale for choosing DynamoDB over PostgreSQL for the user session store?"',
        context: 'Architecture review inquiry.',
        tone: 'Respectful, intellectually curious, non-combative',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Code Review Comment: "Question on lines 45–52: Is this database transaction isolated to prevent phantom reads under concurrent updates, or should we set the isolation level to Serializable?"',
        analogy: 'High-signal technical question in PR comments replacing "I have a doubt here".',
        devContext: 'GitHub PR review.',
      },
      {
        text: 'Sprint Planning: "I have a clarifying question on user story #402: does the export feature need to support CSV only, or are we expected to handle XLSX formats as well?"',
        analogy: 'Refining requirements through precise scope inquiry.',
        devContext: 'Agile backlog grooming.',
      },
    ],
    contrast: {
      conceptA: 'The Hesitant "Doubt" Monologue (Student-Teacher Dynamics)',
      conceptB: 'The Strategic Inquiry (Collaborative Peer Dialogue)',
      differences: [
        { aspect: 'Framing', optionA: '"Sir, excuse me sir, I am having one small doubt if you don\'t mind."', optionB: '"Thanks, Marcus. I have a question regarding the memory overhead on slide 6."' },
        { aspect: 'Perceived Seniority', optionA: 'Sounds like a schoolboy timidly interrupting the headmaster.', optionB: 'Sounds like an equal engineering partner probing a system trade-off.' },
        { aspect: 'Facilitating a Group', optionA: '"So guys, any doubts? If anyone has any doubts, please raise hands."', optionB: '"Let’s pause here: what questions or observations do folks have on this proposal?"' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Saying: "If anyone has any doubts, you can ask me."',
        likelyIntention: 'Inviting questions after a presentation.',
        rootCause: 'Translating directly from Indian academic vernacular where professors say "Any doubts?". In Western contexts, this sounds like you expect people to disbelieve your integrity.',
        naturalCorrection: 'Say: "I’d love to open the floor to questions or comments."',
        nativeCadence: '"I\'d love to open the floor to any questions or thoughts."',
      },
      {
        learnerError: 'Saying: "I have a doubt that the deployment will fail."',
        likelyIntention: 'Meaning: "I suspect / fear that the deployment will fail."',
        rootCause: 'In global English, "I doubt that X will happen" means you think X will NOT happen! So saying "I doubt that it will fail" actually means "I think it will SUCCEED"!',
        naturalCorrection: 'If you think it will fail, say: "I’m concerned that the deployment may fail" or "I suspect there is a high failure risk."',
        nativeCadence: '"I\'m concerned the deployment might run into issues."',
      },
    ],
    nativeIntuition:
      'Native speakers hear "doubt" as an intellectual challenge to their honesty or competence. If you say "I doubt your numbers", it means "I think your numbers are fake". But if you say "I have a question about your numbers", it means "Please explain how you calculated them". That tiny distinction prevents unnecessary workplace friction.',
    patternRecognitionExercises: [
      {
        id: 'p-140-1',
        prompt: 'You are in an architecture review led by your VP. You want to ask how the system handles failover if the primary datacenter goes dark. Which phrasing demonstrates the best global executive presence?',
        options: [
          '"Excuse me sir, I am having a doubt regarding datacenter failure."',
          '"Sir, one doubt please."',
          '"Thanks for the detailed overview, Rachel. I have a question regarding our disaster recovery plan: what is our automated failover latency if the primary datacenter loses connectivity?"',
          '"I doubt that our datacenter will work in production."',
        ],
        correctIndex: 2,
        explanation: 'Option C addresses the VP by first name, expresses appreciation, leads with "I have a question regarding...", and specifies the exact metric (automated failover latency during connectivity loss).',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are reviewing a technical specification written by a teammate. You want to know why they chose WebSockets instead of Server-Sent Events (SSE). Rephrase "I have a doubt on your choice of WebSockets" into a senior, collaborative inquiry.',
        targetPattern: 'Validate context + Targeted inquiry on trade-offs + Open-ended curiosity.',
        hint: 'Use "I’d love to understand the reasoning behind...", "Given that we only stream data in one direction...", "What led us to WebSockets over SSE?".',
        sampleAnswer: 'Great write-up on the real-time notification engine. I have a question regarding the transport layer: given that our traffic is primarily one-way server-to-client streaming, what considerations led you to WebSockets over Server-Sent Events (SSE)? I’d love to hear your thoughts on the operational trade-offs.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'Stand tall, make direct eye contact with the camera, and deliver this inquiry with confident, pleasant vocal warmth: "Thanks for walking us through the migration roadmap, Jason. I have a clarifying question on our rollback strategy: if the data migration encounters schema errors midway through, how do we restore state consistency?"',
      timedChallenge: 'Deliver in under 14 seconds without any hesitant filler sounds ("um", "sir", "actually").',
      durationSeconds: 14,
      roleplayPrompt: 'You are participating in an engineering sync with senior stakeholders.',
    },
    recallTest: [
      {
        question: 'Why can saying "I doubt that the server will crash" lead to complete misunderstanding between an Indian engineer and an American manager?',
        hiddenAnswer: 'In standard English, "I doubt X" means "I do NOT believe X will happen". If the Indian engineer intended to warn that the server is at risk of crashing, the American manager will interpret the sentence as a reassurance that the server will NOT crash, leading to catastrophic miscommunication.',
      },
    ],
    revisionConnection:
      'Mastering confident questioning leads directly to Chapter 141: Retiring regional false friends like "preponed", "passed out", and "co-brother" in favor of globally recognized English idioms.',
    masteryChallenge:
      'Ban the word "doubt" from your vocabulary for 7 days. Replace every instance in your meetings and messages with "question", "clarification", or "inquiry".',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 141: "PREPONED", "PASSED OUT", AND REGIONAL FALSE FRIENDS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-141',
    partNumber: 15,
    partTitle: 'Indian English to Global Workplace English',
    chapterNumber: 141,
    title: '"Preponed", "Passed Out", and Regional False Friends',
    subtitle: 'Replacing Non-Standard Indian Idioms and Lexical Inventions with Universally Understood Phrasing',
    level: 'Tier 6 & Tier 7',
    readingTimeMinutes: 21,
    dna: {
      coreConcept: 'Certain Words Perfectly Logical in Indian English Do Not Exist in Global English or Carry Alarming Unintended Meanings',
      mentalModel:
        'Imagine telling your American manager: "My team lead passed out yesterday during the meeting, so we had to prepone the release." Your manager recoils in horror! "Passed out?! Did you call 911? Is he in the intensive care unit?!" To an American or British speaker, "to pass out" means to lose consciousness and collapse to the floor due to medical trauma or extreme intoxication! In Indian English, "passed out" was adopted as a translation for graduating from college or finishing a training program (*"I passed out of IIT in 2020"*). Similarly, "prepone" was logically invented as the mathematical opposite of "postpone" (pre + pone vs. post + pone). While "prepone" is a brilliant linguistic invention and appears in Indian dictionaries, native speakers in London, Sydney, or San Francisco have never heard it and will ask you to repeat yourself. Learn the standard global equivalents to ensure frictionless communication.',
      whyEnglishUsesIt:
        'International teams rely on shared lexical standards to avoid operational misunderstandings. Global English uses established idioms for scheduling ("moved up", "brought forward", "rescheduled earlier") and educational milestones ("graduated", "completed my degree", "finished university"). Replacing regional false friends eliminates conversational speed bumps.',
    },
    mentalMovie: {
      sceneDescription:
        'An Indian candidate is interviewing with an engineering director in London. The interviewer asks: "Tell me about your early career." Candidate A: "Yes, I passed out from university in 2019, and then I was put on bench for 6 months." The London interviewer is puzzled: Passed out? Were you unconscious? Put on a bench? Like in a park? Candidate B: "I graduated with my computer science degree in 2019, and while awaiting project allocation, I spent 6 months building internal open-source tooling." The London interviewer nods with complete understanding. Clear vocabulary removes cognitive friction.',
      schematic: `
    [ THE REGIONAL FALSE FRIENDS DECODER RING ]

    1. "PREPONED" ➔ MOVED UP / BROUGHT FORWARD / RESCHEDULED EARLIER
       ❌ "The meeting has been preponed to 2 PM."
       ✅ "The meeting has been moved up to 2 PM." (US Standard)
       ✅ "The meeting has been brought forward to 2 PM." (UK Standard)
       ✅ "We rescheduled the sync for 2 PM instead of 4 PM."

    2. "PASSED OUT" ➔ GRADUATED / COMPLETED MY DEGREE
       (Warning: "Passed out" means fainted or lost consciousness in global English!)
       ❌ "I passed out of Delhi University in 2018."
       ✅ "I graduated from Delhi University in 2018."
       ✅ "I completed my bachelor’s in computer engineering in 2018."

    3. "ON BENCH" ➔ BETWEEN PROJECTS / AWAITING ALLOCATION
       ❌ "I was on bench for three months."
       ✅ "I was between project allocations for three months, focusing on upskilling."

    4. "OUT OF STATION" ➔ OUT OF TOWN / TRAVELING / AWAY
       ❌ "I will be out of station next week."
       ✅ "I’ll be out of town next week." / "I will be traveling next week."

    5. "TAKE A TEST" vs "GIVE A TEST"
       (Note the reverse logic: Students TAKE a test; Teachers GIVE a test!)
       ❌ "I am giving my AWS certification exam tomorrow."
       ✅ "I am taking my AWS certification exam tomorrow."

    6. "TODAY MORNING / YESTERDAY NIGHT" ➔ THIS MORNING / LAST NIGHT
       ❌ "Today morning I checked the server." ➔ ✅ "This morning I checked the server."
       ❌ "Yesterday night the build failed." ➔ ✅ "Last night the build failed."
`,
    },
    pattern: {
      formula: 'GLOBAL TEMPORAL VERB ("moved up" / "brought forward") + STANDARD ACADEMIC MILESTONE ("graduated") + COLLOQUIAL COLLOCATION ("out of town" / "last night")',
      breakdown: [
        { element: 'Schedule Adjustments', meaning: 'Use "move up", "bring forward", or "shift earlier" instead of "prepone".' },
        { element: 'Academic Completion', meaning: 'Always use "graduated from [University]" or "earned my degree in [Year]".' },
        { element: 'Travel Status', meaning: 'Use "out of town", "away from the office", or "traveling" instead of "out of station".' },
        { element: 'Temporal Collocations', meaning: 'Master the native pairs: "this morning" (never today morning), "last night" (never yesterday night).' },
      ],
      notes: 'In British English, "brought forward" is very common; in American English, "moved up" is the universal standard.',
    },
    basicExamples: [
      { text: 'We moved the sprint review up to Wednesday afternoon because of the upcoming holiday.', context: 'Replacing preponed', audioText: 'We moved the sprint review up to Wednesday afternoon' },
      { text: 'I graduated from college in 2020 and joined the cloud infrastructure team.', context: 'Replacing passed out', audioText: 'I graduated from college in 2020 and joined the cloud infrastructure team' },
      { text: 'I will be out of town next Tuesday through Thursday for a family event.', context: 'Replacing out of station', audioText: 'I will be out of town next Tuesday through Thursday' },
      { text: 'I’m taking my Kubernetes administrator exam next Saturday.', context: 'Correct take vs give test', audioText: 'I am taking my Kubernetes administrator exam next Saturday' },
      { text: 'This morning we noticed a sudden spike in cache misses on the Redis cluster.', context: 'Replacing today morning', audioText: 'This morning we noticed a sudden spike in cache misses' },
    ],
    realLifeExamples: [
      {
        text: '"Hey guys, the movie screening was moved up from 8 PM to 6:30 PM, so let’s meet outside the theater at 6:15 PM instead."',
        situation: 'Texting friends about movie plans.',
        context: 'Using "moved up" naturally in social coordination.',
      },
      {
        text: '"My sister graduated from medical school last summer, and she’s currently completing her residency in Chicago."',
        situation: 'Casual conversation at a dinner party.',
        context: 'Describing family educational milestones without "passed out".',
      },
    ],
    professionalExamples: [
      {
        text: '"Due to executive travel schedules, the quarterly business review has been moved up to Thursday morning at 10 AM EST. Updated calendar invites have been dispatched."',
        context: 'Corporate calendar announcement.',
        tone: 'Professional, unambiguous, global standard',
      },
      {
        text: '"I’ll be out of the office and traveling with limited connectivity next week. For any urgent production escalations, please contact Priya directly."',
        context: 'Out-of-office automatic reply / team notification.',
        tone: 'Crisp, responsible, executive',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Stand-up Update: "This morning I pushed the database migration script. Last night’s automated test run revealed zero regression bugs, so we’re on track to ship by Friday."',
        analogy: 'Using natural temporal markers ("this morning", "last night") instead of "today morning" or "yesterday night".',
        devContext: 'Agile daily stand-up.',
      },
      {
        text: 'Deployment Coordination: "Because of the third-party API deprecation, we had to move our v2 cutover up by two weeks. We are running load tests today to validate stability under the accelerated timeline."',
        analogy: 'Communicating an accelerated delivery schedule without using "prepone".',
        devContext: 'Release engineering sync.',
      },
    ],
    contrast: {
      conceptA: 'Indian Regional Colloquialisms (Confusing to International Teams)',
      conceptB: 'Standard Global Workplace English (Instantly Clear Everywhere)',
      differences: [
        { aspect: 'Moving a Meeting Earlier', optionA: '"The sync has been preponed by one hour."', optionB: '"The sync has been moved up by one hour."' },
        { aspect: 'University Graduation', optionA: '"I passed out of college with first class distinction."', optionB: '"I graduated from university with top academic honors."' },
        { aspect: 'Travel Status', optionA: '"Sir, I am out of station today."', optionB: '"I’m out of town today and will have intermittent access to Slack."' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Saying: "I gave my interview yesterday and tomorrow I am giving my certification."',
        likelyIntention: 'Meaning you took an interview / took a test.',
        rootCause: 'In Hindi, one says *"Maine exam diya"* (I gave an exam). But in English, the candidate TAKES the exam, while the examiner GIVES the exam!',
        naturalCorrection: 'Say: "I had an interview yesterday, and tomorrow I am taking my certification exam."',
        nativeCadence: '"I had an interview yesterday, and I’m taking my exam tomorrow."',
      },
      {
        learnerError: 'Writing: "Yesterday night the server crashed."',
        likelyIntention: 'Referring to the previous night.',
        rootCause: 'Literal translation of *"Kal raat"*. English has a dedicated fixed collocation: "last night".',
        naturalCorrection: 'Always use "last night": "Last night the server crashed around 2 AM."',
        nativeCadence: '"Last night the server crashed around 2 AM."',
      },
    ],
    nativeIntuition:
      'Native speakers find "preponed" charming and logically sound, but in high-stakes client or executive environments, unfamiliar words break the listener\'s flow. Using "moved up" or "rescheduled earlier" guarantees that 100% of your audience in New York, London, or Singapore understands instantly.',
    patternRecognitionExercises: [
      {
        id: 'p-141-1',
        prompt: 'Which sentence correctly communicates an earlier meeting time and upcoming travel to an American client without regional false friends?',
        options: [
          '"We have preponed the demo to 2 PM because tomorrow I am going out of station."',
          '"We have moved the demo up to 2 PM because I will be out of town tomorrow."',
          '"The demo is preponed since I passed out of station."',
          '"Today morning we decided to prepone the meeting."',
        ],
        correctIndex: 1,
        explanation: 'Option B correctly uses "moved the demo up" (instead of preponed) and "out of town" (instead of out of station).',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You need to inform your global team on Slack that today\'s architecture review is happening 2 hours earlier (at 3 PM instead of 5 PM) because you have to catch a flight this evening. Write the message cleanly.',
        targetPattern: 'Moved up / brought forward + reason + updated link/invite.',
        hint: 'Use "We’ve moved today’s architecture review up to 3 PM", "to accommodate travel plans this evening", "Looking forward to seeing you then".',
        sampleAnswer: 'Hi everyone, quick heads-up: we’ve moved today’s architecture review up to 3 PM EST (instead of 5 PM) to accommodate my travel schedule this evening. The calendar invite has been updated with the new time. Looking forward to walking through the Redis benchmarks with you all at 3!',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'Deliver this sentence with effortless, modern global rhythm: "We moved the release date up to Thursday because the team will be traveling next week. I’ll review the final build this morning and follow up with you on Slack."',
      timedChallenge: 'Deliver in under 12 seconds with natural intonation and zero pauses.',
      durationSeconds: 12,
      roleplayPrompt: 'You are giving a quick release update to your distributed team.',
    },
    recallTest: [
      {
        question: 'Why is it incorrect in standard English to say "I passed out of university in 2021"?',
        hiddenAnswer: 'In standard English, "to pass out" means to lose consciousness, faint, or collapse. The correct phrase for completing university is "I graduated from university in 2021".',
      },
    ],
    revisionConnection:
      'Polishing regional vocabulary leads directly into Chapter 142: Flattening extreme hierarchical deference ("Respected Sir", "Kindly", and excessive apologies) into confident, peer-level executive presence.',
    masteryChallenge:
      'Listen to your own speech patterns over the next 48 hours. Catch yourself every time you say "today morning", "yesterday night", "passed out", or "prepone", and instantly re-state the sentence using global standard English.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 142: FLATTENING HIERARCHICAL DEFERENCE & "SIR" OVERUSE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-142',
    partNumber: 15,
    partTitle: 'Indian English to Global Workplace English',
    chapterNumber: 142,
    title: 'Flattening Hierarchical Deference & "Sir" Overuse',
    subtitle: 'Transitioning from Subservient Deference ("Respected Sir", "Kindly") to Confident Peer-Level Authority',
    level: 'Tier 6 & Tier 7',
    readingTimeMinutes: 22,
    dna: {
      coreConcept: 'In Global Tech Culture, Equality and First Names Convey Respect; Subservience Signals Insecurity and Discomfort',
      mentalModel:
        'Imagine two sports players on a championship basketball team: LeBron James and a promising rookie point guard. If the rookie runs down the court calling LeBron "Respected Sir, may I humbly pass the basketball to you, please kindly accept my pass," what happens to the game? The offense collapses! LeBron doesn’t want a servant; he wants a teammate who shouts: "LeBron, backdoor cut! I’m hitting you at the rim!" In Indian corporate and academic culture, calling superiors "Sir" or "Ma\'am" and opening emails with "Respected Sir" is drilled in as mandatory filial piety and cultural reverence (*"Guru-Shishya parampara"*). But in Silicon Valley, Seattle, London, and Berlin, calling your manager "Sir" makes them deeply uncomfortable. It signals social distance, fear of authority, and an unwillingness to speak truth to power. Global leaders want colleagues who treat them as equals with first-name familiarity, framed with polite professional warmth.',
      whyEnglishUsesIt:
        'Modern knowledge work thrives on psychological safety and flat hierarchy. When engineers view their leadership as untouchable deities, bad news gets hidden, architecture defects go unreported, and innovation dies. First-name address ("Hi Satya", "Thanks Sundar") combined with high-status collaborative phrasing ("I recommend we...", "Here is my perspective...") establishes you as a trusted advisor rather than a compliant subordinate.',
    },
    mentalMovie: {
      sceneDescription:
        'An Indian engineer joins a 1-on-1 video call with a VP of Engineering at a US enterprise software company. The engineer bows slightly: "Good evening, Respected Sir. Sir, thank you for giving me your valuable time, sir. Sir, I have done the work you kindly ordered." The VP shifts uncomfortably in his chair, feeling like a colonial monarch rather than an engineering partner. On the next call, another engineer smiles warmly: "Hi David, thanks for jumping on. I’ve reviewed our database migration progress and have three key updates on our latency benchmarks. Let’s dive into where we stand." David immediately relaxes: "Awesome, thanks for framing that, Vikram. Let’s get into it." Vikram is seen as someone ready for promotion to Staff Engineer; the first engineer is seen as junior.',
      schematic: `
    [ THE HIERARCHICAL FLATTENING ARCHITECTURE ]

    1. BANISH "SIR" AND "MA'AM" ➔ FIRST NAME WITH WARMTH
       ❌ "Yes sir, I will do it sir."
       ❌ "Respected Sir, please find below..."
       ✅ "Sounds great, Brian. I’ll take care of that today."
       ✅ "Hi Sarah, thanks for the guidance."
       (Rule: In global tech companies, everyone from the intern to the CEO is addressed by first name!)

    2. RETIRE "KINDLY" ➔ PLEASE / COULD YOU / I RECOMMEND
       (Note: In modern English, "Kindly" often sounds archaic or passive-aggressive, like an angry landlord!)
       ❌ "Kindly do this today."
       ❌ "You are kindly requested to attend."
       ✅ "Please review this when you have a moment."
       ✅ "Could you sign off on the ticket by 3 PM?"

    3. BANISH EXCESSIVE APOLOGIES ➔ CONFIDENT GRATITUDE
       ❌ "Extremely sorry to disturb you, sir! Very sorry for taking your time!"
       ✅ "Thanks for taking the time to sync today, Mark."
       ✅ "Thanks for your patience while we resolved the staging bug."
       (Rule: Replace "Sorry for the delay" with "Thank you for your patience!")

    4. REPLACE SUBSERVIENT PASSIVITY WITH HIGH-AGENCY PROPOSALS
       ❌ "Whatever you decide sir, I will follow your orders."
       ✅ "Based on the latency metrics, my recommendation is Option B. What are your thoughts?"
`,
    },
    pattern: {
      formula: 'FIRST NAME GREETING + APPRECIATION ANCHOR ("Thanks for...") + HIGH-AGENCY PROPOSAL ("I recommend..." / "Here is the plan...")',
      breakdown: [
        { element: 'First Name Address', meaning: 'Always use first names in emails, Slack, and meetings: "Hi Rachel", "Thanks David".' },
        { element: 'Elimination of "Kindly"', meaning: 'Use "Please", "Could you", or "Would you mind" instead of "Kindly".' },
        { element: 'Shift from Apology to Gratitude', meaning: 'Say "Thank you for pointing that out" instead of "Extremely sorry for my foolish mistake sir".' },
        { element: 'Peer-Level Advisory Tone', meaning: 'Advise your manager on what should be done: "Here are two options I evaluated; I suggest we proceed with Path A."' },
      ],
      notes: 'If addressing an executive who is significantly older, you do not need "Sir". Respect is conveyed through attentiveness, punctuality, and high-quality preparation, not servile vocabulary.',
    },
    basicExamples: [
      { text: 'Hi Michael, thanks for making time for our 1-on-1 today.', context: 'First name greeting to leadership', audioText: 'Hi Michael, thanks for making time for our 1-on-1 today' },
      { text: 'Could you review this pull request when you have a free moment?', context: 'Replacing kindly with could you', audioText: 'Could you review this pull request when you have a free moment?' },
      { text: 'Thank you for your patience while we investigated the database timeout.', context: 'Replacing sorry with gratitude', audioText: 'Thank you for your patience while we investigated the database timeout' },
      { text: 'Based on our current sprint velocity, I recommend we defer the reporting widget to next sprint.', context: 'Advising leadership confidently', audioText: 'Based on our sprint velocity, I recommend we defer the reporting widget' },
      { text: 'Thanks for catching that edge case, Lisa—I’ll patch the validation logic now.', context: 'Accepting feedback gracefully', audioText: 'Thanks for catching that edge case Lisa, I will patch the validation logic now' },
    ],
    realLifeExamples: [
      {
        text: '"Hi Dr. Peterson, thanks for seeing me today. I’ve brought the allergy test results we discussed last month."',
        situation: 'Greeting a doctor or specialist.',
        context: 'Balancing professional title with warm, equal conversational engagement.',
      },
      {
        text: '"Good morning everyone, thanks for joining our neighborhood association meeting. Let’s look at the park renovation budget together."',
        situation: 'Leading a community gathering.',
        context: 'Inclusive, non-hierarchical community leadership.',
      },
    ],
    professionalExamples: [
      {
        text: '"Hi Andrew, I’ve completed the performance audit on our payment service. As you can see in the attached summary, p99 latency dropped by 35% after we implemented connection pooling. I recommend we monitor this over the weekend before proceeding with the European cutover. Let me know your thoughts."',
        context: 'Status update to a VP of Engineering.',
        tone: 'Executive, peer-level, respectful, consultative',
      },
      {
        text: '"Thanks for the feedback on the architecture diagram, Karen. You raised a great point about data consistency during network splits. I’ve incorporated an idempotency key into the transaction header to guarantee zero duplicate charges."',
        context: 'Responding to executive critique on design docs.',
        tone: 'Receptive, high-IQ, non-defensive, collaborative',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Mentoring an Executive: "Hi Sundar, I saw your comment on the latency spike ticket. The root cause was an un-indexed foreign key query triggered by the bulk user import. We’ve added the composite index in staging, and query time dropped from 4.2s to 18ms. We’re rolling out the hotfix now."',
        analogy: 'Treating C-level executives as technical colleagues rather than monarchs.',
        devContext: 'Direct executive Slack communication.',
      },
      {
        text: 'Disagreeing with a Director: "I understand the urgency to ship before the marketing summit, Dan. However, skipping our automated regression suite introduces severe risk of payment processing downtime. I strongly advise we take the 4 hours to run the full test suite so we protect customer revenue."',
        analogy: 'Showing backbone and professional courage without subservience.',
        devContext: 'Pre-launch risk review.',
      },
    ],
    contrast: {
      conceptA: 'Subservient Hierarchical Deference (Anxious & Low Status)',
      conceptB: 'Collaborative Peer-Level Authority (Equal & High Trust)',
      differences: [
        { aspect: 'Salutation', optionA: '"Respected Sir / Respected Ma\'am,"', optionB: '"Hi Kevin," / "Good morning Sarah,"' },
        { aspect: 'Requesting Something', optionA: '"You are kindly requested to do the needful and approve my leave."', optionB: '"Could you please approve my PTO request in BambooHR when you have a moment?"' },
        { aspect: 'When You Make a Typo', optionA: '"Extremely sorry sir! I made a huge blunder sir, please forgive me!"', optionB: '"Good catch, David. I’ve corrected the typo in the latest commit."' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Calling a 30-year-old engineering manager in San Francisco "Sir" every second sentence.',
        likelyIntention: 'Showing deep respect.',
        rootCause: 'Cultural conditioning from Indian schools and colleges where superiors demand to be called "Sir". In the West, it makes your manager feel old, alienated, and uncomfortable.',
        naturalCorrection: 'Use their first name: "Sounds good, Jason" or "I’ll look into that, Jason."',
        nativeCadence: '"Sounds good, Jason. I’m on it."',
      },
      {
        learnerError: 'Beginning every email with "Sorry for disturbing you..." or "Sorry to bother you..."',
        likelyIntention: 'Being polite.',
        rootCause: 'Imposter syndrome and learned subservience. Asking for work-related information is not a "disturbance"—it is your job!',
        naturalCorrection: 'Open directly with professional warmth: "Hi Alex, quick question regarding the API key..."',
        nativeCadence: '"Hi Alex, quick question on the API config..."',
      },
    ],
    nativeIntuition:
      'Native leaders judge your leadership potential by whether you treat them like a deity or a partner. If you cower and call them "Sir", they assume you cannot handle being in the boardroom with clients, investors, or the CEO. Treating them as a respected peer proves you are ready for executive responsibility.',
    patternRecognitionExercises: [
      {
        id: 'p-142-1',
        prompt: 'You are emailing your VP of Engineering to ask for sign-off on a new testing tool. Which opening and tone reflects modern global executive standards?',
        options: [
          '"Respected Sir, extremely sorry to disturb your precious schedule. Kindly do the needful and approve my humble request."',
          '"Hi Robert, hope you’re having a great week. I’ve compiled the business case and ROI breakdown for Datadog testing suites below. Could you take a look and give us the green light by Thursday if this aligns with your budget priorities?"',
          '"Sir, please kindly grant me permission for tool purchase."',
          '"Dear Sir Robert, I beg to submit my proposal for your kind consideration."',
        ],
        correctIndex: 1,
        explanation: 'Option B uses the first name ("Hi Robert"), maintains warm professional rapport, presents a business case, and asks for decision sign-off cleanly without subservient groveling.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Your Director of Engineering asked you why the staging database went down for 20 minutes yesterday. Rewrite the subservient apology ("Respected Sir, very sorry for my mistake, kindly forgive me") into a mature, accountable post-mortem response.',
        targetPattern: 'First name + objective root cause statement + mitigation taken + permanent guardrail implemented.',
        hint: 'Use "Hi Carlos", "During yesterday’s load test...", "The connection pool exhausted because...", "We’ve implemented an automated circuit breaker to prevent recurrence".',
        sampleAnswer: 'Hi Carlos, thanks for following up. During yesterday’s staging load test, our connection pool hit maximum capacity because an unclosed database session blocked active threads for 20 minutes. I’ve identified the leaky query handler, patched it with an automated connection release wrapper, and added a Datadog alert to notify us if connection usage exceeds 80%. Staging is completely stable, and this will prevent similar contention in production.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'Stand with open shoulders, steady eye contact, and a relaxed smile. Deliver this greeting and recommendation with calm peer-level authority: "Hi Jennifer, thanks for jumping on. I’ve reviewed our deployment options for the new checkout flow, and based on our staging benchmarks, my recommendation is to proceed with the canary rollout on Tuesday. Let me walk you through the numbers."',
      timedChallenge: 'Deliver in under 16 seconds with zero hesitant pauses or subservient vocal bowing.',
      durationSeconds: 16,
      roleplayPrompt: 'You are opening a strategy meeting with your VP.',
    },
    recallTest: [
      {
        question: 'Why does calling a modern US/UK engineering manager "Sir" often hinder an engineer’s career advancement?',
        hiddenAnswer: 'Because it signals excessive deference to hierarchy and a lack of executive presence. Senior engineering roles require speaking truth to power, pushing back on bad ideas, and engaging as equal strategic partners. Overusing "Sir" creates emotional distance and suggests the candidate is not ready for cross-functional leadership.',
      },
    ],
    revisionConnection:
      'Flattening hierarchy equips you for Chapter 143: Eliminating the chronic overuse of the Present Continuous ("I am understanding", "He is knowing") by mastering English stative verbs.',
    masteryChallenge:
      'Delete the word "Sir" and "Ma\'am" entirely from your corporate communication. Address everyone—including senior vice presidents—by their first name with polite, prepared professionalism.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 143: ELIMINATING PRESENT CONTINUOUS OVERUSE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-143',
    partNumber: 15,
    partTitle: 'Indian English to Global Workplace English',
    chapterNumber: 143,
    title: 'Eliminating Present Continuous Overuse ("I Am Understanding")',
    subtitle: 'Mastering Stative Verbs and Grounding Your Professional Thought in the Timeless Simple Present',
    level: 'Tier 6 & Tier 7',
    readingTimeMinutes: 20,
    dna: {
      coreConcept: 'Mental States, Beliefs, and Architectural Facts Are Timeless Truths; They Do Not Live in the Continuous -ing Form',
      mentalModel:
        'Imagine looking at a granite mountain. Is the mountain "mountain-ing"? Is the mountain "existing-ing"? No! The mountain *exists*. It *stands*. It *endures*. In Hindi and Indian vernacular languages, the continuous aspect (*"raha hai"*, *"rahi hai"*) is applied universally to verbs of perception, emotion, and understanding: *"Main samajh raha hoon"* (literally: "I am understanding"), *"Mujhe lag raha hai"* (literally: "It is seeming to me"), *"Woh janta hai"* translated as *"He is knowing"*. When translated into English, this creates the single most identifiable grammatical marker of Indian English: overusing the `-ing` form for stative verbs (*"I am understanding your point"*, *"I am having two cars"*, *"He is knowing Java"*, *"This service is depending on that database"*). In standard global English, cognitive states and permanent structural realities are expressed in the crisp, powerful Simple Present: *"I understand"*, *"I have"*, *"He knows"*, *"This service depends on..."*.',
      whyEnglishUsesIt:
        'English distinguishes strictly between dynamic physical actions happening right now (*"I am typing on my keyboard"*) and stative conditions of mind, possession, and system architecture (*"I understand the trade-off"*, *"This server requires 16GB of RAM"*). Using the continuous form for stative verbs makes your technical delivery sound ungrounded, tentative, or non-native.',
    },
    mentalMovie: {
      sceneDescription:
        'A technical design interview. The interviewer asks: "How does the caching tier behave under heavy load?" Candidate A: "Actually, the Redis cache is having all the session keys. When request is coming, the service is checking the cache. If cache miss is happening, it is calling the database. I am thinking this is working well." The delivery sounds slippery, repetitive, and grammatically unsteady. Candidate B: "The Redis cache holds all active session keys. When a request arrives, the service queries the cache first. If a cache miss occurs, the service queries PostgreSQL and populates the cache. I believe this architecture minimizes read contention." Candidate B’s Simple Present delivery sounds like an authoritative textbook. The architecture sounds immutable, reliable, and solid.',
      schematic: `
    [ THE STATIVE VERBS REHABILITATION MATRIX ]

    RULE: Never attach "-ing" to verbs of Mind, Perception, Possession, or Architecture!

    1. VERBS OF COGNITION & PERCEPTION:
       ❌ "I am understanding what you mean."      ➔ ✅ "I understand what you mean."
       ❌ "I am thinking that we should wait."     ➔ ✅ "I think / believe we should wait."
       ❌ "Are you hearing me properly?"          ➔ ✅ "Can you hear me clearly?"
       ❌ "He is knowing how to fix the bug."      ➔ ✅ "He knows how to fix the bug."

    2. VERBS OF POSSESSION & CAPACITY:
       ❌ "Our cluster is having 12 worker nodes." ➔ ✅ "Our cluster has / maintains 12 worker nodes."
       ❌ "I am having two laptops."               ➔ ✅ "I have two laptops."
       ❌ "This API is containing 5 endpoints."   ➔ ✅ "This API contains / exposes 5 endpoints."

    3. VERBS OF ARCHITECTURAL DEPENDENCY:
       ❌ "The frontend is depending on the auth service."
       ✅ "The frontend depends on the auth service."

       ❌ "This query is requiring an index."
       ✅ "This query requires an index."

       ❌ "It is meaning that we need to roll back."
       ✅ "That means we need to roll back."
`,
    },
    pattern: {
      formula: 'SUBJECT + SIMPLE PRESENT STATIVE VERB (Base / -s Form) + DIRECT COMPLEMENT',
      breakdown: [
        { element: 'Cognitive Reality', meaning: 'Say "I understand", "I agree", "I believe", "I suspect" (never "I am understanding/agreeing/believing").' },
        { element: 'System Attributes', meaning: 'Say "The system contains/supports/requires/provides" (never "is containing/supporting/requiring").' },
        { element: 'Sensory Verbs with "Can"', meaning: 'Say "Can you hear me?" or "Can you see my screen?" (never "Are you hearing/seeing?").' },
        { element: 'Permanent Truth Anchor', meaning: 'Ground technical documentation in the timeless Simple Present.' },
      ],
      notes: 'Dynamic exception: "I am thinking about the problem" is acceptable only when referring to the active physical process of pondering, but "I think Option A is better" must always be Simple Present.',
    },
    basicExamples: [
      { text: 'I understand the performance constraints you mentioned.', context: 'Cognition - replace am understanding', audioText: 'I understand the performance constraints you mentioned' },
      { text: 'Can you hear me clearly, or is there background noise?', context: 'Perception - replace are you hearing', audioText: 'Can you hear me clearly, or is there background noise?' },
      { text: 'This database cluster holds over 50 million customer records.', context: 'Possession - replace is having', audioText: 'This database cluster holds over 50 million customer records' },
      { text: 'Our payment pipeline depends on an external banking gateway.', context: 'Architecture - replace is depending', audioText: 'Our payment pipeline depends on an external banking gateway' },
      { text: 'I believe this caching strategy solves our read bottleneck.', context: 'Opinion - replace am thinking', audioText: 'I believe this caching strategy solves our read bottleneck' },
    ],
    realLifeExamples: [
      {
        text: '"I love this neighborhood because it has beautiful parks and quiet walking trails."',
        situation: 'Discussing your apartment location with friends.',
        context: 'Using "it has" instead of "it is having beautiful parks".',
      },
      {
        text: '"Do you remember the name of that Italian restaurant we visited last summer?"',
        situation: 'Dinner conversation.',
        context: 'Using "Do you remember" instead of "Are you remembering".',
      },
    ],
    professionalExamples: [
      {
        text: '"I agree with Sarah’s assessment: our microservices architecture requires dedicated API rate limiting before we open the platform to public beta users."',
        context: 'Technical design consensus.',
        tone: 'Crisp, authoritative, timeless',
      },
      {
        text: '"Can everyone see my screen? On this slide, the architectural diagram illustrates how data flows from our ingestion queue into the analytics warehouse."',
        context: 'Screen-sharing presentation opening.',
        tone: 'Standard global presentation English',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Architecture Review: "Our authentication token contains user role permissions and expires after 15 minutes. If a token expires, the client invokes our refresh endpoint to obtain a new signed JWT."',
        analogy: 'Using Simple Present to describe system architecture as a permanent, reliable mechanism.',
        devContext: 'API specification walkthrough.',
      },
      {
        text: 'Performance Diagnosis: "The search query fails because it lacks a composite index on `tenant_id` and `created_at`. Adding this index reduces query execution time from 1.8 seconds to 12 milliseconds."',
        analogy: 'Stating bug diagnoses as immutable facts rather than temporary continuous events.',
        devContext: 'Database optimization post-mortem.',
      },
    ],
    contrast: {
      conceptA: 'Continuous Overuse (Indian Vernacular Interference)',
      conceptB: 'Crisp Simple Present (Global Standard English)',
      differences: [
        { aspect: 'Expressing Understanding', optionA: '"Yes, I am understanding your point."', optionB: '"Yes, I understand your point."' },
        { aspect: 'Screen Sharing Check', optionA: '"Are you seeing my screen? Is it visible?"', optionB: '"Can everyone see my screen?"' },
        { aspect: 'Describing Architecture', optionA: '"The server is having lots of memory leaks and is crashing."', optionB: '"The server has severe memory leaks and crashes under load."' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Saying: "Are you hearing me?" on Zoom.',
        likelyIntention: 'Checking audio connection.',
        rootCause: 'Translating *"Aapko meri aawaz aa rahi hai?"*. In English, sensory verbs like hear and see take the modal "can": "Can you hear me?". "Are you hearing me?" sounds like a parent scolding a disobedient child!',
        naturalCorrection: 'Say: "Can you hear me okay?" or "Am I audible?" (or better: "How is my audio?").',
        nativeCadence: '"Can you hear me alright?"',
      },
      {
        learnerError: 'Saying: "I am having two doubts."',
        likelyIntention: 'Meaning: "I have two questions."',
        rootCause: 'Combining two Indianisms simultaneously: using "am having" for possession, and using "doubts" for questions!',
        naturalCorrection: 'Say: "I have two questions regarding the deployment pipeline."',
        nativeCadence: '"I have two quick questions on the pipeline."',
      },
    ],
    nativeIntuition:
      'Native listeners associate the Simple Present with timeless truth and architectural permanence. When you say "The API handles 10k QPS", it sounds like a rock-solid engineering fact. When you say "The API is handling 10k QPS", it sounds like an accidental, temporary state that might collapse at any second.',
    patternRecognitionExercises: [
      {
        id: 'p-143-1',
        prompt: 'Which sentence correctly describes a system architecture using standard global English without continuous stative verb errors?',
        options: [
          '"Our payment service is depending on Stripe and is having three fallback retries."',
          '"Our payment service depends on Stripe and maintains three fallback retries."',
          '"Our payment service is containing Stripe dependencies."',
          '"I am understanding that the payment service is needing an update."',
        ],
        correctIndex: 1,
        explanation: 'Option B correctly uses the Simple Present verbs "depends" and "maintains" to describe permanent system characteristics.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are presenting an API design. Your draft notes say: "The API is receiving user credentials. It is verifying them. If it is matching, it is generating a token. I am thinking this is secure." Rewrite this into crisp, professional Simple Present English.',
        targetPattern: 'Simple Present active verbs + authoritative assertion of security.',
        hint: 'Use "receives", "verifies", "matches", "generates", "I believe this design ensures robust security".',
        sampleAnswer: 'The API receives user credentials and verifies them against our hashed authentication database. If the hash matches, the server generates a signed JSON Web Token. I believe this architecture provides robust protection against credential interception while keeping authentication latency under 30 milliseconds.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'Speak with grounded, downward-inflected authority: "I understand the business urgency behind this release. Our microservices architecture requires an additional caching tier to absorb peak traffic. I believe this design guarantees 99.99% availability during our Black Friday campaign."',
      timedChallenge: 'Deliver in under 15 seconds with crisp consonant articulation and zero "-ing" slip-ups.',
      durationSeconds: 15,
      roleplayPrompt: 'You are defending an architectural design in front of engineering leadership.',
    },
    recallTest: [
      {
        question: 'Why are verbs like "understand", "know", "contain", and "depend" called stative verbs, and why are they almost never used in the continuous (-ing) form in standard English?',
        hiddenAnswer: 'Stative verbs describe states of being, cognitive conditions, or permanent attributes rather than dynamic physical processes. Because a state does not have a visible beginning, middle, and end happening in real time, English represents it in the Simple Present.',
      },
    ],
    revisionConnection:
      'Mastering stative verbs leads directly into Chapter 144: Time, Commitments & The "Tomorrow Itself" Trap. How to replace regional intensifiers with concrete temporal precision.',
    masteryChallenge:
      'Write down 5 sentences describing your current codebase. Ensure every single verb describing the architecture is in the Simple Present (e.g. "exposes", "validates", "persists", "scales").',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 144: TIME, COMMITMENTS & THE "TOMORROW ITSELF" TRAP
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-144',
    partNumber: 15,
    partTitle: 'Indian English to Global Workplace English',
    chapterNumber: 144,
    title: 'Time, Commitments & The "Tomorrow Itself" Trap',
    subtitle: 'Replacing Regional Intensifiers ("Itself", "Only") with Concrete Deadlines and Ironclad Accountability',
    level: 'Tier 6 & Tier 7',
    readingTimeMinutes: 21,
    dna: {
      coreConcept: 'Replace Reflexive Intensifiers ("Today Itself", "There Only") with Precise Bounded Timestamps and SLA Commitments',
      mentalModel:
        'Imagine scheduling a flight with an airline. You ask: "When does the plane depart?" The agent replies: "Today itself, sir! Today only it will take off!" Would you feel confident boarding that plane? No! You want to hear: "Flight 402 departs at exactly 3:45 PM EST from Gate 14." In Hindi, Tamil, and other Indian languages, the emphatic particles *"hi"* and *"dhan"* (*"aaj hi"* / *"innike dhan"*) are used to emphasize urgency, immediacy, or exclusivity. When translated literally into English, they produce the ubiquitous Indianisms: *"I will finish it today itself"*, *"He is sitting there only"*, *"I told you yesterday itself"*. To native speakers in Seattle, Sydney, or London, using "itself" for time makes no grammatical sense (in standard English, "itself" is a reflexive pronoun reserved for objects, like *"The cat cleaned itself"*). High-performing global engineers banish vague intensifiers and replace them with concrete, bounded timestamps.',
      whyEnglishUsesIt:
        'In global enterprise culture, fuzzy temporal promises destroy trust. Saying "I will do it today itself" sounds urgent, but lacks an enforceable SLA: Does "today itself" mean before 5 PM? Before midnight? Before the US team wakes up? Global business English uses time zones, dates, and explicit deadlines: "I will deploy this hotfix by 3 PM EST today", "The data pipeline completed at 08:30 UTC".',
    },
    mentalMovie: {
      sceneDescription:
        'A high-severity production outage channel. The CTO posts: "When can we expect the customer notification banner to be live?" Engineer A replies: "Working on it sir, today itself I will deploy it." The CTO is frustrated: Does that mean in 20 minutes or at 11 PM tonight? Engineer B posts: "PR #304 is in code review. I will deploy the customer banner to production by 11:30 AM EST (in approximately 25 minutes) and post confirmation here." The CTO replies: "Thank you, Engineer B. Perfect clarity." Precision turns anxiety into confidence.',
      schematic: `
    [ THE REGIONAL INTENSIFIER TO TEMPORAL PRECISION TRANSLATION ]

    1. "TODAY ITSELF" ➔ SPECIFIC HOUR + TIME ZONE / "BY EOD TODAY"
       ❌ "I will merge the pull request today itself."
       ✅ "I will merge the pull request by 3 PM EST today."
       ✅ "I’ll have this wrapped up before the end of the day today."

    2. "YESTERDAY ITSELF" ➔ "AS EARLY AS YESTERDAY" / "YESTERDAY MORNING"
       ❌ "I deployed the patch yesterday itself."
       ✅ "I deployed the patch yesterday morning at 10 AM."
       ✅ "We actually resolved that issue as early as yesterday."

    3. "THERE ONLY / HERE ONLY" ➔ EXACT LOCATION / "RIGHT HERE"
       (Literal translation of "wahi par" / "idhar hi")
       ❌ "The documentation is there only in the wiki."
       ✅ "The documentation is located right on the team wiki homepage."
       ✅ "The server logs are stored directly in the /var/log directory."

    4. "ONE OF MY FRIEND" ➔ "ONE OF MY FRIENDS" (Plural Noun Agreement!)
       ❌ "One of my colleague told me..."
       ✅ "One of my colleagues mentioned that..."
       (Rule: "One of" ALWAYS takes a PLURAL noun because you are selecting one out of many!)

    5. "DISCUSS ABOUT / ORDER FOR" ➔ DIRECT TRANSITIVE OBJECT
       ❌ "Let\'s discuss about the database schema."
       ✅ "Let\'s discuss the database schema."
       ❌ "I ordered for coffee."
       ✅ "I ordered coffee."
`,
    },
    pattern: {
      formula: 'ACTION COMMITMENT + BOUNDED DEADLINE ("by [Time] [Time Zone]") + CONFIRMATION CHANNEL',
      breakdown: [
        { element: 'Banish "Itself" & "Only"', meaning: 'Never use "itself" for time ("today itself") or "only" for location ("there only").' },
        { element: 'Bounded Timestamp', meaning: 'Anchor commitments in concrete time: "by 2 PM PST", "before noon tomorrow", "by EOD Friday".' },
        { element: 'Plural Agreement on "One Of"', meaning: 'Always say "one of our servers", "one of my colleagues", "one of the bugs".' },
        { element: 'Direct Transitive Verbs', meaning: 'Say "discuss the issue" (never "discuss about"), "order food" (never "order for").' },
      ],
      notes: 'EOD = End of Day (usually 5 PM in the recipient’s local time zone). Always clarify time zones when working across continents (IST vs EST vs UTC).',
    },
    basicExamples: [
      { text: 'I will push the security patch to staging by 2 PM EST today.', context: 'Replacing today itself', audioText: 'I will push the security patch to staging by 2 PM EST today' },
      { text: 'We resolved that latency spike yesterday afternoon around 4 PM.', context: 'Replacing yesterday itself', audioText: 'We resolved that latency spike yesterday afternoon around 4 PM' },
      { text: 'The configuration file is located right in the root directory.', context: 'Replacing there only', audioText: 'The configuration file is located right in the root directory' },
      { text: 'One of our senior engineers is investigating the webhook drop-off.', context: 'Correct one of plural agreement', audioText: 'One of our senior engineers is investigating the webhook drop-off' },
      { text: 'Let’s discuss the API contract during our sprint planning session.', context: 'Direct discuss without about', audioText: 'Let us discuss the API contract during our sprint planning session' },
    ],
    realLifeExamples: [
      {
        text: '"I’ll have the dry cleaning picked up and back home by 5 PM this evening."',
        situation: 'Domestic chore coordination.',
        context: 'Providing a concrete time boundary instead of "I’ll get it today itself".',
      },
      {
        text: '"One of my closest friends from college is visiting New York this weekend, so we’re having dinner in Soho on Saturday."',
        situation: 'Casual social conversation.',
        context: 'Correct plural agreement ("one of my closest friends").',
      },
    ],
    professionalExamples: [
      {
        text: '"To ensure we hit our release milestone, I will finalize the integration test suite by 11 AM PST tomorrow. Once the test run finishes, I’ll post the telemetry metrics in the engineering Slack channel."',
        context: 'Commitment statement in an executive project channel.',
        tone: 'Reliable, time-zone conscious, highly accountable',
      },
      {
        text: '"Let’s schedule 30 minutes tomorrow morning to discuss the cloud infrastructure migration. I’ll send a calendar invite with the draft agenda by 4 PM today."',
        context: 'Initiating a cross-functional workstream.',
        tone: 'Action-oriented, clear deliverables, crisp grammar',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Incident Triage: "The memory leak is isolated to our websocket container pool. One of our backend engineers is preparing hotfix PR #892. We expect to deploy the patch to production by 14:15 UTC."',
        analogy: 'High-signal technical status combining root cause, owner, and exact UTC timestamp.',
        devContext: 'SEV-1 outage communication bridge.',
      },
      {
        text: 'Code Review Etiquette: "I’ve addressed all seven comments in commit `7a1b3`. Could we discuss the database connection pooling logic during our 10 AM stand-up so we can merge before the noon release window?"',
        analogy: 'Using "discuss" cleanly without "about", paired with a clear release window deadline.',
        devContext: 'PR discussion workflow.',
      },
    ],
    contrast: {
      conceptA: 'Vague Regional Intensifiers (Fuzzy & Grammatically Jarring)',
      conceptB: 'Ironclad Temporal Precision (Crisp & Globally Trusted)',
      differences: [
        { aspect: 'Promising Urgency', optionA: '"Don\'t worry sir, today itself I will complete the work and send."', optionB: '"I will complete the migration scripts and share the PR for review by 4 PM EST today."' },
        { aspect: 'Referencing an Earlier Fix', optionA: '"I fixed that bug yesterday itself! It is there only in the repo."', optionB: '"I resolved that bug yesterday afternoon; the patch is merged directly into `main`."' },
        { aspect: 'Grammatical Agreement', optionA: '"One of my team member told me to discuss about the feature."', optionB: '"One of my team members suggested we discuss the feature."' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Writing: "I will finish this today itself."',
        likelyIntention: 'Emphasizing that you will not postpone the task.',
        rootCause: 'Literal translation of *"Aaj hi kar dunga"*. In global English, "itself" cannot modify temporal adverbs like "today" or "tomorrow".',
        naturalCorrection: 'Give an explicit deadline: "I will have this completed by 4 PM today" or "I will finish this before the end of the day today."',
        nativeCadence: '"I’ll have this finished by 4 PM today."',
      },
      {
        learnerError: 'Saying: "One of my developer is working on it."',
        likelyIntention: 'Stating that a developer on your team is handling the task.',
        rootCause: 'Forgetting plural agreement on "one of". You have multiple developers, and one OF them is working on the task.',
        naturalCorrection: 'Always use a plural noun: "One of our developers is working on it."',
        nativeCadence: '"One of our developers is on it."',
      },
      {
        learnerError: 'Saying: "Let us discuss about the requirements."',
        likelyIntention: 'Inviting discussion.',
        rootCause: '"Discuss" is a transitive verb that directly takes the object. "Discuss about" is a redundant blend of "talk about" and "discuss".',
        naturalCorrection: 'Say: "Let’s discuss the requirements" or "Let’s talk about the requirements."',
        nativeCadence: '"Let’s discuss the requirements."',
      },
    ],
    nativeIntuition:
      'Native engineering leaders live in calendar grids and time zones. When you give them an exact time ("by 3 PM PST"), they can plan their customer calls, deployments, and stakeholder updates with confidence. Replacing fuzzy words with exact timestamps instantly elevates you to a tier-one professional.',
    patternRecognitionExercises: [
      {
        id: 'p-144-1',
        prompt: 'Which update message demonstrates impeccable global workplace English with zero regional intensifiers or grammatical false friends?',
        options: [
          '"I told one of my colleague to discuss about the issue today itself."',
          '"One of our senior engineers is investigating the memory leak. We will deploy the hotfix to staging by 3 PM EST today and verify the telemetry before our evening sync."',
          '"The script is there only in the repository, I pushed it yesterday itself."',
          '"Kindly do the needful today itself and revert back at the earliest."',
        ],
        correctIndex: 1,
        explanation: 'Option B correctly uses "One of our senior engineers" (plural agreement), provides a concrete deadline ("by 3 PM EST today"), and contains zero regional intensifiers.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Your client asks when the quarterly financial report will be ready. Your draft thought is: "Don\'t worry, today itself I will send, the numbers are there only in Excel, I will discuss about it tomorrow." Rewrite this into a polished, executive-ready commitment.',
        targetPattern: 'Concrete time boundary + Direct location of data + "Discuss" without "about" + Tomorrow morning sync proposal.',
        hint: 'Use "I will deliver the finalized quarterly financial report by 5 PM EST today", "The data is reconciled in our secure repository", "Let’s discuss the key variance findings during our 10 AM sync tomorrow".',
        sampleAnswer: 'I will deliver the finalized quarterly financial report by 5 PM EST today. All ledger numbers have been reconciled directly in our cloud financial model. Let’s schedule 15 minutes during our 10 AM sync tomorrow to discuss the key variance findings and revenue projections.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'Deliver this commitment with ironclad vocal certainty and clean American/British cadences: "One of our platform engineers identified the root cause in the caching tier. We will deploy the configuration patch by 2:30 PM EST today. I will post a verification update directly in this channel immediately following the release."',
      timedChallenge: 'Deliver in under 15 seconds with crisp, confident articulation and zero filler sounds.',
      durationSeconds: 15,
      roleplayPrompt: 'You are giving an incident mitigation commitment to executive leadership.',
    },
    recallTest: [
      {
        question: 'Why is the phrase "Let\'s discuss about the project" grammatically incorrect in standard English, and what are the two natural corrections?',
        hiddenAnswer: 'The verb "discuss" is transitive, meaning it takes a direct object without a preposition. "Discuss about" is an incorrect blend. The two correct alternatives are: 1) "Let\'s discuss the project", or 2) "Let\'s talk about the project".',
      },
    ],
    revisionConnection:
      'Congratulations on completing Part 15! In Part 16: Direct English Thinking & Permanent Mastery, you will synthesize everything you have learned to eliminate the internal translator permanently and achieve pure, effortless cognitive flow.',
    masteryChallenge:
      'Conduct a written audit of your last 5 work emails. Check for: 1) "today itself", 2) "there only", 3) "one of [singular noun]", and 4) "discuss about". Correct any occurrences and celebrate your upgraded linguistic precision!',
  },
];
