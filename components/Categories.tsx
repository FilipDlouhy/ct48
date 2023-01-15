import React from 'react'

function Categories() {
  return (
    <div className=' w-96 h-80 mt-7 mb-6 bg-white rounded-lg'>
        
        <div className='w-full h-10 flex justify-center items-center border-b-2	'>
            <h1 className='font-bold text-xl'>Categories</h1>
        </div>

        <div className='w-full flex flex-col justify-around items-center pb-16 text-lg font-bold  py-5 h-80'>
          <p className='hover:text-xl duration-200 cursor-pointer'>History</p>
          <p className='hover:text-xl duration-200 cursor-pointer'>Web Development</p>
          <p className='hover:text-xl duration-200 cursor-pointer'>BasketBall</p>
          <p className='hover:text-xl duration-200 cursor-pointer'>Fitness</p>
        </div>
    </div>
  )
}

export default Categories