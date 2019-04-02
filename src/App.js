import React, { Component } from 'react';
import './App.css';
// chamando o componente
import SocialContainer from './SocialContainer';
// chamando o componente
import Overlay from './Overlay';
// importando lib para renderizar os icones q estao em formato de fonte
import { library } from '@fortawesome/fontawesome-svg-core';
// importando os icones para serem usados
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF, faGoogle, faLinkedinIn);

class App extends Component {
  // definindo um state para ver em qual forms estar
  state = {
    left: true
  };

  // funcao para mudar o state com o click no botao
  handleClick = () => {
    this.setState({ left: !this.state.left });
  };
  render() {
    const { left } = this.state;
    return (
      <div
        // add e removendo uma classe do container para fazer o efeito de troca de forms
        className={`container ${this.state.left ? ' ' : 'right-panel-active'}`}
      >
        {/* puxando componente com forms de sign in e sign up */}
        <SocialContainer left={left} handleClick={this.handleClick} />
        {/* puxando componente de overlay q muda o background */}
        <Overlay left={left} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
