import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './SearchInput.css';
import pic from './search.png'

class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      solrSearchUrl: "http://localhost:8983/solr/news/select",
      query: "",
      chartData: {
        labels: [],
        datasets: [
          {
            label:'Sentimental Analysis',
            data: [],
            backgroundColor: [
              'rgba(250, 99, 132, 0.6)',
              'rgba(150, 99, 132, 0.6)',
              'rgba(50, 99, 132, 0.6)',
              'rgba(0, 99, 132, 0.6)',
              'rgba(-150, 89, 155, 0.6)',
              'rgba(400, 79, 120, 0.6)',
              'rgba(550, 69, 132, 0.6)',
              'rgba(650, 59, 132, 0.6)',
              'rgba(750, 49, 132, 0.6)',
              'rgba(800, 39, 132, 0.6)'
            ]
          }
        ]
      }
    }

  }


  processData() {
    // var JSONresults = JSON.stringify(this.props .solrConnector, null, 2);
    var newsName = {
      "washingtonpost" : "Washington Post",
      "dailynews" : "Daily News",
      "reuters" : "Reuters",
      "kmbc" : "KMBC",
      "koat" : "KOAT",
      "wtae" : "WTAE",
      "usa-today" : "USA TODAY",
      "azcentral" : "azcentral",
      "kntv" : "KNTV",
      "associated_press" : "Associated Press",
      "fox" : "Fox Times",
      "cbs" : "CBS",
      "alabama" : "Alabama",
      "usa" : "USA TODAY",
      "cnn" : "CNN",
      "huffinton" : "Huffinton",
      "nbc" : "NBC",
      "politico" : "Politico",
      "atlantic" : "Atlantic",
      "latimes" : "LA Times",
      "foreignaffairs" : "Foreign Affairs",
      "usnews-nevada" : "US News Nevada",
      "verge" : "Verge",
      "albuquerquejournal" : "Albuquerque Journal"
    }

    var dict = {};
    var sentimentScore = {};
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var stopWords = require('stopword');
  
    var JSONresponse = (this.props .solrConnector).response;

    // exists
    if(JSONresponse != null) {
      var JSONdocs = JSONresponse.response.docs;

      for(var docs in JSONdocs)  {
        var newsSource = JSONdocs[docs].source;
        // change to real name
        if(newsSource in newsName) {
          newsSource = newsName[newsSource];
        }

        var newsText = JSONdocs[docs].text[0];
        var removedStopWords = stopWords.removeStopwords(newsText.split(' '));
        newsText = removedStopWords.join(' ');
        var score = sentiment.analyze(newsText);

        if(newsSource in dict) {
          dict[newsSource].push(newsText);
          sentimentScore[newsSource].push(score);
        }
        else {
          dict[newsSource] = [];
          dict[newsSource].push(newsText);
          sentimentScore[newsSource] = [];
          sentimentScore[newsSource].push(score);
        }
      }
    }

    console.log(sentimentScore);

    //calculate each average
    var scoreAverage = {};
    for(var key in sentimentScore) {
      var average = 0;
      for(var index=0; index < sentimentScore[key].length; ++index) {
        average += sentimentScore[key][index].score;
      }
      scoreAverage[key] = average/(sentimentScore[key].length);
    }
    console.log(scoreAverage);

    // test graph
    for(var key in scoreAverage) {
      this.state.chartData.labels.push(key);
      this.state.chartData.datasets[0].data.push(scoreAverage[key]);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    let searchParams = {
      solrSearchUrl: this.state.solrSearchUrl,
      query: this.state.query
    };
    this.state.chartData.labels = [];
    this.state.chartData.datasets[0].data = [];
    this.props.doSearch(searchParams);
  }

  render() {
    return (
      <div className = "SearchInput">
        <div>
          <form className="SearchInputForm" onSubmit={this.onSubmit.bind(this)}>
            <input className="SearchInputBox" placeholder="Search" type="text" value = {this.state.query} name="name" onChange={e => {this.setState({ query: e.target.value })}} />
            <Button className = "SearchInputButton" variant="outline-secondary" size = "lg" type="submit">
              <img src={pic} className="SearchLogo" alt="pic" />
            {/* // import search logo */}
            </Button>
          </form>
        </div>
        <div className = "TrendingTopicsLabel">
          <label>
            TRENDING TOPICS:
          </label>
          <div>
            <Button variant="dark" className = "TrumpButton">
              TRUMP
            </Button>
            <Button variant="dark" className = "ClintonButton">
              CLINTON
            </Button>
            <Button variant="dark" className = "SandersButton">
              SANDERS
            </Button>
          </div>
        </div>
        <div className = "SearchInputResults">
            {/* this.props.solrConnector: {"\n\n"} */}
            {/* {JSON.stringify(this.props .solrConnector, null, 2)} */}
            {this.processData()}
        </div>
        <div className = "BarGraph">
          <Bar
            data = {this.state.chartData}
            options = {{
            }}
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;