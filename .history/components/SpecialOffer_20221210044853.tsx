import React from 'react'
import Image from 'next/image' 
import specialOffer from '../assets/images/specialOffer.png'
import sofa2 from '../assets/images/sofa2.png'



const SpecialOffer = () => {
  return (
    <div className="absolute bg-[#E6E1E1]  py-10  my-10 bottom-10 h-120  ">
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