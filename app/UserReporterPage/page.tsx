import Navbar from '@/components/Navbar'
import UserProfilePageLeft from '@/components/UserReporterPageLeft'
import UserReporterPageRight from '@/components/UserReporterPageRight'
import Link from 'next/link'
import React from 'react'

 async function page() {
  return (
    <div>
         <Navbar/>

        <div className='mt-2 mb-4 w-full flex justify-start items-center'>
            <Link href ={"/"} className='flex justify-center items-center my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer'>Go Back to Blogs</Link>
         </div>


        <div className='w-full h-full flex-col md:flex-row flex justify-between items-center md:items-start'>

            <UserProfilePageLeft/>
            <UserReporterPageRight/>

        </div>


    </div>
  )
}

export default page