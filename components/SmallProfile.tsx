"use client"
import { Blog, blogAndReporter, blogContext, Reporter } from '@/models'
import React, { useContext, useEffect, useState } from 'react'
import { convertCompilerOptionsFromJson } from 'typescript'
import RecentlyMarkedBlog from './RecentlyMarkedBlog'


function SmallProfile() {
  const {user} = useContext(blogContext)
  const {blogs} = useContext(blogContext)


  return (
    <div className={user ? ' w-96 smallProfile mt-7 mb-6 bg-white rounded-lg': "hidden"}>
        
        <div className='w-full h-10 flex justify-center items-center border-b-2	'>
            <h1 className='font-bold text-xl'>{user ?` Hello ${user.name}` :"You are not logged in" }</h1>
        </div>

        <h1 className='text-center my-2 font-semibold text-lg'>Recently marked Blogs</h1>
        <div className='w-full flex justify-start flex-col items-center pb-16 text-lg font-bold  py-5 h-80'>
            { blogs?.map((blog)=>{
              if(user&& blog.blog.marked?.includes(user?.userId))
              {
                return <RecentlyMarkedBlog props={blog}/>

              }
            })}
        </div>

    </div>
  )
}

export default SmallProfile