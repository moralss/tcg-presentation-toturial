import { Component } from "react";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { students: [], name: '', mark: '', average: '' }
  }

  onChange(e) {
    this.setState({ [e.target.name]: [e.target.value] })
  }


  calculateAverage = () => {
    var currentAverage = this.getAverage(this.state.students);
    this.setState({ average: currentAverage })

  }

  getAverage = (students) => {
    var totalMarks = 0;
    for (let i = 0; i < students.length; i++) {
      totalMarks += students[i].mark
    }

    var currentTotal = totalMarks / (students.length * 100);
    return currentTotal * 100;
  }

  saveStudent() {
    var newStudent = { name: this.state.name, mark: Number(this.state.mark) }
    this.setState({ students: [...this.state.students, newStudent], mark: '', name: '' })
  }

  render() {
    const { average, students, name, mark } = this.state;
    return (
      <div>
        Hello world
        <input name="name" onChange={(e) => this.onChange(e)} placeholder="name" value={name} />
        <input name="mark" onChange={(e) => this.onChange(e)} placeholder="mark" value={mark} />
        {students.map((student) => <div><li> name : {student.name} , mark : {student.mark} </li> </div>)}
        <button onClick={() => this.saveStudent()}> submit </button>
        <button onClick={() => this.calculateAverage()}>calculate average </button>
        <p>average {average}</p>
      </div>

    )
  }


}


export default App;
