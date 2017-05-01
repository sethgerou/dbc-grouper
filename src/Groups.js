import React, { Component } from 'react';
// import $ from 'jquery';
import './App.css';

class Groups extends Component {
  constructor() {
    super();

    this.displayGroups = this.displayGroups.bind(this);

  }


  displayGroups() {

      var displayFormatted = '{\n'
      for (const group in this.props.sendGroups) {
        displayFormatted += '"' + group + '": ['

          displayFormatted += '"' + this.props.sendGroups[group].join('","') + '"],\n'
        }
        displayFormatted = displayFormatted.slice(0,-2)
        displayFormatted += '\n}'
      console.log(displayFormatted)
      return (displayFormatted);
  }

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
