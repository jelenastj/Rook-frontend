import React from 'react';
import { withRouter } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

class TripCurrent extends React.Component {
    render() {
        return (
            <div>
                <button className="edit-btn"
                    onClick={() => this.props.history.push("/edittrip")}>
                    < AiFillEdit>x</AiFillEdit>
                      Edit
                </button>

                <p className="location-display">
                    {this.props.showCurrentTrip.location}</p>

                <ul className="date" >
                    <li> < FaPlaneDeparture></FaPlaneDeparture>  {this.props.showCurrentTrip.start_date}
                    </li>
                    <li>< FaPlaneArrival></FaPlaneArrival>  {this.props.showCurrentTrip.end_date}
                    </li>
                </ul>

                <div className='total-weight'>
                    <p className="location-display">
                        total weight</p>
                </div>
                <div className="location-display">
                    COMMENTS:
                </div>
                <div className="notes-display">
                    {this.props.showCurrentTrip.notes}
                </div>
            </div>
        )
    }
}
export default withRouter(TripCurrent);