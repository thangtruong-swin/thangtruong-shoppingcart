import React from 'react';
import listProducts from '../data';
import Cards from './cards';

const ListAllProducts = ({handleClick}) => {
  return ( 
     <div className="listproducts container">
      {listProducts.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
   );
}
 
export default ListAllProducts;