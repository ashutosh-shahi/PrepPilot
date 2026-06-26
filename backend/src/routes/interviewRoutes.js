import express from "express";
import upload from "../middleware/uploadMiddleware.js";

import {
  generateInterview,
  evaluateAnswer,
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

export default router;