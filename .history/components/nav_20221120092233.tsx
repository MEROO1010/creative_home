import React from 'react'
import Link  from 'next/link'

const nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/products">
        <a>Products</a>
      </Link>
    </nav>
  )
}

export default nav