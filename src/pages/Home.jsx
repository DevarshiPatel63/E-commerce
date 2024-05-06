import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/homeComponents/Categories'
import ProductDisplay from '../components/homeComponents/ProductDisplay'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <Categories/>
        <ProductDisplay/>
    </div>
  )
}

export default Home
