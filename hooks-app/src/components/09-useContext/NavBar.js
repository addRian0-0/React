import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#" >useContext</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                <div className="navbar-nav">

                    <NavLink className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')} className="nav-item nav-link" to="/">
                        Home
                    </NavLink>


                    <NavLink className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')} className="nav-item nav-link" to="/about">
                        About
                    </NavLink>


                    <NavLink className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')} className="nav-item nav-link" to="/login">
                        Login
                    </NavLink>

                </div>
            </div>
        </nav>
    )
}
