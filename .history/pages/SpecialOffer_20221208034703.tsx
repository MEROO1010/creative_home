import React from 'react'
import Image from 'next/image' 
import specialOffer from '../assets/images/specialOffer.png'


const SpecialOffer = () => {
  return (
    <div className="relative bg-[#E6E1E1]  py-40 my-80 bottom-120 object-bottom	">
        <div>
          <Image src={specialOffer} alt=''/>
          
          
         </div>
    </div>
  )
}

export default SpecialOffer