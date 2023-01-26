"use client"
import { blogContext } from '@/models'
import React,{useContext} from 'react'
import UserReporterPageRightBlog from './UserReporterPageRightBlog'

function UserReporterPageRight() {

    const {blogs} = useContext(blogContext)
    const {markedBlog} = useContext(blogContext)

  return (
    <div className='w-3/5 flex flex-wrap py-3 my-14'>

        {blogs?.map((blog)=>{
            if(blog.reporter.userId === markedBlog?.reporter.userId)
            {
                return <UserReporterPageRightBlog blog={blog}/>
            }
        })}

    </div>
  )
}

export default UserReporterPageRight