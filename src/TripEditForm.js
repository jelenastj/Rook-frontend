import React, { Component } from 'react'
// import { Form } from "react-bootstrap";
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import 'react-calendar/dist/Calendar.css';


export default class TripEditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trip_id: null,
            location: '',
            description: '',
            date: [new Date(), new Date()],
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onChange = (date) => {
        this.setState({ date })
    }

    editTrip = (trip) => {
        fetch(`http://localhost:3000/api/v1/trips/${trip.id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => response.json())
            .then((trip) =>
                this.setState({
                    user_id: this.props.currentUser.id,
                    location: this.state.location,
                    notes: this.state.description,
                    start_date: this.state.date[0],
                    end_date: this.state.date[1]
                }))
    }

    render() {

        return (

            <div className='add-trip'>
                {/* <button id="cancelEdit" onClick={() => console.log()}>Cancel</button> */}

                <form>
                    <label>
                        <span>Location</span>
                        <input
                            type="text"
                            name="location"
                            value={this.state.location}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Description
              <textarea
                            name="description"
                            className='add-description'
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </label>

                    <div>
                        <DateRangePicker
                            name="date"
                            format='yyyy-MM-dd'
                            onChange={this.onChange}
                            value={this.state.date}

                        />
                    </div>

                </form>
                <button className='button-primary' onClick={this.addTrip}>Save</button>
            </div>
        );
    }
}