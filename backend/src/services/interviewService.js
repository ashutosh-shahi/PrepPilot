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