import React from 'react'
import Link  from 'next/link'

const nav = () => {
  return (
    <nav className="navbar-nav">
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