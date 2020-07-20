import React, { Component } from 'react';
import NavBar from './NavBar'
import TripCollection from './TripCollection';
import GearCollection from "./GearCollection"
import UserPage from './UserPage';
import CreateTrip from './CreateTrip';

export default class Trip extends Component {
    constructor() {
        super()
        this.state = {
            trips: [],
            gears: [],
        }
    }

    componentDidMount() {
        const user_id = this.props.currentUser.id;
        fetch(`http://localhost:3000/api/v1/trips/${user_id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => response.json())
            .then((trips) =>
                this.setState({ trips }))
    }


    handleAddTrip = (trip) => {
                this.setState({
                    trips: [...this.state.trips]
                });
    };
    // componentDidMount() {
    //     const user_id = this.props.currentUser.id;
    //     fetch(`http://localhost:3000/api/v1/gears/${user_id}`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //         .then((response) => response.json())
    //         .then((gears) =>
    //             this.setState({ gears }))
    // }


    // handleAddGear = (gear) => {
    //     const user_id = this.props.currentUser.id;
    //     fetch(`http://localhost:3000/api/v1/gears/${user_id}`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //             Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //         body: JSON.stringify(gear),
    //     })
    //         .then((response) => response.json())
    //         .then((gears) => {
    //             this.setState({
    //                 gears: [...this.state.gears]
    //             });
    //         });
    // };



    render() {

        return (
            <div className="trip-all">
                <NavBar
                    currentUser={this.props.currentUser}
                    handleLogout={this.props.handleLogout}
                    routerProps={this.props.routerProps} />
                <TripCollection
                    trips={this.state.trips}
                    handleAddTrip={this.handleAddTrip} />
                <GearCollection
                    gears={this.state.gears}
                    handleAddGear={this.handleAddGear} />
                    {/* <UserPage /> */}
                    {/* <CreateTrip /> */}
            </div>

        )
    }
}
