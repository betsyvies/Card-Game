import React, { Component } from 'react';
import Card from './Cards';
import '../css/App.css'

const cards = [{value: 1}, {value: 2}]

class Table extends Component {
	render() {
    const { onGetIdCard, ids } = this.props
		return (
      <div className="flex center-flex container-table">
        <div>
          {cards.map(e => <Card key={e.value} onGetIdCard={onGetIdCard} ids={ids} />)}
        </div>
      </div>
		);
	}
}

export default Table;