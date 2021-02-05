import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      formData: { name: "kjlkjkl", surname: " ", age: "", idNumber: "", place: "" },
      bootCampStudents: [],
      searchText: "",
      selectedEdit: {},
      isEdit: false
    }
  }

  submit = (e) => {
    e.preventDefault();
    console.log(this.state.formData)
    this.setState({ bootCampStudents: [...this.state.bootCampStudents, this.state.formData] })
  }


  searchValue = () => {
    var filterList = []

    filterList.push(this.state.bootCampStudents.filter(student => student.name == this.state.searchText))
    console.log("filterList", filterList)
    this.setState({ bootCampStudents: filterList })
  }

  editStudentPlace = (place, index) => {
    this.setState({ selectedEdit: { place, index } })
    this.setState({ isEdit: true })
  }

  handleEditChange = (e) => {
    var { selectedEdit } = this.state
    this.setState({ selectedEdit: { index: selectedEdit.index, place: e.target.value } })
  }

  saveEdit = () => {
    var temp = []
    var { index, place } = this.state.selectedEdit
    this.state.bootCampStudents[index].place = place;
    temp.push(...this.state.bootCampStudents);
    this.setState({ bootCampStudents: temp })

  }

  handleChange = (e) => {
    var { formData } = this.state

    this.setState({ formData: { ...formData, [e.target.name]: e.target.value } })
  }

  render () {
    const { name, surname, age, idNumber, place } = this.state.formData;
    const { searchText, selectedEdit } = this.state;
    return <div>
      <form onSubmit={(e) => this.submit(e)}>
        <input placeholder="name" value={name}
          onChange={(e) => this.handleChange(e)}
          name="name"
        />
        <input placeholder="surname" value={surname}
          onChange={(e) => this.handleChange(e)}
          name="surname"
        />
        <input placeholder="place" value={place}
          onChange={(e) => this.handleChange(e)}
          name="place"
        />
        <input placeholder="age" value={age}
          onChange={(e) => this.handleChange(e)}
          name="age"
        />
        <input placeholder="idNumber" value={idNumber}
          onChange={(e) => this.handleChange(e)}
          name="idNumber"
        />

        <div>
          <input type="submit" />
          <button onClick={() => this.searchValue()}>search </button>
        </div>

      </form>
      <input placeholder="search for student" value={searchText} onChange={(e) => this.setState({ searchText: e.target.value })} />
      <table style={{ width: "50%" }}>
        <tr>
          <th> name </th>
          <th>surname </th>
          <th>age </th>
          <th>idNumber </th>
          <th>place </th>
        </tr>
        {this.state.bootCampStudents.map((student, index) => <tr onClick={() => this.editStudentPlace(student.place, index)}>
          <td>{student.name} </td>
          <td>{student.surname} </td>
          <td>{student.age} </td>
          <td>{student.idNumber} </td>
          <td>{student.place} </td>
        </tr>)}
      </table>
      <div>
        <input value={selectedEdit.place} onChange={(e) => this.handleEditChange(e)} />
        <button onClick={() => this.saveEdit()}> save edit </button>
      </div>


    </div>;
  }
}

export default App;
