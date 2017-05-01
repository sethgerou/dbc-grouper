import React, { Component } from 'react';
// import $ from 'jquery';
import logo from './dbc-logo.svg';
import fish from './grouper.png';
import './App.css';
import ButtonStrip from './ButtonStrip';
import NewCohortForm from './NewCohortForm';
import Phase2Form from './Phase2Form';
import Phase3Form from './Phase3Form';
import Groups from './Groups';
import jsonData from './groupsize.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedForm: '',
      names: [],
    };
    this.formSelect = this.formSelect.bind(this);
    this.getNames = this.getNames.bind(this);
  }

formSelect(selection) {
  this.setState({
    selectedForm: selection,
  });
}

getNames(names) {
  this.setState({
    names: names
  })
}

getForms() {
  if (this.state.selectedForm === 'NewCohortForm') {
    return <NewCohortForm namesSubmission={this.getNames}/>;
  }
  if (this.state.selectedForm === 'Phase2Form') {
    return <Phase2Form />;
  }
  if (this.state.selectedForm === 'Phase3Form') {
    return <Phase3Form />;
  }
}

showGroups() {
  const weekOne = jsonData[this.state.names.length.toString()]
  const weekTwo = jsonData[this.state.names.length.toString()]
  const weekThree = jsonData[this.state.names.length.toString()]

  for (var group in weekOne) {
    for (var spot in weekOne[group]) {
      var randIndex = Math.floor(Math.random()*this.state.names.length)
      var name = this.state.names[randIndex]
      weekOne[group][spot] = name
      this.state.names.splice(randIndex, 1)
      console.log(weekOne[group][spot])
    }
  }

  if (weekOne) {
    return <Groups sendGroups={weekOne} />
  }

}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="title">grouper </h3>
          <img className="title" src={fish} alt="fish"/>
        </div>
          <ButtonStrip buttonPress={this.formSelect}/>
          <div id="forms">
            {this.getForms()}
          </div>
          {this.showGroups()}

      </div>
    );
  }
}

export default App;
