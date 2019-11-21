import React from 'react';
import { Card, Button, Segment, Header } from 'semantic-ui-react';

function CommentList(props) {
    console.log("PROPS.MISSION PASSED DOWN FROM PARENTPARENT", props.mission)
    const comments = props.comments.filter(comment => comment.flight_number == props.mission.mission_id)
        //ONCE MISSION IS PASSED DOWN PUT comment.fliht number == currentmission flightnumber
    const filteredComments = comments.map((comment) => {
        return (
            <Segment style={{ overflow: 'auto', maxHeight: 100, flexWrap: "wrap" }} key={comment.id}>
                
                <Header>{comment.user.username}</Header>
                <p>{comment.content}</p>
                <small>{comment.created_at}</small>
                {/* <Card.Content extra> */}
                    {/* <Button onClick={() => props.deleteDog(dog.id)}>DeleteDog</Button> */}
                    {/* <Button onClick={() => props.openEditModal(dog)}>Edit Dog</Button> */}
                {/* </Card.Content> */}
            </Segment>
        )
    })

    return (
        <Segment>
            {filteredComments}
        </Segment>
    )
}

export default CommentList