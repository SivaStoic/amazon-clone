import React from 'react'
import "./Home.css"
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>

  <img className='home-image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon-movie-img" />


     <div className="home-row">
     <Product id="123"
    title = "The Lean StartUp:How constant Innovation creates radically successful business paperback"
    price={300}
    rating={5}
    image="https://images-eu.ssl-images-amazon.com/images/I/81vvgZqCskL._AC_UL210_SR210,210_.jpg" />

    <Product id="1234"
    title = "Apple iPhone 15"
    price={`1,39,900`}
    rating={4}
    image="https://images.hindustantimes.com/tech/htmobile4/P36967/images/Design/148763-v1-apple-iphone-15-mobile-phone-large-3.jpg" />
     </div>
     
     <div className="home-row">
     <Product id="12345"
    title = "Trebel Rockerz 255 Pro+:Wireless Bluetooth Neckband with Dynamic 10 mm Drivers, Up to 40H Nonstop Playback"
    price={1500}
    rating={3}
    image="https://www.boat-lifestyle.com/cdn/shop/products/35ca6350-d6f3-4bc2-a742-01b2c88d80c4_32f4ee23-49e0-4671-a25c-d92c8e085785_800x.png?v=1646389952" />
    
    <Product id="123456"
    title = "Adidas Men's Terrex Cc Boat Shoe"
    price={`3,912`}
    rating={4}
    image="https://m.media-amazon.com/images/I/81dIjm7PbvL._SX500._SX._UX._SY._UY_.jpg" />
    <Product id="1234567"
    title = "HP Laptop 14s, 12th Gen Intel Core i3-1215U, 14-inch (35.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD Graphics, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.46 kg), dy5008TU"
    price={`39,490`}
    rating={3}
    image="https://cdn1.smartprix.com/rx-iwTKv09Ye-w1200-h1200/wTKv09Ye.jpg" />
     </div>
     <div className="home-row">
     <Product id="1234567"
    title = "VW 109 cm (43 inches) Playwall Frameless Series Full HD Android Smart LED TV VW43F1 (Black)"
    price={`42,666`}
    rating={2}
    image="https://images-cdn.ubuy.co.in/63535dff40420c349f076133-smart-tv-32-inch-42-inch-tv-4k-hd.jpg" />
    
    </div>
    </div>
  )
}

export default Home