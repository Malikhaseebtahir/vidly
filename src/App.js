import React from 'react';
import './App.css';
import Movies from './components/movies.component';

function App() {
  return (
    <React.Fragment>
      <div className="container p-5">
        <Movies/>
      </div>
    </React.Fragment>
  );
}

export default App;
