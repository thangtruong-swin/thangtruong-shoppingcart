import React from "react";
import listProducts from "../data";
import Cards from "./cards";

const ListAllProducts = ({ cart, handleClick, handleRemove }) => {
	return (
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
	);
};

export default ListAllProducts;
