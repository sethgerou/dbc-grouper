import React, { Component } from 'react';
// import $ from 'jquery';
import './App.css';

class Groups extends Component {

  render() {
    return(
      <div>

          <p>{this.props.nameGiver.length} students</p>
          {
          this.props.nameGiver.map((name) => {
          return (<p>{name}</p>)
          }
        )
        }
      </div>
    )
}
}

export default Groups;
