import { connect } from 'react-redux';
import Counter from '../components/Counter'

const mapStateToProps = state => {
  return {
    totalCouples: state.AppReducer.totalCouples
  }
};

export default connect(mapStateToProps)(Counter);