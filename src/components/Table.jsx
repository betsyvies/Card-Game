import React, { Component } from 'react';
import Cards from '../containers/Card';
import '../css/App.css'

class Table extends Component {
  render() {
    return (
      <div className="flex center-flex container-table">
        <div>
          <Cards />
        </div>
      </div>
    );
  }
}

export default Table;