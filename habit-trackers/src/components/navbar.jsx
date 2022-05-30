import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    
    return (
      <nav className='navbar'>
        <i className="fa-solid fa-leaf"></i>
        <div className='navbar__text'>Habit Tracker</div>
        <div className='navbar__count'>{this.props.totalCount}</div>
      </nav>
    );
  }
}

export default Navbar;