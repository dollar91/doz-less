import React from 'react';
import './index.less';
export default function (props) {
  return <div className = {`button-s ${props.className}`
    
  }> {props.children} </div>
}