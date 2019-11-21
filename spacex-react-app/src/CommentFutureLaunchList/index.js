import React from 'react';
import { Card, Button, Segment, Header } from 'semantic-ui-react';

function CommentFutureLaunchList(props) {
    // console.log("PROPS.FUTURELAUNCH", props.futureLaunch)
    const comments = props.comments.filter(comment => comment.flight_number == props.futureLaunch.flight_number)
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

export default CommentFutureLaunchList