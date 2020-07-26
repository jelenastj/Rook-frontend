import React, { Component } from 'react'
import CreateTripForm from "./CreateTripForm"

export default class CreateTrip extends Component {

    render() {
        console.log(this.props.currentUser)
        return (
            <div className="add-trip-bg">
                <h1 className="add-trip">ADD NEW TRIP:</h1>
                <CreateTripForm
                    currentUser={this.props.currentUser}
                    routerProps={this.props.routerProps}
                    handleAddTrip={() => this.props.handleAddTrip} />
            </div>
        )
    }
}
