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
        const userName= document.getElementById('username' ).value;
        const passWord= document.getElementById('password' ).value;
        console.log(userName);
        console.log(passWord);
        // console.log('A name was submitted: ' + this.state.username);
        // console.log('A password was submitted: ' + this.state.password);
        event.preventDefault();
    }
    handleChange(event) {
        //const target = event.target;
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="LoginDrawer">
                <form onSubmit={this.handleSubmit}>
                <p>Username: <input type="text" name="username" id="username"/> </p>
                <p>Password: <input type="password" name="password" id="password"/> </p>
                <input type="submit" value="Login" onChange={this.handleSubmit}/>
                <input type="submit" value="Sign-up"/>
                </form>
            </div>
        );
    }
}

export default LoginDrawer;