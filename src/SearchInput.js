import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './SearchInput.css';

class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      solrSearchUrl: "http://localhost:8983/solr/news/select",
      query: "trump",
    }
  }

  onSubmit(event) {
    event.preventDefault();
    let searchParams = {
      solrSearchUrl: this.state.solrSearchUrl,
      query: this.state.query
    };
    console.log(searchParams);
    this.props.doSearch(searchParams);
  }

  render() {
    return (
      <div className="SearchInput">
          <form className="SearchInputForm" onSubmit={this.onSubmit.bind(this)}>
            <input className="SearchInputBox" type="text" value = {this.state.query} name="name" onChange={e => {this.setState({ query: e.target.value })}} />
            <Button className = "SearchInputButton" variant="outline-secondary" size = "lg" type="submit">
              Search
            </Button>
          </form>
          <pre>
            this.props.solrConnector: {"\n\n"}
            { JSON.stringify(this.props .solrConnector, null, 2) }
          </pre>
      </div>
    );
  }
}

export default SearchInput;