import React from 'react';
import { Comment, Header, Button, Icon } from 'semantic-ui-react';

function CommentList(props) {
    // console.log("PROPS.MISSION PASSED DOWN FROM PARENTPARENT", props.mission)
    const comments = props.comments.filter(comment => comment.flight_number == props.mission.mission_id)
        //ONCE MISSION IS PASSED DOWN PUT comment.fliht number == currentmission flightnumber
    const filteredComments = comments.map((comment) => {
        return (
            <Comment key={comment.id}>
                <Comment.Content>
                    <Header as='h5' dividing>{comment.user.username}</Header>
                    <Comment.Text>{comment.content}</Comment.Text>
                    <Comment.Metadata>{comment.created_at}</Comment.Metadata><br />
                    <Icon name="close" onClick={() => props.deleteComment(comment.id)} />
                    <Icon name="edit" onClick={() => props.openEditModal(comment)} />
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

export default CommentList