import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';


// this is 1 answer for 1 question
class EachIndividualAnswer extends Component {
    state = {
    }

    // changing classname
    // if(this.props.selected[] === this.props.individualAnswer) {

    // }

    render() {
        
        return (
            <Aux>
                <li 
                    className={this.props.className}
                    onClick={this.props.clicked}>
                    <span>
                        {this.props.individualAnswer}
                    </span>
                </li>
            </Aux>
        );}
}

export default EachIndividualAnswer;


    // clickHandler = (style) => {
    //     if(style.backgroundColor === 'white') {
    //         style.backgroundColor = 'black';
    //         style.color = 'white';
    //     }
    // }

    // onClickHandler = () => {
    //     console.log(this.state.isClicked);
    //     console.log("djhfdf");
    //     if(this.state.isClicked) {
    //         var tempClass=""
    //         this.setState({
    //             isClicked: false,
    //             class: tempClass
    //         });
    //     } else {
    //         tempClass="clicked"
    //         this.setState({
    //             isClicked: true,
    //             class:tempClass
    //         })
    //     }
    //     this.props.resetClicks();
    // }

    

    // testingOnClick = () => {
    //     console.log("If this works then I have 2+ functions on OnClick");
    // }

    // if props.resetClicks is true, which it always is, className='', isClicked=false for EVERY
    // EachIndividualAnswer. Then I do my logc that I already had


    