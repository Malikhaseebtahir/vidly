import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <nav className="navbar navbar-expand navbar-light bg-light" aria-label="Second navbar example">
                    <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">Vidly</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/customers">Customers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/rentals">Rentals</NavLink>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>            
            </>
        );
    }
}
 
export default Navbar;