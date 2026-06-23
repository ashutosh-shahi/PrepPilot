import api from "./api";

export const generateInterview = async (
  resumeText: string,
  jobDescription: string
) => {
  const response = await api.post("/interview/generate", {
    resumeText,
    jobDescription,
  });

  return response.data;
};