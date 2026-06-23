import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">

      <h1 className="text-7xl font-bold mb-6">
        PrepPilot
      </h1>

      <p className="text-xl text-slate-400 mb-8 max-w-2xl text-center">
        Personalized AI Mock Interviews generated from your
        Resume and Target Job Description.
      </p>

      <Link
        to="/dashboard"
        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
      >
        Start Preparing
      </Link>

    </div>
  );
};

export default LandingPage;