import React from 'react'
import Image from 'next/image' 
import first_img from '../assets/images/first_img.png'
import Link  from 'next/link'



const firstsection = () => {
  return (
    <div>
      <Image src={first_img} alt={''}/>

      <div>
      <nav className="space-x-10">
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

export default firstsection