
import React from 'react';
import PropTypes from 'prop-types';

const AnswerLink = ({text, action, onAnswer}) => {
    return (
        <li className='list-group-item' role="button" onClick={() => {
            if (action) {
                alert(text);
            }
            
            onAnswer();
        }}>
            {text}
        </li>
    )
}

AnswerLink.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    action: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default AnswerLink;
