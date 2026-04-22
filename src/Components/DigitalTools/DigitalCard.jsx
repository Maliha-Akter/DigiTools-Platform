import React from 'react';

const DigitalCard = ({ data }) => {
    const { name, description, price, period, tag, tagType, features, icon } = data;
    return (
        <div>
            <div className="bg-base-100 w-110 mx-auto p-4 rounded-2xl shadow-2xl">
                <div className='flex justify-between'>
                    <figure>
                        <img className='ml-4'
                            src={icon}
                            alt="Shoes" />
                    </figure>
                    <h2>{tag}</h2>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p>{description}</p>
                    <h3>${price}/mo</h3>
                    <ul>
                        {
                            features.map(feature => (<li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>))
                        }
                    </ul>
                    <div className="justify-start ">
                        <button className="btn bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white rounded-full py-6 px-5 w-full">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default DigitalCard;