import api from "./api";

export const generateInterview = async (
  resume: File,
  jobDescription: string
) => {
  const formData = new FormData();

  formData.append("resume", resume);
  formData.append("jobDescription", jobDescription);

  const response = await api.post(
    "/interview/generate",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
export const evaluateAnswer = async (
  question: string,
  answer: string
) => {

  const response = await api.post(
    "/interview/evaluate",
    {
      question,
      answer,
    }
  );

  return response.data;
};
export const saveInterview = async (
  userId: string,
  company: string,
  questions: string[],
  answers: string[],
  feedback: unknown[],
  overallScore: number
) => {
  const response = await api.post(
    "/interview/save",
    {
      userId,
      company,
      questions,
      answers,
      feedback,
      overallScore,
    }
  );

  return response.data;
};
export const getUserId = (): string => {
  let userId = localStorage.getItem("userId");

  if (!userId) {
    userId = crypto.randomUUID();

    localStorage.setItem(
      "userId",
      userId
    );
  }

  return userId;
};
export const getInterviewHistory = async (
  userId: string
) => {
  const response = await api.get(
    `/interview/history/${userId}`
  );

  return response.data;
};