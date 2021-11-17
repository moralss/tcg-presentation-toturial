import { Router, Route } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import history from '../history'
import Navbar from '../components/Navbar'
import Register from '../components/Register'

export const mainRoutes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Route
        exact
        strict
        path="/home"
        render={props => <Home  {...props} />}

      />
      <Route
        exact
        strict
        path="/login"
        render={props => <Login  {...props} />}

      />

      <Route
        exact
        strict
        path="/"
        render={props => <Register  {...props} />}

      />
    </Router>

  )
}


