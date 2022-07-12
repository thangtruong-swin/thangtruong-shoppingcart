import listProducts from "../data";

export function getProductsType({ id }) {
	listProducts.filter(function (item) {
		return item.type === id;
	});
}
