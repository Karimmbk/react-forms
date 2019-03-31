import React, { Component } from 'react';
import './App.css';
import SocialContainer from './SocialContainer';
import Overlay from './Overlay';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faGoogle, faLinkedinIn);

class App extends Component {
  state = {
    left: true
  };

  handleClick = () => {
    this.setState({ left: !this.state.left });
  };
  settime;
  render() {
    return (
      <div
        className={`container ${this.state.left ? ' ' : 'right-panel-active'}`}
      >
        <SocialContainer
          left={this.state.left}
          handleClick={this.handleClick}
        />
        <Overlay left={this.state.left} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
