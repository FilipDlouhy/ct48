import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>
        <div className='w-full h-11 mt-8 flex items-center justify-between '>
             <Link href="/" className='text-center my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Go Back</Link>

             <Link href="/UserSIngUp" className='text-center my-6 w-52 h-8 text-white bg-red-400 text-lg font-semibold    rounded-lg hover:w-64 duration-300 cursor-pointer' > Sing in new User</Link>
        </div>
    
        <h1 className='text-center mx-auto my-8 text-2xl text-emerald-50 font-bold'>Login</h1>    

        <form className='LoginForm'>
  

            <div className='w-60 h-20 mx-auto my-5 flex flex-col justify-around items-center'>
                <label className='text-xl font-semibold'>Name</label>
                <input className='w-72 h-7 rounded-lg text-center font-semibold bg-red-400 text-white' type="text"></input>
            </div>

            <div className='w-60 h-20 mx-auto my-5 flex flex-col justify-around items-center'>
                <label className='text-xl font-semibold'>Password</label>
                <input className='w-72 h-7 rounded-lg text-center font-semibold bg-red-400 text-white' type="text"></input>
            </div>
            <button className="w-56 h-10 shadow-md rounded-md text-white font-semibold text-xl cursor-pointer bg-red-400 hover:w-64 duration-200">Login</button>
        </form>

    </div>
  )
}

export default page