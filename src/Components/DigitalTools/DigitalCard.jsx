import React from 'react';
import { toast } from 'react-toastify';

const DigitalCard = ({ data, selectCart, setSelectCart, cartArray, setCartArray, handleCartArray, selectedId, setSelectedId }) => {
    const { name, description, price, period, tag, tagType, features, icon } = data;
    return (
        <div>
            <div className="bg-base-100 w-95 mx-auto p-4 rounded-2xl shadow-2xl md:w-[80%]">
                <div className='flex justify-between'>
                    <figure>
                        <img className='ml-4'
                            src={icon}
                            alt="Shoes" />
                    </figure>
                    <h2 className={`font-semibold text-sm rounded-full px-3 py-2 text-center h-1/2 ${tagType === "new"
                        ? "bg-green-200 text-green-600"
                        : tagType === "popular"
                            ? "bg-purple-300 text-purple-800"
                            : tagType === "best-seller"
                                ? "bg-yellow-200 text-yellow-500"
                                : ""
                        }`}>
                        {tag}
                    </h2>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p>{description}</p>
                    <h3><span className='font-bold text-2xl'>${price}</span>/<span>{period}</span> </h3>
                    <ul>
                        {
                            features.map(feature => (<li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>))
                        }
                    </ul>
                    <div className="justify-start ">
                        <button onClick={() => {
                            handleCartArray(data);
                            setSelectedId(data.id);
                            toast.success("Added to cart!");
                            
                        }} className={`btn text-white rounded-full py-6 px-5 w-full ${selectedId === data.id ?
                            "bg-green-500"
                            : "bg-linear-to-l from-[#4F39F6] to-[#9514FA]"
                            }`}>{
                                selectedId === data.id ?
                                    "Added to cart" 
                                    : 
                                    "Buy Now"
                            }</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default DigitalCard;