"use client"
import { Blog, blogContext } from '@/models'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import React, { useEffect,useContext } from 'react'
interface BlogProps{
  blog: Blog
}


function ReporterViewBlog(props: Blog ) {

  function getWordStr(str:string) {
    return str.split(/\s+/).slice(0, 15).join(" ");
    }
    const {setReporterBlogs} = useContext(blogContext)
    const {reporterBlogs} = useContext(blogContext)
    const {setUpdatedBlog} = useContext(blogContext)
    const router = useRouter()
    return (
    <div className='reporterBlog p-2 m-5' >
        <img src={props.img} className='w-11/12 h-40'></img>
        <h1 className='text-base font-bold'>{props.title}</h1>
        <p className='font-bold text-base'>{props.dateCreatedString}</p>
        <p className='w-full h-8 wordWrap text-center'>{getWordStr(props.text)}</p>
        <div className='h-16 w-full flex flex-wrap items-center justify-around'>
            
            <Link href={`/BlogPageReporterView/${props.blogId}`} className=' m-1 flex items-center justify-center w-36 h-8 bg-red-500 rounded-lg text-white font-semibold cursor-pointer hover:bg-orange-400 duration-200 '>See whole blog</Link>
   
            <button onClick={()=>{
            axios.get(`http://localhost:3000/api/deleteBlog/${props.blogId}`).then(()=>{
              let arr:Blog[] = []
              reporterBlogs?.map((blog)=>{
                if(blog.blogId !== props.blogId)
                {
                  arr.push(blog)
                }
              })    
              setReporterBlogs(arr)
            })

            }} className=' m-1 flex items-center justify-center w-36 h-8 bg-red-500 rounded-lg text-white font-semibold cursor-pointer hover:bg-orange-400 duration-200 '>Delete</button>


            <button onClick={()=>{
              let newBlog:Blog={
                img: props.img,
                title: props.title,
                text: props.text,
                reporterId: props.reporterId,
                dateCreatedString: props.dateCreatedString,
                dateCreated: props.dateCreated,
                blogId: props.blogId,
                marked:props.marked
                }
             setUpdatedBlog(newBlog) 
             router.push("/BlogPageReporterUpdate")
            }} className=' m-1  flex items-center justify-center w-36 h-8 bg-red-500 rounded-lg text-white font-semibold cursor-pointer hover:bg-orange-400 duration-200 '>Update</button>
        </div>
</div>
  )
}

export default ReporterViewBlog