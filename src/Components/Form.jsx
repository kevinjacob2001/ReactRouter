import React, { Component } from 'react';



class Form extends Component{
  state={
      value:"",
      final:""
  }

  
    handleChnage=(e)=>{

this.setState({value:e.target.value})
}

finalSubmit=(e)=>{
e.preventDefault();
    this.setState({final:this.state.value})
}
   
   
    render(){
        return(
<form onSubmit={this.finalSubmit}>
<input type="text" onChange={this.handleChnage}/>
<button >
    click mee

</button>
<h1>{this.state.final}</h1>
</form>

           

        )
    }
}


export default Form;