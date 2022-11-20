import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Image from 'next/image' 
import first_img from '../assets/images/first_img.png'


export default function Home() {
  return (
    <div>
     <Nav/>
    <div>
    <Image src={first_img} alt={''}/>
    </div>
     
    </div>
    
  )
}
