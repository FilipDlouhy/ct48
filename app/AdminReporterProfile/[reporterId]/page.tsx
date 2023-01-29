import React from 'react'
import Link from 'next/link'
import AdminBlogProfile from '@/components/AdminBlogProfile'
import { Blog, Reporter } from '@/models'
import axios from 'axios'
import { report } from 'process'
import BanUnbanReporterBTN from '@/components/BanUnbanReporterBTN'


interface props{
  params:{
      reporterId:string
  }
}

const  getReporter = async (reporterId:string) =>{
  const res = await fetch(`http://localhost:3000/api/getReporter/${reporterId}`)
  const reporter:Reporter = await res.json()
  return reporter 
}

const getReporterBlogs = async (reporterId:string) => {
  let blogs:Blog[]

    const res = await axios.post(`http://localhost:3000/api/getBlogsReporter`,{reporterId:reporterId})
    blogs = res.data;
    return blogs;

}

async function page(props:props) {
  const reporter:Reporter = await getReporter(props.params.reporterId)
  const reporterBlogs:Blog[] = await getReporterBlogs(props.params.reporterId)
  return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
            <Link  href="/AdminView" className='text-center my-6 w-40 flex items justify-center  sm:w-52 h-8 text-sm text-white bg-red-400 sm:text-lg font-semibold   hover:w-44 rounded-lg sm:hover:w-64 duration-300 cursor-pointer' > Go to  Admin View</Link>
          { reporter&& < BanUnbanReporterBTN reporter={reporter}/>}
        </div>
        
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>{reporter?.name} Profile</h1>

        <div className='h-16 flex w-full items-center justify-center'> 
            <p className='mx-12 text-base sm:text-xl text-white font-semibold'>Blogs Posted: {reporterBlogs.length}</p>
            <p className='mx-12 text-base sm:text-xl text-white font-semibold'>Reporting Since: {reporter?.dateCreatedString}</p>
        </div>

        <div className='flex flex-wrap items-center justify-center'>
            {reporterBlogs &&
              reporterBlogs?.map((blog:Blog)=>{
                return <AdminBlogProfile blog={blog} reporter={reporter} />
              })
            }
        </div>
    
    </div>
  )
}

export default page