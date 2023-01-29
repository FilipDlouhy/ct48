"use client"
import { Blog, blogContext, Reporter } from '@/models'
import React,{useEffect,useState,useContext} from 'react'
import RecentPost from './RecentPost'
import { blogAndReporter } from '@/models' 

interface props {
blogs:blogAndReporter[]
}

function RecentPosts(props:props) {
  const [blogs,setBlogs] = useState<blogAndReporter[]>()
  const {category} = useContext(blogContext)
  function renderBlogs (category:string|undefined) {
    if(category === "all") {
      return blogs?.map((blog)=>{
        return <RecentPost props={blog}/>
      });
    } else {
      return blogs?.map((blog)=>{
        if(category === blog.blog.category) {
          return <RecentPost props={blog}/>
        }
      });
    }
  }
  useEffect(()=>{
    let count = 1
    let arr:blogAndReporter[] = []
    props.blogs?.map((blog)=>{
      if(count < 3 )
       {
        arr.push(blog)
        count++
       }

      })
    setBlogs(arr)
  },[])
  return (
    <div className='  w-96 h-72 bg-white rounded-lg'>
        
        <div className='w-full h-10 flex justify-center items-center border-b-2	'>
            <h1 className='font-bold text-xl'>Recent Posts</h1>
        </div>

        <div className='w-full py-3 h-80'>
            {renderBlogs(category)}
        </div>
    </div>
  )
}

export default RecentPosts