import React from 'react';
import Register from './Register';
import Login from './Login';
import './App.css';
// import CommentContainer from './CommentContainer';
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
      <Register />
      <Login />
      {/* <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/comments" component={CommentContainer} /> */}
        {/* <Route component={My404} />
      </Switch> */}
    </main>
  );
}

export default App;
