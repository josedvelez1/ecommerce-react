import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Purchases">Purchases</Link>
            <button>Cart</button>
        </div>
    );
};

export default NavBar;