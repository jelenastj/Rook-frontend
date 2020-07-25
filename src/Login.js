import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
  

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    };

    login = (event) => {
        event.preventDefault();
        event.target.reset();

        const { username, password } = this.state;
        
        const user = { username, password };
        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user })
        })
            .then(r => r.json())
            .then(response => {
                // The token below will be used as a header for Authorization in your fetches
                // If you look in application controller we are requesting the header Authorization
                // Once it is recieved the token is decrypted and access to data is granted

                if (response.user) {
                    localStorage.setItem("token", response.jwt);
                    this.props.handleLogin(response.user);
                    
                }
            })
           
            
    }


render() {
    return (
        <div className="login-page">
        <div className="container">
            <h2>Please log into your account</h2>
            <form ref="myForm" className="form" action="/userpage" onSubmit={this.login}>
                <fieldset  className="form-fieldset ui-input __first">
                    <input type="text" id="username" tabIndex="0" name="username" onChange={this.handleChange} />
                    <label htmlFor="username">
                    <span data-text="Username">Username</span>
                        </label>
                </fieldset>
                <fieldset className="form-fieldset ui-input __third">
                    <input type="password" id="new-password" name="password"
                        onChange={this.handleChange} />
                    <label htmlFor="new-password">
                        <span data-text="New Password">New Password</span>
                        </label>
                </fieldset>
                    <div className="form-footer">
                    <button className="btn" type="submit">Submit</button>
                    </div>
            </form>
        </div>
        </div>
    );
}
}

export default Login;