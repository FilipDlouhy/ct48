"use client"
import { blogAndReporter, blogContext } from '@/models'
import Link from 'next/link'
import React,{useContext} from 'react'

interface blog {
  blog:blogAndReporter
}

function SearchBlog(props:blog) {
  const {setMarkedBlog} = useContext(blogContext)
  return (
    <Link href={"/BlogPageUser"} onClick={()=>{setMarkedBlog(props.blog)}} className='w-11/12 h-12 flex hover:bg-yellow-200 cursor-pointer duration-300 bg-white items-center my-3 rounded-sm justify-around'>
        <div>
            <p className='text-sm font-semibold'>Name: {props.blog.blog.title}</p>
            <p className='text-sm font-semibold'>Type: Blog</p>
        </div>
        <img src={props.blog.blog.img} className='h-11 w-11 rounded-full'></img>
    </Link>
  )
}

export default SearchBlog