import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default TopBar;
