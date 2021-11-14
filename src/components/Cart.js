import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { DispatchCartsContext } from "../context/Carts.context";

function Cart({ id, product, price, quantity, img, color }) {
	// context to use
	const dispatch = useContext(DispatchCartsContext);

	let total = price * quantity;

	// console.log("Cart rendered");

	return (
		<div className="cart-content">
			<figure>
				<img className="cart-img" src={img} alt="product" />
			</figure>

			<div className="cart-name-prices">
				<div className="cart-name"> {product}</div>
				<div className="cart-color">Color: {color}</div>
				<div className="cart-prices">Per Item Rp. {price}</div>
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
						dispatch({
							type: "EDITQTY",
							id: id,
							quantity: Number(e.target.value),
						});
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

			<div className="cart-item-total">
				<div>{`Total Rp.${total}`}</div>
			</div>

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
