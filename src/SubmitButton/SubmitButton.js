import React from 'react';
import Aux from '../hoc/Aux';

const submitButton = (props) => (
    <Aux>
        <button
                onClick={props.clicked}
                type="submit">SUBMIT
        </button>
    </Aux>
);

export default submitButton;