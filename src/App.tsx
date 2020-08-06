import React, {useState} from 'react'; //gonna use hooks n shit
import QuestionCard from './components/QuestionCard';
import {fetchQuizQuestions} from './API';
import {Difficulty} from './API'

const App = () =>  {
  const [loading, setLoadding] = useState(false);
  const [question, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setuserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setgameOver] = useState(true);
  
  const TOTAL_QUESTIONS = 10;
  
  const startTrivia = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () =>  {}
  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  return (
    <div className="App">
      <h1>React Quizz</h1>
      <button className='start-button' onClick={startTrivia}>Start</button>
      <p className="score">Score: 0</p>
      <p className="">Loading...</p>
{/*      <QuestionCard 
        questnumb = {number+1}
        totalQuestions = {TOTAL_QUESTIONS}
        question={question[number].question}
        answer={question[number].answers}
        userAnswer = {userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer}
        />*/}
      <button className='next'>next question</button>
    </div>
  );
}

export default App;
// bg from Bob Canning