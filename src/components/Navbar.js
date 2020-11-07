import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        background: 'blue',
        textDecoration: 'none',
        color: 'white'
    }

    return (
        <div>
            <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
            <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Login</NavLink>
            <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Account</NavLink>
        </div>
    )
}


// login brings user to login page
// make account conditional based on if user is logged in or not
// conditional logout