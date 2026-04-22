import React from 'react';

const GetStart = () => {
    return (
        <div className='mt-50 space-y-4 mb-70 container mx-auto'>
            <div className='text-center space-y-4 mb-10'>
                <h1 className='text-6xl font-bold'>Get Started in 3 Steps</h1>
                <p className='text-xl'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='flex flex-wrap md:flex-row md:justify-between justify-center gap-2 mb-20 '>
                <div className="card bg-base-100 shadow-2xl px-4 py-5 md:w-[30%] max-w-sm ">
                    <div className='flex justify-end'>
                        <img src={"https://i.ibb.co.com/wNNQgDV5/one.png"} className='h-full w-auto' alt="" />
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src={"https://i.ibb.co.com/nM7bn7xz/Group-6.png"}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center space-y-3">
                        <h2 className="card-title text-3xl font-bold">Create Account</h2>
                        <p className='text-xl'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-2xl px-4 py-5 md:w-[30%] max-w-sm">
                    <div className='flex justify-end'>
                        <img src={"https://i.ibb.co.com/WWH9Pqq2/two.png"} className='h-full w-auto' alt="" />
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src={"https://i.ibb.co.com/MD1K0N66/Group-6-1.png"}
                            alt="Products"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center space-y-3">
                        <h2 className="card-title text-3xl font-bold">Choose Products</h2>
                        <p className='text-xl'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-2xl px-4 py-5 md:w-[30%] max-w-sm">
                    <div className='flex justify-end'>
                        <img src={"https://i.ibb.co.com/9kftM8ZH/three.png"} className='h-full w-auto' alt="" />
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src={"https://i.ibb.co.com/NBDC6Zn/Group-6-2.png"}
                            alt="Products"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center space-y-3">
                        <h2 className="card-title text-3xl font-bold">Choose Products</h2>
                        <p className='text-xl'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStart;