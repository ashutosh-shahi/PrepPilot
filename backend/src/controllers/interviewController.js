import { generateQuestions } from "../services/interviewService.js";
import { extractTextFromPDF } from "../utils/pdfParser.js";

export const generateInterview = async (req, res) => {
  try {

    const { jobDescription } = req.body || {};

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume PDF is required",
      });
    }

    if (!jobDescription) {
      return res.status(400).json({
        success: false,
        message: "Job description is required",
      });
    }

    const resumeText = await extractTextFromPDF(
      req.file.buffer
    );

    console.log("========== RESUME ==========");
    console.log(resumeText);
    console.log("============================");

    const response = await generateQuestions(
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