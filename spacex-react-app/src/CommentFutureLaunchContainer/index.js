import React, { Component } from 'react';
import CommentFutureLaunchList from '../CommentFutureLaunchList'
import CreateFutureCommentForm from '../CreateFutureCommentForm'
import { Grid } from 'semantic-ui-react'
// import EditDogModal from '../EditDogModal'

class CommentFutureLaunchContainer extends Component {
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
            // console.log(parsedComments);
            this.setState({
                comments: parsedComments.data
            })

        } catch (err) {
            console.log(err);
        }
    }

    addComment = async (e, commentFromTheForm) => {
        e.preventDefault();
        console.log("COMMENT LIFTING UP FROM FORM", commentFromTheForm)
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

    // deleteDog = async (id) => {
    //     console.log(id)
    //     const deleteDogResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/dogs/' + id, {
    //         method: 'DELETE',
    //         credentials: 'include'
    //     });
    //     // This is the parsed response from dog
    //     const deleteDogParsed = await deleteDogResponse.json();
    //     console.log(deleteDogParsed)
    //     // Now that the db has deleted our item, we need to remove it from state
    //     // returns a new array filtered out.
    //     //creating a new array with every object except the one we deleted with id
    //     if (deleteDogParsed.status.code === 200) {
    //         console.log(deleteDogParsed, ' response from Flask server')
    //         this.setState({ dogs: this.state.dogs.filter((dog) => dog.id !== id) })
    //     } else {
    //         alert(deleteDogParsed.status.message);
    //     }
    // }

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
                <CommentFutureLaunchList futureLaunch={this.props.futureLaunch} comments={this.state.comments} />
                <CreateFutureCommentForm futureLaunch={this.props.futureLaunch} addComment={this.addComment} />
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

export default CommentFutureLaunchContainer