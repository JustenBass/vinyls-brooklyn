import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import VinylList from './VinylList';
import AddVinylForm from './AddVinylForm'
import About from './About';
import './App.css';

function App() {
  const[vinylData, setVinylData] = useState([])


  useEffect(() => {
      fetch('http://localhost:3001/vinyls')
      .then((r) => r.json())
      .then((data) => setVinylData(data))
  }, [])

  return (
    <div className="App">
     <NavBar />
    <Switch>
      <Route exact path="/vinyls">
        <VinylList
        vinylData={vinylData}
        />
      </Route>

      <Route exact path="/add-vinyl">
        <AddVinylForm />
      </Route>

      <Route exact path="/">
        <About />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
