import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

function MissionContainer(props) {
    const eachMission = props.missions.map((mission, i) => {
        // console.log(mission)
        return (
            <React.Fragment>
                <Header><a onClick={() => { props.getOneMission(mission.mission_id) }} href="/">{mission.mission_name}</a></Header>
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