import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between p-8 bg-black text-white '>
        <div>
          <h2 className='font-bold text-2xl bg-gradient-to-r from-[#ff7700] to-[#0059ff] bg-clip-text text-transparent'>JKM-TASTE</h2>
        </div>
        <div>
          <ul className='flex justify-between gap-8'>
            <li className='font-bold text-lg cursor-pointer hover:text-amber-500'>HOME</li>
            <li className='font-bold text-lg cursor-pointer hover:text-amber-500'>RESERVATIONS</li>
            <li className='font-bold text-lg cursor-pointer hover:text-amber-500'>MENU</li>
            <li className='font-bold text-lg cursor-pointer hover:text-amber-500'>CONTACT</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

