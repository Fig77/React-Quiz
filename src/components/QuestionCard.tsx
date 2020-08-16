import React from 'react'
import {AnswerObject} from '../App';

type Props = {
  question: string,
  answer: string[],
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
  userAnswer: AnswerObject | undefined,
  questnumb: number,
  totalQuestions: number
};

const QuestionCard: React.FC<Props> = ({question, answer, callback, userAnswer, questnumb, totalQuestions}) =>
(  
  <div>
    <p>Question Card</p>
    <p dangerouslySetInnerHTML={{__html: question}}></p>
    <div>
      {answer.map((answer) => (
        <div key={answer}>
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}}></span>
          </button>
        </div>
      ))}
    </div>
  </div>
); // :o


export default QuestionCard;