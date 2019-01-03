import React, { Component } from 'react';
import ContainerCounter from './ContainerCounter';
import Logo from './Logo';
import '../css/App.css'

class Header extends Component {
  render() {
    return (
      <div className="header flex center-flex">
        <Logo />
        <ContainerCounter />
      </div>
    );
  }
}

export default Header;