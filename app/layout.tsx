"use client"
import { Blog, BlogContext, User ,Reporter} from '@/models'
import { useContext, useState,createContext } from 'react'
import './globals.css'
import { blogContext } from '@/models'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  const [userId,setUserId] = useState<string|undefined>()
  const [reporterId,setReporterId] = useState<string|undefined>()
  const [user,setUser] = useState<User|undefined>()
  const [reporter,setReporter] = useState<Reporter|undefined>()
  const [reporterBlogs,setReporterBlogs] = useState<Blog[]|undefined>()
  const [updatedBlog,setUpdatedBlog] = useState<Blog|undefined>()
  const [markedBlog,setMarkedBlog] = useState<Blog|undefined>()
  return (
    <blogContext.Provider value={{markedBlog,setMarkedBlog,userId,setUserId,user,setUser,reporterId,setReporterId,reporter,setReporter,reporterBlogs,setReporterBlogs,updatedBlog,setUpdatedBlog}}>
      <html lang="en">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
        <body className='globalBackground'>
          {children}
        </body>
      </html>
    </blogContext.Provider> 
  )
}
