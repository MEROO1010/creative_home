import React from 'react'
import Image from 'next/image' 
import first_img from '../assets/images/first_img.png'


const firstsection = () => {
  return (
    <div>
      <Image src={first_img} alt={''}/>
      <div><h1>A BRAND NEW FURNITURE</h1></div>
    </div>
    
  )
}

export default firstsection