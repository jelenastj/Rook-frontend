import React, { Component } from 'react'
import CreateTrip from "./CreateTrip"

export default class TripCollection extends Component {
    render() {
        console.log(this.props.trips)
        return (
            <div>
                {this.props.trips.location}
                
            </div>
        )
    }
}
