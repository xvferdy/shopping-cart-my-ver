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
    <div className="cart-list-container">
      <div className="cart-list-content">
        {carts.length > 0 ? (
          <p>
            {carts.map((cart, idx) => (
              <>
                <Cart key={idx} {...cart} />
                <hr />
              </>
            ))}
            <p>Total that you will pay: Rp.{total.price}</p>
          </p>
        ) : (
          <p>No item in the cart</p>
        )}
      </div>
    </div>
  );
}

export default CartList;
