import React, { Component } from 'react';
import Filter from '../components/filter.jsx';

class TopBar extends Component {
  render() {
    return (
      <div id="top-bar">
        <nav>
          <a href="/html/">HTML</a> |
          <a href="/css/">CSS</a> |
          <a href="/js/">JavaScript</a> |
          <a href="/jquery/">jQuery</a>
        </nav>
        <Filter />
      </div>
    );
  }
}

export default TopBar;
