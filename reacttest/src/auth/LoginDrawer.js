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
            user: {
                username:'',
                password:''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        // const userName= document.getElementById('username' ).value;
        // const passWord= document.getElementById('password' ).value;
        // console.log(userName);
        // console.log(passWord);
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);

    }
    handleChange(event) {
        const field = event.target.name;
        const user = this.state.user;

        user[field] = event.target.value;

        this.setState({
            user
        })
        //this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="LoginDrawer">
                <form onSubmit={this.handleSubmit}>
                    <p>Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/> </p>
                    <p>Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/> </p>
                    <input type="submit" value="Login"/>
                    <input type="submit" value="Sign-up"/>
                </form>
            </div>
        );
    }
}

export default LoginDrawer;