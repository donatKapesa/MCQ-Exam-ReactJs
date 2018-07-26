import React, { Component } from 'react';
import EachIndividualAnswer from './EachIndividualAnswer/EachIndividualAnswer'

// these are the 5 answers for 1 question
class SpecificAnswerChoice extends Component {
    // If I click once, set all to white and specific to black
    state = {
        selected: {}
    }

    clickHandler = (individualAnswer) => {
        // console.log("correct answer is: " + this.props.correctAnswer);
        // console.log(this.props.index + " " + individualAnswer);


        // const ans = event.target.dataset.ans;
        // put user selected answer in correct array position
        // this.props.userAnswers[this.props.index] = individualAnswer;

        // THERE MUST BE A BETTER WAY TO DO THIS? because on app.js I'm using setState using prevState which is oldArray = this.props.userAnswers
        this.props.updateUserAnswersHandler(this.props.userAnswers, this.props.index, individualAnswer); // can prolly pass all 3 as 1 props?

        this.setState({
            selected: {
                [individualAnswer]: true // "Drake": true" // VERY IMPORTANT
            }
        });
    }

    render() {

        return(  
            this.props.answers.map(individualAnswer => {
                return (
                    <EachIndividualAnswer
                        key={individualAnswer}
                        // selected will always only have 1 object. e.g. "Drake: true". When we click on another answer, e.g. Pusha-T
                        // then selected becomes "Pusha-T: true". Now the stuff in className={} will get checked for each answer choice. Drake will return flase, and
                        // all other answer choices except Pusha-T. Hence it will be colored
                        className={this.state.selected[individualAnswer] ? 'clicked' : ''}
                        individualAnswer={individualAnswer}
                        // data-ans={individualAnswer}
                        clicked={() => this.clickHandler(individualAnswer)}/>
                );
            })          
        )
    }
}

export default SpecificAnswerChoice;