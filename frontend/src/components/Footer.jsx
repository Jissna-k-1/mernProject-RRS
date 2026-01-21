import React from 'react'
import { FaFacebook, FaInstagram,  FaWhatsapp,  FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <div className='flex flex-col gap-1 px-16 py-10 bg-black'>
      <div className='grid place-content-center gap-6 text-center'>
        <h2 className='text-4xl font-bold text-gray-500'>Updates On Latest Offers ?</h2>
        <p className='text-lg text-gray-400'>Subscribe to Our Newsletter to get frequent updates</p>
        <div className='flex items-center justify-center max-w-xl mx-auto w-full' >
          <input type="email" placeholder='Enter your Mail-ID' className='flex-grow py-3 px-4 border-2 bg-white font-semibold border-r-0 border-e-black rounded-l-full outline-none text-sm' />
          <button className='bg-amber-600 text-white border-black px-6 py-2.5 rounded-r-full font-bold hover:bg-amber-500'>Join Now</button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 '>
        <div>
          <h2 className='font-bold text-2xl bg-gradient-to-r from-[#ff7700] to-[#0059ff] bg-clip-text text-transparent'>JKM-TASTE</h2>
          <div className='flex justify-center md:justify-start gap-4 mt-3 text-amber-200'>
            <FaFacebook className='cursor-pointer text-2xl hover:text-white' />
            <FaInstagram className='cursor-pointer text-2xl hover:text-white' />
            <FaYoutube className='cursor-pointer text-2xl hover:text-white' />
            <FaWhatsapp className='cursor-pointer text-2xl hover:text-white' />
            
          </div>
        </div>
        <div>
          <ul className='flex gap-6 justify-center text-gray-300 text-base font-medium'>
            <li className='cursor-pointer hover:text-amber-200 '>Home</li>
            <li className='cursor-pointer hover:text-amber-100 '>Menu</li>
            <li className='cursor-pointer hover:text-amber-100 '>About US</li>
            <li className='cursor-pointer hover:text-amber-100 '>Privacy & Policy</li>
          </ul>
        </div>
      </div>
      <p className='text-center font-bold text-gray-400 mt-4'>&copy; 2026 JKM-TASTE. All rights reserved.</p>
    </div>
  )
}

export default Footer
