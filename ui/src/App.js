// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, Component } from 'react';
import { findUsers } from './service/email-service';
import { Form, Button } from "react-bootstrap";
import Terminal from 'terminal-in-react';
export default class App extends Component {

  // const [list, setList] = useState([]);
  // "adamk@gmail.com,test@hotmail.com,anthony@hotmails.com,rsteiner@live.com,chaffar@aol.com"

  state = {
    searchEmail: "",
    searchEmails: [],
    searchResults: "",
    searchFrequency: 10,
    textAreaOutput: ""
  };

  constructor() {
    super();
    console.log('tesing');

    // while (true) {
    //   console.log('enter new email');
    // }
  }

  onStart = () => {

    console.log ('on start');

    setTimeout(() => {
      // this.appendText('enter email');
      console.log('enter email');
    }, 3000);
  }


  onSubmit = () => {
    const searchEmails = this.state.searchEmails;
    searchEmails.push(this.state.searchEmail);
    console.log('searchEmails: ' + searchEmails);

    this.setState({ searchEmails: searchEmails });

    findUsers(this.state.searchEmails.join(','))
      .then(items => {
        // this.state.searchResults = items;
        this.appendText('>>' + this.parseSearchResults(items));
      })
  };

  appendText(input) {
    this.setState({ textAreaOutput: `${this.state.textAreaOutput}\n${input}` });
  }

  onClear = () => {
    this.setState({ textAreaOutput: "" });
  };

  parseSearchResults(searchResults) {
    const results = [];
    if (searchResults && searchResults.length > 0) {
      for (const searchResult of searchResults) {
        results.push(searchResult.email + ':' + searchResult.hasMatch);
      }
    }
    return results.join(',');
  }

  render() {
    return (
      <>
        <div>
          <Form.Group controlId="formOutputFrequency">
            <Form.Label>Welcome to my optizmo coding test.</Form.Label>
            <Form.Label>Please enter in seconds how often you would like to receive output alerts </Form.Label>
            <Form.Control type="text" placeholder="10" onChange={e => this.setState({ searchFrequency: e.target.value })} value={this.state.searchFrequency} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Please enter an email address to get started: </Form.Label>
            <Form.Control type="email" onChange={e => this.setState({ searchEmail: e.target.value })} value={this.state.searchEmail} />
            <Form.Text className="text-muted"></Form.Text>
            <Button
              className="btnFormSend"
              variant="outline-success"
              onClick={this.onSubmit}
            >Submit</Button>
          </Form.Group>
          <Form.Group className="m-0">
            <Form.Label>Output: </Form.Label>
            <Form.Control
              className="textFeedback"
              as="textarea"
              rows="10"
              value={this.state.textAreaOutput}
              onChange={e => this.setState({ val: e.target.value })}
              type="text"
            />
            
            <Button
              className="btnFormSend"
              variant="outline-success"
              onClick={this.onStart}
            >Start</Button>
            <Button
              className="btnFormSend"
              variant="outline-success"
              onClick={this.onClear}
            >Stop</Button>
          </Form.Group>
        </div>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
          }}
        >
          <Terminal
            color='green'
            backgroundColor='black'
            barColor='black'
            style={{ fontWeight: "bold", fontSize: "1em" }}
            commands={{
              'open-google': () => window.open('https://www.google.com/', '_blank'),
              showmsg: this.showMsg,
              popup: () => alert('Terminal in React')
            }}
            descriptions={{
              'open-google': 'opens google.com',
              showmsg: 'shows a message',
              alert: 'alert', popup: 'alert'
            }}
            msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
          />
        </div> */}
      </>
    );
  }
}


// function App() {
//   const [list, setList] = useState([]);

//   // useEffect(() => {
//   //   let mounted = true;
//   //   getUser()
//   //     .then(items => {
//   //       if(mounted) {
//   //         setList(items)
//   //       }
//   //     })
//   //   return () => mounted = false;
//   // }, [])

//   useEffect(() => {
//     findUsers('adamk@gmail.com,test@hotmail.com,anthony@hotmails.com,rsteiner@live.com,chaffar@aol.com')
//       .then(items => {
//         setList(items)
//       })
//   }, [])

//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//   return (
//     // <div className="wrapper">
//     //   <h1>My Grocery List</h1>
//     //   <ul>
//     //     {list.map(item => <li key={item.email}>{item.email}</li>)}
//     //   </ul>
//     //   <label for="name">Name (4 to 8 characters):</label>

//     //   
//     // </div>

//     // <>
//     //   <div class="container">
//     //     <div class="row">
//     //       <div class="col">
//     //         <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
//     //       </div>
//     //     </div>
//     //     <div class="row">
//     //       <div class="col">One of three columns</div>
//     //       <div class="col">
//     //         <div class="row">
//     //           <div className="col-6 mb-2">
//     //             <Button variant="primary" size="lg" onClick={handleClick}>Start</Button>
//     //           </div>
//     //           <div className="col-6 mb-2">
//     //             <Button variant="secondary" size="lg">Stop</Button>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <div class="col">
//     //         <ul>
//     //           {list.map(item => <li key={item.email}>{item.email}</li>)}
//     //         </ul>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </>

//     <Form.Group className="m-0">
//         <Form.Control
//           className="textFeedback"
//           as="textarea"
//           rows="3"
//           placeholder="feedback"
//           value={this.state.val}
//           onChange={e => this.setState({ val: e.target.value })}
//           type="text"
//         />
//         <Button
//           className="btnFormSend"
//           variant="outline-success"
//           onClick={this.onSubmit}
//         >
//           Send Feedback
//         </Button>
//       </Form.Group>
//   )
// }


// export default App;
