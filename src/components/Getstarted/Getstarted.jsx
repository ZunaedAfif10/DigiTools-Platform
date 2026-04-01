import React from 'react'
import user from '../../assets/user.png'
import pack from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

export const Getstarted = () => {
  return (
    <div className='mt-32 text-center bg-[#F9FAFC]'>
        <h1 className='font-extrabold text-5xl pt-32'>Get Started in 3 Steps</h1>
        <p className='text-gray-500 py-5'>Start using premium digital tools in minutes, not hours.</p>
        <div className='container mx-auto grid lg:grid-cols-3 gap-8 pt-3.5'>
            <div className='rounded-xl bg-white p-20 space-y-6'>
                <img src={user}  className='bg-blue-100 rounded-full p-3 inline-block' alt="" />
                <h2 className='font-bold text-2xl'>Create Account</h2>
                <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className='rounded-xl bg-white p-20 space-y-6'>
                <img src={pack}  className='bg-blue-100 rounded-full p-3 inline-block' alt="" />
                <h2 className='font-bold text-2xl'>Choose Products</h2>
                <p className='text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
            </div>
            <div className='rounded-xl bg-white p-20 space-y-6'>
                <img src={rocket}  className='bg-blue-100 rounded-full p-3 inline-block' alt="" />
                <h2 className='font-bold text-2xl'>Start Creating</h2>
                <p className='text-gray-500'>Download and start using your premium tools immediately.</p>
            </div>
        </div>
    </div>
  )
}
