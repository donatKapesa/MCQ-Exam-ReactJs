import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Test from './Test/Test';
import Score from './Score/Score';

class App extends Component {
  state = {
    questionArray: [
      "What is 9+10",
      "How many goals did Ronaldo score against Spain in the World Cup 2018",
      "Who Stole Ronaldo's (CR7) greatest ever goal?",
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
  // This has to be inside completition call back or else it'll be called before setState above is completed
  // Note that setState is asynchronous

  // if(counter < 5) {
  //   alert("You're dumb asf. Please leave. Score: " + this.state.score);
  // } else {
  //   alert("Welcome to NASA. score: " + this.state.score);
  // }


// later, try to pass score using query
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
            
        }
    ), window.location.replace(window.location.href + "score");
};

render() {
  return(
    <div className="App">
      <Switch>
        <Route path="/score" render={(props) => <Score 
                                                  {...props} 
                                                  score={this.state.score} /> } />
        <Route path="/" exact render={(props) => <Test 
                                                    {...props} 
                                                    score={this.state.score}
                                                    correctAnswers={this.state.correctAnswers}
                                                    updateUserAnswersHandler={this.updateUserAnswersHandler}
                                                    userAnswers={this.state.userAnswers}
                                                    questionArray={this.state.questionArray}
                                                    answerChoicesArray={this.state.answerChoicesArray}
                                                    displayResultsHandler={this.displayResultsHandler} /> } />
      </Switch>
    </div>
  );
}
}

export default App;
