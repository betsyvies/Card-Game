import React, { Component } from 'react';
import '../../css/App.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
  }

  onClickId = id => {
    const { onGetIdCard, ids, data } = this.props

    this.setState({ disabled: true })

    if (ids.length < 2) {
      ids.push(id)
      onGetIdCard(ids)
      console.log(id)
    }
    this.compIdCard(ids, data)
  }

  compIdCard = (ids, data) => {
    if (ids.length === 2) {
      if (ids[0] == ids[1]) {
        console.log(data)
      }
    }
  }

  /*ShowCard = () => {
    
  }*/

  render() {
    const { disabled } = this.state;
    const { data } = this.props
    return (
      <button onClick={(e) => {this.onClickId(data.id)}} className="button-card" disabled={disabled}>
        <img src={data.image}/>
      </button>
    );
  }
}

export default Card;