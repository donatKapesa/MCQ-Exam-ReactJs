import React from 'react';
import SpecificAnswerChoice from './SpecificAnswerChoice/SpecificAnswerChoice'

/* 
A solution to check for correct answers:

Have the answers array in this file. Pass each correct answer to a specificAnswerChoice file accordring to its index
In each SpecificAnswerChoice file, check if the ans for that question is correct and update Score state in App.js using a handler
*/

// AnswerChoices: these are the 5 answers for the 5 questions
const AnswerChoices = (props) => {
    // console.log(props.answerChoicesArray[props.index]);
        return (
            // 5 answers array for each question
            <div>
                <ul>
                <SpecificAnswerChoice
                    correctAnswer={props.correctAnswers[props.index]}
                    key={props.index + props.answerChoicesArray[props.index]}
                    index={props.index} // 0, 1, 2, 3, 4
                    answers={props.answerChoicesArray[props.index]}
                    userAnswers={props.userAnswers}
                    updateUserAnswersHandler={props.updateUserAnswersHandler}/>
                </ul>
            </div>
        )
    }

export default AnswerChoices;