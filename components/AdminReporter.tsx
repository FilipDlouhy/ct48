import React from 'react'
import Link from 'next/link'
import { Blog, Reporter } from '@/models'
interface props
{
  blogs:Blog[],
  reporter:Reporter
}

function AdminReporter(props:props) {
  return (
    <div className={props.reporter.banned ?'w-72 m-3  rounded-lg h-80 flex flex-col items-center justify-around bg-red-300':'w-72 m-3  rounded-lg h-80 flex flex-col items-center justify-around bg-white' }>
        <img src={props.reporter.img} className='w-36 rounded-full  h-36'></img>
        <h1 className='font-semibold text-lg'>{props.reporter.name}</h1>
        <p className='font-semibold'>{props.blogs.length}</p>
        <p className='font-semibold'>Member {props.reporter.dateCreatedString}</p>
        <Link href={`/AdminReporterProfile/${props.reporter.userId}`} className='flex items-center justify-center w-40 h-7 bg-red-400 text-white font-bold rounded-lg cursor-pointer'> See Blogs</Link>
    </div>
  )
}

export default AdminReporter