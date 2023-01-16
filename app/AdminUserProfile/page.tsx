import React from 'react'
import Link from 'next/link'
import AdminBlogProfile from '@/components/AdminBlogProfile'

function page() {
  return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
            <Link  href="/Administration" className='text-center my-6 w-72 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-80 duration-300 cursor-pointer' > Go to  Back to Admin View</Link>

            <button className='my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Ban</button>

            </div>
        
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>KOKOTUS Profile</h1>

        <div className='h-16 flex w-full items-center justify-center'> 
            <p className='mx-12 text-xl text-white font-semibold'>Blogs Posted:</p>
            <p className='mx-12 text-xl text-white font-semibold'>Reporting Since:</p>
        </div>

        <div className='flex flex-wrap items-center justify-center'>
            <AdminBlogProfile/>
            <AdminBlogProfile/>
            <AdminBlogProfile/>
        </div>
    
    </div>
  )
}

export default page