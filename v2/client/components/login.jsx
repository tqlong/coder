import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {FieldGroup} from './helper'

export default class Login extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleUsernameChange(event) {
    }

    handlePasswordChange(event) {
    }

    handleLoginSubmit(event) {
        if (this.props.login) this.props.login();
        event.preventDefault();
    }

    render() {
        return <div>
            <Form onSubmit={this.handleLoginSubmit}>
                <FieldGroup id="username" type="text" label="Username" placeholder="Username" onChange={this.handleUsernameChange} />{' '}
                <FieldGroup id="password" type="password" label="Password" placeholder="Password" onChange={this.handlePasswordChange} />{' '}
                <Button bsStyle="primary" type="submit">Login</Button>
            </Form>
        </div>;
    }
}