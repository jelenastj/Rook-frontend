import React from 'react';

const TripItemTop = (props) => {
    return (
        <div className="single-trip">
            <p>{props.trip.location}</p>
           
        </div>
    )
}
export default TripItemTop