import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'
import CommentFutureLaunchContainer from '../CommentFutureLaunchContainer'

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

function OneFutureLaunchContainer(props) {

    return (
        <div>
            <Header onClick={() => { props.backToFutureLaunches() }}><Icon name="arrow alternate circle left outline" />{props.futureLaunch.mission_name}</Header>
            <h5>Launches on:</h5>
            {timeConverter(props.futureLaunch.launch_date_unix)}
            <h5>Rocket: <br/>{props.futureLaunch.rocket.rocket_name}<br/> launching from: <br/>{props.futureLaunch.launch_site.site_name_long} </h5>
            
            <h5>Future Launch Comments:</h5>
            <CommentFutureLaunchContainer futureLaunch={props.futureLaunch} />
        </div>
    )
}

export default OneFutureLaunchContainer
