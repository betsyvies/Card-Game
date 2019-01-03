import React, { Component } from 'react';
import Card from './Card';
import '../../css/App.css'

class ShowCard extends Component {
  componentWillMount() {
    const { data } = this.props
    this.getRandomCard(data)
  }

  getRandomCard = data => {
    const numCards = this.randomCard(data)
    const arrCard = []

    numCards.map(e => this.getValueCard(e, data, 1, arrCard))
    numCards.map(e => this.getValueCard(e, data, 2, arrCard))
    this.changePos(arrCard)
  }

  changePos = arrCard => {
    const { onGetCardRandom } = this.props
    let newArrCard = []
    let arrRandom = [0, 1, 2, 3, 6, 7, 5, 4]

    arrRandom.map(i => newArrCard.push(arrCard[i]))
    onGetCardRandom(newArrCard)
  }

  getValueCard = (numCard, data, num, arrCard) => {
    data.map(e => {
      return e.value
        .filter(i => i.id === numCard)
        .map((i) => arrCard.push({ id: i.id + num, image: i.image, disabled: false }))
    })
  }

  randomCard = (data) => {
    const numClover = Math.round(Math.random() * (data[0].value.length - 1) + parseInt(1)) + 'C';
    const numDiamonds = Math.round(Math.random() * (data[1].value.length - 1) + parseInt(1)) + 'D';
    const numHearts = Math.round(Math.random() * (data[2].value.length - 1) + parseInt(1)) + 'H';
    const numSwords = Math.round(Math.random() * (data[3].value.length - 1) + parseInt(1)) + 'S'

    return [numClover, numDiamonds, numHearts, numSwords]
  }

  render() {
    const { cardsRandom, ids, onGetIdCard, data, totalCouples, onGetCardRandom, onCountCouples } = this.props
    return (
      <div className="container-cards">
        {cardsRandom.map((elem, index) => <Card key={index} data={elem} dataSupport={cardsRandom} onGetIdCard={onGetIdCard} ids={ids} dataAll={data} onGetCardRandom={onGetCardRandom} onCountCouples={onCountCouples} getRandomCard={this.getRandomCard} totalCouples={totalCouples} />)}
      </div>
    );
  }
}

export default ShowCard;