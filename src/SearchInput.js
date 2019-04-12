import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './SearchInput.css';

class SearchInput extends Component {

  render() {
    return (
      <div className="SearchInput">
          <form className="SearchInputForm">
            <label className="SearchInputLabel">
              Input a query:
            </label>
            <input className="SearchInputBox" type="text" name="name" />
            <Button className = "SearchInputButton" variant="outline-secondary" size = "lg">
              Search
            </Button>
          </form>
      </div>
    );
  }
}

export default SearchInput;