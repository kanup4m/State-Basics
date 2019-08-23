import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd';
import { Input } from 'antd';
 
class Field extends React.Component {
  render () {
    return (
      <div className='wrap-input1'   >
          <Input className ='input1' placeholder={this.props.tag} />
          <span className="shadow-input1"></span>
        </div>
    );
  }
}
 export default Field