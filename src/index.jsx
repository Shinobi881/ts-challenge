import './stylesheets/main.scss';
import React, { Component } from 'react';
import axios from 'axios';
import Inbox from './containers/inbox.jsx';
import SideBar from './containers/sidebar.jsx';

axios.get('/reports')
  .then((res) => {
    console.log('Logging response', res);
  });

class App extends Component {
  render() {
    return (
      <div>
        <Inbox />
      </div>
    );
  }
}

export default App;
