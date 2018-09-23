import React, { Component } from 'react';
import './Test.css';
import Title from '../Title/Title';
import Question from '../Question/Question';
import SubmitButton from '../SubmitButton/SubmitButton';

const test = (props) => {
    return (
            // How can I get rid of the key warning on console
            <div className="App">
                <div className="container">
                    
                    <Title/>
                    <h2>Only the most genius of individuals will pass</h2>
                    <hr/>
                    <Question
                        correctAnswers={props.correctAnswers}
                        updateUserAnswersHandler={props.updateUserAnswersHandler}
                        userAnswers={props.userAnswers}
                        questionArray={props.questionArray}
                        answerChoicesArray={props.answerChoicesArray} />
                    <SubmitButton
                        clicked = {props.displayResultsHandler} />
                </div>
            </div>
    );
};

export default test;
