import React from 'react'
import Link  from 'next/link'

const nav = () => {
  return (
    <nav className="space-x-10 fixed top-0 left-0 right-0 px-20 py-4">
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
    

    
  )
}

export default nav