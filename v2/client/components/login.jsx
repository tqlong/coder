import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {FieldGroup} from './helper'

export default class Login extends React.PureComponent {

    handleUsernameChange(event) {
        console.log(event.target.value);
    }

    handlePasswordChange(event) {
        console.log(event.target.value);
    }

    handleLoginSubmit() {
        console.log('Login submitted');
    }

    render() {
        return <div>
            <Form>
                <FieldGroup id="username" type="text" label="Username" placeholder="Username" onChange={this.handleUsernameChange} />{' '}
                <FieldGroup id="password" type="password" label="Password" placeholder="Password" onChange={this.handlePasswordChange} />{' '}
                <Button bsStyle="primary" onClick={this.handleLoginSubmit}>Login</Button>
            </Form>
        </div>;
    }
}