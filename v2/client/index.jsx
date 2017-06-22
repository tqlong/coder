console.log('I am alive!');

import React from 'react';
import ReactDOM from 'react-dom';

import Login from './components/login';

ReactDOM.render(
    <Login login={()=>console.log('Login again')}/>,
    document.getElementById('app')
)