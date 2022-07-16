import React, { useState, useEffect } from "react";

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
	//Get the button
	var mybutton = document.getElementById("myBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = () => {
		scrollFunction();
	};

	const scrollFunction = () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	};

	// When the user clicks on the button, scroll to the top of the document
	const topFunction = () => {
		// alert("You Clicked");
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};
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
			<button
				type="button"
				className="btn btn-outline-info"
				onClick={() => topFunction()}
				id="myBtn"
				title="Go to top"
			>
				TOP
			</button>
		</div>
	);
}

export default ListAllProducts;
