"use client"
import React, { useContext } from 'react'
import "../app/globals.css"
import Link from 'next/link';
import axios from 'axios';
import { blogContext } from '@/models';
function Navbar() {
  const {userId} = useContext(blogContext) 
  const {setCategory} = useContext(blogContext) 
  const {setUser} = useContext(blogContext) 
  const {setUserId} = useContext(blogContext) 
  
  return (
    <div className='w-full h-20 px-2 border-b-2 text-white font-bold justify-between flex items-center'>
        <h1 onClick={()=>{setCategory("all")}}  className='text-3xl hover:text-red-200 duration-300 cursor-pointer '>ČT 48</h1>
        <input className='w-64 h-7  hover:shadow-lg text-black duration-300 text-center' type="text"></input>
        <div className=' w-7/12 text-lg flex justify-between'>
            <p onClick={()=>{setCategory("History")}} className='hover:text-xl font-extrabold   cursor-pointer duration-300'>History</p>
            <p onClick={()=>{setCategory("Web Development")}} className='hover:text-xl font-extrabold   cursor-pointer duration-300'>Web Development</p>
            <p onClick={()=>{setCategory("BasketBall")}} className='hover:text-xl font-extrabold   cursor-pointer duration-300'>BasketBall</p>
            <p onClick={()=>{setCategory("Fitness")}} className='hover:text-xl font-extrabold   cursor-pointer duration-300'>Fitness</p>
            {userId ? <Link href="/UserLogin " onClick={()=>{
              setUserId(undefined)
              setUser(undefined)
              }} className=' text-center w-36 rounded-md hover:bg-red-600 font-extrabold  bg-red-300  cursor-pointer duration-300'>Log out</Link> :<Link  href="/UserLogin" className=' text-center w-36 rounded-md hover:bg-red-600 font-extrabold  bg-red-300  cursor-pointer duration-300'>Login</Link>}
        </div>
    </div>
  )
}

export default Navbar