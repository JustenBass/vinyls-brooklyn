import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import VinylList from './VinylList';
import AddVinyl from './AddVinyl';
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
        <VinylList
        vinylData={vinylData}

        />
      </Route>

      <Route exact path="/add-vinyl">
        <AddVinyl
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
