import React, { Component } from 'react';
import './App.css';

class Overlay extends Component {
  render() {
    return (
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              onClick={this.props.handleClick}
              className="ghost"
              id="signIn"
            >
              Sign In
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>Hello Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              onClick={this.props.handleClick}
              className="ghost"
              id="signUp"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Overlay;
