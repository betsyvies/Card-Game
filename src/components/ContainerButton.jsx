import React, { Component } from 'react';
import Button from './ButtonChange';
import '../css/App.css'

class ContainerButton extends Component {
  render() {
    return (
      <div className="container-button flex">
        <Button/>
        <p className="text">Barajar</p>
      </div>
    );
  }
}

export default ContainerButton;