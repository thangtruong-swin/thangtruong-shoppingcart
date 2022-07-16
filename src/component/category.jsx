import Cards from "./cards";
import React from "react";
import { useParams } from "react-router-dom";
import { getListProducts } from "../data";
import TopButton from "./topbutton";

export default function DetailPage({ cart, handleClick, handleRemove }) {
	// let params = useParams();
	let { id } = useParams();

	const filteredProducts = getListProducts().filter(function (item) {
		return item.type === id;
	});
	// const getItemsByType = getProductsType(id);
	// console.log(filteredProducts);
	return (
		<main style={{ padding: "1rem" }} className="container">
			{/* <h2>Hello: {id}</h2> */}
			<div className="listproducts container">
				{filteredProducts.map((item) => (
					// <Cards key={item.id} item={item} handleClick={handleClick} />
					<Cards
						key={item.id}
						cart={cart}
						item={item}
						handleClick={handleClick}
						handleRemove={handleRemove}
					/>
				))}
			</div>

			<TopButton />
		</main>
	);
}
