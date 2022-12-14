import React from 'react'
import Image from 'next/image'
import Trending_Products from '../assets/images/trending-products.png'
import Tablekitchen from '../assets/images/Table_Kitchen.png'


const TrendingProducts = () => {
  return (
    <div>
     <div className='pt-24'>
        <Image src={Trending_Products} alt=''/>        
     </div>

     <div className=' absolute ml-80 mt-10 pl-80  left-100'>
       <div> <Image src={Tablekitchen} alt=''/> </div>  
       <h1 className='text-[32px] ml-40 mt-4  font-verdana'>Table Kitchen</h1>

     </div>
    </div>
  )
}

export default TrendingProducts