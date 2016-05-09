import { INITIAL_STATE } from '../actions/action_types';

const initialReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIAL_STATE:
      // console.log('Intial state: ', state);
      let newState = {
        allReports: [],
        filteredReports: [],
        filterQuery: ''
      };
      return newState;
    default:
      return state;
  }
};

export default initialReducer;
