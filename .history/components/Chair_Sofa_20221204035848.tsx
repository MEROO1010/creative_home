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
      <div className="absolute bottom-60   left-40 mx-16 my-30  "><button>View All Products</button></div>
     </div>

     <div className=" absolute left-10  ">
      <Image src={leftBtn} alt={''}/>
     </div>
   </div>
  )
}

export default Chair_Sofa