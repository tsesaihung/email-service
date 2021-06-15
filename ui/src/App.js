// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { findUsers } from './service/email-service';
import { Form, Button } from "react-bootstrap";
export default class App extends Component {

  // const [list, setList] = useState([]);
  // "adamk@gmail.com,test@hotmail.com,anthony@hotmails.com,rsteiner@live.com,chaffar@aol.com"

  state = {
    searchEmail: "",
    searchEmails: [],
    searchResults: [],
    searchFrequency: 10,
    textAreaOutput: "",
    processStatus: 'Stop'
  };

  // constructor() {
  //   super();
  // };

  onClick = () => {
    // if process is already started
    if (this.state.processStatus === 'Start') {
      this.setState({ processStatus: 'Stop' });
      this.appendText('>> stopped');
      clearInterval(this.interval);
    } else {
      this.setState({ processStatus: 'Start' });
      this.appendText('>> started');
      this.interval = setInterval(() => this.parseSearchResults(this.state.searchResults), this.state.searchFrequency * 1000);
    }
  };

  getProcessButtonLabel() {
    return (this.state.processStatus === 'Start') ? 'Stop' : 'Start';
  }

  hasStarted() {
    return this.state.processStatus === 'Start';
  }

  onSubmit = () => {
    const searchEmails = this.state.searchEmails;

    if (searchEmails && !searchEmails.includes(this.state.searchEmail)) {
      searchEmails.push(this.state.searchEmail);
      this.setState({ searchEmails: searchEmails });
    }

    findUsers(this.state.searchEmails.join(','))
      .then(items => {
        this.setState({ searchResults: items });
        this.parseSearchResult(this.state.searchEmail, items);
      })
  };

  refreshOutput() {
    var textarea = document.getElementById('outputResult');
    textarea.scrollTop = textarea.scrollHeight;
  }

  appendText(input) {
    this.setState({ textAreaOutput: `${this.state.textAreaOutput}\n${input}` });
    this.refreshOutput();
  }

  parseSearchResult(email, searchResults) {
    const searchResult = searchResults.find(item => item.email === email);

    if (searchResult && searchResult.hasMatch === true) {
      this.appendText('>> ' + email + ' - Found it!');
    } else {
      this.appendText('>> ' + email + ' - Not Found!');
    }
  }

  parseSearchResults(searchResults) {
    const results = [];
    if (searchResults && searchResults.length > 0) {
      for (const searchResult of searchResults) {
        results.push(searchResult.email + ':' + searchResult.hasMatch);
      }
    }
    this.appendText('>> All searches: ' + results.join(','));
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="mt-4">
                <h4>Welcome to my optizmo coding test</h4>
              </div>
              <div className="mt-4">
                <Form.Group controlId="formOutputFrequency">
                  <Form.Label>Please enter in seconds how often you would like to receive output alerts: </Form.Label>
                  <Form.Control disabled={this.hasStarted()} type="number" onChange={e => this.setState({ searchFrequency: e.target.value })} value={this.state.searchFrequency} />
                </Form.Group>
              </div>
              <div className="mt-1">
                <Button
                  name="processButton"
                  className="btnFormSend"
                  variant="outline-success"
                  onClick={this.onClick}
                >{this.getProcessButtonLabel()}</Button>
              </div>
              <div className="mt-4">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Please enter an email address to search: </Form.Label>
                  <Form.Control disabled={!this.hasStarted()} type="email" onChange={e => this.setState({ searchEmail: e.target.value })} value={this.state.searchEmail} />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </div>
              <div className="mt-1 mb-4">
                <Button
                  name="searchEmailButton"
                  disabled={!this.hasStarted()}
                  className="btnFormSend"
                  variant="outline-success"
                  onClick={this.onSubmit}
                >Search</Button>
              </div>
              <Form.Group className="m-0">
                <Form.Label>Output: </Form.Label>
                <Form.Control
                  readOnly
                  id="outputResult"
                  className="textFeedback"
                  as="textarea"
                  rows="10"
                  value={this.state.textAreaOutput}
                  onChange={e => this.setState({ val: e.target.value })}
                  type="text"
                />
                <Form.Label></Form.Label>
              </Form.Group>
            </div>
          </div>
        </div>
      </>
    );
  }
}
