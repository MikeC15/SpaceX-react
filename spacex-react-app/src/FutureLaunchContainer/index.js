import React from 'react'
import { Card, Header, Image } from 'semantic-ui-react'

function FutureLaunchContainer(props) {
    const eachLaunch = props.launches.map((launch, i) => {
        // console.log(mission)
        return (
            <Card key={launch.flight_number} style={{ display: "inline-block", maxHeight: 300, textAlign: "center" }} >
                <Header onClick={() => { props.getOneFutureLaunch(launch.flight_number) }}>{launch.mission_name}</Header>
                <Header>{launch.flight_number}</Header>
            </Card>
        )
    })

    return (
        <React.Fragment>
            {eachLaunch}
        </React.Fragment>
    )
}

export default FutureLaunchContainer