"use client"
import { blogContext } from '@/models'
import React, { useContext, useEffect, useState } from 'react'
import RecentlyMarkedBlogs from './RecentlyMarkedBlogs'

function SmallProfile() {
  const [userName,setUserName] = useState<string>()
  const {user} = useContext(blogContext)
  useEffect(()=>{
    if(user)
    {
      setUserName(` Hello ${user.name}`)
    }
    else
    {
      setUserName("You are not logged in")
    }
    
  },[])
  return (
    <div className=' w-96 smallProfile mt-7 mb-6 bg-white rounded-lg'>
        
        <div className='w-full h-10 flex justify-center items-center border-b-2	'>
            <h1 className='font-bold text-xl'>{userName}</h1>
        </div>

        <h1 className='text-center my-2 font-semibold text-lg'>Recently marked Blogs</h1>

        <div className='w-full flex justify-start flex-col items-center pb-16 text-lg font-bold  py-5 h-80'>
          <RecentlyMarkedBlogs/>
          <RecentlyMarkedBlogs/>
          <RecentlyMarkedBlogs/>
          <RecentlyMarkedBlogs/>
        </div>
    </div>
  )
}

export default SmallProfile