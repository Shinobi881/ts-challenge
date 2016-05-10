import { FETCH_REPORTS, FILTER_REPORTS, SELECT_REPORT, INITIAL_STATE } from './action-types';
import axios from 'axios';

export const fetchReportsAction = () => {
  let fetch = axios.get('/reports');

  return (dispatch) => {
    fetch.then((res) => {
      dispatch({ type: FETCH_REPORTS, payload: res.data });
    });
  };
};

export const filterReportsAction = (state, query) => {
  return { type: FILTER_REPORTS, payload: state, query };
};

export const selectReportAction = (report) => {
  return { type: SELECT_REPORT, payload: report };
};

export const getInitialState = () => {
  return { type: INITIAL_STATE };
};
