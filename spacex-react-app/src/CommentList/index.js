import React from 'react';
import { Card, Button } from 'semantic-ui-react';

function CommentList(props) {
    console.log("PROPS.MISSION PASSED DOWN FROM PARENTPARENT", props.mission)
    const comments = props.comments.filter(comment => comment.flight_number == props.mission.mission_id)
        //ONCE MISSION IS PASSED DOWN PUT comment.fliht number == currentmission flightnumber
    const filteredComments = comments.map((comment) => {
        return (
            <Card key={comment.id}>
                <Card.Content>
                    <Card.Header>{comment.user.username}</Card.Header>
                    <Card.Description>{comment.content}</Card.Description>
                </Card.Content>
                {/* <Card.Content extra> */}
                    {/* <Button onClick={() => props.deleteDog(dog.id)}>DeleteDog</Button> */}
                    {/* <Button onClick={() => props.openEditModal(dog)}>Edit Dog</Button> */}
                {/* </Card.Content> */}
            </Card>
        )
    })

    return (
        <Card.Group>
            {filteredComments}
        </Card.Group>
    )
}

export default CommentList