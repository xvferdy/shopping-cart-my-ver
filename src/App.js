import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Menu from "./pages/Menu";
import ShoppingCart from "./pages/ShoppingCart";
import Nav from "./components/Nav";
//context provider
import { CartProvider } from "./context/Carts.context";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <CartProvider>
            <Route path="/" exact component={Menu} />
            <Route path="/shopping-cart" exact component={ShoppingCart} />
          </CartProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
