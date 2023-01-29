import React from 'react'
import Link from 'next/link'
import { Blog, Reporter } from '@/models'
import axios from 'axios'
import DeleteBlogAdmin from '@/components/DeleteBlogAdmin'

interface props{
  params:{
      blogId:string
  }
}




const  getReporters = async () =>{
  const res = await fetch(`http://localhost:3000/api/getAllReporters`)
  const reporter:Reporter[] = await res.json()
  return reporter 
}

const getBlog = async (blogId:string) => {
  const res = await fetch(`http://localhost:3000/api/getBlog/${blogId}`)
  const blog:Blog = await res.json()
  return blog 

}





async function page(props:props) {
 
  const blog:Blog = await  getBlog(props.params.blogId)
  const reporters:Reporter[] =  await getReporters()
  let selectedReporter: any
  reporters.map((reporter) => {
    if (reporter.userId === blog.reporterId) {
      selectedReporter = reporter;
    }
  });
  return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
             <Link href={`/AdminReporterProfile/${selectedReporter.userId}`} className='text-center my-6 w-40 flex items justify-center  sm:w-52 h-8 text-sm text-white bg-red-400 sm:text-lg font-semibold   hover:w-44 rounded-lg sm:hover:w-64 duration-300 cursor-pointer' > Go to  Profile</Link>

             <DeleteBlogAdmin blogId={props.params.blogId}/>
        </div>
    
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>Blog from {selectedReporter.name}</h1>


        <div className='BlogPageReporter flex flex-col items-center p-5'>
      
              <img src={blog.img} className='h-2/5 w-11/12'></img>
            <h1 className='my-5 text-2xl font-bold'>{blog.title}</h1>
            <p className='text-lg font-bold'>{blog.dateCreatedString}</p>            
            <p  className='text-center w-full blogTextarea '>{blog.text}</p>
        </div>
    </div>
  

  )
}

export default page