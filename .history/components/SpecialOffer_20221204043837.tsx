import React from 'react'
import Image from 'next/image' 
import specialOffer from '../assets/images/specialOffer.png'


const SpecialOffer = () => {
  return (
    <div className="bg-[#E6E1E1] mx-50 top-2">
        <div className=" static mx-40 top-4">
        <Image src={specialOffer} alt={''}/>
        </div>
    </div>
  )
}

export default SpecialOffer