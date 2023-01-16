import React from 'react'
import "../app/globals.css"
import Link from 'next/link';
function Navbar() {
  return (
    <div className='w-full h-20 px-2 border-b-2 text-white font-bold justify-between flex items-center'>
        <h1 className='text-3xl'>ČT 48</h1>
        <input className='w-64 h-7  hover:shadow-lg text-black duration-300 text-center' type="text"></input>
        <div className=' w-7/12 text-lg flex justify-between'>
            <p className='hover:text-xl font-extrabold   cursor-pointer duration-300'>History</p>
            <p className='hover:text-xl font-extrabold   cursor-pointer duration-300'>Web Development</p>
            <p className='hover:text-xl font-extrabold   cursor-pointer duration-300'>BasketBall</p>
            <p className='hover:text-xl font-extrabold   cursor-pointer duration-300'>Fitness</p>
            <Link href="/UserLogin" className=' text-center w-36 rounded-md hover:bg-red-600 font-extrabold  bg-red-300  cursor-pointer duration-300'>Login</Link>
        </div>
    </div>
  )
}

export default Navbar