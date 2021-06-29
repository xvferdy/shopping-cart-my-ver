import React, { useContext } from "react";

//context to use
import { DispatchCartsContext } from "../context/Carts.context";

function Cart({ id, product, price, quantity }) {
  const dispatch = useContext(DispatchCartsContext);

  let total = price * quantity;

  return (
    <div>
      <div>
        {`${product} Rp.${price} x`}{" "}
        <button
          onClick={() => {
            dispatch({ type: "MOREQTY", id: id });
          }}
        >
          +
        </button>
        <input
          value={quantity}
          onChange={(e) => {
            dispatch({ type: "EDITQTY", id: id, quantity: e.target.value });
          }}
          style={{ width: "50px" }}
          type="number"
          min="1"
          max="10"
        />
        <button
          onClick={() => {
            dispatch({ type: "LESSQTY", id: id });
          }}
        >
          -
        </button>{" "}
        {`Total: Rp.${total}`}{" "}
        <button
          onClick={() => {
            dispatch({ type: "REMOVE", id: id });
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Cart;
