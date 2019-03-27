

import { connect } from 'react-redux';
import QuestionForm from '../components/QuestionForm.jsx';
import DataService from '../model/dataservice';
import { navigationGoNext, navigationGoPrev, navigationReset } from '../model/actions.jsx';

const stateToProps = (state, ownProps) => {
    const qa = DataService.getQA(state.navigate.curId);
    let cancelText = 'Cancel';
    if (qa.isReplaced && qa.cancelBtnText){
        cancelText = qa.cancelBtnText;
    }
    return {
        isLvl0: DataService.isFirstQA(qa),
        question: qa.text,
        answers: qa.answers,
        cancelText: cancelText
    };
};

const dispatchToProps = (dispatch, ownProps) => ({
    goNext: (id) => dispatch(navigationGoNext(id)),
    goBack: () => dispatch(navigationGoPrev()),
    reset: () => dispatch(navigationReset())
});

export default connect(stateToProps, dispatchToProps)(QuestionForm);