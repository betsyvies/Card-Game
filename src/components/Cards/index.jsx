import React, { Component } from 'react';
import CardShadow from './CardShadow';
import Card from './Card';
import '../../css/App.css'

//const cards = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]

class ShowCard extends Component {
  componentWillMount() {    
    const { data, onGetCardRandom } = this.props
    const numCards = this.randomCard(data)
    const arrCard = []

    numCards.sort().map(e => this.getValueCard(e, data, 1, arrCard))
    numCards.map(e => this.getValueCard(e, data, 2, arrCard))
    onGetCardRandom(arrCard)
  }

  getValueCard = (numCard, data, num, arrCard) => {
    data.map(e => {
      return e.value
            .filter(i => i.id === numCard)
            .map((i) => arrCard.push({id: i.id + num, image: i.image, disabled: false}))
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
    const { cardsRandom, ids, onGetIdCard, data, onChangeData, onGetCardRandom, onCountCouples } = this.props
    return (
      <div className="container-cards">
        {cardsRandom.map((elem, index) => <Card key={index} data={elem} dataSupport={cardsRandom} onGetIdCard={onGetIdCard} ids={ids} dataAll={data} onChangeData={onChangeData} onGetCardRandom={onGetCardRandom} onCountCouples={onCountCouples}/>)}
      </div>
    );
  }
}

export default ShowCard;