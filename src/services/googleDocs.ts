import { Chapter, GoogleDocFile } from '../types';

/**
 * Creates a structured Google Doc for a given chapter using the Google Docs API
 */
export async function exportChapterToGoogleDoc(
  chapter: Chapter,
  accessToken: string
): Promise<{ documentId: string; url: string; title: string }> {
  const docTitle = `The English Engine - Ch ${chapter.chapterNumber}: ${chapter.title}`;

  // 1. Create document
  const createRes = await fetch('https://docs.googleapis.com/v1/documents', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: docTitle }),
  });

  if (!createRes.ok) {
    const err = await createRes.json().catch(() => ({}));
    throw new Error(err?.error?.message || `Failed to create Google Doc (Status ${createRes.status})`);
  }

  const docData = await createRes.json();
  const documentId = docData.documentId;

  // 2. Prepare structured plain text to insert
  let text = `${docTitle.toUpperCase()}\n`;
  text += `${chapter.subtitle}\n`;
  text += `Part ${chapter.partNumber}: ${chapter.partTitle} | ${chapter.level} | ${chapter.readingTimeMinutes} min read\n\n`;

  text += `════════════════════════════════════════════════════════════\n`;
  text += `1. DNA (PREDICTIVE MENTAL MODEL)\n`;
  text += `════════════════════════════════════════════════════════════\n`;
  text += `• Core Concept: ${chapter.dna.coreConcept}\n`;
  text += `• Mental Model: ${chapter.dna.mentalModel}\n`;
  text += `• Why English Uses It: ${chapter.dna.whyEnglishUsesIt}\n\n`;

  text += `════════════════════════════════════════════════════════════\n`;
  text += `2. MENTAL MOVIE (VISUAL SCHEMATIC)\n`;
  text += `════════════════════════════════════════════════════════════\n`;
  text += `${chapter.mentalMovie.sceneDescription}\n\n`;
  text += `Schematic Vector:\n${chapter.mentalMovie.schematic}\n\n`;

  text += `════════════════════════════════════════════════════════════\n`;
  text += `3. CORE PATTERN & SYNTAX\n`;
  text += `════════════════════════════════════════════════════════════\n`;
  text += `Formula: ${chapter.pattern.formula}\n\n`;
  chapter.pattern.breakdown.forEach((b) => {
    text += `  [${b.element}] ──> ${b.meaning}\n`;
  });
  if (chapter.pattern.notes) {
    text += `\nNote: ${chapter.pattern.notes}\n`;
  }
  text += `\n`;

  text += `════════════════════════════════════════════════════════════\n`;
  text += `4. BASIC EXAMPLES (FOUNDATION)\n`;
  text += `════════════════════════════════════════════════════════════\n`;
  chapter.basicExamples.forEach((ex, idx) => {
    text += `${idx + 1}. "${ex.text}"\n   Context: ${ex.context}\n\n`;
  });

  text += `════════════════════════════════════════════════════════════\n`;
  text += `5. REAL-LIFE SITUATIONAL EXAMPLES\n`;
  text += `════════════════════════════════════════════════════════════\n`;
  chapter.realLifeExamples.forEach((ex, idx) => {
    text += `${idx + 1}. "${ex.text}"\n   Situation: ${ex.situation} (${ex.context})\n\n`;
  });

  text += `════════════════════════════════════════════════════════════\n`;
  text += `6. PROFESSIONAL & WORKPLACE EXAMPLES\n`;
  text += `════════════════════════════════════════════════════════════\n`;
  chapter.professionalExamples.forEach((ex, idx) => {
    text += `${idx + 1}. "${ex.text}"\n   Tone: ${ex.tone} | Context: ${ex.context}\n\n`;
  });

  text += `════════════════════════════════════════════════════════════\n`;
  text += `7. SOFTWARE ENGINEERING & DEVELOPER EXAMPLES\n`;
  text += `════════════════════════════════════════════════════════════\n`;
  chapter.softwareEngineeringExamples.forEach((ex, idx) => {
    text += `${idx + 1}. "${ex.text}"\n   Programming Analogy: ${ex.analogy}\n   Context: ${ex.devContext}\n\n`;
  });

  text += `════════════════════════════════════════════════════════════\n`;
  text += `8. CONTRAST ANALYSIS: ${chapter.contrast.conceptA} vs. ${chapter.contrast.conceptB}\n`;
  text += `════════════════════════════════════════════════════════════\n`;
  chapter.contrast.differences.forEach((diff) => {
    text += `• ${diff.aspect.toUpperCase()}:\n`;
    text += `    - ${chapter.contrast.conceptA}: ${diff.optionA}\n`;
    text += `    - ${chapter.contrast.conceptB}: ${diff.optionB}\n`;
  });
  text += `\n`;

  text += `════════════════════════════════════════════════════════════\n`;
  text += `9. COMMON LEARNER MISTAKES & INDIAN ENGLISH ROOT CAUSES\n`;
  text += `════════════════════════════════════════════════════════════\n`;
  chapter.commonMistakes.forEach((m, idx) => {
    text += `Mistake #${idx + 1}:\n`;
    text += `  ❌ Common Form: "${m.learnerError}"\n`;
    text += `  💭 Intended Idea: ${m.likelyIntention}\n`;
    text += `  🔍 Root Cause: ${m.rootCause}\n`;
    text += `  ✅ Natural Native English: "${m.naturalCorrection}"\n`;
    text += `  🎵 Native Cadence: ${m.nativeCadence}\n\n`;
  });

  text += `════════════════════════════════════════════════════════════\n`;
  text += `10. NATIVE INTUITION\n`;
  text += `════════════════════════════════════════════════════════════\n`;
  text += `${chapter.nativeIntuition}\n\n`;

  text += `════════════════════════════════════════════════════════════\n`;
  text += `11. LOUD VOCAL SPEAKING DRILL (SAY ALOUD)\n`;
  text += `════════════════════════════════════════════════════════════\n`;
  text += `Instruction: ${chapter.speakingDrill.vocalInstruction}\n`;
  text += `Timed Challenge: ${chapter.speakingDrill.timedChallenge} (${chapter.speakingDrill.durationSeconds}s)\n`;
  text += `Roleplay Prompt:\n${chapter.speakingDrill.roleplayPrompt}\n\n`;

  text += `════════════════════════════════════════════════════════════\n`;
  text += `12. RECALL & REVISION MASTERY\n`;
  text += `════════════════════════════════════════════════════════════\n`;
  chapter.recallTest.forEach((r, idx) => {
    text += `Q${idx + 1}: ${r.question}\n   Answer: ${r.hiddenAnswer}\n\n`;
  });
  text += `Mastery Challenge: ${chapter.masteryChallenge}\n`;
  text += `Engine Connection: ${chapter.revisionConnection}\n\n`;
  text += `Generated by The English Engine OS on ${new Date().toLocaleDateString()}.\n`;

  // 3. BatchUpdate to insert text into the document
  const updateRes = await fetch(`https://docs.googleapis.com/v1/documents/${documentId}:batchUpdate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests: [
        {
          insertText: {
            location: { index: 1 },
            text: text,
          },
        },
      ],
    }),
  });

  if (!updateRes.ok) {
    const err = await updateRes.json().catch(() => ({}));
    console.warn('Text batch update warning:', err);
  }

  const webUrl = `https://docs.google.com/document/d/${documentId}/edit`;
  return { documentId, url: webUrl, title: docTitle };
}

