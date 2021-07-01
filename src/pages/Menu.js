import React from "react";
import "../styles/Menu.css";

import ProductList from "../components/ProductList";

function Menu() {
  return (
    <div className="menu-container">
      <h1>Our Products</h1>
      <section className="menu-content">
        <ProductList />
      </section>
    </div>
  );
}

export default Menu;
