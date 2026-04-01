import React from 'react'

export const Info = () => {
  return (
    <div className='bg-[#4F39F6] max-w-[90%] lg:max-w-full lg:rounded-none rounded-2xl mx-auto'>
    <div className='lg:max-w-[65%] mx-auto text-center lg:flex justify-between space-y-10 py-8 lg:py-16'>
        <div>
            <h1 className='text-white font-extrabold text-6xl pb-3.5'>50K+</h1>
            <p className='text-white text-2xl'>Active Users</p>
        </div>
        <div>
            <h1 className='text-white font-extrabold text-6xl pb-3.5'>200k+</h1>
            <p className='text-white text-2xl'>Premium Tools</p>
        </div>
        <div>
            <h1 className='text-white font-extrabold text-6xl pb-3.5'>4.9</h1>
            <p className='text-white text-2xl'>Rating</p>
        </div>
    </div>
    </div>
  )
}
