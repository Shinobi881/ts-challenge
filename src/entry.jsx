import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import reports from '../data.json';

import App from './index.jsx';
import rootReducer from './reducers';

export const fetchReportsAction = () => {
  let fetch = axios.get('/reports');

  return (dispatch) => {
    fetch.then((res) => {
      dispatch({ type: 'FETCH_REPORTS', payload: res.data });
    });
  };
};

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
// store.dispatch(fetchReportsAction());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
