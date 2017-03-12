/**
 * Created by Robin on 2017-03-12.
 */
import React, { PropTypes } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import LoginPage from './LoginPage';

class LoginDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username:'',
                password:''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        // const userName= document.getElementById('username' ).value;
        // const passWord= document.getElementById('password' ).value;
        // console.log(userName);
        // console.log(passWord);
        event.preventDefault();
        console.log(this.state.user.username);
        console.log(this.state.user.password);

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
            <LoginPage
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                user={this.state.user}
            />
        );
    }
}

export default LoginDrawer;