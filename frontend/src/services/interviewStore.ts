export interface Feedback {

  score: number;

  strengths: string[];

  weaknesses: string[];

  idealAnswer: string;
}

export interface InterviewSession {

  questions: string[];

  answers: string[];

  feedback: (Feedback | null)[];

  currentQuestion: number;

  overallScore: number;
}

let session: InterviewSession = {

  questions: [],

  answers: [],

  feedback: [],

  currentQuestion: 0,

  overallScore: 0,
};

export const createSession = (
  questions: string[]
) => {

  session = {

    questions,

    answers: new Array(
      questions.length
    ).fill(""),

    feedback: new Array(
      questions.length
    ).fill(null),

    currentQuestion: 0,

    overallScore: 0,
  };
};

export const getSession = () => session;

export const updateAnswer = (
  index: number,
  answer: string
) => {

  session.answers[index] = answer;
};

export const updateFeedback = (
  index: number,
  feedback: Feedback
) => {

  session.feedback[index] = feedback;
};

export const setOverallScore = (
  score: number
) => {

  session.overallScore = score;
};
export interface DashboardData {

  interviewsTaken: number;

  averageScore: number;

  questionsAnswered: number;

  latestScore: number;

}

export const updateDashboard = () => {

  const oldData = JSON.parse(
    localStorage.getItem("dashboard") ||
    "null"
  );

  const currentScore =
    session.overallScore;

  if (!oldData) {

    const data: DashboardData = {

      interviewsTaken: 1,

      averageScore: currentScore,

      questionsAnswered:
        session.questions.length,

      latestScore: currentScore,

    };

    localStorage.setItem(
      "dashboard",
      JSON.stringify(data)
    );

    return;

  }

  const interviews =
    oldData.interviewsTaken + 1;

  const average =

    (
      oldData.averageScore *
      oldData.interviewsTaken +

      currentScore

    ) / interviews;

  const data: DashboardData = {

    interviewsTaken:
      interviews,

    averageScore:
      Number(
        average.toFixed(1)
      ),

    questionsAnswered:
      oldData.questionsAnswered +
      session.questions.length,

    latestScore:
      currentScore,

  };

  localStorage.setItem(
    "dashboard",
    JSON.stringify(data)
  );

};
export interface InterviewHistoryItem {

  company: string;

  score: number;

  date: string;

}

export const saveInterviewHistory = (
  company: string
) => {

  const history: InterviewHistoryItem[] =
    JSON.parse(
      localStorage.getItem("history") || "[]"
    );

  history.unshift({

    company,

    score: session.overallScore,

    date: new Date().toLocaleDateString(),

  });

  localStorage.setItem(
    "history",
    JSON.stringify(history)
  );

};