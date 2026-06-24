let generatedQuestions: string[] = [];

export const setQuestions = (
  questions: string[]
) => {
  generatedQuestions = questions;
};

export const getQuestions = () => {
  return generatedQuestions;
};