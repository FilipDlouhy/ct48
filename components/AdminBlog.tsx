import React from 'react'

function AdminBlog() {
  return (
 

    <div className='adminBlog m-5' >
      <img className='w-5/6 h-36 '></img>
      <h1 className='text-xl font-bold'>AUGUSTUS CHADUS</h1>
      <div className='flex h-16 w-full'>
        
        <div className='w-1/2 h-full flex justify-around items-center'>
          <img className='w-14 h-14 rounded-full'></img>
          <p className='font-semibold'>EL CHADO</p>
        </div>
        
        <div className='w-1/2 h-full flex justify-around items-center'>
          <img className='w-14 h-14 rounded-full'></img>
          <p className='font-semibold'> oct 155654654</p>
        </div>

      </div>

      <button className='h-8 w-56 bg-red-400 rounded-lg text-red-50 font-semibold text-lg'>See Whole Blog</button>
    </div>


  )
}

export default AdminBlog