import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react'

// import PastLaunchContainer from '../PastLaunchContainer'
// import OnePastLaunchContainer from '../OnePastLaunchContainer'

import MissionContainer from '../MissionContainer'
import OneMissionContainer from '../OneMissionContainer'

import FutureLaunchContainer from '../FutureLaunchContainer'
import OneFutureLaunchContainer from '../OneFutureLaunchContainer'

class SpaceXContainer extends Component {
    constructor() {
        super();
        this.state = {
            missions: [],
            pastLaunches: [],
            futureLaunches: [],
            mission: null,
            futureLaunch: null,
            pastLaunch: null
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
    getOneMission = async (missionId) => {
        // console.log(' MISSIONID:',missionId)

        try {
            const mission = await fetch('https://api.spacexdata.com/v3/missions/'+missionId)
            const parsedMission = await mission.json()
            // console.log('ONE PARSEDMISSION:', parsedMission)
            this.setState({
                mission: parsedMission
            })
        } catch (err) {
            console.log(err)
        }
        // this.setState((previousState) => (
        //     { mission: previousState.missions.filter((mission) => mission.mission_id === missionId) }
        // ))
        // console.log(this.state.mission)
    }
    backToMissions = () =>{
        this.setState({
            mission: null
        })
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
    getOneFutureLaunch = async (launchId) => {
        // console.log(' LAUNCHID:',launchId)
        try {
            const launch = await fetch('https://api.spacexdata.com/v3/launches/' + launchId)
            const parsedLaunch = await launch.json()
            console.log('ONE PARSEDLAUNCH:', parsedLaunch)
            this.setState({
                futureLaunch: parsedLaunch
            })
        } catch (err) {
            console.log(err)
        }
    }
    backToFutureLaunches = () => {
        this.setState({
            futureLaunch: null
        })
    }

    componentDidMount() {
        this.getMissions()
        this.getPastLaunches()
        this.getFutureLaunches()
        console.log("THIS.STATE", this.state)
    }

    render() {
        return (
            <div>
                <Header>Missions</Header>
                    <Segment style={{ overflow: 'auto', maxHeight: 300 }} >
                        {/* SOCOOL TERNARY to change pages to show the clickedmission */}
                        {this.state.mission ? <OneMissionContainer mission={this.state.mission} backToMissions={this.backToMissions} /> : <MissionContainer missions={this.state.missions} getOneMission={this.getOneMission} />  }
                    </Segment>
                <Header>Upcoming Launches</Header>
                    <Segment style={{ overflow: 'auto', maxHeight: 300 }} >
                        {this.state.futureLaunch ? <OneFutureLaunchContainer futureLaunch={this.state.futureLaunch} backToFutureLaunches={this.backToFutureLaunches} /> : <FutureLaunchContainer launches={this.state.futureLaunches} getOneFutureLaunch={this.getOneFutureLaunch} />}
                    </Segment>
                <Header>Past Launches</Header>
                {/* <PastLaunchContainer launches={this.state.pastLaunches} />
                <FutureLaunchContainer launches={this.state.futureLaunches} /> */}
            </div>
        )
    }
}

export default SpaceXContainer;
