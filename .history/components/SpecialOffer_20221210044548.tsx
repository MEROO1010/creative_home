import React from 'react'
import Image from 'next/image' 
import specialOffer from '../assets/images/specialOffer.png'
import sofa2 from '../assets/images/sofa2.png'



const SpecialOffer = () => {
  return (
    <div className="absolute bg-[#E6E1E1]  py-10 my-0  bottom-100 h-120  object-top">
        <div>
          <Image src={specialOffer} alt=''/>        
          
         </div>

         <div>
          <Image src={sofa2} alt=''/>        
          
         </div>
    </div>
  )
}

export default SpecialOffer