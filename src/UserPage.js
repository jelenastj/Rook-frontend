import React, { Component } from 'react'
import NavBar from './NavBar'
import { Link } from "react-router-dom";
import './App.css';
export default class UserPage extends Component {
    
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
                this.setState({ trips: trips.filter((trip) => trip.user_id === this.props.currentUser.id) });
            });

        // () => this.props.history.push("/userpage");
    }
    

    render() {
        let currentUser = this.props.currentUser;
        let total = this.state.trips.length
    
        return (
            <div className="user-page">
                <div>
                    <NavBar
                        currentUser={this.props.currentUser}
                        handleLogout={this.props.handleLogout}
                        routerProps={this.props.routerProps}
                    />
                    {total.length === 0
                        ?
                        <div className="welcome-user">
                            Hello {currentUser.username}, you don't have any trips yet.
                    </div> :
                        <div className="welcome-user">
                            Hello,
                            <span className="welcome" data-shadow-text="Text-Shadow"> 
                            {currentUser.username} </span>,
                            <br></br>
                            you have 
                            <span className="welcome" data-shadow-text="Text-Shadow">
                                <Link to="/trip"
                                 style={{ color: 'inherit', textDecoration: 'inherit' }}>{total}
                                 </Link></span> 
                            trips!
                    </div>
                    }

                    <div className="links-container">
                        <Link to="/createtrip" className="link-to-trip" >Add Trip</Link>
                        <Link to="/addgear" className="link-to-trip" >Add gear</Link>
                    </div>
                </div>
            </div >


        )
    }
}
