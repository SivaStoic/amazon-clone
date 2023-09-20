import React from 'react'
import "./CheckoutProduct.css"
import { useStatevalue } from './StateProvider'


const CheckoutProduct = ({id,title,image,price,rating}) => {
const[{basket},dispatch]=useStatevalue()
const removeFromBasket =()=>{
  dispatch(
    {
   type:"REMOVE-FROM-BASKET",
   id:id,
    }
  )
}

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct-image' src={image} alt="" />
        <div className="checkoutProduct-info">
       
                <p className="checkoutProduct-title">{title}</p>
            <p className='checkoutProduct-price'><small>Rs</small> <strong>{price}</strong></p>
            <div className="checkoutProduct-rating">
        {
            Array(rating).fill().map((_)=>(
                <p>&#11088;</p>
            ))
        }
        </div>
      <button onClick={removeFromBasket}>Remove from Card</button>

        </div></div>
        


    
  )
}

export default CheckoutProduct