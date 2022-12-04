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
      <div className="absolute bottom-60   left-40 mx-16 my-28 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow  "><button>View All Products</button></div>
     </div>

     <div className=" absolute left-10  ">
      <Image src={leftBtn} alt={''}/>
     </div>
   </div>
  )
}

export default Chair_Sofa