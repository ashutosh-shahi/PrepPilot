import Navbar from "../components/Navbar";
import { getSession } from "../services/interviewStore";
import {
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Trophy,
} from "lucide-react";

const FeedbackPage = () => {

  const session = getSession();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-8">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold mb-10">
            Interview Complete
          </h1>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 mb-10 text-center">

            <Trophy
              className="mx-auto text-yellow-400 mb-4"
              size={50}
            />

            <p className="text-slate-400 uppercase tracking-[0.3em] text-sm">
              Overall Score
            </p>

            <h2 className="text-7xl font-bold mt-4 text-green-400">
              {session.overallScore}/10
            </h2>

          </div>

          {session.questions.map((question, index) => {

            const feedback =
              session.feedback[index];

            return (

              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8"
              >

                <h2 className="text-2xl font-bold mb-4">
                  Question {index + 1}
                </h2>

                <p className="text-slate-300 leading-7 mb-6">
                  {question}
                </p>

                <div className="mb-8">

                  <p className="text-sm uppercase tracking-wider text-slate-500 mb-2">
                    Score
                  </p>

                  <p className="text-3xl font-bold text-blue-400">
                    {feedback?.score}/10
                  </p>

                </div>

                <div className="border-l-4 border-green-500 pl-5 mb-8">

                  <div className="flex items-center gap-2 mb-3">

                    <CheckCircle
                      size={20}
                      className="text-green-400"
                    />

                    <h3 className="text-xl font-semibold">
                      Strengths
                    </h3>

                  </div>

                  <ul className="space-y-2 text-slate-300">

                    {feedback?.strengths.map(
                      (item, i) => (
                        <li key={i}>
                          • {item}
                        </li>
                      )
                    )}

                  </ul>

                </div>

                <div className="border-l-4 border-red-500 pl-5 mb-8">

                  <div className="flex items-center gap-2 mb-3">

                    <AlertTriangle
                      size={20}
                      className="text-red-400"
                    />

                    <h3 className="text-xl font-semibold">
                      Areas to Improve
                    </h3>

                  </div>

                  <ul className="space-y-2 text-slate-300">

                    {feedback?.weaknesses.map(
                      (item, i) => (
                        <li key={i}>
                          • {item}
                        </li>
                      )
                    )}

                  </ul>

                </div>

                <div className="border-l-4 border-blue-500 pl-5">

                  <div className="flex items-center gap-2 mb-3">

                    <Lightbulb
                      size={20}
                      className="text-blue-400"
                    />

                    <h3 className="text-xl font-semibold">
                      Ideal Answer
                    </h3>

                  </div>

                  <p className="leading-7 text-slate-300">
                    {feedback?.idealAnswer}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </>
  );

};

export default FeedbackPage;