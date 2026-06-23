const interviews = [
  {
    company: "DE Shaw",
    score: 82,
  },
  {
    company: "Goldman Sachs",
    score: 76,
  },
  {
    company: "Meesho",
    score: 89,
  },
];

const InterviewHistory = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4 text-white">
        Interview History
      </h2>

      <div className="space-y-4">
        {interviews.map((interview) => (
          <div
            key={interview.company}
            className="flex justify-between bg-slate-800 p-4 rounded-lg"
          >
            <span className="text-white font-medium">
                {interview.company}
            </span>

            <span className="text-blue-400 font-semibold">
                {interview.score}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewHistory;