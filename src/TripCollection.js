import React, { Component } from 'react'
import TripItem from './TripItem'

export default class TripCollection extends Component {
    render() {
        console.log(this.props.trips)
        return (
            <div>
                {/* {this.props.trips.map((trip)=>{
                   return <TripItem key ={trip.id} trip={trip}/>
                })} */}
                
            </div>
        )
    }
}
