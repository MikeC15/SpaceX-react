import React, { Component } from 'react';
import CommentPastLaunchList from '../CommentPastLaunchList'
// import CreateDogForm from '../CreateDogForm'
import { Grid } from 'semantic-ui-react'
// import EditDogModal from '../EditDogModal'

class CommentPastLaunchContainer extends Component {
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

    // create function here, pass it down do createdogfrom and then run it with passed in info to lift
    // addDog = async (e, dogFromTheForm) => {
    //     e.preventDefault();
    //     console.log(dogFromTheForm)

    //     //POST ROUTE
    //     try {
    //         // We have to send JSON
    //         // createdMovie variable will store the response from the express API
    //         const createdDogResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/dogs/', {
    //             method: 'POST',
    //             body: JSON.stringify(dogFromTheForm),
    //             credentials: 'include',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //         // we have to turn the response from flask into
    //         // an object we can use
    //         const parsedResponse = await createdDogResponse.json();
    //         console.log(parsedResponse, ' this is response')
    //         // we are emptying all the dogs that are living in state into a new array,
    //         // and then adding the dog we just created to the end of it
    //         // the new dog which is called parsedResponse.data
    //         if (parsedResponse.status.code === 201) {
    //             this.setState({ dogs: [...this.state.dogs, parsedResponse.data] })
    //         } else {
    //             alert(parsedResponse.status.message)
    //         }

    //     } catch (err) {
    //         console.log('error')
    //         console.log(err)
    //     }
    //     // request address will start with 'http://localhost:9000'
    //     // becuase after we create it, we want to add it to the dogs array
    // }

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
            <CommentPastLaunchList pastLaunch={this.props.pastLaunch} comments={this.state.comments} />

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

export default CommentPastLaunchContainer