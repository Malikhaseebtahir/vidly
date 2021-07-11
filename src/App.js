import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies.component';
import Customers from './components/customers';
import Rentals from './components/rentals';
import Navbar from './components/navbar';
import NotFound from './components/not-found';
import MovieDetails from './components/movieDetails';
import LoginForm from './components/login';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div>
        <Navbar/>
        <main className="container p-5">
          <Switch>
            <Route path="/movies/:id" component={MovieDetails}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/login" component={LoginForm}/>
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
