import React from 'react'

type Props = {
  question: string,
  answer: string[],
  callback: any,
  userAnswer: any,
  questnumb: number,
  totalQuestions: number
};

const QuestionCard: React.FC<Props> = ({question, answer, callback, userAnswer, questnumb, totalQuestions}) =>
(  
  <div>
    <p>Question Card</p>
    <p dangerouslySetInnerHTML={{__html: question}}></p>
    <div>
      {answer.map(answer => (
        <div>
          <button disabled={userAnswer} onClick={callback}></button>
          <span dangerouslySetInnerHTML={{__html: answer}}></span>
        </div>
      ))}
    </div>
  </div>
); // :o


export default QuestionCard;