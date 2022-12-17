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
          className= 'absolute ml-40   pt-18 bottom-2 text-[40px] font-verdana text-left	h-100 '
          placeholder='Email Address'/>
        </div>
    </div>
  )
}

export default email_section