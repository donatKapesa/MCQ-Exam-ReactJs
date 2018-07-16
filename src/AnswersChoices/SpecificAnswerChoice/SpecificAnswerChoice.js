import React, { Component } from 'react';
import EachIndividualAnswer from './EachIndividualAnswer/EachIndividualAnswer'

class SpecificAnswerChoice extends Component {
    // If I click once, set all to white and specific to black
    state = {
        class: ""
    }

    // clickHandler = () => {
    //     console.log("dfdfgf");
    //     // var tempClasses = [...this.state.classe];
    //     // for (var i = this.state.classes.length; i > 0; i--) {
    //     //     tempClasses.pop("clicked");
    //     //    }
    //     var tempClass = "clicked";
    //     this.setState({
    //         class: tempClass
    //     });
    //     console.log(this.state.class);
    //     }


    render() {

        // const style = {
        //     backgroundColor: 'white'
        // };


        return(  
            this.props.answers.map(individualAnswer => {
                return (
                    <EachIndividualAnswer
                        className={this.state.class}
                        individualAnswer={individualAnswer}
                        // onClick={this.clickHandler}
                        />
                );
            })          
        )
    }
}

export default SpecificAnswerChoice;