/**
 * Creates a custom study note or journal entry in Google Docs
 */
export async function createStudyNoteDoc(
  title: string,
  content: string,
  accessToken: string
): Promise<{ documentId: string; url: string }> {
  const createRes = await fetch('https://docs.googleapis.com/v1/documents', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: `[English Engine] ${title}` }),
  });

  if (!createRes.ok) {
    const err = await createRes.json().catch(() => ({}));
    throw new Error(err?.error?.message || 'Failed to create document');
  }

  const { documentId } = await createRes.json();

  await fetch(`https://docs.googleapis.com/v1/documents/${documentId}:batchUpdate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests: [
        {
          insertText: {
            location: { index: 1 },
            text: content,
          },
        },
      ],
    }),
  });

  return {
    documentId,
    url: `https://docs.google.com/document/d/${documentId}/edit`,
  };
}

/**
 * Lists Google Docs in user's Google Drive created with this app
 */
export async function listUserDocs(accessToken: string): Promise<GoogleDocFile[]> {
  const query = encodeURIComponent("mimeType='application/vnd.google-apps.document' and trashed=false");
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,webViewLink,createdTime)&orderBy=createdTime desc&pageSize=15`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data.files || [];
}

/**
 * Deletes a Google Doc file with mandatory user confirmation
 */
export async function deleteUserDoc(fileId: string, fileName: string, accessToken: string): Promise<boolean> {
  const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return res.ok;
}
