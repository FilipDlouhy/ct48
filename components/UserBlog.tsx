"use client"
import React,{useEffect,useState,useContext} from 'react'
import "../app/globals.css"
import Link from 'next/link'
import { Blog, blogAndReporter, blogContext, Reporter } from '@/models'
import axios from 'axios'
import { useRouter } from 'next/navigation'
interface BlogProps
{
    reporter:Reporter,
    blog:Blog,
   
}
function UserBlog(props:BlogProps) {
    function getWordStr(str:string) {
        return str?.split(/\s+/).slice(0, 15).join(" ");
        }
        const router =useRouter()
        const [markded,setMarkded] = useState<boolean>()
        const {user} = useContext(blogContext)
        const {setMarkedBlog} = useContext(blogContext)
        const {blogs} = useContext(blogContext)
        const {setBlogs} = useContext(blogContext)
        useEffect(()=>{
          console.log(props.blog)
            let mark:boolean = false
            props.blog?.marked?.map((id)=>{
                if(id === user?.userId)
                {
                    mark = true
                }
            })
            setMarkded(mark)
        },[])
        function markUnmarkUserBlog(mark:boolean){
            if(mark){
                let newMarked:blogAndReporter[] |undefined= []
                let arr:string[]= []
                if(props.blog.marked) {
                    props.blog.marked.map((id)=>{
                      if(id !== user?.userId){
                        arr.push(id)
                      }
                    })
                  }
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
                  marked:arr,
                  category:props.blog.category
                }

              
                  blogs?.map((blog)=>{
                    if(blog.blog.blogId !== newVersionBlog.blogId){
                      newMarked?.push(blog)
                    }
                    else
                    {
                      newMarked?.push({blog:newVersionBlog,reporter:props.reporter})
                    }
                  })    

                  axios.post("api/updateBlog",newVersionBlog)
                  newMarked.map((blog)=>{
                    console.log(blog.blog.marked)
                  })

                  setBlogs(newMarked)
                  setMarkded(true)

            }
            else
            {
                let newMarked:blogAndReporter[] |undefined= []
                let arr:string[]= []
                let newVersionBlog:Blog={
                  img:props.blog.img,
                  title: props.blog.title,
                  text: props.blog.text,
                  reporterId: props.blog.reporterId,
                  dateCreatedString: props.blog.dateCreatedString,
                  dateCreated: props.blog.dateCreated,
                  blogId: props.blog.blogId,
                  marked:arr,
                  category:props.blog.category
                }
                if(props.blog.marked) {

                    props.blog.marked.map((id)=>{
                      if(id !== user?.userId){
                        arr.push(id)
                      }

                    })
                  }

                  axios.post("api/updateBlog",newVersionBlog)
                  setMarkded(false)

              
                
                  if(blogs) {
          
                    blogs?.map((blog)=>{
                      if(blog.blog.blogId !== newVersionBlog.blogId){
                        newMarked?.push(blog)
                      }
                      else
                      {
                        newMarked?.push({blog:newVersionBlog,reporter:props.reporter})
                      }
                    })    

                    }


                  newMarked.map((blog)=>{
                    console.log(blog.blog.marked)
                  })
                  setBlogs(newMarked)
            }

        }
  return (
    
    <div  className= {markded ?'blog flex flex-col justify-between items-center p-3 rounded bg-yellow-300' :'blog flex flex-col justify-between items-center p-3 rounded bg-white'}>
        <img  src={props.blog?.img} className='cursor-pointer blogImg  rounded-md'></img>
        <h1 className='font-bold text-2xl'>{props.blog?.title}</h1>
        <div className='h-12  flex'>
            <div className='w-64 flex justify-around items-center'>
                <img onClick={()=>{
                  router.push("UserReporterPage")
                  setMarkedBlog({blog:props.blog,reporter:props.reporter})
                }} src={props.reporter?.img} className='h-12 w-12 cursor-pointer rounded-full'></img>
                <p className=' font-semibold text-sm'>{props.reporter?.name}</p>
            </div>
            <div className='w-40 flex justify-around items-center'>
                <img src='https://res.cloudinary.com/dnhqwtuev/image/upload/v1674147141/blog/drupal-module-calendar_q7mrgn.jpg' className='rounded-full h-12 w-h-12'></img>
                <p className=' font-semibold text-sm'>{props.blog?.dateCreatedString}</p>
            </div>
        </div>
        <div className='blogText py-3'>
            {getWordStr(props.blog?.text)}
        </div>
        <div className="flex w-4/5 justify-between items-center ">
        <Link  href={"/BlogPageUser"} onClick={()=>{
          setMarkedBlog({blog:props.blog,reporter:props.reporter})
        }} className='flex items-center justify-center h-11 cursor-pointer hover:w-52 duration-150 w-48 bg-red-500 font-semibold rounded-xl text-slate-50'>Continue Reading</Link>
      { user&& <button onClick={()=>{markded ? markUnmarkUserBlog(false):markUnmarkUserBlog(true) }} className={markded ? 'h-11 cursor-pointer hover:w-52 duration-150 w-48 bg-white font-semibold rounded-xl text-black':'h-11 cursor-pointer hover:w-52 duration-150 w-48 bg-yellow-300 font-semibold rounded-xl text-white' }>{markded ? "Unmark" : "Mark as Favorite"}</button>}


        </div>

    </div>
  )
}

export default UserBlog
