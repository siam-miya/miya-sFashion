import React from 'react'
import Products from '../components/product'
import Banner from '../components/Banner'

const Home = ({addToCart}) => {
  return (
   <>
   <Banner/>
   <Products addToCart={addToCart}/>
   </>
  )
}

export default Home
