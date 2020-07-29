import React, { Component } from 'react'
import CreateTripForm from "./CreateTripForm"

export default class CreateTrip extends Component {

    render() {
        
        return (
            <div className="add-trip-bg">
             
                <CreateTripForm
                    currentUser={this.props.currentUser}
                    routerProps={this.props.routerProps}
                    handleAddTrip={() => this.props.handleAddTrip} />
            </div>
        )
    }
}
