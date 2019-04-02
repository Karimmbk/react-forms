import React, { Component } from 'react';
import './App.css';

class Overlay extends Component {
  render() {
    // puxando a funcao handleClick da app.js para ser usada aqui
    const { handleClick } = this.props;
    return (
      // overlay q tem dois textos conforme o sign in e o sign up
      // as transformacoes estao sendo feitas em css puro
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            {/* quando clicando no botao chama a funcao para mudar o state de left */}
            <button onClick={handleClick} className="ghost" id="signIn">
              Sign In
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>Hello Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            {/* quando clicando no botao chama a funcao para mudar o state de left */}
            <button onClick={handleClick} className="ghost" id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Overlay;
