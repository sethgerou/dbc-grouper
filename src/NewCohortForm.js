import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class NewCohortForm extends Component {
  render() {
    return(
      <form>
        <label><h3>New Cohort</h3></label>
        <textarea id="cohortNames"  name="cohortNames" rows="24" cols="40" placeholder="insert names here (one per line)"></textarea>
        <button className="button center"  type="submit">Submit</button>
      </form>
    )
  }
}

export default NewCohortForm;
