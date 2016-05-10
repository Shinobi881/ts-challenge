import React, { Component } from 'react';
import { connector } from '../store/store';

// Only built for testing connection to Redux store
// Import to App for use
class Test extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('TEST: ', this.props);
    return (
      <div><h1>This works!</h1></div>
    );
  }
}

export default connector(Test);
