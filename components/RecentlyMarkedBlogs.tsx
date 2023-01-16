import React from 'react'
import Link from 'next/link'
function RecentlyMarkedBlogs() {
  return (
    <Link href="/BlogPageUser" className='my-2 bg-yellow-200 p-2 flex justify-around items-center h-11 rounded-lg hover:w-4/5 duration-200 cursor-pointer  w-2/3 m-auto'>
        <img className='w-8 rounded-full h-8'></img>
        <div className='flex flex-col justify-between h-10'>
            <p className='text-xs font-bold'>OCT ADASDASD</p>
            <p className='text-xs font-bold'>JUNIOURUS VS CAESAR</p>
        </div>
    </Link>
  )
}

export default RecentlyMarkedBlogs