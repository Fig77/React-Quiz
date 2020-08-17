export type Question = {
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
  question: string,
  type: string
};

export type QuestionState = Question & {answers: string[]};

export enum Difficulty {
 EASY = 'easy',
 MEDIUM = 'medium',
 HARD = 'hard'
};

const aux = (arr: any[]) => [...arr].sort(() => Math.random() - 0.5);

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;
  const data = await (await fetch(endpoint)).json();
  return await data.results.map((question: Question) => ({
    ...question,
    answers: aux([...question.incorrect_answers, question.correct_answer]),
  }));
};
