import React, { Component } from 'react';
import NavBar from './NavBar'
import GearCollection from './GearCollection';
import { Link } from "react-router-dom";

export default class Gear extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar
                        currentUser={this.props.currentUser}
                        handleLogout={this.props.handleLogout}
                        routerProps={this.props.routerProps}/>
                    <Link to="/addgear" className="link-to-add-gear" >Add Gear</Link>
                    <GearCollection />
                </div>
            </div>
        )
    }
}
