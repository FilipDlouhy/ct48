import React, { useCallback, useContext } from 'react'
import ReporterViewBlog from '@/components/ReporterViewBlog'
import { Blog, blogContext } from '@/models'
import Link from 'next/link'
import DsiplayReporterBlogs from '@/components/DsiplayReporterBlogs'
import ReporterStats from '@/components/ReporterStats'

const getBlogs = async ()=> {
  const res = await fetch("http://localhost:3000/api/getAllBlogs")
  const blogs:Blog[] = await res.json()
  return blogs 
 }
 async function page() {

  const blogs:Blog[] = await getBlogs()
  return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
             <Link href= "/ReporterSingIn" className=' flex items-center justify-center my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer'
            > Log Out</Link>

      
             <Link href="/CreateBlog" className=' flex items-center justify-center my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' >Create New Blog</Link>
        </div>
        <h1 className='text-center h-20 flex justify-center items-center text-4xl text-white font-bold'>Your Blogs </h1>




      

        <div className='w-full h-full flex'>
          <DsiplayReporterBlogs blogs={blogs}/>
          <ReporterStats blogs={blogs}/>
        </div>




    </div>
  )
}

export default page