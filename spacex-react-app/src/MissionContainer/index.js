import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

function MissionContainer(props) {
    const eachMission = props.missions.map((mission, i) => {
        // console.log(mission)
        return (
            <React.Fragment key={mission.mission_id}>
                <Header onClick={() => {props.getOneMission(mission.mission_id) }}>{mission.mission_name}</Header>
                {/* <Header as={Link} to={"/missions/" + mission.mission_id}>{mission.mission_name}</Header> */}
                <Segment key={mission.mission_id} style={{ overflow: 'auto', maxHeight: 75 }}>
                    {mission.description}
                    {/* Arrest: {mission.arrest ? "Arrested" : "Not Arrested"} <br />  EXAMPLE OF BOOLEAN USAGE*/}
                </Segment>
            </React.Fragment>
        )
    })

    return (
        <React.Fragment>
            {eachMission}
        </React.Fragment>
    )
}

export default MissionContainer