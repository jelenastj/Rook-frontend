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
  useHistory,
  Redirect
} from "react-router-dom";
import CreateTripForm from './CreateTripForm';


class App extends Component {
  state = {
    auth: { currentUser: {} },
  };

  handleLogin = (data) => {
    const currentUser = { currentUser: data.user };
    this.setState({ auth: currentUser });
  };

  handleLogout = () => {
    this.setState({ auth: { currentUser: {} } });
    localStorage.clear()
  };



  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path='/login' component={Login}>
            <Login />
          </Route>
          <Route exact path='/signup' component={SignUp}>
            <SignUp />
          </Route>

          <Route
            exact
            path="/"
            render={(routerProps) => {
              return (
                <Home
                  handleLogin={this.handleLogin}
                  routerProps={routerProps}
                />
              );
            }}
          />
          {this.state.auth.currentUser.id ? (
            <Switch>

              <Route
                path={`/users/${this.state.auth.currentUser.id}`}
                render={(routerProps) => {
                  return (
                    <UserPage
                      currentUser={this.state.auth.currentUser}
                      handleLogout={this.handleLogout}
                      routerProps={routerProps}
                    />
                  );
                }}
              />
              <Route
                path={"/createtrip"}
                component={CreateTripForm}
                render={(routerProps) => {
                  return (
                    <CreateTrip
                      currentUser={this.state.auth.currentUser}
                      handleLogout={this.handleLogout}
                      routerProps={routerProps}
                    />
                  );
                }}
              />

              <Route exact path='/addgear'>
                <AddGear />
              </Route>

              <Route exact path='/trip'>
                <Trip />
              </Route>

              <Route exact path='/gear'>
                <Gear />
              </Route>


            </Switch>) : (
              <Redirect to="/" />
            )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;