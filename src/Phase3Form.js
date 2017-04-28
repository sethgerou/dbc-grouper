import React, { Component } from 'react';
// import $ from 'jquery';
import './App.css';

class Phase3Form extends Component {
  render() {
    return(
      <form>
        <label><h3>Phase 3</h3></label>
        <textarea id="form"  name="cohortNames" rows="24" cols="40" placeholder="Insert phase 2 json here (remove students as needed)"></textarea>
        <button className="button center"  type="submit">Submit</button>
      </form>
    )
  }
}

export default Phase3Form;
