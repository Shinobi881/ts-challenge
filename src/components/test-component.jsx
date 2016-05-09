import React, { Component } from 'react';
import { connector } from '../store/store';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
  }
  render() {
    console.log('TEST: ', this.props);
    return (
      <div><h1>This works!</h1></div>
    );
  }
}

export default connector(Test);
