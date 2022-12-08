import styles from '../styles/Home.module.css'
import Firstsection from '../components/Firstsection'
import Chair_Sofa from '../components/Chair_Sofa'
import SpecialOffer from './api/SpecialOffer'



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
