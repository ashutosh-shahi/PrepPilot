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