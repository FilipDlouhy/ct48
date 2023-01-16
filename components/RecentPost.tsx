import Link from 'next/link'
import React from 'react'

function RecentPost() {
  return (
    <Link href="/BlogPageUser" className='my-6 flex justify-around items-center  w-2/3 m-auto'>
        <img className='w-12 rounded-full h-12'></img>
        <div className='flex flex-col justify-between h-10'>
            <p className='text-xs font-bold'>OCT ADASDASD</p>
            <p className='text-xs font-bold'>JUNIOURUS VS CAESAR</p>
        </div>
    </Link>
  )
}

export default RecentPost