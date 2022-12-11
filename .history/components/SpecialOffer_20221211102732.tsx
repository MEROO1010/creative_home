import React from 'react'
import Image from 'next/image' 
import specialOffer from '../assets/images/specialOffer.png'
import sofa2 from '../assets/images/sofa2.png'



const SpecialOffer = () => {
  return (
    <div className="relative bg-[#E6E1E1]  py-10    my-80  top-80    ">
        <div className=' py-4 my-4 top-20'>
          <Image src={specialOffer} alt=''/>        
          
         </div>

         <div className='  relative mx-80 left-80 px-15'>
          <Image src={sofa2} alt=''/>        
          
         </div>
    </div>
  )
}

export default SpecialOffer