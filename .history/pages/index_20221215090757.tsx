import styles from '../styles/Home.module.css'
import Firstsection from '../components/Firstsection'
import Chair_Sofa from '../components/Chair_Sofa'
import SpecialOffer from '../components/SpecialOffer'
import TrendingProducts from '../components/TrendingProducts'
import Email_section from '../components/email_section'



export default function Home() {
  return (
    <div className='overflow-y-auto'>
    
    <div>
      <Firstsection/>

      <Chair_Sofa/>     
     
      <SpecialOffer/> 
      <TrendingProducts/>
     <Email_section/>

      
      
     
    </div>
    

     
    </div>
    
  )
}
