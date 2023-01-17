"use client"
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { Blog, blogContext } from '@/models'
import axios from 'axios'
function page() {
    const [img,setImg] = useState<string >()
    const [title,setTitle]= useState<string>()
    const [text,setText]= useState<string>()
    const {reporterId} = useContext(blogContext)
    return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
        <Link href={"/ReporterView"} className='flex justify-center items-center my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Go to your Blogs</Link>

             <button onClick={()=>{

                let date = new Date()
                let createdAtNumber = date.getTime()
                var m = new Date();
                var dateString =
                    m.getUTCFullYear() + "/" +
                    ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
                    ("0" + m.getUTCDate()).slice(-2)
                if(img&&title&&text&&reporterId){
                    let newBlog:Blog ={
                        img:img,
                        title:title,
                        text:text,
                        reporterId:reporterId,
                        dateCreatedString:dateString,
                        dateCreated:createdAtNumber
                    }
                    console.log(newBlog)
                axios.post("/api/createBlog",newBlog)
                  
                }

             }} className='my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Publish  Blog</button>
        </div>
    
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>Blog View</h1>


        <div className='BlogPageReporter flex flex-col items-center p-5'>
            <p>Url For Image</p>
            <input  onChange={(e)=>{
                setImg(e.target.value)
            }} className=" w-64 rounded-md  bg-red-400 text-center text-white font-semibold mb-4 cursor-pointer"  type="text"></input>    
              <img   className='h-2/5 w-11/12'></img>
            <textarea onChange={(e)=>{
                setTitle(e.target.value)
            }}placeholder='Title' className='w-1/2 text-center h-9 border-2   resize-none my-5 text-2xl font-bold'></textarea>
            <p className='text-lg font-bold'></p>            
            <textarea onChange={(e)=>{
                setText(e.target.value)
            }}placeholder='Text in a blog'  className='text-center w-full blogTextarea border-2  '></textarea>
        </div>
    </div>
  )
}

export default page