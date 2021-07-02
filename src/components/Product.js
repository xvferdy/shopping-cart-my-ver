import React, { useContext } from "react";

// material
import Button from "@material-ui/core/Button";

//context to use
import { DispatchCartsContext } from "../context/Carts.context";
import { CartsContext } from "../context/Carts.context";

function Product({ id, product, price, img, color }) {
  const dispatch = useContext(DispatchCartsContext);
  const carts = useContext(CartsContext);

  const inCart = carts.some((productId) => productId.id === id);

  return (
    <div className="product-content">
      <figure>
        <img className="product-img" src={img} alt="baju" />
      </figure>

      <p className="product-name">{`${product} - ${color}`}</p>

      <div className="product-bottom">
        <p className="product-price">Rp. {price}</p>
        <Button
          variant="outlined"
          disabled={inCart}
          onClick={() => {
            dispatch({
              type: "ADD",
              product: { id, product, price, img, color },
            });
          }}
        >
          {inCart ? "Added!" : "  Add to Cart"}
        </Button>
      </div>
    </div>
  );
}

export default Product;
