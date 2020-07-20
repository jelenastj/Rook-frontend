import React, { Component } from 'react'
import CreateTrip from "./CreateTrip"

export default class TripCollection extends Component {
    render() {
        return (
            <div>
                <CreateTrip handleAddTrip={this.handleAddTrip}/>
                
            </div>
        )
    }
}
