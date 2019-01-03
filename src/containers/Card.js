import { connect } from 'react-redux';
import { getIdCard, getCardRandom, countCouples } from '../actions';
import Card from '../components/Cards'

const mapStateToProps = state => {
  return {
    ids: state.AppReducer.ids,
    data: state.AppReducer.data,
    totalCouples: state.AppReducer.totalCouples,
    cardsRandom: state.AppReducer.cardsRandom
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetIdCard: ids => dispatch(getIdCard(ids)),
    onGetCardRandom: cardsRandom => dispatch(getCardRandom(cardsRandom)),
    onCountCouples: totalCouples => dispatch(countCouples(totalCouples))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);