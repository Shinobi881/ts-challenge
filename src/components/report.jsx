import React, { Component } from 'react';
import { connector } from '../store/store.js';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = { stateData: '' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let p = this.props;
    // console.log('I\'m clicked: ', this.props);
    p.selectReportAction(p);
  }
  render() {
    return (
      <li
        className='report'
        onClick={this.handleClick}
      >
        <h3>{this.props.title}</h3>
      </li>
    );
  }
}

export default connector(Report);
