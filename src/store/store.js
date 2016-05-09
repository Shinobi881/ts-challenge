import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Data from '../../data.json';

// Redux props and action connectors
const mapStateToProps = (state) => {
  // console.log('State from store: ', state);
  return {
    allReports: Data,
    filteredReports: state.filterReducer.filteredReports,
    filterQuery: state.filterReducer,
    activeReport: state.reportReducer.activeReport
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);
