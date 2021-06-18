import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies.component';
import Home from './components/home';
import Customers from './components/customers';
import Rentals from './components/rentals';
import Navbar from './components/navbar';
import NotFound from './components/not-found';
import MovieDetails from './components/movieDetails';

function App() {
  return (
    <React.Fragment>
      <div>
        <Navbar/>
        <main className="container p-5">
          <Switch>
            <Route path="/movies/:id" component={MovieDetails}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/customers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Route path="/not-found" component={NotFound}/>
            <Redirect from="/" to="/movies" exact component={Movies}/>
            <Redirect to="/not-found"/>
          </Switch>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
