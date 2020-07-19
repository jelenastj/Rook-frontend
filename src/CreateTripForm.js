import React, { Component } from 'react'
// import { Form } from "react-bootstrap";
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import 'react-calendar/dist/Calendar.css';

export default class CreateTripForm extends Component {
  constructor(props){
    super(props)
    this.state ={
        trip_id: null,
        user_id:"",
        name: '',
        location: '',
        description: '',
        date: [new Date(), new Date()],
    }
  }
    componentDidMount() {
        this.setState({
          user_id: this.props.currentUser.id,
          
        });
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
          name: this.state.name,
          location: this.state.location,
          description: this.state.description,
          date: this.state.date
        
        };
        console.log(trip)
    
        this.props.handleAddTrip(trip);
        
        this.setState({
          name: "",
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
          <label>
             Trip Name
              <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
             />  
             </label>
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
          <button className='button-primary' onClick={this.addTrip}>Add Trip</button>
        </div>
    );
  }
}