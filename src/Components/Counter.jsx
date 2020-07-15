import React, { Component } from 'react';

class Counter extends Component{
state={
    counter:0
}

onIncrement=(prv)=>{
 this.setState({counter:this.state.counter+1})
}
onDecrement=(prv)=>{
    this.setState({counter:this.state.counter-1})
}


    render() {
        return (
            <div>
             <h2>The Counter component </h2>  
           <button onClick={this.onIncrement}>+</button>
           <h1>{this.state.counter}</h1>
           <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }
}

export default Counter;