import React, { Component } from 'react';
import Reload from '../assets/images/others/reload.svg';
import '../css/App.css'

class Button extends Component {
  render() {
    return (
      <div className="button">
        <img src={Reload} alt="icon-reload" className="icon-reload"/>
      </div>
    );
  }
}

export default Button;