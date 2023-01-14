import React from 'react'
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container-fluid mx-4">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand" to="/">
         TGV
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
             
            {/*<li className="nav-item dropdown mx-3">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Service
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><NavLink className="dropdown-item" to="../webService">Web Service</NavLink></li>
                  <li><NavLink className="dropdown-item" to="../appDevelopment">App Development</NavLink></li>

                  <li><NavLink className="dropdown-item" to="../digitalMar">Digital Markiting</NavLink></li>
                </ul>
              </li>*/}
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="../webService">Service</NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="../blog">Blog</NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="../about">About Us</NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="../contact">Contact Us</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
