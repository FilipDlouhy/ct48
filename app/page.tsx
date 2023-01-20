import FeaturedBlogs from '@/components/FeaturedBlogs'
import UserBlog from '@/components/UserBlog'
import RecentPosts from '@/components/RecentPosts'
import SmallProfile from '@/components/SmallProfile'
import Navbar from '@/components/Navbar'

import { Blog, Reporter } from '@/models'
import DisplayUserBlogs from '@/components/DisplayUserBlogs'
const getBlogs = async ()=> {
  const res = await fetch("http://localhost:3000/api/getAllBlogs")
  const blogs:Blog[] = await res.json()
  return blogs 
 }
 const getReporters = async ()=> {
  const res = await fetch("http://localhost:3000/api/getAllReporters")
  const reporters:Reporter[] = await res.json()
  return reporters 
 }


export default async function Home() {
  const userBlogs = await getBlogs()
  const reporters = await getReporters()
  userBlogs.sort((a,b)=>{
    return a.dateCreated - b.dateCreated
  })

  return (
    <div className=''>
        <Navbar/>  

        <FeaturedBlogs userBlogs={userBlogs} reporters={reporters}/>
    <div className='w-full flex justify-between'>


      <DisplayUserBlogs userBlogs={userBlogs} reporters={reporters} />

      <div className='Stickman'>
        <RecentPosts/>
        <SmallProfile/>
      </div>
    </div>
    </div>
  )
}
