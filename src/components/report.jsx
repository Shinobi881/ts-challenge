import React, { Component } from 'react';
import { connector } from '../store/store.js';

class Report extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let p = this.props;
    p.selectReportAction(p);
  }
  render() {
    return (
      <li
        className='report'
        onClick={this.handleClick}
      >
        <div><h4>{this.props.title}</h4></div>
      </li>
    );
  }
}

export default connector(Report);
