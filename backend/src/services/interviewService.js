import genAI from "../config/gemini.js";

export const generateQuestions = async (
  resumeText,
  jobDescription
) => {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an interviewer.

Resume:
${resumeText}

Job Description:
${jobDescription}

Generate exactly 5 technical interview questions.

Return only JSON.

{
  "questions":[
    "question1",
    "question2",
    "question3",
    "question4",
    "question5"
  ]
}
`;

  const result =
    await model.generateContent(prompt);

  return result.response.text();
};