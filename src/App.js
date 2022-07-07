import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route, } from "react-router-dom";

import NavBar from './component/navBar';
import ListAllProducts from './component/listAllProducts';
import Cart from './component/cart';
import Footer from './component/footer';
import NewArrivalProducts from './component/newArrival';
import PageNotFound from './component/pageNotFound';
import PageOnSale from './component/onSale';

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
          <Route path="/"  element={<ListAllProducts handleClick={handleClick} />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
          <Route path="newarrivalproducts" element={<NewArrivalProducts />} />
          <Route path="/onsale" element={<PageOnSale />} />
        
      </Routes>
    </div>
  );
}

export default App;
