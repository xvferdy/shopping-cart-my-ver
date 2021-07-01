import React, { useContext } from "react";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

// material
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

//context to use
import { CartsContext } from "../context/Carts.context";

function Nav() {
  const carts = useContext(CartsContext);

  console.log(carts);

  return (
    <div className="nav-container">
      <header className="nav-content">
        <nav>
          <NavLink exact activeClassName="active-link" to="/">
            Market
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/shopping-cart">
            Cart <ShoppingCartIcon className="cart-icon" /> (
            {carts ? carts.length : 0})
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
