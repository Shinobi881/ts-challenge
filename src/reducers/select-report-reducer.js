import { INITIAL_STATE, SELECT_REPORT } from '../actions/action-types';

const initialState = {
  activeReport: {
    title: 'No report selected',
    body: 'please click on a report'
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
