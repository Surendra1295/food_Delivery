import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/patients">Manage customers</Link></li>
                <li><Link to="/doctors">Manage restaurents</Link></li>
                <li><Link to="/appointments">Manage order</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
