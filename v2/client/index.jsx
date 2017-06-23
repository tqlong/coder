console.log('I am alive!');

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);

import Login from './containers/login';

ReactDOM.render(
    <Provider store={store} >
        <Login />
    </Provider>,
    document.getElementById('app')
)