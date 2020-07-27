import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="home-panels home-panel-1">
                <div>
                    <Link to="/login" className="link-to">Login</Link>
                    <Link to="/signup" className="link-to">SignUp</Link>

                </div>
                <div className="landing-page-title">
                    <span >rook</span>
                </div>
            </div>
        );
    }
}

export default Home;