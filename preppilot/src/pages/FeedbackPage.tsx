import Navbar from "../components/Navbar";

const FeedbackPage = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-8">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">
            Interview Feedback
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-slate-400 mb-2">
                Technical Score
              </h3>

              <p className="text-5xl font-bold">
                84%
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-slate-400 mb-2">
                Communication
              </h3>

              <p className="text-5xl font-bold">
                78%
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-slate-400 mb-2">
                Confidence
              </h3>

              <p className="text-5xl font-bold">
                91%
              </p>
            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">

            <h2 className="text-xl font-semibold mb-4">
              AI Feedback
            </h2>

            <ul className="space-y-3 text-slate-300">

              <li>
                • Strong understanding of React fundamentals.
              </li>

              <li>
                • Improve explanation of authentication flow.
              </li>

              <li>
                • Dynamic Programming concepts need revision.
              </li>

              <li>
                • Communication was concise and structured.
              </li>

            </ul>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h2 className="text-xl font-semibold mb-4">
              Recommended Topics
            </h2>

            <div className="flex flex-wrap gap-3">

              <span className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg">
                Dynamic Programming
              </span>

              <span className="bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-lg">
                System Design
              </span>

              <span className="bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-lg">
                Operating Systems
              </span>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default FeedbackPage;