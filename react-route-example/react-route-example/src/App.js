import logo from './logo.svg';
import './App.css'
import { mainRoutes } from './routes'


function App () {

  return (
    <div className="App">
      {mainRoutes()}
    </div>
  );
}

export default App;
