import React from 'react'
import Image from 'next/image' 
import specialOffer from '../assets/images/specialOffer.png'
import sofa2 from '../assets/images/sofa2.png'



const SpecialOffer = () => {
  return (
    <div className="relative bg-[#E6E1E1]  py-10    my-80  top-80    ">
        <div className=' relative py-4 my-4 top-10'>
          <Image src={specialOffer} alt=''/>        
          
         </div>

         <div>
          <Image src={sofa2} alt=''/>        
          
         </div>
    </div>
  )
}

export default SpecialOffer