import { Blog, Reporter } from '@/models'
import React from 'react'
import UserBlog from './UserBlog'

interface Props {
    userBlogs:Blog[],
    reporters:Reporter[]
}

function DisplayUserBlogs(props:Props) {
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