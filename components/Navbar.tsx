import React from 'react'
import "../app/globals.css"
function Navbar() {
  return (
    <div className='w-full h-20 px-2 border-b-2 text-white font-bold justify-between flex items-center'>
        <h1 className='text-3xl'>ČT 48</h1>

        <div className=' w-2/4 text-lg flex justify-between'>
            <p className='hover:text-xl font-extrabold   cursor-pointer duration-300'>History</p>
            <p className='hover:text-xl font-extrabold   cursor-pointer duration-300'>Web Development</p>
            <p className='hover:text-xl font-extrabold   cursor-pointer duration-300'>BasketBall</p>
            <p className='hover:text-xl font-extrabold   cursor-pointer duration-300'>Fitness</p>
        </div>
    </div>
  )
}

export default Navbar