import React, { createContext, useReducer } from "react";
import cartReducer from "../reducer/Carts.reducer";

//context
export const CartsContext = createContext();
export const DispatchCartsContext = createContext();

//context provider
const defaultCart = [];

export function CartProvider(props) {
  const [carts, dispatch] = useReducer(cartReducer, defaultCart);

  return (
    <CartsContext.Provider value={carts}>
      <DispatchCartsContext.Provider value={dispatch}>
        {props.children}
      </DispatchCartsContext.Provider>
    </CartsContext.Provider>
  );
}
