import React, {useState} from 'react'; //gonna use hooks n shit
import QuestionCard from './components/QuestionCard';
import {fetchQuizQuestions, QuestionState, Difficulty} from './API';
import {GlobalStyle, Wrapper} from './App.styles';


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () =>  {
 const [loading, setLoading] = useState(false);
 const [question, setQuestions] = useState<QuestionState[]>([]);
 const [number, setNumber] = useState(0);
 const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
 const [score, setScore] = useState(0);
 const [gameOver, setgameOver] = useState(true);
  
 const startTrivia = async () => {
   setLoading(true);
   setgameOver(false);
    
   const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  
   setQuestions(newQuestions);
   setScore(0);
   setUserAnswer([]);
   setNumber(0);
   setLoading(false);
 };

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  const answer = e.currentTarget.value;
  const correct = question[number].correct_answer === answer;
  if (correct) {setScore((prev) => prev+1)}
  const answerObject = {
    question: question[number].question,
    answer,
    correct,
    correctAnswer: question[number].correct_answer,
  };
  setUserAnswer((prev) => [...prev, answerObject]);
};
const nextQuestion = () =>  {
  const aux = number+1;
  if (aux === TOTAL_QUESTIONS) {
    setgameOver(true);
  } else {
    setNumber(aux);
  }
}
  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>React Quizz</h1>
      {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (<button className='start' onClick={startTrivia}>Start</button>) : null}
      { !gameOver ? (<p className="score">Score: {score} </p>) : null}
      {loading ? (<p className="">Loading...</p>) : null}
      {!loading && !gameOver ? 
       (<QuestionCard 
        questnumb = {number+1}
        totalQuestions = {TOTAL_QUESTIONS}
        question={question[number].question}
        answer={question[number].answers}
        userAnswer = {userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer}
        />) : null 
       }
      {(!gameOver && userAnswer.length === number+1 && number !== TOTAL_QUESTIONS-1) ? (<button className='next' onClick={nextQuestion}>next question</button>) : null}
    </Wrapper>
    </>
  );
}

export default App;
// bg from Bob Canning