import Cards from './cards';
import React from 'react';
import { useParams } from "react-router-dom";
import { getProductsType } from './services';
import listProducts from '../data';



export default function DetailPage({handleClick}) {
  // let params = useParams();
  let { id } = useParams();

  const filteredProducts = listProducts.filter(function (item) {
    return item.type === id;
  })
  const getItemsByType = getProductsType(id);
  console.log(filteredProducts);
  return (
      <main style={{ padding: "1rem" }}>
        {/* <h2>Hello: {id}</h2> */}
      <div className="listproducts container">
        {filteredProducts.map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </div>
    </main>
    
  );
}