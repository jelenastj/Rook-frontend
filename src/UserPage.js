import React, { Component } from 'react'
import NavBar from './NavBar'

export default class UserPage extends Component {
    state = {
        trips: [],
      
      };
    
   
    

    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>

                {/* // <div className="welcome-user">
            //     Hello {this.props.currentUser.name}, your nex trip is:
            // </div>

            // <div className="next-trip">
            //      {this.props.currentUser.trip}
            // </div> */}

                {/* <div className="total-trips">
                    You have {totaltrips} trips!
                </div> */}
                <button className="button-primary"> Add Trip</button>

            </div>

        )
    }
}
