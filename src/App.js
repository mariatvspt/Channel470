import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SearchInput from './SearchInput';
import SectionTabs from './SectionTabs';
import SolrConnector from '../node_modules/react-solr-connector/lib/react-solr-connector';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: null
    }
  }

  doSearch(searchParams) {
    this.setState({searchParams});
  }

  render() {
    return (
      <div className = "App">
        <Header />
        <SectionTabs />
        {/* <SolrConnector searchParams={this.state.searchParams}>
          <SearchInput doSearch={this.doSearch.bind(this)} />
        </SolrConnector> */}
      </div>
    );
  }
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
