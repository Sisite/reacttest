/**
 * Created by Robin on 2017-03-12.
 */
import React, { PropTypes } from 'react';
//import React, { Component } from 'react';

const LoginForm = ({
    onSubmit,
    onChange,
    user
}) => (
    <div className="container">
        <form onSubmit={onSubmit}>
            <p>Username: <input type="text" name="username" value={user.username} onChange={onChange}/> </p>
            <p>Password: <input type="password" name="password" value={user.password} onChange={onChange}/> </p>
            <input type="submit" value="Login"/>
            <input type="submit" value="Sign-up"/>
        </form>
    </div>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    user: PropTypes.object.isRequired
};
export default LoginForm;