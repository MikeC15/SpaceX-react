import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateComment extends Component {
    constructor() {
        super();

        this.state = {
            content: '',
            likes: 0,
            flight_number: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
        this.setFlightId()
    }
    setFlightId = () => {
        this.setState({ flight_number: this.props.pastLaunch.flight_number })
    }
    render() {
        return (
            <Segment>
                <h5>Create Comment</h5>
                <Form onSubmit={(e) => this.props.addComment(e, this.state)}>
                    <Label>Comment Content:</Label>
                    <Form.Input type='text' name='content' value={this.state.content} onChange={this.handleChange} />
                    <Button type='Submit'>Create Comment</Button>
                </Form>
            </Segment>
        )
    }
}

export default CreateComment;