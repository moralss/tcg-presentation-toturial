import React from 'react'
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '', surname: '', gender: '', color: '',
      isSelectAll: false,
      foodChoices: [{ status: false, name: 'pop' },
      { status: false, name: 'rice' }, { status: false, name: 'meat' }]
    }
  }


  handleChange (e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }


  saveRsvpDetails (e) {
    e.preventDefault();
    console.log(this.state)
  }

  handleCheckboxChange (e) {
    const newCheckBoxs = this.state.foodChoices
      .map(choice => {
        if (choice.name === e.target.name) {
          return { ...choice, status: e.target.checked }
        }

        return choice
      })

    this.setState({ foodChoices: newCheckBoxs })
  }

  handleCheckboxAll (e) {
    const newCheckBoxs = this.state.foodChoices
      .map(choice => {
        return { ...choice, status: e.target.checked }
      }
      )

    this.setState({ foodChoices: newCheckBoxs, isSelectAll: e.target.checked })
  }

  displayCheckedItems () {
    var selectedItems = this.state.foodChoices.filter(choice => choice.status == true)
    return (<div>
      {selectedItems.map(item => <div> {item.name} </div>)}
    </div>)

  }


  changeColor (e) {
    console.log("e", e.target.value)
    this.setState({ color: e.target.value })
  }

  render () {
    const { name, surname, gender, isSelectAll, color } = this.state;
    return (
      <div className="App">
        <form onSubmit={(e) => this.saveRsvpDetails(e)}>
          <InputField label="name" value={name} handleChange={(e) => this.handleChange(e)} />
          <InputField label="surname" value={surname} handleChange={(e) => this.handleChange(e)} />
          <input type="text"
            placeholder="color"
            value={this.state.color}
            onChange={(e) => this.setState({ color: e.target.value })} />
          <div>
            <label> gender </label>
            <div>
              <label> male </label>
              <input
                type="radio"
                value="male"
                name="gender"
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label> female</label>
              <input
                type="radio"
                value="female"
                name="gender"
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <div>
                <label> select all </label>
                <input
                  checked={isSelectAll}
                  name='checkboxAll'
                  onChange={(e) => this.handleCheckboxAll(e)} type="checkbox" />
              </div>
              {this.state.foodChoices.map(choice =>
                <div>
                  <label> {choice.name} </label>
                  <input
                    checked={choice.status}
                    name={choice.name}
                    onChange={(e) => this.handleCheckboxChange(e)} type="checkbox" />
                </div>
              )}
            </div>
          </div>
          <input type="submit" />
        </form>

        <div>
          <div>
            <label>name</label>
            {name}
          </div>
          <div>
            <label>surname</label>
            {surname}
          </div>
          <div>
            <label>gender</label>
            {gender}
          </div>
          <div>
            <label>choices</label>
            {this.displayCheckedItems()}
            {color}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
