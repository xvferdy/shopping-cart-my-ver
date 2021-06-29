import React, { useContext } from "react";

//context to use
import { DispatchCartsContext } from "../context/Carts.context";
import { CartsContext } from "../context/Carts.context";

function Product({ id, product, price }) {
  const dispatch = useContext(DispatchCartsContext);
  const carts = useContext(CartsContext);

  const inCart = carts.some((productId) => productId.id === id);

  return (
    <div>
      <div>
        {product}: {price}{" "}
        <button
          disabled={inCart}
          onClick={() => {
            dispatch({ type: "ADD", product: { id, product, price } });
          }}
        >
          {inCart ? "Already in the cart" : "  Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default Product;
