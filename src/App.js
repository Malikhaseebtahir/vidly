import React from 'react';
import './App.css';
import Movie from './components/movie.component';

function App() {
  return (
    <React.Fragment>
      <div className="container p-5">
        <Movie/>
      </div>
    </React.Fragment>
  );
}

export default App;
