"use client"
import React,{useContext,useState,useEffect} from 'react'
import "../app/globals.css"
import Link from 'next/link'
import { Blog, Reporter,blogContext } from '@/models'
import { useRouter } from 'next/navigation'
interface props {
  blog:Blog,
  reporters:Reporter[]
}
function FeaturedBlog(props:props) {
  const router = useRouter()
  const [reporter,setReporter] = useState<Reporter>()
  const {setMarkedBlog} = useContext(blogContext)
  useEffect(()=>{
    props.reporters?.map((reporter)=>{
      if(reporter.userId === props.blog.reporterId)
      {
        setReporter(reporter)
      }
    })
  },[])
  return (
    <button onClick={()=>{
          setMarkedBlog(props.blog)
          router.push("/BlogPageUser")
    }} className='h-52 cursor-pointer hover:w-56 duration-300 bg-red-300 hover:mr-1 ml-5 mr-5 w-52 text-white  flex flex-col items-center justify-between px-6 py-6 rounded shadow-md'>
        <p className='font-bold'>{props.blog?.dateCreatedString}</p>
        <h1 className='font-bold text-lg'>{props.blog?.title}</h1>   
        <div className='flex  items-center justify-between'>
            <img src={reporter?.img} className='w-12 h-12 mr-4 rounded-full'></img>
            <p className='text-sm font-medium'>{reporter?.name}</p>
        </div>

    </button>
  )
}

export default FeaturedBlog