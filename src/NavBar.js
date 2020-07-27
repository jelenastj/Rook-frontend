import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class NavBar extends Component {
  handleClick = () => {
    this.props.handleLogout();
  };

  render() {
    return (
      <div className='nav-bar' >
        <span className="app-title">ROOK</span>
        <span className="app-subtitle">list and weight your outdoor gear</span>
        <NavLink to="/logout" style={{ color: 'white', textDecoration: 'inherit' }} >Log out</NavLink>
        <NavLink to="/gear" style={{ color: 'white', textDecoration: 'inherit' }}> Gear</NavLink>
        <NavLink to="/trip" style={{ color: 'white', textDecoration: 'inherit' }}>Trips</NavLink>
        <NavLink to="/userpage" style={{ color: 'white', textDecoration: 'inherit' }}>Home</NavLink>

      </div>
    );
  }
}

export default NavBar;