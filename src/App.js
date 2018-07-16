import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title';
import Question from './Question/Question';

class App extends Component {
  state = {
    counter: 0,
    questionArray: [
      "What is 9+10",
      "How many goals did Ronaldo score against Spain in the World Cup 2018",
      "Who Stole Ronaldo's (CR7) greates ever goal?",
      "Which one of these players ruined the NBA",
      "Who is currently number 1 in the internet L rankings?"
  ],
    answersArray: [
      ["1", "19", "21", "90", "-1"],
      ["1", "3", "5", "0", "-1"],
      ["Pepe", "Messi", "Casillas", "Benzema", "Nani"],
      ["Allen Iverson", "Kevin Durant", "Steph Curry", "Lebron James", "Russel Westbrook"],
      ["Drake", "Pusha T", "Russel Westbrook", "Lil Xan", "Russ"]
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Title />
          <h2>Only the most genius of individuals will pass</h2>
          {/* <p>{this.state.answersArray[0]}</p> */}
          <hr/>
          <Question
            questionArray={this.state.questionArray}
            answersArray={this.state.answersArray} />
          <button
          onClick={() => alert("We don't support this yet")}
          type="submit">SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default App;
