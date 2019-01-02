import React, { Component } from 'react';
import CardShadow from './CardShadow';
import Card from './Card';
import '../../css/App.css'

const cards = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]

class ShowCard extends Component {


  componentWillMount() {    
    const { data } = this.props
    const numCards = this.randomCard(data)
    const numCardsParts = this.randomCard(data)
    console.log(data)
    numCards.map(e => this.getValueCard(e, data))
    numCardsParts.map(e => this.getValueCard(e, data))
  }

  getValueCard = (numCard, data) => {
    const { onGetCardRandom, cardsRandom } = this.props
    data.map(e => {
      e.value.map(i => {
        if (i.id === numCard) {
          cardsRandom.push(i)
          onGetCardRandom(cardsRandom)
        }
      })
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
    const { cardsRandom, ids, onGetIdCard } = this.props
    return (
      <div className="container-cards">
        {cardsRandom.map(elem => <Card key={elem.id} data={elem} onGetIdCard={onGetIdCard} ids={ids}/>)}
      </div>
    );
  }
}

export default ShowCard;