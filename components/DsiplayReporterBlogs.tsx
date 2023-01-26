"use client"
import React, { useContext, useEffect } from 'react'
import { Blog, blogContext } from '@/models'
import ReporterViewBlog from './ReporterViewBlog'
import { useState } from 'react'
interface props {
    blogs:Blog[]|undefined
}
function DsiplayReporterBlogs(props:props) {
    const {reporterId} = useContext(blogContext)
    const {setReporterBlogs} = useContext(blogContext)
    const {reporterBlogs} = useContext(blogContext)
    useEffect(()=>{
      setReporterBlogs(props.blogs)
    },[])

  return (
    <div className='w-5/6 flex flex-wrap '>

    { reporterBlogs?.map((blog:Blog)=>{
        if(blog.reporterId === reporterId){
            return <ReporterViewBlog category={blog.category} marked={blog.marked} img={blog.img} title={blog.title} text={blog.text} reporterId={blog.reporterId} dateCreatedString={blog.dateCreatedString} dateCreated={blog.dateCreated} blogId={blog.blogId}/>
        }

    })}




  </div>
  )
}

export default DsiplayReporterBlogs