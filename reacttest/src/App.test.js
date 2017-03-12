import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import loginDrawer from './auth/loginDrawer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
