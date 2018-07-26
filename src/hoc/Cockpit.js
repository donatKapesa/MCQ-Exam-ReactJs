import React from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import Title from '../Title/Title';
import Question from '../Question/Question';

const cockpit = (props) => {
    return(
        <div className="container">
            
              <Title/>
              <h2>Only the most genius of individuals will pass</h2>
              <hr/>
              <Question
                correctAnswers={this.state.correctAnswers}
                updateUserAnswersHandler={this.updateUserAnswersHandler}
                userAnswers={this.state.userAnswers}
                questionArray={this.state.questionArray}
                answerChoicesArray={this.state.answerChoicesArray} />
              <SubmitButton
                clicked = {this.displayResultsHandler} />
          </div>
    );
}

export default cockpit;