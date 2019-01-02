import { connect } from 'react-redux';
import { getIdCard, changeData, getCardRandom } from '../actions';
import Card from '../components/Cards'

const mapStateToProps = state => {
  return {
    ids: state.AppReducer.ids,
    data: state.AppReducer.data,
    cardsRandom: state.AppReducer.cardsRandom
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetIdCard: ids => dispatch(getIdCard(ids)),
    onChangeData: data => dispatch(changeData(data)),
    onGetCardRandom: cardsRandom => dispatch(getCardRandom(cardsRandom))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);