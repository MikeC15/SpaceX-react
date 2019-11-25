import React from 'react'
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';


const EditCommentModal = (props) => {
    // console.log(props)
    return (
        <Modal open={props.open}>
            <Header>Edit Comment</Header>
            <Modal.Content>
                <Form onSubmit={props.closeAndEdit}>
                    <Label>
                        Content:
                    </Label>
                    <Form.Input type='text' name='content' value={props.commentToEdit.content} onChange={props.handleEditChange} />
                    <Modal.Actions>
                        <Button color='green' type='submit'>Edit Comment</Button>
                    </Modal.Actions>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default EditCommentModal;