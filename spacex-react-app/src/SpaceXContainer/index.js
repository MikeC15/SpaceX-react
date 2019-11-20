import React, { Component } from 'react';
import MissionContainer from '../MissionContainer'
import { Segment, Header } from 'semantic-ui-react'
// import PastLaunchContainer from '../PastLaunchContainer'
// import FutureLaunchContainer from '../FutureLaunchContainer'
import OneMissionContainer from '../OneMissionContainer'

class SpaceXContainer extends Component {
    constructor() {
        super();
        this.state = {
            missions: [],
            pastLaunches: [],
            futureLaunches: [],
            mission: null
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
        console.log(' MISSIONID:',missionId)

        try {
            const mission = await fetch('https://api.spacexdata.com/v3/missions/'+missionId)
            const parsedMission = await mission.json()
            console.log('ONE PARSEDMISSION:', parsedMission)
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
                <Segment style={{ overflow: 'auto', maxHeight: 300 }} >
                    {/* SOCOOL TERNARY to change pages */}
                    {this.state.mission ? <OneMissionContainer mission={this.state.mission} backToMissions={this.backToMissions} /> : <MissionContainer missions={this.state.missions} getOneMission={this.getOneMission} />  }
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
