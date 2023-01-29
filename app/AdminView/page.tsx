import React from 'react'
import AdminBlog from '@/components/AdminBlog'
import Link from 'next/link'
import { Blog, blogAndReporter, Reporter } from '@/models'
import AdminReporter from '@/components/AdminReporter'


const getBlogs = async ()=> {
  const res = await fetch("http://localhost:3000/api/getAllBlogs",{next:{revalidate:10}})
  const blogs:Blog[] = await res.json()
  return blogs 
 }
 const getReporters = async ()=> {
  const res = await fetch("http://localhost:3000/api/getAllReporters",{next:{revalidate:10}})
  const reporters:Reporter[] = await res.json()
  return reporters 
 }

 async function page() {

  const blogs = await getBlogs()
  const reporters = await getReporters()

  function renderBlogs() {
    return (
      <>
        {blogs.map((blog) => {
          return reporters.map((reporter) => {
            if (blog.reporterId === reporter.userId) {
              let blogReporter:blogAndReporter = {blog:blog,reporter:reporter}
              return <AdminBlog blog={blogReporter} />;
            }
          });
        })}
      </>
    );
  }

  function renderReporters ()
  {
    return (
      <>
        {reporters.map((reporter) => {
            let reporterBlogs:Blog[] = []
            blogs.map((blog)=>{
              if(blog.reporterId === reporter.userId)
                reporterBlogs.push(blog)
            })   
            return <AdminReporter reporter={reporter} blogs={reporterBlogs}/>
        })}
      </>
    );
  }
    return ( 
    <div>
     <Link href="/AdministrationLogin"><button className='w-44 h-8 mt-4 font-semibold text-white text-lg rounded-md hover:bg-orange-200 duration-200 hover:text-xl bg-red-300'>Log out</button></Link> 
      <h1 className='text-center h-20 flex justify-center items-center text-4xl text-white font-bold'>ČT 48 Administration</h1>

      <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='my-6 text-3xl text-red-50 font-semibold'>Reporters</h1>
        <div className='w-full flex items-center justify-center flex-wrap'>
            {renderReporters()}
        </div>
      </div>


      <div className=' mt-10'>
        <h1  className='text-center my-6 text-3xl text-red-50 font-semibold'>Blogs Posted</h1>
        <div className='flex justify-center items-center flex-wrap '>
          {renderBlogs()}
        </div>
      </div>
    </div>
  )
}

export default page