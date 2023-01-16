import React from 'react'
import Link from 'next/link'
function Reporter() {
  return (
    <Link href="/AdminUserProfile" className='w-72 m-3  rounded-lg h-80 flex flex-col items-center justify-around bg-white'>
        <img className='w-36 rounded-full  h-36'></img>
        <h1 className='font-semibold text-lg'>Augustus Chadus</h1>
        <p className='font-semibold'>777 Blogs Posted</p>
        <p className='font-semibold'>Member Since:1976</p>
        <button className='w-40 h-7 bg-red-400 text-white font-bold rounded-lg cursor-pointer'> See Blogs</button>
    </Link>
  )
}

export default Reporter