import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCart } from '../store/Slices/cart.slice';

const NavBar = () => {

    const logout = () => localStorage.setItem("token", "")
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Purchases">Purchases</Link>
            <button>Cart</button>
            <button onClick={logout} >Log out</button>
        </div>
    );
};

export default NavBar;