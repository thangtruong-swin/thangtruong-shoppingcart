import React from 'react';
import { Link } from "react-router-dom";
import { getDesktopCategories, getLaptopCategories, getMobileCategories } from '../fakeCategories';

const NavBar = ({ size }) => {
  let desktopCategories = getDesktopCategories();
  let laptopCategories = getLaptopCategories();
  let mobileCategories = getMobileCategories();
  return (  
    <div>
      <div className="navBar1 sticky-top">
        <a href="#">
          <i className="fa-solid fa-truck"></i>
          Free Delivery</a>
        <a href="#">
        <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
          Free Return</a>
        <div className="navbar1-right">
          <a href="#">
            <i className="fa-solid fa-envelope"></i>
            Contact Us</a>
          <a href="#">
            <i className="fa-solid fa-user"></i>
            Login/Register</a>
        </div>
      </div>

      <div className="text-bg-warning p-4 text-center">
        <h2>Take a Further 15%</h2>
      </div>

      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand"><i className="fa-brands fa-react"></i></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/newarrivalproducts" className="nav-link"> New Arrival</Link>
              {/* <a className="nav-link "  href="#"> New Arrival</a> */}
            </li>
            <li className="nav-item">
              <Link to="/onsale" className="nav-link">On Sale</Link>
            </li>
            <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Desktop
                </a>
                   {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {desktopCategories.map((cat) => (
                  <a className="dropdown-item"  key={cat.category}>
                      {cat.type}
                  </a>
                  ))}
                 </ul> */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {desktopCategories.map((cat) => (
                    <div>
                      <li key={cat._id + cat.name}>
                        <a className="dropdown-item" key={cat.name}>
                        <Link
                            key={cat._id}
                            to={`/desktop/${cat.name}`}
                          >
                          {cat.name}
                        </Link>
                        </a>
                      </li>
                    </div>
                  ))}
                 </ul>
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">iMac</a></li>
                <li><a className="dropdown-item" href="#">Mac-Mini</a></li>
                <li><a className="dropdown-item" href="#">Dell</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">HP</a></li>
                <li><a className="dropdown-item" href="#">Acer</a></li>
                <li><a className="dropdown-item" href="#">Asus</a></li>
              </ul> */}
        </li>
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Laptop
              </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                       {laptopCategories.map((lap) => (
                        < li  key={lap._id}>
                          <a className="dropdown-item" key={lap.name}>
                              {lap.name}
                          </a>
                        </li>
                  ))}
                </ul>
                {/* <li><a className="dropdown-item" href="#">Macbook Pro</a></li>
                    <li><a className="dropdown-item" href="#">Macbook Air</a></li>
                    <li><a className="dropdown-item" href="#">Dell</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">HP</a></li>
                    <li><a className="dropdown-item" href="#">Acer</a></li>
                    <li><a className="dropdown-item" href="#">Asus</a></li> */}
          </li>
              
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mobile 
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
               {mobileCategories.map((mol) => (
                    < li  key={mol._id}>
                      <a className="dropdown-item" key={mol.name}>
                          {mol.name}
                        </a>
                    </li>
                  ))}
                </ul>
{/*                 
                 <li><a className="dropdown-item" href="#">iPhone</a></li>
              <li><a className="dropdown-item" href="#">Samsung</a></li>
              <li><a className="dropdown-item" href="#">OPPO</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">LG</a></li>
              <li><a className="dropdown-item" href="#">Google</a></li>
              <li><a className="dropdown-item" href="#">Nokia</a></li> */}
          </li>
              

        <li className="navbar-brand nav-item">
          <Link to="/cart" className="nav-link "><i className="fa-solid fa-cart-shopping"></i></Link>
          <span className='position-absolute badge rounded-pill text-bg-info'>
            {size}</span>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>
        </div>
      </nav>

      {/* <ListAllProducts handleClick={handleClick} /> */}
  </div>
  );
}
 
export default NavBar;