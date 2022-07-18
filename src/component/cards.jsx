import React from "react";

const Cards = ({ cart, item, handleClick, handleRemove }) => {
	const { newArrival, category, product, description, price, image, onSale } =
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
						<span className="badge badge-dark">ON SALE 10%</span>
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
				<p>
					Price -
					{item.onSale ? (
						<span>
							<span className="text-decoration-line-through font-italic">
								<del className="opacity-50">${price.toFixed(2)}</del>
							</span>
							<span className="mx-2 text-danger">
								${Math.round(price - price * 0.1).toFixed(2)}
							</span>
						</span>
					) : (
						<span>${price.toFixed(2)}</span>
					)}
				</p>

				{/* <button className='btn btn-success btn-sm'
            onClick={() => handleClick(item)}
            >Add to Cart</button> */}

				{(cart || "").includes(item) ? (
					<button
						className="btn btn-danger btn-sm "
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
