import React, { Component } from 'react'
// import { Form } from "react-bootstrap";
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import 'react-calendar/dist/Calendar.css';


export default class EditTripForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trip_id: this.props.currentTrip.id,
            location: this.props.currentTrip.location,
            notes:this.props.currentTrip.description,
            date: [new Date(), new Date()] //[new Date(), new Date()],
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
        const trip = {
            user_id: this.props.currentUser.id,
            location: this.state.location,
            notes: this.state.notes,
            start_date: this.state.date[0],
            end_date: this.state.date[1]
        }
        console.log(trip)
        fetch(`http://localhost:3000/api/v1/trips/${this.state.trip_id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({trip}),
        })
            .then((response) => response.json())
            .catch(errors => console.log(errors))
        // .then((trip) =>
        //     this.setState({
        //         user_id: this.props.currentUser.id,
        //         location: this.state.location,
        //         notes: this.state.description,
        //         start_date: this.state.date[0],
        //         end_date: this.state.date[1]
        //     }, () => this.props.history.push("/trip")))
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
                            name="notes"
                            className='add-description'
                            value={this.state.notes}
                            onChange={this.handleChange}
                            placeholder={this.props.currentTrip.notes}
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