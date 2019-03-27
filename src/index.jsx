
require('./css/wizard.css')

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './model/reducers.jsx';
import QAFormContainer from './containers/QAFormContainer.jsx';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <QAFormContainer />
    </Provider>,
    document.getElementById('wizard')
);

