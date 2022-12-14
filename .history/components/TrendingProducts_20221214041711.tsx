import React from 'react'
import Image from 'next/image'
import Trending_Products from '../assets/images/trending-products.png'
import Shopping from  '../assets/images/shopping-btn.png'
import Tablekitchen from '../assets/images/Table_Kitchen.png'


const TrendingProducts = () => {
  return (
    <div>
     <div className='pt-24'>
        <Image src={Trending_Products} alt=''/>        
     </div>

     <div className=' absolute ml-80 mt-10 pl-80  left-80'>
       <div> <Image src={Tablekitchen} alt=''/> </div>  
       <h1 className='text-[44px]  mt-4  font-verdana'>Table Kitchen</h1>
       <h1 className='text-[44px]  mt-4  font-verdana font-bold'>$140.00</h1>
       <button className='ml-80 my-20 pl-24 '><Image src={Shopping} alt=''/> </button>

     </div>
    </div>
  )
}

export default TrendingProducts