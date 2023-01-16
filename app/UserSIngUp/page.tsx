"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { User } from '@/models'
import axios from 'axios'
import uuid from 'react-uuid'
function page() {
    const [name,setName] = useState<string>()
    const [email,setEmail] = useState<string>()
    const [password,setPassword] = useState<string>()
  return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
             <Link href="/" className= ' text-center my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Go to Blogs</Link>

             <Link  href="/UserLogin" className=' text-center  my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Login</Link>
        </div>
    
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>Sing Up</h1>    

        <form className='LoginForm'>
            <div className='w-60 h-16 mx-auto my-5 flex flex-col justify-around items-center'>
                <label className='text-xl font-semibold'>Email</label>
                <input onChange={(e)=>{
                    setEmail(e.target.value)
                }} className='w-72 h-7 rounded-lg text-center font-semibold bg-red-400 text-white' type="email"></input>
            </div>

            <div className='w-60 h-16 mx-auto my-5 flex flex-col justify-around items-center'>
                <label className='text-xl font-semibold'>Name</label>
                <input onChange={(e)=>{
                   setName (e.target.value)
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
                if(name && password&&email){
                    let userId:string = uuid()
                    let newUser:User ={
                        name:name,password:password,email:email,userId:userId}

                    axios.post("/api/createUser",newUser)
                }

            }} className="w-56 h-10 shadow-md rounded-md text-white font-semibold text-xl cursor-pointer bg-red-400 hover:w-64 duration-200">Sing up</button>
        </form>

    </div>
  )
}

export default page