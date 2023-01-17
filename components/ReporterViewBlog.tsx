import Link from 'next/link'
import React from 'react'

function ReporterViewBlog() {
  return (
    <div className='reporterBlog p-5 m-7' >
        <img className='w-11/12 h-32'></img>
        <h1 className='text-xl font-bold'>Jozo is a chadix</h1>
        <p className='font-bold text-base'>oct 4212365</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eaque amet doloremque! Esse distinctio omnis praesentium sint, at, eius nihil incidunt dicta eaque dolore, odio optio voluptas beatae perferendis temporibus.</p>
        <div className='h-12 w-full flex items-center justify-around'>
            
            <Link href="/BlogPageReporterView" className='flex items-center justify-center w-36 h-8 bg-red-500 rounded-lg text-white font-semibold cursor-pointer hover:bg-orange-400 duration-200 '>See whole blog</Link>
   
            <button  className='flex items-center justify-center w-36 h-8 bg-red-500 rounded-lg text-white font-semibold cursor-pointer hover:bg-orange-400 duration-200 '>Delete</button>


            <Link href="/BlogPageReporterUpdate" className=' flex items-center justify-center w-36 h-8 bg-red-500 rounded-lg text-white font-semibold cursor-pointer hover:bg-orange-400 duration-200 '>Update</Link>
        </div>
</div>
  )
}

export default ReporterViewBlog