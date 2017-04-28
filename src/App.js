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
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="title">grouper </h3>
          <img className="title" src={fish} alt="fish"/>
        </div>
          <ButtonStrip />
          { if (1 === 1)
            {<NewCohortForm />}
          }
          {if (1 === 1)
            {<Phase2Form />}
          }
          {if (1 === 1)
            {<Phase3Form />}
          }
      </div>
    );
  }
}

export default App;
