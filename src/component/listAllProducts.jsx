import React, { useState, useEffect } from "react";
import TopButton from "./topbutton";
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

export function ListAllProducts({
	cart,
	handleClick,
	handleRemove,
	listProducts,
	// topFunction,
}) {
	// const [listProducts, setListProducts] = useState([]);
	// setListProducts(getListProducts());
	// const newLists = ShuffleListProducts(getListProducts());
	// useEffect(() => {
	// 	setListProducts(getListProducts());
	// 	// console.log("ListAllProducts called");
	// }, []);
	return (
		<div>
			<div className="listproducts container-sm">
				{listProducts.map((item) => (
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
		</div>
	);
}

export default ListAllProducts;
