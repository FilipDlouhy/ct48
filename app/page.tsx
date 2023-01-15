import FeaturedBlogs from '@/components/FeaturedBlogs'
import Blog from '@/components/Blog'
import RecentPosts from '@/components/RecentPosts'
import Categories from '@/components/Categories'
import Navbar from '@/components/Navbar'
export default function Home() {
  return (
    <div className=''>
            <Navbar/>  

    <FeaturedBlogs/>
    <div className='w-full flex justify-between'>
      <div>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>

      </div>

      <div className='Stickman'>
        <RecentPosts/>
        <Categories/>
      </div>
    </div>
    </div>
  )
}
