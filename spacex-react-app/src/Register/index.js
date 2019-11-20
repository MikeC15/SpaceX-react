import React, { Component } from 'react';
import { Form, Label, Button, Message } from 'semantic-ui-react';

class Register extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const registrationUrl = `${process.env.REACT_APP_API_URL}/api/v1/users/register`;
        const registerResponse = await fetch(registrationUrl, {
            method: 'POST',
            body: JSON.stringify(this.state),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await registerResponse.json();
        if (parsedResponse.status.code === 201) {
            console.log('Sign up successful');
            this.props.history.push('/comments');
        } else {
            this.setState({
                errorMsg: parsedResponse.status.message
            });
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h4>Register New User</h4>
                <Label>Email</Label>
                <Form.Input type="email" name="email" onChange={this.handleChange} required />
                <Label>Password</Label>
                <Form.Input type="password" name="password" onChange={this.handleChange} required />
                <Button type="submit" color="green">Sign Up</Button>
                {this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null}
            </Form>
        )
    }
}

export default Register