"use client"
import { blogAndReporter, blogContext } from '@/models'
import Link from 'next/link';
import React,{useContext} from 'react'
interface props{
    blog:blogAndReporter
}

function UserReporterPageRightBlog(props:props) {
    function getWordStr(str:string) {
        return str?.split(/\s+/).slice(0, 10).join(" ");
        }
        const {setMarkedBlog} = useContext(blogContext)
  return (
    <Link href={"/BlogPageUser"} onClick={()=>{setMarkedBlog(props.blog)}} className='w-80 h-56 flex flex-col justify-between items-center  rounded-lg m-4 cursor-pointer hover:bg-red-400 duration-200 hover:text-white bg-white '>
        <img src={props.blog.blog.img} className='w-full rounded-t-lg  h-1/2'></img>
                
        <div className='h-1/6 w-full flex items-center font-semibold justify-around'>
            <p>Title: {props.blog.blog.title}</p>

            <p>Released: {props.blog.blog.dateCreatedString}</p>  
        </div>

        <p className='w-4/5 h-1/4 text-xs font-medium'>
           {getWordStr(props.blog.blog.text)}
        </p>

    </Link>
  )
}

export default UserReporterPageRightBlog