import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import first_img from '../assets/images/first_img.png'
import Image from 'next/image' 

export default function Home() {
  return (
    <div>
      <Image src={first_img} alt={''}/>
     <Nav/>

     
    </div>
    
  )
}
