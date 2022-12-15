import React from 'react'
import Image from 'next/image'
import EmailSub from '../assets/images/email-subscribe.png'

const email_section = () => {
  return (
    <div className='p-4'>
        <div>
            <div className='absolute bottom-80 mt-40 pt-8'>
            <Image src={EmailSub} alt=''/>
            </div>
        </div>

    </div>
  )
}

export default email_section