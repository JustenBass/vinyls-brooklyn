import React from 'react';
import NavBar from './NavBar';
import VinylList from './VinylList';
import CommentForm from './CommentForm';
import About from './About';
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <VinylList />

     <CommentForm />

     <About />
    </div>
  );
}

export default App;
