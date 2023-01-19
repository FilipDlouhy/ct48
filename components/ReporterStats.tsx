"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Blog, blogContext } from '@/models'
interface props {
    blogs:Blog[]|undefined
}
function ReporterStats(props:props) {
    const {reporterId} = useContext(blogContext)
    const {reporter} = useContext(blogContext)
    const [totalBlogs,setTotalBlogs] = useState<string>()
    useEffect(()=>{
        let count = 0
        props.blogs?.map((blog)=>{
            if(blog.reporterId === reporterId)
            {
                count++
            }
        })
        setTotalBlogs(count.toString())
    })


  return (
    <div className='w-1/5 h-full '>
        <div className=' reporterStickman flex items-center justify-around my-6 w-72 h-64 text-white bg-red-500 text-lg font-semibold       rounded-lg cursor-pointer flex-col' >

            <p className='text-xl font-bold'>Your stats </p>
            <div className='flex w-full items-center justify-around '>
                <p className='font-bold'>{reporter?.name}</p>
                <img src={reporter?.img} className='w-16 h-16 rounded-full'></img>    
            </div>    
              
            <p className=''>Total Blogs {totalBlogs}</p>
            <p className=''>Total Reads 0</p>
            <p className=''>Total Marked: 0</p>
 
       </div>
    </div>
 
  )
}

export default ReporterStats