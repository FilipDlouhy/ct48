"use client"
import { Blog, blogAndReporter, blogContext, Reporter } from '@/models'
import React,{useEffect,useContext} from 'react'
import UserBlog from './UserBlog'

interface Props {
 blogs:blogAndReporter[]
}

function DisplayUserBlogs(props:Props) {
  const {category} = useContext(blogContext)
  function renderBlogs (category:string|undefined) {
    if(category === "all") {
      return props.blogs?.map((blog)=>{
        return <UserBlog blog={blog.blog} reporter={blog.reporter} />
      });
    } else {
      return props.blogs?.map((blog)=>{
        if(category === blog.blog.category) {
          return <UserBlog blog={blog.blog} reporter={blog.reporter} />
        }
      });
    }
  }
  
   return (
    <div>

        {renderBlogs(category)}

    </div>
  )
}

export default DisplayUserBlogs