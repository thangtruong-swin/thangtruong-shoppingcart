import React from "react";

const Cards = ({ cart, item, handleClick, handleRemove }) => {
	const { newArrival, onSale, category, product, description, price, image } =
		item;

	return (
		<div className="cards">
			<div className="image_box">
				{item.newArrival ? (
					<div className="item-newArrvial">
						<span className="badge badge-dark">New Arrival</span>
					</div>
				) : (
					""
				)}
				{item.onSale ? (
					<div className="item-Onsale">
						<span className="badge badge-dark">ON SALE</span>
					</div>
				) : (
					""
				)}

				<img src={image} alt="{type}" />
			</div>
			{/* className="details" */}
			<div className="details">
				<p className="mt-1 text-primary">
					{category + " - "}
					{product}
				</p>
				<p>{description}</p>
				<p className="fw-bold">Price - ${price.toFixed(2)}</p>

				{/* <button className='btn btn-success btn-sm'
            onClick={() => handleClick(item)}
            >Add to Cart</button> */}

				{(cart || "").includes(item) ? (
					<button
						className="btn btn-danger btn-sm"
						onClick={() => handleRemove(item)}
					>
						Remove from Cart
					</button>
				) : (
					<button
						className="btn btn-success btn-sm "
						onClick={() => handleClick(item)}
					>
						Add to Cart
					</button>
				)}
			</div>
		</div>
	);
};

export default Cards;
