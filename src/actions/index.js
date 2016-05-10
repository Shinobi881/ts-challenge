import { FETCH_REPORTS, FILTER_REPORTS, SELECT_REPORT, INITIAL_STATE } from './action_types';

export const fetchReportsAction = () => {
  return { type: FETCH_REPORTS };
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
