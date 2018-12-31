import React, { Component } from 'react';
import Counter from './Counter';
import Card from '../assets/images/others/cards.svg';
import '../css/App.css'

class ContainerButton extends Component {
  render() {
    return (
      <div className="container-counter flex center-flex">
        <div className="container-image-card flex">
          <img src={Card} alt="icon-card" className="container-icon"/>
          <p className="text">Pares:</p>
        </div>
        <Counter/>
      </div>
    );
  }
}

export default ContainerButton;