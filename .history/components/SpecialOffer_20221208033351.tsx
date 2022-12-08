import React from 'react'
import Image from 'next/image' 
import specialOffer from '../assets/images/specialOffer.png'


const SpecialOffer = () => {
  return (
    <div className="absolute bg-[#E6E1E1]  py-20 my-80">
        <div>
          <Image src={specialOffer} alt=''/>
          
          
         </div>
    </div>
  )
}

export default SpecialOffer