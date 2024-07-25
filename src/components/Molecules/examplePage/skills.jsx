import React from 'react'

const Skills = () => {
  return (
    <div>
        <h2>Skills</h2>
        <div className='flex flex-col bg-green-500'>
            <div className='grid grid-cols-3 bg-red-500'>
                <p>Technical Skill</p>
                <span>:</span>
                <p>Figma, Maxe Miro</p>
            </div>

            <div className='grid grid-cols-3 bg-red-500'>
                <p>Soft Skill</p>
                <span>:</span>
                <p>Figma, Maxe Miro</p>
            </div>

            <div className='grid grid-cols-3 bg-red-500'>
                <p>Languages</p>
                <span>:</span>
                <p>Figma, Maxe Miro</p>
            </div>
        </div>
    </div>
  )
}

export default Skills