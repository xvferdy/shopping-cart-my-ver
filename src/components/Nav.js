import React, { useContext } from "react";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartsContext } from "../context/Carts.context";

function Nav() {
	// context to use
	const carts = useContext(CartsContext);

	// console.log("nav rendered");

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
