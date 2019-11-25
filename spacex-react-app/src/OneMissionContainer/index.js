import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'
import CommentContainer from '../CommentContainer'

function OneMissionContainer(props) {
    const eachPayload = props.mission.payload_ids.map((payload, i) => {
        // console.log(mission)
        return (
            <small key={i}>{payload}  </small>
        )
    })

    return (
        <div>
            <Header onClick={() => { props.backToMissions() }}><Icon name="arrow alternate circle left outline" />{props.mission.mission_name}</Header>
            <h5>Mission Description:</h5>
            <Segment style={{ overflow: 'auto', maxHeight: 80 }} >{props.mission.description}</Segment>
            <h5>Payloads for {props.mission.mission_name}</h5>
            {eachPayload}
            <br />
            <br />
            <a target='_blank' href={props.mission.website}><Icon link name='chrome' /></a>
            <a target='_blank' href={props.mission.wikipedia}><Icon link name='wikipedia w' /></a>
            <a target='_blank' href={props.mission.twitter}><Icon link name='twitter' /></a>
            <h5>Mission Comments:</h5>
            <CommentContainer mission={props.mission} />
        </div>
    )
}

export default OneMissionContainer
