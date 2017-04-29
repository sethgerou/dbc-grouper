import React, { Component } from 'react';
// import $ from 'jquery';
import './App.css';

class Groups extends Component {
  constructor() {
    super();

    this.displayGroups = this.displayGroups.bind(this);
  }

  displayGroups() {

      var displayFormatted = ""

      for (const group in this.props.sendGroups) {
        displayFormatted += "<h3>" + group + "</h3>"

        for (const name in this.props.sendGroups[group]) {
          displayFormatted += "<p>" + this.props.sendGroups[group][name] + "</p>"
        }
      }

      return (displayFormatted);
  }

  render() {

    return(
      <div>
        {/* {this.displayGroups()} */}
          <h3>{this.props.sendGroups}</h3>
          {
          this.props.sendGroups.map((name) => {
          return (<p>{name}</p>)
          }
        )
        }
      </div>
    )
}
}

export default Groups;
