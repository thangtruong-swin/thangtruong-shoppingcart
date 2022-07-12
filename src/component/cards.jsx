import React from 'react';

const Cards = ({ cart, item, handleClick, handleRemove }) => {
    const { id, category, type, product, description, price, image, quanity } = item;

  return ( 
      <div className="cards">
          <div className="image_box">
            <img src={image} alt="{type}" />
      </div>
      {/* className="details" */}
          <div className="details">
            <p className='mt-1 text-primary'>{category + " - "}{ type }</p>
            <p>{description}</p>
            <p className="fw-bold">Price - ${price.toFixed(2)}</p>

         {/* <button className='btn btn-success btn-sm'
            onClick={() => handleClick(item)}
            >Add to Cart</button> */}
        
        {
          (cart || '').includes(item) ? (
           <button className='btn btn-danger btn-sm'
            onClick={() => handleRemove(item)}
            >Remove from Cart</button>
        ): (
             <button className='btn btn-success btn-sm '
            onClick={() => handleClick(item)}
            >Add to Cart</button>
          
        )}
        
            


          </div>
      </div>
   );
}
 
export default Cards;