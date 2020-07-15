import React, { Component } from 'react';

import Counter from './Components/Counter'
import Form from './Components/Form';

import './App.css';


class App extends Component{
  render(){
    return(
      <div className="App">
        Events
         {/* <Counter/>  */}
        <Form/>
      </div>
    )
  }
}

export default App;