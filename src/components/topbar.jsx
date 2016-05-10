import React, { Component } from 'react';
import Filter from '../components/filter.jsx';

class TopBar extends Component {
  render() {
    return (
      <div id="top-bar">
        <Filter />
      </div>
    );
  }
}

export default TopBar;
