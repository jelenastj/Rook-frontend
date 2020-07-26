import React from 'react';

const TripItem = (props) => {
    return (
        <div className="trips-top" key={props.trip.id}
        onClick={() => props.handleClick(props.trip)}>
           
           <h1 className="location"> {props.trip.location}</h1>
            {/* <p>Notes: {props.trip.notes}</p>
            <p>Start Date: {props.trip.start_date}</p>
            <p>End Date: {props.trip.end_date}</p> */}
        </div>
    )
}
export default TripItem