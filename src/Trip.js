import React, { Component } from 'react';
import NavBar from './NavBar'
import TripCollection from './TripCollection';
import Gear from "./Gear"

export default class Trip extends Component {
    


    render() {

        return (
            <div className="trip-all">
                <NavBar
                    currentUser={this.props.currentUser}
                    handleLogout={this.props.handleLogout}
                    routerProps={this.props.routerProps}/>
                <TripCollection />
                <Gear />
            </div>
            
        )
    }
}
