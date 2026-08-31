import { useEffect, useState } from "react";
import {
  getInterviewHistory,
} from "../services/interviewService";
import { getUserId } from "../services/interviewStore";

interface InterviewHistoryItem {
  _id: string;
  company: string;
  overallScore: number;
  createdAt: string;
}

const InterviewHistory = () => {

  const [interviews, setInterviews] =
    useState<InterviewHistoryItem[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadHistory = async () => {

      try {

        const userId = getUserId();

        const response =
          await getInterviewHistory(userId);

        setInterviews(
          response.data || []
        );

      } catch (error) {

        console.error(
          "Failed to load interview history:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    loadHistory();

  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-4 text-white">
        Interview History
      </h2>

      {loading ? (

        <p className="text-slate-400">
          Loading interview history...
        </p>

      ) : interviews.length === 0 ? (

        <p className="text-slate-400">
          No interviews yet.
        </p>

      ) : (

        <div className="space-y-4">

          {interviews.map((interview) => (

            <div
              key={interview._id}
              className="flex justify-between items-center bg-slate-800 p-4 rounded-lg"
            >

              <div>

                <p className="text-white font-medium">
                  {interview.company}
                </p>

                <p className="text-slate-400 text-sm">
                  {new Date(
                    interview.createdAt
                  ).toLocaleDateString()}
                </p>

              </div>

              <span className="text-blue-400 font-semibold">
                {interview.overallScore}/10
              </span>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default InterviewHistory;