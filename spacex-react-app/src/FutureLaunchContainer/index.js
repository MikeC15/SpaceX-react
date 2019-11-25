import React from 'react'
import './style.css'
import { Card, Header, Image, Icon } from 'semantic-ui-react'

function FutureLaunchContainer(props) {
    const eachLaunch = props.launches.map((launch, i) => {
        // console.log(mission)
        return (
            <Card key={launch.flight_number} style={{ display: "inline-block", maxHeight: 300, textAlign: "center" }} >
                <Header onClick={() => { props.getOneFutureLaunch(launch.flight_number) }}><Icon name="arrow alternate circle right outline" />{launch.mission_name}</Header>
                <Header size="huge" className="head">{launch.flight_number}</Header>
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