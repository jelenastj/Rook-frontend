import React, { Component } from 'react'
import { Form } from "react-bootstrap";

export default class CreateTripForm extends Component {
    state ={
        trip_id: null,
        user_id:"",
        name: '',
        location: '',
        description: '',
        start_date: "",
        end_date: "",
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

    addTrip = (event) => {
        event.preventDefault();
        const trip = {
          trip_id: this.state.trip_id,
          username: this.state.username,
          name: this.state.name,
          loaction: this.state.location,
          start_date: this.state.start_date,
          end_date: this.state.end_date,
        
        };
    
        this.props.handleAddTrip(trip);
        
        this.setState({
          name: "",
          price: "",
          description: "",
          link: "",
          recipient: "",
        });
       
      };

    render() {
        
        return (
            
            <div className='add-trip'>
                {/* <button id="cancelEdit" onClick={() => console.log()}>Cancel</button> */}

          <form>
            <Form.Group>
             Trip
              <Form.Control
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              >  
              </Form.Control>
            </Form.Group>
            <label>
              <span>Location</span>
              <input
                type="number"
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
            
              {/* Calendar */}
           
          </form>
          <button className='button-primary' onClick={this.addTrip}>Add Trip</button>
        </div>
    );
  }
}