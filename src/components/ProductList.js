import React from "react";
import Product from "./Product";
import products from "../helpers/markets";

function ProductList() {
  // console.log("ProductList rendered");

  return (
    <div className="product-list-container">
      <div className="product-list-content">
        {products.map((product, idx) => (
          <Product key={idx} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
