import styles from '../styles/Home.module.css'
import Link  from 'next/link'


export default function Home() {
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
