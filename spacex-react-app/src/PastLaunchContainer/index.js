import React from 'react'
import { Segment, Header, Card, Image } from 'semantic-ui-react'

function PastLaunchContainer(props) {
    const eachLaunch = props.launches.map((launch, i) => {
        return (
            <Card key={launch.flight_number} style={{ display: "inline-block", maxHeight: 350, textAlign: "center" }} >
                <Header centered onClick={() => { props.getOnePastLaunch(launch.flight_number) }}>{launch.mission_name}: {launch.flight_number}</Header>
                <Image src={launch.links.mission_patch} />
            </Card>
        )
    })

    return (
        <React.Fragment>
            {eachLaunch}
        </React.Fragment>
    )
}

export default PastLaunchContainer