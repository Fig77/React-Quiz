import React from 'react'
import {AnswerObject} from '../App';
import {Wrapper, ButtonWrapper} from '../QuestionCard.styles';

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
  <Wrapper>
    <p>Question Card</p>
    <p dangerouslySetInnerHTML={{__html: question}}></p>

    <div>
      {answer.map((answer) => (
        <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer} >
          <button  disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}}></span>
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
); // :o


export default QuestionCard;