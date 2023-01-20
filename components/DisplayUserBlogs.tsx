"use client"
import { Blog, Reporter } from '@/models'
import React,{useEffect} from 'react'
import UserBlog from './UserBlog'

interface Props {
    userBlogs:Blog[],
    reporters:Reporter[]
}

function DisplayUserBlogs(props:Props) {
  useEffect(()=>{
    console.log(props.userBlogs)
  })
   return (
    <div>

        {props.userBlogs.map((blog)=>{
            let blogReporter:Reporter|undefined 
            props.reporters.map((reporter)=>{
                if(blog.reporterId === reporter.userId)
                {
                    blogReporter = reporter
                }
            })
            return <UserBlog blog={blog} reporter={blogReporter} />
        })}

    </div>
  )
}

export default DisplayUserBlogs