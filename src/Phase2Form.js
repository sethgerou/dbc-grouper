import React, { Component } from 'react';
// import $ from 'jquery';
import './App.css';

class Phase2Form extends Component {
  render() {
    return(
      <form>
        <label><h3>Phase 2</h3></label>
        <textarea id="form"  name="cohortNames" rows="24" cols="40" placeholder="Insert phase 1 json here (remove students as needed)"></textarea>
        <button className="button center"  type="submit">Submit</button>
      </form>
    )
  }
}

export default Phase2Form;
