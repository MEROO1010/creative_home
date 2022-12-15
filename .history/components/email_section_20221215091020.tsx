import React from 'react'
import Image from 'next/image'
import EmailSub from '../assets/images/email-subscribe.png'

const email_section = () => {
  return (
    <div>

        <div className='absolute ml-4 mt-12 pl-2  left-70'>
           <Image src={EmailSub} alt=''/>
        </div>
    </div>
  )
}

export default email_section