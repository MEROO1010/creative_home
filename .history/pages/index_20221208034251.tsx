import styles from '../styles/Home.module.css'
import Firstsection from '../components/Firstsection'
import Chair_Sofa from '../components/Chair_Sofa'
import SpecialOffer from '../components/SpecialOffer'



export default function Home() {
  return (
    <div>
    
    <div>
      <Firstsection/>

      <Chair_Sofa/>
      
      <div className='relative mx-80'>
      <SpecialOffer/> 
      </div>
      
      
     
    </div>
    

     
    </div>
    
  )
}
