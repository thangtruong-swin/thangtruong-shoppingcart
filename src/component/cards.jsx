import React from 'react';

const Cards = ({ item, handleClick }) => {
    const { id, category, type, product, description, price, image, quanity } = item;

  return ( 
      <div className="cards">
          <div className="image_box">
            <img src={image} alt="{type}" />
          </div>
          <div className="details">
            <p className='text-center mt-2 text-primary'>{category + " - "}{ type }</p>
            <p>{product}</p>
        <p>{description}</p>
            <p className='fw-bold'>Price - ${price.toFixed(2)}</p>
        <button className='btn btn-success'
        onClick={() => handleClick(item)}
        >Add to Cart</button>
          </div>
      </div>
   );
}
 
export default Cards;