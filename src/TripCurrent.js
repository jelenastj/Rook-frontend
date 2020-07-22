import React from 'react'

const TripCurrent = (props)=> {
    return (
        <div>
            <h3>Current Trip</h3>
            <p>{props.currentTrip.location}</p>
            <p>Date: {props.currentTrip.start_date}- <p>{props.currentTrip.start_date}</p>`</p> 
        </div>
    )
}
export default TripCurrent;