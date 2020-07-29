import React, { Component } from 'react'
import { Form, Row, Col, Button } from "react-bootstrap";
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import 'react-calendar/dist/Calendar.css';
import { withRouter } from "react-router-dom";

class CreateTripForm extends Component {
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

  addTrip = (event) => {
    event.preventDefault();
    const trip = {
      user_id: this.props.currentUser.id,
      location: this.state.location,
      notes: this.state.description,
      start_date: this.state.date[0],
      end_date: this.state.date[1]
    }
    fetch(`http://localhost:3000/api/v1/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(trip),
    }).then(r => r.json())
      .then(data => {
        console.log(data)
      })
    // this.props.handleAddTrip(trip);

    this.setState({
      location: "",
      description: "",
      date: "",
    }, () => this.props.history.push("/trip"));

  };

  render() {

    return (

      <div className="add-trip">
        {/* <button id="cancelEdit" onClick={() => console.log()}>Cancel</button> */}
        <h1 className="add-trip">ADD NEW TRIP</h1>
        <Form className="add-trip-form">
          <Form.Group as={Row} >
            <Form.Label column sm={2}>
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                placeholder="Location"
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            </Form.Label >
            <Col sm={10}>

              <Form.Control
                placeholder="Description"
                cols="30" rows="5"
                resize="none"
                name="description"
                className='add-description'
                value={this.state.description}
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>

            </Form.Label>
            <Col sm={10}>
              <DateRangePicker
                name="date"
                onChange={this.onChange}
                value={this.state.date}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>

            </Form.Label>
            <Col sm={10}>

              <Button className='button-primary' onClick={this.addTrip}>Add</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default withRouter(CreateTripForm);