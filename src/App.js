import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/navBar";
import ListAllProducts from "./component/listAllProducts";
import Cart from "./component/cart";
import NewArrivalProducts from "./component/newArrival";
import PageNotFound from "./component/pageNotFound";
import PageOnSale from "./component/onSale";
import Category from "./component/category";
import Footer from "./component/footer";
import { getListProducts } from "./data";

// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	// const [show, setShow] = useState(true);
	const searchQuery = "";
	const [searchInput, setSearchInput] = useState("");
	const [cart, setCart] = useState([]);
	const [listProducts, setListProducts] = useState([]);
	useEffect(() => {
		setListProducts(getListProducts());
		// console.log("ListAllProducts called");
	}, []);

	const handleClick = (item) => {
		if (cart.indexOf(item) !== -1) return;
		setCart([...cart, item]);
	};

	const handleRemove = (item) => {
		// const filteredCart = cart.filter((c) => c.id !== item.id)
		// setCart(filteredCart);
		setCart(cart.filter((c) => c.id !== item.id));
	};

	const handleChange = (item, d) => {
		const ind = cart.indexOf(item);
		const arr = cart;
		arr[ind].quanity += d;
		if (arr[ind].quanity === 0) arr[ind].quanity = 1;
		setCart([...arr]);
	};

	const handleSearchItems = (searchInput) => {
		setSearchInput(searchInput);
		if (searchInput.length > 0) {
			const filtered = listProducts.filter((item) =>
				item.type.toLowerCase().startsWith(searchInput.toLowerCase())
			);
			setListProducts(filtered);
		} else {
			setListProducts(getListProducts());
		}
	};
	return (
		<div id="content-wrap">
			<NavBar
				size={cart.length}
				value={searchInput}
				searchItems={handleSearchItems}
			/>
			<Routes>
				{/* <Route path="/" element={  <NavBar size={cart.length} />} /> */}
				<Route
					path="/"
					element={
						<ListAllProducts
							cart={cart}
							handleClick={handleClick}
							handleRemove={handleRemove}
							listProducts={listProducts}
						/>
					}
				/>
				<Route
					path="/DesktopCategory/:id"
					element={
						<Category
							cart={cart}
							handleClick={handleClick}
							handleRemove={handleRemove}
						/>
					}
				/>
				<Route
					path="/LaptopCategory/:id"
					element={
						<Category
							cart={cart}
							handleClick={handleClick}
							handleRemove={handleRemove}
						/>
					}
				/>
				<Route path="*" element={<PageNotFound />} />
				<Route
					path="/cart"
					element={
						<Cart cart={cart} setCart={setCart} handleChange={handleChange} />
					}
				/>
				<Route path="newarrivalproducts" element={<NewArrivalProducts />} />
				<Route path="/onsale" element={<PageOnSale />} />
			</Routes>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default App;
