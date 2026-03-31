import React from 'react'
import image from '../../assets/products/shopping-cart.png'

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm lg:pb-3 lg:mb-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='font-semibold'><a>Products</a></li>
                        <li className='font-semibold'><a>Features</a></li>
                        <li className='font-semibold'><a>Pricing</a></li>
                        <li className='font-semibold'><a>Testimonials</a></li>
                        <li className='font-semibold'><a>FAQ</a></li>
                    </ul>
                </div>
                <h1 className="text-4xl hidden lg:block lg:ml-40 font-bold text-[#4F39F6]">DigiTools</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    <li className='font-semibold'><a>Products</a></li>
                    <li className='font-semibold'><a>Features</a></li>
                    <li className='font-semibold'><a>Pricing</a></li>
                    <li className='font-semibold'><a>Testimonials</a></li>
                    <li className='font-semibold'><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end lg:mr-40">
                <img src={image} className='pr-4' alt="" />
                <h3 className='font-semibold'>Login</h3>
                <a className="btn bg-[#4F39F6] text-white ml-4 rounded-3xl">Get Started</a>
            </div>
        </div>
    )
}
