import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import VinylPage from './VinylPage';
import AddUsed from './AddUsed';
import About from './About';
import './App.css';

function App() {
  const[vinylData, setVinylData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/vinyls')
    .then((r) => r.json())
    .then((data) => setVinylData(data))
}, [])

  function handleAddVinyl(newVinyl){
    setVinylData([...vinylData, newVinyl])
  }


  return (
    <div className="App">
     <NavBar />
    <Switch>
      <Route exact path="/vinyls">
        <VinylPage
        vinylData={vinylData}
        />
      </Route>

      <Route exact path="/add-vinyl">
        <AddUsed
        vinylData={vinylData}
        handleAddVinyl={handleAddVinyl}
        />
      </Route>

      <Route exact path="/">
        <About />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
