import express from "express";
import upload from "../middleware/uploadMiddleware.js";

import {
  generateInterview,
  evaluateAnswer,
  saveInterview,
  getInterviewHistory,
} from "../controllers/interviewController.js";

const router = express.Router();

router.post(
  "/generate",
  
  upload.single("resume"),
  generateInterview
);

router.post(
  "/evaluate",
  evaluateAnswer
);
router.post(
  "/save",
  saveInterview
);

router.get(
  "/history/:userId",
  getInterviewHistory
);

export default router;