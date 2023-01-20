"use client"
import React,{useEffect,useState,useContext} from 'react'
import "../app/globals.css"
import Link from 'next/link'
import { Blog, blogContext, Reporter } from '@/models'
import axios from 'axios'
import { useRouter } from 'next/navigation'
interface BlogProps
{
    reporter:Reporter|undefined,
    blog:Blog,
   
}
function UserBlog(props:BlogProps) {
    function getWordStr(str:string) {
        return str.split(/\s+/).slice(0, 15).join(" ");
        }
        const router = useRouter()
        const [markded,setMarkded] = useState<boolean>()
        const {user} = useContext(blogContext)
        const {setMarkedBlog} = useContext(blogContext)
        useEffect(()=>{
            let mark:boolean = false
            props.blog.marked?.map((id)=>{
                if(id === user?.userId)
                {
                    mark = true
                }
            })
            setMarkded(mark)
        },[])
        function markUnmarkUserBlog(mark:boolean){
            if(mark){
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
            
                  axios.post("api/updateBlog",newVersionBlog).then(()=>{
                    setMarkded(true)
                  })
                
            }
            else
            {
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
                  

                  axios.post("api/updateBlog",newVersionBlog).then(()=>{
                    setMarkded(false)
                  })
                 
            }

        }
  return (
    
    <div  className= {markded ?'blog flex flex-col justify-between items-center p-3 rounded bg-yellow-300' :'blog flex flex-col justify-between items-center p-3 rounded bg-white'}>
        <img  src={props.blog.img} className=' blogImg  rounded-md'></img>
        <h1 className='font-bold text-2xl'>{props.blog.title}</h1>
        <div className='h-12  flex'>
            <div className='w-64 flex justify-around items-center'>
                <img src={props.reporter?.img} className='h-12 w-12 rounded-full'></img>
                <p className=' font-semibold text-sm'>{props.reporter?.name}</p>
            </div>
            <div className='w-40 flex justify-around items-center'>
                <img src='https://res.cloudinary.com/dnhqwtuev/image/upload/v1674147141/blog/drupal-module-calendar_q7mrgn.jpg' className='rounded-full h-12 w-h-12'></img>
                <p className=' font-semibold text-sm'>{props.blog.dateCreatedString}</p>
            </div>
        </div>
        <div className='blogText py-3'>
            {getWordStr(props.blog.text)}
        </div>
        <div className="flex w-4/5 justify-between items-center ">
        <button  onClick={()=>{
          setMarkedBlog(props.blog)
          router.push("/BlogPageUser")
        }} className='flex items-center justify-center h-11 cursor-pointer hover:w-52 duration-150 w-48 bg-red-500 font-semibold rounded-xl text-slate-50'>Continue Reading</button>
      { user&& <button onClick={()=>{markded ? markUnmarkUserBlog(false):markUnmarkUserBlog(true) }} className={markded ? 'h-11 cursor-pointer hover:w-52 duration-150 w-48 bg-white font-semibold rounded-xl text-black':'h-11 cursor-pointer hover:w-52 duration-150 w-48 bg-yellow-300 font-semibold rounded-xl text-white' }>{markded ? "Unmark" : "Mark as Favorite"}</button>}


        </div>

    </div>
  )
}

export default UserBlog
