import React from 'react';

const NavBar = () => {
    return (
        <div className='container mx-auto px-15'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='font-bold'><a>Products</a></li>
                            <li className='font-bold'><a>Features</a></li>
                            <li className='font-bold'><a>FAQ</a></li>
                            <li className='font-bold'><a>Pricing</a></li>
                            <li className='font-bold'><a>Testimonials</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src={"https://i.ibb.co.com/ZzyWs6bb/Digi-Tools.png"} /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold'><a>Products</a></li>
                        <li className='font-bold'><a>Features</a></li>
                        <li className='font-bold'><a>Pricing</a></li>
                        <li className='font-bold'><a>Testimonials</a></li>
                        <li className='font-bold'><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-6 flex items-center">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        <span className="badge badge-sm indicator-item">0</span>
                    </div>
                    <h1 className='text-[#101727] font-semibold'>Login</h1>
                    <a className="btn bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white rounded-full p-5">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;