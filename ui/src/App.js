// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { getUser } from './service/email-service';

function App() {
  const [list, setList] = useState([]);

  // useEffect(() => {
  //   let mounted = true;
  //   getUser()
  //     .then(items => {
  //       if(mounted) {
  //         setList(items)
  //       }
  //     })
  //   return () => mounted = false;
  // }, [])

  useEffect(()=>{
    getUser()
    .then(items => {
        setList(items)
    })
  },[])

  return(
    <div className="wrapper">
     <h1>My Grocery List</h1>
     <ul>
       {list.map(item => <li key={item.email}>{item.email}</li>)}
     </ul>
   </div>
  )
}


export default App;
