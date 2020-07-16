import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import UserPage from './UserPage'
import CreateTrip from './CreateTrip'
import AddGear from './AddGear'
import Trip from './Trip'
import Gear from './Gear'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


class App extends Component {

  

  render() {
    return (
      <div>
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>

            <Route exact path='/signup'>
              <SignUp />
            </Route>

            <Route exact path='/userpage'>
              <UserPage />
            </Route>

            <Route exact path='/login'>
              <CreateTrip />
            </Route>

            <Route exact path='/login'>
              <AddGear />
            </Route>

            <Route exact path='/login'>
              <Trip />
            </Route>

            <Route exact path='/login'>
              <Gear />
            </Route>


          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;