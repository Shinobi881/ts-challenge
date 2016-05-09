import { combineReducers } from 'redux';
import initialReducer from './initial-reducer';
import fetchReducer from './fetch-reducer';
import filterReducer from './filter-reducer';

const rootReducer = combineReducers({
  initialReducer,
  fetchReducer,
  filterReducer
});

export default rootReducer;
