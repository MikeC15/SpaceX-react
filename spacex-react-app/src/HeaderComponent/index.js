import React from 'react';
import { Link } from 'react-router-dom';
import { Header, List } from 'semantic-ui-react';

const HeaderComponent = () => {
    return (
        <Header textAlign='center'>
            <List horizontal>
                <List.Item>
                    <List.Header>
                        <Link to="/">Home</Link>
                    </List.Header>
                </List.Item>
                <List.Item>
                    <List.Header>
                        <Link to="/spacex">SpaceX</Link>
                    </List.Header>
                </List.Item>
                <br />
                <List.Item>
                    <List.Header>
                        Go straight to SpaceX, or Login/Register to comment
                    </List.Header>
                </List.Item>
            </List>
        </Header>
    )
}

export default HeaderComponent;
