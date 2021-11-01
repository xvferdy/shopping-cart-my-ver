import React, { createContext, useReducer, useEffect } from "react";
import cartReducer from "../reducer/Carts.reducer";

// context
export const CartsContext = createContext();
export const DispatchCartsContext = createContext();

// context provider
const defaultCart = [];

export function CartProvider(props) {
  // const [carts, dispatch] = useReducer(cartReducer, defaultCart);

  const [carts, dispatch] = useReducer(cartReducer, defaultCart, () => {
    const localData = localStorage.getItem("carts");
    return localData ? JSON.parse(localData) : defaultCart;
  });

  // local storage
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  console.log("cartscontext");

  console.log(carts);

  return (
    <CartsContext.Provider value={carts}>
      <DispatchCartsContext.Provider value={dispatch}>
        {props.children}
      </DispatchCartsContext.Provider>
    </CartsContext.Provider>
  );
}
