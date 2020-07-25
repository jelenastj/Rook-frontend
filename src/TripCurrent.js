import React from 'react';
import { withRouter } from "react-router-dom";

class TripCurrent extends React.Component {
    render() {
        return (
            <div className="current-trip">
                <div className="current-trip-title">
                    CURRENT TRIP</div>
                <button className="edit-btn" onClick={()=> this.props.history.push("/edittrip")}>Edit</button>
                <p>{this.props.showCurrentTrip.location}</p>
                <p>Date: 
                    {this.props.showCurrentTrip.start_date}-{this.props.showCurrentTrip.end_date}
                </p> 
            </div>
        )
    }
}
export default withRouter(TripCurrent);