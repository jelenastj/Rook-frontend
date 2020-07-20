import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import UserPage from './UserPage';
import CreateTrip from './CreateTrip';
import AddGear from './AddGear';
import Trip from './Trip';
import Gear from './Gear';
import NotFound from './NotFound';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: JSON.parse(localStorage.getItem("currentUser")) || {}
    }
  }

  handleLogin = (user) => {
    const currentUser = { ...user };
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.setState({ ...this.state, currentUser }, () => this.props.history.push(`/users/${user.id}`));
  };

  handleLogout = () => {
    localStorage.clear();
    const currentUser = { };
    this.setState({ ...this.state, currentUser }, () => this.props.history.push(`/`));
  };

  render() {
    return (
        <Switch>
          <Route exact path='/login'>
           <Login handleLogin={this.handleLogin} />
          </Route>
          <Route exact path='/signup'>
           <SignUp handleLogin={this.handleLogin} />
          </Route>

          <PrivateRoute
            path={`/users/:userId`}
            component={UserPage}
            currentUser={this.state.currentUser}
            handleLogout={this.handleLogout}
          />
          <PrivateRoute
            path={"/createtrip"}
            component={CreateTrip}
            currentUser={this.state.currentUser}
            handleLogout={this.handleLogout}
          />

          <PrivateRoute 
            exact path='/addgear' 
            component={AddGear} 
            currentUser={this.state.currentUser}
            handleLogout={this.handleLogout}
          />
            
          <PrivateRoute 
            exact path='/trip' 
            component={Trip} 
            currentUser={this.state.currentUser}
            handleLogout={this.handleLogout}
          />

          <PrivateRoute
            exact path='/gear'
            component={Gear}
            currentUser={this.state.currentUser}
            handleLogout={this.handleLogout}
          />
            
          <Route
            exact path="/"
            render={(routerProps) => {
              return (
                <Home
                  handleLogin={this.handleLogin}
                  routerProps={routerProps}
                />
              );
            }}
          />

          <Route
            path="/"
            component={NotFound}
          />

        </Switch>
    );
  }
}

export default withRouter(App);