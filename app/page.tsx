import './globals.css'
import FeaturedBlogs from '@/components/FeaturedBlogs'
import Blog from '@/components/Blog'
import RecentPosts from '@/components/RecentPosts'

export default function Home() {
  return (
    <div className=''>

    <FeaturedBlogs/>
    <div className='w-full flex justify-between'>
      <Blog/>
      <RecentPosts/>
    </div>
    </div>
  )
}
