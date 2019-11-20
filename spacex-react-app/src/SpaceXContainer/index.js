import React, { Component } from 'react';
import MissionContainer from '../MissionContainer'
import { Segment, Header } from 'semantic-ui-react'
// import PastLaunchContainer from '../PastLaunchContainer'
// import FutureLaunchContainer from '../FutureLaunchContainer'

class SpaceXContainer extends Component {
    constructor() {
        super();
        this.state = {
            missions: [],
            pastLaunches: [],
            futureLaunches: [],
            mission: []
        }
    }

    getMissions = async () => {
        try {
            const missions = await fetch('https://api.spacexdata.com/v3/missions')
            const parsedMissions = await missions.json()
            console.log('PARSEDMISSIONS',parsedMissions)
            this.setState({
                missions: parsedMissions
            })
        } catch (err) {
            console.log(err)
        }
    }

    getOneMission = (missionId) => {
        console.log(' MISSIONID:',missionId)
        this.setState((previousState) => (
            { mission: previousState.missions.filter((mission) => mission.mission_id === missionId) }
        ))
        console.log(this.state.mission)
    }

    getPastLaunches = async () => {
        try {
            const launches = await fetch('https://api.spacexdata.com/v3/launches/past')
            const parsedLaunches = await launches.json()
            console.log('PASTLaunches', parsedLaunches)
            this.setState({
                pastLaunches: parsedLaunches
            })
        } catch (err) {
            console.log(err)
        }
    }

    getFutureLaunches = async () => {
        try {
            const launches = await fetch('https://api.spacexdata.com/v3/launches/upcoming')
            const parsedLaunches = await launches.json()
            console.log('FUTURELaunches', parsedLaunches)
            this.setState({
                futureLaunches: parsedLaunches
            })
        } catch (err) {
            console.log(err)
        }
    }

    componentDidMount() {
        this.getMissions()
        this.getPastLaunches()
        this.getFutureLaunches()
        console.log("THIS.STATE",this.state)
    }

    render() {
        return (
            <div>
                <Header>Missions</Header>
                {/* <CrimesList crimes={this.state.crimes} deleteCrime={this.deleteCrime} />  EXAMPLE TO PASS DOWN PROPS FROM THIS API*/}
                <Segment style={{ overflow: 'auto', maxHeight: 300 }} >
                    <MissionContainer missions={this.state.missions} getOneMission={this.getOneMission} mission={this.state.mission} />
                </Segment>
                <Header>Upcoming Launches</Header>
                <Header>Past Launches</Header>
                {/* <PastLaunchContainer launches={this.state.pastLaunches} />
                <FutureLaunchContainer launches={this.state.futureLaunches} /> */}
            </div>
        )
    }
}

export default SpaceXContainer;
