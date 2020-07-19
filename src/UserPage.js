import React, { Component } from 'react'
import NavBar from './NavBar'
import { Link } from "react-router-dom";
import CreateTrip from './CreateTrip'
export default class UserPage extends Component {

    state = {
        trips: []
    };

    componentDidMount() {
        const user_id = this.props.currentUser.id;
        //fetch(`http://localhost:3001/api/v1/trips/${user_id}`, {
        fetch(`http://localhost:3000/api/v1/trips`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => response.json())
            .then((data) =>
                console.log(data))
    }


    handleAddTrip = (trip) => {
        fetch("http://localhost:3000/api/v1/trips", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(trip),
        })
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    trips: [...this.state.trips]
                });
            });
    };

    render() {
        let currentUser = this.props.currentUser;
        return (
            <div className="user-page">
                <div>
                    <NavBar />
                    <CreateTrip handleAddTrip={this.handleAddTrip} />
                    <div className="welcome-user">
                        Hello {currentUser.username}, your next trip is:
                 </div>

                    <div className="next-trip">
                        {this.props.currentUser.trips}
                    </div>

                    {/* <div className="total-trips">
                    You have {totaltrips} trips!
                </div> */}
                    <Link to="/createtrip" className="link-to-trip" >Add Trip</Link>
                </div>
            </div>


        )
    }
}
