import React from 'react'

const TripCurrent = (props)=> {
    return (
        <div>
            <div className="current-trip-title">Current Trip</div>
            <p>{props.currentTrip.location}</p>
            <p>Date: {props.currentTrip.start_date}- <p>{props.currentTrip.start_date}</p>`</p> 
        </div>
    )
}
export default TripCurrent;