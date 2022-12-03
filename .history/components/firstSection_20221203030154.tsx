import React from 'react'
import Image from 'next/image' 
import first_img from '../assets/images/first_img.png'
import Nav from '../components/Nav'
import Maincontnet from '../components/Maincontent'





const firstsection = () => {
  return (
   <div id='container'>
    
      
      <Image src={first_img} alt={''}/>
      <div className="fixed	px-40 py-14 top-60 left-52 text-[50px] ">  <Maincontnet/></div>
      
      <div><button>Shop Now</button> </div>
     <Nav/>
     
   </div>
    
  )
}

export default firstsection



