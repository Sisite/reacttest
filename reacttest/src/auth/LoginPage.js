/**
 * Created by Robin on 2017-03-12.
 */
import React, { Component } from 'react';
import React, { PropTypes } from 'react';

const LoginForm = ({
    onSubmit,
    onChange,
}) => (
    <div className="LoginDrawer">
        <form onSubmit={this.handleSubmit}>
            <p>Username: <input type="text" name="username" value={user.username} onChange={onChange}/> </p>
            <p>Password: <input type="password" name="password" value={user.password} onChange={onChange}/> </p>
            <input type="submit" value="Login"/>
            <input type="submit" value="Sign-up"/>
        </form>
    </div>


);