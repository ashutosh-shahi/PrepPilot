import groq from "../config/groq.js";

export const generateQuestions = async (
  resumeText,
  jobDescription
) => {

  const prompt = `
You are a technical interviewer.

Resume:
${resumeText}

Job Description:
${jobDescription}

Generate exactly 5 interview questions.

Return ONLY valid JSON.

{
  "questions": [
    "question1",
    "question2",
    "question3",
    "question4",
    "question5"
  ]
}
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