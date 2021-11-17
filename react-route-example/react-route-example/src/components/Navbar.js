import history from '../history'



const Navbar = () => {
  const navigatePage = (pageName) => {
    history.push(pageName)
  }

  return (
    <div>
      <button onClick={() => navigatePage('login')}> Login </button>
      <button onClick={() => navigatePage('home')}> Home </button>
    </div>
  )
}


export default Navbar