import React from 'react'
import Image from 'next/image' 
import first_img from '../assets/images/first_img.png'
import Nav from '../components/Nav'



const firstsection = () => {
  return (
   <div id='container'>
     
      <Image src={first_img} alt={''}/>
      <div><h1 className="p-4">A BRAND NEW FURNITURE</h1></div>
      <div><button>Shop Now</button> </div>
     <Nav/>
     
   </div>
    
  )
}

export default firstsection



