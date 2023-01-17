"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function page() {

    return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
             <Link href={"/ReporterView"} className='flex justify-center items-center my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Go to your Blogs</Link>


        </div>
    
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>Blog View</h1>


        <div className='BlogPageReporter flex flex-col items-center p-5'>
    
            <img className='h-2/5 w-11/12'></img>
            <h1 className='my-5 text-2xl font-bold'>GIGACHADUS AUUGSTUS</h1>
            <p className='text-lg font-bold'>Oct 4889787</p>            
            <textarea  className='text-center w-full blogTextarea '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus impedit deleniti recusandae hic tempora! Maxime omnis praesentium quibusdam nemo! Fugiat molestiae architecto dolorum quas exercitationem ex. Tempora, eveniet accusantium!lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, repudiandae. Corrupti totam, possimus corporis pariatur maxime quaerat unde aliquam cum alias voluptatem soluta neque eum, veniam blanditiis consequuntur quae. Incidunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, neque illo. Rerum, dignissimos tenetur, rem quia expedita eos voluptatum magnam accusamus mollitia tempore excepturi praesentium atque minima quos quo cupiditate? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit molestias odit minima id, eum cumque quaerat ad reprehenderit eos deserunt aut. Libero quae non qui praesentium ut a rerum nisi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia magnam dolor debitis, commodi fugit exercitationem quae quis rerum ut tenetur harum. Dicta nihil, ab laudantium cumque error saepe in magni? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores exercitationem illum laboriosam laudantium aliquam repudiandae, ipsa sed facere officiis nemo tenetur ipsam. Corporis rerum quaerat unde culpa nemo, ad minimaolestias odit minima id, eum cumque quaerat ad reprehenderit eos deserunt aut. Libero quae non qui praesentium ut a rerum nisi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia magnam dolor debitis, commodi fugit exercitationem quae quis rerum ut tenetur harum. Dicta nihil, ab laudantium cumque error saepe in magni? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores exercitationem illum laboriosam laudantium aliquam repudiandae, ipsa sed facere officiis nemo tenetur ipsam. Corporis rerum quaerat unde culpa nemo, ad minimolestias odit minima id, eum cumque quaerat ad reprehenderit eos deserunt aut. Libero quae non qui praesentium ut a rerum nisi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia magnam dolor debitis, commodi fugit exercitationem quae quis rerum ut tenetur harum. Dicta nihil, ab laudantium cumque error saepe in magni? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores exercitationem illum laboriosam laudantium aliquam repudiandae, ipsa sed facere officiis nemo tenetur ipsam. Corporis rerum quaerat unde culpa nemo, ad minim?</textarea>
        </div>
    </div>
  )
}

export default page