import { Blog, Reporter } from '@/models'
import React from 'react'
import "../app/globals.css"
import FeaturedBlog from './FeaturedBlog'

interface props{
  userBlogs:Blog[],
  reporters:Reporter[]
}

function FeaturedBlogs(props:props) {
  return (
    <div className='h-64 featuredBlocks  flex items-center overflow-x-hidden'>
        
      {

          props.userBlogs?.map((blog)=>{
            return <FeaturedBlog blog={blog} reporters={props.reporters}/>
            
          })

      }
    </div>
  )
}

export default FeaturedBlogs