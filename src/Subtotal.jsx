// import React from 'react'
// import "./Subtotal.css"
// import CurrencyFormat from 'react-currency-format'
// import { useStatevalue } from './StateProvider'
// import { getBasketTotal } from './reducer'
// const Subtotal = () => {
//     const[{basket},dispatch] = useStatevalue()
//   return (
//     <div className='subtotal'>
        
//      <CurrencyFormat 
//      renderText={(value)=>(
//         <>
//         <p>
//             Subtotal ({basket.length} items):<strong>{`${value}`}</strong>
//         </p>
//         <small className='subtotal-gift'>
//             <input type="checkbox" /> This order contains a gift 
//         </small>
//         </>
//      )

//      }
//      decimalScale={2}
//      value={getBasketTotal(basket)}
//      displayType={'text'}
//      thousandSeparator={true}
//      prefix={'Rs'} 
//      />

//       <button>Proceed to Checkout</button>

//     </div>
//   )
// }

// export default Subtotal