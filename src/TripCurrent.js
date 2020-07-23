import React from 'react'

const TripCurrent = (props)=> {
    return (
        <div>
            <div className="current-trip-title">
                CURRENT TRIP</div>
            <p>{props.showCurrentTrip.location}</p>
            <p>Date: 
                {props.showCurrentTrip.start_date}-{props.showCurrentTrip.start_date}</p> 
        </div>
    )
}
export default TripCurrent;