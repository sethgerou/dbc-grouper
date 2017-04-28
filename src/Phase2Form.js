import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class Phase2Form extends Component {
  render() {
    return(
      <form>
        <label><h3>Phase 2</h3></label>
        <textarea id="cohortNames"  name="cohortNames" rows="24" cols="40" placeholder="insert phase 1 groups here (one group per line, names comma separated)"></textarea>
        <button className="button center"  type="submit">Submit</button>
      </form>
    )
  }
}

export default Phase2Form;
