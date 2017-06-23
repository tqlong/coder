import Login from '../components/login';
import {connect} from 'react-redux';

import {setUsername, setPassword, loginSubmit} from '../reducer/login';

const actions = {
    setUsername,
    setPassword,
    loginSubmit
};

export default connect(
    null,
    actions
)(Login);