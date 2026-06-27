import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import { Link } from "react-router-dom";
import InterviewHistory from "../components/InterviewHistory";


const DashboardPage = () => {
  const dashboard = JSON.parse(
  localStorage.getItem("dashboard") ||
  `{
    "interviewsTaken":0,
    "averageScore":0,
    "questionsAnswered":0,
    "latestScore":0
  }`
);
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
            <StatCard
              title="Interviews Taken"
              value={dashboard.interviewsTaken}
            />
            <StatCard
              title="Average Score"
              value={`${dashboard.averageScore}/10`}
            />
            <StatCard
              title="Questions Solved"
              value={dashboard.questionsAnswered}
            />
            <StatCard
              title="Latest Score"
              value={`${dashboard.latestScore}/10`}
            />
          </div>

          <div className="mt-10">
            <InterviewHistory />
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
        
      </div>
      
    </>
  );
};

export default DashboardPage;