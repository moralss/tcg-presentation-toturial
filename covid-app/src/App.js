import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "", surname: "", status: "",
      patients: [],
    }
  }


  saveStatus (e) {
    this.setState({ status: e.target.value })
  }

  handleInputChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  savePatientDetails (e) {
    e.preventDefault();
    const { name, surname, status, patients } = this.state;
    let starterStatus = [{ name: "positive", status: false },
    { name: "negative", status: false },
    { name: "recovery", status: false }]

    const filteredStatus = starterStatus.filter(item => item.name !== status)
    const newPatient = { name, surname, status: [...filteredStatus, { name: status, status: true }] }
    this.setState({ patients: [...patients, newPatient] })
    this.setState({ name: "", surname: "", status: "" })
    console.log(this.state)
  }

  handleChange = (e) => {
    const { name, surname, status, patients } = this.state;
    const findIndex = patients.findIndex(item => item.name == e.target.name);
    var patientsList = [...patients]
    for (var j in patientsList[findIndex].status) {
      patientsList[findIndex].status[j].status = false
    }

    let filterList = patients[findIndex].status.filter(item => item.name != e.target.value)
    var result = { status: [...filterList, { name: e.target.value, status: true }] }
    console.log("filterList", result)
    patients[findIndex].status = result.status
    this.setState({ patients: patientsList })

  }

  render () {
    const { name, patients, surname, list } = this.state
    return (
      <div className="App">
        <h1> COVID APP</h1>
        <form onSubmit={(e) => this.savePatientDetails(e)}>
          <input type="text" onChange={(e) => this.handleInputChange(e)} name="name" placeholder="name" value={name} />
          <input type="text" onChange={(e) => this.handleInputChange(e)} name="surname" placeholder="surname" value={surname} />
          <div style={{ display: "inline" }} onChange={(e) => this.saveStatus(e)}>
            <input name="status" type="radio" value="positive" /> Positive
            <input name="status" type="radio" value="negative" /> Negative
            <input name="status" type="radio" value="recovery" /> recovery
          </div>
          <input type="submit" />
        </form>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2 , 1fr)" }}>
          <div>
            <h1> patients who are positive </h1>
            {patients.filter(patient => patient.status.filter(item => item.name == "positive" && item.status == true)[0]).
              map((patient, index) => <div style={{ display: "flex", margin: "5rem" }}>
                <li style={{ listStyle: "none" }}> {patient.name}</li>
                <li style={{ listStyle: "none" }}> {patient.surname}</li>
                <div style={{ display: "inline" }}>
                  {patient.status.map(item =>
                    <div>
                      <input name={patient.name} index={index} type="radio" onChange={(e) => this.handleChange(e)} checked={item.status} value={item.name} /> {item.name}
                    </div>
                  )}
                </div>
              </div>)}
          </div>
          <div>
            <h1> patients who are negative </h1>
            {patients.filter(patient => patient.status.filter(item => item.name == "negative" && item.status == true)[0]).
              map((patient, index) => <div style={{ display: "flex", margin: "5rem" }}>
                <li style={{ listStyle: "none" }}> {patient.name}  </li>
                <li style={{ listStyle: "none" }}> {patient.surname}  </li>
                <div style={{ display: "inline" }}>
                  {patient.status.map(item =>
                    <div>
                      <input name={patient.name} index={index} type="radio" onChange={(e) => this.handleChange(e)} checked={item.status} value={item.name} /> {item.name}
                    </div>
                  )}
                </div>
              </div>)}
          </div>
          <div>
            <h1> patients who are recovery</h1>
            {patients.filter(patient => patient.status.filter(item => item.name == "recovery" && item.status == true)[0]).
              map((patient, index) => <div style={{ display: "flex", margin: "5rem" }}>
                <li style={{ listStyle: "none" }}> {patient.name}</li>
                <li style={{ listStyle: "none" }}> {patient.surname}</li>
                <div style={{ display: "inline" }} >
                  {patient.status.map(item =>
                    <div>
                      <input name={patient.name} index={index} type="radio" onChange={(e) => this.handleChange(e)} checked={item.status} value={item.name} /> {item.name}
                    </div>
                  )}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
