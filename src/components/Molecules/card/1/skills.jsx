import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col p-[24px] h-[214px] bg-[#1A1A1C] rounded-[8px]'>
        <h2 className='text-[16px] mb-[16px] font-medium'>Skills</h2>
        <div className='flex flex-col  gap-[8px] leading-[26.4px] -tracking-[0.16px]'>

            <div className='flex w-full '>
                <p className='w-[25%]'>Technical Skill</p>
                <span className='mr-[8px]'>:</span>
                <p className='w-[75%]'>Figma, Maze, Miro, Marvel, ProtoPie</p>
            </div>

            <div className='flex '>
                <p className=' w-[25%]'>Soft Skill</p>
                <span className='mr-[8px]'>:</span>
                <p className='w-[75%] '>Product Design, Visual Design, Interaction Design, Project Management, Analyzing, UX Research</p>
            </div>

            <div className='flex '>
                <p className='w-[25%]'>Languages</p>
                <span className='mr-[8px]'>:</span>
                <p className='w-[75%]'>Bahasa, English, Deutsch</p>
            </div>
        </div>
    </div>
  )
}

export default Skills