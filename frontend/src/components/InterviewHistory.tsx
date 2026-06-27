const InterviewHistory = () => {

  const interviews = JSON.parse(
    localStorage.getItem("history") || "[]"
  );

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-4 text-white">
        Interview History
      </h2>

      {

        interviews.length === 0 ? (

          <p className="text-slate-400">

            No interviews yet.

          </p>

        ) : (

          <div className="space-y-4">

            {

              interviews.map(
                (
                  interview: any,
                  index: number
                ) => (

                  <div

                    key={index}

                    className="flex justify-between items-center bg-slate-800 p-4 rounded-lg"

                  >

                    <div>

                      <p className="text-white font-medium">

                        {interview.company}

                      </p>

                      <p className="text-slate-400 text-sm">

                        {interview.date}

                      </p>

                    </div>

                    <span className="text-blue-400 font-semibold">

                      {interview.score}/10

                    </span>

                  </div>

                )

              )

            }

          </div>

        )

      }

    </div>

  );

};

export default InterviewHistory;