import { connect } from 'react-redux';
import { getIdCard } from '../actions';
import Body from '../components/Body'

const mapStateToProps = state => {
  return {
    ids: state.AppReducer.ids
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetIdCard: ids => dispatch(getIdCard(ids))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Body);