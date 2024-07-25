import Hero from '@/components/Organism/examplePage/hero'
import Footer from '@/components/Organism/footer'
import Header from '@/components/Organism/header'
import React from 'react'

const Example = () => {
  return (
    <div className='flex flex-col gap-2'> {/* nanti hapus aja classname nya ini  */}
        <Header/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Example