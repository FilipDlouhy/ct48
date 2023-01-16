import React from 'react'
import RecentPost from './RecentPost'

function RecentPosts() {
  return (
    <div className='  w-96 h-72 bg-white rounded-lg'>
        
        <div className='w-full h-10 flex justify-center items-center border-b-2	'>
            <h1 className='font-bold text-xl'>Recent Posts</h1>
        </div>

        <div className='w-full py-5 h-80'>
            <RecentPost/>
            <RecentPost/>
            <RecentPost/>
        </div>
    </div>
  )
}

export default RecentPosts