import React from 'react'
import { Component } from 'react';


class Counter extends Component {
 
  state = {
    count : 1,
    };
 
  render(){
  return (
      
      <div>
        <span style={{backgroundColor: 'blue'}} className={this.getBadgeClasses}>{this.fomatCount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
      </div>

  );
  }
      getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
      return classes;

}
  fomatCount(){
      const {count} = this.state;
      return count === 0 ? 'Zero' : count;
  }
  
}

export default Counter;