import React, { Component } from 'react';
// import $ from 'jquery';
import './App.css';

class NewCohortForm extends Component {
  constructor() {
    super();
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
}

  handleSubmit(event) {
    event.preventDefault();
    const names = this.state.value.split(/\r?\n/)
    this.props.namesSubmission(names);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label><h3>New Cohort</h3></label>
        <textarea id="form" name="cohortNames" rows="24" cols="40" placeholder="Insert names here (one per line)" value={this.state.value} onChange={this.handleChange}></textarea>
        <button className="button center" type="submit">Submit</button>
      </form>
    )
  }
}

export default NewCohortForm;
