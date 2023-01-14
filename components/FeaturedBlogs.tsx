import React from 'react'
import "../app/globals.css"
import FeaturedBlog from './FeaturedBlog'
function FeaturedBlogs() {
  return (
    <div className='h-64  featuredBlocks  flex items-center overflow-x-hidden'>
        
        <FeaturedBlog/>
        <FeaturedBlog/>
        <FeaturedBlog/>
        <FeaturedBlog/>
        <FeaturedBlog/>
    </div>
  )
}

export default FeaturedBlogs