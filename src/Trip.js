import React, { Component } from 'react';
import NavBar from './NavBar'
import TripCollection from './TripCollection';
import GearCollection from "./GearCollection"
import TripCurrent from "./TripCurrent"
import GearPacked from './GearPacked';



export default class Trip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trips: [],
            gears: [],
            currentTrip: {}
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
            .then((trips) =>
                this.setState({ trips }))
    }


    handleAddTrip = (trip) => {
        this.setState({
            trips: [...this.state.trips]
        });
    };

    render() {
        //console.log(this.state.currentTrip)
        // console.log(this.state.currentTrip.gears)
        console.log(this.state.gears)
        return (
            <div className="trip-all">
                <NavBar
                    currentUser={this.props.currentUser}
                    handleLogout={this.props.handleLogout}
                    routerProps={this.props.routerProps} />
                <div className={"trips-top"}>
                    <TripCollection
                        trips={this.state.trips}
                        handleAddTrip={this.handleAddTrip}
                        currentUser={this.props.currentUser}
                        handleClick={this.props.currentTrip}
                        currentTrip={this.props.currentTrip} />
                </div>
                <div className="trip-layout">
                    <div className="trip-current">
                        <TripCurrent
                            showCurrentTrip={this.props.showCurrentTrip}
                            // enlistedgears={this.props.enlistedgears}
                            tripgears={this.props.tripgears}
                        />
                    </div>
                    <GearCollection
                        currentUser={this.props.currentUser}
                        gears={this.props.gears}
                        handleClick={this.props.addToGearPack} />
                    <GearPacked
                        currentUser={this.props.currentUser}
                        //enlistedgears={this.props.enlistedgears}
                        handleClick={this.props.handleClick}
                        deleteGear={this.props.deleteGear}
                        tripgears={this.props.tripgears} />
                </div>

            </div>

        )
    }
}
