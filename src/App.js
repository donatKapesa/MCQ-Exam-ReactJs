import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title';
import Question from './Question/Question';
import SubmitButton from './SubmitButton/SubmitButton';

class App extends Component {
  state = {
    questionArray: [
      "What is 9+10",
      "How many goals did Ronaldo score against Spain in the World Cup 2018",
      "Who Stole Ronaldo's (CR7) greates ever goal?",
      "Which one of these players ruined the NBA",
      "Who is currently number 1 in the internet L rankings?"
  ],
    answerChoicesArray: [
      ["1", "19", "21", "90", "-1"],
      ["1", "3", "5", "0", "-1"],
      ["Pepe", "Messi", "Casillas", "Benzema", "Nani"],
      ["Allen Iverson", "Kevin Durant", "Steph Curry", "Lebron James", "Russel Westbrook"],
      ["Drake", "Pusha T", "Russel Westbrook", "Lil Xan", "Russ"]
    ],

    correctAnswers: ["21", "3", "Nani", "Kevin Durant", "Russ"],

    userAnswers: ["", "", "", "", ""],

    score: 0

  }

  updateUserAnswersHandler = (oldArray, index, value) => {
    const newArray = oldArray;
    newArray[index] = value;
    this.setState({
      userAnswers: newArray
    });
  }

displayResultsHandler = () => {
    this.setState(
        // Updater
        prevState => {
            var counter = 0;
            for(let i = 0; i < prevState.correctAnswers.length; i++) {
              if(prevState.correctAnswers[i] === prevState.userAnswers[i]) {
                counter = counter+1;
              }
            }
            console.log("counter: " + counter);
            // console.log("current score is (before updated): " + this.state.score);
            return {score: counter};
            
        },
        // Completion callback BUT componenetDidUpdate is RECOMMENDED. See answer on my stack overflow answer
        () => {
            // console.log("counter: " + counter);
            console.log("User Answers are: " + this.state.userAnswers);
            console.log("score: " + this.state.score); // For some reason, this is always zero

            if(this.state.score < 5) {
              alert("You're dumb. Please leave. Score: " + this.state.score);
            } else {
              alert("Welcome to NASA. Score: " + this.state.score);
            }
        }
    );
};

  // componentDidUpdate() {
  //   // can throw the if statement + alert here
  //   console.log("[inside ComponentDidUpdate]. Score is: " + this.state.score)
  // }

  // This has to be inside completition call back or else it'll be called before setState above is completed
  // Not that setState is asynchronous

  // if(counter < 5) {
  //   alert("You're dumb asf. Please leave. Score: " + this.state.score);
  // } else {
  //   alert("Welcome to NASA. score: " + this.state.score);
  // }

  render() {
    // console.log(userAnswers); How do I pass this as a prop? this.userAnswers? nope. Therefore it has to be a state

    // console.log("User Answers are: " + this.state.userAnswers); // this re-renders at every single click smh
    return (
      // How can I get rid of the key warning on console
        <div className="App">
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
        </div>
    );
  }
}

export default App;
