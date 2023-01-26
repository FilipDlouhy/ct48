"use client"
import { Blog, blogAndReporter, blogContext } from '@/models'
import Link from 'next/link'
import React, { useContext } from 'react'


interface props {
  props:blogAndReporter
}

function RecentPost( props :props) {
  const {setReporter}  =useContext(blogContext)
  const {setMarkedBlog}  =useContext(blogContext)
  return (
    <Link onClick={()=>{
      setReporter(props.props.reporter)
      setMarkedBlog(props.props.blog)
    }} href="/BlogPageUser" className='my-4 h-14 flex justify-around items-center hover:bg-red-300 duration-300  rounded-lg w-4/5 hover:text-yellow-50 m-auto'>
        <img src={props.props.blog?.img} className='w-12 rounded-full h-12'></img>
        <div className='flex flex-col justify-between h-10'>
            <p className='text-sm font-bold'>{props.props.blog?.dateCreatedString}</p>
            <p className='text-sm font-bold'>{props.props.blog?.title}</p>
        </div>
    </Link>
  )
}

export default RecentPost