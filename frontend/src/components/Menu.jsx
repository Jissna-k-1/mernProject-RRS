import React, { useContext, useState } from 'react'
import { categoryItem, product } from '../assets/assets'
import { MenuContext } from '../context/MenuContext'

const Menu = () => {
  const {products}= useContext(MenuContext)
  const [category, setCategory] = useState("All")

  return (
    <div className='bg-black'>
    <div className='px-4 py-12 max-w-7xl mx-auto bg-gray-950'>
      {/* Sectional Header */}
     <div className='text-center  mb-5'>
      <h1  style={{fontFamily:'cursive'}} className='text-4xl font-bold text-orange-800'>DISCOVER OUR MENU</h1>
     </div>

     {/* Category button selection */}
     <div className='text-center mb-8 '>
      <h2 style={{fontFamily:'cursive'}} className='text-2xl font-medium mb-4 text-gray-400'>Explore Our Categories</h2>
      <ul className='flex flex-wrap justify-center gap-4'>
        {
          categoryItem.map((item,index)=>(
            <li className={`cursor-pointer px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${categoryItem === item.category_title ? "bg-amber-500" : "bg-gray-200 hover:bg-amber-300"}`} key={index} onClick={()=>setCategory((prev)=>prev===item.category_title ? "All" : item.category_title)}>
              {item.category_title}
            </li>
          ))
        }
      </ul>
     </div>

     {/* Menu Display */}
     <div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
      {
        products.length>0?(
          products.filter((product)=>category==="All" || category===product.category).map((product)=>
          <div className='flex items-center gap-6 p-6 border border-gray-800 rounded-xl shadow-blue-100 shadow-sm transition hover:shadow-md' key={product._id}>
            <img className='w-30 h-30 object-cover rounded-full' src={product.image} alt={product.name} />
            <div className='flex-1'>
              <div className='flex justify-between items-center '>
                <h3 className='text-blue-200 text-lg font-semibold'>{product.name}</h3>
                <span className='text-amber-200 text-lg font-semibold relative ml-4'>
                  <span className="before:content-[''] before:absolute before:w-10 before:border-b border-dotted before:border-gray-700 before:-left-12 before:top-1/2 before:transform before:translate-y-1/2"></span>
                  ${product.price}
                </span>
              </div>
              <p className='text-blue-200 text-sm mt-1'>Lorem epsum dolor sit amet</p>
            </div>

          </div>)
        ):(
          <p className='text-sm col-span-2 text-gray-500'>No Products are Available</p>
        )
      }
     </div> 
    </div>
    </div>
  )
}

export default Menu
