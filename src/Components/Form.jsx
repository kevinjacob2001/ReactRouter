import React, { Component } from 'react';



class Form extends Component{
  state={
      first:"",
      second:""
  
  }

  
    handleChange=(e)=>{

this.setState({[e.target.name]:e.target.value})

}



finalSubmit=(e)=>{
    e.preventDefault();
console.log(this.state)
}
   
   
    render(){
        return(
<form onSubmit={this.finalSubmit}>

<input type="text" name="first"  onChange={this.handleChange}/>
<input type="text" second="second"onChange={this.handleChange}/>

<button >
    click mee

</button>

</form>

           

        )
    }
}


export default Form;