import React, { useContext } from "react";
import Cart from "./Cart";
import { useHistory } from "react-router-dom";

// picture
import cartempty from "../assets/cartempty.png";

// material
import Button from "@material-ui/core/Button";

//context to use
import { CartsContext } from "../context/Carts.context";

function CartList() {
  const carts = useContext(CartsContext);
  const history = useHistory();

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
          <>
            {carts.map((cart, idx) => (
              <div key={idx}>
                <Cart {...cart} />
                <hr />
              </div>
            ))}
            <div className="cart-bottom">
              <p className="total-text">Total All Rp. {total.price}</p>
              <div className="total-button">
                <Button
                  variant="outlined"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Back to Shopping
                </Button>

                <Button
                  className="checkout"
                  variant="contained"
                  color="secondary"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="empty">
            <img src={cartempty} alt="empty" />
          </div>
        )}
      </div>
    </div>
  );
}

export default CartList;
