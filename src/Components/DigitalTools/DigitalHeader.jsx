import React from 'react';
import DigitalCard from './DigitalCard';
import DigitalCart from './DigitalCart';

const DigitalHeader = ({ digitalData, selectCart, setSelectCart, selectedId, setSelectedId, handleSelectCart, cartArray, setCartArray, handleCartArray, deleteCart }) => {
    return (
        <div>
            <div className='mt-30'>
                <div className='text-center space-y-5'>
                    <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                    <p className=''>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    <div className='flex items-center gap-4 justify-center'>
                        <button className={`btn rounded-full py-5 px-6 ${selectCart === 'product' ?
                            'bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white'
                            :
                            'bg-white'
                            }`} onClick={() => {
                                setSelectCart("product");
                                handleSelectCart("product");
                            }}>Products</button>
                        <button className={`btn rounded-full py-5 px-6 ${selectCart === 'cart' &&
                            'bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white'
                            }`} onClick={() => {
                                setSelectCart("cart");
                                handleSelectCart("cart");
                                setSelectedId(null);
                            }}>Cart ({cartArray.length})</button>

                    </div>
                </div>
            </div>
            <div>
                {
                    selectCart === "product" ?
                        <div className='grid lg:grid-cols-3 md:grid-cols-2  container mx-auto space-y-8 mt-10'>
                            {
                                digitalData.map(data => {
                                    return <DigitalCard data={data} selectCart={selectCart} setSelectCart={setSelectCart} cartArray={cartArray} setCartArray={setCartArray} handleCartArray={handleCartArray} selectedId={selectedId} setSelectedId={setSelectedId}></DigitalCard>
                                })
                            }
                        </div>
                        :
                        <DigitalCart selectCart={selectCart} selectedId={selectedId} setSelectedId={setSelectedId} cartArray={cartArray} setCartArray={setCartArray} handleCartArray={handleCartArray} deleteCart={deleteCart}></DigitalCart>
                }
            </div>
        </div>
    );
};

export default DigitalHeader;