import React, { Component } from 'react';
// import $ from 'jquery';
import './App.css';

class ButtonStrip extends Component {
  constructor() {
    super();
    this.setForm = this.setForm.bind(this);
  }

  setForm(event) {
    const selection = event.target.value;
    this.props.buttonPress(selection);
  }

  render() {
    return(
      <div>
        <button className="button" value="NewCohortForm" onClick={this.setForm}>New Cohort</button>
        <button className="button" value="Phase2Form" onClick={this.setForm}>Phase 2</button>
        <button className="button" value="Phase3Form" onClick={this.setForm}>Phase 3</button>
      </div>
      )
    }
};

export default ButtonStrip;
