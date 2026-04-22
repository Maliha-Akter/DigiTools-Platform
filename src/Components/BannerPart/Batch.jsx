import React from 'react';

const Batch = () => {
    return (
        <div className='w-full  min-h-[25vh] bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white flex justify-evenly items-center px-[15%] py-4'>
            <div>
                <h1 className='text-7xl font-bold'>50K+</h1>
                <p className='text-2xl'>Active Users</p>
            </div>
            <div className="divider divider-horizontal before:bg-white after:bg-white py-[4%]"></div>
            <div>
                <h1 className='text-7xl font-bold'>200+</h1>
                <p className='text-2xl'>Premium Tools</p>
            </div>
            <div className="divider divider-horizontal before:bg-white after:bg-white py-[4%]"></div>
            <div>
                <h1 className='text-7xl font-bold'>4.9</h1>
                <p className='text-2xl'>Rating</p>
            </div>
        </div>
    );
};

export default Batch;