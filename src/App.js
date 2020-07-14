import React, { Component } from 'react';

import Card from './Components/Card'


class App extends Component{

 state={
    name:"Jephin John"

}

handleChange=()=>{
  this.setState({name:"football"})
}

componentDidMount(){
  console.log("mounded")
}
componentWillUpdate(){
  console.log("updated")
}

  render(){
    return(
      <div>
<button onClick={this.handleChange}>CLICK ME</button>
        <Card name={this.state.name}/>
   

      </div>
    )
  }
}


export default App;