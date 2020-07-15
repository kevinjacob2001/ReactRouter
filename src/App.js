import React, { Component } from 'react';

import Counter from './Components/Counter'

import './App.css';


class App extends Component{
  render(){
    return(
      <div className="App">
        Events
        <Counter/>
      </div>
    )
  }
}

export default App;