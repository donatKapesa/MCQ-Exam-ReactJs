import React from 'react';
import AnswerChoices from '../AnswersChoices/AnswerChoices';

const Question = (props) => // why doesn't it work if I put a curly brace here
    props.questionArray.map((question, index) => {
        return(
            <div>
                <p>{index + 1}. {question}</p>

                <AnswerChoices
                    correctAnswers={props.correctAnswers}
                    userAnswers={props.userAnswers}
                    key={index}
                    index={index} // try just index answersArray is the array of ALL answers
                    answerChoicesArray={props.answerChoicesArray}
                    updateUserAnswersHandler={props.updateUserAnswersHandler} /> 
            </div>
    );
})

export default Question;