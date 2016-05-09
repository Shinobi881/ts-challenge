import { FETCH_REPORTS, FILTER_REPORTS, SELECT_REPORT, INITIAL_STATE } from './action_types';

export const fetchReportsAction = () => {
  return { type: FETCH_REPORTS };
};

export const filterReportsAction = (query, state) => {
  return { type: FILTER_REPORTS, payload: { query, state } };
};

export const selectReportAction = (report) => {
  return { type: SELECT_REPORT, payload: report };
};

export const getInitialState = () => {
  return { type: INITIAL_STATE };
};
