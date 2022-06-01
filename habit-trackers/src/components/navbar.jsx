import React, { PureComponent } from 'react';

class Navbar extends PureComponent {

  render() {
    console.log("navbar");
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