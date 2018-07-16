import React from 'react';
import SpecificAnswerChoice from './SpecificAnswerChoice/SpecificAnswerChoice'

const AnswerChoices = (props) => {

        return (
            // 5 answers array for each question
            <div>
                <ul>
                <SpecificAnswerChoice 
                    answers={props.answersArray[props.index]} />
                </ul>
            </div>
            
        )
    }

export default AnswerChoices;

        // <div>
            //     <ul>
            //         <li><span>{props.answersArray[props.index][0]}</span></li>
            //         <li><span>{props.answersArray[props.index][1]}</span></li>
            //         <li><span>{props.answersArray[props.index][2]}</span></li>
            //         <li><span>{props.answersArray[props.index][3]}</span></li>
            //         <li><span>{props.answersArray[props.index][4]}</span></li>
            //     </ul>
            // </div>

        // return(
        //     <p>{props.answersArray}</p>
        // )

        // <div>
        //     <ul>
        //         {
        //             props.answersArray[props.index].map(specificAnswerChoice => {
        //                 return(<p>{specificAnswerChoice}</p>)
        //             })
        //         }
        //     </ul>
        // </div>

        // for(let i=0; i<props.answersArray[props.index].length; i++) {
        //     return <p>{props.answersArray[props.index][i]}</p>
        // }