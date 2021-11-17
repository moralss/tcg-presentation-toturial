import { useEffect, useState } from "react"
import history from '../history'


const Register = () => {
  const [name, setName] = useState("")

  console.log("running ")

  useEffect(() => {
    console.log("useEffect method with empty brackets")
  }, [])



  const registerUser = () => {
    console.log(name)
    if (name === 'bob') {
      history.push("/home")
    } else {
      history.push("/login")
    }


  }


  return (
    
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => registerUser()}> register user</button>
    </div>
  )
}



export default Register