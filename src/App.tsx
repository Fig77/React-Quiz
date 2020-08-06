import React from 'react';
import QuestionCard from './components/QuestionCard';

const App = () =>  {
  const startTrivia = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () =>  {}

  return (
    <div className="App">
      <h1>React Quizz</h1>
      <button className='start-button' onClick={startTrivia}>Start</button>
      <p className="score">Score: 0</p>
      <p className="">Loading...</p>
      <QuestionCard />
      <button className='next'>next question</button>
    </div>
  );
}

export default App;
// bg from Bob Canning