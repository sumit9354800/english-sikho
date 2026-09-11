import { Chapter } from '../types';

export const PART_9_CHAPTERS: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // CHAPTER 100: THE ACOUSTIC REALITY & THE SCHWA VOWEL
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-100',
    partNumber: 9,
    partTitle: 'The Listening Engine (Connected Speech & Reductions)',
    chapterNumber: 100,
    title: 'The Acoustic Reality & The Schwa Vowel (/ə/)',
    subtitle: 'Why English is a Stress-Timed Language and How the Most Common Vowel Powers Rapid Native Speech',
    level: 'Tier 4 & Tier 5',
    readingTimeMinutes: 18,
    dna: {
      coreConcept: 'English is Stress-Timed, Not Syllable-Timed: Unstressed Syllables Shrink into the Neutral Schwa (/ə/)',
      mentalModel:
        'Think of a musical metronome beating only on primary content beats (NOAR: Nouns, Verbs, Adjectives, Adverbs). In syllable-timed languages (like Hindi, Spanish, or Japanese), each syllable gets equal duration like a machine gun (ta-ta-ta-ta). In English, the distance in time between stressed beats remains constant, regardless of how many unstressed syllables sit between them. To fit into this musical tempo, unstressed vowel sounds surrender their full acoustic identity and collapse into a lazy, low-energy neutral grunt: the Schwa (/ə/).',
      whyEnglishUsesIt:
        'Human energy conservation. Pronouncing every vowel with full mouth articulation (wide jaw opening, rounded lips) requires immense muscular effort and caps speech speed at 110 WPM. Native English speakers achieve 180+ WPM by only articulating stressed syllables with muscular energy and letting all unstressed function words glide through the schwa with zero tongue effort.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture an acoustic oscilloscope. In written English, "a-bout", "pen-cil", "doc-tor", "pho-to-graph" look like distinct vowels (a, i, o, o). But on the oscilloscope, the unstressed syllable in every single one of those words vibrates at the exact same relaxed vocal tract frequency: /ə/. It is the resting breath of English.',
      schematic: `
    [ SYLLABLE-TIMED vs. STRESS-TIMED CADENCE ]

    Syllable-Timed (Machine Gun / Equal Milliseconds):
    [ The ] [ doc- ] [ tor ] [ is ] [ com- ] [ ing ] [ to- ] [ day ]
       1       2       3       4       5        6       7       8   (Equal tick-tick)

    Stress-Timed English (The Musical Metronome):
    ┌───────────┐           ┌───────────┐           ┌───────────┐
    │   DOC-    │           │   COM-    │           │   -DAY    │  <-- Stressed Peaks
    └───────────┘           └───────────┘           └───────────┘
         \\      /                 \\      /                /
      [thə] [tər ɪz]            [ɪŋ]   [tə-]           (compressed valleys)
    └── 1 rhythmic beat ───┘└── 1 rhythmic beat ───┘└── 1 beat ──┘
`,
    },
    pattern: {
      formula: 'STRESSED CONTENT PEAK (Loud, Long, High Pitch) + UNSTRESSED SCHWA VALLEY (/ə/) = NATIVE CADENCE',
      breakdown: [
        { element: 'Stressed Peak', meaning: 'Full vowel clarity, stretched duration, sharp pitch elevation (Nouns, Main Verbs, Negatives).' },
        { element: 'Schwa (/ə/) Valley', meaning: 'The neutral central vowel: mouth relaxed, lips unrounded, tongue resting in the absolute center.' },
        { element: 'Rhythmic Compression', meaning: 'Multiple unstressed syllables compressed into the fractional space between beats.' },
      ],
      notes: 'Schwa (/ə/) is the single most frequent sound in the English language, accounting for over 30% of all spoken vowels.',
    },
    basicExamples: [
      { text: 'about /əˈbaʊt/ — The first syllable is a pure schwa, not an "ah" sound.', context: 'Schwa at the beginning of a word.', audioText: 'about' },
      { text: 'problem /ˈprɒbləm/ — The second syllable collapses into /ləm/, never "lem".', context: 'Schwa in final unstressed syllables.', audioText: 'problem' },
      { text: 'computer /kəmˈpjuːtər/ — "Com" is reduced to /kəm/, allowing "-pu-" to take the stress.', context: 'Prefix reduction.', audioText: 'computer' },
      { text: 'banana /bəˈnænə/ — The first and third syllables are both schwa; only the middle is full.', context: 'Sandwich schwa pattern.', audioText: 'banana' },
      { text: 'I want a cup of coffee. /aɪ wɒnt ə kʌp əv ˈkɒfi/', context: 'Schwa in function words ("a" -> /ə/, "of" -> /əv/).', audioText: 'I want a cup of coffee' },
      { text: 'He can do it. /hi kən duː ɪt/ — "can" reduces from /kæn/ to /kən/.', context: 'Modal reduction to schwa.', audioText: 'He can do it' },
      { text: 'Wait for me. /weɪt fər miː/ — "for" reduces to /fər/.', context: 'Preposition reduction.', audioText: 'Wait for me' },
      { text: 'as soon as possible /əz suːn əz ˈpɒsəbl̩/', context: 'Double schwa in rapid idiomatic expression.', audioText: 'as soon as possible' },
    ],
    realLifeExamples: [
      {
        text: 'Can I get a cup of water, please? [kənaɪ ɡɛt ə kʌp əv ˈwɑːtər pliːz]',
        situation: 'Ordering at a restaurant.',
        context: '"Can I" -> /kənaɪ/, "a" -> /ə/, "of" -> /əv/. Non-natives pronounce "can" as /kæn/ and "of" as /ɒf/, sounding mechanical.',
      },
      {
        text: 'I was thinking of going to the movies tonight. [aɪ wəz ˈθɪŋkɪŋ əv ˈɡoʊɪŋ tə ðə ˈmuːviz təˈnaɪt]',
        situation: 'Casual evening conversation.',
        context: '"was" -> /wəz/, "of" -> /əv/, "to the" -> /tə ðə/, "tonight" -> /təˈnaɪt/.',
      },
      {
        text: 'It’s right across from the pharmacy. [ɪts raɪt əˈkrɒs frəm ðə ˈfɑːrməsi]',
        situation: 'Giving walking directions on the street.',
        context: '"across" -> /əˈkrɒs/, "from" -> /frəm/.',
      },
    ],
    professionalExamples: [
      {
        text: 'We need to consider the impact of the proposal on our operational budget. [wi niːd tə kənˈsɪdər ði ˈɪmpækt əv ðə prəˈpoʊzl̩ ɑːn aʊər ˌɑːpəˈreɪʃənl̩ ˈbʌdʒɪt]',
        context: 'Executive strategy review.',
        tone: 'Fluid, natural, senior cadence',
      },
      {
        text: 'Can you provide an estimate of when the deployment will be completed? [kən ju prəˈvaɪd ən ˈɛstɪmət əv wɛn ðə dɪˈplɔɪmənt wɪl bi kəmˈpliːtɪd]',
        context: 'Technical sync between engineering manager and lead.',
        tone: 'Effortless, natural rhythmic pacing',
      },
      {
        text: 'From our perspective, automation is the key to reducing production errors. [frəm aʊər pərˈspɛktɪv | ˌɔːtəˈmeɪʃn̩ ɪz ðə kiː tə rɪˈdjuːsɪŋ prəˈdʌkʃn̩ ˈɛrərz]',
        context: 'Boardroom pitch for CI/CD modernization.',
        tone: 'Polished, authoritative',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The server can handle thousands of concurrent connections per second. [ðə ˈsɜːrvər kən ˈhændl̩ ˈθaʊzndz əv kənˈkɜːrənt kəˈnɛkʃnz pər ˈsɛkənd]',
        analogy: 'Notice how "can", "of", "con-", and "per" all collapse into schwas, allowing "SERVER", "HANDLE", "THOUSANDS", "SECOND" to punch through clearly.',
        devContext: 'Benchmarking performance review.',
      },
      {
        text: 'We should refactor the authentication module to avoid circular dependencies. [wi ʃəd riːˈfæktər ði ɔːˌθɛntɪˈkeɪʃn̩ ˈmɑːdʒuːl tə əˈvɔɪd ˈsɜːrkjələr dɪˈpɛndənsiz]',
        analogy: '"should" -> /ʃəd/, "to" -> /tə/, "avoid" -> /əˈvɔɪd/. Native engineers naturally de-emphasize function words.',
        devContext: 'Pull request review commentary.',
      },
    ],
    contrast: {
      conceptA: 'Syllable-Timed Pronunciation (Mechanical & Robotic)',
      conceptB: 'Stress-Timed Native Cadence (Schwa Reduction & Flow)',
      differences: [
        { aspect: 'Pronouncing "can"', optionA: 'Always saying full /kæn/ ("I CAN do it" sounds like an emphatic contradiction)', optionB: 'Using weak /kən/ ("I /kən/ do it" = smooth natural ability)' },
        { aspect: 'Pronouncing "to"', optionA: 'Pronouncing with full rounded lips /tuː/ ("going TO the store")', optionB: 'Reducing to neutral schwa /tə/ ("going /tə/ the store")' },
        { aspect: 'Listening Perception', optionA: 'Waiting to hear "O-F" and "T-O", getting confused when native speech sounds like mumbles', optionB: 'Instantly filtering out the /əv/ and /tə/ valleys to capture core content nouns' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Pronouncing "photograph" and "photography" with the exact same vowel sounds.',
        likelyIntention: 'Accurate native pronunciation across morphological word families.',
        rootCause: 'Failing to realize that when word stress shifts, the vowel sound shifts into a schwa. "PHO-to-graph" (/ˈfoʊtəɡræf/) vs. "pho-TO-gra-phy" (/fəˈtɑːɡrəfi/).',
        naturalCorrection: 'Shift unstressed vowels to /ə/ depending on which syllable carries primary stress.',
        nativeCadence: '"FO-tuh-graf" vs. "fuh-TOG-ruh-fee".',
      },
      {
        learnerError: 'Stressing "can" in regular sentences: "I CAN finish this today."',
        likelyIntention: 'Saying "I can finish this today" (routine statement).',
        rootCause: 'Pronouncing the full vowel /kæn/. In native English, stressing "CAN" signals that someone previously doubted you ("You can’t do it!" -> "I CAN do it!"). In neutral statements, it must reduce to /kən/.',
        naturalCorrection: 'Use /kən/ for routine ability: "I /kən/ finish this today."',
        nativeCadence: '"I k’n finish this today."',
      },
    ],
    nativeIntuition:
      'Native English listeners do NOT listen to every syllable. Their brains are tuned to acoustic peaks (the stressed content words). The unstressed schwa syllables are treated as acoustic connective tissue. If you speak with all syllables equally loud, native speakers feel fatigued listening to you because their brain cannot locate your intended emphasis.',
    patternRecognitionExercises: [
      {
        id: 'p-100-1',
        prompt: 'In the sentence "I can send you a copy of the report", which words should be reduced to a schwa (/ə/)?',
        options: [
          '"send", "copy", "report"',
          '"can", "a", "of", "the"',
          '"I", "you", "report"',
          'None; all words should be fully articulated',
        ],
        correctIndex: 1,
        explanation: '"can" (/kən/), "a" (/ə/), "of" (/əv/), and "the" (/ðə/) are grammatical function words that naturally reduce to schwa.',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Explain in a meeting that you can attend the design review tomorrow afternoon.',
        targetPattern: 'Reduce "can" to /kən/, "to" to /tə/, "of" to /əv/',
        hint: 'Keep "attend", "design", "review", and "afternoon" as long, clear peaks.',
        sampleAnswer: 'I can (/kən/) attend the design review tomorrow afternoon to (/tə/) go over the details.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'PRACTICE THE SCHWA VOCAL RELEASE: Relax your jaw completely, keep your tongue totally flat in the middle of your mouth, and emit a tiny, low-effort grunt: /ə/. Now say: "a cup of tea" -> [ə kʌp əv tiː].',
      timedChallenge: 'Read these 3 sentences in 15 seconds ensuring all "to", "can", and "of" sound like /tə/, /kən/, and /əv/: 1) I can do it. 2) Send it to me. 3) A piece of cake.',
      durationSeconds: 15,
      roleplayPrompt: 'You are giving quick audio updates to a teammate on Slack.',
    },
    recallTest: [
      {
        question: 'What is the acoustic difference between English rhythm and Hindi/Spanish rhythm?',
        hiddenAnswer: 'English is stress-timed (equal time between stressed beats; unstressed syllables shrink into schwas), whereas Hindi and Spanish are syllable-timed (each syllable receives roughly equal duration).',
      },
    ],
    revisionConnection:
      'Once you understand the schwa valley, Chapter 101 reveals the bridges between words: Consonant-to-Vowel and Vowel-to-Vowel Linking.',
    masteryChallenge:
      'Record yourself saying "I can send a copy of the contract to your office." Listen back: Did "can", "a", "of", and "to" reduce to /kən/, /ə/, /əv/, and /tə/, or did you pronounce them with full written vowels?',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 101: CONSONANT-TO-VOWEL & VOWEL-TO-VOWEL LINKING
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-101',
    partNumber: 9,
    partTitle: 'The Listening Engine (Connected Speech & Reductions)',
    chapterNumber: 101,
    title: 'Consonant-to-Vowel & Vowel-to-Vowel Linking (Catenation & Intrusive Glides)',
    subtitle: 'Why Words Flow Together into Continuous Streams and How "Turn it off" Becomes "Tur-ni-toff"',
    level: 'Tier 4 & Tier 5',
    readingTimeMinutes: 17,
    dna: {
      coreConcept: 'In Spoken English, Word Boundaries Dissolve: Consonants Leap Across Spaces and Vowels Spawn Intrusive /w/ and /j/ Glides',
      mentalModel:
        'Imagine a train with passenger cars. In written English, there are clear white spaces separating the cars: [Turn] [it] [off]. In spoken English, the couplers weld together into a single continuous pipeline. The final consonant of "Turn" (/n/) attaches directly to the vowel of "it" (/ɪ/), and the final consonant of "it" (/t/) attaches to "off" (/ɒf/). The acoustic reality that hits your ear is: [Tɜːr] - [nɪ] - [tɒf] ("tur-ni-toff"). If your brain searches for the distinct word "turn", you miss the entire sentence.',
      whyEnglishUsesIt:
        'Vocal tract fluid dynamics. Stopping airflow between words requires clamping the vocal cords (a glottal stop). Clamping and restarting airflow 10 times in a single sentence creates vocal friction, fatigue, and acoustic turbulence. Smooth linking keeps air streaming effortlessly across the vocal folds.',
    },
    mentalMovie: {
      sceneDescription:
        'Watch a roller coaster cart traversing tracks. It does not stop at every track joint; it glides smoothly across the seams. When a vowel meets another vowel ("go away"), the mouth inserts a natural frictionless /w/ wheel: "go-w-away". When an open vowel meets a front vowel ("see it"), it inserts a /j/ (y) wheel: "see-y-it".',
      schematic: `
    [ THE 2 LAWS OF LINKING & CATENATION ]

    LAW 1: CONSONANT-TO-VOWEL (Catenation / Resyllabification)
    Written:   [ Pick ]  +  [ it ]  +  [ up ]
    Acoustic:  [ Pɪ ]   ──> [ kɪ ] ──> [ tʌp ]
               "Pi-ki-tup" (The consonant migrates into the next syllable!)

    LAW 2: VOWEL-TO-VOWEL (Intrusive Glides)
    ROUND LIP ENDING (/uː/, /oʊ/, /aʊ/):
    "Go away"   ──> [ ɡoʊ ] + /w/ + [ əˈweɪ ]  =  "Go-w-away"

    SPREAD LIP ENDING (/iː/, /eɪ/, /aɪ/, /ɔɪ/):
    "I agree"   ──> [ aɪ ]  + /j/ + [ əˈɡriː ]  =  "I-y-agree"
`,
    },
    pattern: {
      formula: 'FINAL CONSONANT + INITIAL VOWEL = SEAMLESS CATENATION | VOWEL + VOWEL = INTRUSIVE GLIDE (/w/ or /j/)',
      breakdown: [
        { element: 'Catenation', meaning: 'The final consonant leaps across the word boundary to become the onset of the following vowel.' },
        { element: 'Intrusive /w/ Glide', meaning: 'When a word ends in a rounded vowel (go, you, too), the tongue naturally bridges to the next vowel with a subtle /w/ sound.' },
        { element: 'Intrusive /j/ Glide', meaning: 'When a word ends in a spread vowel (see, play, my, say), the tongue naturally bridges to the next vowel with a subtle /j/ (y) sound.' },
      ],
      notes: 'This explains why non-native listeners say "natives speak too fast"—natives aren’t speaking faster, their word boundaries have dissolved into linked syllables.',
    },
    basicExamples: [
      { text: 'Hold on. -> [hoʊl-dɒn] ("hol-don")', context: 'Consonant-to-vowel catenation.', audioText: 'Hold on' },
      { text: 'Check it out. -> [tʃɛ-kɪ-daʊt] ("che-ki-dout")', context: 'Double catenation + flap.', audioText: 'Check it out' },
      { text: 'Turn it on. -> [tɜːr-nɪ-tɒn] ("tur-ni-ton")', context: 'Double consonant-to-vowel bridge.', audioText: 'Turn it on' },
      { text: 'Go out. -> [ɡoʊ-w-aʊt] ("go-w-out")', context: 'Intrusive /w/ glide.', audioText: 'Go out' },
      { text: 'Do it now. -> [duː-w-ɪt naʊ] ("doo-w-it now")', context: 'Intrusive /w/ glide after /uː/.', audioText: 'Do it now' },
      { text: 'See all of them. -> [siː-j-ɔːl əv ðəm] ("see-y-all")', context: 'Intrusive /j/ glide after /iː/.', audioText: 'See all of them' },
      { text: 'Say it again. -> [seɪ-j-ɪt əˈɡɛn] ("say-y-it")', context: 'Intrusive /j/ glide after /eɪ/.', audioText: 'Say it again' },
      { text: 'Not at all. -> [nɒ-tə-tɔːl] ("no-tuh-tall")', context: 'Compound catenation across three short words.', audioText: 'Not at all' },
    ],
    realLifeExamples: [
      {
        text: 'Can I have an apple? [kə-naɪ hæ-və-næ-pl̩]',
        situation: 'Asking for fruit at home.',
        context: 'Acoustically sounds like "kuh-nye ha-vuh-na-ple". Three distinct consonant migrations in 5 words.',
      },
      {
        text: 'Who is he? [huː-w-ɪ-ziː]',
        situation: 'Asking about a newcomer at a party.',
        context: '"Who is" gets /w/ glide: "who-w-iz"; "is he" drops the /h/ and links: "iz-ee". Acoustic output: "hoo-wiz-ee".',
      },
      {
        text: 'I already ate. [aɪ-j-ɔːlˈrɛdi-j-eɪt]',
        situation: 'Declining food politely.',
        context: 'Two /j/ glides: "I-y-already-y-ate".',
      },
    ],
    professionalExamples: [
      {
        text: 'Can you back it up on an external drive? [kən ju bæ-kɪ-tʌp ɑː-nən ɪkˈstɜːrnl̩ draɪv]',
        context: 'IT support advising a colleague.',
        tone: 'Natural, smooth connected delivery',
      },
      {
        text: 'Let’s look into it as soon as possible. [lɛts lʊ-kɪn-tuː-w-ɪt əz suː-nəz ˈpɑːsəbl̩]',
        context: 'Project manager closing an action item.',
        tone: 'Prompt, executive, fluent',
      },
      {
        text: 'We ran out of memory on the primary node. [wi ræ-naʊ-dəv ˈmɛməri ɑːn ðə ˈpraɪmɛri noʊd]',
        context: 'Systems engineer alerting the team on an outage call.',
        tone: 'Urgent, natural native phonetics',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Spin it up in an isolated staging environment. [spɪ-nɪ-tʌp ɪ-nən ˈaɪsəleɪtɪd ˈsteɪdʒɪŋ ɪnˈvaɪrənmənt]',
        analogy: '"Spin it up in an" welds into "spi-ni-tu-pi-nan"—five words behaving as one acoustic token.',
        devContext: 'DevOps cloud provisioning instructions.',
      },
      {
        text: 'Log out and log back in to refresh your OAuth token. [lɔː-ɡaʊ-tənd lɔːɡ bæ-kɪn tə rɪˈfrɛʃ jər ˈoʊɔːθ ˈtoʊkən]',
        analogy: '"Log out and" -> "lo-gow-tund"; "back in" -> "ba-kin".',
        devContext: 'User authentication debugging session.',
      },
    ],
    contrast: {
      conceptA: 'Choppy Word-by-Word Separation (Glottal Stops)',
      conceptB: 'Connected Native Linking (Continuous Airflow)',
      differences: [
        { aspect: 'Acoustic Rhythm', optionA: '"Turn... it... off..." (Stopping airflow with throat clicks between words)', optionB: '"Tur-ni-toff" (Continuous ribbon of sound with zero pauses)' },
        { aspect: 'Vowel-Vowel Collision', optionA: '"Go... [pause]... away" (Uncomfortable robotic hesitation)', optionB: '"Go-w-away" (Effortless acoustic glide wheel)' },
        { aspect: 'Listening Comprehension', optionA: 'Expecting gaps of silence between spoken words like on paper', optionB: 'Decoding the continuous acoustic waveform by tracking stress peaks' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Inserting abrupt glottal stops before every vowel: "I [click] agree with [click] Eric."',
        likelyIntention: 'Trying to pronounce words clearly.',
        rootCause: 'Believing that clear speech requires physical separation between words. In native English, this sounds harsh, aggressive, and foreign.',
        naturalCorrection: 'Glide effortlessly between vowels using /j/: "I-y-agree with Eric."',
        nativeCadence: '"I-y-agree with-Eric."',
      },
      {
        learnerError: 'Searching for separate words when listening: "What does \'turi-toff\' mean?"',
        likelyIntention: 'Understanding "Turn it off".',
        rootCause: 'Not recognizing resyllabification. When /n/ and /t/ link to following vowels, the original word boundaries vanish.',
        naturalCorrection: 'Mentally shift final consonants back to their root words: "Tur-ni-toff" = "Turn it off".',
        nativeCadence: '"Turn it off."',
      },
    ],
    nativeIntuition:
      'Spoken English does not have spaces. Just like your eyes don’t jump between letters in cursive handwriting, your vocal cords do not turn off between words in a clause. A sentence is one unbroken musical ribbon of vibrating air until the breath pause.',
    patternRecognitionExercises: [
      {
        id: 'p-101-1',
        prompt: 'Which intrusive glide sound naturally connects the phrase "Two apples"?',
        options: [
          'An intrusive /r/ sound',
          'An intrusive /j/ (y) sound',
          'An intrusive /w/ sound',
          'A glottal stop silence',
        ],
        correctIndex: 2,
        explanation: 'Because "two" ends in the rounded lip vowel /uː/, the lips naturally push forward into a /w/ glide before "apples": "Two-w-apples".',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You want someone to test out an experimental feature in your staging app.',
        targetPattern: 'Link "check it out" and "try it out"',
        hint: 'Say "che-ki-dout" and "trai-yi-dout".',
        sampleAnswer: 'Can you check it out and try it out on your local machine?',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'GLIDE DRILL: Say these three words without allowing your vocal cords to stop vibrating for even 1 millisecond: "Hold... on... a... sec" -> "Hol-do-nuh-sec".',
      timedChallenge: 'Say the following sentence 3 times in 12 seconds with perfect catenation: "Turn it on and check it out." (Tur-ni-to-nən-che-ki-dout).',
      durationSeconds: 12,
      roleplayPrompt: 'You are instructing an engineer during a live debugging session.',
    },
    recallTest: [
      {
        question: 'What happens to the /n/ in "an apple" when spoken by a native speaker?',
        hiddenAnswer: 'It resyllabifies (catenates): the /n/ leaps over the boundary to attach to the vowel of "apple", sounding like "a napple" (/ə ˈnæpl̩/).',
      },
    ],
    revisionConnection:
      'Now that you know how sounds link together, Chapter 102 explores the opposite phenomenon: Sound Deletion & Elision (Why sounds vanish completely).',
    masteryChallenge:
      'Practice saying "Pick it up and put it on" as "Pi-ki-tə-pən-pʊ-tɪ-tɒn" until it feels completely effortless and single-breathed.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 102: SOUND DELETION & ELISION
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-102',
    partNumber: 9,
    partTitle: 'The Listening Engine (Connected Speech & Reductions)',
    chapterNumber: 102,
    title: 'Sound Deletion & Elision (The Disappearing /t/, /d/, and /h/ Drops)',
    subtitle: 'Why Native Speakers Drop Consonants in Clusters and How "Next door" Becomes "Nex-door"',
    level: 'Tier 4 & Tier 5',
    readingTimeMinutes: 17,
    dna: {
      coreConcept: 'Consonants Trapped Between Other Consonants Vanish; Unstressed /h/ Drops into Oblivion',
      mentalModel:
        'Think of a bottleneck on an assembly line. When three heavy consonants line up in a row across word boundaries (e.g., the /s-t-d/ cluster in "next door"), articulating every single one requires stopping your tongue against your teeth ridge (/t/) before instantly resetting for the next sound (/d/). This creates an intolerable acoustic speed bump. The brain solves this by simply deleting (eliding) the middle stop consonant entirely. "Next door" becomes "Nex-door". "Last night" becomes "Las-night". "You and me" becomes "You-n-me".',
      whyEnglishUsesIt:
        'Biomechanical economy of articulation. The tongue muscle cannot reverse direction three times in 50 milliseconds. By omitting the acoustically redundant middle stop consonant, the speech organs preserve momentum without losing semantic comprehension.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture a ninja stealthily stepping across stones. If three stones are packed tightly together, the ninja leaps directly from stone 1 to stone 3, ignoring stone 2 entirely. The middle consonant is the skipped stone. In "hold tight", the /d/ evaporates into the /t/: "hol-tight". In "tell him", the /h/ vanishes and the /m/ joins "tell": "tel-im".',
      schematic: `
    [ THE 3 MAJOR ELISION RULES ]

    RULE 1: THE MIDDLE /t/ AND /d/ DROP (Consonant + /t, d/ + Consonant)
    "Next door"      ──> [nɛkst dɔːr]    ──>  "Nex-door"   (/t/ deleted!)
    "Last night"     ──> [læst naɪt]     ──>  "Las-night"  (/t/ deleted!)
    "Hold tight"     ──> [hoʊld taɪt]    ──>  "Hol-tight"  (/d/ deleted!)
    "Stand by"       ──> [stænd baɪ]     ──>  "Stan-by"    (/d/ deleted!)

    RULE 2: THE "AND" EVAPORATION
    "Fish and chips" ──> [fɪʃ ænd tʃɪps] ──>  "Fish-n-chips" (only /n/ survives)
    "Bread and butter"                  ──>  "Bread-n-butter"

    RULE 3: THE UNSTRESSED PRONOUN /h/ DROP (he, him, his, her)
    "Tell him"       ──> [tɛl hɪm]       ──>  "Tel-im"     (/h/ deleted!)
    "Ask her"        ──> [æsk hɜːr]      ──>  "As-ker"     (/h/ deleted!)
    "What has he done?"                  ──>  "What-əz-ee done?"
`,
    },
    pattern: {
      formula: 'CONSONANT + [T / D / H] + CONSONANT/VOWEL = INTERIOR SOUND ELIDED (DELETED)',
      breakdown: [
        { element: '/t/ and /d/ Elision', meaning: 'When /t/ or /d/ is preceded by a consonant and followed by another consonant, it is not pronounced.' },
        { element: '/h/ Dropping in Pronouns', meaning: 'In unstressed positions, pronouns starting with /h/ (he, him, his, her, have, has, had) completely lose their /h/ sound.' },
        { element: 'Weak Vowel Syncope', meaning: 'Unstressed internal syllables drop vowels completely ("camera" -> /ˈkæmrə/, "family" -> /ˈfæmli/).' },
      ],
      notes: 'Crucial: Never drop /h/ when the word is at the start of a sentence or stressed for emphasis ("He told me" keeps the /h/ if "He" begins the thought).',
    },
    basicExamples: [
      { text: 'I must go. -> [aɪ məs ɡoʊ] ("I muss go")', context: '/t/ deleted before /ɡ/.', audioText: 'I must go' },
      { text: 'Just one moment. -> [dʒʌs wʌn ˈmoʊmənt] ("Juss one")', context: '/t/ deleted before /w/.', audioText: 'Just one moment' },
      { text: 'We missed the bus. -> [wi mɪs ðə bʌs] ("miss the bus")', context: 'Past tense /t/ deleted before /ð/.', audioText: 'We missed the bus' },
      { text: 'Send them an email. -> [sɛn ðəm ən ˈiːmeɪl] ("sen-them")', context: '/d/ deleted before /ð/.', audioText: 'Send them an email' },
      { text: 'Give her the keys. -> [ɡɪv ər ðə kiːz] ("gi-ver the keys")', context: '/h/ dropped in "her".', audioText: 'Give her the keys' },
      { text: 'I saw him yesterday. -> [aɪ sɔː ɪm ˈjɛstərdeɪ] ("saw-im")', context: '/h/ dropped in "him".', audioText: 'I saw him yesterday' },
      { text: 'What do you think of his work? -> [wʌt də jə θɪŋk əv ɪz wɜːrk] ("of-iz")', context: '/h/ dropped in "his".', audioText: 'What do you think of his work' },
      { text: 'different -> /ˈdɪfrənt/ (2 syllables, not 3)', context: 'Internal vowel elision.', audioText: 'different' },
    ],
    realLifeExamples: [
      {
        text: 'I told him to wait, but he left. [aɪ ˈtoʊldɪm tə weɪt | bət iː lɛft]',
        situation: 'Explaining a missed meeting with a friend.',
        context: '"told him" -> "tol-dim", "but he" -> "buh-tee". The /h/ in both pronouns vanishes.',
      },
      {
        text: 'You must be joking! [ju mʌs bi ˈdʒoʊkɪŋ]',
        situation: 'Expressing surprise at astonishing news.',
        context: '"must be" -> "muss-bee". Pronouncing the /t/ here sounds unnatural and stilted.',
      },
      {
        text: 'Let’s grab a cup of coffee and sit down. [lɛts ɡræb ə kʌp əv ˈkɑːfi ən sɪt daʊn]',
        situation: 'Inviting a colleague for a quick chat.',
        context: '"and" collapses into just /ən/ or /n/.',
      },
    ],
    professionalExamples: [
      {
        text: 'We must make sure that our client has access to the staging server. [wi mʌs meɪk ʃʊr ðət aʊər ˈklaɪənt əz ˈæksɛs tə ðə ˈsteɪdʒɪŋ ˈsɜːrvər]',
        context: 'Client project kickoff checklist.',
        tone: 'Natural, senior conversational flow',
      },
      {
        text: 'I asked him if he could review the pull request by the end of the day. [aɪ æskt ɪm ɪf i kəd rɪˈvjuː ðə pʊl rɪˈkwɛst baɪ ði ɛnd əv ðə deɪ]',
        context: 'Standup status update on code reviews.',
        tone: 'Clear, fluid, unhesitating',
      },
      {
        text: 'The best thing to do is hold back on deployment until Monday morning. [ðə bɛs θɪŋ tə duː ɪz hoʊl bæk ɑːn dɪˈplɔɪmənt ənˈtɪl ˈmʌndeɪ ˈmɔːrnɪŋ]',
        context: 'Engineering lead advising on weekend releases.',
        tone: 'Pragmatic, authoritative',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Send her the API documentation so she can test the endpoints. [sɛn dər ði ˌeɪpiːˈaɪ ˌdɑːkjumɛnˈteɪʃn̩ soʊ ʃi kən tɛs ðə ˈɛndpɔɪnts]',
        analogy: '"Send her" -> "Sen-der" (/d/ links to "er" after /h/ drops); "test the" -> "tes-the" (/t/ elided).',
        devContext: 'Team Slack audio huddle.',
      },
      {
        text: 'We should rollback to the last known good configuration. [wi ʃəd ˈroʊlbæk tə ðə læs noʊn ɡʊd kənˌfɪɡjəˈreɪʃn̩]',
        analogy: '"last known" -> "las-known" (the /t/ is deleted between /s/ and /n/).',
        devContext: 'DevOps incident mitigation command.',
      },
    ],
    contrast: {
      conceptA: 'Full Orthographic Articulation (Clunky & Labored)',
      conceptB: 'Natural Acoustic Elision (Native Momentum)',
      differences: [
        { aspect: 'Pronouncing "must be"', optionA: '"Must... [hard T click]... be" (Mechanical jaw snap)', optionB: '"Muss-bee" (Zero jaw stoppage; smooth transition)' },
        { aspect: 'Pronouncing "told him"', optionA: '"Told... [aspirated H gasp]... him"', optionB: '"Tol-dim" (Effortless liaison after /h/ drops)' },
        { aspect: 'Listening Perception', optionA: 'Listening for "T-E-L-L H-I-M" and feeling lost when hearing "tel-im"', optionB: 'Knowing that /h/ drops automatically in unstressed pronouns' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Over-enunciating the /t/ in "post office", "last night", or "first time".',
        likelyIntention: 'Trying to speak "proper" English.',
        rootCause: 'Assuming that omitting letters is "bad grammar" or slang. Elision is not slang; it is a universal phonetic rule of standard English phonology observed by university professors and executives alike.',
        naturalCorrection: 'Drop the middle /t/ between consonants: "pos-toffice", "las-night", "firs-time".',
        nativeCadence: '"I was there firs-time."',
      },
      {
        learnerError: 'Dropping /h/ when the word is stressed: "Who is it? It’s *im!*"',
        likelyIntention: 'Emphasizing the subject.',
        rootCause: 'Misapplying the /h/-drop rule to stressed positions. When a pronoun carries contrastive emphasis, the /h/ MUST be clearly articulated.',
        naturalCorrection: 'Keep /h/ when stressed: "It’s HIM!" (/hɪm/). Drop /h/ when unstressed: "Tell him" (/tɛl ɪm/).',
        nativeCadence: '"I saw HIM, not her!"',
      },
    ],
    nativeIntuition:
      'Native speakers don’t decide to drop consonants; their vocal tract naturally takes the shortest path between two articulatory targets. If your mouth tries to say /s/, then /t/, then /k/ within 40 milliseconds, your tongue simply clips the /t/ to preserve the rhythm of the sentence.',
    patternRecognitionExercises: [
      {
        id: 'p-102-1',
        prompt: 'In which of the following phrases is the /t/ naturally elided (deleted) in fast spoken English?',
        options: [
          '"Tell me the truth"',
          '"First class ticket"',
          '"A cat on the mat"',
          '"Take your time"',
        ],
        correctIndex: 1,
        explanation: 'In "First class", the /t/ is trapped between the consonant /s/ and the consonant /k/ (c), so it elides: "Firs-class".',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are telling your engineering manager that you asked your coworker for an update and she will send it tonight.',
        targetPattern: 'Drop /h/ in "her", drop /t/ in "last night" or "just now"',
        hint: 'Say "asked her" as "as-ker".',
        sampleAnswer: 'I asked her (as-ker) just now (juss-now) and she promised to push it before the end of the day.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'PRONOUN /H/-DROP DRILL: Say these three pairs out loud. Notice how the /h/ completely evaporates: "Tell him" -> "Tel-im". "Ask her" -> "As-ker". "Call him" -> "Cal-lim".',
      timedChallenge: 'Say: "I told him that the last call was canceled" in under 5 seconds, dropping the /h/ in "him" and the /t/ in "last call".',
      durationSeconds: 5,
      roleplayPrompt: 'Quick update to a peer across the office.',
    },
    recallTest: [
      {
        question: 'Under what specific structural condition does a /t/ or /d/ get elided (deleted)?',
        hiddenAnswer: 'When it is in a consonant cluster—specifically when preceded by a consonant and followed immediately by another consonant across a word boundary.',
      },
    ],
    revisionConnection:
      'Now that you understand sound deletion, Chapter 103 shows how sounds mutate when they touch: Assimilation & The Flap T.',
    masteryChallenge:
      'Listen to an episode of a technical podcast (e.g., Changelog or Lex Fridman). Count how many times speakers drop the /h/ in "him", "her", or "have". You will hear dozens in the first 5 minutes.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 103: SOUND TRANSFORMATION (ASSIMILATION & FLAP T)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-103',
    partNumber: 9,
    partTitle: 'The Listening Engine (Connected Speech & Reductions)',
    chapterNumber: 103,
    title: 'Sound Transformation: Assimilation & The Flap T',
    subtitle: 'How "Did you" Mutates into /dɪdʒuː/, "Water" Becomes [wɑːɾər], and Sounds Blend for Velocity',
    level: 'Tier 4 & Tier 5',
    readingTimeMinutes: 18,
    dna: {
      coreConcept: 'Adjacent Sounds Collide and Mutate: Coalescent Assimilation Creates /tʃ/ and /dʒ/, While Intervocalic /t/ Softens into a Tap [ɾ]',
      mentalModel:
        'Think of chemical reactions. When element A (a final /t/ or /d/) touches element B (an initial /j/ sound from "you" or "your"), they don’t just sit next to each other—they react and fuse into a completely new hybrid sound. /d/ + /j/ fuses into /dʒ/ ("j" sound: "Did you" -> /dɪdʒuː/ "di-joo"). /t/ + /j/ fuses into /tʃ/ ("ch" sound: "Don\'t you" -> /doʊntʃuː/ "don-choo"). Meanwhile, when a /t/ is caught between two vowels (as in "water", "city", "data"), the tongue does not form a hard stop; it executes a lightning-fast tap (a "flap" [ɾ]), sounding almost like a quick soft "d".',
      whyEnglishUsesIt:
        'A full unvoiced stop /t/ requires the tongue tip to seal against the alveolar ridge, build up air pressure behind the seal, and explosively release it. Doing this between two vowels disrupts vocal cord vibration (which is voiced). The flap [ɾ] allows the tongue to flick the alveolar ridge in 15 milliseconds without stopping vocal fold vibration.',
    },
    mentalMovie: {
      sceneDescription:
        'Watch a drummer executing a single rebound tap against a drum skin versus clamping the drumstick down. The American and Canadian Flap T is that lightning rebound tap. In "computer", "data", "better", "meeting", the tongue taps the roof of the mouth once on the fly.',
      schematic: `
    [ THE 2 MUTATION PHENOMENA ]

    1. COALESCENT ASSIMILATION (The /j/ Fusion):
       /d/ + /j/ (you/your) ──> /dʒ/ ("J" sound)
       "Did you see it?"    ──> "Di-joo see it?"
       "Would you mind?"    ──> "Wou-joo mind?"

       /t/ + /j/ (you/your) ──> /tʃ/ ("CH" sound)
       "Don't you know?"    ──> "Don-choo know?"
       "Meet you later"     ──> "Mee-choo later"

    2. THE FLAP T [ɾ] (The Intervocalic Rebound Tap):
       VOWEL + [T / TT] + UNSTRESSED VOWEL ──> [ɾ] (Soft fast tap)
       "Water"     ──> [ˈwɑːɾər]    (Sounds like "wa-der")
       "Data"      ──> [ˈdeɪɾə]     (Sounds like "day-da")
       "Better"    ──> [ˈbɛɾər]     (Sounds like "be-der")
       "Meeting"   ──> [ˈmiːɾɪŋ]    (Sounds like "mee-ding")
`,
    },
    pattern: {
      formula: 'T/D + Y = CH/J FUSION | VOWEL + T + VOWEL = FLAP T [ɾ]',
      breakdown: [
        { element: 'Coalescent /dʒ/', meaning: 'Final /d/ + Initial /j/ collapses into the voiced affricate /dʒ/ (Did you -> Di-joo, Could you -> Coo-joo).' },
        { element: 'Coalescent /tʃ/', meaning: 'Final /t/ + Initial /j/ collapses into the unvoiced affricate /tʃ/ (What you -> Wha-choo, Got you -> Got-choo).' },
        { element: 'Flap T [ɾ]', meaning: 'The alveolar tap used in North American, Australian, and modern global tech English when /t/ sits between vowels.' },
      ],
      notes: 'Rule of Flap T: It ONLY occurs when the following syllable is unstressed! In "a-TTACK" or "re-TURN", the T is stressed, so it remains a crisp, aspirated [tʰ].',
    },
    basicExamples: [
      { text: 'Did you get it? -> [ˈdɪdʒu ˈɡɛtɪt] ("Di-joo ge-tit")', context: 'Assimilation /d/ + /j/.', audioText: 'Did you get it' },
      { text: 'Could you help me? -> [kədʒu ˈhɛlp miː] ("Coo-joo")', context: 'Modal assimilation.', audioText: 'Could you help me' },
      { text: 'Don’t you worry. -> [doʊntʃu ˈwɜːri] ("Don-choo")', context: 'Negative contraction assimilation.', audioText: 'Don’t you worry' },
      { text: 'Nice to meet you. -> [naɪs tə ˈmiːtʃu] ("mee-choo")', context: 'Universal social greeting fusion.', audioText: 'Nice to meet you' },
      { text: 'water -> /ˈwɑːɾər/ ("wa-der")', context: 'Classic intervocalic flap T.', audioText: 'water' },
      { text: 'data -> /ˈdeɪɾə/ ("day-da")', context: 'Tech noun flap T.', audioText: 'data' },
      { text: 'critical -> /ˈkrɪɾɪkl̩/ ("cri-di-cal")', context: 'Double flap in adjective.', audioText: 'critical' },
      { text: 'put it in -> [pʊ-ɾɪ-ɾɪn] ("pu-ri-rin")', context: 'Flap T across word boundaries between vowels.', audioText: 'put it in' },
    ],
    realLifeExamples: [
      {
        text: 'What are you doing? [wʌɾər jə ˈduːɪŋ]',
        situation: 'Casual query to a friend.',
        context: '"What are you" turns into "wuh-der-yoo" with a flap T on "What are".',
      },
      {
        text: 'I’ll let you know when the food is ready. [aɪl ˈlɛtʃu noʊ wɛn ðə fuːd ɪz ˈrɛdi]',
        situation: 'Hosting dinner at home.',
        context: '"let you" fuses into "le-choo".',
      },
      {
        text: 'Could you pass the butter, please? [kədʒu pæs ðə ˈbʌɾər pliːz]',
        situation: 'Table conversation.',
        context: '"Could you" -> "coo-joo"; "butter" -> "bu-der".',
      },
    ],
    professionalExamples: [
      {
        text: 'Could you send me your availability so we can schedule the architectural review? [kədʒu sɛnd mi jər əˌveɪləˈbɪləɾi soʊ wi kən ˈskɛdʒuːl ði ˌɑːrkɪˈtɛktʃərəl rɪˈvjuː]',
        context: 'Scheduling email / Slack message.',
        tone: 'Fluid, courteous, professional',
      },
      {
        text: 'Did you notice any latency spikes during the load test? [dɪdʒu ˈnoʊɾɪs ˈɛni ˈleɪtn̩si spaɪks ˈdʊrɪŋ ðə loʊd tɛst]',
        context: 'Performance engineering debrief.',
        tone: 'Technical, focused, native cadence',
      },
      {
        text: 'We need to write automated unit tests to validate our critical payment logic. [wi niːd tə raɪɾ ˈɔːɾəmeɪɾɪd ˈjuːnɪt tɛsts tə ˈvælɪdeɪt aʊər ˈkrɪɾɪkl̩ ˈpeɪmənt ˈlɑːdʒɪk]',
        context: 'Engineering sprint task assignment.',
        tone: 'Authoritative, clear, rhythmic',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'Did you commit the updated migration script? [dɪdʒu kəˈmɪt ði ʌpˈdeɪɾɪd maɪˈɡreɪʃn̩ skrɪpt]',
        analogy: '"Did you" -> "Di-joo"; "updated" -> "up-day-did" (flap T).',
        devContext: 'Git workflow team huddle.',
      },
      {
        text: 'The API router handles routing data between our microservices. [ði ˌeɪpiːˈaɪ ˈraʊɾər ˈhændl̩z ˈraʊɾɪŋ ˈdeɪɾə bɪˈtwiːn aʊər ˈmaɪkroʊˌsɜːrvɪsɪz]',
        analogy: '"router" -> "rou-der", "routing" -> "rou-ding", "data" -> "day-da".',
        devContext: 'Networking infrastructure walkthrough.',
      },
    ],
    contrast: {
      conceptA: 'Rigid Syllable Separation ("Did... You...")',
      conceptB: 'Natural Coalescence & Flap T ("Di-joo", "Day-da")',
      differences: [
        { aspect: '"Did you"', optionA: '"Did... you..." with a sharp stop on /d/ and separate "y"', optionB: '"Di-joo" as a single unified token' },
        { aspect: 'Intervocalic /t/', optionA: 'Pronouncing "water" with a sharp Queen’s British aspirated /t/ in American tech contexts', optionB: 'Using the smooth flap [ɾ] ("wa-der") for fast native velocity' },
        { aspect: 'Listening Perception', optionA: 'Getting confused when hearing "Di-joo" because expecting "Did... you"', optionB: 'Instantly recognizing the /dʒ/ fusion as the question marker for past tense' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Flapping the /t/ when the syllable is stressed: Saying "a-DACK" instead of "a-TTACK" for "attack".',
        likelyIntention: 'Trying to use American pronunciation.',
        rootCause: 'Failing to realize that the Flap T rule ONLY applies when the syllable following the /t/ is unstressed. When stressed, the /t/ must remain a sharp, clear stop.',
        naturalCorrection: 'Keep /t/ crisp on stressed syllables: "at-TACK", "re-TURN", "ho-TEL".',
        nativeCadence: '"un-at-tached", "at-tack".',
      },
      {
        learnerError: 'Resisting the /d/ + /j/ fusion because "it doesn’t look like that in the spelling".',
        likelyIntention: 'Spelling-based pronunciation.',
        rootCause: 'Treating English orthography as phonetic. English spelling was frozen in the 15th century; spoken English has evolved for 600 years.',
        naturalCorrection: 'Embrace the /dʒ/ and /tʃ/ fusions: "Di-joo", "Wou-joo", "Don-choo".',
        nativeCadence: '"Did you do it?" -> "Di-joo do it?"',
      },
    ],
    nativeIntuition:
      'Assimilation is how languages survive speed. When your mouth is already moving towards the palatal position for "you", it anticipates that position during the preceding /d/, naturally producing /dʒ/. It is not sloppy; it is acoustic optimization.',
    patternRecognitionExercises: [
      {
        id: 'p-103-1',
        prompt: 'What sound is produced when the final /t/ of "Don\'t" fuses with the initial sound of "you"?',
        options: [
          'A soft /s/ sound ("Don-soo")',
          'An unvoiced affricate /tʃ/ ("Don-choo")',
          'A hard /k/ sound ("Don-koo")',
          'A voiced /z/ sound ("Don-zoo")',
        ],
        correctIndex: 1,
        explanation: 'Coalescent assimilation between /t/ and /j/ produces the "CH" sound (/tʃ/): "Don\'t you" becomes /doʊntʃuː/ ("Don-choo").',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Ask a senior engineer if they could review your technical design doc when they get a free moment.',
        targetPattern: 'Could you (/kədʒu/) + get a moment (/ɡɛɾə ˈmoʊmənt/)',
        hint: 'Use the coalescent fusion on "Could you" and the flap T on "get a".',
        sampleAnswer: 'Could you (coo-joo) take a look at my design doc whenever you get a (ge-da) spare minute?',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'THE FUSION DRILL: Say these three questions smoothly without pausing: 1) "Did you?" -> "Di-joo?" 2) "Could you?" -> "Coo-joo?" 3) "Would you?" -> "Wou-joo?"',
      timedChallenge: 'Say: "Could you get a better data model?" with flap Ts and assimilation in under 4 seconds.',
      durationSeconds: 4,
      roleplayPrompt: 'Collaborative code design sync.',
    },
    recallTest: [
      {
        question: 'Why does "attack" NOT have a flap T, while "better" does?',
        hiddenAnswer: 'Because the syllable following /t/ in "at-TACK" is stressed (stressed syllables require a full aspirated [tʰ]), whereas the syllable following /t/ in "BET-ter" is unstressed, triggering the flap [ɾ].',
      },
    ],
    revisionConnection:
      'With sound fusions and flap Ts mastered, Chapter 104 decodes the most elusive part of native speech: Weak Forms & Grammatical Compression.',
    masteryChallenge:
      'Practice saying: "What are you waiting for? Put it in the computer!" with all flap Ts: [wʌɾər jə ˈweɪɾɪŋ fɔːr | pʊɾɪɾɪn ðə kəmˈpjuːɾər].',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 104: WEAK FORMS & GRAMMATICAL COMPRESSION
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-104',
    partNumber: 9,
    partTitle: 'The Listening Engine (Connected Speech & Reductions)',
    chapterNumber: 104,
    title: 'Weak Forms & Grammatical Word Compression',
    subtitle: 'How Function Words (have, of, to, for, and, been) Lose 70% of Their Acoustic Weight in Running Speech',
    level: 'Tier 4 & Tier 5',
    readingTimeMinutes: 18,
    dna: {
      coreConcept: 'English Has Two Pronunciations for Every Function Word: The Citation Strong Form and the Running Weak Form',
      mentalModel:
        'Think of thumbnail compression in video processing. If an image is 4K, it consumes 25 megabytes. When displayed as a tiny icon on a smartphone preview, the operating system compresses it to a 20-kilobyte thumbnail without degrading user experience. English function words (prepositions, auxiliary verbs, conjunctions, pronouns) are acoustic thumbnails. In a dictionary, "have" is transcribed as /hæv/. In real connected speech, it compresses to /həv/, /əv/, or just /v/ ("I could’ve gone" -> "I coulda gone"). If you listen for the 4K /hæv/, your ear misses it completely.',
      whyEnglishUsesIt:
        'Grammatical function words carry zero novel information—they merely provide structural scaffolding. Content words (nouns, main verbs) carry the payload. Compressing function words allows the human vocal tract to sprint through grammatical joints and land heavily on the high-value payload words.',
    },
    mentalMovie: {
      sceneDescription:
        'Look at a bridge structure. The heavy steel roadbed and cars represent the stressed content words. The thin steel cables holding the bridge represent the weak forms. The cables are whisper-thin, yet they hold the entire bridge together. When someone says "I would have been happy to help you", the cables are "would have been happy to help you" -> [aɪ wədəv bɪn ˈhæpi tə ˈhɛlp jə]. Only "HAPPY" and "HELP" are thick steel.',
      schematic: `
    [ THE 10 MASTER WEAK FORMS ]

    WORD   STRONG (Citation)  WEAK (Spoken)   EXAMPLE IN CONNECTED SPEECH
    ─────  ─────────────────  ──────────────  ───────────────────────────────
    to     /tuː/              /tə/            "Going to work" -> "Going tə work"
    for    /fɔːr/             /fər/           "Wait for me"   -> "Wait fər me"
    have   /hæv/              /əv/ or /v/     "Could have"    -> "Could’ve" / "Could-ə"
    of     /ɒv/               /əv/ or /ə/     "Cup of tea"    -> "Cup-ə tea"
    and    /ænd/              /ən/ or /n/     "Bread and jam" -> "Bread-n-jam"
    been   /biːn/             /bɪn/           "I’ve been busy"-> "I’ve bɪn busy"
    from   /frɒm/             /frəm/          "From here"     -> "Frəm here"
    at     /æt/               /ət/            "Look at it"    -> "Look ət it"
    them   /ðɛm/              /ðəm/ or /əm/   "Tell them"     -> "Tell ’əm"
    you    /juː/              /jə/            "See you soon"  -> "See yə soon"
`,
    },
    pattern: {
      formula: 'STRONG FORM = ISOLATED / CITATION USE ONLY | WEAK FORM = DEFAULT IN 95% OF SPOKEN PHRASES',
      breakdown: [
        { element: 'Strong Form Trigger', meaning: 'Used ONLY at the very end of a sentence ("Who are you looking for?" -> /fɔːr/), or for dramatic contrast ("I said *AND*, not *OR*").' },
        { element: 'Weak Form Default', meaning: 'In the middle of a sentence, function words ALWAYS take their weak, compressed form.' },
        { element: 'Contraction Compaction', meaning: 'Modal + have + been ("should have been" -> "should’ve been" -> /ˈʃʊdəv bɪn/).' },
      ],
      notes: 'Listening breakthrough: When natives say "could’ve", "should’ve", "would’ve", non-native listeners frequently confuse it with "could of" because both sound identical (/kʊdəv/).',
    },
    basicExamples: [
      { text: 'I’ve been waiting for hours. -> [aɪv bɪn ˈweɪɾɪŋ fər ˈaʊərz]', context: '"been" -> /bɪn/, "for" -> /fər/.', audioText: 'I have been waiting for hours' },
      { text: 'We should have known about it. -> [wi ʃədəv noʊn əˈbaʊɾɪt]', context: '"should have" -> /ʃədəv/.', audioText: 'We should have known about it' },
      { text: 'Give them a call. -> [ɡɪv əm ə kɔːl] ("Give \'em a call")', context: '"them" -> /əm/.', audioText: 'Give them a call' },
      { text: 'She is from Chicago. -> [ʃi ɪz frəm ʃɪˈkɑːɡoʊ]', context: '"from" -> /frəm/.', audioText: 'She is from Chicago' },
      { text: 'He was at the office. -> [hi wəz ət ði ˈɑːfɪs]', context: '"was" -> /wəz/, "at" -> /ət/.', audioText: 'He was at the office' },
      { text: 'Do you want to come? -> [də jə ˈwɑːntə kʌm]', context: '"do you" -> /də jə/, "want to" -> /wɑːntə/.', audioText: 'Do you want to come' },
      { text: 'More and more people -> [mɔːr ən mɔːr ˈpiːpl̩]', context: '"and" -> /ən/.', audioText: 'More and more people' },
      { text: 'What are you looking at? -> [wʌt ər jə ˈlʊkɪŋ æt]', context: '"at" is at the END of the sentence, so it remains STRONG /æt/!', audioText: 'What are you looking at' },
    ],
    realLifeExamples: [
      {
        text: 'I would have called you, but my phone died. [aɪ wədəv ˈkɔːld jə | bət maɪ foʊn daɪd]',
        situation: 'Explaining why you didn’t respond to a message.',
        context: '"would have" -> "wou-duhv", "you" -> "yuh".',
      },
      {
        text: 'You must have left your keys at the restaurant. [ju mʌstəv lɛft jər kiːz ət ðə ˈrɛstrɑːnt]',
        situation: 'Helping someone search for lost items.',
        context: '"must have" -> "muss-tuhv", "at the" -> "uht-thuh".',
      },
      {
        text: 'Where have you been all day? [wɛrəv jə bɪn ɔːl deɪ]',
        situation: 'Welcoming family home after a long delay.',
        context: '"Where have you" -> "Wher-uhv-yuh".',
      },
    ],
    professionalExamples: [
      {
        text: 'We could have prevented the data breach if two-factor authentication had been enforced. [wi kədəv prɪˈvɛntɪd ðə ˈdeɪɾə briːtʃ ɪf tuː ˈfæktər ɔːˌθɛntɪˈkeɪʃn̩ həd bɪn ɛnˈfɔːrst]',
        context: 'Executive cybersecurity post-mortem.',
        tone: 'Reflective, analytical, polished',
      },
      {
        text: 'I’ve been speaking with our enterprise clients to gauge their appetite for this feature. [aɪv bɪn ˈspiːkɪŋ wɪð aʊər ˈɛntərpraɪz ˈklaɪənts tə ɡeɪdʒ ðɛr ˈæpɪtaɪt fər ðɪs ˈfiːtʃər]',
        context: 'Product management sync.',
        tone: 'Collaborative, professional, natural',
      },
      {
        text: 'All of them agreed that we need to pivot our go-to-market strategy. [ɔːl əv əm əˈɡriːd ðət wi niːd tə ˈpɪvət aʊər ˈɡoʊ tə ˈmɑːrkɪt ˈstrætədʒi]',
        context: 'Leadership debrief after sales summit.',
        tone: 'Executive, fluent, engaging',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The database should have thrown a unique constraint violation on duplicate inserts. [ðə ˈdeɪɾəbeɪs ʃədəv θroʊn ə juˈniːk kənˈstreɪnt vaɪəˈleɪʃn̩ ɑːn ˈduːplɪkət ˈɪnsɜːrts]',
        analogy: '"should have" -> /ʃədəv/. Highlighting the architectural expectation.',
        devContext: 'Bug triage ticket discussion.',
      },
      {
        text: 'We must have had an unhandled promise rejection in the background worker. [wi mʌstəv hæd ən ʌnˈhændl̩d ˈprɑːmɪs rɪˈdʒɛkʃn̩ ɪn ðə ˈbækɡraʊnd ˈwɜːrkər]',
        analogy: '"must have had" -> "muss-tuhv had" (/mʌstəv hæd/).',
        devContext: 'Node.js crash log investigation.',
      },
    ],
    contrast: {
      conceptA: 'Strong Form Everywhere (Over-Enunciated & Stiff)',
      conceptB: 'Weak Form Compression (Native Fluid Dynamics)',
      differences: [
        { aspect: 'Pronouncing "for"', optionA: 'Always saying full /fɔːr/ ("This is /fɔːr/ you")', optionB: 'Compressing to /fər/ ("This is /fər/ you")' },
        { aspect: 'Pronouncing "been"', optionA: 'Pronouncing as /biːn/ ("bean") in every context', optionB: 'Compressing to short /bɪn/ ("bin") in routine speech' },
        { aspect: 'Pronouncing "should have"', optionA: '"Should... Have..." (2 separate heavy words)', optionB: '"Should’ve" (/ʃədəv/) as a single light auxiliary connector' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Writing "could of", "should of", or "would of" in professional emails.',
        likelyIntention: 'Writing "could have", "should have", or "would have".',
        rootCause: 'Acoustic confusion. Because native speakers pronounce "could have" as /kʊdəv/, non-native learners mistakenly think they are saying "could OF". This is a severe spelling defect in professional writing.',
        naturalCorrection: 'Always write "could have" (or "could’ve"), never "could of".',
        nativeCadence: '"We could’ve shipped earlier."',
      },
      {
        learnerError: 'Using weak forms at the end of a clause: "Who are you waiting /fər/?"',
        likelyIntention: 'Asking who someone is waiting for.',
        rootCause: 'Misapplying weak forms to final positions. When a preposition sits stranded at the end of a clause or sentence, it MUST revert to its STRONG citation form.',
        naturalCorrection: 'Use the strong form at sentence endings: "Who are you waiting for?" (/fɔːr/).',
        nativeCadence: '"Who are you waiting FOR?"',
      },
    ],
    nativeIntuition:
      'Weak forms are not a sign of lazy English; they are the exact acoustic contrast mechanism that makes English comprehensible. If everything is loud and strong, nothing stands out. Stressed words only shine because weak forms create the dark background behind them.',
    patternRecognitionExercises: [
      {
        id: 'p-104-1',
        prompt: 'In which of the following positions MUST the word "from" be pronounced in its STRONG citation form (/frɒm/)?',
        options: [
          '"I received a letter from my bank."',
          '"Where did you come from?"',
          '"She lives ten miles from here."',
          '"It’s far from perfect."',
        ],
        correctIndex: 1,
        explanation: 'At the end of a sentence ("Where did you come from?"), stranded prepositions always take their STRONG form (/frɒm/), never the weak form (/frəm/).',
      },
    ],
    productionPrompts: [
      {
        scenario: 'Explain to a client why an unexpected deployment delay occurred, mentioning what should have happened.',
        targetPattern: 'We should have (/ʃədəv/) + been able to (/bɪn ˈeɪbl̩ tə/)',
        hint: 'Compress "should have" and "been".',
        sampleAnswer: 'We should have (should’ve) been able to complete the migration last night, but we ran into unexpected schema locks.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'MODAL COMPRESSION DRILL: Say these three auxiliary chains as single acoustic words: 1) "could have" -> /kədəv/ 2) "would have" -> /wədəv/ 3) "should have" -> /ʃədəv/.',
      timedChallenge: 'Produce: "We could have been there on time if we had left earlier" in under 4 seconds with full weak forms.',
      durationSeconds: 4,
      roleplayPrompt: 'Rapid post-meeting debrief.',
    },
    recallTest: [
      {
        question: 'When is a preposition required to use its strong form instead of its weak form?',
        hiddenAnswer: 'When it is stressed for contrastive emphasis (e.g., "I said TO him, not FROM him") or when it stands alone at the very end of a sentence or clause ("Who is it FOR?").',
      },
    ],
    revisionConnection:
      'With connected speech mechanics assembled, Chapter 105 introduces the conductor of the entire orchestra: Intonation, Sentence Stress & Pitch Glides.',
    masteryChallenge:
      'Record yourself reading a paragraph of a news article. Count how many times you used /tə/, /fər/, and /əv/ versus full /tuː/, /fɔːr/, and /ɒv/. Strive for 90% weak forms on function words.',
  },

  // ─────────────────────────────────────────────────────────────
  // CHAPTER 105: INTONATION, SENTENCE STRESS & PITCH GLIDES
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ch-105',
    partNumber: 9,
    partTitle: 'The Listening Engine (Connected Speech & Reductions)',
    chapterNumber: 105,
    title: 'Intonation, Sentence Stress & Pitch Glides',
    subtitle: 'How Pitch Movement Governs Meaning, Certainty, Authority, and Executive Presence',
    level: 'Tier 4 & Tier 5',
    readingTimeMinutes: 19,
    dna: {
      coreConcept: 'Pitch is the Soundtrack of Intent: The Same Words Mean 7 Different Things Depending on Where Pitch Falls and Glides',
      mentalModel:
        'Think of a song melody vs. monotone narration. In English, pitch is NOT used to differentiate word definitions (unlike tonal languages like Mandarin). Instead, pitch is the musical carrier wave for EMOTIONAL INTENT, CONFIDENCE, COMPLETION, and FOCUS. A falling pitch (↘) communicates absolute certainty, finality, and authority. A rising pitch (↗) communicates uncertainty, incompleteness, or open inquiry. A rise-fall or fall-rise glide communicates nuance, reservation, or skepticism ("Well... I agree with the principle, but...").',
      whyEnglishUsesIt:
        'English syntax allows identical sentence structures for statements, questions, and sarcastic ironies. For example: "You are going to the meeting." Said with a terminal fall (↘), it is an executive command. Said with a terminal rise (↗), it is an incredulous question ("You’re going to the meeting?!"). Master intonation to control how your leadership is perceived.',
    },
    mentalMovie: {
      sceneDescription:
        'Picture an airplane trajectory. When an aircraft lands firmly on the runway and engages reverse thrust, it touches down definitively (THE FALLING CADENCE ↘). When a pilot approaches a runway, aborts the landing, and circles back up into the clouds, it remains suspended in the air (THE RISING CADENCE ↗). Executives land the airplane; nervous speakers stay circling in the clouds.',
      schematic: `
    [ THE 4 MASTER PITCH TRAJECTORIES ]

    1. THE DEFINITIVE FALL (↘) — Authority, Finality, Factual Statements:
       "The deployment is complete." ─── [com- ] ──> [PLEEEEETE ↘]
       (Signals: "This is a fact. I am certain. The floor is open.")

    2. THE OPEN RISE (↗) — Yes/No Questions, Incompleteness, Checking Alignment:
       "Did you verify the backups?" ─── [back- ] ──> [UUUUUPS ↗]
       (Signals: "I am actively seeking your input / confirmation.")

    3. THE FALL-RISE (↘↗) — Nuance, Reservation, "Yes, BUT...":
       "Technically it works..." ─── [IT WORKS ↘↗]
       (Signals: "The literal statement is true, BUT there is a major catch.")

    4. CONTRASTIVE FOCUS STRESS (Pitch Peak Shifts Meaning):
       - "I never said she stole my laptop." (Someone ELSE said it!)
       - "I never said she stole my laptop." (I strongly DENY ever saying it!)
       - "I never said SHE stole my laptop." (I implied someone ELSE stole it!)
`,
    },
    pattern: {
      formula: 'CORE FOCUS WORD (Highest Pitch & Longest Duration) + TERMINAL PITCH GLIDE (Fall ↘ or Rise ↗) = EXECUTIVE CLARITY',
      breakdown: [
        { element: 'Tonic Syllable (Focus Peak)', meaning: 'The single most important word in the thought group receives the highest musical pitch leap.' },
        { element: 'Terminal Fall (↘)', meaning: 'Pitch drops below baseline at the end of the sentence to project confidence and closure.' },
        { element: 'Terminal Rise (↗)', meaning: 'Pitch elevates above baseline to invite collaboration, ask yes/no questions, or signal that more is coming.' },
        { element: 'Uptalk Trap', meaning: 'Ending statements with a rising pitch (↗), which makes the speaker sound unsure, insecure, or subservient.' },
      ],
      notes: 'Executive Rule: Eliminate "uptalk". When giving a technical update, always end with a descending pitch (↘). Never let your statements sound like questions.',
    },
    basicExamples: [
      { text: 'We shipped the feature today. ↘', context: 'Definitive statement with falling pitch.', audioText: 'We shipped the feature today' },
      { text: 'Is the release ready for production? ↗', context: 'Yes/No question with rising pitch.', audioText: 'Is the release ready for production' },
      { text: 'What time does the maintenance window begin? ↘', context: 'Wh- questions naturally take a FALLING pitch, not rising!', audioText: 'What time does the maintenance window begin' },
      { text: 'We could do that... ↘↗ (but it’s risky)', context: 'Fall-rise glide expressing reservation.', audioText: 'We could do that' },
      { text: 'I didn’t say WE should pay for it. (Someone else should)', context: 'Contrastive stress on "WE".', audioText: 'I didn’t say we should pay for it' },
      { text: 'I didn’t say we should PAY for it. (We should get it for free)', context: 'Contrastive stress on "PAY".', audioText: 'I didn’t say we should pay for it' },
      { text: 'First, we run the migrations ↗; second, we swap the DNS ↗; finally, we verify traffic ↘.', context: 'Listing intonation (Rise, Rise, Fall).', audioText: 'First we run the migrations, second we swap the DNS, finally we verify traffic' },
      { text: 'Are you sure about that? ↗', context: 'Inquisitive rise.', audioText: 'Are you sure about that' },
    ],
    realLifeExamples: [
      {
        text: 'I’d love to come to your party, but I already have plans. [aɪd lʌv tə kʌm tə jər ˈpɑːrɾi ↘↗ | bət aɪ ɔːlˈrɛdi hæv plænz ↘]',
        situation: 'Social invitation decline.',
        context: 'Fall-rise on "party" softens the decline; definitive fall on "plans" marks the reality.',
      },
      {
        text: 'Are you coming with us, or are you staying here? [ɑːr jə ˈkʌmɪŋ wɪð əs ↗ | ɔːr ɑːr jə ˈsteɪɪŋ hɪr ↘]',
        situation: 'Group departure decision.',
        context: 'Alternative question pattern: Option A rises (↗), Option B falls (↘).',
      },
      {
        text: 'Thank you for your help. ↘',
        situation: 'Genuine, warm appreciation.',
        context: 'Falling pitch on "help" sounds sincere and grounded. A rising pitch ("Thank you for your help? ↗") sounds sarcastic or impatient.',
      },
    ],
    professionalExamples: [
      {
        text: 'The architecture is sound ↗, the tests are green ↗, and we are ready to deploy ↘.',
        context: 'Release manager final go/no-go signoff.',
        tone: 'Commanding, rhythmic, decisive',
      },
      {
        text: 'I strongly recommend that we defer this migration until Q3 ↘.',
        context: 'Senior technical pushback in an executive meeting.',
        tone: 'Grounded, authoritative, unequivocal (sharp downward fall)',
      },
      {
        text: 'It’s a viable option ↘↗... however, the licensing fees could become prohibitive ↘.',
        context: 'Vendor evaluation discussion.',
        tone: 'Judicious, analytical, nuanced',
      },
    ],
    softwareEngineeringExamples: [
      {
        text: 'The microservice didn’t crash because of MEMORY ↘; it crashed because of a DEADLOCK ↘.',
        analogy: 'Using contrastive stress peaks to refute a technical hypothesis cleanly.',
        devContext: 'Production incident war room.',
      },
      {
        text: 'Can we roll back the change without dropping active WebSocket connections? ↗',
        analogy: 'Yes/No technical feasibility inquiry with a clean terminal rise.',
        devContext: 'High-severity outage triage.',
      },
    ],
    contrast: {
      conceptA: 'Uptalk Cadence (Uncertain & Insecure)',
      conceptB: 'Definitive Executive Fall (Authoritative & Grounded)',
      differences: [
        { aspect: 'Status Update', optionA: '"Our team finished the sprint goals? ↗" (Sounds like asking permission or doubting oneself)', optionB: '"Our team finished the sprint goals. ↘" (Clear factual completion)' },
        { aspect: 'Wh- Questions', optionA: '"Where is the API key? ↗" (Overly polite or timid)', optionB: '"Where is the API key? ↘" (Natural professional directness)' },
        { aspect: 'Expressing Disagreement', optionA: '"I don’t know if that’s right...?" (Passive hesitation)', optionB: '"I have reservations about that timeline ↘↗. Let’s look at the data ↘."' },
      ],
    },
    commonMistakes: [
      {
        learnerError: 'Using "uptalk" (rising intonation) at the end of declarative statements.',
        likelyIntention: 'Trying to sound friendly, polite, or open.',
        rootCause: 'Cultural influence or nervousness. In English professional culture, ending statements with a rising pitch makes you sound junior, uncertain, and easily steamrolled.',
        naturalCorrection: 'Land the plane: drop your pitch firmly at the end of statements.',
        nativeCadence: '"We have completed the review. ↘"',
      },
      {
        learnerError: 'Rising at the end of Wh- questions: "What time is the meeting? ↗"',
        likelyIntention: 'Thinking all questions must rise in pitch.',
        rootCause: 'Rule confusion. Only YES/NO questions rise at the end. Questions starting with Wh- (Who, What, Where, When, Why, How) naturally fall at the end in English.',
        naturalCorrection: 'Use a falling pitch for Wh- questions: "What time is the meeting? ↘"',
        nativeCadence: '"When does it start? ↘"',
      },
    ],
    nativeIntuition:
      'Native listeners judge your seniority, credibility, and emotional state through your pitch contour within the first 3 seconds of hearing your voice. If your pitch lands firmly on the runway, people trust your technical decisions. If your pitch floats up into the air, people question your competence.',
    patternRecognitionExercises: [
      {
        id: 'p-105-1',
        prompt: 'Which sentence should naturally end with a FALLING intonation contour (↘)?',
        options: [
          '"Are we deploying today?"',
          '"Did you see the new pull request?"',
          '"Why did the database connection fail?"',
          '"Can you help me with this bug?"',
        ],
        correctIndex: 2,
        explanation: '"Why did the database connection fail?" is a Wh- question. In English, Wh- questions naturally take a falling intonation contour (↘).',
      },
    ],
    productionPrompts: [
      {
        scenario: 'You are presenting the final recommendation of a multi-week cloud provider migration study to your CTO.',
        targetPattern: 'Listing intonation (Rise, Rise) + Final Grounded Fall (↘)',
        hint: 'Deliver the 3 reasons with crisp pitch control and land firmly on your recommendation.',
        sampleAnswer: 'AWS offers lower egress fees ↗, superior latency in the EU region ↗, and far more mature Kubernetes tooling ↘. Therefore, we recommend migrating our primary cluster to AWS this quarter ↘.',
      },
    ],
    speakingDrill: {
      vocalInstruction: 'THE EXECUTIVE CADENCE DRILL: Say this statement 3 times, actively lowering your pitch on the final word as if closing a heavy vault door: "The architecture is finalized. ↘" Do NOT let your voice rise.',
      timedChallenge: 'Deliver a 3-part list with Rise-Rise-Fall in under 10 seconds: "We refactored the code ↗, updated the documentation ↗, and merged the PR ↘."',
      durationSeconds: 10,
      roleplayPrompt: 'Closing your status update at daily standup.',
    },
    recallTest: [
      {
        question: 'What is the intonation rule for Wh- questions versus Yes/No questions in English?',
        hiddenAnswer: 'Yes/No questions end with a RISING intonation (↗) to solicit confirmation, whereas Wh- questions end with a FALLING intonation (↘) because the question word already established inquiry.',
      },
    ],
    revisionConnection:
      'You have mastered the entire Listening & Connected Speech Engine. In Part 10, you transition from auditory decoding to rapid vocal production: The 3-Second Rule, Spontaneous Flow, and Verbal Paraphrasing.',
    masteryChallenge:
      'Record yourself giving a 30-second technical recommendation. Analyze your audio waveform or pitch: Did any declarative statements end with an accidental rise (uptalk)? Re-record until every statement lands with an authoritative fall (↘).',
  },
];
