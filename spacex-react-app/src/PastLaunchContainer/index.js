import React from 'react'
import { Icon, Header, Card, Image } from 'semantic-ui-react'

function PastLaunchContainer(props) {
    const eachLaunch = props.launches.map((launch, i) => {
        return (
            <Card key={launch.flight_number} style={{ display: "inline-block", maxHeight: 350, textAlign: "center" }} >
                <Header centered onClick={() => { props.getOnePastLaunch(launch.flight_number) }}><Icon name="arrow alternate circle right outline" />{launch.mission_name}: {launch.flight_number}</Header>
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