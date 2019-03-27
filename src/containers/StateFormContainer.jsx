
import { connect } from 'react-redux';
import StateForm from '../components/StateForm.jsx';
import DataService from '../model/dataservice';
import { navigationGoPrev, navigationReset } from '../model/actions.jsx';

const stateToProps = (state) => {
    const qa = DataService.getQA(state.navigate.curId);
    return {
        text: qa.text,
        action: qa.action
    };
};

const dispatchToProps = (dispatch, ownProps) => ({
    reset: () => dispatch(navigationReset()),
    goBack: () => dispatch(navigationGoPrev())
});

export default connect(stateToProps, dispatchToProps)(StateForm);
