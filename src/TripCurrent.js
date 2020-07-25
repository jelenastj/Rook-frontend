import React from 'react'

const TripCurrent = (props)=> {
    
    return (
        <div className="current-trip">
            <div className="current-trip-title">
                CURRENT TRIP</div>
            <button className="edit-btn" onClick={()=> console.log('clicking')}>Edit</button>
            <p>{props.showCurrentTrip.location}</p>
            <p>Date: 
                {props.showCurrentTrip.start_date}-{props.showCurrentTrip.end_date}
            </p> 
        </div>
    )
}
export default TripCurrent;