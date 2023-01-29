import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className=''>
        <h1 className='mt-9 text-2xl text-center text-white font-bold'>Choose between login as a Admin or as a Reporter</h1>

        <div className='w-full h-full flex  justify-between  flex-col xl:flex-row my-10'>

            <Link href={"/AdminLogin"} className='  my-5 xl:my-0 adminChoose rounded-lg'>
                <h1 className='text-5xl font-bold text-red-500'>Administrator</h1>
            </Link>



            <Link href={"/ReporterLogin"} className=' my-5 xl:my-0 reporterChoose rounded-lg'>
                <h1 className='text-5xl font-bold text-red-600'>Reporter</h1>
            </Link>   
        </div>


    </div>
  )
}

export default page