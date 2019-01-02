import React, { Component } from 'react';
import '../css/App.css';

class Counter extends Component {
  render() {
    const { totalCouples } = this.props
    return (
      <div className="counter">
        <p className="number-couples">{totalCouples}</p>
      </div>
    );
  }
}

export default Counter;