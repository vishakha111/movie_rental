import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Navbar= ()=>{
    return(
        <main className='container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-basic">
            <Link class="navbar-brand" to="#">Movie_Rental</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <NavLink class="nav-link" to="/movies">Movie <span class="sr-only">(current)</span></NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link" to="/customers">Customer</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link" to="/rental">Rental</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link" to="/loginform">Login</NavLink>
                </li>
                </ul>
            </div>
            </nav>
            </main>
    )
}

export default Navbar;

