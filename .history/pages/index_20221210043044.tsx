import styles from '../styles/Home.module.css'
import Firstsection from '../components/Firstsection'
import Chair_Sofa from '../components/Chair_Sofa'
import SpecialOffer from '../components/SpecialOffer'
import Image from 'next/image' 
import specialOffer from '../assets/images/specialOffer.png'



export default function Home() {
  return (
    <div>
    
    <div>
      <Firstsection/>

      <Chair_Sofa/>
      
      <div >
      <div className="absolute bg-[#E6E1E1]  py-4 my-2000 bottom-140 h-120 object-bottom	">
        <div>
          <Image src={specialOffer} alt=''/>
          
          
         </div>
    </div>
      </div>
      
      
     
    </div>
    

     
    </div>
    
  )
}
