"use client"
import { blogContext } from '@/models'
import React, { useContext } from 'react'
import SearchReporter from './SearchReporter'
import SearchBlog from './SearchBlog'

function Search() {
  const {search} = useContext(blogContext)
  const {blogs} = useContext(blogContext)
  return (
    
    <div className='w-64 search rounded-b-xl flex flex-col items-center justify-center  bg-red-400'>
        {
          blogs?.map((blog)=>{
            if(search && blog.blog.title.toLocaleLowerCase().includes(search?.toLocaleLowerCase()))
            {
              return <SearchBlog blog={blog} />   
            }
            else if(search && blog.reporter.name.toLocaleLowerCase().includes(search?.toLocaleLowerCase()))
            {
              return <SearchReporter blog={blog}/>   
            }
          })
        }


    </div>
  )
}

export default Search