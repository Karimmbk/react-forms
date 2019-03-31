import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialContainer extends Component {
  render() {
    const { left } = this.props;
    return (
      <div className="form-container sign-up-container">
        <form action="#">
          {!left ? <h1>Create Account</h1> : <h1>Sign in</h1>}
          <div className="social-container">
            <a href="http://localhost:3000/" className="social">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a href="http://localhost:3000/" className="social">
              <FontAwesomeIcon icon={['fab', 'google']} />
            </a>
            <a href="http://localhost:3000/" className="social">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
          </div>
          {!left ? (
            <div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </div>
          ) : (
            <div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="http://localhost:3000/" className="forgot">
                Forgot your password?
              </a>
              <button>Sign In</button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default SocialContainer;
