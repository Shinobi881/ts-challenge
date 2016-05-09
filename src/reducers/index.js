import { combineReducers } from 'redux';
import initialReducer from './initial-reducer';
import fetchReducer from './fetch-reducer';
import filterReducer from './filter-reducer';
import reportReducer from './select-report-reducer';

const rootReducer = combineReducers({
  initialReducer,
  fetchReducer,
  filterReducer,
  reportReducer
});

export default rootReducer;
