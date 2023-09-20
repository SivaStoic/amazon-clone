import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStatevalue } from './StateProvider';



const Header = () => {

  const[{basket}]=useStatevalue()



  return (
    <nav className='header'>
      <Link to='/'>
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className="header-logo"/>
        </Link>

         <div className="header-search"><input type="text" className="header-searchInput" />
      <SearchIcon className='header-searchIcon'/></div>

      <div className="header-nav">
           <Link to="/login" className='header-link'>
            <div className="header-option">
              <span className='header-optionLineOne'>Hello siva</span>
              <span className='header-optionLineTwo'>Sign In</span>
           </div> </Link>
      
           <Link to="" className='header-link'>
            <div className="header-option">
              <span className='header-optionLineOne'>Returns</span>
              <span className='header-optionLineTwo'>& Order</span>
           </div>
           
          
           </Link>
           <Link to="" className='header-link'>
            <div className="header-option">
              <span className='header-optionLineOne'>Your</span>
              <span className='header-optionLineTwo'>Prime</span>
           </div>
           </Link>

           <Link to="/checkout" className='header-link'>
           <div className="header-optionBasket" >
            <ShoppingCartIcon/>
             <span className='header-basketCount'>{basket?.length}</span> 
            </div>
           </Link>


      </div>

      

    </nav>
  )
}

export default Header