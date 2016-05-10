import { FETCH_REPORTS } from '../actions/action-types';

const initialState = [
  {
    title: 'No reports to show',
    body: 'please click on a report to display'
  }
];

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPORTS:
      let checkFetch = () => {
        return action.payload.length > 0 ? action.payload : state;
      };
      let newState = Object.assign([], checkFetch());

      return newState;
    default:
      return state;
  }
};

export default fetchReducer;
