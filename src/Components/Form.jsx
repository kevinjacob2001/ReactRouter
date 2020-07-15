import React, { Component } from 'react';



class Form extends Component{
  state={
      first:"",
      second:""
  }

  
    handleChnage=(e)=>{

this.setState({first:e.target.value})
this.setState({second:e.target.value})
}

finalSubmit=(e)=>{
e.preventDefault();
    this.setState({final:this.state.value})

}
   
   
    render(){
        return(
<form onSubmit={this.finalSubmit}>

<input type="text" value={this.state.first} onChange={this.handleChnage}/>
<input type="text" value={this.state.second} onChange={this.handleChnage}/>

<button >
    click mee

</button>

</form>

           

        )
    }
}


export default Form;