import './App.css';
import React, { useState } from "react";
import { Routes, Route, } from "react-router-dom";

import NavBar from './component/navBar';
import ListAllProducts from './component/listAllProducts';
import Cart from './component/cart';
import NewArrivalProducts from './component/newArrival';
import PageNotFound from './component/pageNotFound';
import PageOnSale from './component/onSale';
import DetailPage from './component/details';
import Footer from './component/footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App= () => {
  // const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

   const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].quanity += d;

    if (arr[ind].quanity === 0) arr[ind].quanity = 1;
    setCart([...arr]);
   };
  
  return (
    <div >
     <NavBar size={cart.length} />
      <Routes>
          {/* <Route path="/" element={  <NavBar size={cart.length} />} /> */}
          <Route path="/" element={<ListAllProducts handleClick={handleClick} />} />
          <Route path="/desktop/:id" element={<DetailPage handleClick={handleClick} />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
          <Route path="newarrivalproducts" element={<NewArrivalProducts />} />
          <Route path="/onsale" element={<PageOnSale />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
