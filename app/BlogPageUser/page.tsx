"use client"
import axios from 'axios'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import React, { useState,useContext } from 'react'
import { Blog, blogContext, BlogContext } from '@/models'
import MarkUnmarkButton from '@/components/MarkUnmarkButton'
import { useRouter } from 'next/navigation'



function page() {
  const {markedBlog} = useContext(blogContext)
  const router = useRouter()
    return (
    <div>
        <Navbar />  
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
          <button onClick={()=>{router.push("/")}} className='flex justify-center items-center my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Go to your Blogs</button>
          {markedBlog && <MarkUnmarkButton blog={markedBlog}/>}

        </div>
    
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>Blog View</h1>


        <div className='BlogPageReporter flex flex-col items-center p-5'>
    
            <img src={markedBlog?.img} className='h-2/5 w-11/12'></img>
            <h1 className='my-5 text-2xl font-bold'>{markedBlog?.title}</h1>
            <p className='text-lg font-bold'>{markedBlog?.dateCreatedString}</p>            
            <p  className='text-center w-full blogTextarea'>{markedBlog?.text}</p>
        </div>
    </div>
  )
}

export default page
