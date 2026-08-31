import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },

    company: {
      type: String,
      required: true,
    },

    questions: {
      type: [String],
      required: true,
    },

    answers: {
      type: [String],
      required: true,
    },

    feedback: [
      {
        score: Number,
        strengths: [String],
        weaknesses: [String],
        idealAnswer: String,
      },
    ],

    overallScore: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Interview = mongoose.model(
  "Interview",
  interviewSchema
);

export default Interview;