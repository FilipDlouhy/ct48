"use client"
import { Blog, blogAndReporter, blogContext, Reporter } from '@/models'
import React, { useEffect,useContext } from 'react'
import "../app/globals.css"
import FeaturedBlog from './FeaturedBlog'

interface props{
  blogs:blogAndReporter[]
}

function FeaturedBlogs(props:props) {
  const {category} = useContext(blogContext)
  function renderBlogs (category:string|undefined) {
    if(category === "all") {
      return props.blogs?.map((blog)=>{
        return <FeaturedBlog blog={blog}/>
      });
    } else {
      return props.blogs?.map((blog)=>{
        if(category === blog.blog.category) {
          return <FeaturedBlog blog={blog}/>
        }
      });
    }
  }
  return (
    <div className='h-64 featuredBlocks  flex items-center overflow-x-hidden'>
        
      {renderBlogs(category)}
    </div>
  )
}

export default FeaturedBlogs