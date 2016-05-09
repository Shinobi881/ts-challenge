import React, { Component } from 'react';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = { stateData: '' };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('I\'m clicked: ', this.props);
  }
  render() {
    return (
      <li
        className='report'
        onClick={(event) => this.handleClick()}
      >
        <h3>{this.props.title}</h3>
      </li>
    );
  }
}

export default Report;
