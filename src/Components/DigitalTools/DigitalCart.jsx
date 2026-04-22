import React from 'react';

const DigitalCart = ({ cartArray, setCartArray, deleteCart }) => {
    let count = 0;
    cartArray.forEach(cart => {
        count = count + cart.price;
    });

    const emptyCart = () => {
        setCartArray([]);
    }
    return (
        <div className='mx-auto container shadow-2xl p-18'>
            <h1 className='text-4xl font-bold mb-15'>Your Cart</h1>
            {
                cartArray.length === 0 ?
                    <div className='flex justify-center'>
                        <div className="card card-border bg-[#E1E7FF] w-1/2">
                            <div className="card-body">
                                <h2 className="text-center text-2xl font-bold">Your Cart is Empty !!</h2>
                                <p className='text-xl text-center'>Looks like you haven’t added anything yet.  
                Add products to your cart or explore our digital tools.</p>
                            </div>
                        </div>
                    </div>
                    :
                    <>
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
                                                <button onClick={() => deleteCart(cart)} className=' btn text-red-500 font-bold'>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
            }
            <div className='flex justify-between px-10 mt-10'>
                <p className='text-xl font-semibold'>Total</p>
                <p className='text-xl font-semibold'>${count}</p>
            </div>
            <div onClick={() => emptyCart()} className='mx-auto  flex justify-center mt-12'>
                <button className="btn bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white rounded-full p-5 w-[95%]  ">Proceed to Checkout</button>
            </div>
        </div>

    );
};

export default DigitalCart;