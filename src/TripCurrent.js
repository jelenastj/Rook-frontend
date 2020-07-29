import React from 'react';
import { withRouter } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";



class TripCurrent extends React.Component {
   

    getParsedDate(strDate){
        var strSplitDate = String(strDate).split(' ');
        var date = new Date(strSplitDate[0]);
        // alert(date);
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!
    
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        date =  mm + "-" + dd + "-" + yyyy;
        return date.toString();
    }

    
    render() {
        let gears = this.props.showCurrentTrip.gears

        console.log(gears)
        return (
            <div>

                <button className="edit-btn"
                    onClick={() => this.props.history.push("/edittrip")}>
                    < AiFillEdit></AiFillEdit>
                        Edit
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
                            {gears.reduce((sum, i) => (sum += i.weight), 0)} oz</span>
                        </p>
                    }
                </div>
                <div className="location-display">
                    
                </div>
                <div className="notes-display">
                COMMENTS: {this.props.showCurrentTrip.notes}
                </div>
            </div>
        )
    }
}
export default withRouter(TripCurrent);