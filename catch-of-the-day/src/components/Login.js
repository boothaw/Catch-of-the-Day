import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
    <nav className="login">
        <h2>
            Inventory Login
        </h2>
        <p>Sign in to manage the Inventory</p>
        <button 
            className="github" 
            onClick={() => props.authenticate('Github')}>
            Log In With Github
        </button>
        <button 
            className="facebook" 
            onClick={() => props.authenticate('Facebook')}>
            Log In With Facebook
        </button>
    </nav>
);

Login.prototypes = {
    autheticate: PropTypes.func.isRequired
}

export default Login;