import React, { Component } from 'react';
import logo from './logo_white.svg';
import BallBounce from './views/ballbounce.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CodeIt Online Tutor</h1>
        </div>
        <BallBounce />
      </div>
    );
  }
}

export default App;
