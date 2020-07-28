import React, { Component } from 'react'
import TripItem from './TripItem'

export default class TripCollection extends Component {


    render() {
        const id = this.props.currentUser.id;
        const trips = this.props.trips.filter((trip) => trip.user_id === id)

        return (
            <div className="wrapper">
                <div className='single-trip'>
                    {trips === 0}
                    {trips.map((trip) => <TripItem key={trip.id} trip={trip} handleClick={this.props.handleClick} />
                    )}
                </div>
            </div>
        )
    }
}
