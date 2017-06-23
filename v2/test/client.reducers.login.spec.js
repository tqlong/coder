import {expect} from 'chai';
import {Map, fromJS} from 'immutable';

import {login, setUsername, setPassword, loginSubmit} from '../client/reducers/login';

describe('client.reducer.login', () => {
    it('should handle LOGIN_SET_USERNAME', () => {
        const state = Map();
        const action = setUsername('paven');
        const newState = login(state, action);
        expect(newState).to.equal(fromJS({
            username: 'paven'
        }));
    })

    it('should handle LOGIN_SET_PASSWORD', () => {
        const state = fromJS({username: 'paven'});
        const action = setPassword('password');
        const newState = login(state, action);
        expect(newState).to.equal(fromJS({
            username: 'paven', password: 'password'
        }));
    })

    it('should handle LOGIN_SUBMIT', () => {
        const state = fromJS({username: 'paven', password: 'password'});
        const action = loginSubmit();
        const newState = login(state, action);
        expect(newState).to.equal(fromJS({
            username: 'paven', password: 'password'
        }));
    })
})