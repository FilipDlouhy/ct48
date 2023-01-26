import React from 'react'

function Search() {
  return (
    
    <div className='w-64 search rounded-b-xl flex justify-center  bg-red-400'>
        
        <div className='w-11/12 h-12 flex hover:bg-yellow-200 cursor-pointer duration-300 bg-white items-center my-3 rounded-sm justify-around'>
            <div>
                <p className='text-sm font-semibold'>Name: asdasdsad</p>
                <p className='text-sm font-semibold'>Type: Blog</p>
            </div>
            <img className='h-11 w-11 rounded-full'></img>
        </div>

    </div>
  )
}

export default Search