"use client"
import { useContext, useEffect, useState } from 'react'
import React from 'react'
import Link from 'next/link'
import { blogContext, Reporter, User } from '@/models'
import uuid from 'react-uuid'
import axios from 'axios'
import { useRouter } from 'next/navigation'
function page() {
  const createReporter = (name:any,email:any,password:any,img:any) =>{
    let userId:string = uuid()
    let date = new Date()
    let createdAtNumber = date.getTime()
    var m = new Date();
    var dateString =
        m.getUTCFullYear() + "/" +
        ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
        ("0" + m.getUTCDate()).slice(-2)
    let newReporter:Reporter = 
    {
      name:name,
      userId:userId,
      password:password,
      email:email,
      img:img,
      dateCreatedString: dateString,
      dateCreated: createdAtNumber
    }
    axios.post("/api/createReporter",newReporter).then((res)=>{
      if(res.data.message)
      {
        setError(res.data.message)
      }
      else
      {
        setReporter(res.data)
        setReporterId(res.data.userId)
        router.push("/ReporterView")
      }

    })
  }
  const {setReporter} = useContext(blogContext)
  const {setReporterBlogs} = useContext(blogContext)
  const {setReporterId} = useContext(blogContext)
  const router = useRouter()
  const [name,setName] = useState<string|undefined>()
  const [email,setEmail] = useState<string>()
  const [password,setPassword] = useState<string>()
  const [img,setImg] = useState<string>()
  const [error,setError] = useState<string>("Sing Up Reporter")
  useEffect(()=>{
    setError("Sing Up Reporter")
    setReporter(undefined)
    setReporterBlogs(undefined)
    setReporterId(undefined)
  },[])
  return (
    <div className='h-full w-full'>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
        <Link href="/AdministrationLogin"><button className='my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' >Go Back</button></Link>

        <Link href="/ReporterLogin"><button className='my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' >Login as a reporter</button></Link>
        </div>
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>{error}</h1>    

        <form className='SingUpForm'>
            <div className='w-60 h-16 mx-auto my-5 flex flex-col justify-around items-center'>
                <label className='text-xl font-semibold'>Reporter Email</label>
                <input onChange={(e)=>{
                    setEmail(e.target.value)
                }} className='w-72 h-7 rounded-lg text-center font-semibold bg-red-400 text-white' type="Email"></input>
            </div>

            <div className='w-60 h-16 mx-auto my-5 flex flex-col justify-around items-center'>
                <label className='text-xl font-semibold'>Reporter Name</label>
                <input onChange={(e)=>{
                   setName(e.target.value)
                }} className='w-72 h-7 rounded-lg text-center font-semibold bg-red-400 text-white' type="text"></input>
            </div>
            
            <div className='w-60 h-16 mx-auto my-5 flex flex-col justify-around items-center'>
                <label className='text-xl font-semibold'>Reporter Photo Url</label>
                <input onChange={(e)=>{
                   setImg(e.target.value)
                }} className='w-72 h-7 rounded-lg text-center font-semibold bg-red-400 text-white' type="text"></input>
            </div>
            
            <div className='w-60 h-16 mx-auto my-5 flex flex-col justify-around items-center'>
                <label className='text-xl font-semibold'>Password</label>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} className='w-72 h-7 rounded-lg text-center font-semibold bg-red-400 text-white' type="password"></input>
            </div>
            <button onClick={(e)=>{
              e.preventDefault()
              createReporter(name,email,password,img)
            }} className="w-56 h-10 shadow-md rounded-md text-white font-semibold text-xl cursor-pointer bg-red-400 hover:w-64 duration-200">Sing in</button>
        </form>

    </div>
  )
}

export default page