import React from 'react'
import Reporter from '@/components/Reporter'
import AdminBlog from '@/components/AdminBlog'

function page() {
  return (
    <div>
      <button className='w-44 h-8 mt-4 font-semibold text-white text-lg rounded-md hover:bg-orange-200 duration-200 hover:text-xl bg-red-300'>Log out</button>
      <h1 className='text-center h-20 flex justify-center items-center text-4xl text-white font-bold'>ČT 48 Administration</h1>

      <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='my-6 text-3xl text-red-50 font-semibold'>Reporters</h1>
        <div className='w-full flex items-center justify-center flex-wrap'>
          <Reporter/>
          <Reporter/>
          <Reporter/>
          <Reporter/>
          <Reporter/>
          <Reporter/>


        </div>
      </div>


      <div className=' mt-10'>
        <h1  className='text-center my-6 text-3xl text-red-50 font-semibold'>Blogs Posted</h1>
        <div className='flex justify-center items-center flex-wrap '>
        <AdminBlog/>
        <AdminBlog/>
        <AdminBlog/>
        <AdminBlog/>
        <AdminBlog/>
        </div>
      </div>
    </div>
  )
}

export default page