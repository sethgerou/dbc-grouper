import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class ButtonStrip extends Component {

  newCohortForm() {
    console.log("new cohort");
  }

  phase2Form() {
    console.log("phase 2");
  }

  phase3Form() {
    console.log("phase 3");
  }

  render() {
    return(
      <div>
        <button className="button" onClick={this.newCohortForm}>New Cohort</button>
        <button className="button" onClick={this.phase2Form}>Phase 2</button>
        <button className="button" onClick={this.phase3Form}>Phase 3</button>
      </div>
      )
    }
};

export default ButtonStrip;
