import React, { Component } from "react";
import { NavLink} from "react-router-dom";


class NavBar extends Component {
  handleClick = () => {
    this.props.handleLogout();
  };

  render() {
    return (
      <div className='nav-bar'>
        <NavLink to="/logout">Log out</NavLink>
        <NavLink to="/gear"> Gear</NavLink>
        <NavLink to="/trip">Trips</NavLink>
        <NavLink to="/userpage">Home</NavLink>

      </div>
    );
  }
}

export default NavBar;