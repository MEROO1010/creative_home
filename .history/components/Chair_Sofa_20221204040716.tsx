import React from 'react'
import Image from 'next/image' 

import Title1 from '../assets/images/title1.png'
import righBtn from '../assets/images/btn-r.png'
import leftBtn from '../assets/images/btn-l.png'




const Chair_Sofa = () => {
  return (
    <div>
     <div className='my-20'>
     <Image src={Title1} alt={''}/>  
     </div>

     <div className=" absolute   	 right-10	     ">
      <Image src={righBtn} alt={''}/>
      <div className="absolute bottom-60   left-40 mx-10 my-28 bg-transparent hover:bg-gray-500 text-white  text-[32px] font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded w-394 h-82   "><button>View All Products</button></div>
     </div>

     <div className=" absolute left-10  ">
      <Image src={leftBtn} alt={''}/>
      <div className="absolute bottom-60   right-40 mx-20 my-28 bg-transparent hover:bg-gray-500 text-white  text-[32px] font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded w-394 h-82   "><button>View All Products</button></div>
     </div>
   </div>
  )
}

export default Chair_Sofa