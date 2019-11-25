import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'
import CommentPastLaunchContainer from '../CommentPastLaunchContainer'

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

function OnePastLaunchContainer(props) {
    let youtube = "https://www.youtube.com/embed/" + props.pastLaunch.links.youtube_id
    return (
        <div>
            <Header onClick={() => { props.backToPastLaunches() }}><Icon name="arrow alternate circle left outline" />{props.pastLaunch.mission_name}</Header>
            {props.pastLaunch.launch_success ? <img src="https://i.imgur.com/RJ4vykS.jpg" /> : <img src="https://i.imgur.com/UpMJNhm.jpg" /> }
            <h5>Launched on:</h5>
            {timeConverter(props.pastLaunch.launch_date_unix)}
            <h5>Launch Details:</h5>
            <Segment style={{ overflow: 'auto', maxHeight: 80 }} >{props.pastLaunch.details}</Segment>

            <iframe width="420" height="315"
                src={youtube} allowFullScreen frameBorder="0" >
            </iframe>
            <br />
            <a target='_blank' href={props.pastLaunch.links.wikipedia}><Icon link name='wikipedia w' /></a>
            <a target='_blank' href={props.pastLaunch.links.article_link}><Icon link name='chrome' /></a>
            <a target='_blank' href={props.pastLaunch.links.reddit_launch}><Icon link name='reddit' /></a>
            <h5>Past Launch Comments:</h5>
            <CommentPastLaunchContainer pastLaunch={props.pastLaunch} />
        </div>
    )
}

export default OnePastLaunchContainer
