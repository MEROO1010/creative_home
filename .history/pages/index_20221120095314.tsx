import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Firstsection from '../components/firstsection'


export default function Home() {
  return (
    <div>
     <Nav/>
    <div>
      <Firstsection/>
      <text className="px-4 py-40">
        A Brand New Furniture
      </text>
    </div>
     
    </div>
    
  )
}
