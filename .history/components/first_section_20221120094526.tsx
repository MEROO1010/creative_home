import React from 'react'
import Image from 'next/image' 
import first_img from '../assets/images/first_img.png'



const first_section = () => {
  return (
    <div>
        <Image src={first_img} alt={''}/>
    </div>
  )
}

export default first_section