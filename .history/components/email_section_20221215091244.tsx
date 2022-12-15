import React from 'react'
import Image from 'next/image'
import EmailSub from '../assets/images/email-subscribe.png'

const email_section = () => {
  return (
    <div>
        <div>
            <div className='mt-40'>
            <Image src={EmailSub} alt=''/>
            </div>
        </div>

    </div>
  )
}

export default email_section