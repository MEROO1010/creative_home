import React from 'react'
import Image from 'next/image'
import EmailSub from '../assets/images/email-subscribe.png'

const email_section = () => {
  return (
    <div className=' absolute mt-80 pt-80 '>
       
       <div className=' relative mt-80 pt-80 top-40'>
       <Image src={EmailSub} alt=''/>
       </div>
       
       <h1 className=' absolute ml-30 mt-10 pl-40 pt-18 bottom-40 text-[53px] font-verdana '>
        Subscribe For Latest News And Discount
        </h1>

        <div>
          <input type="search"
          className= 'absolute ml-40  pl-4  bottom-14 text-[40px] font-verdana text-left w-100 h-18	 '
          placeholder='Email Address'/>
        </div>

        <div>
          <button className='absolute ml-80 left-80    bottom-14 text-[40px] font-verdana w-60 h-14	bg-black hover:bg-gray-700 text-white font-bold  rounded '>Subscribe</button>
        </div>
    </div>
  )
}

export default email_section