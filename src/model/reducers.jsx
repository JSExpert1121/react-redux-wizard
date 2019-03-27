
import { combineReducers } from 'redux';


const initialState = {
    curId: 'L0',
    history: ['L0']
};

const navigate = (state = initialState, action) => {
    switch (action.type) {
        case 'GO_NEXT':
            return {
                curId: action.toId,
                history: [...state.history, action.toId]
            };
        case 'GO_PREV':
            const len = state.history.length;
            if (len <= 1) {
                return Object.assign({}, initialState);
            }
            return {
                curId: state.history[len - 2],
                history: state.history.slice(0, len-1)
            };
        case 'RESET':
            return Object.assign({}, initialState);
        default:
            return state;
    }
}

export default combineReducers({
    navigate,
});

