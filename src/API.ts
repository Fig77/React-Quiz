export type Question = {
  category: string,
  correct_answer: answer,
  difficulty: string,
  incorrect_answer: string[],
  question: string,
  type: string
};


export enum Difficulty {
 EASY = 'easy',
 MEDIUM = 'medium',
 HARD = 'hard'
};

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
};