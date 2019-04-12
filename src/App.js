import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import SearchInput from './SearchInput'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchInput />
      </div>
    );
  }
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
