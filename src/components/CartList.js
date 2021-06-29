import React, { useContext } from "react";
import Cart from "./Cart";

//context to use
import { CartsContext } from "../context/Carts.context";

function CartList() {
  const carts = useContext(CartsContext);

  //aLL total products prices
  let total = carts.reduce(
    (accumulator, curr) => ({
      price: accumulator.price + curr.price * curr.quantity,
    }),
    { price: 0 }
  );

  console.log("CartList rendered");

  return (
    <div>
      <h3>List of Cart</h3>
      {carts.length > 0 ? (
        <>
          {carts.map((cart, idx) => (
            <Cart key={idx} {...cart} />
          ))}
          <p>Total that you will pay: Rp.{total.price}</p>
        </>
      ) : (
        <p>No item in the cart</p>
      )}
    </div>
  );
}

export default CartList;
