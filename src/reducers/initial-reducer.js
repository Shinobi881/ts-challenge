import { INITIAL_STATE } from '../actions/action_types';
import data from '../../data.json';

const initialState = {
  allReports: data,
  filteredReports: [],
  filterQuery: '',
  activeReport: {
    title: 'No report selected',
    body: ''
  }
};

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_STATE:
      console.log('Intial state: ', state);
      let newState = Object.assign(state);
      return newState;
    default:
      return state;
  }
};

export default initialReducer;
