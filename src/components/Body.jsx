import React, { Component } from 'react';
import Header from './Header';
import Table from './Table';
import '../css/App.css'

class Body extends Component {
	render() {
		return (
			<div className="body">
				<Header />
				<Table />
			</div>
		);
	}
}

export default Body;