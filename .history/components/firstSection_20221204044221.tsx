import React from 'react'
import Image from 'next/image' 
import first_img from '../assets/images/first_img.png'
import Nav from '../components/Nav'
import Maincontnet from '../components/Maincontent'







const firstsection = () => {
  return (
   <div id='container'>
    
      
      <Image src={first_img} alt={''}/>
      <div >  <Maincontnet/></div>
      
      
      
     <Nav/>
     <SpecialOffer/> 
     
   </div>
    
  )
}

export default firstsection



