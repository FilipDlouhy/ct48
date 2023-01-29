import React from 'react'
import Link from 'next/link'
import { Blog, Reporter } from '@/models'
interface props {
  blog:Blog,
  reporter:Reporter
}

function AdminBlogProfile(props:props) {
  return (
 

    <div  className={props.reporter.banned ?'adminBlog m-5 bg-red-100' :'adminBlog m-5 bg-white' } >
      <img src={props.blog.img} className='w-5/6 h-36 '></img>
      <h1 className='text-xl font-bold'>{props.blog.title}</h1>
      <div className='flex h-16 w-full'>
        
        <div className='w-1/2 h-full flex justify-around items-center'>
          <img src={props.reporter.img} className='w-14 h-14 rounded-full'></img>
          <p className='font-semibold'>{props.reporter.name}</p>
        </div>
        
        <div className='w-1/2 h-full flex justify-around items-center'>
          <img src={"https://res.cloudinary.com/dnhqwtuev/image/upload/v1674147141/blog/drupal-module-calendar_q7mrgn.jpg"} className='w-14 h-14 rounded-full'></img>
          <p className='font-semibold'> {props.blog.dateCreatedString}</p>
        </div>

      </div>

      <Link href={`/BlogPageReporterAdmin/${props.blog.blogId}`} className='flex items-center justify-center h-8 w-56 bg-red-400 rounded-lg text-red-50 font-semibold text-lg'>See Whole Blog</Link>
    </div>


  )
}

export default AdminBlogProfile