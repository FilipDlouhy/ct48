import React from 'react'

function page() {
  return (
    <div>
      <div>
        <button className=' mt-2  w-52 rounded-lg shadow-md font-bold hover:w-64 duration-200 cursor-pointer text-center bg-white h-7 '>Go Back</button>
        <h1 className='text-center h-12 flex justify-center items-center text-4xl text-white font-bold'>Post a new Blog</h1>
      </div>


      <form className='PostBlogForm'>
        <div className='w-60 h-20 mx-auto my-5 flex flex-col justify-around items-center'>
          <label className='text-xl font-semibold'>Name of the Blog</label>
          <input className='w-72 h-7 rounded-lg text-center font-semibold bg-red-400 text-white' type="text"></input>
        </div>
        <div className='w-60 h-20 mx-auto my-5 flex flex-col justify-around items-center'>
          <label className='text-xl font-semibold'>Url Photo to the Blog</label>
          <input className='w-72 h-7 rounded-lg text-center font-semibold bg-red-400 text-white' type="text"></input>
        </div>
        <div className='w-60 h-48 mx-auto my-5 flex flex-col justify-around items-center'>
          <label className='text-xl font-semibold'>Text</label>
          <textarea className='w-80 h-40 resize-none rounded-lg text-center font-semibold bg-red-400 text-white' ></textarea>
        </div>
        <button className="w-56 h-10 shadow-md rounded-md text-white font-semibold text-xl cursor-pointer bg-red-400 hover:w-64 duration-200">Update Blog</button>
      </form>

    </div>
  )
}

export default page