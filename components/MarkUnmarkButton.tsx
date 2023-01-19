"use client"
import { Blog, blogContext } from '@/models'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
interface ButtonProps{
    blog:Blog
}

function MarkUnmarkButton(props:ButtonProps) {
    const [marked,setMarked] = useState<boolean>()
    const {user} = useContext(blogContext)
    const [bg,setBg] = useState<string>()
    useEffect(()=>{
        props.blog.marked?.map((id)=>{
            if(id === user?.userId){
                setMarked(true)
                setBg("bg-yellow-400")
            }
            else
            {
                setMarked(false)
                setBg("bg-red-400")

            }
        })

    },[])
    return (
    <button onClick={()=>{
        if(marked){
          let arr:string[]= []
          if(props.blog.marked) {
            props.blog.marked.map((userId)=>{
              if(userId !== user?.userId)
              {
                  arr.push(userId)
              }
            })

          }
    
            let newVersionBlog:Blog={
              img:props.blog.img,
              title: props.blog.title,
              text: props.blog.text,
              reporterId: props.blog.reporterId,
              dateCreatedString: props.blog.dateCreatedString,
              dateCreated: props.blog.dateCreated,
              blogId: props.blog.blogId,
              marked:arr
            }
              axios.post("http://localhost:3000/api/updateBlog",newVersionBlog)
                  setMarked(false)
                  setBg("bg-red-400")
         
            
        }
        else
        {
            let arr= props.blog.marked
            if(user?.userId) {
              arr?.push(user?.userId)

            }
      
              let newVersionBlog:Blog={
                img:props.blog.img,
                title: props.blog.title,
                text: props.blog.text,
                reporterId: props.blog.reporterId,
                dateCreatedString: props.blog.dateCreatedString,
                dateCreated: props.blog.dateCreated,
                blogId: props.blog.blogId,
                marked:arr
              }
              axios.post("http://localhost:3000/api/updateBlog",newVersionBlog)
              setMarked(true)
              setBg("bg-yellow-400")
        }
    }} className={user ? ` flex justify-center items-center my-6 w-52 h-8 text-white ${bg} text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer`: "hidden"} > {marked ? "Unmark": "Mark as Favorite"}</button>

  )
}

export default MarkUnmarkButton
