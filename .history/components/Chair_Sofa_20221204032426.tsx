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

     <div className=" absolute mx-90 left-20  ">
      <Image src={righBtn} alt={''}/>
     </div>

     <div className=" absolute mx-50 left-20  ">
      <Image src={leftBtn} alt={''}/>
     </div>
   </div>
  )
}

export default Chair_Sofa