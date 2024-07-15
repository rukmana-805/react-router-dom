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
                    <ul>
                        <NavLink to="/"><li>Home</li></NavLink>
                        <NavLink to="/about"><li>About   </li></NavLink>
                        <NavLink to="/contact"><li>Contact Us</li></NavLink>
                        <NavLink to="/filters"><li>Filters</li></NavLink>
                        <NavLink to="/login"><li>Login</li></NavLink>
                        <NavLink to="/secret"><li>Secrets</li></NavLink>
                    </ul>
                </div>
            </nav>

    </div>
  )
}
