import React, { Component } from 'react';
// import $ from 'jquery';
import './App.css';

class Groups extends Component {
  constructor() {
    super();

    this.displayGroups = this.displayGroups.bind(this);

  }


  displayGroups() {

    var display =this.props.sendGroups.map(
      (group, index) => {
        let formatted = '';
        for (const student of group.students) {
                formatted += student.name + " "
                }
        return (<p key={index}>{formatted}</p>)
      }
    )
    return display;
  }

  //     var displayFormatted = '';
  //     for (const group of this.props.sendGroups() {
  //       displayFormatted += " Group: "
  //       for (const student of group.students) {
  //         displayFormatted += student.name + ","
  //         }
  //         displayFormatted = displayFormatted.slice(0,-1)
  //         displayFormatted += "---"
  //       }
  //
  //     return (<p>{displayFormatted}</p>);
  // }

  render() {

    return(
      <div>
        {this.displayGroups()}
          {/* <h3>{this.props.sendGroups}</h3>
          {
          this.props.sendGroups.map((name) => {
          return (<p>{name}</p>)
          } */}
        {/* )
        } */}
      </div>
    )
}
}

export default Groups;
