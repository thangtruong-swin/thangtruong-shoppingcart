import React, { useState } from "react";

import { getListProducts, ShuffleListProducts } from "../data";
import Cards from "./cards";
// import { ShuffleListProducts } from "./shuffleListProducts";

// const ListAllProducts = ({ cart, handleClick, handleRemove }) => {
// 	console.log(ShuffleListProducts(listProducts));

// 	return (
// 		<div className="listproducts container-sm">
// 			{listProducts.map((item) => (
// 				<Cards
// 					key={item.id}
// 					cart={cart}
// 					item={item}
// 					handleClick={handleClick}
// 					handleRemove={handleRemove}
// 				/>
// 			))}
// 		</div>
// 	);
// };

// function ShuffleListProducts(array) {
// 	let curId = array.length;
// 	// There remain elements to shuffle
// 	while (0 !== curId) {
// 		// Pick a remaining element
// 		let randId = Math.floor(Math.random() * curId);
// 		curId -= 1;
// 		// Swap it with the current element.
// 		let tmp = array[curId];
// 		array[curId] = array[randId];
// 		array[randId] = tmp;
// 	}
// 	console.log("ShuffleListProducts clicked");
// 	return array;
// }

export function ListAllProducts({ cart, handleClick, handleRemove }) {
	const [listProducts, setListProducts] = useState([]);
	// setListProducts(getListProducts());

	// const newLists = ShuffleListProducts(getListProducts());
	return (
		<div className="listproducts container-sm">
			{getListProducts().map((item) => (
				<Cards
					key={item.id}
					cart={cart}
					item={item}
					handleClick={handleClick}
					handleRemove={handleRemove}
				/>
			))}
		</div>
	);
}

export default ListAllProducts;
