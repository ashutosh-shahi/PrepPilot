import groq from "../config/groq.js";

export const generateQuestions = async (
  resumeText,
  jobDescription
) => {

  const prompt = `
You are a senior software engineer conducting a real interview.

Candidate Resume:
-----------------------
${resumeText}

Target Job Description:
-----------------------
${jobDescription}

Your task:

1. Carefully read the resume.
2. Generate interview questions primarily based on the candidate's OWN experience.
3. If the candidate mentions projects, ask about those projects.
4. If the candidate lists technologies, ask about those technologies.
5. Use the Job Description only to decide what to emphasize.

Return EXACTLY:

{
  "questions":[
    "...",
    "...",
    "...",
    "...",
    "..."
  ]
}

Rules:

- Question 1: Resume project
- Question 2: Resume project
- Question 3: Resume skill
- Question 4: Job-description-specific technical question
- Question 5: Behavioral/system design question related to the resume

Do NOT generate generic JavaScript or REST API questions unless they are actually mentioned in the resume.
Return ONLY valid JSON.
`;
  const completion =
    await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
    });

  return completion.choices[0]
    .message.content;
};
export const evaluateInterviewAnswer = async (
  question,
  answer
) => {

  const prompt = `
You are a Senior Software Engineer interviewing a candidate.

Interview Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer objectively.

Return ONLY valid JSON in this exact format:

{
  "score": 8,
  "strengths": [
    "...",
    "..."
  ],
  "weaknesses": [
    "...",
    "..."
  ],
  "idealAnswer": "..."
}

Rules:
- Score should be between 1 and 10.
- Mention at least 2 strengths.
- Mention at least 2 weaknesses.
- The ideal answer should be concise (3-5 sentences).
- Return ONLY JSON.
`;

  const completion =
    await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
    });

  return JSON.parse(
    completion.choices[0].message.content
  );
};