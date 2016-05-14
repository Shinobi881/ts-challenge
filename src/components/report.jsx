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
        <h5>{this.props.title}</h5>
      </li>
    );
  }
}

export default connector(Report);
