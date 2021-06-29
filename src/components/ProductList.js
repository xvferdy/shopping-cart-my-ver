import React from "react";
import Product from "./Product";

function ProductList() {
  //contoh produk yang kita miliki
  const products = [
    {
      id: 1,
      product: "Kacamata",
      price: 1000,
    },
    {
      id: 2,
      product: "Piring",
      price: 1000,
    },
    {
      id: 3,
      product: "Topi",
      price: 2000,
    },
  ];

  console.log("ProductList rendered");

  return (
    <div>
      <h3>List of Product</h3>

      {products.map((product, idx) => (
        <Product key={idx} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
