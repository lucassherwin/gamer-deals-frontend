import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login.js';
import Homepage from './components/Homepage.js';
import Navbar from './components/Navbar.js';
import Account from './components/Account.js';
import Search from './components/Search.js';

export class App extends Component {
  state = {
    username: '',
    search: ''
  }

  handleSearch = (event) => {
    console.log(event.target.value);
    let { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleLoginChange = (event) => {
    console.log(event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div>
        <Navbar />
        <Search handleSearch={this.handleSearch} search={this.state.search} />
        <Switch>
          <Route exact path = '/'>
            <Homepage />
          </Route>
          <Route exact path='/login'>
            <Login user={this.state.username} handleLoginChange={this.handleLoginChange} />
          </Route>
          <Route exact path='/account'>
            <Account />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;

// will have to update account to go to the specific user accounts page 