import styles from '../styles/Home.module.css'
import Firstsection from '../components/Firstsection'
import Chair_Sofa from './api/Chair_Sofa'
import SpecialOffer from '../components/SpecialOffer'



export default function Home() {
  return (
    <div>
    
    <div>
      <Firstsection/>

      <Chair_Sofa/>
      <SpecialOffer/> 
      
      
     
    </div>
    

     
    </div>
    
  )
}
