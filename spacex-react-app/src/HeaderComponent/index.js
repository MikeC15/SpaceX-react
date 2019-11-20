import React from 'react';
import { Link } from 'react-router-dom';
import { Header, List } from 'semantic-ui-react';

const HeaderComponent = () => {
    return (
        <Header>
            <List horizontal>
                <List.Item>
                    <List.Header>
                        <Link to="/">Home</Link>
                    </List.Header>
                </List.Item>
                <List.Item>
                    <List.Header>
                        <Link to="/comments">Comments</Link>
                    </List.Header>
                </List.Item>
            </List>
        </Header>
    )
}

export default HeaderComponent;
