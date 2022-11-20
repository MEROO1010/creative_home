import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link  from 'next/link'


export default function Home() {
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
