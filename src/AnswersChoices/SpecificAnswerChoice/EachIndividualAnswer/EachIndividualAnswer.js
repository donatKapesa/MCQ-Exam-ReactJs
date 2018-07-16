import React, { Component } from 'react';

class SpecificAnswerChoice extends Component {
    state = {
        isClicked: false,
        class: ""
    }

    // clickHandler = (style) => {
    //     if(style.backgroundColor === 'white') {
    //         style.backgroundColor = 'black';
    //         style.color = 'white';
    //     }
    // }

    onClickHandler = () => {
        console.log(this.state.isClicked);
        console.log("djhfdf");
        if(this.state.isClicked) {
            var tempClass=""
            this.setState({
                isClicked: false,
                class: tempClass
            });
        } else {
            tempClass="clicked"
            this.setState({
                isClicked: true,
                class:tempClass
            })
        }
    }

    render() {
        
        return (<li 
                    className={this.state.class}
                    onClick={this.onClickHandler}>
                    <span>
                        {this.props.individualAnswer}
                    </span>
                </li>);
    }
}

export default SpecificAnswerChoice;