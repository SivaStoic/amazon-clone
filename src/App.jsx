import React from 'react'
import "./App.css"
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


const App = () => {
  return (
   <div className="app">
    <Router>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        
      </Routes>

    </Router>
   </div>
  )
}

export default App
