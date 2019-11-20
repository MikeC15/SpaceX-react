import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

function OneMissionContainer(props) {
        return (
            <div>
                <Header onClick={() => { props.backToMissions() }}>{props.mission.mission_name}</Header>
            </div>
        )
}

export default OneMissionContainer
