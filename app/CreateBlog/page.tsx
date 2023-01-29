"use client"
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { Blog, blogContext } from '@/models'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import uuid from 'react-uuid'
import { arrayBuffer } from 'stream/consumers'
function page() {
    const [img,setImg] = useState<string >()
    const [title,setTitle]= useState<string>()
    const [text,setText]= useState<string>()
    const [category,setCategory] = useState<string>()
    const {reporterId} = useContext(blogContext)
    const router = useRouter()
    return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
        <Link href={"/ReporterView"} className='text-center my-6 w-40 flex items justify-center  sm:w-52 h-8 text-sm text-white bg-red-400 sm:text-lg font-semibold   hover:w-44 rounded-lg sm:hover:w-64 duration-300 cursor-pointer'  > Go to your Blogs</Link>

             <button onClick={()=>{

                let date = new Date()
                let createdAtNumber = date.getTime()
                var m = new Date();
                var dateString =
                    m.getUTCFullYear() + "/" +
                    ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
                    ("0" + m.getUTCDate()).slice(-2)
                    const blogId = uuid()
                if(img&&title&&text&&reporterId && category){
                    let newBlog:Blog ={
                        img:img,
                        title:title,
                        text:text,
                        reporterId:reporterId,
                        dateCreatedString:dateString,
                        dateCreated:createdAtNumber,
                        blogId:blogId,
                        marked:[],
                        category:category
                    }


                axios.post("/api/createBlog",newBlog)
                    
                router.push("/ReporterView")  
                }

             }} className='text-center my-6 w-40 flex items justify-center  sm:w-52 h-8 text-sm text-white bg-red-400 sm:text-lg font-semibold   hover:w-44 rounded-lg sm:hover:w-64 duration-300 cursor-pointer'  > Publish  Blog</button>
        </div>
    
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>Blog View</h1>


        <div className='BlogPageReporter flex flex-col items-center p-5'>
            <p>Url For Image</p>
            <input  onChange={(e)=>{
                setImg(e.target.value)
            }} className=" w-64 rounded-md  bg-red-400 text-center text-white font-semibold mb-4 cursor-pointer"  type="text"></input>   


                     <select onChange={(e)=>{
                        setCategory(e.target.value)
                     }} className='w-64 rounded-md  bg-red-400 text-center text-white font-semibold mb-4 cursor-pointer' name="categories" id="categories">
                        <option value="Web Development">Web Development</option>
                        <option value="History">History</option>
                        <option value="BasketBall">BasketBall</option>
                        <option value="Fitness">Fitness</option>
                        </select>


              <img src={img}  className='h-2/5 w-11/12'></img>
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