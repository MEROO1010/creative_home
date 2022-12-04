import React from 'react'
import Image from 'next/image' 

import Title1 from '../assets/images/title1.png'
import righBtn from '../assets/images/btn-r.png'



const Chair_Sofa = () => {
  return (
    <div>
     <div className='my-20'>
     <Image src={Title1} alt={''}/>  
     </div>

     <div className="mx-40 left-100 px-80">
      <Image src={righBtn} alt={''}/>
     </div>
   </div>
  )
}

export default Chair_Sofa