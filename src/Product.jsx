import React from 'react';
import "./Product.css" 
import { useStatevalue } from './StateProvider';

const Product = ({id,title,image,price,rating}) => {
const [{basket},dispatch] = useStatevalue();

const addToBasket =()=>{
  dispatch({
    type:'ADD-TO-BASKET',
    item:{
      id:id,
      title:title,
      image:image,
      price:price,
      rating:rating,
    }

  })

}


  return (
    <div className='product'>
        <div className="product-info">
        <p>{title}</p>
      <p className="product-price"><small>Rs</small> <strong>{price}</strong></p>
      <div className="product-rating">
        {
            Array(rating).fill().map((_)=>(
                <p>&#11088;</p>
            ))
        }
        </div>
     
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Cart</button>

    </div>
  )
}

export default Product