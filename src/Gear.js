import React, { Component } from 'react';
import NavBar from './NavBar'
import GearCollection from './GearCollection';

export default class Gear extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar
                        currentUser={this.props.currentUser}
                        handleLogout={this.props.handleLogout}
                        routerProps={this.props.routerProps}/>
                    <GearCollection />
                </div>
            </div>
        )
    }
}
