import React, { Component } from 'react';
import ContainerCounter from './ContainerCounter';
import ContainerButton from './ContainerButton';
import '../css/App.css'

class Header extends Component {
  render() {
    return (
      <div className="header flex center-flex">
        <ContainerButton/>
        <ContainerCounter/>
      </div>
    );
  }
}

export default Header;