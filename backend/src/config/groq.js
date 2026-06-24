import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

console.log(
  "Loaded:",
  process.env.GROQ_API_KEY?.slice(0,10)
);

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default groq;