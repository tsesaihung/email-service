// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, Component } from 'react';
import { findUsers } from './service/email-service';
import { Form, Button } from "react-bootstrap";
export default class App extends Component {

  // const [list, setList] = useState([]);

  state = {
    searchEmails: "adamk@gmail.com,test@hotmail.com,anthony@hotmails.com,rsteiner@live.com,chaffar@aol.com",
    searchResults: ""
  };

  onSubmit = () => {
    console.log(this.state.searchEmails);

    findUsers(this.state.searchEmails)
      .then(items => {
        // this.state.searchResults = items;
        this.setState({ searchResults: items });
      })
  };

  render() {
    return (
      <>
        <div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter emails: </Form.Label>
            <Form.Control type="email" placeholder="enter search emails" onChange={e => this.setState({ searchEmails: e.target.value })} value={this.state.searchEmails} />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group className="m-0">
            <Form.Label>Results: </Form.Label>
            <Form.Control
              className="textFeedback"
              as="textarea"
              rows="3"
              placeholder="feedback"
              value={JSON.stringify(this.state.searchResults)}
              onChange={e => this.setState({ val: e.target.value })}
              type="text"
            />
            <Button
              className="btnFormSend"
              variant="outline-success"
              onClick={this.onSubmit}
            >Start</Button>
          </Form.Group>
        </div>
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
