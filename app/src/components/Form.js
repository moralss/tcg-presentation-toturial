import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super()

    this.state = {
      color: "",
      name: "",
      names: [{ name: "sbu" }, { name: "mark" }],
      displayName: ""
    }
  }

  handleChange (e) {
    this.setState({ color: e.target.value })
    console.log(e)
  }

  componentWillMount () {
    console.log("componentWillMount")
  }

  componentDidMount () {
    console.log("componentDidMount")
  }

  displayName () {
    console.log("display name")
    this.setState({ displayName: this.state.name })
  }


  render () {
    return (
      <div style={{ backgroundColor: `${this.state.name}` }} className="shopping-list">
        <h1> my Form </h1>
        <input name="color"
          value={this.state.color}
          onChange={(e) => this.handleChange(e)}
          placeholder="enter color"
        />
        <input name="name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          placeholder="enter name"
        />
        {this.state.names.map(name => <div>{name.name} </div>)}
        <button onClick={() => this.displayName()}> display name </button>
        {this.state.displayName}
      </div>
    );
  }
}

export default Form