export default function InputField (props) {
  return (<div>
    <label> {props.label}</label>
    <input
      type="text"
      value={props.value}
      name={props.label}
      onChange={(e) => props.handleChange(e)} />
  </div>)
}