import React, { Component } from 'react';

class Reset extends Component {
  render() {
    return (
      <button onClick={this.props.onReset} className='reset'>
        Reset All
      </button>
    );
  }
}

export default Reset;