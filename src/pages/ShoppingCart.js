import React from "react";
import CartList from "../components/CartList";
import "../styles/ShoppingCart.css";

function ShoppingCart() {
  return (
    <div className="shop-container">
      <h1>Shopping Cart</h1>
      <section className="shop-content">
        <CartList />
      </section>
    </div>
  );
}

export default ShoppingCart;
