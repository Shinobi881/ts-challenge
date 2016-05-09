import { FILTER_REPORTS } from '../actions/action_types';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_REPORTS:
      // console.log('Searching!', action.payload)
      let newState = Object.assign(action.payload);

      let filteredEvents = newState.state.filter((event) => {
        let queryTest = `${event.name.text} ${event.description.text}`.toUpperCase()
                      .indexOf(newState.query.toUpperCase());
        if (queryTest >= 0) {
          return event;
        }
      });

      return {
        reports: filteredEvents,
        filterQuery: newState.query
      };
    default:
      return state;
  }
};

export default filterReducer;
