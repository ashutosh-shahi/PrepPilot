import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import {
  generateInterview,
} from "../controllers/interviewController.js";

const router = express.Router();

router.post(
  "/generate",
  upload.single("resume"),
  generateInterview
);

export default router;