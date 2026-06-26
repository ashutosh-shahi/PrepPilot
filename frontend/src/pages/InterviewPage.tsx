import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { evaluateAnswer } from "../services/interviewService";
import { useNavigate } from "react-router-dom";
import {
  getSession,
  updateAnswer,
  updateFeedback,
} from "../services/interviewStore";



const InterviewPage = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [evaluating, setEvaluating] =
  useState(false);
  const recognitionRef = useRef<any>(null);

  const [recording, setRecording] =
    useState(false);
  const session =
    getSession();

  const sampleQuestions =
    session.questions;
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
  
  

  const nextQuestion = () => {

    updateAnswer(currentQuestion, answer);
          if (
        currentQuestion === sampleQuestions.length - 1
      ) {

        const scores =
          session.feedback.map(
            f => f?.score ?? 0
          );

        const average =
          scores.reduce(
            (a, b) => a + b,
            0
          ) / scores.length;

        session.overallScore = Number(
          average.toFixed(1)
        );

        navigate("/feedback");

        return;
      }

    if (currentQuestion < sampleQuestions.length - 1) {

      setCurrentQuestion((prev) => prev + 1);

      setAnswer(
        session.answers[currentQuestion + 1]
      );

    }

  };
  const handleEvaluation = async () => {

  try {
    if (!answer.trim()) {
      alert("Please enter an answer before evaluation.");
      return;
    }

    setEvaluating(true);

    const response =
      await evaluateAnswer(
        sampleQuestions[currentQuestion],
        answer
      );

    updateFeedback(
      currentQuestion,
      response.data
    );

  } catch (error) {

    console.log(error);

  } finally {

    setEvaluating(false);

  }

};
const startRecording = () => {

  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {

    alert("Speech Recognition is not supported in this browser.");

    return;

  }

  const recognition =
      new SpeechRecognition();

    recognition.continuous = true;

    recognition.interimResults = true;

    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {

      let transcript = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {

        transcript +=
          event.results[i][0].transcript;

      }

      setAnswer(prev => prev + " " + transcript);

    };

    recognition.onend = () => {

      setRecording(false);

    };

    recognition.start();

    recognitionRef.current =
      recognition;

    setRecording(true);

  };

  const prevQuestion = () => {

    updateAnswer(currentQuestion, answer);

    if (currentQuestion > 0) {

      setCurrentQuestion((prev) => prev - 1);

      setAnswer(
        session.answers[currentQuestion - 1]
      );

    }

  };
  const stopRecording = () => {

  recognitionRef.current?.stop();

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
          <div className="flex gap-4 mb-4">

            <button

              onClick={startRecording}

              disabled={recording}

              className="bg-red-600 px-5 py-2 rounded-lg"

            >

              🎤 Start Recording

            </button>

            <button

              onClick={stopRecording}

              disabled={!recording}

              className="bg-slate-700 px-5 py-2 rounded-lg"

            >

              Stop

            </button>

          </div>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={session.feedback[currentQuestion] !== null}
            placeholder="Type answer..."
            className="w-full h-64 bg-slate-900 border border-slate-800 rounded-xl p-4"
          />
          {
            session.feedback[currentQuestion] && (

              <div className="mt-6 bg-slate-900 border border-slate-700 rounded-xl p-6">

                <h3 className="text-2xl font-bold text-green-400">
                  Score:
                  {" "}
                  {
                    session.feedback[currentQuestion]?.score
                  }
                  /10
                </h3>

                <div className="mt-4">

                  <h4 className="font-semibold">
                    Strengths
                  </h4>

                  <ul className="list-disc ml-6">

                    {
                      session.feedback[currentQuestion]
                        ?.strengths
                        .map((item, index) => (

                          <li key={index}>
                            {item}
                          </li>

                        ))
                    }

                  </ul>

                </div>

                <div className="mt-4">

                  <h4 className="font-semibold">
                    Weaknesses
                  </h4>

                  <ul className="list-disc ml-6">

                    {
                      session.feedback[currentQuestion]
                        ?.weaknesses
                        .map((item, index) => (

                          <li key={index}>
                            {item}
                          </li>

                        ))
                    }

                  </ul>

                </div>

                <div className="mt-4">

                  <h4 className="font-semibold">
                    Ideal Answer
                  </h4>

                  <p className="text-slate-300">
                    {
                      session.feedback[currentQuestion]
                        ?.idealAnswer
                    }
                  </p>

                </div>

              </div>

            )
          }

          <div className="flex justify-between mt-6">

            <button
              onClick={prevQuestion}
              className="bg-slate-800 px-6 py-3 rounded-lg"
            >
              Previous
            </button>

            <div className="flex gap-4">

              <button
                onClick={handleEvaluation}
                disabled={
                  evaluating ||
                  session.feedback[currentQuestion] !== null
                }
                className="bg-green-600 px-6 py-3 rounded-lg disabled:opacity-50"
              >
                {evaluating ? "Evaluating..." : "Evaluate"}
              </button>

              <button
                onClick={nextQuestion}
                disabled={
                  session.feedback[currentQuestion] === null
                }
                className="bg-blue-600 px-6 py-3 rounded-lg disabled:opacity-50"
              >
                Next
              </button>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default InterviewPage;