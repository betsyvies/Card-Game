import React, { Component } from 'react';
import Card from './Card';
import '../css/App.css'

class Table extends Component {
	render() {
		return (
      <div className="flex center-flex container-table">
        <Card/>
      </div>
		);
	}
}

export default Table;