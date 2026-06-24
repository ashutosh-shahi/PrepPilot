import {
  generateQuestions,
} from "../services/interviewService.js";

export const generateInterview = async (
  req,
  res
) => {

  try {

    const {
      resumeText,
      jobDescription
    } = req.body || {};

    if (!resumeText || !jobDescription) {
      return res.status(400).json({
        success: false,
        message:
          "resumeText and jobDescription are required"
      });
    }

    const response =
      await generateQuestions(
        resumeText,
        jobDescription
      );

    res.status(200).json({
      success: true,
      data: response,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Generation failed",
    });
  }
};