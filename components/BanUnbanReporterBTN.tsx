"use client"
import { Reporter } from '@/models'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


interface props {
    reporter :Reporter
}

function BanUnbanReporterBTN(props:props) {
    const [banned,setBanned] = useState<boolean>()
    useEffect(()=>{
        setBanned(props.reporter.banned)
    },[])
  return (
   
    <button onClick={()=>{
            if(banned)
            {
                let reporter = {banned:false,userId:props.reporter.userId}
                axios.post("http://localhost:3000/api/banUnbanReporter",reporter)
                setBanned(false)
            }
            else
            {
                let reporter = {banned:true,userId:props.reporter.userId}
                axios.post("http://localhost:3000/api/banUnbanReporter",reporter)
                setBanned(true)
            }

        
    }} className='my-6 w-40 sm:w-52 h-8 text-white bg-red-400 text-sm sm:text-lg font-semibold  hover:w-44  rounded-lg sm:hover:w-64 duration-300 cursor-pointer' > {banned ? "Unban" :"Ban" }</button>
  )
}

export default BanUnbanReporterBTN