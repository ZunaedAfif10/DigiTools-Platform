import React from 'react'
import { CiPlay1 } from 'react-icons/ci'

export const Moreinfo = () => {
  return (
    <div className='text-center bg-[#4F39F6]'>
      <div className='lg:max-w-full max-w-[90%] mx-auto'>
        <h1 className='pt-32 text-white font-extrabold text-4xl'>Ready to Transform Your Workflow?</h1>
        <p className='text-white pt-4 leading-7 pb-10'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
        <button className='btn btn-primary btn-lg bg-white text-[#4F39F6] mr-3.5 rounded-3xl'>Explore Products</button>
        <button className='btn rounded-3xl btn-lg text-white bg-[#4F39F6] border border-white'>View Pricing</button>
        <p className='text-white pt-4 pb-32'>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  )
}
