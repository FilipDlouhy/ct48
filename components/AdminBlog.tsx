import React from 'react'
import Link from 'next/link'
import { blogAndReporter, blogContext } from '@/models'
interface props {
  blog:blogAndReporter
}

function AdminBlog(props:props) {
  return (
 

    <div  className={props.blog.reporter.banned ?'adminBlog m-5 bg-red-100' :'adminBlog m-5 bg-white' } >
      <img src={props.blog.blog.img} className='w-5/6 h-36 '></img>
      <h1 className='text-xl font-bold'>{props.blog.blog.title}</h1>
      <div className='flex h-16 w-full'>
        
        <div className='w-1/2 h-full flex justify-around items-center'>
          <img src={props.blog.reporter.img} className='w-14 h-14 rounded-full'></img>
          <p className='font-semibold'>{props.blog.reporter.name}</p>
        </div>
        
        <div className='w-1/2 h-full flex justify-around items-center'>
          <img src={"https://res.cloudinary.com/dnhqwtuev/image/upload/v1674147141/blog/drupal-module-calendar_q7mrgn.jpg"} className='w-14 h-14 rounded-full'></img>
          <p className='font-semibold'> {props.blog.blog.dateCreatedString}</p>
        </div>

      </div>

      <Link href={`/BlogPageAdmin/${props.blog.blog.blogId}`}className='flex items-center justify-center h-8 w-56 bg-red-400 rounded-lg text-red-50 font-semibold text-lg'>See Whole Blog</Link>
    </div>


  )
}

export default AdminBlog