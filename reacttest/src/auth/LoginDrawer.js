/**
 * Created by Robin on 2017-03-12.
 */
import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';

class LoginDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username);
        alert('A password was submitted: ' + this.state.password);
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div className="LoginDrawer">
                <form onSubmit={this.handleSubmit}>
                <p>Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/> </p>
                <p>Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/> </p>
                <input type="submit" value="Login"/>
                <input type="submit" value="Sign-up"/>
                </form>
            </div>
        );
    }
}

export default LoginDrawer;