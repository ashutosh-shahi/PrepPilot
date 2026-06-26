import Navbar from "../components/Navbar";
import { getSession } from "../services/interviewStore";

const FeedbackPage = () => {

  const session = getSession();

  return (

    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-8">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold mb-8">
            Interview Complete
          </h1>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">

            <h2 className="text-4xl text-green-400">

              Overall Score

            </h2>

            <p className="text-6xl font-bold mt-4">

              {session.overallScore}/10

            </p>

          </div>

          {

            session.questions.map(
              (question, index) => (

                <div
                  key={index}
                  className="bg-slate-900 rounded-xl p-6 mb-6"
                >

                  <h3 className="text-xl font-bold">

                    Question {index + 1}

                  </h3>

                  <p className="mt-3">

                    {question}

                  </p>

                  <p className="mt-4 text-green-400">

                    Score:

                    {" "}

                    {
                      session.feedback[index]?.score
                    }/10

                  </p>

                </div>

              )
            )

          }

        </div>

      </div>

    </>

  );

};

export default FeedbackPage;