import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import Logo from '../assets/images/creative-home.png'
import search from '../assets/images/search.png'


const nav = () => {
  return (
    <div>
      <div>
     <nav className="space-x-20 absolute top-0 left-0 right-0 px-20 py-14 text-lg font-medium">
          
     <Link href="/">
     <Image
      src={Logo}
      alt="Picture of the logo"
      width={80}
      height={80}
      className="absolute top-0 left-0 right-0  mx-8 my-7"
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

     <input
                    type="search"
                    className="   relative  left-80  mx-40 py-2 px-4   w-50 text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:pl-3"
                    placeholder="Search Here..."/>
     <button className="relative w-12 h-12   py-4  mx-10 left-64 top-2  bg-white rounded-full"> <Image src={search} alt=""  className='my-2'/></button>              
   </nav>
    </div>
    
    
    </div>
    

    
    

    
  )
}

export default nav