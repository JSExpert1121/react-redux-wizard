

import React from 'react'
import PropTypes from 'prop-types';
import QuestionFormContainer from '../containers/QuestionFormContainer.jsx';
import StateFormContainer from '../containers/StateFormContainer.jsx';


const QAForm = ({question}) => {
    if (question) {
        return (
            <QuestionFormContainer />
        )
    } else {
        return (
            <StateFormContainer />
        )
    }
}

QAForm.propTypes = {
    question: PropTypes.bool.isRequired
};

export default QAForm;
