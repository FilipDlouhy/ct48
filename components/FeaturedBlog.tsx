"use client"
import React,{useContext,useState,useEffect} from 'react'
import "../app/globals.css"
import Link from 'next/link'
import { Blog, Reporter,blogContext, blogAndReporter } from '@/models'
import { useRouter } from 'next/navigation'
interface props {
blog:blogAndReporter
}
function FeaturedBlog(props:props) {
  const {setMarkedBlog} = useContext(blogContext)

  return (
    <Link href={"/BlogPageUser"} onClick={()=>{
          setMarkedBlog(props.blog)
    }} className='h-52 cursor-pointer hover:w-56 duration-300 bg-red-300 hover:mr-1 ml-5 mr-5 w-52 text-white  flex flex-col items-center justify-between px-6 py-6 rounded shadow-md'>
        <p className='font-bold'>{props.blog?.blog?.dateCreatedString}</p>
        <h1 className='font-bold text-lg'>{props.blog.blog?.title}</h1>   
        <div className='flex  items-center justify-between'>
            <img src={props.blog.reporter?.img} className='w-12 h-12 mr-4 rounded-full'></img>
            <p className='text-sm font-medium'>{props.blog.reporter?.name}</p>
        </div>

    </Link >
  )
}

export default FeaturedBlog