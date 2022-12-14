import React from 'react'
import Image from 'next/image' 
import specialOffer from '../assets/images/specialOffer.png'
import sofa2 from '../assets/images/sofa2.png'
import image2 from '../assets/images/img2.png'




const SpecialOffer = () => {
  return (
    <div className='bottom-100'>
      <div className="relative bg-[#E6E1E1]  py-10    my-80  top-80    ">
        <div className=' py-4 my-4 top-20'>
          <Image src={specialOffer} alt=''/>        
          
         </div>

         <div className='  static ml-10 mt-60 left-80   bottom-80 pl-40 pt-1 '>
          <Image src={sofa2} alt=''/>        
          
         </div>

         <div className='relative ml-9 mt-1 right-80   bottom-80 pl-80 pt-1 	  '>
          <Image src={image2} alt=''/>
          <button className=' relative bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-4 px-8 border border-red-500 hover:border-transparent rounded mx-60 my-50 bottom-40 w-60'>shop Now</button>
         </div>
    </div>
    </div>
  )
}

export default SpecialOffer