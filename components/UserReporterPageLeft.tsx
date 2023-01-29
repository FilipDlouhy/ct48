"use client"
import { blogContext } from '@/models'
import React,{useContext} from 'react'

function UserProfilePageLeft() {
  const {markedBlog} = useContext(blogContext)
  return (
    <div className=' md:UserPageProfileLeft bg-white  py-5 my-14 rounded-lg'>

        <div className='w-full flex flex-col items-center justify-around h-1/2'>

            <img src={markedBlog?.reporter.img} className='w-36 h-36 rounded-full'></img>

            <p className='text-xl font-bold '>{markedBlog?.reporter.name}</p>

            <p className='text-lg font-bold '>Member since: {markedBlog?.reporter.dateCreatedString}</p>

        </div>



        <div className='w-full flex flex-col  items-center justify-around  h-1/2'>
          <h1 className='text-lg font-semibold '>Bio</h1>
          <textarea disabled className='w-80 resize-none h-40 bg-white font-medium '>Lorem ipsum dolor sit ametametametametametametametamet, consectetur adipisicing elit. Libero voluptas incidunt distinctio non, modi voluptates cumque deserunt minus odit in voluptate facilis eveniet quidem repudiandae illo magnam facere, voluptatibus animi!</textarea>

        </div>

    </div>
  )
}

export default UserProfilePageLeft