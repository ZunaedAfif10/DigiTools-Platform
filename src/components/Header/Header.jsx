import React from 'react'
import dot from '../../assets/dot.png'
import { CiPlay1 } from 'react-icons/ci'
import banner from '../../assets/banner.png'

export const Header = () => {
  return (
    <div>
        <div className='lg:max-w-[65%] mx-auto flex justify-between'>
            <div>
                <div className='flex bg-[#E1E7FF] inline-flex py-2 px-4 rounded-3xl'>
                    <img src={dot} className='mr-1' width={23} alt="" />
                    <h1 className='text-[#4F39F6]'>New: AI-Powered Tools Available</h1>
                </div>
                <h1 className='text-7xl font-extrabold mb-4 mt-6 leading-20'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='leading-8 text-gray-500'>Access premium AI tools, design assets, templates, and productivity <br />software—all in one place. Start creating faster today. <br />Explore Products</p>
                <div className='mt-8'>
                    <button className='btn btn-primary mr-2.5 rounded-3xl'>Explore Products</button>
                    <button className='btn rounded-3xl bg-white text-[#4F39F6] border border-[#4F39F6]'><CiPlay1 size='20'></CiPlay1> Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={banner} alt="" className='mb-24'/>
            </div>
        </div>
    </div>
  )
}
