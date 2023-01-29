"use client"
import { blogAndReporter, blogContext } from '@/models'
import React,{useContext,useEffect} from 'react'
import DisplayUserBlogs from './DisplayUserBlogs'
import FeaturedBlogs from './FeaturedBlogs'
import Navbar from './Navbar'
import RecentPosts from './RecentPosts'
import Search from './Search'
import SmallProfile from './SmallProfile'
interface props{
    blogsAndReporters:blogAndReporter[],
}
function Container(props:props) {
    const {setBlogs} = useContext(blogContext)
    const {blogs} = useContext(blogContext)
    const {setCategory} = useContext(blogContext)
    const {showSearch} = useContext(blogContext)
    const {setShowSearch} = useContext(blogContext)
    useEffect(()=>{
      if(blogs === undefined){
        setBlogs(props.blogsAndReporters)
      }
      setCategory("all")
    },[])  

  return (
    <div onClick={()=>{setShowSearch(false)
    console.log(showSearch)}} className=''>
    <Navbar/>  

    { blogs&& <FeaturedBlogs blogs={blogs}/>}

      <div className='w-full flex items-center flex-col-reverse 2xl:flex-row 2xl:justify-between '>


        { blogs&& <DisplayUserBlogs blogs={blogs} />}

        <div className='my-10 2xl:Stickman'>
            { blogs && <RecentPosts  blogs={blogs} />}
            { blogs && <SmallProfile/>}
        </div>
      </div>

      {showSearch && <Search/>}
    </div>
  )
}

export default Container