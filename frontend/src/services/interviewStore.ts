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