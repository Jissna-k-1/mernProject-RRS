import React from 'react'
import bgImage from '../assets/hero2.jpeg'

function Hero() {
  return (
    <div className='relative h-[100vh] w-full bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${bgImage})`}}>
      {/* transparent overlay */}
      <div className='absolute inset-0 bg-gray-900/30 z-10'></div>
      {/* centered text-content */}
      <div className='relative z-20 flex flex-col justify-center items-center h-full text-white px-4 text-center'>
        <h2 className='text-lg md:text-2xl mb-4 tracking-widest uppercase'>An Elevated Take On Classic Dining</h2>
        <h1 className='text-4xl md:text-6xl font-bold mb-6 '>JKM-ROSE</h1>
        <button className='bg-amber-400 text-black font-bold py-3 px-6 rounded-4xl hover:bg-amber-200 transition'>BOOK A TABLE</button>
      </div>
    </div>
  )
}

export default Hero
