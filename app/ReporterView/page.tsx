import React from 'react'
import Blog from '@/components/Blog'    
import ReporterViewBlog from '@/components/ReporterViewBlog'
function page() {
  return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
             <button className='my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Log Out</button>

             <button className='my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' >Create New Blog</button>
        </div>
        <h1 className='text-center h-20 flex justify-center items-center text-4xl text-white font-bold'>Your Blogs</h1>

        <div className='w-full flex items-center justify-center flex-wrap'>

            <ReporterViewBlog/>
            <ReporterViewBlog/>
            <ReporterViewBlog/>


        </div>






    </div>
  )
}

export default page