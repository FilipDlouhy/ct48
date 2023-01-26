"use client"
import axios from 'axios'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import React, { useState,useContext,useEffect } from 'react'
import { Blog, blogContext, BlogContext } from '@/models'
import MarkUnmarkButton from '@/components/MarkUnmarkButton'
import { useRouter } from 'next/navigation'



function page() {
  const {markedBlog} = useContext(blogContext)
  const {user} = useContext(blogContext)
  const {blogs} = useContext(blogContext)
  const {setMarkedBlog} = useContext(blogContext)
  useEffect(()=>{
      blogs?.map((blog)=>{
        console.log(blog.blog.marked)
      })
  },[])
    return (
    <div>
        <Navbar />  
        <div className='w-full h-11 mt -8 flex items-center justify-between '>
          <Link  href={"/"} className='flex justify-center items-center my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Go to your Blogs</Link>
          {user && <MarkUnmarkButton  />}

        </div>
    
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>Blog View</h1>


        <div className='BlogPageReporter flex flex-col items-center p-5'>
    
              <img src={markedBlog?.blog?.img} className='h-2/5 w-11/12'></img>
              <h1 className='my-5 text-2xl font-bold'>{markedBlog?.blog?.title}</h1>
              <p className='text-lg font-bold'>{markedBlog?.blog?.dateCreatedString}</p>            
              <p  className='text-center w-full blogTextarea'>{markedBlog?.blog?.text}</p>

              <Link onClick={()=>{
                setMarkedBlog(markedBlog)
              }} href={"/UserReporterPage"} className='h-16 w-96 bg-red-200 text-white font-semibold rounded-xl cursor-pointer hover:bg-white hover:text-black duration-300  flex justify-around items-center'>
                  <p>Wrote by:{markedBlog?.reporter.name}</p>
                  <img src={markedBlog?.reporter.img} className='w-14 h-14 rounded-full'></img>
              </Link>
        </div>
    </div>
  )
}

export default page

