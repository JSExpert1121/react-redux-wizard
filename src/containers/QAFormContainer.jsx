
import { connect } from 'react-redux';
import QAForm from '../components/QAForm.jsx';
import DataService from '../model/dataservice';


const mapStateToProps = (state) => ({
    question: ! DataService.isLastId(state.navigate.curId)
});

export default connect(mapStateToProps)(QAForm);

