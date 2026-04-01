import React from 'react'
import { SiTicktick } from 'react-icons/si'

export const Offer = () => {
    return (
        <div className='mt-32 text-center'>
            <h1 className='font-extrabold text-5xl pt-32'>Get Started in 3 Steps</h1>
            <p className='text-gray-500 py-5'>Start using premium digital tools in minutes, not hours.</p>
            <div className="card container grid lg:grid-cols-3 gap-8 mx-auto bg-base-100 mt-8">
                <div className="card-body border border-gray-100 bg-[#F9FAFC] shadow-sm rounded-xl">
                    <div className="text-left">
                        <h2 className="text-3xl font-bold">Starter</h2>
                        <p className='text-gray-500 pt-1.5 pb-6'>Perfect for getting started</p>
                        <span className="text-4xl font-extrabold">$0<span className="text-gray-500 text-xl font-normal">/Month</span></span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='#30B868' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] text-gray-500'>Access to 10 free tools</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='#30B868' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] text-gray-500'>Basic templates</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='#30B868' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] text-gray-500'>Community support</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='#30B868' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] text-gray-500'>1 project per month</span>
                            </div>
                        </div>
                    </ul>
                    <div className="mt-28">
                        <button className="btn btn-primary btn-block btn-lg rounded-3xl font-normal ">Get Started Free</button>
                    </div>
                </div>
                <div className="card-body bg-[#4F39F6] rounded-xl text-white">
                    <div className="text-left relative">
                        <p className='badge badge-warning absolute -top-10 left-[36%] badge-xl rounded-4xl'>Most Popular</p>
                        <h2 className="text-3xl font-bold">Pro</h2>
                        <p className='pt-1.5 pb-6'>Best for professionals</p>
                        <span className="text-4xl font-extrabold">$29<span className="text-xl font-normal">/Month</span></span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='white' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] '>Access to all premium tools</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='white' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] '>Unlimited templates</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='white' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] '>Priority support</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='white' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] '>Unlimited projects</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='white' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] '>Cloud sync</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='white' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] '>Advanced analytics</span>
                            </div>
                        </div>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary bg-white text-[#4F39F6] btn-block btn-lg rounded-3xl font-bold">Get Started Free</button>
                    </div>
                </div>
                <div className="card-body border border-gray-100 bg-[#F9FAFC] shadow-sm rounded-xl">
                    <div className="text-left">
                        <h2 className="text-3xl font-bold">Enterprise</h2>
                        <p className='text-gray-500 pt-1.5 pb-6'>For teams and businesses</p>
                        <span className="text-4xl font-extrabold">$99<span className="text-gray-500 text-xl font-normal">/Month</span></span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='#30B868' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] text-gray-500'>Everything in Pro</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='#30B868' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] text-gray-500'>Team collaboration</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='#30B868' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] text-gray-500'>Custom integrations</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='#30B868' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] text-gray-500'>Dedicated support</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='#30B868' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] text-gray-500'>SLA guarantee</span>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='flex items-center gap-1.5' ><SiTicktick color='#30B868' size={20}>
                            </SiTicktick>
                                <span className='text-[1.1rem] text-gray-500'>Custom branding</span>
                            </div>
                        </div>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block btn-lg rounded-3xl font-normal ">Get Started Free</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
