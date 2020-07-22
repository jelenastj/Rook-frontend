import React, { Component } from 'react';
import NavBar from './NavBar'
import TripCollection from './TripCollection';
import GearCollection from "./GearCollection"
import UserPage from './UserPage';
import CreateTrip from './CreateTrip';
import TripCurrent from "./TripCurrent"
import TripItemTop from "./TripsItemTop"
import GearPacked from './GearPacked';



export default class Trip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trips: [],
            gears: [],
            currentTrip: ''
        }
    }
    componentDidMount() {
        const user_id = this.props.currentUser.id;
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

    currentTrip = (trip) => {
    this.setState({currentTrip: trip})
    }


    render() {
        //console.log(this.state.currentTrip)

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
                        handleClick={this.currentTrip} />
                        </div>
                <div className="trip-layout">
                    <div className="trip-current">
                    <TripCurrent currentTrip={this.state.currentTrip} />
                    </div>
                    <GearCollection
                        currentUser={this.props.currentUser}
                        gears={this.props.gears} />
                    <GearPacked 
                    currentUser={this.props.currentUser}
                    enlistedgears={this.props.enlistedgears}
                    handleClick={this.props.handleClick}
                    deleteGear={this.props.deleteGear}/>    
                </div>

            </div>

        )
    }
}
