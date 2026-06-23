import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import { Link } from "react-router-dom";
import InterviewHistory from "../components/InterviewHistory";
import ProgressBar from "../components/ProgressBar";

const DashboardPage = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-8">

        <div className="max-w-7xl mx-auto">

          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-2">
              Dashboard
            </h1>

            <p className="text-slate-400">
              Track your interview preparation progress.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            <StatCard title="Interviews Taken" value="12" />
            <StatCard title="Average Score" value="84%" />
            <StatCard title="Questions Solved" value="248" />
            <StatCard title="Weak Topics" value="4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">
                Recent Interviews
              </h2>

              <div className="space-y-4">

                <div className="bg-slate-800 p-4 rounded-lg">
                  <p>DE Shaw SDE Internship</p>
                  <p className="text-sm text-slate-400">
                    Score: 82%
                  </p>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <p>Goldman Sachs Analyst</p>
                  <p className="text-sm text-slate-400">
                    Score: 76%
                  </p>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <p>Meesho Backend Intern</p>
                  <p className="text-sm text-slate-400">
                    Score: 89%
                  </p>
                </div>

              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

              <h2 className="text-xl font-semibold mb-4">
                Weak Areas
              </h2>

              <div className="space-y-3">

                <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                  Dynamic Programming
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-lg">
                  System Design
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg">
                  Operating Systems
                </div>

              </div>
            </div>

          </div>

          <div className="mt-10 flex gap-4">

            <Link
              to="/upload"
              className="bg-blue-600 px-6 py-3 rounded-lg"
            >
              Upload Resume
            </Link>

            <Link
              to="/interview"
              className="bg-green-600 px-6 py-3 rounded-lg"
            >
              Start Interview
            </Link>

          </div>

        </div>
        <div className="grid lg:grid-cols-2 gap-6">

  <InterviewHistory />

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h2 className="text-xl font-semibold mb-6">
            Topic Readiness
            </h2>

            <div className="space-y-5">

            <ProgressBar
                topic="Arrays"
                value={90}
            />

            <ProgressBar
                topic="Trees"
                value={75}
            />

            <ProgressBar
                topic="Graphs"
                value={68}
            />

            <ProgressBar
                topic="Dynamic Programming"
                value={40}
            />

            </div>

        </div>

        </div>

      </div>
      
    </>
  );
};

export default DashboardPage;