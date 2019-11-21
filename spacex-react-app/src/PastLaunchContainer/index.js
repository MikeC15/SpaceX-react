import React from 'react'
import { Segment, Header, Card, Image } from 'semantic-ui-react'

function PastLaunchContainer(props) {
    const eachLaunch = props.launches.map((launch, i) => {
        return (
            <Card key={launch.flight_number}>
                <Image src={launch.links.mission_patch} />
                <Header onClick={() => { props.getOnePastLaunch(launch.flight_number) }}>{launch.mission_name}</Header>
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