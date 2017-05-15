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
// import jsonData from './groupsize.json';
import Student from './Student';
import Group from './Group';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedForm: '',
      students: [],
    };
    this.formSelect = this.formSelect.bind(this);
    this.getNames = this.getNames.bind(this);
  }
componentWillMount(){

}

formSelect(selection) {
  this.setState({
    selectedForm: selection,
  });
}

getNames(names) {
  const students = []
  for (const srcName of names) {
    const student = new Student(srcName)
    students.push(student)

  }
  this.setState({  // stores an array of input names
    students: students
  })


//   var pairdata = {};  //  for each name - adds name key and names array value to object
//   for (var name in names) {
//     pairdata[names[name]] = names.slice()
// }
//   for (const key of Object.keys(pairdata)) {
//       const i = pairdata[key].indexOf(key)
//       pairdata[key].splice(i, 1)
//   }
//     this.setState({
//       paired: pairdata,  // sets this.state.paired to object
//     });
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

showGroups = () => {

  var newGroups = []
  const studentsCount = this.state.students.length
  const halfStudents = Math.floor(studentsCount/2)
  if (halfStudents < 6) {
    const group = new Group();
    group.students = this.state.students.slice(0, halfStudents);
    const group2 = new Group();
    group2.students = this.state.students.slice(halfStudents, studentsCount);
  newGroups.push(group, group2)
} else if (halfStudents < 10) {
  const group = new Group();
  group.students = this.state.students.slice(0, halfStudents/2);
  const group2 = new Group();
  group2.students = this.state.students.slice(halfStudents/2, halfStudents);
  const group3 = new Group();
  group3.students = this.state.students.slice(halfStudents, studentsCount-(halfStudents/2))
  const group4 = new Group();
  group4.students = this.state.students.slice(studentsCount-(halfStudents/2), studentsCount)
    newGroups.push(group, group2, group3, group4)
}
return <Groups sendGroups={newGroups} />

  // const weekOne = jsonData[this.state.students.length.toString()]
  // debugger
  // const weekTwo = jsonData[this.state.students.length.toString()]
  // const weekThree = jsonData[this.state.students.length.toString()]
  //
  // for (var group in weekOne) {
  //   for (var spot in weekOne[group]) {
  //     var randIndex = Math.floor(Math.random()*this.state.students.length)
  //     var name = this.state.students[randIndex]
  //     weekOne[group][spot] = name
  //     this.state.students.splice(randIndex, 1)
  //   }
  // }


  //
  // if (weekOne) {
  //   return <Groups sendGroups={weekOne} />
  // }

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
