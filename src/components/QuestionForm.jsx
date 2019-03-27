
import React from 'react'
import PropTypes from 'prop-types'
import AnswerLink from './AnswerLink.jsx'

const QuestionForm = ({isLvl0, question, answers, cancelText, reset, goNext, goBack}) => {
    let btnStyle = { display: 'inline' };
    if ( isLvl0 ) {
        btnStyle = { display: 'none' };
    }

    return (
        <div className='well well-lg well-center'>
            <div className='form-group'>
                <p className='label label-default label-question'>{question}</p>
            </div>
            <ul className='list-group'>
                {(answers || []).map((answer, index) => (
                    <AnswerLink key={answer.id} {...answer} onAnswer={()=>goNext(answer.id)}/>
                ))}
            </ul>
            <div className='form-group clearfix'>
                <button className='btn btn-primary pull-left' style={btnStyle} onClick={() => goBack()}>
                    Back
                </button>

                <button className='btn btn-primary pull-right' style={btnStyle} onClick={()=> window.location = 'https://www.google.com/'}>
                    {cancelText}
                </button>
            </div>
        </div>
    );
}

QuestionForm.propTypes = {
    isLvl0: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            action: PropTypes.string.isRequired
        })
    ),
    cancelText: PropTypes.string,
    reset: PropTypes.func.isRequired,
    goNext: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired
}

export default QuestionForm;
