export interface Chapter {
  id: string;
  partNumber: number;
  partTitle: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  level: 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4' | 'Tier 5' | 'Tier 6' | 'Tier 7' | string;
  readingTimeMinutes: number;
  dna: {
    coreConcept: string;
    mentalModel: string;
    whyEnglishUsesIt: string;
  };
  mentalMovie: {
    sceneDescription: string;
    schematic: string;
  };
  pattern: {
    formula: string;
    breakdown: { element: string; meaning: string }[];
    notes?: string;
  };
  basicExamples: { text: string; context: string; audioText?: string }[];
  realLifeExamples: { text: string; context: string; situation: string }[];
  professionalExamples: { text: string; context: string; tone: string }[];
  softwareEngineeringExamples: { text: string; analogy: string; devContext: string }[];
  contrast: {
    conceptA: string;
    conceptB: string;
    differences: { aspect: string; optionA: string; optionB: string }[];
  };
  commonMistakes: {
    learnerError: string;
    likelyIntention: string;
    rootCause: string;
    naturalCorrection: string;
    nativeCadence: string;
  }[];
  nativeIntuition: string;
  patternRecognitionExercises: {
    id: string;
    prompt: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  productionPrompts: {
    scenario: string;
    targetPattern: string;
    hint: string;
    sampleAnswer: string;
  }[];
  speakingDrill: {
    vocalInstruction: string;
    timedChallenge: string;
    durationSeconds: number;
    roleplayPrompt: string;
  };
  recallTest: {
    question: string;
    hiddenAnswer: string;
  }[];
  revisionConnection: string;
  masteryChallenge: string;
}

export interface PartOverview {
  partNumber: number;
  title: string;
  subtitle: string;
  tier: string;
  description: string;
  chapterIds: string[];
}

export interface GoogleDocFile {
  id: string;
  name: string;
  webViewLink?: string;
  createdTime?: string;
}

export interface StudySession {
  protocol: '30m' | '60m' | '90m' | '120m';
  date: string;
  completedTasks: string[];
  notes: string;
}
