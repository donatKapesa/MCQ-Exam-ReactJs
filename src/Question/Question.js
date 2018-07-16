import React from 'react';
import AnswerChoices from '../AnswersChoices/AnswerChoices';

const Question = (props) => // why doesn't it work if I put a curly brace here
    props.questionArray.map((question, index) => {
        return(
            <div>
                <p>{index + 1}. {question}</p>

                <AnswerChoices
                    index={index} // try just index answersArray is the array of ALL answers
                    answersArray={props.answersArray} /> 
            </div>
    );
})

export default Question;