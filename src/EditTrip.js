import React, { Component } from 'react'
import EditTripForm from "./EditTripForm"

export default class EditTrip extends Component {

    render() {
        return (
            <div className="add-trip-bg">
                <h1 className="add-trip">EDIT TRIP:</h1>
                <EditTripForm
                    currentUser={this.props.currentUser}
                    currentTrip={this.props.currentTrip}
                    routerProps={this.props.routerProps}
                    handleEditTrip={() => this.props.handleEditTrip} />
            </div>
        )
    }
}
