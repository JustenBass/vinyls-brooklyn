import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import VinylList from './VinylList';
import CommentForm from './CommentForm';
import About from './About';
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar />
    <Switch>
      <Route exact path="/vinyls">
        <VinylList />
      </Route>

      <Route exact path="/comments">
        <CommentForm />
      </Route>

      <Route exact path="/">
        <About />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
