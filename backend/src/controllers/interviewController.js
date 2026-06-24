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
      jobDescription,
    } = req.body;

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

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Generation failed",
    });
  }
};