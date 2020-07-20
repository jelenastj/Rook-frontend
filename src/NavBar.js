import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";


class NavBar extends Component {
  handleClick = () => {
    this.props.handleLogout();
  };

  render() {
    return (
      <div className='nav-bar'>
        <NavLink exact path to="/logout">Log out</NavLink>
        <NavLink exact path to="/gear"> Gear</NavLink>
        <NavLink exact path to="/trip">Trips</NavLink>
        <NavLink exact path to={`/users/:userId`}>Home</NavLink>

      </div>
    );
  }
}

export default NavBar;