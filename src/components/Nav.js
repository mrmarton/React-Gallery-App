import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => ( 
    <nav className="main-nav">
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/code">Code</NavLink></li>
            <li><NavLink to="/bike">Bike</NavLink></li>
            <li><NavLink to="/gym">Gym</NavLink></li>
        </ul>
    </nav>
);

export default Nav;