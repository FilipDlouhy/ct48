import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { Blog } from '@/models'
interface BlogPageProps{
    params:{
        blogId:string
    }
}


const fetchBlog = async (blogId:string)=>{
    const res = await fetch(`http://localhost:3000/api/getBlog/${blogId}`)
    const blog:Blog = await res.json()
    return blog 
}

async function page({params:{blogId}}:BlogPageProps) {
    const blog = await fetchBlog(blogId)
    return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
             <Link href={"/ReporterView"} className='flex justify-center items-center my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Go to your Blogs</Link>


        </div>
    
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>Blog View</h1>


        <div className='BlogPageReporter flex flex-col items-center p-5'>
    
            <img src={blog.img} className='h-2/5 w-11/12'></img>
            <h1 className='my-5 text-2xl font-bold'>{blog.title}</h1>
            <p className='text-lg font-bold'>{blog.dateCreatedString}</p>            
            <p  className='text-center w-full blogTextarea'>{blog.text}</p>
        </div>
    </div>
  )
}

export default page