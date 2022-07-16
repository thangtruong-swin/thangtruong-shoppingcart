import React from "react";
import { Link } from "react-router-dom";
import {
	getDesktopCategories,
	getLaptopCategories,
	getMobileCategories,
} from "../fakeCategories";

const NavBar = ({ size, searchInput, searchItems, clearInput }) => {
	let desktopCategories = getDesktopCategories();
	let laptopCategories = getLaptopCategories();
	let mobileCategories = getMobileCategories();
	return (
		<React.Fragment>
			<div className="navBar1 bg-success text-white">
				<i className="fa-solid fa-truck ">
					<span className="ms-2">Free Delivery</span>
				</i>
				<i className="fa-solid fa-person-walking-arrow-loop-left">
					<span className="ms-2">Free Return</span>
				</i>

				<div className="navbar1-right">
					<i className="fa-solid fa-envelope">
						<span className="ms-2">Contact Us</span>
					</i>
					<i className="fa-solid fa-user">
						<span className="ms-2">Login/Register</span>
					</i>
				</div>
			</div>

			<div className="text-bg-warning p-4 text-center">
				<h2>Take a Further 15%</h2>
			</div>

			<nav className="navbar navbar-expand-lg bg-light ">
				<div className="container-fluid ">
					<Link to="/" className="navbar-brand">
						{/* <i className="fa-solid fa-house-blank"></i> */}
						{/* <i class="fa-solid fa-house-chimney-user"></i> */}
						<i className="fa-brands fa-react"></i>
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<form className="d-flex searchform">
							<input
								className="form-control me-2"
								type="text"
								name="search"
								id="search"
								value={searchInput}
								placeholder="Search . . ."
								aria-label="Search"
								// onChange={(e) => onChange(e.currentTarget.value)}
								onChange={(e) => searchItems(e.currentTarget.value)}

								// onChange={searchItems}
							/>
							<button
								type="button"
								ass="close"
								aria-label="Close"
								onClick={clearInput}
							>
								<i className="fa-solid fa-xmark "></i>
								{/* <span aria-hidden="true">&times;</span> */}
							</button>
						</form>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
							<li className="nav-item mx-3">
								<Link to="/newarrivalproducts" className="nav-link">
									{" "}
									New Arrival
								</Link>
							</li>
							<li className="nav-item mx-3">
								<Link to="/onsale" className="nav-link">
									On Sale
								</Link>
							</li>
							<li className="nav-item dropdown mx-3">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Desktop
								</a>
								<ul className="dropdown-menu " aria-labelledby="navbarDropdown">
									{desktopCategories.map((cat) => (
										<div key={cat.name}>
											<li>
												{/* <a className="dropdown-item"> */}
												<Link
													className="dropdown-item"
													key={cat._id}
													to={`/DesktopCategory/${cat.name}`}
												>
													{cat.name}
												</Link>
												{/* </a> */}
											</li>
										</div>
									))}
								</ul>
							</li>
							<li className="nav-item dropdown mx-3">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Laptop
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									{laptopCategories.map((lap) => (
										<li key={lap._id}>
											<Link
												className="dropdown-item"
												key={lap.name}
												to={`/LaptopCategory/${lap.name}`}
											>
												{lap.name}
											</Link>
										</li>
									))}
								</ul>
							</li>

							<li className="nav-item dropdown mx-3">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Mobile
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									{mobileCategories.map((mol) => (
										<li key={mol._id}>
											<a className="dropdown-item" key={mol.name}>
												{mol.name}
											</a>
										</li>
									))}
								</ul>
							</li>

							<li className="navbar-brand nav-item">
								<Link to="/cart" className="nav-link ">
									<i className="fa-solid fa-cart-shopping "></i>
								</Link>
								<span className="navbar-brand nav-item position-absolute badge rounded-pill 	text-bg-info mx-4 ">
									{size}
								</span>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default NavBar;
