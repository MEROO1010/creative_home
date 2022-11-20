import React from 'react'
import Link  from 'next/link'

const nav = () => {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>

      <Link href="/products">
        Products
      </Link>
    </nav>
  )
}

export default nav