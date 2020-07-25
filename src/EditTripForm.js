import React, { Component } from 'react'
// import { Form } from "react-bootstrap";
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import 'react-calendar/dist/Calendar.css';


export default class EditTripForm extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.currentTrip);
        this.state = {
            trip_id: this.props.currentTrip.id,
            location: this.props.currentTrip.location,
            description: this.props.currentTrip.notes,
            date: [new Date(this.props.currentTrip.start_date), new Date(this.props.currentTrip.end_date)] //[new Date(), new Date()],
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

    editTrip = () => {
        fetch(`http://localhost:3000/api/v1/trips/${this.state.trip_id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                user_id: this.props.currentUser.id,
                location: this.state.location,
                notes: this.state.description,
                start_date: this.state.date[0],
                end_date: this.state.date[1]
            }),
        })
            .then((response) => response.json())
            .then((trip) =>
                this.setState({
                    user_id: this.props.currentUser.id,
                    location: this.state.location,
                    notes: this.state.description,
                    start_date: this.state.date[0],
                    end_date: this.state.date[1]
                }, () => this.props.history.push("/trip")))
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
                <button className='button-primary' onClick={this.editTrip}>Save</button>
            </div>
        );
    }
}