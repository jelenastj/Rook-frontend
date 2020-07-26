import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            email: ""
        }
    }


    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    };


    createUser = (event) => {
        event.preventDefault()
        event.target.reset()
        const { username, email, password } = this.state

        let user = {
            username: username,
            email: email,
            password: password
        }

        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ user })
        })
            .then(r => r.json())
            .then(response => {
                if (response.user) {
                    localStorage.setItem("token", response.jwt);
                    this.props.handleLogin(response.user);
                }
            })
        }
    
    render() {
        return (
            <form onSubmit={this.createUser}>
                <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
                
        );
    }
}

export default withRouter(SignUp);