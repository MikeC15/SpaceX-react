import React from 'react';
import Register from '../Register';
import Login from '../Login';
import './style.css'
import { Container } from 'semantic-ui-react'


function LoginPage() {
    return (
        <Container className="logincontainer">
            <Register />
            <Login />
        </Container>
    );
}

export default LoginPage;