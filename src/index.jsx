import React, { Component } from 'react';
import axios from 'axios';
import SideBar from './containers/sidebar.jsx';

axios.get('/reports')
  .then((res) => {
    console.log('Logging response', res);
  });

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
      </div>
    );
  }
}

export default App;
