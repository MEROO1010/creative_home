import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import Logo from '../assets/images/creative-home.png'


const nav = () => {
  return (
    <div>
      <div>
     <nav className="space-x-20 absolute top-0 left-0 right-0 px-20 py-12">
          
     <Link href="/">
     <Image
      src={Logo}
      alt="Picture of the logo"
      width={50}
      height={50}
      
    />
     </Link>
     <Link href="/">
       Home
     </Link>

     <Link href="/products">
       Products
     </Link>

     <Link href="/aboutUs">
       About Us
     </Link>

     <Link href="/ContactUs">
       Contact Us
     </Link>
   </nav>
    </div>
    
    </div>
    

    
    

    
  )
}

export default nav