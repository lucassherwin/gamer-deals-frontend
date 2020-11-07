import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login.js';
import Homepage from './components/Homepage.js';
import Navbar from './components/Navbar.js';

export class App extends Component {
  state = {
    user: null
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path = '/'>
            <Homepage />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
