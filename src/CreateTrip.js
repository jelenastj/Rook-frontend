import React, { Component } from 'react'
import CreateTripForm from "./CreateTripForm"

export default class CreateTrip extends Component {
    render() {
        return (
            <div>
                <CreateTripForm 
                currentUser={this.props.currentUser}
                routerProps={this.props.routerProps}/>
            </div>
        )
    }
}
