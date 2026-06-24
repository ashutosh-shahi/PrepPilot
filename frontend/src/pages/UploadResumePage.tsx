import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  generateInterview,
} from "../services/interviewService";

import {
  setQuestions,
} from "../services/interviewStore";
const UploadResumePage = () => {
  const navigate = useNavigate();

  const [jobDescription, setJobDescription]
  = useState("");

  const [loading, setLoading]
  = useState(false);
  const handleGenerate = async () => {

  try {

    setLoading(true);

    const resumeText = `
Ashutosh Shahi

Electrical Engineering

Skills:
Java
React
Node.js
MongoDB

Projects:
SkillForge
PrepPilot
`;

    const response =
        await generateInterview(
          resumeText,
          jobDescription
        );

      const parsed =
        JSON.parse(response.data);

      setQuestions(
        parsed.questions
      );

      navigate("/interview");

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-8">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-3">
            Upload Resume
          </h1>

          <p className="text-slate-400 mb-8">
            Upload your resume and paste the target job description.
          </p>

          <div className="border-2 border-dashed border-slate-700 rounded-xl p-16 text-center mb-8">

                <p className="text-xl mb-4">
                    Upload Resume
                </p>

                <input
                    type="file"
                    accept=".pdf"
                    className="text-slate-300"
                />

            </div>
            <select
            className="w-full mb-6 bg-slate-900 border border-slate-700 rounded-xl p-4"
            >
            <option>DE Shaw</option>
            <option>Goldman Sachs</option>
            <option>Meesho</option>
            <option>Zomato</option>
            <option>Custom Job Description</option>
            </select>

          <textarea
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(e.target.value)
            }
            placeholder="Paste Job Description Here..."
            className="w-full h-64 bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-6 bg-blue-600 px-6 py-3 rounded-lg"
          >
            {loading
              ? "Generating..."
              : "Generate Interview"}
          </button>

        </div>

      </div>
    </>
  );
};

export default UploadResumePage;