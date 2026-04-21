import React from 'react';
import { GrPlay } from "react-icons/gr";

const Banner = () => {
    return (
        <div>
            <div className="container mx-auto bg-base-200 min-h-screen px-15 mt-15">
                <div className="flex flex-col lg:flex-row-reverse items-center w-full ">
                    <div className="flex-1 flex ">
                        <img
                            src={"https://i.ibb.co.com/ZzTNzJfP/banner.png"}
                            className=" rounded-lg shadow-2xl ml-auto"
                        />
                    </div>
                    <div className='space-y-2 flex-1 w-100 '>
                        <div className='flex gap-2 items-center bg-[#e4e2ff] w-1/2 p-2 rounded-full'>
                            <img className='border border-[#E1E7FF] p-1.5 w-6 rounded-full bg-linear-to-l from-[#b0aadc] to-[#bc96d9]' src={"https://i.ibb.co.com/ynmDKPqT/Rectangle-4.png"} alt="" />
                            <h1 className='text-xl  bg-linear-to-l from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</h1>
                        </div>
                        <h1 className="text-6xl font-bold">Supercharge Your <br />Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today. <br />
                            Explore Products
                        </p>
                        <div className='flex gap-4'>
                            <button className="btn bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white rounded-full p-5">Explore Products</button>
                            <div className='p-[2px] bg-linear-to-l from-[#4F39F6] to-[#9514FA] rounded-full '>
                                <button className="px-6 py-2 bg-white rounded-full"><div className='flex gap-2 items-center'><GrPlay />Watch Demo</div></button>
                            </div>
                            {/* <div className="p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 inline-block">
                                <button className="px-6 py-2 bg-white rounded-full flex items-center gap-2">
                                    ▶ Watch Demo
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;