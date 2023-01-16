import React from 'react'
import "../app/globals.css"
import Link from 'next/link'
function Blog() {
  return (
    <div className='blog flex flex-col justify-between items-center p-5 rounded bg-white'>
        <img  src="https://res.cloudinary.com/dnhqwtuev/image/upload/v1673734722/blog/pexels-designecologist-1779487_smp0tr.jpg" className=' blogImg rounded-md'></img>
        <h1 className='font-bold text-2xl'>AUGUSTUS IS A GREATEST CHAD OF CHADS</h1>
        <div className='h-12  flex'>
            <div className='w-64 flex justify-around items-center'>
                <img className='h-8 w-8 rounded-full'></img>
                <p className=' font-semibold text-xs'>AUGUSTUS IS A GREATEST CHAD</p>
            </div>
            <div className='w-40 flex justify-around items-center'>
                <img className='rounded-full h-8 w-8'></img>
                <p className=' font-semibold text-xs'>684456546556</p>
            </div>
        </div>
        <div className='blogText'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, maiores unde omnis laboriosam placeat fugiat atque alias cumque. Tempore maiores laborum excepturi recusandae asperiores voluptas nemo optio, nesciunt in possimus.
        </div>
        <div className="flex w-4/5 justify-between items-center ">
        <Link  href="/BlogPageUser" className='flex items-center justify-center h-11 cursor-pointer hover:w-52 duration-150 w-48 bg-red-500 font-semibold rounded-xl text-slate-50'>Continue Reading</Link>
        <button className='h-11 cursor-pointer hover:w-52 duration-150 w-48 bg-yellow-500 font-semibold rounded-xl text-slate-50'>Mark as Favorite</button>

        </div>

    </div>
  )
}

export default Blog