import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  getQuestions,
} from "../services/interviewStore";



const InterviewPage = () => {
  const sampleQuestions = getQuestions();
  if (
    !sampleQuestions ||
    sampleQuestions.length === 0
  ) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-slate-950 text-white p-8">

          <div className="max-w-4xl mx-auto">

            <h1 className="text-3xl font-bold">
              No Questions Generated
            </h1>

            <p className="mt-4 text-slate-400">
              Go back and generate an interview first.
            </p>

          </div>

        </div>
      </>
    );
  }
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-8">
        <div className="max-w-4xl mx-auto">

          <div className="mb-8">
            <h1 className="text-4xl font-bold">
              Mock Interview
            </h1>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">

            <p className="text-blue-400 mb-3">
              Question {currentQuestion + 1} of {sampleQuestions.length}
            </p>

            <h2 className="text-2xl font-semibold">
              {sampleQuestions[currentQuestion]}
            </h2>

          </div>

          <textarea
            placeholder="Type answer..."
            className="w-full h-64 bg-slate-900 border border-slate-800 rounded-xl p-4"
          />

          <div className="flex justify-between mt-6">

            <button
              onClick={prevQuestion}
              className="bg-slate-800 px-6 py-3 rounded-lg"
            >
              Previous
            </button>

            <button
              onClick={nextQuestion}
              className="bg-blue-600 px-6 py-3 rounded-lg"
            >
              Next
            </button>

          </div>

        </div>
      </div>
    </>
  );
};

export default InterviewPage;