"use client"
import { Blog, blogAndReporter, blogContext } from '@/models'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

function MarkUnmarkButton() {
    const [marked,setMarked] = useState<boolean>()
    const {user} = useContext(blogContext)
    const {markedBlog} = useContext(blogContext)
    const {blogs} = useContext(blogContext)
    const {setBlogs} = useContext(blogContext)
    const [bg,setBg] = useState<string>()
    useEffect(()=>{
      markedBlog?.blog.marked?.map((id)=>{
            if(id === user?.userId){
                setMarked(true)
                setBg("bg-yellow-400")
            }
            else
            {
                setMarked(false)
                setBg("bg-red-400")

            }
        },[])

    },[])



    
    return (
    <button onClick={()=>{
        if(marked && markedBlog){
          let newMarked:blogAndReporter[] |undefined= []
          let arr:string[]= []
          if(markedBlog.blog.marked) {
              arr = markedBlog.blog.marked.filter((fruit)=> {
              return fruit !== user?.userId;
            });
          }
    
            let newVersionBlog:Blog={
              img:markedBlog.blog.img,
              title: markedBlog.blog.title,
              text: markedBlog.blog.text,
              reporterId: markedBlog.blog.reporterId,
              dateCreatedString: markedBlog.blog.dateCreatedString,
              dateCreated: markedBlog.blog.dateCreated,
              blogId: markedBlog.blog.blogId,
              marked:arr,
              category:markedBlog.blog.category
            }
              axios.post("http://localhost:3000/api/updateBlog",newVersionBlog)
   
                  if(blogs) {
          
                    blogs?.map((blog)=>{
                      if(blog.blog.blogId !== markedBlog.blog.blogId){
                        newMarked?.push(blog)
                      }
                      else
                      {
                        newMarked?.push({blog:newVersionBlog,reporter:markedBlog.reporter})
                      }
                    })   
                    }
                    setBlogs(newMarked)
                    setMarked(false)
                    setBg("bg-red-400")

        }
        else
        {
            let arr :string[] = []

            if(user?.userId &&markedBlog?.blog.marked) {
              arr = markedBlog.blog.marked.filter((fruit)=> {
                return fruit !== user?.userId;
              });
              arr.push(user.userId)
            }

            if(markedBlog){
              let newMarked:blogAndReporter[] |undefined= []

                let newVersionBlog:Blog={
                  img:markedBlog.blog.img,
                  title: markedBlog.blog.title,
                  text: markedBlog.blog.text,
                  reporterId: markedBlog.blog.reporterId,
                  dateCreatedString: markedBlog.blog.dateCreatedString,
                  dateCreated: markedBlog.blog.dateCreated,
                  blogId: markedBlog.blog.blogId,
                  marked:arr,
                  category:markedBlog.blog.category
                }
                axios.post("http://localhost:3000/api/updateBlog",newVersionBlog)

            
                blogs?.map((blog)=>{
                  if(blog.blog.blogId !== markedBlog.blog.blogId){
                    newMarked?.push(blog)
                  }
                  else
                  {
                    newMarked?.push({blog:newVersionBlog,reporter:markedBlog.reporter})
                  }
                })   
                setBlogs(newMarked)
                setMarked(true)
                setBg("bg-yellow-400")
      
            }

        }
    }} className={user ? ` flex justify-center items-center my-6 w-52 h-8 text-white ${bg} text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer`: "hidden"} > {marked ? "Unmark": "Mark as Favorite"}</button>

  )
}

export default MarkUnmarkButton



