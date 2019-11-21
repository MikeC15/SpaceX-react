import React from 'react';
import { Comment, Header } from 'semantic-ui-react';

function CommentFutureLaunchList(props) {
    // console.log("PROPS.FUTURELAUNCH", props.futureLaunch)
    const comments = props.comments.filter(comment => comment.flight_number == props.futureLaunch.flight_number)
    const filteredComments = comments.map((comment) => {
        return (
            <Comment key={comment.id}>
                <Comment.Content>
                    <Header as='h5' dividing>{comment.user.username}</Header>
                    <Comment.Text>{comment.content}</Comment.Text>
                    <Comment.Metadata>{comment.created_at}</Comment.Metadata>
                    {/* <Card.Content extra> */}
                    {/* <Button onClick={() => props.deleteDog(dog.id)}>DeleteDog</Button> */}
                    {/* <Button onClick={() => props.openEditModal(dog)}>Edit Dog</Button> */}
                    {/* </Card.Content> */}
                </Comment.Content>
            </Comment>
        )
    })

    return (
        <Comment.Group>
            {filteredComments}
        </Comment.Group>
    )
}

export default CommentFutureLaunchList