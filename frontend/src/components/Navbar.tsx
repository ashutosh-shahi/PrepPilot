import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          PrepPilot
        </Link>

        <div className="flex gap-6">
          <Link to="/dashboard" className="text-slate-300 hover:text-white">
            Dashboard
          </Link>

          <Link to="/upload" className="text-slate-300 hover:text-white">
            Upload
          </Link>

          <Link to="/interview" className="text-slate-300 hover:text-white">
            Interview
          </Link>

          <Link to="/feedback" className="text-slate-300 hover:text-white">
            Feedback
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;