import React, { Component } from 'react';
import Header from './Header';
import Table from './Table';
import '../css/App.css'

class Body extends Component {
	render() {
		const { onGetIdCard, ids } = this.props
		return (
			<div className="body">
			  <Header/>
			  <Table onGetIdCard={onGetIdCard} ids={ids} />
			</div>
		);
	}
}

export default Body;