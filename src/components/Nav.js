import React from "react";
import "../styles/Nav.css";
import logo from "../assets/logo2.png";

import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <header className="nav-content">
        <nav>
          <NavLink exact activeClassName="active-link" to="/">
            Market
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/shopping-cart">
            Cart
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
