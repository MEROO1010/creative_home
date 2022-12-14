import React from 'react'
import Image from 'next/image'
import Trending_Products from '../assets/images/trending-products.png'
import Shopping from  '../assets/images/shopping-btn.png'
import Tablekitchen from '../assets/images/Table_Kitchen.png'
import chair1 from '../assets/images/Chair No-arms.png'
import brownSofa from '../assets/images/Brown_Chouch.png'



const TrendingProducts = () => {
  return (
    <div>
     <div className='pt-24'>
        <Image src={Trending_Products} alt=''/>        
     </div>

     <div >
      {/*table kitchen */}
     <div className=' absolute ml-80 mt-12 pl-80  left-80'>
       <div className='ml-36 pl-14'>
       <Image src={Tablekitchen} alt=''/> 
       <h1 className='text-[44px]  mt-4  font-verdana'>Table Kitchen</h1>
       <h1 className='text-[44px]  mt-4  font-verdana font-bold'>$140.00</h1>
       <button className=' relative ml-80 my-4  pl-24 bottom-20 '><Image src={Shopping} alt=''/> </button>
       </div>  
     </div>
       {/*chair noe arms */}
     <div className=' absolute ml-28 mt-12 pl-10  left-20'>
       <div className='ml-80 pl-14'> 
       <Image src={chair1} alt=''/>  
       <h1 className='text-[44px]  mt-4  font-verdana'>Table Kitchen</h1>
       <h1 className='text-[44px]  mt-4  font-verdana font-bold'>$140.00</h1>
       <button className=' relative ml-80 my-4  pl-24 bottom-20 '><Image src={Shopping} alt=''/> </button>
       </div> 
     </div>

      {/*brown chouch */}
      <div className='absolute ml-10 mt-12 pl-10  left-70'>
       <div className='ml-10  pl-70 left-40 '> 
       <Image src={brownSofa} alt=''/> 
       <h1 className='text-[44px]  mt-4  font-verdana'>Table Kitchen</h1>
       <h1 className='text-[44px]  mt-4  font-verdana font-bold'>$140.00</h1>
       <button className=' relative ml-80 my-4  pl-24 bottom-20 '><Image src={Shopping} alt=''/> </button>
       </div>  
     </div>

     
     </div>
    </div>
  )
}

export default TrendingProducts