import React, { useContext } from "react";

// material
import Button from "@material-ui/core/Button";

//context to use
import { DispatchCartsContext } from "../context/Carts.context";

function Cart({ id, product, price, quantity, img }) {
  const dispatch = useContext(DispatchCartsContext);

  let total = price * quantity;

  return (
    <div className="cart-content">
      <img className="cart-img" src={img} alt="product" />

      <div className="cart-name-prices">
        <div>{product}</div>
        <div>Rp.{price}</div>
      </div>

      <div className="cart-quantity">
        <button
          onClick={() => {
            dispatch({ type: "LESSQTY", id: id });
          }}
        >
          -
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
            dispatch({ type: "MOREQTY", id: id });
          }}
        >
          +
        </button>
      </div>

      <div className="cart-item-total">{`Total: Rp.${total}`}</div>

      <Button
        variant="outlined"
        onClick={() => {
          dispatch({ type: "REMOVE", id: id });
        }}
      >
        Remove
      </Button>
    </div>
  );
}

export default Cart;
