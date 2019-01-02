import React, { Component } from 'react';
import CardShadow from '../../assets/images/others/card-reverse.png';
import '../../css/App.css'
var newDataCard = []

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

    let idCard = ids[0].slice(0, ids[0].length - 1)
    if (ids.length === 2) {
      let idCardPar = ids[1].slice(0, ids[1].length - 1)
      if (idCard === idCardPar) {
        this.deletePosData(idCard, dataAll, onChangeData)
        this.deletePosCardRa(ids)

        if (newDataCard.length === 4) {
          onChangeData(newDataCard)
          newDataCard = []
        }
      } else {
        onGetIdCard([])
      }
    }
  }

  deletePosData = (id, data, onChangeData) => {
    let newData = []
    let idTypeStick = []
    data.map(e => {
      if (e.id === id.charAt(id.length - 1)) {
        e.value.map(i => {
          if (i.id !== id) newData.push({ id: i.id, image: i.image })
        })
        idTypeStick.push(e.id)
      }
    })

    newDataCard.push({ id: idTypeStick[0], value: newData })
  }

  deletePosCardRa = ids => {
    const { dataSupport, onGetCardRandom, onGetIdCard } = this.props
    const data = [];

    ids.map(i => {
      data.push({ id: i, image: CardShadow, disabled: true })
    })

    dataSupport.map(e => {
      if (e.id !== ids[0] && e.id !== ids[1]) {
        if (!e.disabled) {
          data.unshift({ id: e.id, image: e.image, disabled: false })
        } else {
          data.unshift({ id: e.id, image: e.image, disabled: true })
        }
      }
    })
    this.accountCouples(data)
    onGetCardRandom(data)
    onGetIdCard([])
  }

  accountCouples = (data) => {
    const { onCountCouples } = this.props
    let sumCouple = 0
    data.map(e => {
      if (e.disabled) {
        sumCouple = sumCouple + 1
      }
    })
    onCountCouples(sumCouple / 2)
  }

  render() {
    const { data } = this.props
    return (
      <button onClick={(e) => { this.onClickId(data.id) }} className="button-card" disabled={data.disabled}>
        <img src={data.image} className="image-card" />
      </button>
    );
  }
}

export default Card;