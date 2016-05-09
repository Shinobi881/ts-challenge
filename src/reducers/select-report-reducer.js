import { INITIAL_STATE, SELECT_REPORT } from '../actions/action_types';

const initialState = {
  activeReport: {
    title: 'No report selected',
    body: ''
  }
};

const selectReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_STATE:
      return state;
    case SELECT_REPORT:
      console.log('Action type: ', action.type);
      console.log('State: ', action.payload);
      let newState = Object.assign({}, state, {
        activeReport: {
          title: action.payload.title,
          body: action.payload.body
        }
      });

      return newState;

    default:
      return state;
  }
};

export default selectReportReducer;
