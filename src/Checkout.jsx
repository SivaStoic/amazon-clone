import React from 'react'
import { useStatevalue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
// import Subtotal from './Subtotal'


const Checkout = () => {
const [{basket}] = useStatevalue()

  return (
    <div className='checkout'>

        <div className="checkout-left"> 



{(basket?.length === 0)?(<div>
 <h2>Your Shopping Basket is empty</h2>
 <p>You have no items in your cart.To buy one or more product click "Add to the Cart" next to the item.</p>
</div>) : (<div>
 <h2 className='checkout-title'>
    Your Shopping Basket
</h2>
{basket?.map(item =>(<CheckoutProduct
     id= {item.id}
     title = {item.title}
     image= {item.image}
     price = {item.price}
     rating = {item.rating}/>)
)}


</div>)}</div>
      {/* <div className="checkout-right">
      {basket.length > 0 && (
        <div className='subtotal'>
        <Subtotal/>
        </div>
    )}
      </div> */}
      
       
    </div>
      
  )
        }

export default Checkout