import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
	const [price, setPrice] = useState(0);

	const handleRemove = (id) => {
		const arr = cart.filter((item) => item.id !== id);
		setCart(arr);
		handlePrice();
	};

	const handlePrice = () => {
		let ans = 0;
		cart.map((item) => (ans += item.quanity * item.price));
		setPrice(ans);
	};

	useEffect(() => {
		handlePrice();
	});

	return (
		<article className="container">
			{cart.map((item) => (
				<div className="cart_box" key={item.id}>
					<div className="cart_img">
						<img src={item.image} alt={item.type} />
						<p>{item.description}</p>
					</div>
					<div>
						<button
							className="btn btn-outline-primary btn-sm"
							onClick={() => handleChange(item, 1)}
						>
							+
						</button>
						<button className="btn btn-info btn-sm">{item.quanity}</button>
						<button
							className="btn btn-outline-primary btn-sm"
							onClick={() => handleChange(item, -1)}
						>
							-
						</button>
					</div>
					<div>
						<span className="text-dark">{item.price.toFixed(2)}</span>
						<button
							className="btn btn-danger btn-sm"
							onClick={() => handleRemove(item.id)}
						>
							Remove
						</button>
					</div>
				</div>
			))}

			{cart.length === 0 ? (
				<div className="container">
					<h4 className="text-center mt-3 text-info">
						Your Cart is empty for now.
					</h4>
				</div>
			) : (
				<div className="total">
					<span className="text-dark">Total Price: </span>
					<span className="text-dark">${price.toFixed(2)}</span>
				</div>
			)}
		</article>
	);
};

export default Cart;
