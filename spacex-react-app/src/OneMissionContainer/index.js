import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function OneMissionContainer(props) {
    const eachPayload = props.mission.payload_ids.map((payload, i) => {
        // console.log(mission)
        return (
            <small key={i}>{payload}  </small>
        )
    })

    return (
        <div>
            <Header onClick={() => { props.backToMissions() }}>{props.mission.mission_name}</Header>
            <h5>Payloads for {props.mission.mission_name}</h5>
            {eachPayload}
            <h5>Mission Description:</h5>
            <Segment style={{ overflow: 'auto', maxHeight: 80 }} >{props.mission.description}</Segment>
            <Icon link name='chrome' />
            <Icon link name='twitter' />
            <Icon link name='wikipedia w' />
        </div>
    )
}

export default OneMissionContainer
