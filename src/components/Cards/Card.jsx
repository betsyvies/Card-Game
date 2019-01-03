import React, { Component } from 'react';
import Swal from 'sweetalert2'
import CardShadow from '../../assets/images/others/shadow.png';
import Trophy from '../../assets/images/others/trophy.gif';
import '../../css/App.css'

class Card extends Component {
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
    const { onGetIdCard } = this.props;

    let idCard = ids[0].slice(0, ids[0].length - 1)
    if (ids.length === 2) {
      let idCardPar = ids[1].slice(0, ids[1].length - 1)
      if (idCard === idCardPar) {
        this.deletePosCardRa(ids)
        this.keepPlaying()
      } else onGetIdCard([])
    }
  }

  keepPlaying = () => {
    const { dataAll, getRandomCard, totalCouples, onCountCouples } = this.props;
    if (parseInt(totalCouples) === 3) {
      Swal({
        title: 'Felicidades!',
        text: 'Emparejaste todas las cartas',
        imageUrl: Trophy,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false,
        confirmButtonText: 'Continuar jugando',
      }).then((result) => {
        if (result.value) {
          getRandomCard(dataAll)
          onCountCouples(0)
        }
      })
    }
  }

  deletePosCardRa = ids => {
    const { dataSupport, onGetCardRandom, onGetIdCard } = this.props
    const data = [];

    dataSupport.map((e) => data.push({ id: e.id, image: e.image, disabled: e.disabled }))

    ids.map(i => {
      return data
        .filter(e => e.id === i)
        .map(e => {
          e.image = CardShadow
          e.disabled = true
        })
    })

    this.accountCouples(data)
    onGetCardRandom(data)
    onGetIdCard([])
  }

  accountCouples = (data) => {
    const { onCountCouples } = this.props
    let sumCouple = 0

    data.map(e => e.disabled ? sumCouple = sumCouple + 1 : console.log('err'))
    onCountCouples(sumCouple / 2)
  }

  render() {
    const { data } = this.props
    return (
      <button
        style={{ backgroundImage: 'url(' + data.image + ')' }}
        onClick={(e) => { this.onClickId(data.id) }}
        className="button-card"
        disabled={data.disabled}>
      </button>
    );
  }
}

export default Card;