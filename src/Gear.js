import React, { Component } from 'react';
import NavBar from './NavBar'
import GearItem from './GearItem';

export default class Gear extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar
                        currentUser={this.props.currentUser}
                        handleLogout={this.props.handleLogout}
                        routerProps={this.props.routerProps}/>
                    <GearItem />
                </div>
            </div>
        )
    }
}
