import React, { Component } from 'react'
// import { Form } from "react-bootstrap";
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import 'react-calendar/dist/Calendar.css';

export default class CreateTripForm extends Component {
  constructor(props){
    super(props)
    this.state ={
        trip_id: null,
        location: '',
        description: '',
        date: [new Date(), new Date()],
    }
  }
      
    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onChange = (date) => {
      this.setState({ date })
    }

    addTrip = (event) => {
        event.preventDefault();
        const trip = {
          location: this.state.location,
          description: this.state.description,
          date: this.state.date
        }
        fetch(`http://localhost:3000/api/v1/trips`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(trip),
        })
        this.props.handleAddTrip(trip);
        
        
        this.setState({
          location: "",
          description: "",
          date: "",
        });
       
      };

    render() {
        
        return (
            
            <div className='add-trip'>
                {/* <button id="cancelEdit" onClick={() => console.log()}>Cancel</button> */}

          <form>
          {/* <label>
             Trip Name
              <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
             />  
             </label> */}
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
                    onChange={this.onChange}
                    value={this.state.date}

                />
            </div>
           
          </form>
          <button className='button-primary' onClick={this.addTrip}>Add</button>
        </div>
    );
  }
}