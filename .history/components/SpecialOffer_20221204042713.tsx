import React from 'react'
import Image from 'next/image' 
import specialOffer from '../assets/images/specialOffer.png'


const SpecialOffer = () => {
  return (
    <div className="bg-[#E6E1E1]">
        <div className="bottom-60">
        <Image src={specialOffer} alt={''}/>
        </div>
    </div>
  )
}

export default SpecialOffer