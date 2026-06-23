import Navbar from "../components/Navbar";

const UploadResumePage = () => {
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
            placeholder="Paste Job Description Here..."
            className="w-full h-64 bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none"
          />

          <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg">
            Generate Interview
          </button>

        </div>

      </div>
    </>
  );
};

export default UploadResumePage;