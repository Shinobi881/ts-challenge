import { FETCH_REPORTS, FILTER_REPORTS } from './action_types';

export const fetchReportsAction = () => {
  return { type: FETCH_REPORTS };
};

export const filterEventsAction = (query, state) => {
  return { type: FILTER_REPORTS, payload: { query, state } };
};
