import React from 'react';
import { withRouter } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";

class TripCurrent extends React.Component {
    render() {
        return (
            <div className="current-trip">

                <button className="edit-btn" 
                onClick={() => this.props.history.push("/edittrip")}>
                    
                    < AiFillEdit>x</AiFillEdit>      Edit</button>

                <h2 className="trips-top">{this.props.showCurrentTrip.location}</h2>

                <p>
                    {this.props.showCurrentTrip.start_date}-{this.props.showCurrentTrip.end_date}
                </p>
            </div>
        )
    }
}
export default withRouter(TripCurrent);