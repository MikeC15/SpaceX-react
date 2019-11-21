import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

function FutureLaunchContainer(props) {
    const eachLaunch = props.launches.map((launch, i) => {
        // console.log(mission)
        return (
            <React.Fragment key={launch.flight_number}>
                <Header onClick={() => { props.getOneFutureLaunch(launch.flight_number) }}>{launch.mission_name}</Header>
            </React.Fragment>
        )
    })

    return (
        <React.Fragment>
            {eachLaunch}
        </React.Fragment>
    )
}

export default FutureLaunchContainer