import FeaturedBlogs from '@/components/FeaturedBlogs'
import RecentPosts from '@/components/RecentPosts'
import SmallProfile from '@/components/SmallProfile'
import Navbar from '@/components/Navbar'

import { Blog, blogAndReporter, Reporter } from '@/models'
import DisplayUserBlogs from '@/components/DisplayUserBlogs'
import Container from '@/components/Container'
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
  let arr:blogAndReporter[] = []
  const userBlogs = await getBlogs()
  const reporters = await getReporters()
  userBlogs.sort((a,b)=>{
    return a.dateCreated - b.dateCreated
  }).map((blog)=>{
      reporters.map((reporter)=>{
        if(reporter.userId === blog.reporterId)
        {
          arr.push({blog,reporter})
        }
    })
  })
  return (
   <Container blogsAndReporters={arr}/>
  )
}
