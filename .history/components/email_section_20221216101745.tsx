import React from 'react'
import Image from 'next/image'
import EmailSub from '../assets/images/email-subscribe.png'

const email_section = () => {
  return (
    <div className=' absolute mt-80 pt-80 '>
       
       <div className=' relative mt-80 pt-80 top-40'>
       <Image src={EmailSub} alt=''/>
       </div>
       
       <h1 className=' relative ml-80 mt-10 pl-40 pt-20 top-10'>
        Subscribe For Latest News And Discount
        </h1>
    </div>
  )
}

export default email_section