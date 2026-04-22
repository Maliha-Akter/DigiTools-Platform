import React from 'react';

const TransformWork = () => {
    return (
        <div className='mt-24 mb-20  w-full  min-h-[50vh] bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white flex flex-col justify-evenly items-center px-[15%] py-4'>
            <div className='text-center space-y-4'>
                <h1 className='text-5xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p className=''>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
            </div>
            <div>
                <div className='flex gap-4'>
                    <button className="btn bg-base-100 rounded-full p-7">
                        <span className="bg-linear-to-l from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-xl">
                            Explore Products
                        </span>
                    </button>
                    <button className='btn bg-transparent text-white rounded-full px-10 py-7 font-bold text-xl'>
                        View Pricing
                    </button>
                </div>
                <p className='mt-7'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default TransformWork;