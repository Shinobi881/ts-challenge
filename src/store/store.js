import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Data from '../../data.json';

// Redux props and action connectors
const mapStateToProps = (state) => {
  return {
    reports: Data
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return bindActionCreators(actions, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);
