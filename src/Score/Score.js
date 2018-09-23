import React, { Component } from 'react';
import './Score.css';

class Score extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        let caption = <h1>You should never see this ! What did you do...</h1>;
        if(this.props.score < 5) {
            caption = <h1>That's not it...Try again</h1>
        } else {
            caption = <h1>Einstein is that you?</h1>
        }
        return (
            <div id="score-page">
                <div id="caption">
                    {caption}
                </div>
                <p>{this.props.score}</p>
            </div>
        )
    }
}

export default Score;