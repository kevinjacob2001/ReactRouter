import React,{Component} from 'react';

import Box from './Box';

class Card extends Component{
    render(){
        return(
            <div>
   
              <Box name={this.props.name}/>
                
                </div>
        )
    }
}

export default Card;