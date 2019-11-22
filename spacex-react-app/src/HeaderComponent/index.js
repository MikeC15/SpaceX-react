import React from 'react';
import { Link } from 'react-router-dom';
import { Header, List, Container, Image } from 'semantic-ui-react';
import './style.css';

const HeaderComponent = () => {
    return (
        <Container fluid className="headertop" textAlign="center">
            <List horizontal >
                <Image floated='left' size='medium' src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png" alt="Home" />
                <List.Item>
                    <List.Header floated='right'>
                        <Link to="/">Login to Comment</Link><br/>
                        <Link to="/spacex">SpaceX</Link>
                    </List.Header>
                </List.Item>
            </List>
        </Container>
    )
}

export default HeaderComponent;
