import {Map} from 'immutable';

function loginSetUsername(state, username) {
    return state.set('username', username);
}

function loginSetPassword(state, password) {
    return state.set('password', password);
}

function loginDoSubmit(state) {
    return state;
}

function nextLoginState(state, action) {
    switch (action.type) {
    case 'LOGIN_SET_USERNAME':
        return loginSetUsername(state, action.username);
    case 'LOGIN_SET_PASSWORD':
        return loginSetPassword(state, action.password);
    case 'LOGIN_SUBMIT':
        return loginDoSubmit(state);
    }
    return state;
}

export function login(state = Map(), action) {
    const newState = nextLoginState(state, action);
    //console.log(state.toJS(), action, newState.toJS());
    return newState;
}

// actions
export function setUsername(username) {
    return { type: 'LOGIN_SET_USERNAME', username };
}

export function setPassword(password) {
    return { type: 'LOGIN_SET_PASSWORD', password };
}

export function loginSubmit() {
    return { type: 'LOGIN_SUBMIT' };
}