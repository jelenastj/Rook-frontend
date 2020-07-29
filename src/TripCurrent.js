import React from 'react';
import { withRouter } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";



class TripCurrent extends React.Component {


    getParsedDate(strDate) {
        var strSplitDate = String(strDate).split(' ');
        var date = new Date(strSplitDate[0]);
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!

        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        date = mm + "-" + dd + "-" + yyyy;
        return date.toString();
    }
    toPounds(totalWeightoz) {
        const lb = totalWeightoz / 16;
        return lb
    }

    render() {
        let gears = this.props.showCurrentTrip.gears
        return (
            <div>

                <button className="edit-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        this.props.deleteTrip(this.props.showCurrentTrip.id)
                    }
                    }>
                    < AiFillEdit></AiFillEdit>
                        Delete
                </button>

                <p className="location-display">
                    {this.props.showCurrentTrip.location}</p>

                <ul className="date" >

                    <li> < FaPlaneDeparture></FaPlaneDeparture>
                        <span>{this.getParsedDate(this.props.showCurrentTrip.start_date)}</span>
                    </li>

                    <li>< FaPlaneArrival></FaPlaneArrival>
                        <span>{this.getParsedDate(this.props.showCurrentTrip.end_date)}</span>
                    </li>
                </ul>

                <div className='total-weight'>
                    {gears === undefined ?
                        null
                        :
                        <p className="location-display">

                            Pack Weight:

                       <span>
                                {this.toPounds(gears.reduce((sum, i) => (sum += i.weight), 0)).toFixed(2)} LB</span>
                        </p>
                    }
                </div>
                <div className="location-display">

                </div>
                <div className="notes-display">
                    <span> COMMENTS: </span>
                    <br></br>
                    {this.props.showCurrentTrip.notes}
                </div>
            </div>
        )
    }
}
export default withRouter(TripCurrent);