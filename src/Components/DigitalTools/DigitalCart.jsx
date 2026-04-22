import React from 'react';

const DigitalCart = ({ cartArray,setCartArray}) => {
    return (
        <div className='mx-auto container shadow-2xl p-18'>
            <h1 className='text-4xl font-bold mb-15'>Your Cart</h1>
            {
                cartArray.map(cart => {
                    return (
                        <div className='p-14 shadow-xl'>
                            <div className=" flex justify-between bg-base-100 mx-auto container ">
                                <div className='flex gap-4 items-center'>
                                    <figure className='flex justify-start'>
                                        <img
                                            src={cart.icon} />
                                    </figure>
                                    <div className='flex flex-col'>
                                        <h2 className="card-title">
                                            {cart.name}
                                        </h2>
                                        <p>${cart.price}/month</p>
                                    </div>
                                </div>
                                <div>
                                    <button className=' btn text-red-500 font-bold'>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    );
};

export default DigitalCart;