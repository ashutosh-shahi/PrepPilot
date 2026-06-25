import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



import {
  createSession,
} from "../services/interviewStore";
import {
  generateInterview,
} from "../services/interviewService";
const UploadResumePage = () => {
  const navigate = useNavigate();

  const [jobDescription, setJobDescription]
  = useState("");

  const [loading, setLoading]
  = useState(false);
  const [resumeFile, setResumeFile]
  = useState<File | null>(null);
  const handleGenerate = async () => {

  try {

    setLoading(true);

    if (!resumeFile) {
        alert("Please upload your resume.");
        return;
      }

      const response =
        await generateInterview(
          resumeFile,
          jobDescription
        );
      const parsed =
        JSON.parse(response.data);

      createSession(
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

          

                <div className="border-2 border-dashed border-slate-700 rounded-xl p-12 text-center mb-8">

                  <label
                    htmlFor="resume-upload"
                    className="cursor-pointer inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
                  >
                    📄 Choose Resume (PDF)
                  </label>

                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.length) {
                        setResumeFile(e.target.files[0]);
                      }
                    }}
                  />

                  {resumeFile && (
                    <div className="mt-5">
                      <p className="text-green-400 font-medium">
                        ✓ {resumeFile.name}
                      </p>
                      <p className="text-slate-500 text-sm mt-1">
                        Resume uploaded successfully
                      </p>
                    </div>
                  )}

                </div>
                

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

      
    </>
  );
};

export default UploadResumePage;