"use client"
import React, { useEffect,useState ,useContext} from 'react'
import Link from 'next/link'
import { blogContext } from '@/models'
import { Blog } from '@/models'
import axios from 'axios'
import { useRouter } from 'next/navigation'
function page() {
    const [img,setImg] = useState<string | undefined>()
    const [text,setText] = useState<string | undefined>()
    const [title,setTitle] = useState<string | undefined>()
    const router = useRouter()
    const {updatedBlog} = useContext(blogContext)
    useEffect(()=>{
      setImg(updatedBlog?.img)
      setText(updatedBlog?.text)
      setTitle(updatedBlog?.title)
    },[])
    return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
        <Link href={"/ReporterView"} className='flex justify-center items-center my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Go to your Blogs</Link>

             <button onClick={()=>{
              if(img&& title&& text&& updatedBlog?.reporterId&& updatedBlog.dateCreated && updatedBlog.dateCreatedString&& updatedBlog.blogId)
              {
                let newVersionBlog:Blog={
                  img: img,
                  title: title,
                  text: text,
                  reporterId: updatedBlog.reporterId,
                  dateCreatedString: updatedBlog.dateCreatedString,
                  dateCreated: updatedBlog.dateCreated,
                  blogId: updatedBlog.blogId,
                  marked:updatedBlog.marked
                }
                axios.post("api/updateBlog",newVersionBlog).then(()=>{
                router.push("/ReporterView")
                })
              }

             }} className='my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Update Blog</button>
        </div>
    
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>Blog View</h1>


        <div className='BlogPageReporter flex flex-col items-center p-5'>
            <input placeholder='Url for Img'  className=" w-64 rounded-md  bg-red-400 text-center text-white font-semibold mb-4 cursor-pointer" onChange={(e)=>{
                setImg(e.target.value)
            }}  type="text"></input>    
              <img src={img} className='h-2/5 w-11/12'></img>
            <textarea onChange={(e)=>{
              setTitle(e.target.value)
            }} value={title} className='w-1/2 text-center h-9 resize-none my-5 text-2xl font-bold'></textarea>
            <p className='text-lg font-bold'>{updatedBlog?.dateCreatedString}</p>            
            <textarea  onChange={(e)=>{
              setText(e.target.value)
            }} value={text} className='text-center w-full blogTextarea '></textarea>
        </div>
    </div>
  )
}

export default page