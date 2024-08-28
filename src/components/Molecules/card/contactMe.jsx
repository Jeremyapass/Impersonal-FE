import ContactMeButton from '@/components/Atoms/button/contactMeButton'
import React from 'react'

const ContactMe = () => {
  return (
    <div className='flex flex-col p-[24px] bg-[#1A1A1C] w-[248px]  rounded-[8px]'>
        <h1 className='mb-[16px] text-[18px] font-medium'>Contact Me</h1>

        <ul className='flex flex-col gap-[12px]'>
            <ContactMeButton text={"Instagram"} logo={"instagramLogo"}/>
            <ContactMeButton text={"LinkedIn"} logo={"linkedInLogo"}/>
            <ContactMeButton text={"Email"} logo={"emailLogo"}/>
        </ul>
    </div>
  )
}

export default ContactMe