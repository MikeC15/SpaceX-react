import React from 'react';
import LoginPage from './LoginPage';
import './App.css';
import SpaceXContainer from './SpaceXContainer';
import HeaderComponent from './HeaderComponent';
import { Route, Switch } from 'react-router-dom';

const My404 = () => {
  return(
    <div>
      <h3>You have gotten lost.</h3>
    </div>
  )
}

function App() {
  return (
    <main>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/spacex" component={SpaceXContainer} />
        <Route component={My404} />
      </Switch>
    </main>
  );
}

export default App;
