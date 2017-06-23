import {expect} from 'chai';
 
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';

import Login from '../client/components/login';
import {FieldGroup} from '../client/components/helper';

describe('Component Login', () => {

    var renderer, login;
 
    beforeEach( () => {
        renderer = createRenderer();
    
        renderer.render(
            <Login />
        );
    
        login = renderer.getRenderOutput();
    });

    it('renders a form-login', () => {
        expect(login.props.className).to.equal('form-login');
    });

    it('renders username, password fields and a submit button', () => {
        var fields = login.props.children;
        expect(fields.length).to.equal(3);
        expect(fields[0].props.id).to.equal("username");
        expect(fields[0].props.type).to.equal("text");

        expect(fields[1].props.id).to.equal("password");
        expect(fields[1].props.type).to.equal("password");

        expect(fields[2].props.type).to.equal("submit");
    });
})