import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper  blue lighten-1">
                <NavLink to="/" className="brand-logo center">Toolii</NavLink>
            </div>
        </nav>
    )
}

export default NavBar