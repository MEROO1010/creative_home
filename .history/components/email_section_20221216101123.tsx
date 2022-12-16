import React from 'react'
import Image from 'next/image'
import EmailSub from '../assets/images/email-subscribe.png'

const email_section = () => {
  return (
    <div className=' absolute mt-80 pt-80 bottom-20'>
       
       <Image src={EmailSub} alt=''/>

    </div>
  )
}

export default email_section