import React, { Component } from 'react';
import CommentList from '../CommentList'
import CreateCommentForm from '../CreateCommentForm'
import { Grid } from 'semantic-ui-react'
// import EditDogModal from '../EditDogModal'

class CommentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            showEditModal: false,
            // commentToEdit: {
            //     name: '',
            //     breed: '',
                // owner: '',
                // id: ''
            // }
        }
    }

    componentDidMount() {
        this.getComments();
    }

    getComments = async () => {
        try {
            const comments = await fetch(process.env.REACT_APP_API_URL + '/api/v1/comments/', {
                credentials: 'include'
            });
            const parsedComments = await comments.json();
            console.log(parsedComments);
            this.setState({
                comments: parsedComments.data
            })

        } catch (err) {
            console.log(err);
        }
    }

    addComment = async (e, commentFromTheForm) => {
        e.preventDefault();
        console.log("COMMENT LIFTING UP FROM FORM",commentFromTheForm)
        try {
            const createdCommentResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/comments/', {
                method: 'POST',
                body: JSON.stringify(commentFromTheForm),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const parsedResponse = await createdCommentResponse.json();
            console.log(parsedResponse, ' this is response')
            if (parsedResponse.status.code === 201) {
                this.setState({ comments: [...this.state.comments, parsedResponse.data] })
            } else {
                alert("You must be logged in to comment")
            }
        } catch (err) {
            console.log('error')
            console.log(err)
        }
    }

    deleteComment = async (id) => {
        // console.log(id)
        const deleteCommentResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/comments/' + id, {
            method: 'DELETE',
            credentials: 'include'
        });
        const deleteCommentParsed = await deleteCommentResponse.json();
        console.log(deleteCommentParsed)
        if (deleteCommentParsed.status.code === 200) {
            console.log(deleteCommentParsed, ' response from Flask server')
            this.setState({ comments: this.state.comments.filter((comment) => comment.id !== id) })
        } else {
            alert(deleteCommentParsed.status.message);
        }
    }

    // openEditModal = (dogFromTheList) => {
    //     console.log('dog to edit:', dogFromTheList)
    //     this.setState({
    //         showEditModal: true,
    //         dogToEdit: { ...dogFromTheList }
    //     })
    // }

    // handleEditChange = (e) => {
    //     this.setState({
    //         dogToEdit: {
    //             ...this.state.dogToEdit,
    //             // below name attribute from input box name = 'breed, name = "name etc" ... value is what we typed in
    //             [e.currentTarget.name]: e.currentTarget.value
    //         }
    //     })
    // }

    // closeAndEdit = async (e) => {
    //     e.preventDefault()
    //     try {
    //         console.log('sending new dog data to server:', this.state.dogToEdit)
    //         const editResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/dogs/' + this.state.dogToEdit.id, {
    //             method: 'PUT',
    //             credentials: 'include',
    //             body: JSON.stringify(this.state.dogToEdit),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         const editResponseParsed = await editResponse.json()
    //         console.log('editResponseParsed', editResponseParsed)
    //         //swap dog in database with new parsed edited dog
    //         const newDogArrayWithEdit = this.state.dogs.map((dog) => {
    //             if (dog.id === editResponseParsed.data.id) {
    //                 dog = editResponseParsed.data
    //             }
    //             return dog;
    //         })
    //         //now we have new dog array so set state
    //         this.setState({
    //             dogs: newDogArrayWithEdit,
    //             showEditModal: false
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    render() {
        return (
            <React.Fragment>
                <CommentList mission={this.props.mission} deleteComment={this.deleteComment} comments={this.state.comments} />
                <CreateCommentForm mission={this.props.mission} addComment={this.addComment} />
            </React.Fragment>
            // <Grid columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
            //     <Grid.Row>
            //         <Grid.Column>
            //             <DogList dogs={this.state.dogs} deleteDog={this.deleteDog} openEditModal={this.openEditModal} />
            //         </Grid.Column>
            //         <Grid.Column>
            //             <CreateDogForm addDog={this.addDog} />
            //         </Grid.Column>
            //         <EditDogModal handleEditChange={this.handleEditChange} closeAndEdit={this.closeAndEdit} dogToEdit={this.state.dogToEdit} open={this.state.showEditModal} />
            //     </Grid.Row>
            // </Grid>
        )
    }
}

export default CommentContainer