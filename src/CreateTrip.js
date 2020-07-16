import React, { Component } from 'react'

export default class CreateTrip extends Component {
    state ={
        trip_id: null,
        name: '',
        location: '',
        description: '',
        start_date: "",
        end_date: ""
    }


    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event)=> {

    }

    render() {
        return (
            <div className="hover-forms">
               
                <button id="cancelEdit" onClick={() => console.log()}>Cancel</button>

                <hr />
               
                <div className="centerForm">
                    <form onSubmit={this.handleSubmit}>
                        <p><label>Trip name: <br /><input type="text" name="trip" value={this.state.name} placeholder="trip" onChange={this.handleChange} /></label></p>
                        <p><label>Location: <br /><input type="text" name="location" value={this.state.location} placeholder="location" onChange={this.handleChange} /></label></p>
                        <p><label>Description: <br /><textarea name="description" value={this.state.description} placeholder="description" onChange={this.handleChange} /></label></p>
                       
                        <input type="submit" value="submit" />
                    </form>
                </div>
                </div>
        )
    }
}
