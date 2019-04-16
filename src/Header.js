import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div>
        <header className = "HeaderBorder">
        </header>
        <div className="Header">
          <header className="AppHeader">
              Channel470News
          </header>
        </div>
      </div>
    );
  }
}

export default Header;