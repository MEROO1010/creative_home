import React from 'react'
import Image from 'next/image'
import Trending_Products from '../assets/images/trending-products.png'


const TrendingProducts = () => {
  return (
    <div>
     <div>
        <Image src={Trending_Products} alt=''/>
        
     </div>
    </div>
  )
}

export default TrendingProducts