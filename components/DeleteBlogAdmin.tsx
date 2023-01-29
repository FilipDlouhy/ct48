"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
interface props{
    blogId:string
}

function DeleteBlogAdmin(props:props) {
    const router = useRouter()
  return (
    <button onClick={()=>{
        console.log("ASDASD")
        axios.get(`http://localhost:3000/api/deleteBlog/${props.blogId}`)
        router.push("/AdminView")
        }}  className='text-center my-6 w-40 flex items justify-center  sm:w-52 h-8 text-sm text-white bg-red-400 sm:text-lg font-semibold   hover:w-44 rounded-lg sm:hover:w-64 duration-300 cursor-pointer' > Delete Blog</button>
  )
}

export default DeleteBlogAdmin