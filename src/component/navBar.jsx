import React from "react";
import { Link } from "react-router-dom";
import {
	getDesktopCategories,
	getLaptopCategories,
	getMobileCategories,
} from "../fakeCategories";

const NavBar = ({ size }) => {
	let desktopCategories = getDesktopCategories();
	let laptopCategories = getLaptopCategories();
	let mobileCategories = getMobileCategories();
	return (
		<React.Fragment>
			<div className="navBar1 ">
				<a href="#">
					<i className="fa-solid fa-truck"></i>
					Free Delivery
				</a>
				<a href="#">
					<i className="fa-solid fa-person-walking-arrow-loop-left"></i>
					Free Return
				</a>
				<div className="navbar1-right">
					<a href="#">
						<i className="fa-solid fa-envelope"></i>
						Contact Us
					</a>
					<a href="#">
						<i className="fa-solid fa-user"></i>
						Login/Register
					</a>
				</div>
			</div>

			<div className="text-bg-warning p-4 text-center">
				<h2>Take a Further 15%</h2>
			</div>

			<nav className="navbar navbar-expand-lg bg-light ">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
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
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/newarrivalproducts" className="nav-link">
									{" "}
									New Arrival
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/onsale" className="nav-link">
									On Sale
								</Link>
							</li>
							<li className="nav-item dropdown">
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
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
							<li className="nav-item dropdown">
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
											<a className="dropdown-item" key={lap.name}>
												{lap.name}
											</a>
										</li>
									))}
								</ul>
							</li>

							<li className="nav-item dropdown">
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
									<i className="fa-solid fa-cart-shopping"></i>
								</Link>
								<span className="position-absolute badge rounded-pill text-bg-info">
									{size}
								</span>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button
								className="btn btn-outline-warning text-dark"
								type="submit"
							>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default NavBar;
