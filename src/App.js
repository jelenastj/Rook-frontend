import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import UserPage from './UserPage';
import CreateTrip from './CreateTrip';
import EditTrip from './EditTrip';
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
      currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
      gears: [],
      currentTrip: {},
    }
  }

  handleLogin = (user) => {
    const currentUser = { ...user };
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.setState({ ...this.state, currentUser }, () => this.props.history.push("/userpage"));
  };

  handleLogout = () => {
    localStorage.clear();
    const currentUser = {};
    this.setState({ ...this.state, currentUser }, () => this.props.history.push(`/`));
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/gears`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response) => response.json())
      .then((gears) =>
        this.setState({ gears }))
  }

  addGear = (gear) => {
    this.setState({
      gears: [...this.state.gears, gear]
    });
  } 

  addToGearPack = (gear) => {
    const trip_id = this.state.currentTrip.id
    console.log(JSON.stringify(gear))

    fetch(` http://localhost:3000/api/v1/tripgears`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ gear_id: gear.id, trip_id: trip_id }),
    }).then(r => r.json())
      .then(data => {
        this.getTrip(data.trip)
      })

  }
  remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
    return array
  }

  deleteFromGearPack = (gear) => {
    const trip_id = this.state.currentTrip.id
    const newGears = this.remove(this.state.currentTrip.gears, gear)
    console.log(newGears)

    fetch(` http://localhost:3000/api/v1/trips/${trip_id}/updategears`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ gear_id: gear.id }),
    }).then(r => r.json())
      .then(updatedTrip => {
        this.setState({ currentTrip: updatedTrip })
      })
  }


  deleteGear = (gear) => {
    fetch(`http://localhost:3000/api/v1/gears/${gear.id}`, {
      method: 'DELETE'
    }).then(() => {
      fetch(`http://localhost:3000/api/v1/gears`)
        .then(r => r.json())
        .then(gears => this.setState({ gears }))
    })
  }

  getTrip = (trip) => {
    fetch(`http://localhost:3000/api/v1/trips/${trip.id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response) => response.json())
      .then((currentTrip) =>
        this.setState({ currentTrip }))
  }

  setCurrentTrip = (trip) => {
    this.getTrip(trip)
  }

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
          path="/userpage"
          component={UserPage}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <PrivateRoute
          path="/createtrip"
          component={CreateTrip}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <PrivateRoute
          path="/edittrip"
          component={EditTrip}
          currentUser={this.state.currentUser}
          currentTrip={this.state.currentTrip}
          handleLogout={this.handleLogout}
        />

        <PrivateRoute
          exact path='/addgear'
          component={AddGear}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
          addGear={this.addGear}
        />

        <PrivateRoute
          exact path='/trip'
          component={Trip}
          currentUser={this.state.currentUser}
          addGear={this.addGear}
          handleLogout={this.handleLogout}
          setCurrentTrip={this.setCurrentTrip}
          showCurrentTrip={this.state.currentTrip}
          gears={this.state.gears}
          addToGearPack={this.addToGearPack}
          deleteFromGearPack={this.deleteFromGearPack}
        />

        <PrivateRoute
          exact path='/gear'
          component={Gear}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
          gears={this.state.gears}
          // handleClick={this.addToGearPack}
          deleteGear={this.deleteGear}
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

      </Switch >
    );
  }

}
export default withRouter(App);