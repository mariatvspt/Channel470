import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Channel470News
          <form>
            <label>
              Input: 
              <input type="text" name="name" />
            </label>
            <Button variant="outline-secondary" size = "lg">
              Search
            </Button>
          </form>
          <p>
            Input a query to search!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;

//<img src={logo} className="App-logo" alt="logo" />
