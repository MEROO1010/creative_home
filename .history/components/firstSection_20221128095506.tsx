import React from 'react'
import Image from 'next/image' 
import first_img from '../assets/images/first_img.png'
import Nav from '../components/Nav'
import Logo from '../assets/images/creative-home.png'




const firstsection = () => {
  return (
   <div id='container'>
      <div>
      <Image
      src={Logo}
      alt="Picture of the author"
      width={50}
      height={50}
      className="absolute top-0 left-0 right-0 px-20 py-12"
    />
      </div>
      
      <Image src={first_img} alt={''}/>
      <div><h1 className="p-4">A BRAND NEW FURNITURE</h1></div>
      <div><button>Shop Now</button> </div>
     <Nav/>
     
   </div>
    
  )
}

export default firstsection



