import React, { Component } from 'react';
import $ from 'jquery';
import logo from './dbc-logo.svg';
import fish from './grouper.png';
import './App.css';
import ButtonStrip from './ButtonStrip';
import NewCohortForm from './NewCohortForm';
import Phase2Form from './Phase2Form';
import Phase3Form from './Phase3Form';

class App extends Component {

componentDidMount() {
  this.showForms();
}

showforms() {
  if (true) {this.ReactDom.render(<NewCohortForm />, document.getElementById('forms'))}
  if (true) {this.ReactDom.render(<Phase2Form />, document.getElementById('forms'))}
  if (true) {this.ReactDom.render(<Phase3Form />, document.getElementById('forms'))}
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="title">grouper </h3>
          <img className="title" src={fish} alt="fish"/>
        </div>
          <ButtonStrip />
          <div id="forms">

          </div>

      </div>
    );
  }
}

export default App;
