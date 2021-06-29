import React from "react";
import "./App.css";
import CartList from "./components/CartList";
import ProductList from "./components/ProductList";

//context provider
import { CartProvider } from "./context/Carts.context";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <CartList />
        <hr />
        <ProductList />
      </CartProvider>
    </div>
  );
}

export default App;
