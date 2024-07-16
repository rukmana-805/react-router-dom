import React from 'react'
import "../Stylecomponent/Navbar.css";

import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
                <div className="leftside">
                    <div className="codegmu">
                        codeGMU
                    </div>
                </div>
                <div className="rightside">
                
                        <NavLink  className="item" to="/">Home</NavLink>
                        <NavLink className="item" to="/about">About   </NavLink>
                        <NavLink className="item" to="/contact">Contact Us</NavLink>
                        <NavLink className="item" to="/filters">Filters</NavLink>
                        <NavLink className="item" to="/login">Login</NavLink>
                        <NavLink className="item" to="/secret">Secrets</NavLink>
                </div>
            </nav>
    </div>
  )
}
