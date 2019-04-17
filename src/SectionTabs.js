import React, { Component } from 'react';
import './SectionTabs.css';
import { Button } from 'react-bootstrap';


class SectionTabs extends Component {

  render() {
    return (
      <div className = "SectionTabs">
        <Button className = "NPRTab" variant="outline-secondary" size = "lg">
        NPR
        </Button>
        <Button className = "CNNTab" variant="outline-secondary" size = "lg">
        CNN
        </Button>
        <Button className = "NBCTab" variant="outline-secondary" size = "lg">
        NBC
        </Button>
        <Button className = "NYTimesTab" variant="outline-secondary" size = "lg">
        NY Times
        </Button>
        <Button className = "FoxTimesTab" variant="outline-secondary" size = "lg">
        Fox Times
        </Button>
        <Button className = "OthersTab" variant="outline-secondary" size = "lg">
        Others
        </Button>
      </div>
    );
  }
}

export default SectionTabs;