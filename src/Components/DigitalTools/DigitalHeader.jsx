import React from 'react';
import DigitalCard from './DigitalCard';

const DigitalHeader = ({digitalData}) => {
    return (
        <div>
            <div className='mt-30'>
                <div className='text-center space-y-5'>
                    <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                    <p className=''>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    <div className='flex items-center gap-4 justify-center'>
                        <button className="btn bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white rounded-full py-5 px-6">Products</button>
                        <button className="btn">Cart (2)</button>
                    </div>
                </div>

            </div>
            <div className='grid lg:grid-cols-3 container mx-auto space-y-8 mt-10'>
                {
                    digitalData.map(data => {
                        return <DigitalCard data={data}></DigitalCard>
                    })
                }
            </div>
        </div>
    );
};

export default DigitalHeader;