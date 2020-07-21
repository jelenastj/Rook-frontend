import React, { Component } from 'react'
import NavBar from './NavBar'
import { Link } from "react-router-dom";
import CreateTrip from './CreateTrip'
import Trip from './Trip'
export default class UserPage extends Component {

    state = {
        trips: []
    };



    

    render() {
        console.log(this.props.currentUser)
        let currentUser = this.props.currentUser;
        let total = this.state.trips.length
        // console.log(this.state.trips)
        return (
            <div className="user-page">
                <div>
                    <NavBar
                        currentUser={this.props.currentUser}
                        handleLogout={this.props.handleLogout}
                        routerProps={this.props.routerProps}
                    />
                    <div className="welcome-user">
                        Hello {currentUser.username}, your next trip is: {this.state.trips.location}
                    </div>

                    {/* <div className="next-trip">
                         {this.props.currentUser.trips.map((trip) => {
                           return(
                           <Trip trip={trip.location}/>)
                        })} 
                    </div> */}

                    <div className="total-trips">
                        You have {total}trips!

                </div>
                    <Link to="/createtrip" className="link-to-trip" >Add Trip</Link>
                    {/* <CreateTrip /> */}
                </div>


            </div>


        )
    }
}
