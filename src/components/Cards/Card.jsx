import React, { Component } from 'react';
import CardShadow from '../../assets/images/others/card-reverse.png';
import '../../css/App.css'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
  }

  onClickId = id => {
    const { onGetIdCard, ids } = this.props

    if (ids.length < 2) {
      ids.push(id)
      onGetIdCard(ids)
      this.setState({ disabled: true })
    }
    this.compIdCard(ids)
  }

  compIdCard = (ids) => {
    const { dataAll, onChangeData, onGetIdCard } = this.props;
    
    let idCard = ids[0].slice(0, ids[0].length-1)
    if (ids.length === 2) {
      let idCardPar = ids[1].slice(0, ids[1].length-1)
      if (idCard === idCardPar) {
        this.deletePosData(ids, dataAll, onChangeData)
        this.deletePosCardRa(ids)
      } else {
        onGetIdCard([])
      }
    }
  }

  deletePosData = (ids, data, onChangeData) => {
    let pos = []
    data.map(e => {
      if (e.id === ids[0].charAt(1)) {
        e.value.map(i => {
          if (i.id === ids[0]) {
            pos.push(e.value.indexOf(i));
            e.value.splice(pos[0], 1)
            onChangeData(data)
          }
        })
      }
    })
  }

  deletePosCardRa = ids => {
    const { dataSupport, onGetCardRandom, onGetIdCard } = this.props
    const data = []

    ids.map(i => {
      data.push({id: i, image: CardShadow, disabled: true})
    })

    dataSupport.map(e => {
      if (e.id !== ids[0] && e.id !== ids[1]) {
        if (e.disabled !== true) {
          data.unshift({id: e.id, image: e.image, disabled: false})
        } else {
          data.unshift({id: e.id, image: e.image, disabled: true})
        }
      }
    })

    onGetCardRandom(data)
    onGetIdCard([])
  }

  render() {
    const { data } = this.props
    return (
      <button onClick={(e) => {this.onClickId(data.id)}} className="button-card" disabled={data.disabled}>
        <img src={data.image} className="image-card"/>
      </button>
    );
  }
}

export default Card;