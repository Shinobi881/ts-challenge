import { FILTER_REPORTS } from '../actions/action_types';

const initialState = {
  filterQuery: ''
};

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_REPORTS:
      console.log('Filtering!', state);
      console.log('Payload!', action.payload);
      let newState = Object.assign({}, state, {
        filterQuery: action.query
      });

      let filteredReports = action.payload.allReports.filter((report) => {
        let queryTest = report.title.toUpperCase()
                      .indexOf(newState.filterQuery.toUpperCase());
        if (queryTest >= 0) {
          return report;
        }
      });

      newState.filteredReports = filteredReports;

      return newState;
    default:
      return state;
  }
};

export default filterReducer;
