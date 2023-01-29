"use client"
import { blogAndReporter, blogContext } from '@/models'
import Link from 'next/link'
import React,{useContext} from 'react'

interface blog {
  blog:blogAndReporter
}
function SearchReporter(props:blog) {
    const {setMarkedBlog} = useContext (blogContext)
    return (
    <Link href={"/UserReporterPage"} onClick={()=>{
        setMarkedBlog(props.blog)
    }} className='w-11/12 h-12 flex hover:bg-yellow-200 cursor-pointer duration-300 bg-white items-center my-3 rounded-sm justify-around'>
        <div>
            <p className='text-sm font-semibold'>Name: {props.blog.reporter.name}</p>
            <p className='text-sm font-semibold'>Type: Reporter</p>
        </div>
        <img src={props.blog.reporter.img} className='h-11 w-11 rounded-full'></img>
    </Link>
  )
}

export default SearchReporter