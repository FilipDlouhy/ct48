import React from 'react'
import "../app/globals.css"
import Link from 'next/link'
function FeaturedBlog() {
  return (
    <Link href="/BlogPageUser"  className='h-52 cursor-pointer hover:w-56 duration-300 hover:mr-1 ml-5 mr-5 w-52 text-white  flex flex-col items-center justify-between px-6 py-6 rounded shadow-md'>
        <p>Oct 86888</p>
        <h1>Useful chrome advice for the EMPIRE</h1>   
        <div className='flex  items-center justify-between'>
            <img className='w-6 h-6 mr-4 rounded-full'></img>
            <p className='text-xs'>AUGUSTUS CHADUS</p>
        </div>

    </Link>
  )
}

export default FeaturedBlog