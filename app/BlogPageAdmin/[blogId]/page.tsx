import React from 'react'
import Link from 'next/link'
import { Blog, Reporter } from '@/models'
import DeleteBlogAdmin from '@/components/DeleteBlogAdmin'


interface props{
  params:{
      blogId:string
  }
}


const fetchBlog = async (blogId:string)=>{
  const res = await fetch(`http://localhost:3000/api/getBlog/${blogId}`)
  const blog:Blog = await res.json()
  return blog 
}

const fetchReporter = async (reporterId:string)=>{
const res = await fetch(`http://localhost:3000/api/getReporter/${reporterId}`)
const reporter:Reporter = await res.json()
return reporter 
}
 async function page(props:props) {

  const blog:Blog =  await fetchBlog(props.params.blogId)
  const reporter:Reporter = await fetchReporter(blog.reporterId)

  return (
    

    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
         <Link  href="/AdminView" className='text-center my-6 w-40 flex items justify-center  sm:w-52 h-8 text-sm text-white bg-red-400 sm:text-lg font-semibold   hover:w-44 rounded-lg sm:hover:w-64 duration-300 cursor-pointer' > Go to  Admin View</Link>

          <DeleteBlogAdmin blogId={blog.blogId}/>
        </div>
    
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>Blog View</h1>


        <div className='BlogPageReporter flex flex-col items-center p-5'>
      
              <img src={blog.img} className='h-2/5 w-11/12'></img>
            <h1 className='my-5 text-2xl font-bold'>{blog.title}</h1>
            <p className='text-lg font-bold'>{blog.dateCreatedString}</p>            
            <textarea  className='text-center w-full blogTextarea '>{blog.text}</textarea>
            <Link  href={`/AdminReporterProfile/${reporter.userId}`} className='h-20 w-96 bg-red-200 text-white font-semibold rounded-xl cursor-pointer hover:bg-white hover:text-black duration-300  flex justify-around items-center'>
                  <p>Wrote by:{reporter.name}</p>
                  <img src={reporter.img} className='w-14 h-14 rounded-full'></img>
              </Link>
        </div>
    </div>
  

  )
}

export default page