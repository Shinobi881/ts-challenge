import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reports from '../data.json';

import App from './index.jsx';
import rootReducer from './reducers';

const store = createStore(rootReducer);
// store.dispatch({ type: 'INITIAL_STATE', payload: reports });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
