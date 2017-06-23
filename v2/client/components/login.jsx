import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {FieldGroup} from './helper';

export default class Login extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleUsernameChange(event) {
        if (this.props.setUsername) this.props.setUsername(event.target.value);
    }

    handlePasswordChange(event) {
        if (this.props.setPassword) this.props.setPassword(event.target.value);
    }

    handleLoginSubmit(event) {
        if (this.props.loginSubmit) this.props.loginSubmit();
        event.preventDefault();
    }

    render() {
        return <Form onSubmit={this.handleLoginSubmit} className="form-login">
                <FieldGroup id="username" type="text" label="Username" placeholder="Username" onChange={this.handleUsernameChange} />
                <FieldGroup id="password" type="password" label="Password" placeholder="Password" onChange={this.handlePasswordChange} />
                <Button bsStyle="primary" type="submit">Login</Button>
            </Form>;
    }
}