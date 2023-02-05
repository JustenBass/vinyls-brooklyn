import React from 'react';
import VinylList from './VinylList';
import CommentForm from './CommentForm';
import About from './About';
import './App.css';

function App() {
  return (
    <div className="App">
     <VinylList />

     <CommentForm />

     <About />
    </div>
  );
}

export default App;
