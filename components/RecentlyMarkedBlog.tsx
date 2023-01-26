"use client"
import React,{useContext} from 'react'
import Link from 'next/link'
import { Blog, blogAndReporter, blogContext } from '@/models'
interface props{
  props:blogAndReporter
}
function RecentlyMarkedBlog(props:props) {
  const {setMarkedBlog} = useContext(blogContext)
  return (
    <Link onClick={()=>{
      setMarkedBlog({blog:props.props.blog,reporter:props.props.reporter})
    }} href="/BlogPageUser" className='my-2 bg-yellow-200 p-2 flex justify-around items-center h-11 rounded-lg hover:w-4/5 duration-200 cursor-pointer  w-2/3 m-auto'>
        <img src={props.props?.blog?.img} className='w-8 rounded-full h-8'></img>
        <div className='flex flex-col justify-between h-10'>
            <p className='text-xs font-bold'>{props.props?.blog?.dateCreatedString}</p>
            <p className='text-xs font-bold'>{props.props?.blog?.title}</p>
        </div>
    </Link>
  )
}

export default RecentlyMarkedBlog