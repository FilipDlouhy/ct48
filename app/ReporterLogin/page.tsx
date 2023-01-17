"use client"
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { blogContext } from '@/models'
import { useRouter } from 'next/navigation'
function page() {
    const router = useRouter()
    const {setReporter} = useContext(blogContext)
    const {setReporterId} = useContext(blogContext)
    const [error,setError] = useState<string>()
    const [email,setEmail] = useState<string>()
    const [password,setPasswrod] = useState<string>()
    useEffect(()=>{
        setError("Login")
    },[])

  return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
            <Link href="/AdministrationLogin"><button className='my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' >Go Back</button></Link>

            <Link href="/ReporterSingIn"><button className='my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Sing in new Reporter</button></Link>
        </div>
    
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>{error}</h1>    

        <form className='LoginForm'>
            <div className='w-60 h-20 mx-auto my-5 flex flex-col justify-around items-center'>
                <label className='text-xl font-semibold'>Reporter Email</label>
                <input onChange={(e)=>{
                        setEmail(e.target.value)
                }} className='w-72 h-7 rounded-lg text-center font-semibold bg-red-400 text-white' type="text"></input>
            </div>
            
            <div className='w-60 h-20 mx-auto my-5 flex flex-col justify-around items-center'>
                <label className='text-xl font-semibold'>Password</label>
                <input onChange={(e)=>{
                        setPasswrod(e.target.value)
                }} className='w-72 h-7 rounded-lg text-center font-semibold bg-red-400 text-white' type="password"></input>
            </div>
            <button onClick={(e)=>{
                e.preventDefault()
                axios.post("/api/loginReporter",{email,password}).then((res)=>{
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
            }} className="w-56 h-10 shadow-md rounded-md text-white font-semibold text-xl cursor-pointer bg-red-400 hover:w-64 duration-200">Login</button>
        </form>

    </div>
  )
}

export default page