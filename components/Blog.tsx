import React from 'react'
import "../app/globals.css"

function Blog() {
  return (
    <div className='blog flex flex-col justify-between items-center p-5 rounded bg-white'>
        <img className=' blogImg rounded-md'></img>
        <h1 className='font-bold text-2xl'>AUGUSTUS IS A GREATEST CHAD OF CHADS</h1>
        <div className='h-12  flex'>
            <div className='w-64 flex justify-around items-center'>
                <img className='h-8 w-8 rounded-full'></img>
                <p className='text-xs'>AUGUSTUS IS A GREATEST CHAD</p>
            </div>
            <div className='w-40 flex justify-around items-center'>
                <img className='rounded-full h-8 w-8'></img>
                <p className='text-xs'>684456546556</p>
            </div>
        </div>
        <div className='blogText'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, maiores unde omnis laboriosam placeat fugiat atque alias cumque. Tempore maiores laborum excepturi recusandae asperiores voluptas nemo optio, nesciunt in possimus.
        </div>
        <button className='h-11 cursor-pointer hover:w-52 duration-150 w-48 bg-red-500 font-semibold rounded-xl text-slate-50'>Continue Reading</button>

    </div>
  )
}

export default Blog