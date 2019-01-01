import React, { Component } from 'react';
import CardShadow from './CardShadow';
import data from '../../data';
import '../../css/App.css'

const cards = [{value: 1}, {value: 2}, {value: 3}, {value: 4}]

class ShowCard extends Component {
  onClickId = (id) => {
    const { onGetIdCard, ids } = this.props
    
    ids.push(id)
    onGetIdCard(ids)
  }

  render() {
    return (
      <div className="flex center-flex">
        {data.map(e => {
          return e.value.map(elem => <img key={elem.id} src={elem.image} onClick={(e) => {this.onClickId(elem.id)}} className="image-card"/>)
        })}
      </div>
    );
  }
}

export default ShowCard;