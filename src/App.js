import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login.js';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
