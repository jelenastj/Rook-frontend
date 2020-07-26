import React, { Component } from 'react';
import NavBar from './NavBar'
import TripCollection from './TripCollection';
import GearCollection from "./GearCollection"
import TripCurrent from "./TripCurrent"
import GearPacked from './GearPacked';
import { IconName } from "react-icons/ai";



export default class Trip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trips: [],
        }
    }
    componentDidMount() {

        fetch(`http://localhost:3000/api/v1/trips`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => response.json())
            .then((trips) => {
                this.setState({ trips });
                let userTrips = trips.filter((trip) => trip.user_id === this.props.currentUser.id);
                if (userTrips && userTrips.length > 0) {
                    this.props.setCurrentTrip(userTrips[0]);
                }
            })
    }

    handleAddTrip = (trip) => {
        this.setState({
            trips: [...this.state.trips]
        });
    };

    render() {

        return (
            <div className="trip-all">
                <NavBar
                    currentUser={this.props.currentUser}
                    handleLogout={this.props.handleLogout}
                    routerProps={this.props.routerProps} />
                <div>
                    <TripCollection
                        trips={this.state.trips}
                        handleAddTrip={this.handleAddTrip}
                        currentUser={this.props.currentUser}
                        handleClick={this.props.setCurrentTrip}
                    />
                </div>


                <div className="trip-layout">
                    <div className="trip-current">
                        <TripCurrent
                            showCurrentTrip={this.props.showCurrentTrip}
                            trips={this.state.trips}/>
                    </div>
                        <GearCollection
                            currentUser={this.props.currentUser}
                            gears={this.props.gears}
                            handleClick={this.props.addToGearPack} />
                        <GearPacked
                            showCurrentTrip={this.props.showCurrentTrip}
                            currentUser={this.props.currentUser}
                            handleClick={this.props.handleClick}
                            deleteGear={this.props.deleteGear} />
                 </div>
            </div>

        )
    }
}
