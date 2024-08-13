import ContactMeButton from '@/components/Atoms/button/contactMeButton'
import React from 'react'
import LinkedIn from '../../../../public/icons/linkedInLogo.svg'
import Instagram from '../../../../public/icons/instagramLogo.svg'
import Email from '../../../../public/icons/emailLogo.svg'

const ContactMe = () => {
  return (
    <div className='flex flex-col p-[24px] bg-[#1A1A1C] w-[248px]  rounded-[8px]'>
        <h1 className='mb-[16px] font-medium'>Contact Me</h1>

        <ul className='flex flex-col gap-[12px]'>
            <ContactMeButton text={"Instagram"} logo={Instagram}/>
            <ContactMeButton text={"LinkedIn"} logo={LinkedIn}/>
            <ContactMeButton text={"Email"} logo={Email}/>
        </ul>
    </div>
  )
}

export default ContactMe