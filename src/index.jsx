import './stylesheets/main.scss';
import React, { Component } from 'react';
import Inbox from './containers/inbox.jsx';

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
