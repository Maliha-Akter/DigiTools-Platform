import React from 'react';

const PricingOffer = () => {
    return (
        <div>
            <div className='text-center space-y-5'>
                <h1 className='text-6xl font-bold'>Simple, Transparent Pricing</h1>
                <p className='text-xl'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='container mx-auto mt-18 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-20 '>
                <div className="card  bg-base-100 shadow-xl py-4 w-full max-w-sm mx-auto">
                    <div className="card-body">
                        {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
                        <div className="flex flex-col justify-between space-y-2">
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p className='mb-6'>Perfect for getting started</p>
                            <span className="text-4xl font-bold">$0/month</span>
                        </div>
                        <ul className="mt-8 flex flex-col gap-2  ">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-18">
                            {/* <button className="btn btn-primary btn-block">Subscribe</button> */}
                            <button className="btn bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white rounded-full p-5 w-full font-bold text-xl">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white shadow-xl py-4 w-full max-w-sm mx-auto">
                    <div className="card-body">
                        <span className="bg-[#FEF3C6] text-[#BB4D00] inline-block w-fit p-2 rounded-full text-xl absolute -top-5 md:left-1/3 right-2">Most Popular</span>
                        <div className="flex flex-col justify-between space-y-2">
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p className='mb-6'>Best for professionals</p>
                            <span className="text-4xl font-bold">$29/month</span>
                        </div>
                        <ul className="mt-8 flex flex-col gap-2 ">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <button className="btn bg-base-100 rounded-full p-5 w-full">
                                <span className="bg-linear-to-l from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-xl">
                                    Subscribe
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl py-4 w-full max-w-sm mx-auto">
                    <div className="card-body">
                        {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
                        <div className="flex flex-col justify-between space-y-2">
                            <h2 className="text-3xl font-bold">Enterpriser</h2>
                            <p className='mb-6'>For teams and businesses</p>
                            <span className="text-4xl font-bold">$99/month</span>
                        </div>
                        <ul className="mt-8 flex flex-col gap-2  ">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-4">
                            {/* <button className="btn btn-primary btn-block">Subscribe</button> */}
                            <button className="btn bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white rounded-full p-5 w-full font-bold text-xl">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingOffer;
